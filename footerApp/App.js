import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footer}>
        <View style={styles.topSection}>
          <Text style={styles.logo}>Clean.</Text>
          <Text style={styles.description}>
            O site Clean oferece produtos de skincare, maquiagem e cuidados com a pele, com um design minimalista e fácil de navegar. Além disso, possui um blog com dicas de beleza, cuidados diários e resenhas de produtos. Ideal para quem busca qualidade e informações sobre bem-estar.
          </Text>
        </View>
        
        <View style={styles.separator} />
        
        <View style={styles.bottomSection}>
          <View style={styles.connect}>
            <Text style={styles.title}>CONECTE-SE</Text>
            <View style={styles.iconRow}><Icon name="instagram" size={20} color="white" /><Text style={styles.link}> Instagram</Text></View>
            <View style={styles.iconRow}><Icon name="facebook" size={20} color="white" /><Text style={styles.link}> Facebook</Text></View>
            <View style={styles.iconRow}><Icon name="twitter" size={20} color="white" /><Text style={styles.link}> Twitter</Text></View>
            <View style={styles.iconRow}><Icon name="tiktok" size={20} color="white" /><Text style={styles.link}> Tiktok</Text></View>
          </View>
          
          <View style={styles.links}>
            <Text style={styles.title}>RELEVANTES</Text>
            <Text style={styles.link}>Produtos de Skincare</Text>
            <Text style={styles.link}>Produtos de Maquiagem</Text>
            <Text style={styles.link}>Produtos de Corpo</Text>
            <Text style={styles.link}>Blog</Text>
          </View>
          
          <View style={styles.newsletter}>
            <Text style={styles.title}>NEWSLETTER</Text>
            <Text style={styles.newsletterText}>Receba nossas novidades!</Text>
            <View style={styles.inputGroup}>
              <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#00DAC7" />
              <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#00DAC7" />
              <Text style={styles.button}>ASSINAR</Text>
            </View>
            <Text style={styles.newsletterText}>Ao clicar em “assinar” você concorda em receber e-mails da Re Petit e aceita a Politica de Privacidade e Termos e Uso.</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: 'transparent',
  },
  footer: {
    backgroundColor: '#00DAC7',
    padding: 20,
    alignItems: 'flex-start',
    borderRadius: 10,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Caveat',
    color: 'white',
    marginRight: 10,
  },
  description: {
    fontSize: 17,
    color: 'white',
    flex: 1,
    marginLeft: '40px',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'white',
    marginVertical: 20,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  connect: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  link: {
    color: 'white',
    fontSize: 14,
    marginLeft: 8,
    textDecorationLine: 'underline',
    lineHeight: 40, 
  },
  links: {
    alignItems: 'flex-start',
    marginBottom: 20,
  
  },
  newsletter: {
    alignItems: 'flex-start',
    flex: 1,
  },
  newsletterText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 10,
  },
  inputGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    textAlign: 'center',
    width: 120,
  },
  button: {
    backgroundColor: 'rgb(27, 175, 168)',
    padding: 10,
    borderRadius: 5,
     alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Distribui os itens com espaço entre eles
    width: '100%',
    flexWrap: 'wrap',
    gap: 450, // Adiciona espaçamento extra entre os itens
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10, // Adiciona espaço entre os elementos
  },
  

  
});

export default Footer;
