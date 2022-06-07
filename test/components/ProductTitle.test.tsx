import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1, /*product2*/ } from '../data/prodcuts';




describe('ProductTitle', () => {

    test('Debe de mostrar el componente correctamente con el titulo personalizado', () => {
        const wrapper = renderer.create(
            <ProductTitle title='Custom Product' className='Custom-class' />
        )

        // console.log(wrapper.toJSON())
        expect(wrapper.toJSON()).toMatchSnapshot();//u para actualizar snapshot
    })


    test('debe de mostrar el componente con el nombre del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (<ProductTitle />)
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();//u para actualizar snapshot


    })
})