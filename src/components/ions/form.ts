import styled, { css } from 'styled-components';

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const FormFooterWrapper = styled.div`
    margin-top: 16px;
`;

export const FieldWrapper = styled.div(
    () => css`
        ${FieldLabels} {
            margin-bottom: 8px;
        }

        .input-message {
            margin-top: 4px;
        }
    `,
);

export const FieldLabels = styled.div`
    display: flex;
    justify-content: space-between;
`;
