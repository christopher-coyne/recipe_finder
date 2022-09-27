export const mobile = (content: string) => {
  return `
    @media screen and (max-width: 500px) {
        ${content}
      }
    `;
};

export const tablet = (content: string) => {
  return `
    @media screen and (max-width: 700px) {
        ${content}
      }
    `;
};

export const desktop = (content: string) => {
  return `
    @media screen and (min-width: 700px) {
        ${content}
      }
    `;
};
