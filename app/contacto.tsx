import React, { useState } from 'react';
import {
    FlatList, Image,
    LayoutAnimation,
    Linking,
    ListRenderItem // Importamos el tipo para el renderItem
    ,
    Modal,
    Platform,
    SafeAreaView,
    StyleSheet, Text,
    TextInput,
    TouchableOpacity,
    UIManager,
    View
} from 'react-native';

// Activar LayoutAnimation en Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// 1. Definimos la estructura exacta que tendrá un Cliente
interface Client {
  id: string;
  name: string;
  phone: string;
  avatar: string;
}

export default function App() {
  // 2. Asignamos la interfaz Client al estado
  const [clients, setClients] = useState<Client[]>([
    { id: '1', name: 'Juan Bautista', phone: '80 4412 601', avatar: '11' },
    { id: '2', name: 'Ana Gómez', phone: '00 4412 409', avatar: '5' },
    { id: '3', name: 'Carlos Ruiz', phone: '20 4412 800', avatar: '12' }
  ]);

  // 3. Tipamos el resto de los estados
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  // 4. Tipamos los parámetros de las funciones
  const handleCall = (phoneNumber: string) => {
    const formattedNumber = phoneNumber.replace(/\s/g, '');
    Linking.openURL(`tel:${formattedNumber}`);
  };

  const openAddModal = () => {
    setCurrentId(null);
    setName('');
    setPhone('');
    setModalVisible(true);
  };

  const openEditModal = (client: Client) => {
    setCurrentId(client.id);
    setName(client.name);
    setPhone(client.phone);
    setModalVisible(true);
  };

  const saveClient = () => {
    if (!name.trim() || !phone.trim()) {
      alert('Por favor llena todos los campos');
      return;
    }

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    if (currentId) {
      setClients(clients.map(c => c.id === currentId ? { ...c, name, phone } : c));
    } else {
      const newClient: Client = {
        id: Date.now().toString(),
        name,
        phone,
        avatar: Math.floor(Math.random() * 70).toString()
      };
      setClients([...clients, newClient]);
    }
    setModalVisible(false);
  };

  const deleteClient = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setClients(clients.filter(c => c.id !== currentId));
    setModalVisible(false);
  };

  // 5. Usamos ListRenderItem de React Native para tipar el render de la lista
  const renderItem: ListRenderItem<Client> = ({ item }) => (
    <View style={styles.card}>
      <Image 
        source={{ uri: `https://i.pravatar.cc/150?img=${item.avatar}` }} 
        style={styles.avatar} 
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <TouchableOpacity onPress={() => handleCall(item.phone)} style={styles.phoneContainer}>
          <Text style={styles.phoneIcon}>📞</Text>
          <Text style={styles.phoneText}>{item.phone}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.editBtn} onPress={() => openEditModal(item)}>
        <Text style={styles.editBtnText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        {/* Encabezado */}
        <View style={styles.header}>
          <TouchableOpacity><Text style={styles.backBtn}>❮</Text></TouchableOpacity>
          <Text style={styles.headerTitle}>Gestión de Clientes</Text>
          <TouchableOpacity onPress={openAddModal}>
            <Text style={styles.addBtn}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Lista de Clientes */}
        <FlatList
          data={clients}
          keyExtractor={(item: Client) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
        />

        {/* Modal de Añadir/Editar */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{currentId ? 'Editar Cliente' : 'Nuevo Cliente'}</Text>
              
              <Text style={styles.label}>Nombre Completo</Text>
              <TextInput
                style={styles.input}
                placeholder="Ej. Juan Bautista"
                value={name}
                onChangeText={setName}
              />

              <Text style={styles.label}>Teléfono</Text>
              <TextInput
                style={styles.input}
                placeholder="Ej. 80 4412 601"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />

              <View style={styles.modalActions}>
                <TouchableOpacity style={[styles.modalBtn, styles.cancelBtn]} onPress={() => setModalVisible(false)}>
                  <Text style={styles.cancelBtnText}>Cancelar</Text>
                </TouchableOpacity>
                
                {currentId && (
                  <TouchableOpacity style={[styles.modalBtn, styles.deleteBtn]} onPress={deleteClient}>
                    <Text style={styles.deleteBtnText}>Eliminar</Text>
                  </TouchableOpacity>
                )}

                <TouchableOpacity style={[styles.modalBtn, styles.saveBtn]} onPress={saveClient}>
                  <Text style={styles.saveBtnText}>Guardar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

      </View>
    </SafeAreaView>
  );
}

// Los estilos se mantienen exactamente igual
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#333',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5eedc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(180, 140, 100, 0.3)',
  },
  backBtn: { fontSize: 24, color: '#c94f30', fontWeight: 'bold' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#6e271a' },
  addBtn: { fontSize: 30, color: '#c94f30', fontWeight: 'bold' },
  listContent: { padding: 15 },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fdfaf1',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: { width: 55, height: 55, borderRadius: 10, marginRight: 15 },
  infoContainer: { flex: 1, justifyContent: 'center' },
  name: { fontSize: 16, fontWeight: 'bold', color: '#2c2c2c', marginBottom: 4 },
  phoneContainer: { flexDirection: 'row', alignItems: 'center' },
  phoneIcon: { fontSize: 12, marginRight: 4 },
  phoneText: { fontSize: 13, color: '#555', fontWeight: 'bold' },
  editBtn: { backgroundColor: '#3b6b36', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 6 },
  editBtnText: { color: 'white', fontWeight: 'bold', fontSize: 14 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContent: {
    width: '85%', backgroundColor: '#fdfaf1', borderRadius: 16, padding: 20,
    shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.3, shadowRadius: 20, elevation: 10
  },
  modalTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  label: { fontSize: 13, fontWeight: 'bold', color: '#666', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 15, backgroundColor: '#fff' },
  modalActions: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 },
  modalBtn: { paddingVertical: 10, paddingHorizontal: 15, borderRadius: 6, marginLeft: 10 },
  cancelBtn: { backgroundColor: '#e0e0e0' },
  cancelBtnText: { color: '#333', fontWeight: 'bold' },
  deleteBtn: { backgroundColor: '#d84128', marginRight: 'auto', marginLeft: 0 },
  deleteBtnText: { color: 'white', fontWeight: 'bold' },
  saveBtn: { backgroundColor: '#3b6b36' },
  saveBtnText: { color: 'white', fontWeight: 'bold' },
});