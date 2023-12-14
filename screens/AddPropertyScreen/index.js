import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';

const AddPropertyScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('profile.title')}</Text>
      {/* Add your profile screen content here */}
    </View>
  );
};

export default AddPropertyScreen;
