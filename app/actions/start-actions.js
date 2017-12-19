
export const doSubmit = (name, phone) => {
    return {
        type: 'DOSUBMIT',
        name: name,
        phone: phone
    };
};
