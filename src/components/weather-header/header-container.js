import HeaderTitle from './header-title';
import HeaderSearch from './header-search';

function HeaderContainer({ getWeather, getValueFromInput }) {
    return (
        <header className='tac'>
            <HeaderTitle title="Weather App"/>
            <HeaderSearch getWeather={getWeather} getValueFromInput={getValueFromInput}/>
        </header>
    );
}

export default HeaderContainer;