import React, { useState } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";

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

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
    background: linear-gradient(135deg, #e3b06d 0%, #d4a574 100%);
    min-height: 100vh;
    line-height: 1.6;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 60px 20px 40px;
  background: transparent;
  justify-content: flex-start;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
  animation: ${fadeIn} 0.8s ease-out;
  width: 100%;
  max-width: 900px;
  margin-top: -20px; /* Slight upward adjustment for prominence */
`;

const Logo = styled.div`
  font-size: 3.8rem;
  font-weight: 800;
  color: #5c2000;
  margin-bottom: 16px;
  text-shadow: 2px 2px 6px rgba(253, 208, 86, 0.4);
  letter-spacing: -0.03em;
  line-height: 1.1;
`;

const Tagline = styled.p`
  font-size: 1.3rem;
  color: #7a4e2e;
  font-weight: 400;
  font-style: italic;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
`;

const ContentBox = styled.div`
  background: white;
  border-radius: 24px;
  padding: 70px 50px;
  box-shadow: 0 25px 80px rgba(227, 176, 109, 0.2);
  border: 1px solid rgba(227, 176, 109, 0.3);
  max-width: 900px;
  width: 100%;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out 0.3s both;
  position: relative;
  flex-grow: 0;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #2c1810;
  margin-bottom: 28px;
  line-height: 1.2;
  letter-spacing: -0.01em;
`;

const Description = styled.p`
  font-size: 1.15rem;
  color: #5a4a3a;
  line-height: 1.7;
  margin-bottom: 52px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const JoinButton = styled.button`
  background: linear-gradient(135deg, #e3b06d 0%, #d4a574 100%);
  color: white;
  border: none;
  padding: 20px 52px;
  font-size: 1.15rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 340px;
  margin-top: 12px;
  box-shadow: 0 6px 20px rgba(227, 176, 109, 0.3);

  &:hover {
    background: linear-gradient(135deg, #d19a50 0%, #c68a5a 100%);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(227, 176, 109, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 24px;
  padding: 0;
  max-width: 520px;
  width: 100%;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalHeader = styled.div`
  padding: 32px 32px 20px; /* Adjusted bottom padding for better spacing */
  display: flex;
  justify-content: space-between;
  align-items: center; /* Changed to center for proper vertical alignment */
  border-bottom: 1px solid #f0f0f0;
  min-height: 60px; /* Ensures consistent height for alignment */
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 600;
  color: #2c1810;
  flex: 1; /* Allows title to take space while keeping alignment */
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.75rem; /* Slightly reduced for better proportion */
  color: #999;
  cursor: pointer;
  width: 40px; /* Slightly smaller for subtlety */
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  flex-shrink: 0; /* Prevents shrinking */
  margin-left: 16px; /* Adds space from title if needed */

  &:hover {
    background: #f8f8f8;
    color: #666;
    transform: scale(1.05); /* Subtle scale on hover for professionalism */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(227, 176, 109, 0.3);
  }
`;

const Form = styled.form`
  padding: 32px;
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
  text-align: left;
  font-size: 0.95rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #e8e8e8;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
  background: #fafafa;
  color: #333;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #e3b06d;
    background: white;
    box-shadow: 0 0 0 3px rgba(227, 176, 109, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #e8e8e8;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  background: #fafafa;
  color: #333;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #e3b06d;
    background: white;
    box-shadow: 0 0 0 3px rgba(227, 176, 109, 0.1);
  }
`;

const FormActions = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #f0f0f0;
`;

const CancelButton = styled.button`
  background: transparent;
  color: #666;
  border: 2px solid #e8e8e8;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    background: #f8f8f8;
    border-color: #d0d0d0;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #e3b06d 0%, #d4a574 100%);
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(227, 176, 109, 0.3);

  &:hover {
    background: linear-gradient(135deg, #d19a50 0%, #c68a5a 100%);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(227, 176, 109, 0.4);
  }
`;

const SuccessOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(227, 176, 109, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: ${fadeIn} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(8px);
`;

const SuccessMessage = styled.div`
  background: white;
  border-radius: 24px;
  border: 3px solid #e3b06d;
  box-shadow: 0 20px 60px rgba(44, 24, 16, 0.25);
  max-width: 600px;
  width: 90vw;
  padding: 60px 48px;
  text-align: center;
  animation: ${fadeIn} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const SuccessHeading = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  color: #d58518;
  letter-spacing: 0.02em;
  margin: 0;
  text-shadow: 0 2px 8px rgba(227, 176, 109, 0.3);
`;

const SuccessText = styled.p`
  color: #422402;
  font-size: 1.125rem;
  font-weight: 500;
  margin: 0;
  line-height: 1.6;
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

    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        {/* Shastra Samvad Header */}
        <Header>
          <Logo>Shastra Samvad</Logo>
          <Tagline>Preserving Ancient Wisdom for Modern Times</Tagline>
        </Header>

        <ContentBox>
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

        {/* Success Message */}
        {showSuccess && (
          <SuccessOverlay>
            <SuccessMessage>
              <SuccessHeading>Thank You!</SuccessHeading>
              <SuccessText>
                Your application has been received successfully.<br />
                We'll contact you.
              </SuccessText>
            </SuccessMessage>
          </SuccessOverlay>
        )}
      </MainContainer>
    </>
  );
};

export default JoinResearchTeam;
