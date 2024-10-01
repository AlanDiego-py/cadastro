import { useState, useEffect } from 'react'
import {Box, Button, Input, FormControl, FormLabel, Textarea, Heading} from '@chakra-ui/react'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [coment, setComent] = useState('')

  useEffect(() => {
    const savedName = localStorage.getItem('name')
    const savedEmail = localStorage.getItem('email')
    const savedComent = localStorage.getItem('coment')

    if(savedName) setName(savedName)
    if(savedEmail) setEmail(savedEmail)
    if(savedComent) setComent(savedComent)
  }, [])


// Função para salvar no localstorage
  const Submit = () => {
    if (name && email && coment) {
      localStorage.setItem('name', name)
      localStorage.setItem('name', email)
      localStorage.setItem('name', coment)
      alert('Dados Salvos')

      setName('')
      setEmail('')
      setComent('')
    } else {
      alert('Preencha todos os campos antes de salvar')
    }
  }

  return (
    <Box p={6} maxW={"600px"} mx={"auto"} justifyContent="center" alignItems="center">
      <Heading as={"h1"} mb={6} textAlign={"center"}>
        Cadastro de Comentários
      </Heading>

      <FormControl id="name" mb={4}>
        <FormLabel>Nome</FormLabel>
        <Input 
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Digite seu nome'
        />
      </FormControl>

      <FormControl id='email' mb={4}>
        <FormLabel>Email</FormLabel>
        <Input 
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Digite seu email'
        />
      </FormControl>

      <FormControl id='coment' mb={4}>
        <FormLabel>Comentário</FormLabel>
        <Textarea 
        value={coment}
        onChange={(e) => setComent(e.target.value)}
        placeholder='Deixe seu comentário'
        />
      </FormControl>

      <Button colorScheme='teal' variant='solid'  onClick={Submit}>
        Enviar
      </Button>
    </Box>
  )
}

export default App
