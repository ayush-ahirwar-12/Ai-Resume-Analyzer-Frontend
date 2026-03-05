import { store } from '@/config/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Provider } from "react-redux";

const Wrapper = ({children}:{children:React.ReactNode}) => {
    const [client] = useState(()=>new QueryClient());
  return (
   <QueryClientProvider client={client}>
    <Provider store={store}>{children}</Provider>
    
   </QueryClientProvider>
  )
}

export default Wrapper