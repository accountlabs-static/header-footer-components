import { animated, useSpringRef, useTransition } from '@react-spring/web';
import { ProductsConfigProduct } from '../../config';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import messages from '../messages';
import {
  AllProducts,
  Group,
  Groups,
  Item,
  List,
  ProductLink,
  Title,
  Container,
  AllProductsLink,
  Preview,
  Img,
  Tag,
  FooterMask,
} from './index.style';
import { Submenu } from '../style';
import g3Pro from '../../assets/images/keystone-g3-pro.jpg';
import bundle2Pack from '../../assets/images/keystone-g3-pro-2pack.jpg';
import bundle3Pack from '../../assets/images/keystone-g3-pro-3pack.jpg';
import tablet from '../../assets/images/kt002.jpg';
import tabletPlus from '../../assets/images/kt003.jpg';
import tabletPunch from '../../assets/images/kt004.jpg';
import pouch from '../../assets/images/pouch.jpg';

const menuGroups = [
  {
    id: 'hardware',
    title: messages.productsHardware,
    list: [
      {
        id: 'g3-pro',
        href: ProductsConfigProduct.k3Pro.path,
        title: messages.productList.g3Pro,
        tag: true,
        img: g3Pro,
        blank: false,
      },
      {
        id: 'bundle-2pack',
        href: ProductsConfigProduct.k3ProBundle2Pack.path,
        title: messages.productList.familyBundle2Pack,
        img: bundle2Pack,
        blank: false,
        tag: true,
        tagColor: 'oranger',
        tagText: messages.productStatus.saleOff,
        tagVariant: {
          discount: 5,
        },
      },
      {
        id: 'bundle-3pack',
        href: ProductsConfigProduct.k3ProBundle3Pack.path,
        title: messages.productList.familyBundle3Pack,
        img: bundle3Pack,
        blank: false,
        tag: true,
        tagColor: 'oranger',
        tagText: messages.productStatus.saleOff,
        tagVariant: {
          discount: 10,
        },
      },
    ],
  },
  {
    id: 'accessories',
    title: messages.productsAccessories,
    list: [
      {
        id: 'tablet',
        href: ProductsConfigProduct.tablet.path,
        title: messages.productList.t3,
        tag: true,
        img: tablet,
        blank: false,
      },
      {
        id: 'tabletPlus',
        href: ProductsConfigProduct.tabletPlus.path,
        title: messages.productList.t4,
        tag: false,
        img: tabletPlus,
        blank: false,
      },
      {
        id: 'tabletPunch',
        href: ProductsConfigProduct.tabletPunch.path,
        title: messages.productList.t5,
        tag: false,
        img: tabletPunch,
        blank: false,
      },
      {
        id: 'pouch',
        href: ProductsConfigProduct.pouch.path,
        title: messages.productList.t6,
        tag: false,
        img: pouch,
        blank: false,
      },
    ],
  },
  {
    id: 'all',
    list: [
      {
        to: '/shop',
        title: messages.productsAll,
      },
    ],
  },
];
export default function Products({ open, ...args }) {
  const intl = useIntl();
  const [product, setProduct] = useState('g3-pro');

  const groups = menuGroups
    .filter(it => it.id !== 'all')
    .map(it => ({
      ...it,
      ...(it.list && {
        list: it.list.map(lIt => ({
          ...lIt,
          title: intl.formatMessage(lIt.title),
        })),
      }),
      title: intl.formatMessage(it.title),
    }));

  const productsImg = groups
    .map(it => it.list.map(c => c))
    .flat()
    .map(it => ({
      id: it.id,
      element: ({ style }) => (
        <animated.div
          style={{
            position: 'absolute',
            top: 0,
            width: 480,
            height: 480,
            ...style,
          }}
        >
          {it.img && <Img src={it.img} alt={it.title} />}
        </animated.div>
      ),
    }));

  const transRef = useSpringRef();

  const transitions = useTransition(product, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(0,10%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,10%,0)' },
    config: {
      tension: 120,
      friction: 26,
    },
    delay: 200,
  });

  useEffect(() => {
    transRef.start();
  }, [product, transRef]);

  const footAllProduct = menuGroups
    .find(it => it.id === 'all')
    .list.map(it => ({
      ...it,
      title: intl.formatMessage(it.title),
    }))[0];

  return (
    <Submenu height={400} className={open ? 'active' : ''} {...args}>
      <Container>
        <Groups>
          {groups.map(group => (
            <Group key={group.id}>
              <Title>{group.title}</Title>
              <List>
                {group.list.map(item => (
                  <Item key={item.title}>
                    <ProductLink
                      disabled={item.disabled}
                      to={item.href}
                      data-mixpanel-id={`products ${group.id} ${item.title}`}
                      data-mixpanel-pos="header"
                      data-mixpanel-to={item.href}
                      arrow
                      onMouseEnter={() => setProduct(item.id)}
                    >
                      {item.title}
                      {item.tag && (
                        <Tag color={item.tagColor}>
                          {intl.formatMessage(
                            item.tagText || messages.productStatus.hot,
                            item?.tagVariant,
                          )}
                        </Tag>
                      )}
                    </ProductLink>
                  </Item>
                ))}
              </List>
            </Group>
          ))}
        </Groups>
        <AllProducts>
          <AllProductsLink
            to={footAllProduct.to}
            arrow
            color="var(--color-fg-subtle)"
            hoverColor="var(--color-bd-pink)"
            data-mixpanel-id="products footAllProducts"
            data-mixpanel-pos="header"
            data-mixpanel-to={footAllProduct.href}
          >
            {footAllProduct.title}
          </AllProductsLink>
        </AllProducts>
      </Container>
      <Preview>
        {transitions((style, id) => {
          const Page = productsImg.find(it => it.id === id).element;
          return <Page style={style} />;
        })}
        <FooterMask />
      </Preview>
    </Submenu>
  );
}
