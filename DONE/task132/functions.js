export const getLocale = (userConfig, knownLocales) => {
  let count =knownLocales.length;
  for (let i =0; i<count; i++){

    if (knownLocales[i] === userConfig.locale){
      return userConfig.locale;
    }
  }
  return 'en';
};
