
export const doSubmit = (name, phone) => {
    console.log(name);

    return {
        type: 'DOSUBMIT',
        name: name,
        phone: phone
    };
};

export const selectCrop = (crop) => {

    return {
        type: 'SELECTCROP',
        crop: crop
    };
};
