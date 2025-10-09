import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  StyleSheet, 
  Alert, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView 
} from 'react-native';

const CadastroScreen = () => {
  // 1. Estados para armazenar os valores do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState(''); // Armazenamos como string inicialmente
  const [documento, setDocumento] = useState('');

  // 2. Função para lidar com o clique do botão "Cadastrar"
  const handleCadastro = () => {
    // Validação básica
    if (!nome || !email || !idade || !documento) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Tentativa de conversão da idade para número inteiro
    const idadeInt = parseInt(idade, 10);
    if (isNaN(idadeInt)) {
      Alert.alert('Erro', 'A idade deve ser um número válido.');
      return;
    }
    
    // Simulação do envio dos dados
    const dados = {
      nome: nome,
      email: email,
      idade: idadeInt,
      documento: documento
    };

    // Exibe os dados cadastrados em um alerta
    Alert.alert(
      'Cadastro Realizado!',
      `Nome: ${dados.nome}\nE-mail: ${dados.email}\nIdade: ${dados.idade}\nDocumento: ${dados.documento}`,
      [{ text: 'OK' }]
    );

    // Opcional: Limpar o formulário após o cadastro
    setNome('');
    setEmail('');
    setIdade('');
    setDocumento('');
  };

  // 3. Renderização do componente
  return (
    // KeyboardAvoidingView ajuda a garantir que os campos de texto não sejam cobertos pelo teclado
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Tela de Cadastro Simples</Text>

        {/* Campo Nome (String) */}
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNome}
          value={nome}
          placeholder="Digite seu nome completo"
          keyboardType="default"
        />

        {/* Campo E-mail (String) */}
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="exemplo@dominio.com"
          keyboardType="email-address" // Teclado otimizado para e-mail
          autoCapitalize="none"
        />

        {/* Campo Idade (Int) */}
        <Text style={styles.label}>Idade</Text>
        <TextInput
          style={styles.input}
          onChangeText={setIdade}
          value={idade}
          placeholder="Sua idade"
          keyboardType="numeric" // Teclado numérico
          maxLength={3} // Limita o tamanho para algo razoável para idade
        />

        {/* Campo Documento (String) */}
        <Text style={styles.label}>Documento</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDocumento}
          value={documento}
          placeholder="Número do documento (ex: CPF)"
          keyboardType="default"
        />

        {/* Botão Cadastrar */}
        <View style={styles.buttonContainer}>
          <Button
            title="Cadastrar"
            onPress={handleCadastro}
            color="#007AFF" // Cor padrão para destaque
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// 4. Estilos (Styling)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40, // Espaço no topo para evitar a área de status bar
    backgroundColor: '#FDF5E6',
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#FFB6C1',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 5,
    color: '#FFB6C1',
  },
  input: {
    height: 45,
    borderColor: '#FFE4E1',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 30,
    borderRadius: 8,
    overflow: 'hidden', // Necessário para aplicar o borderRadius no Android
  }
});

export default CadastroScreen;

// Se você estiver usando o Expo ou um projeto com a estrutura padrão, 
// certifique-se de que o seu arquivo de entrada (geralmente App.js ou index.js) 
// esteja importando e exportando este componente.
// Exemplo para App.js padrão:
/*
import CadastroScreen from './CadastroScreen'; // Se o arquivo se chamar CadastroScreen.js
export default CadastroScreen; 
*/