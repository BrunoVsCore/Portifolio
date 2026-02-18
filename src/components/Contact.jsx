import styled from 'styled-components';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;
const Input = styled.input`
  padding: 20px;
  background-color: #f0ecec;
  border: none;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
`;
const Button = styled.button`
  background-color: #ec5bbc;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({}); // Estado para os erros

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(ref.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Validação
    const newErrors = {};
    if (!name) newErrors.name = 'O campo Nome é obrigatório.';
    if (!email) newErrors.email = 'O campo Email é obrigatório.';
    if (!message) newErrors.message = 'O campo Mensagem é obrigatório.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Enviar o formulário se não houver erros
      emailjs
        .sendForm('service_pzbnd7a', 'template_4xa2tsn', ref.current, {
          publicKey: 'vstWlim3Uq3qH72zd',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setSuccess(true);
          },
          (error) => {
            console.log('FAILED...', error.text);
            setSuccess(false);
          }
        );
    }
  };

  return (
    <Section id="Contact">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Entre em contato comigo</Title>
            <Input placeholder="Nome" name="name" />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            <Input placeholder="Email" name="email" />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            <TextArea
              placeholder="Escreva sua mensagem"
              name="message"
              rows={10}
            />
            {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
            <Button type="submit">Enviar</Button>
            {success &&
              'Sua Mensagem foi enviada com sucesso. Entrarei em contato com você em breve.'}
          </Form>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
};

export default Contact;
