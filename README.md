# Jfl-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Joni Fernández

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'jfl-product-card';
```

```
 <ProductCard
        product={product}
        initialValues={{
            count: 6,
            // maxCount: 10,
        }}
    >

        {
            ({ reset, isMaxCountReached, increaseBy, maxCount, count }) => (
                <>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </>
            )
        }
</ProductCard>
```
