import * as React from 'react';
import NumberBaseball from '../3.숫자야구/NumberBaseball';
import { useRouteMatch, useLocation, useHistory } from 'react-router';

const GameMatcher = () => {
    const match = useRouteMatch<{ name: string }>();
    const location = useLocation();
    const history = useHistory();
    if (!match) {
        return (
            <div>
                일치하는 게임이 없습니다.
            </div>
        );
    }
    let urlSearchParams = new URLSearchParams(location.search.slice(1));
    console.log(urlSearchParams.get('page'));
    if (match.params.name === 'number-baseball') {
        return <NumberBaseball />
    } else {
        return (
            <div>
                일치하는 게임이 없습니다.
            </div>
        );
    }
}

export default GameMatcher;
