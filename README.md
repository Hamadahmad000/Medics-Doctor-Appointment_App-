
# Medics Doctor Appointment App

Medics App cloned with the help of figma design


## Authors

- Hamad Mirza


## Design UI

https://www.figma.com/file/GkZBETlmx45mrztQi1Q9pq/Medics---Medical-App-UI-Kit-(Community)?node-id=0-1&t=88X9THujGIYpkmbX-0

## Documentation
### for dependencies installation
npm install 

### for runing on android
npx react-native run-android

### for runing on ios 
npx react-native run-ios 


## Folder Structure
src  
├── assets  
│   └── logo.png  
├── components  
│   ├── button  
│   │   ├── Button.tsx  
│   │   └── ButtonStyle.ts  
│   ├── input  
│   │   ├── Input.tsx  
│   │   └── InputStyle.ts  
│   └── sidebar  
│       ├── SideBar.tsx  
│       └── SideBarStyle.ts  
├── config  
│   ├── Axios.ts  
│   └── Store.ts  
├── constants  
│   └── Theme.ts  
├── helpers  
│   ├── AppHelpers.ts  
│   ├── ErrorHelpers.ts  
│   └── ThemeHelper.ts  
├── hooks  
│   ├── UseObjectState.ts  
│   ├── UseReduxHooks.ts  
│   └── UserHooks.ts  
├── modules  
│   ├── home  
│   │   ├── Home.tsx  
│   │   └── HomeStyle.ts  
│   ├── login  
│   │   ├── Login.tsx  
│   │   └── LoginStyle.ts  
│   ├── signup  
│   │   ├── Signup.tsx  
│   │   └── SignupStyle.ts  
│   └── splash  
│       ├── Splash.tsx  
│       └── SplashStyle.ts  
├── navigation  
│   └── Navigation.tsx  
├── store  
│   ├── RootReducer.ts  
│   ├── actions  
│   │   └── UserAction.ts  
│   └── reducers  
│       └── UserReducer.ts  
├── types  
│   ├── AppTypes.ts  
│   ├── NavigationTypes.ts  
│   ├── StylesTypes.ts  
│   └── UserTypes.ts  
└── utils   
    └── AppUtils.ts  
## Tips
### 1
Use the latest version of React Native: Always use the latest version of React Native, as it will have the latest performance improvements and bug fixes.

### 2  
Use Pure Components: Use Pure Components instead of Class Components wherever possible, as they can help to reduce unnecessary re-renders.

### 3  
Avoid inline styling: Avoid inline styling as much as possible and instead use StyleSheet to create reusable styles.

### 4  
Use FlatList or VirtualizedList: Use FlatList or VirtualizedList instead of ScrollView wherever possible, as they can render only the items that are currently visible on the screen.

### 5  
Avoid using setState inside render(): Avoid using setState inside the render() method, as it can cause unnecessary re-renders.

### 6  
Use shouldComponentUpdate: Use shouldComponentUpdate to control when a component should re-render.

### 7  
Use PureComponent: Use PureComponent instead of Component for components that do not have their own state or use props from the parent component.

### 8  
Use memoization: Use memoization to cache the result of expensive functions and avoid unnecessary re-computations.

### 9  
Optimize image sizes: Optimize image sizes to reduce the amount of data that needs to be loaded and improve performance.

### 10  
Use Performance Tools: Use performance tools such as the React Native Debugger, the React Native Performance Monitor, and the Chrome DevTools to identify and fix performance issues in your app.

#### By following these tips, you can improve the performance of your React Native app and provide a better user experience for your users.