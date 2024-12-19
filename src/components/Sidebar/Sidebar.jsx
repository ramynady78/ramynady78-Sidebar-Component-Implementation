import { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import { SidebarContainer, SidebarLogoDiv, SidebarLogoImg, SidebarLogoText, SidebarToggle, SidebarItemContainer, SidebarIconWrapper, SidebarDot } from './Sidebar.styled';

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const Sidebar = (props) => {
    const { color } = props;
    const [isOpened, setIsOpened] = useState(false);
    const containerClassnames = classnames('sidebar', { opened: isOpened });
    document.documentElement.setAttribute('data-theme', color);
    const goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    const toggleSidebar = () => {
        setIsOpened((prevState) => !prevState);
    };

    return (
        <SidebarContainer className={containerClassnames} color={ color }>
            {isOpened && (
             <>
                <SidebarDot />
                <SidebarLogoDiv color={ color }>
                    <SidebarLogoImg src={logo} alt="Logo" />
                    <SidebarLogoText>TensorFlow</SidebarLogoText>
                    <SidebarToggle onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
                    </SidebarToggle>
                </SidebarLogoDiv>
                </>
            )}

            {!isOpened && (
              <>
                <SidebarLogoDiv color={ color }>
                    <SidebarLogoImg src={logo} alt="Logo" />
                    <SidebarToggle onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
                    </SidebarToggle>
                </SidebarLogoDiv>
              </>
            )}

            {isOpened && (
                <SidebarItemContainer color={ color }>
                    {routes.map((route) => (
                        <SidebarIconWrapper key={route.title} onClick={() => goToRoute(route.path)}>
                            <FontAwesomeIcon icon={route.icon} />
                            <span>{route.title}</span>
                        </SidebarIconWrapper>
                    ))}
                </SidebarItemContainer>
            )}

            {!isOpened && (
                <SidebarItemContainer color={ color }>
                    {routes.map((route) => (
                        <SidebarIconWrapper key={route.title} 
                        onClick={() => goToRoute(route.path)}
                        data-title={route.title}
                        className={!isOpened ? 'closed' : ''}
                        >
                            <FontAwesomeIcon  icon={route.icon} />
                        </SidebarIconWrapper>
                    ))}
                </SidebarItemContainer>
            )}

            {isOpened && (
                <SidebarItemContainer color={ color }>
                    {bottomRoutes.map((route) => (
                        <SidebarIconWrapper key={route.title} onClick={() => goToRoute(route.path)}>
                            <FontAwesomeIcon  icon={route.icon} />
                            <span>{route.title}</span>
                        </SidebarIconWrapper>
                    ))}
                </SidebarItemContainer>
            )}

            {!isOpened && (
                <SidebarItemContainer color={ color }>
                    {bottomRoutes.map((route) => (
                        <SidebarIconWrapper key={route.title} 
                        onClick={() => goToRoute(route.path)}
                        data-title={route.title}
                        className={!isOpened ? 'closed' : ''}
                        >
                            <FontAwesomeIcon  icon={route.icon} />
                        </SidebarIconWrapper>
                    ))}
                </SidebarItemContainer>
            )}
        </SidebarContainer>
    );
};

Sidebar.propTypes = {
    color: PropTypes.string,
};

export default Sidebar;
