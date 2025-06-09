import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Definir tipos para el contexto
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

// Crear contexto con un valor inicial
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

// Definir tipos para las props del proveedor
interface ThemeProviderProps {
    children: ReactNode;
}

// Proveedor del tema
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>(
        () => localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Función para cambiar el tema
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
