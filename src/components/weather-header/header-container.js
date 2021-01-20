import HeaderTitle from './header-title';
import HeaderSearch from './header-search';

function HeaderContainer() {
    return (
        <header class="tac">
            <HeaderTitle title="Weather App"/>
            <HeaderSearch/>
        </header>
    );
}

export default HeaderContainer;