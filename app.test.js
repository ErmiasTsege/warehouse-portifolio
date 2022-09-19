
 const sequelize  = require('./db');

const Warehouse = require('./models/warehouse')



describe('Warehouse Model', () => {
	beforeAll(async () => {
		await sequelize.sync({force: true})
	});

	test('can create a warehouse', async() => {
	const testWarehouse = await Warehouse.create({name : 'NC Warehouse'})
	expect(testWarehouse.name).toBe('NC Warehouse')
})

test('warehouse has location', async()=>{
	const warehouseLocation = 'NC'
	const testWarehouse = await Warehouse.create({name:'NCs Warehouse', location: warehouseLocation})
	expect(testWarehouse.location).toBe('NC')
})

})


afterAll(async()=> {
     await sequelize.sync({force:true})
    sequelize.close()
})