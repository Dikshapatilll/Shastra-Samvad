import React, { useState } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Global Styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #e3b06d;
    min-height: 100vh;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }
`;

// Styled Components
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  background:#e3b06d;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 5px;
  animation: ${fadeIn} 0.8s ease-out;
  width: 100%;
`;

const Logo = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: #5c2000ff;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  color: #666;
  font-weight: 500;
  font-style: italic;
`;

const ContentBox = styled.div`
  background: white;
  border-radius: 20px;
  padding: 60px 50px;
  box-shadow: 0 20px 60px rgba(227, 176, 109, 0.15);
  border: 2px solid #000000;
  max-width: 900px;
  width: 100%;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out;
  position: relative;
  margin: auto;
  margin-top: 10px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: #000;
  }
`;

const Badge = styled.div`
  display: inline-block;
  background: #e3b06d;
  color: white;
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c1810;
  margin-bottom: 20px;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 40px;
`;

const JoinButton = styled.button`
  background: #e3b06d;
  color: white;
  border: none;
  padding: 16px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 300px;
  margin-top: 10px;

  &:hover {
    background: #724b18ff;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(227, 176, 109, 0.3);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 0;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  position: relative;
`;

const ModalHeader = styled.div`
  padding: 30px 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c1810;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #666;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: #f5f5f5;
  }
`;

const Form = styled.form`
  padding: 30px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #e3b06d;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: #e3b06d;
  }
`;

const FormActions = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  margin-top: 30px;
`;

const CancelButton = styled.button`
  background: transparent;
  color: #666;
  border: 2px solid #ddd;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f5f5f5;
  }
`;

const SubmitButton = styled.button`
  background: #e3b06d;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #553a14ff;
  }
`;

const SuccessMessage = styled.div`
  background: white;
  padding: 60px 50px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(227, 176, 109, 0.15);
  border: 2px solid #000000;
  max-width: 900px;
  width: 100%;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: #000;
  }
`;

const SuccessTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c1810;
  margin-bottom: 20px;
  line-height: 1.2;
`;

const SuccessDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const BackToFormButton = styled.button`
  background: #e3b06d;
  color: white;
  border: none;
  padding: 16px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 300px;
  margin-top: 10px;

  &:hover {
    background: #d19a50;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(227, 176, 109, 0.3);
  }
`;

const JoinResearchTeam = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setShowModal(false);
    setShowSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleBackToForm = () => {
    setShowSuccess(false);
  };

  return (
    <>
      <GlobalStyle />
      
      {/* Shastra Samvad Header */}
      <Header>
        <Logo>Shastra Samvad</Logo>
        <Tagline>Preserving Ancient Wisdom for Modern Times</Tagline>
      </Header>

      <MainContainer>
        {/* Show either the form or success message */}
        {showSuccess ? (
          <SuccessMessage>
            <SuccessTitle>Application Submitted Successfully!</SuccessTitle>
            <SuccessDescription>
              Thank you for your interest in joining our research team. We have received your application 
              and our team will review it carefully. We'll contact you via email within 2-3 business days 
              to discuss the next steps.
            </SuccessDescription>
            <BackToFormButton onClick={handleBackToForm}>
              Submit Another Application
            </BackToFormButton>
          </SuccessMessage>
        ) : (
          <ContentBox>
            <Badge>Research Opportunity</Badge>
            <Title>Join Our Research Team</Title>
            <Description>
              Collaborate with passionate researchers and scholars to explore ancient wisdom 
              and make meaningful contributions to spiritual knowledge. Be part of a community 
              dedicated to preserving and sharing sacred teachings.
            </Description>
            
            <JoinButton onClick={() => setShowModal(true)}>
              Join Research Team
            </JoinButton>
          </ContentBox>
        )}

        {/* Modal */}
        {showModal && (
          <ModalOverlay onClick={handleCloseModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalHeader>
                <ModalTitle>Join Research Team</ModalTitle>
                <CloseButton onClick={handleCloseModal}>×</CloseButton>
              </ModalHeader>
              
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="message">
                    Why are you interested in joining our research team?
                  </Label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share your background, interests, and what you hope to contribute..."
                    required
                  />
                </FormGroup>
                
                <FormActions>
                  <CancelButton type="button" onClick={handleCloseModal}>
                    Cancel
                  </CancelButton>
                  <SubmitButton type="submit">
                    Submit Application
                  </SubmitButton>
                </FormActions>
              </Form>
            </ModalContent>
          </ModalOverlay>
        )}
      </MainContainer>
    </>
  );
};

export default JoinResearchTeam;

