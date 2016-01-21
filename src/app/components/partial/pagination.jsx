import React from 'react';
import {Link} from 'react-router';


const Pagination = React.createClass({
    PropTypes: {
        range: React.PropTypes.number,
        current_active: React.PropTypes.number,
        request_raw_url: React.PropTypes.string
    },
    CalculateURLForActivePage(number) {
       return this.props.request_raw_url + number;
    },
    render() {

        /* use pagination from materializecss.com  */
        const Goable = "waves-effect";
        const Active = "active";
        const Disabled = "disabled";
		const {CalculateURLForActivePage} = this;
        const {range, current_active} = this.props;

        if (range > 5) {
            if (range - current_active > 2 && current_active > 3) {
                return (
                    <ul className="pagination">
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(current_active - 1)}>
                                <i className="material-icons">chevron_left</i>
                            </Link>
                        </li>
                        <li className={Disabled}>...</li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(current_active - 1)}>{current_active-1}</Link>
                        </li>
                        <li className={Active}>{current_active}</li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(current_active + 1)}>{current_active+1}</Link>
                        </li>
                        <li className={Disabled}>...</li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(current_active + 1)}>
                                <i className="material-icons">chevron_right</i>
                            </Link>
                        </li>
                    </ul>
                );
            }
            else if (range === current_active + 2) {
                return (
                    <ul className="pagination">
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(current_active - 1)}>
                                <i className="material-icons">chevron_left</i>
                            </Link>
                        </li>
                        <li className={Disabled}>...</li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(current_active - 1)}>{current_active - 1}</Link>
                        </li>
                        <li className={Active}>{current_active}</li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(current_active + 1)}>{current_active + 1}</Link>
                        </li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(current_active + 2)}>{current_active + 2}</Link>
                        </li>
                        <li className={Disabled}><i className="material-icons">chevron_right</i></li>
                    </ul>
                );
            }
             else if (range === current_active + 1) {
                return (
                    <ul className="pagination">
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(current_active - 1)}>
                                <i className="material-icons">chevron_left</i>
                            </Link>
                        </li>
                        <li className={Disabled}>...</li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(current_active - 2)}>{current_active - 2}</Link>
                        </li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(current_active - 1)}>{current_active - 1}</Link>
                        </li>
                        <li className={Active}>{current_active}</li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(current_active + 1)}>{current_active + 1}</Link>
                        </li>
                        <li className={Disabled}><i className="material-icons">chevron_right</i></li>
                    </ul>
                );
            }
            else if (range === current_active) {
                return (
                    <ul className="pagination">
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(current_active - 1)}>
                                <i className="material-icons">chevron_left</i>
                            </Link>
                        </li>
                        <li className={Disabled}>...</li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(current_active - 3)}>{current_active - 3}</Link>
                        </li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(current_active - 2)}>{current_active - 2}</Link>
                        </li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(current_active - 1)}>{current_active - 1}</Link>
                        </li>
                        <li className={Active}>{current_active}</li>
                        <li className={Disabled}><i className="material-icons">chevron_right</i></li>
                    </ul>
                );
            }

            else if (current_active === 3) {
                return (
                    <ul className="pagination">
                        <li className={Disabled}><i className="material-icons">chevron_left</i></li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(1)}>1</Link>
                        </li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(2)}>2</Link>
                        </li>
                        <li className={Active}>3</li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(4)}>4</Link>
                        </li>
                        <li className={Disabled}>...</li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(4)}>
                                <i className="material-icons">chevron_right</i>
                            </Link>
                        </li>
                    </ul>
                );
            }
            else if (current_active === 2) {
                return (
                    <ul className="pagination">
                        <li className={Disabled}><i className="material-icons">chevron_left</i></li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(1)}>1</Link>
                        </li>
                        <li className={Active}>2</li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(3)}>3</Link>
                        </li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(4)}>4</Link>
                        </li>
                        <li className={Disabled}>...</li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(3)}>
                                <i className="material-icons">chevron_right</i>
                            </Link>
                        </li>
                    </ul>
                );
            }
            else if (current_active === 1) {
                return (
                    <ul className="pagination">
                        <li className={Disabled}><i className="material-icons">chevron_left</i></li>
                        <li className={Active}>1</li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(2)}>2</Link>
                        </li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(3)}>3</Link>
                        </li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(4)}>4</Link>
                        </li>
                        <li className={Disabled}>...</li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(2)}>
                                <i className="material-icons">chevron_right</i>
                            </Link>
                        </li>
                    </ul>
                );
            }
        }
        else if (range === 5) {
            if (current_active === 1) {
                return (
                    <ul className="pagination">
                        <li className={Disabled}><i className="material-icons">chevron_left</i></li>
                        <li className={Active}>1</li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(2)}>2</Link>
                        </li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(3)}>3</Link>
                        </li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(4)}>4</Link>
                        </li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(5)}>5</Link>
                        </li>
                        <li className={Disabled}><i className="material-icons">chevron_right</i></li>
                    </ul>
                );
            }
            if (current_active === 2) {
                return (
                    <ul className="pagination">
                        <li className={Disabled}><i className="material-icons">chevron_left</i></li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(1)}>1</Link>
                        </li>
                        <li className={Active}>2</li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(3)}>3</Link>
                        </li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(4)}>4</Link>
                        </li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(5)}>5</Link>
                        </li>
                        <li className={Disabled}><i className="material-icons">chevron_right</i></li>
                    </ul>
                );
            }
            if (current_active === 3) {
                return (
                    <ul className="pagination">
                        <li className={Disabled}><i className="material-icons">chevron_left</i></li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(1)}>1</Link>
                        </li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(2)}>2</Link>
                        </li>
                        <li className={Active}>3</li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(4)}>4</Link>
                        </li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(5)}>5</Link>
                        </li>
                        <li className={Disabled}><i className="material-icons">chevron_right</i></li>
                    </ul>
                );
            }
            if (current_active === 4) {
                return (
                    <ul className="pagination">
                        <li className={Disabled}><i className="material-icons">chevron_left</i></li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(1)}>1</Link>
                        </li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(2)}>2</Link>
                        </li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(3)}>3</Link>
                        </li>
                        <li className={Active}></li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(5)}>5</Link>
                        </li>
                        <li className={Disabled}><i className="material-icons">chevron_right</i></li>
                    </ul>
                );
            }
            if (current_active === 5) {
                return (
                    <ul className="pagination">
                        <li className={Disabled}><i className="material-icons">chevron_left</i></li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(1)}>1</Link>
                        </li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(2)}>2</Link>
                        </li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(3)}>3</Link>
                        </li>
                        <li className={Goable}>
                            <Link to={CalculateURLForActivePage(4)}>4</Link>
                        </li>
                        <li className={Active}>5</li>
                        <li className={Disabled}><i className="material-icons">chevron_right</i></li>
                    </ul>
                );
            }

        }
        else if (range < 5) {
			let RangeArr = [];
			for (var i = 0; i < range; i ++)
				RangeArr[i] = i + 1;
            return (
                <ul className="pagination">
					<li className={Disabled}><i className="material-icons">chevron_left</i></li>
                    {RangeArr.map(function(item) {
						if (item !== current_active){
							return <li className={Goable}><Link to={CalculateURLForActivePage(item)}>{item}</Link></li>
						} else {
							return <li className={Active}>{item}</li>
						}
					})}
					<li className={Disabled}><i className="material-icons">chevron_right</i></li>
                </ul>);
        }
    }
});

export default Pagination;
