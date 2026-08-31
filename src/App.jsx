import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, theme } from 'antd';
import Inicio from './pages/Inicio.jsx';
import ReservarLugar from './pages/ReservarLugar.jsx';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const { token } = theme.useToken();
  return (
        <BrowserRouter>
            <Layout style={{ minHeight: '100vh' }}>
                <Header style={{ background: token.colorPrimary, display: 'flex', alignItems: 'center', paddingInline: token.paddingLG }}>
                    {<Link to="/">
                        <Title level={3} style={{ margin: 0, color: token.colorWhite }}>
                          Reserva de Lugares
                        </Title>
                      </Link>}
                </Header>
                <Content style={{ padding: token.paddingLG }}>
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/reservar" element={<ReservarLugar />} />
                    </Routes>
                </Content>
            </Layout>
        </BrowserRouter>
    );
}
export default App
