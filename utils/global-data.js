const year = new Date();

export const getGlobalData = () => {
  const name = 'Maisha Films';
  const blogTitle = 'Maisha Films Projects:';
  const footerText = `© ${year.getFullYear()} Maisha Films`;

  return {
    name,
    blogTitle,
    footerText,
  };
};
