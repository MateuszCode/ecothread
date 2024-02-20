import Slider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

export default function Filters({onChange, priceRange}) {

    
    return (
        <div className="filters">
                <label htmlFor="categories">Categories:</label>
                <select name="categories" id="categories">
                    <option value="men's clothing">Men</option>
                    <option value="women's clothing">Women</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronic">Electronic</option>
                </select>

                <label htmlFor="rating">Rating:</label>
                <select name="rating" id="rating">
                    <option value="4.5">4.5+</option>
                    <option value="4">4+</option>
                    <option value="3.5">3.5+</option>
                </select>

                {/* <Slider
                getAriaLabel={() => 'Price range'}
                size="small"
                value={priceRange}
                onChange={() => onChange(value)}
                valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
                min="0"
                max="1000"
                /> */}


            </div>
    )
}