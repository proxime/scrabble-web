import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import { RegisterModalProps } from './RegisterModal';

import { yupResolver } from '@hookform/resolvers/yup';
import { PASSWORD_REGEX } from '@shared/regexs';
import { useRegisterMutation } from '@store/api/auth';
import { closeModal, openModal } from '@store/modalsSlice';

export const useRegisterModal = ({
    onClose,
}: Pick<RegisterModalProps, 'onClose'>) => {
    const dispatch = useDispatch();

    const [handleRegister, { isLoading, data: registerData, error }] =
        useRegisterMutation();

    const {
        register,
        formState: { errors, isValid, isSubmitted },
        handleSubmit,
    } = useForm<RegisterModalValues>({
        resolver: yupResolver(RegisterModalSchema),
        defaultValues: {
            confirmPassword: '',
            email: '',
            nick: '',
            password: '',
        },
    });

    const handleFormSubmit = handleSubmit(({ email, password, nick }) => {
        handleRegister({
            email,
            password,
            nick,
        });
    });

    const handleClickLoginButton = () => {
        dispatch(closeModal('register'));
        dispatch(openModal('login'));
    };

    useEffect(() => {
        if (registerData) {
            localStorage.setItem('token', registerData.token);
            localStorage.setItem('refreshToken', registerData.refreshToken);
            onClose();
        }
    }, [registerData]);

    useEffect(() => {
        if (error) {
        }
    }, [error]);

    return {
        errors,
        handleClickLoginButton,
        handleFormSubmit,
        isLoading,
        isSubmitted,
        isValid,
        register,
    };
};

export const RegisterModalSchema = yup.object({
    email: yup
        .string()
        .email('Wprowadź poprawny adres E-mail')
        .required('Wprowadź poprawny adres E-mail'),
    nick: yup.string().required('Wprowadź nazwę uzytkownika'),
    password: yup
        .string()
        .required('Wprowadź hasło')
        .matches(
            PASSWORD_REGEX,
            'Hasło musi zawierać minmum 8 znaków, jedną cyfrę, oraz jedną literę',
        ),
    confirmPassword: yup
        .string()
        .required('Wprowadź ponownie hasło')
        .oneOf([yup.ref('password')], 'Podane hasła nie są takie same'),
});

export type RegisterModalValues = yup.InferType<typeof RegisterModalSchema>;
