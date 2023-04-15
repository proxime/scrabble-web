import { useRegisterModal } from './useRegisterModal';

import { TextButton } from '@components/atoms/TextButton/TextButton';
import { FormFooterWrapper, FormWrapper } from '@components/ions/form';
import { Modal } from '@components/ions/modals';
import { Button } from '@components/molecules/Button/Button';
import { ModalComponent, ModalProps } from '@components/molecules/Modal/Modal';
import { TextField } from '@components/molecules/TextField/TextField';

import { LoginText } from './RegisterModal.styled';

export interface RegisterModalProps
    extends Pick<ModalProps, 'onClose' | 'open'> {}

export const RegisterModal = ({ onClose, open }: RegisterModalProps) => {
    const {
        errors,
        handleClickLoginButton,
        handleFormSubmit,
        isLoading,
        isSubmitted,
        isValid,
        register,
    } = useRegisterModal({ onClose });

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
                    <Modal.Title>Rejestracja</Modal.Title>
                    <Modal.SubTitle>
                        Rejestracja pozwoli Ci na grę multiplayer z innymi
                        graczami.
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
                        {...register('nick')}
                        error={errors.nick?.message}
                        label="Nazwa użytkownika"
                        type="text"
                    />
                    <TextField
                        {...register('password')}
                        error={errors.password?.message}
                        label="Hasło"
                        type="password"
                    />
                    <TextField
                        {...register('confirmPassword')}
                        error={errors.confirmPassword?.message}
                        label="Powtórz hasło"
                        type="password"
                    />
                    <FormFooterWrapper>
                        <Button
                            disabled={!isValid && isSubmitted}
                            fullWidth
                            isLoading={isLoading}
                            variant="secondary"
                        >
                            Zarejestruj się
                        </Button>
                        <LoginText>
                            Posiadasz już konto?{' '}
                            <TextButton onClick={handleClickLoginButton}>
                                Zaloguj się!
                            </TextButton>
                        </LoginText>
                    </FormFooterWrapper>
                </FormWrapper>
            </Modal.Content>
        </ModalComponent>
    );
};
