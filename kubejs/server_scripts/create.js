ServerEvents.recipes(e => {
    // REMOVE OLD RECIPES
    e.remove({ id: 'create:crushing/raw_iron' })
    e.remove({ id: 'create:crushing/raw_iron_block' })
    e.remove({ id: 'create:crushing/raw_copper_block' })
    e.remove({ id: 'create:crushing/raw_gold_block' })
    e.remove({ id: 'create:crushing/raw_zinc_block' })
    e.remove({ id: 'create:crushing/raw_lead_block' })
    e.remove({ id: 'create:crushing/raw_nickel_block' })
    e.remove({ id: 'create:crushing/raw_silver_block' })
    e.remove({ id: 'create:crushing/raw_uranium_block' })
    e.remove({ id: 'create:crushing/raw_aluminum_block' })
    e.remove({ id: 'create:crushing/raw_copper' })
    e.remove({ id: 'create:crushing/raw_zinc' })
    e.remove({ id: 'create:crushing/raw_lead_ore' })
    e.remove({ id: 'create:crushing/lead_ore' })
    e.remove({ id: 'create:crushing/raw_nickel_ore' })
    e.remove({ id: 'create:crushing/nickel_ore' })
    e.remove({ id: 'create:crushing/raw_silver_ore' })
    e.remove({ id: 'create:crushing/silver_ore' })
    e.remove({ id: 'create:crushing/tin_ore' })
    e.remove({ id: 'create:crushing/raw_aluminum_ore' })
    e.remove({ id: 'create:crushing/aluminum_ore' })
    e.remove({ id: 'create:crushing/platinum_ore' })
    e.remove({ id: 'create:crushing/raw_uranium_ore' })
    e.remove({ id: 'create:crushing/uranium_ore' })
    e.remove({ id: 'create:crushing/raw_iron' })
    e.remove({ id: 'create:crushing/coal_ore' })
    e.remove({ id: 'create:crushing/deepslate_coal_ore' })
    e.remove({ id: 'create:crushing/copper_ore' })
    e.remove({ id: 'create:crushing/deepslate_copper_ore' })
    e.remove({ id: 'create:crushing/gold_ore' })
    e.remove({ id: 'create:crushing/deepslate_gold_ore' })
    e.remove({ id: 'create:crushing/redstone_ore' })
    e.remove({ id: 'create:crushing/deepslate_redstone_ore' })
    e.remove({ id: 'create:crushing/emerald_ore' })
    e.remove({ id: 'create:crushing/deepslate_emerald_ore' })
    e.remove({ id: 'create:crushing/lapis_ore' })
    e.remove({ id: 'create:crushing/deepslate_lapis_ore' })
    e.remove({ id: 'create:crushing/diamond_ore' })
    e.remove({ id: 'create:crushing/deepslate_diamond_ore' })
    e.remove({ id: 'create:crushing/nether_gold_ore' })
    e.remove({ id: 'create:crushing/nether_quartz_ore' })
    e.remove({ id: 'create:crushing/zinc_ore' })
    e.remove({ id: 'create:crushing/deepslate_zinc_ore' })
    e.remove({ id: 'create:crushing/aluminum_ore' })
    e.remove({ id: 'create:crushing/lead_ore' })
    e.remove({ id: 'create:crushing/silver_ore' })
    e.remove({ id: 'create:crushing/nickel_ore' })
    e.remove({ id: 'create:crushing/uranium_ore' })

    // CRUSHING RECIPES
    // Block of Raw Iron - minecraft:raw_iron_block - rid# create:crushing/raw_iron_block
    e.custom({
        type: 'create:crushing',
            ingredients: [
                Ingredient.of('minecraft:raw_iron_block').toJson()
            ],
            results: [{
                    "count": 27,
                    "item": 'create:crushed_iron_ore'
            }, {
                    "count": 3,
                    "chance": 0.75,
                    "item": 'create:experience_nugget'
            }],
        processingTime: 200
        })

    // Block of Raw Copper - minecraft:raw_copper_block - rid# create:crushing/raw_copper_block
    e.custom({
        type: 'create:crushing',
            ingredients: [
                Ingredient.of('minecraft:raw_copper_block').toJson()
            ],
            results: [{
                    "count": 27,
                    "item": 'create:crushed_copper_ore'
            }, {
                    "count": 3,
                    "chance": 0.75,
                    "item": 'create:experience_nugget'
            }],
        processingTime: 200
        })

    // Block of Raw Gold - minecraft:raw_gold_block - rid# create:crushing/raw_gold_block
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:raw_gold_block').toJson()
        ],
        results: [{
                "count": 27,
                "item": 'create:crushed_copper_ore'
        }, {
                "count": 3,
                "chance": 0.75,
                "item": 'create:experience_nugget'
        }],
        processingTime: 200
    })

    // Block of Raw Zinc - create:raw_zinc_block - rid# create:crushing/raw_zinc_block
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('create:raw_zinc_block').toJson()
        ],
        results: [{
            "count": 27,
            "item": 'create:crushed_zinc_ore'
        }, {
            "count": 3,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 200
    })

    // Block of Raw Lead - immersiveengineering:raw_block_lead - rid# create:crushing/raw_lead_block
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('immersiveengineering:raw_block_lead').toJson()
        ],
        results: [{
            "count": 27,
            "item": 'create:crushed_lead_ore'
        }, {
            "count": 3,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 200
    })

    // Block of Raw Nickel - immersiveengineering:raw_block_nickel - rid# create:crushing/raw_nickel_block
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('immersiveengineering:raw_block_nickel').toJson()
        ],
        results: [{
            "count": 27,
            "item": 'create:crushed_nickel_ore'
        }, {
            "count": 3,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 200
    })

    // Block of Raw Silver - immersiveengineering:raw_block_silver - rid# create:crushing/raw_silver_block
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('immersiveengineering:raw_block_silver').toJson()
        ],
        results: [{
            "count": 27,
            "item": 'create:crushed_silver_ore'
        }, {
            "count": 3,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 200
    })

    // Block of Raw Uranium - immersiveengineering:raw_block_uranium - rid# create:crushing/raw_uranium_block
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('immersiveengineering:raw_block_uranium').toJson()
        ],
        results: [{
            "count": 27,
            "item": 'create:crushed_uranium_ore'
        }, {
            "count": 3,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 200
    })

    // Block of Raw Bauxite - immersiveengineering:raw_block_aluminum - rid# create:crushing/raw_aluminum_block
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('immersiveengineering:raw_block_aluminum').toJson()
        ],
        results: [{
            "count": 27,
            "item": 'create:crushed_aluminum_ore'
        }, {
            "count": 3,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 200
    })

    // Raw Iron - minecraft:raw_iron - rid# done
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:raw_iron').toJson()
        ],
        results: [{
                "count": 3,
                "item": 'create:crushed_iron_ore'
        }, {
                "count": 1,
                "chance": 0.75,
                "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Raw Copper - minecraft:raw_copper - rid# create:crushing/raw_copper
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:raw_copper').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_copper_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Raw Gold - minecraft:raw_gold - rid# create:crushing/raw_gold
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:raw_gold').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_gold_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Raw Zinc - create:raw_zinc - rid# create:crushing/raw_zinc
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('create:raw_zinc').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_zinc_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Raw Zinc(2) - exnihilosequentia:raw_zinc - rid# new recipe
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('exnihilosequentia:raw_zinc').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_zinc_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Raw Lead - immersiveengineering:raw_lead - rid# create:crushing/raw_lead_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('immersiveengineering:raw_lead').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_lead_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Raw Lead(2) - exnihilosequentia:raw_lead - rid# create:crushing/lead_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('exnihilosequentia:raw_lead').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_lead_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Raw Nickel - immersiveengineering:raw_nickel - rid# create:crushing/raw_nickel_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('immersiveengineering:raw_nickel').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_nickel_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Raw Nickel(2) - exnihilosequentia:raw_nickel - rid# create:crushing/nickel_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('exnihilosequentia:raw_nickel').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_nickel_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Raw Silver - immersiveengineering:raw_silver - rid# create:crushing/raw_silver_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('immersiveengineering:raw_silver').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_silver_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Raw Silver(2) - exnihilosequentia:raw_silver - rid# create:crushing/silver_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('exnihilosequentia:raw_silver').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_silver_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Raw Tin - exnihilosequentia:raw_tin - rid# create:crushing/tin_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('exnihilosequentia:raw_tin').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_tin_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Raw Bauxite - immersiveengineering:raw_aluminum - rid# create:crushing/raw_aluminum_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('immersiveengineering:raw_aluminum').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_aluminum_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Raw Aluminum(2) - exnihilosequentia:raw_aluminum - rid# create:crushing/aluminum_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('exnihilosequentia:raw_aluminum').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_aluminum_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Raw Platinum - exnihilosequentia:raw_platinum - rid# create:crushing/platinum_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('exnihilosequentia:raw_platinum').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_platinum_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Raw Uranium - immersiveengineering:raw_uranium - rid# create:crushing/raw_uranium_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('immersiveengineering:raw_uranium').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_uranium_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Raw Uranium(2) - exnihilosequentia:raw_uranium - rid# create:crushing/uranium_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('exnihilosequentia:raw_uranium').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_uranium_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Coal Ore - minecraft:coal_ore [results] 4x 100% create:minecraft:coal, 2x 75% minecraft:coal, 1x 75% create:experience_nugget, 1x 12% minecraft:cobblestone - rid# create:crushing/coal_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:coal_ore').toJson()
        ],
        results: [{
            "count": 4,
            "item": 'create:minecraft:coal'
        }, {
            "count": 2,
            "chance": 0.75,
            "item": 'create:minecraft:coal'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }, {
            "count": 1,
            "chance": 0.12,
            "item": 'minecraft:cobblestone'
        }],
        processingTime: 100
    })

    // Deepslate Coal Ore - minecraft:deepslate_coal_ore [results] 4x 100% create:minecraft:coal, 2x 75% minecraft:coal, 1x 75% create:experience_nugget, 1x 12% minecraft:cobbled_deepslate - rid# create:crushing/deepslate_coal_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:deepslate_coal_ore').toJson()
        ],
        results: [{
            "count": 4,
            "item": 'create:minecraft:coal'
        }, {
            "count": 2,
            "chance": 0.75,
            "item": 'create:minecraft:coal'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }, {
            "count": 1,
            "chance": 0.12,
            "item": 'minecraft:cobbled_deepslate'
        }],
        processingTime: 100
    })

    // Iron Ore - minecraft:iron_ore [results] 3x 100% create:crushed_iron_ore, 1x 75% create:experience_nugget - rid# create:crushing/iron_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:iron_ore').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_iron_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Deepslate Iron Ore - minecraft:deepslate_iron_ore [results] 3x 100% create:crushed_iron_ore, 1x 75% create:experience_nugget - rid# create:crushing/deepslate_iron_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:deepslate_iron_ore').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_iron_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Copper Ore - minecraft:copper_ore [results] 3x 100% create:crushed_copper_ore, 1x 75% create:experience_nugget - rid# create:crushing/copper_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:deepslate_iron_ore').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_iron_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Deepslate Copper Ore - minecraft:deepslate_copper_ore [results] 3x 100% create:crushed_copper_ore, 1x 75% create:experience_nugget - rid# create:crushing/deepslate_copper_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:deepslate_copper_ore').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_copper_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Gold Ore - minecraft:gold_ore [results] 3x 100% create:crushed_gold_ore, 1x 75% create:experience_nugget - rid# create:crushing/gold_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:gold_ore').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_gold_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Deepslate Gold Ore - minecraft:deepslate_gold_ore [results] 3x 100% create:crushed_gold_ore, 1x 75% create:experience_nugget - rid# create:crushing/deepslate_gold_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:deepslate_gold_ore').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_gold_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Redstone Ore - minecraft:redstone_ore [results] 12x 100% minecraft:redstone, 3x 50% minecraft:redstone, 1x 75% create:experience_nugget, 1x 12% minecraft:cobblestone - rid# create:crushing/redstone_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:redstone_ore').toJson()
        ],
        results: [{
            "count": 12,
            "item": 'minecraft:redstone'
        }, {
            "count": 3,
            "chance": 0.75,
            "item": 'minecraft:redstone'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }, {
            "count": 1,
            "chance": 0.12,
            "item": 'minecraft:cobblestone'
        }],
        processingTime: 100
    })

    // Deepslate Redstone Ore - minecraft:deepslate_redstone_ore [results] 12x 100% minecraft:redstone, 3x 50% minecraft:redstone, 1x 75% create:experience_nugget, 1x 12% minecraft:cobbled_deepslate - rid# create:crushing/deepslate_redstone_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:deepslate_redstone_ore').toJson()
        ],
        results: [{
            "count": 12,
            "item": 'minecraft:redstone'
        }, {
            "count": 3,
            "chance": 0.75,
            "item": 'minecraft:redstone'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }, {
            "count": 1,
            "chance": 0.12,
            "item": 'minecraft:cobbled_deepslate'
        }],
        processingTime: 100
    })

    // Emerald Ore - minecraft:emerald_ore [results] 4x 100% minecraft:emerald, 1x 75% minecraft:emerald, 1x 75% create:experience_nugget, 12% minecraft:cobblestone - rid# create:crushing/emerald_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:emerald_ore').toJson()
        ],
        results: [{
            "count": 4,
            "item": 'minecraft:emerald'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'minecraft:emerald'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }, {
            "count": 1,
            "chance": 0.12,
            "item": 'minecraft:cobblestone'
        }],
        processingTime: 100
    })

    // Deepslate Emerald Ore - minecraft:deepslate_emerald_ore [results] 2x 100% minecraft:emerald, 1x 75% minecraft:emerald, 1x 75% create:experience_nugget, 12% minecraft:cobbled_deepslate - rid# create:crushing/deepslate_emerald_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:deepslate_emerald_ore').toJson()
        ],
        results: [{
            "count": 4,
            "item": 'minecraft:emerald'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'minecraft:emerald'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }, {
            "count": 1,
            "chance": 0.12,
            "item": 'minecraft:cobbled_deepslate'
        }],
        processingTime: 100
    })

    // Lapis Lazuli Ore - minecraft:lapis_ore [results] 12x 100% create:minecraft:lapis_lazuli, 3x 50% minecraft:lapis_lazuli, 1x 75% create:experience_nugget, 1x 12% minecraft:cobblestone - rid# create:crushing/lapis_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:lapis_ore').toJson()
        ],
        results: [{
            "count": 12,
            "item": 'create:minecraft:lapis_lazuli'
        }, {
            "count": 3,
            "chance": 0.50,
            "item": 'create:minecraft:lapis_lazuli'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }, {
            "count": 1,
            "chance": 0.12,
            "item": 'minecraft:cobblestone'
        }],
        processingTime: 100
    })

    // Deepslate Lapis Lazuli Ore - minecraft:deepslate_lapis_ore [results] 12x 100% create:minecraft:lapis_lazuli, 3x 50% minecraft:lapis_lazuli, 1x 75% create:experience_nugget, 1x 12% minecraft:cobbled_deepslate - rid# create:crushing/deepslate_lapis_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:deepslate_lapis_ore').toJson()
        ],
        results: [{
            "count": 12,
            "item": 'create:minecraft:lapis_lazuli'
        }, {
            "count": 3,
            "chance": 0.50,
            "item": 'create:minecraft:lapis_lazuli'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }, {
            "count": 1,
            "chance": 0.12,
            "item": 'minecraft:cobbled_deepslate'
        }],
        processingTime: 100
    })

    // Diamond Ore - minecraft:diamond_ore [results] 3x 100% minecraft:diamond, 2x 80% minecraft:diamond, 1x 75% create:experience_nugget, 12% minecraft:cobblestone - rid# create:crushing/diamond_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:diamond_ore').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'minecraft:diamond'
        }, {
            "count": 2,
            "chance": 0.80,
            "item": 'minecraft:diamond'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }, {
            "count": 1,
            "chance": 0.12,
            "item": 'minecraft:cobblestone'
        }],
        processingTime: 100
    })

    // Deepslate Diamond Ore - minecraft:deepslate_diamond_ore [results] 3x 100% minecraft:diamond, 2x 80% minecraft:diamond, 1x 75% create:experience_nugget, 12% minecraft:cobbled_deepslate - rid# create:crushing/deepslate_diamond_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:deepslate_diamond_ore').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'minecraft:diamond'
        }, {
            "count": 2,
            "chance": 0.80,
            "item": 'minecraft:diamond'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }, {
            "count": 1,
            "chance": 0.12,
            "item": 'minecraft:cobbled_deepslate'
        }],
        processingTime: 100
    })

    // Nether Gold Ore - minecraft:nether_gold_ore [results] 27x 100% minecraft:gold_nugget, 1x 75% create:experience_nugget, 1x 12% minecraft:netherrack - rid# create:crushing/nether_gold_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:nether_gold_ore').toJson()
        ],
        results: [{
            "count": 27,
            "item": 'minecraft:gold_nugget'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }, {
            "count": 1,
            "chance": 0.12,
            "item": 'minecraft:netherrack'
        }],
        processingTime: 100
    })

    // Nether Quartz Ore - minecraft:nether_quartz_ore [results] 6x 100% minecraft:quartz, 3x 25% minecraft:quartz, 1x 75% create:experience_nugget, 1x 12% minecraft:netherrack - rid# create:crushing/nether_quartz_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:nether_quartz_ore').toJson()
        ],
        results: [{
            "count": 6,
            "item": 'minecraft:quartz'
        }, {
            "count": 3,
            "chance": 0.25,
            "item": 'minecraft:quartz'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }, {
            "count": 1,
            "chance": 0.12,
            "item": 'minecraft:netherrack'
        }],
        processingTime: 100
    })

    // Zinc Ore - create:zinc_ore [results] 3x 100% create:crushed_zinc_ore, 1x 75% create:experience_nugget - rid# create:crushing/zinc_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('create:zinc_ore').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_zinc_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Deepslate Zinc Ore - create:deepslate_zinc_ore [results] 3x 100% create:crushed_zinc_ore, 1x 75% create:experience_nugget - rid# create:crushing/deepslate_zinc_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('create:deepslate_zinc_ore').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_zinc_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Bauxite Ore - immersiveengineering:ore_aluminum [results] 3x 100% create:crushed_aluminum_ore, 1x 75% create:experience_nugget - rid# create:crushing/aluminum_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('immersiveengineering:ore_aluminum').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_aluminum_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Deepslate Bauxite Ore - immersiveengineering:deepslate_ore_aluminum [results] 3x 100% create:crushed_aluminum_ore, 1x 75% create:experience_nugget
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('immersiveengineering:deepslate_ore_aluminum').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_aluminum_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Lead Ore - immersiveengineering:ore_lead [results] 3x 100% create:crushed_lead_ore, 1x 75% create:experience_nugget - rid# create:crushing/lead_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('immersiveengineering:ore_lead').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_lead_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Deepslate Lead Ore - immersiveengineering:deepslate_ore_lead [results] 3x 100% create:crushed_lead_ore, 1x 75% create:experience_nugget
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('immersiveengineering:deepslate_ore_lead').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_lead_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Silver Ore - immersiveengineering:ore_silver [results] 3x 100% create:crushed_silver_ore, 1x 75% create:experience_nugget - rid# create:crushing/silver_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('immersiveengineering:ore_silver').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_silver_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Deepslate Silver Ore - immersiveengineering:deepslate_ore_silver [results] 3x 100% create:crushed_silver_ore, 1x 75% create:experience_nugget
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('immersiveengineering:deepslate_ore_silver').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_silver_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Nickel Ore - immersiveengineering:ore_nickel [results] 3x 100% create:crushed_nickel_ore, 1x 75% create:experience_nugget - rid# create:crushing/nickel_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('immersiveengineering:ore_nickel').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_nickel_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Deepslate Nickel Ore - immersiveengineering:deepslate_ore_nickel [results] 3x 100% create:crushed_nickel_ore, 1x 75% create:experience_nugget
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('immersiveengineering:deepslate_ore_nickel').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_nickel_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Uranium Ore - immersiveengineering:ore_uranium [results] 3x 100% create:crushed_uranium_ore, 1x 75% create:experience_nugget - rid# create:crushing/uranium_ore
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('immersiveengineering:ore_uranium').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_uranium_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Deepslate Uranium Ore - immersiveengineering:deepslate_ore_uranium [results] 3x 100% create:crushed_uranium_ore, 1x 75% create:experience_nugget
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('immersiveengineering:deepslate_ore_uranium').toJson()
        ],
        results: [{
            "count": 3,
            "item": 'create:crushed_uranium_ore'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Deepslate Uraninite Ore (Poor) - powah:deepslate_uraninite_ore_poor [results] 5x 100% powah:uraninite_raw, 1x 75% create:experience_nugget
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('powah:deepslate_uraninite_ore_poor').toJson()
        ],
        results: [{
            "count": 5,
            "item": 'powah:uraninite_raw'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Deepslate Uraninite Ore - powah:deepslate_uraninite_ore [results] 9x 100% powah:uraninite_raw, 1x 75% create:experience_nugget
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('powah:deepslate_uraninite_ore').toJson()
        ],
        results: [{
            "count": 9,
            "item": 'powah:uraninite_raw'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Deepslate Uraninite Ore (Dense) - powah:deepslate_uraninite_ore_dense [results] 18x 100% powah:uraninite_raw, 1x 75% create:experience_nugget
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('powah:deepslate_uraninite_ore_dense').toJson()
        ],
        results: [{
            "count": 18,
            "item": 'powah:uraninite_raw'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Uraninite Ore (Poor) - powah:uraninite_ore_poor [results] 5x 100% powah:uraninite_raw, 1x 75% create:experience_nugget
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('powah:uraninite_ore_poor').toJson()
        ],
        results: [{
            "count": 5,
            "item": 'powah:uraninite_raw'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Uraninite Ore - powah:uraninite_ore [results] 9x 100% powah:uraninite_raw, 1x 75% create:experience_nugget
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('powah:uraninite_ore').toJson()
        ],
        results: [{
            "count": 9,
            "item": 'powah:uraninite_raw'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Uraninite Ore (Dense) - powah:uraninite_ore_dense [results] 18x 100% powah:uraninite_raw, 1x 75% create:experience_nugget
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('powah:uraninite_ore_dense').toJson()
        ],
        results: [{
            "count": 18,
            "item": 'powah:uraninite_raw'
        }, {
            "count": 1,
            "chance": 0.75,
            "item": 'create:experience_nugget'
        }],
        processingTime: 100
    })

    // Dimensional Shard Ore - rftoolsbase:dimensionalshard_overworld [results] 2x 100% rftoolsbase:dimensionalshard
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('rftoolsbase:dimensionalshard_overworld').toJson()
        ],
        results: [{
            "count": 2,
            "item": 'rftoolsbase:dimensionalshard'
        }],
        processingTime: 100
    })

    // Dimensional Shard Ore - rftoolsbase:dimensionalshard_nether [results] 2x 100% rftoolsbase:dimensionalshard
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('rftoolsbase:dimensionalshard_nether').toJson()
        ],
        results: [{
            "count": 2,
            "item": 'rftoolsbase:dimensionalshard'
        }],
        processingTime: 100
    })

    // Dimensional Shard Ore - rftoolsbase:dimensionalshard_end [results] 2x 100% rftoolsbase:dimensionalshard
    e.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('rftoolsbase:dimensionalshard_end').toJson()
        ],
        results: [{
            "count": 2,
            "item": 'rftoolsbase:dimensionalshard'
        }],
        processingTime: 100
    })
})