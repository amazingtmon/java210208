(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
			"cell" :
			{
				"class" :
				[
					{
						"cell_style1" :
						{
							"parent" :
							{
								"row" :
								{
									"parent" :
									{
										"body" :
										{
											"parent" :
											{
												"Grid" :
												{
													"self" :
													{
														"enabled" :
														{
															"color" : nexacro.ColorObject("#3da2df"),
															"font" : nexacro.FontObject("bold italic 12pt/normal \"Arial\"")
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				],
				"parent" :
				{
					"row" :
					{
						"parent" :
						{
							"body" :
							{
								"parent" :
								{
									"Grid" :
									{
										"class" :
										[
											{
												"grd_MT_mnuPop" :
												{
													"self" :
													{
														"enabled" :
														{
															"color" : nexacro.ColorObject("#ffffff"),
															"font" : nexacro.FontObject("normal 700 20px/normal \"Verdana\""),
															"padding" : nexacro.PaddingObject("2px"),
															"border" : nexacro.BorderObject("0px none , 0px none , 1px solid #cbcbcb , 0px none")
														},
														"mouseover" :
														{
															"color" : nexacro.ColorObject("#ffffff"),
															"font" : nexacro.FontObject("normal 700 20px/normal \"Verdana\""),
															"padding" : nexacro.PaddingObject("2px"),
															"border" : nexacro.BorderObject("0px none , 0px none , 1px solid #cbcbcb , 0px none")
														},
														"selected" :
														{
															"color" : nexacro.ColorObject("#546169"),
															"font" : nexacro.FontObject("normal 700 20px/normal \"Verdana\""),
															"padding" : nexacro.PaddingObject("2px"),
															"border" : nexacro.BorderObject("0px none , 0px none , 1px solid #cbcbcb , 0px none")
														}
													}
												}
											}
										]
									}
								}
							}
						}
					}
				}
			},
			"Grid" :
			{
				"class" :
				[
					{
						"grd_MT_mnuPop" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #b42854,0px none,0px none,0px none")
								}
							}
						}
					}
				]
			}
		},
		{
			"includeStatusMap" : true
		}
		);

		var imgcache = nexacro._getImageCacheMaps();
		
	};
}
)();
