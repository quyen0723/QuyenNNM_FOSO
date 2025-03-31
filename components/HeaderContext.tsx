import { createContext, useContext, useState, ReactNode } from 'react';

// Định nghĩa kiểu dữ liệu cho Context
interface HeaderContextType {
    headerTitle: string;
    setHeaderTitle: (title: string) => void;
}

// Truyền giá trị mặc định để tránh lỗi
const HeaderContext = createContext<HeaderContextType>({
    headerTitle: 'Tổng quan',
    setHeaderTitle: () => { }, // Hàm rỗng mặc định
});

// Định nghĩa kiểu dữ liệu cho Props
interface HeaderProviderProps {
    children: ReactNode;
}

export function HeaderProvider({ children }: HeaderProviderProps) {
    const [headerTitle, setHeaderTitle] = useState<string>('Tổng quan');

    return (
        <HeaderContext.Provider value={{ headerTitle, setHeaderTitle }}>
            {children}
        </HeaderContext.Provider>
    );
}

export function useHeaderTitle() {
    return useContext(HeaderContext);
}
