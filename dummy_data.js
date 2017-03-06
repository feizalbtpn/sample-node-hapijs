/**
 * Created by feizal on 3/5/17.
 */

'use strict';

const products = {
    '1': {
        id: '1',
        name: 'MacBook',
        description: 'Ringan. Mendahului masanya.',
        image: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/macbook/psp-mini-hero-macbook_2x.png',
        images: [
            'https://www.imore.com/sites/imore.com/files/styles/larger_wm_blw/public/field/image/2016/04/macbook-12-inch-rose-gold-space-gray-angle.jpg?itok=aiXxmbef',
            'https://cnet2.cbsistatic.com/img/9FgXmNRhIBCj6UReH6Ovh3zDULw=/770x578/2016/04/19/d9d62a72-6493-44e6-bcec-9615df24fe2b/apple-macbook-2016-13.jpg',
        ],
        price: 'Rp 23.000.000',
        dimension: 'width x height x tall',
        weight: '500 gram',
        rating: 5,
    },
    '2': {
        id: '2',
        name: 'MacBook Air',
        description: 'Wujudkan banyak hal mengagumkan. Sepanjang hari.',
        image: 'https://techthirsty.com/wp-content/uploads/2015/06/1024px-11.6-_MacBook_Air_1.jpg',
        images: [
            'https://cdn1.macworld.co.uk/cmsdata/features/3605337/MacbookAir11_lifestyle_15_thumb800.jpg',
            'http://fakta.co.id/wp-content/uploads/2016/10/MacBook_Air_13-inch_35330106_12.jpg',
            'http://cdn.bgr.com/2016/03/12-inch-retina-macbook.jpg?quality=98&strip=all',
        ],
        price: 'Rp 12.000.000',
        dimension: 'width x height x tall',
        weight: '500 gram',
        rating: 4,
    },
    '3': {
        id: '3',
        name: 'MacBook Pro',
        description: 'Sentuhan genius.',
        image: 'https://www.apple.com/euro/macbook-pro/j/generic/images/og.png?201612190804',
        images: [
            'https://cdn.macrumors.com/article-new/2013/09/macbook_pro_2016_roundup_header.jpg',
            'https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2016/06/macbook-pro-clear-hero.jpg?itok=sB3m3imo',
        ],
        price: 'Rp 16.000.000',
        dimension: 'width x height x tall',
        weight: '500 gram',
        rating: 5,
    },
    '4': {
        id: '4',
        name: 'iMac',
        description: 'Retina. Begitu kolosal dan megah.',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ma/imac/gallery1/imac-gallery1-2015?wid=2000&hei=1536&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1473964718456',
        images: [
            'http://i.amz.mshcdn.com/bf-kC0aUt0qN9nWvfBiEA8IUZbs=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2F27-inch-imac-2015%2F101215-apple-imac-thumbnail-1.jpg',
            'https://cnet2.cbsistatic.com/img/cqIXEFLhCUTf6O5cxmLYYrykoU4=/770x433/2014/10/17/39cc108a-f968-489f-a6fb-dc52862e7dae/apple-imac-retina-5k-display-7861-008.jpg',
        ],
        price: 'Rp 27.000.000',
        dimension: 'width x height x tall',
        weight: '500 gram',
        rating: 3,
    },
    '5': {
        id: '5',
        name: 'Mac Pro',
        description: 'Dibuat untuk kreativitas dalam skala epik.',
        image: 'https://cdn1.macworld.co.uk/cmsdata/features/3536364/new_macpro_release_date_rumours_800home_thumb800.jpg',
        images: [
            'http://www.apple.com/v/mac-pro/home/b/images/stills/desktop/macpro_00090.jpg',
            'https://cnet3.cbsistatic.com/img/oy5d7opgzu9Jqs8La0oTicch5h4=/770x433/2013/12/19/d2e3153e-84b8-11e3-beb9-14feb5ca9861/MacPro2013_35781456_07.jpg'
        ],
        price: 'Rp 35.000.000',
        dimension: 'width x height x tall',
        weight: '500 gram',
        rating: 4,
    },
    '6': {
        id: '6',
        name: 'Mac mini',
        description: 'Ukuran kecil berkemampuan besar.',
        image: 'https://cnet4.cbsistatic.com/img/DLWu_FqHoZCs5gwXGoaRIZuZnsM=/770x433/2012/11/08/d925eaf3-0541-11e3-bf02-d4ae52e62bcc/Mac_Mini_35536140_35522798_35440708_35522800_01.jpg',
        images: [
            'https://cnet4.cbsistatic.com/img/DWn6s9pl_ZffciR2tGFqupYKtvk=/770x433/2012/11/08/d932fe73-0541-11e3-bf02-d4ae52e62bcc/Mac_Mini_35536140_35522798_35440708_35522800_03.jpg',
            'https://cnet2.cbsistatic.com/img/bnhpaGJ95DCFV9ud6i9vOisugtM=/770x433/2015/02/11/2edd1d5d-1954-423a-8db2-7310b7f43b23/macmini14.jpg',
        ],
        price: 'Rp 9.000.000',
        dimension: 'width x height x tall',
        weight: '500 gram',
        rating: 3,
    },
};

module.exports = { products };