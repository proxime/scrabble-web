import { LoginModal } from '@components/organisms/Modals/LoginModal/LoginModal';
import { ModalsProvider } from '@components/organisms/Modals/ModalsProvider/ModalsProvider';
import { RegisterModal } from '@components/organisms/Modals/RegisterModal/RegisterModal';

export const AppModals = () => {
    return (
        <ModalsProvider
            modals={{
                register: RegisterModal,
                login: LoginModal,
            }}
        />
    );
};
