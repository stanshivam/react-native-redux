
export const doSubmit = (name, phone) => {
    console.log(name);

    return {
        type: 'DOSUBMIT',
        name: name,
        phone: phone
    };
};
