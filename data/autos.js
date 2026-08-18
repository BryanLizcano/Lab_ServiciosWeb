const autos = [
    {
        id: 1,
        marca: 'Toyota',
        modelo: 'Supra MK4',
        categoria: 'JDM',
        existencias: 3,
        proveedor: {
            nombre: 'Tokyo Motors Import',
            contacto: 'contacto@tokyomotors.jp'
        }
    },

    {
        id: 2,
        marca: 'Ford',
        modelo: 'Mustang GT500',
        categoria: 'Americano',
        existencias: 0,
        proveedor: {
            nombre: 'Detroit Auto Group',
            contacto: 'ventas@detroitauto.com'
        }
    },

    {
        id: 3,
        marca: 'BMW',
        modelo: 'M3 E46',
        categoria: 'Alemán',
        existencias: 7,
        proveedor: {
            nombre: 'Munich Performance',
            contacto: 'info@munichperf.de'
        }
    },

    {
        id: 4,
        marca: 'Nissan',
        modelo: 'Silvia S15',
        categoria: 'Drifting',
        existencias: 1,
        proveedor: {
            nombre: 'Osaka Drift Parts',
            contacto: 'sales@osakadrift.jp'
        }
    },

    {
        id: 5,
        marca: 'Porsche',
        modelo: '911 GT3',
        categoria: 'Sport',
        existencias: 5,
        proveedor: {
            nombre: 'Stuttgart Classics',
            contacto: 'contact@stuttgartclassics.de'
        }
    }
];

module.exports = autos;