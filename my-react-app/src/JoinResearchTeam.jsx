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

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
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
    background: #fdf6ed;
    overflow-x: hidden;
  }
`;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #fff9f0 0%, #fdf6ed 50%, #fff3e0 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(227, 176, 109, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(227, 176, 109, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
  animation: ${fadeIn} 0.8s ease-out;
`;

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #e3b06d;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Tagline = styled.p`
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
`;

const ContentBox = styled.div`
  background: white;
  border-radius: 24px;
  padding: 70px 60px;
  box-shadow: 
    0 25px 80px rgba(227, 176, 109, 0.2),
    0 10px 30px rgba(0, 0, 0, 0.05);
  border: 2px solid #e3b06d;
  max-width: 650px;
  width: 100%;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out 0.2s both;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #e3b06d, #d19a50, #e3b06d);
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`;

const Badge = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, #e3b06d, #d19a50);
  color: white;
  padding: 10px 24px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 35px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  box-shadow: 0 4px 15px rgba(227, 176, 109, 0.3);
  animation: ${float} 3s ease-in-out infinite;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #2c1810;
  margin-bottom: 25px;
  line-height: 1.2;
  background: linear-gradient(135deg, #2c1810, #e3b06d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 45px;
  font-weight: 400;
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 50px;
  text-align: left;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 20px 25px;
  background: linear-gradient(135deg, #fff9f0, #fff3e0);
  border-radius: 16px;
  border: 1px solid #ffe8cc;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateX(8px);
    box-shadow: 0 8px 25px rgba(227, 176, 109, 0.15);
    
    &::before {
      left: 100%;
    }
  }
`;

const FeatureIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${props => props.checked ? 
    'linear-gradient(135deg, #e3b06d, #d19a50)' : 
    'linear-gradient(135deg, #f0f0f0, #e0e0e0)'};
  border: 2px solid ${props => props.checked ? '#e3b06d' : '#ddd'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`;

const FeatureText = styled.span`
  font-size: 1.15rem;
  font-weight: 500;
  color: #333;
  flex: 1;
`;

const JoinButton = styled.button`
  background: linear-gradient(135deg, #e3b06d 0%, #d19a50 100%);
  color: white;
  border: none;
  padding: 20px 50px;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(227, 176, 109, 0.4);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(227, 176, 109, 0.5);
    
    &::before {
      left: 100%;
    }
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
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  animation: ${fadeIn} 0.3s ease;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 24px;
  padding: 0;
  max-width: 520px;
  width: 100%;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.4s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #e3b06d, #d19a50);
  }
`;

const ModalHeader = styled.div`
  padding: 35px 35px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 600;
  color: #2c1810;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #666;
  cursor: pointer;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: #f5f5f5;
    color: #333;
    transform: rotate(90deg);
  }
`;

const Form = styled.form`
  padding: 35px;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  color: #333;
  text-align: left;
  font-size: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
  background: #fafafa;

  &:focus {
    outline: none;
    border-color: #e3b06d;
    background: white;
    box-shadow: 0 0 0 4px rgba(227, 176, 109, 0.1);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: #999;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
  background: #fafafa;
  resize: vertical;
  min-height: 140px;

  &:focus {
    outline: none;
    border-color: #e3b06d;
    background: white;
    box-shadow: 0 0 0 4px rgba(227, 176, 109, 0.1);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: #999;
  }
`;

const FormActions = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  margin-top: 35px;
`;

const CancelButton = styled.button`
  background: transparent;
  color: #666;
  border: 2px solid #ddd;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    background: #f5f5f5;
    border-color: #999;
    color: #333;
    transform: translateY(-1px);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #e3b06d 0%, #d19a50 100%);
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(227, 176, 109, 0.3);
  font-size: 1rem;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(227, 176, 109, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
`;

const LoadingSpinner = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: ${keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `} 1s linear infinite;
  display: inline-block;
  margin-right: 10px;
`;

const SuccessMessage = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: white;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  border-left: 5px solid #e3b06d;
  display: flex;
  align-items: center;
  gap: 18px;
  animation: ${slideIn} 0.5s ease;
  z-index: 1001;
  max-width: 400px;
`;

const SuccessIcon = styled.div`
  font-size: 2rem;
  animation: ${pulse} 0.6s ease;
`;

const SuccessText = styled.div`
  text-align: left;
`;

const SuccessTitle = styled.h3`
  margin: 0 0 6px 0;
  color: #2c1810;
  font-size: 1.1rem;
  font-weight: 600;
`;

const SuccessDescription = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const JoinResearchTeam = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const features = [
    { text: "Access to Ancient Texts", checked: false },
    { text: "Expert Collaboration", checked: true },
    { text: "Global Community", checked: false }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
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
      <Container>
        <Header>
          <Logo>Shastra Samvad</Logo>
          <Tagline>Preserving Ancient Wisdom for Modern Times</Tagline>
        </Header>

        <ContentBox>
          <Badge>Research Opportunity</Badge>
          <Title>Join Our Research Team</Title>
          <Description>
            Collaborate with passionate researchers and scholars to explore ancient wisdom 
            and make meaningful contributions to spiritual knowledge. Be part of a community 
            dedicated to preserving and sharing sacred teachings.
          </Description>
          
          <FeaturesList>
            {features.map((feature, index) => (
              <FeatureItem key={index}>
                <FeatureIcon checked={feature.checked}>
                  {feature.checked ? "✓" : ""}
                </FeatureIcon>
                <FeatureText>{feature.text}</FeatureText>
              </FeatureItem>
            ))}
          </FeaturesList>

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
                  <SubmitButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner />
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </SubmitButton>
                </FormActions>
              </Form>
            </ModalContent>
          </ModalOverlay>
        )}

        {/* Success Message */}
        {showSuccess && (
          <SuccessMessage>
            <SuccessIcon>✅</SuccessIcon>
            <SuccessText>
              <SuccessTitle>Thank You!</SuccessTitle>
              <SuccessDescription>
                Your application has been received. We'll contact you shortly to discuss next steps.
              </SuccessDescription>
            </SuccessText>
          </SuccessMessage>
        )}
      </Container>
    </>
  );
};

export default JoinResearchTeam;