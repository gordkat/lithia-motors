const listUrl = [
    { id: 1, url: "/images/oil-change-icon.svg" },
    { id: 2, url: "/images/oil-change-icon.svg" },
    { id: 3, url: "/images/detail-icon.svg" },
    { id: 4, url: "/images/oil-change-icon.svg" },
];

export const findUrlSvg = (id) => {
    const objUrl = listUrl.find(item => item.id === id);
    return objUrl.url;
};


