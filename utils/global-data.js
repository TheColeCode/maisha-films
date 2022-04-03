const year = new Date();

export const getGlobalData = () => {
  const name = 'Maisha Films';
  const blogTitle = 'Finding Hope Home - Documentary, Coming 2022';
  const footerText = `© ${year.getFullYear()} Maisha Films`;

  return {
    name,
    blogTitle,
    footerText,
  };
};
