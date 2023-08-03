# Challenge Tenpo React Native

### Pedro Emiliano Moyano Cires (pedro.emiliano@hotmail.com)

<br>

### Pre-Requisitos

Environment Setup : https://docs.expo.dev/get-started/installation/ (React native with Expo)

### Dependencias usadas

```
   "@gorhom/bottom-sheet": "^4.4.7",
    "@reduxjs/toolkit": "^1.9.5",
    "@types/react-test-renderer": "^18.0.0",
    "expo": "~49.0.5",
    "expo-constants": "~14.4.2",
    "expo-font": "~11.4.0",
    "expo-linking": "~5.0.2",
    "expo-location": "~16.1.0",
    "expo-router": "2.0.0",
    "expo-status-bar": "~1.6.0",
    "i18next": "^23.3.0",
    "jest": "^29.2.1",
    "jest-expo": "^49.0.0",
    "react": "18.2.0",
    "react-i18next": "^13.0.2",
    "react-native": "0.72.3",
    "react-native-autocomplete-input": "^5.3.2",
    "react-native-gesture-handler": "~2.12.0",
    "react-native-maps": "1.7.1",
    "react-native-reanimated": "~3.3.0",
    "react-native-safe-area-context": "4.7.1",
    "react-native-screens": "~3.22.0",
    "react-native-svg": "13.9.0",
    "react-native-svg-transformer": "^1.1.0",
    "react-native-uuid": "^2.0.1",
    "react-native-web": "~0.19.6",
    "react-redux": "^8.1.1",
    "react-test-renderer": "^18.2.0",
    "styled-components": "^6.0.5",
    "styled-system": "^5.1.5"

```

## Ejecucion

- `npm install`
- `npx expo start`
- En otra terminal ejecutar ` npm run android` o ` npm run ios`

# Estructura del proyecto

```
| - assets
|   - fonts
|   - images
| - app
|   - _layout.tsx
|   - index.tsx
|   - location.tsx
|   - restaurants.tsx
| - components
|   - ...-component
|      - ...-component.tsx
|      - ...-component.styles.ts
| - store
|   - ...slice.tsx
| - locales
|   - ...es.json
| - hooks
|   - ...hook.tsx
| - index.tsx
| - theme.tsx
| - test-utils.tsx
| - i18next.tsx
```

# Routes (usando expo-route)
- Index
- Location
- Restaurant

# Unit Test usando react testing library
