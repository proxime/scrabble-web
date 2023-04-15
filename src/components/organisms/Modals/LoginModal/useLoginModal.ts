import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import { LoginModalProps } from './LoginModal';

import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginMutation } from '@store/api/auth';
import { closeModal, openModal } from '@store/modalsSlice';

export const useLoginModal = ({
    onClose,
}: Pick<LoginModalProps, 'onClose'>) => {
    const dispatch = useDispatch();

    const [handleLogin, { isLoading, data: loginData, error }] =
        useLoginMutation();

    const {
        register,
        formState: { errors, isValid, isSubmitted },
        handleSubmit,
    } = useForm<LoginModalValues>({
        resolver: yupResolver(LoginModalSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const handleFormSubmit = handleSubmit(({ email, password }) => {
        handleLogin({
            email,
            password,
        });
    });

    const handleClickLoginButton = () => {
        dispatch(closeModal('login'));
        dispatch(openModal('register'));
    };

    useEffect(() => {
        if (loginData) {
            localStorage.setItem('token', loginData.token);
            localStorage.setItem('refreshToken', loginData.refreshToken);
            onClose();
        }
    }, [loginData]);

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

export const LoginModalSchema = yup.object({
    email: yup
        .string()
        .email('Wprowadź adres E-mail')
        .required('Wprowadź adres E-mail'),
    password: yup.string().required('Wprowadź hasło'),
});

export type LoginModalValues = yup.InferType<typeof LoginModalSchema>;
