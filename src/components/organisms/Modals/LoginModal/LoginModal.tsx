import { useLoginModal } from './useLoginModal';

import { TextButton } from '@components/atoms/TextButton/TextButton';
import { FormFooterWrapper, FormWrapper } from '@components/ions/form';
import { Modal } from '@components/ions/modals';
import { Button } from '@components/molecules/Button/Button';
import { ModalComponent, ModalProps } from '@components/molecules/Modal/Modal';
import { TextField } from '@components/molecules/TextField/TextField';

import { RegisterText } from './LoginModal.styled';

export interface LoginModalProps extends Pick<ModalProps, 'onClose' | 'open'> {}

export const LoginModal = ({ onClose, open }: LoginModalProps) => {
    const {
        errors,
        handleClickLoginButton,
        handleFormSubmit,
        isLoading,
        isSubmitted,
        isValid,
        register,
    } = useLoginModal({ onClose });

    return (
        <ModalComponent
            onClose={onClose}
            open={open}
            preventCloseOutside
            width={648}
            closeButton
        >
            <Modal.Content>
                <Modal.Header>
                    <Modal.Title>Logowanie</Modal.Title>
                    <Modal.SubTitle>
                        Zaloguj się na swoje konto przy użyciu adresu email,
                        oraz hasła.
                    </Modal.SubTitle>
                </Modal.Header>
                <FormWrapper noValidate onSubmit={handleFormSubmit}>
                    <TextField
                        {...register('email')}
                        error={errors.email?.message}
                        label="E-mail"
                        type="email"
                    />
                    <TextField
                        {...register('password')}
                        error={errors.password?.message}
                        label="Hasło"
                        type="password"
                    />
                    <FormFooterWrapper>
                        <Button
                            disabled={!isValid && isSubmitted}
                            fullWidth
                            isLoading={isLoading}
                            variant="secondary"
                        >
                            Zaloguj się
                        </Button>
                        <RegisterText>
                            Nie masz konta?{' '}
                            <TextButton onClick={handleClickLoginButton}>
                                Zarejestruj się!
                            </TextButton>
                        </RegisterText>
                    </FormFooterWrapper>
                </FormWrapper>
            </Modal.Content>
        </ModalComponent>
    );
};
