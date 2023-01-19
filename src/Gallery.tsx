import React, { useState } from 'react'

interface Image {
  image: string
  prompt: string
}

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images: Image[] = [
    {
      image:
        'hypnotist69_Angry_spirit_female_screaming_in_pain_and_anger_fan_37424a5a-2ab9-4abb-8d54-4cfc521226b9.png',
      prompt:
        'Angry spirit female screaming in pain and anger, fantasy, extremely detailed, digital painting, artstation, concept art, smooth, sharp focus, illustration, stunning lighting, art by artgerm and greg rutkowski and alphonse mucha and simon stalenhag, realistic character concept, high fantasy, light atmosphere, golden ratio, cinematic lighting, hyperdetailed, high resolution, insanely detailed and intricate, artstation, Marc Simonetti, Greg Rutkowski, 8k resolution, photorealistic, epic atmosphere, digital art, ultra realistic, photo realistic, high, insanely detailed intricate',
    },
    {
      image:
        'OPe_A_Small_Abandoned_Station_at_Night_by_Bernard_Tschumi_Grego_db2eb9ee-0ccb-4f85-9a9f-ef189ddb3be3.png',
      prompt:
        'A Small Abandoned Station at Night by Bernard Tschumi, Gregory Crewdson, Frank Gehry, Ludwig Mies van der Rohe, Moshe Safdie, Shigeru Ban, Zaha Hadid, Ray Eames',
    },
    {
      image:
        'Trollz_luxury_residential_buildings_in_Dubai_8c0650f4-7550-47f8-aeac-c9ccf3b6ae55.png',
      prompt:
        'luxury residential buildings in Dubai ::5 Professional Website UI Design::4 user-friendly, modern, clean, responsive, Adobe Photoshop, professional, corporate, award-winning, glibatree style, intuitive navigation, visually appealing layout, high-quality graphics::3 deformed, outdated, cluttered layout, low-quality graphics::-2 --seed 1',
    },
    {
      image:
        'The_Emperor_woman_monk_5e_female_battle_scarred_boxing_pose_fis_31754321-c85c-45a2-a4fa-013130983e15.png',
      prompt:
        'woman, monk 5e, female, battle scarred, boxing pose, fists, Riven LoL, glowing golden eyes, radiant eyes glowing gold, hand wraps white, amber skin, silver hair, Unreal Engine 5, Cinematic, portrait Photography, Ultra-Wide Angle, Depth of Field, hyper-detailed, insane details, intricate details, beautifully color graded, Unreal Engine, Cinematic, Photoshoot, Shot on 25mm lens, Depth of Field, DOF, Tilt Blur, Shutter Speed 1/1000, F/22, White Balance, 32k, Super-Resolution, Megapixel, Pro Photo RGB, VR, Lonely, Good, Massive, Half rear Lighting, Backlight, Natural Lighting, Incandescent, Optical Fiber, Moody Lighting, Cinematic Lighting, Studio Lighting, Soft Lighting, Volumetric, Conte-Jour, Beautiful Lighting, Accent Lighting, Global Illumination, Screen Space Global Illumination, Ray Tracing Global Illumination, Optics, Scattering, Glowing, Shadows, Rough, Shimmering, Ray Tracing Reflections, Lumen Reflections, Screen Space Reflections, Diffraction Grading, Chromatic Aberration, GB Displacement, Scan Lines, Ray Traced, Ray Tracing Ambient Occlusion, Anti-Aliasing, FKAA, TXAA, RTX, SSAO, Shaders, OpenGL-Shaders, GLSL-Shaders, Post Processing, Post-Production, Cell Shading, Tone Mapping, CGI, VFX, SFX, insanely detailed and intricate, hyper maximalist, elegant, super detailed, dynamic pose, photography, volumetric, ultra-detailed, intricate details, 8K, super detailed, ambient occlusion, volumetric lighting, high contrast, HDR',
    },
    {
      image:
        'Spencer_Crandall_little_tiny_rabbits_in_a_row_pushing_shopping__133184c2-e6c5-44a3-b25b-0c3354582d04.png',
      prompt:
        'little tiny rabbits in a row pushing shopping carts brimming with fruits & vegetables, watercolor, ar--3:2 --v 4',
    },
    {
      image:
        'sputnick_grand_theft_auto_4_map_with_bridge_liberty_city_map_Un_15559e62-529f-42fb-8786-a7a36368bab9.png',
      prompt:
        'grand theft auto 4, map with bridge, liberty city map, Unreal Engine 5, Cinematic, portrait Photography, Ultra-Wide Angle, Depth of Field, hyper-detailed, insane details, intricate details, beautifully color graded, Unreal Engine, Cinematic, Photoshoot, Shot on 25mm lens, Depth of Field, DOF, Tilt Blur, Shutter Speed 1/1000, F/22, White Balance, 32k, Super-Resolution, Megapixel, Pro Photo RGB, VR, Lonely, Good, Massive, Half rear Lighting, Backlight, Natural Lighting, Incandescent, Optical Fiber, Moody Lighting, Cinematic Lighting, Studio Lighting, Soft Lighting, Volumetric, Conte-Jour, Beautiful Lighting, Accent Lighting, Global Illumination, Screen Space Global Illumination, Ray Tracing Global Illumination, Optics, Scattering, Glowing, Shadows, Rough, Shimmering, Ray Tracing Reflections, Lumen Reflections, Screen Space Reflections, Diffraction Grading, Chromatic Aberration, GB Displacement, Scan Lines, Ray Traced, Ray Tracing Ambient Occlusion, Anti-Aliasing, FKAA, TXAA, RTX, SSAO, Shaders, OpenGL-Shaders, GLSL-Shaders, Post Processing, Post-Production, Cell Shading, Tone Mapping, CGI, VFX, SFX, insanely detailed and intricate, hyper maximalist, elegant, super detailed, dynamic pose, photography, volumetric, ultra-detailed, intricate details, 8K, super detailed, ambient occlusion, volumetric lighting, high contrast, HDR - --v 4',
    },
    {
      image:
        '21design_FLOWERS_JUNGLE_in_the_style_of_tommy_bahama_carefree_i_92325c5b-6f5e-4a1c-b8c4-7c4f14a3a8b0.png',
      prompt:
        'FLOWERS JUNGLE, in the style of tommy bahama, carefree, island-influenced, print, --ar 3:2',
    },
    {
      image:
        'asgardian_badass_tattooed_velma_sitting_in_the_background_blurr_b5f421b8-eb25-4cca-90be-f42a944e123c.png',
      prompt:
        'badass tattooed velma sitting, in the background blurred neon lightnings, dynamic pose, dynamic neon colors, dynamic lights, full body pose, ultra realistic, ultra detailed, 4k',
    },
    {
      image:
        'scamble_a_junk_drawer_full_of_screws_washers_springs_doorknob_s_dc656c04-daea-437b-902b-96998e4d812c.png',
      prompt:
        'a junk drawer, full of screws, washers, springs, doorknob, sewing notions, breath mints, tic-tacs, buttons, bolts and bits of twine, etc,. really complex, --v 4',
    },
    {
      image:
        'Rawkul_an_ink_draw_of_the_sun_depicted_as_a_plain_sphere_illumi_15a41733-451b-4c23-ac12-79f63d4a911c.png',
      prompt:
        'an ink draw of the sun depicted as a plain sphere illuminated from left to right. dotted technique. Black ink on white background. --v 4',
    },
    {
      image:
        'Meta_Solutions_by_Aliza_Razell_ed936702-877d-40b6-a9be-cf92728c8d07.png',
      prompt: 'by Aliza Razell',
    },
    {
      image:
        'Lezen_the_Aeon_Vita_vital_life_leaves_female_strange_beautiful__448d1f9e-2045-44a7-b195-a6faefa69cdd.png',
      prompt:
        'the Aeon Vita, vital, life, leaves, female, strange, beautiful, holy, stained glass, rectangle, full image',
    },
    {
      image:
        'The_Hyperverse_gold_floor_marble_texture_map_4k_77791ae4-2ab1-407d-bf36-a2ee35d2e333.png',
      prompt: 'gold floor marble texture map 4k',
    },
    {
      image:
        'chris2sissi_Realistic_foggy_scary_background_cinematic_lights_n_4d9aa103-b5ee-4ee6-9c74-c1022885eaf0.png',
      prompt:
        'Realistic foggy scary background, cinematic lights, neon dynamic colors, lightnings, ultra detailed, 4k',
    },
    {
      image:
        'Dalena_old_style_painted_porcelain_apple_transformed_into_Cybor_6a0daf82-60d4-40a8-937e-5532cc0f5d78.png',
      prompt:
        'old style painted porcelain apple transformed into Cyborg , ultra realistic, lots of fine detail, ultra resolution, photorealism, epic light, dramatic atmosphere --v 4 --q 5 --chaos 100 --ar 2:3',
    },
    {
      image:
        'hypnotist69_Butterfly_lady_intricate_elegant_highly_detailed_di_30d1ef30-675c-46f2-9238-18c206859caf.png',
      prompt:
        'Butterfly lady, intricate, elegant, highly detailed, digital painting, artstation, concept art, smooth, sharp focus, illustration, art by artgerm and greg rutkowski and alphonse mucha',
    },
    {
      image:
        'K9_Atreus_From_God_of_War__live_action__in_a_movie_scene__drama_82162556-64d7-4be3-8841-dca5b5b81b8b.png',
      prompt:
        'Atreus From God of War , live action, + in a movie scene + dramatic lighting, 4k image, shot from a movie, cinematic composition shot, cinematic still shot, cinematic composition, cinematic, incredibly detailed, depth of field, movie, cinematography, cinematic, color grading, professional color grading --ar 2:3 --v 4',
    },
    {
      image:
        'The_Emperor_woman_monk_5e_female_battle_scarred_Riven_LoL_glowi_8438e09a-7c67-44a1-b661-926e23524965.png',
      prompt:
        'woman, monk 5e, female, battle scarred, Riven LoL, glowing golden eyes, hand wraps white, amber skin, silver hair, final fantasy, Unreal Engine 5, Cinematic, portrait Photography, Ultra-Wide Angle, Depth of Field, hyper-detailed, insane details, intricate details, beautifully color graded, Unreal Engine, Cinematic, Photoshoot, Shot on 25mm lens, Depth of Field, DOF, Tilt Blur, Shutter Speed 1/1000, F/22, White Balance, 32k, Super-Resolution, Megapixel, Pro Photo RGB, VR, Lonely, Good, Massive, Half rear Lighting, Backlight, Natural Lighting, Incandescent, Optical Fiber, Moody Lighting, Cinematic Lighting, Studio Lighting, Soft Lighting, Volumetric, Conte-Jour, Beautiful Lighting, Accent Lighting, Global Illumination, Screen Space Global Illumination, Ray Tracing Global Illumination, Optics, Scattering, Glowing, Shadows, Rough, Shimmering, Ray Tracing Reflections, Lumen Reflections, Screen Space Reflections, Diffraction Grading, Chromatic Aberration, GB Displacement, Scan Lines, Ray Traced, Ray Tracing Ambient Occlusion, Anti-Aliasing, FKAA, TXAA, RTX, SSAO, Shaders, OpenGL-Shaders, GLSL-Shaders, Post Processing, Post-Production, Cell Shading, Tone Mapping, CGI, VFX, SFX, insanely detailed and intricate, hyper maximalist, elegant, super detailed, dynamic pose, photography, volumetric, ultra-detailed, intricate details, 8K, super detailed, ambient occlusion, volumetric lighting, high contrast, HDR',
    },
    {
      image:
        'asgardian_badass_tattooed_velma_in_the_background_blurred_neon__401e47ea-c218-4b6e-bc45-4b41c58cff13.png',
      prompt:
        'badass tattooed velma, in the background blurred neon lightnings, anime style, lineart, dynamic pose, dynamic colors, dynamic lights, full body pose, post apocaliptic futuristic details',
    },
    {
      image:
        'lancesfa_logo_in_vector_format_with_bobcat_looking_straight_ahe_fcfc2637-35f8-4952-9483-d542ed42508c.png',
      prompt:
        'logo in vector format, with bobcat looking straight ahead using colors green and yellow',
    },
    {
      image:
        'chris2sissi_full_page_vector_illustration_poster_of_kids_a_kitt_9bc08b3e-b44d-4b59-92cf-a6e802c69759.png',
      prompt:
        'full page vector illustration poster of kids, a kitten with an armor of candy and chocolate for his muscles brandishes a banana containing a sword, style cartoon, cinematic, fluorescent, highly detailed, hyper realistic, sunny day, high quality, 8k, ultrarealistic, intrinsic details, ray tracing --v 4 --ar 3:2 --q 2',
    },
    {
      image:
        'hypnotist69_Lizard_lady_detailed_high_quality_8K_high_detail_ma_6c3b0bfc-12ec-4a75-ad22-e6c1e77cd4f5.png',
      prompt:
        'Lizard lady, detailed, high quality, 8K, high detail, masterpiece, trending on ArtStation, cyberpunk, blade runner 2049, yellow eyes, a lot of cables and wires around, by Alex Grey, by Greg Rutkowski, holography, neo-classical, dystopian, samurai, sci-fi, female, machine warrior, very very anime, cyberpunk, symmetry accurate human anatomy portrait, cyberpunk, sci-fi',
    },
    {
      image:
        'cuddlylion_bru_man_chu_in_the_style_of_tommy_bahama_carefree_is_d6b5a4e8-202d-4eeb-a0d8-6bec4393733e.png',
      prompt:
        'bru man chu, in the style of tommy bahama, carefree, island-influenced, print, --ar 3:2',
    },
    {
      image:
        'Rawkul_a_baby_blue_dragon_with_some_golden_scales_and_a_scale_b_aa0a44fd-b13d-4e2d-8ded-d348efbd2d39.png',
      prompt:
        'a baby blue dragon with some golden scales and a scale beard. snowy plains. dnd fantasy --v 4 --no cute',
    },
    {
      image: 'OPe_by_Bert_Hardy_1c0b1c50-641f-4541-aff7-fd5c0c14a433.png',
      prompt: 'by Bert Hardy',
    },
    {
      image:
        'Bjs_pits_n_grillz_Rerolling_Lowrider_Art_1965_Chevy_impala_supe_f4303f8a-f75f-47d9-9558-f9ccd8df9565.png',
      prompt:
        'Lowrider Art, 1965 Chevy impala super sport Lowrider car covered in psychedelic mushrooms, neon, green, blue, purple, pink,yellow, orange, red, retrowave, vaporwave, 8k, ultra detailed, glass plate etching, 3 dimensional',
    },
    {
      image:
        'human_portrait_a_beautiful_k-pop_female_beautiful_model_photogr_50a97bb0-0ae2-411e-b67e-fb49046fdd9f.png',
      prompt:
        "portrait a beautiful k-pop female beautiful model photographed by Sally Mann in black and white, complete the rest of the body, add the waist and legs, full scale, photo taken against the sun, the sun's rays illuminate the hair and back, hyper-detailed skin, hyper-realistic eyes, lavender hair, tall background, cinematic, 80mm, cinematic, epic landscape background --ar 2:3",
    },
    {
      image:
        'ingyt_highly_detailed_futuristic_post-apocalyptic_ruined_megaci_8a8636a5-c23c-4201-9d07-525370294000.png',
      prompt:
        'highly detailed futuristic post-apocalyptic ruined megacity style blade runner by John Berkey, --ar 2:3 --v 4',
    },
    {
      image:
        'ingyt_Zombie_apocalypse_abandoned_train_in_snowstorm_comic_book_86b5ab15-bbde-48bb-81ba-17c475c02404.png',
      prompt:
        'Zombie apocalypse: abandoned train in snowstorm, comic book page Ashley Wood style HD, ultrarealistic --v 4 --ar 2:3',
    },
    {
      image:
        '12volt_50s_scifi_robot_cupid_ultra_realistic_high_definition_ph_62000cc1-c355-4728-967a-2e3edde9eaea.png',
      prompt:
        '50s scifi robot cupid, ultra realistic, high definition, photo, ar 3:2',
    },
    {
      image:
        'AMAR_emerald_shooting_star_theme_louis_vuitton_luxury_retail_st_e8f48917-48cf-484b-b4c3-935615213b36.png',
      prompt:
        'emerald shooting star theme louis vuitton luxury retail store 8k, HD, cinematography, photorealistic, epic composition Unreal Engine, Cinematic, Color Grading, portrait Photography, Ultra-Wide Angle, Depth of Field, hyper-detailed, beautifully color-coded, insane details, intricate details, beautifully color graded, Unreal Engine, Cinematic, Color Grading, Editorial Photography, Photography, Photoshoot, Depth of Field, DOF, Tilt Blur, White Balance, 32k, Super-Resolution, Megapixel, ProPhoto RGB, VR, Halfrear Lighting, Backlight, Natural Lighting, Incandescent, Optical Fiber, Moody Lighting, Cinematic Lighting, Studio Lighting, Soft Lighting, Volumetric, Contre-Jour, Beautiful Lighting, Accent Lighting, Global Illumination, Screen Space Global Illumination, Ray Tracing Global Illumination, Optics, Scattering, Glowing, Shadows, Rough, Shimmering, Ray Tracing Reflections, Lumen Reflections, Screen Space Reflections, Diffraction Grading, Chromatic Aberration, GB Displacement, Scan Lines, Ray Traced, Ray Tracing Ambient Occlusion, Anti-Aliasing, FKAA, TXAA, RTX, SSAO, Shaders, OpenGL-Shaders, GLSL-Shaders, Post Processing, Post-Production, Cel Shading, Tone Mapping, CGI, VFX, SFX, insanely detailed and intricate, hypermaximalist, elegant, hyper realistic, super detailed, dynamic pose, photography, 8k --v 4',
    },
    {
      image:
        'rkever2000_a_skeleton_decorted_like_a_sugar_skull_with_small_wi_7a794d1e-edd1-45d6-9ce2-cd7dd852a35a.png',
      prompt:
        'a skeleton decorted like a sugar skull with small wings coming out the side of his head similar to a puritan funerary symbol',
    },
    {
      image:
        'autumn_cafe_yellow_quartz_perfume_bottle_8k_HD_cinematography_p_c958d477-2bc2-4072-9423-d4c87854e8a8.png',
      prompt:
        'yellow quartz perfume bottle 8k, HD, cinematography, photorealistic, epic composition Unreal Engine, Cinematic, Color Grading, portrait Photography, Ultra-Wide Angle, Depth of Field, hyper-detailed, beautifully color-coded, insane details, intricate details, beautifully color graded, Unreal Engine, Cinematic, Color Grading, Editorial Photography, Photography, Photoshoot, Depth of Field, DOF, Tilt Blur, White Balance, 32k, Super-Resolution, Megapixel, ProPhoto RGB, VR, Halfrear Lighting, Backlight, Natural Lighting, Incandescent, Optical Fiber, Moody Lighting, Cinematic Lighting, Studio Lighting, Soft Lighting, Volumetric, Contre-Jour, Beautiful Lighting, Accent Lighting, Global Illumination, Screen Space Global Illumination, Ray Tracing Global Illumination, Optics, Scattering, Glowing, Shadows, Rough, Shimmering, Ray Tracing Reflections, Lumen Reflections, Screen Space Reflections, Diffraction Grading, Chromatic Aberration, GB Displacement, Scan Lines, Ray Traced, Ray Tracing Ambient Occlusion, Anti-Aliasing, FKAA, TXAA, RTX, SSAO, Shaders, OpenGL-Shaders, GLSL-Shaders, Post Processing, Post-Production, Cel Shading, Tone Mapping, CGI, VFX, SFX, insanely detailed and intricate, hypermaximalist, elegant, hyper realistic, super detailed, dynamic pose, photography, 8k --v 4',
    },
    {
      image:
        'Tyr_Alexander_dire_wolf_black_and_white_image_for_coloring_book_4fdb9f6f-731b-4ab8-9ab9-8062fa074723.png',
      prompt: 'dire wolf, black and white image for coloring book',
    },
    {
      image:
        'human_tight_bodysuit_armor_future_retro_evangelion_K-pop_aesthe_e35bb010-6985-43da-b6c7-75101023515f.png',
      prompt:
        'tight bodysuit armor future retro, evangelion, K-pop aesthetics, entire body, frontal pose, fashion model pose, feminine figure, real human face, minimal, low angle view, extreme perspective, photographic, hyperrealistic, cinematic, 8K, extreme detail, extremely realistic, vibrant colors, textural, HD ultra-realistic, 35mm lens, skintight, transparent latex, soft mood light, matte, extreme pose, head to toe, full figured, Hyper feminine figure, hypersexualized, revealing, body figure, vibrant neon light, 35mm film photography, full grain, epic lighting, tall background, full frame, dramatic lights, neo-future landscape, --ar 2:3',
    },
    {
      image:
        'Hiprioni_Sikorsky_sea_king_helicopter_but_from_Star_Wars_39de8efe-ae47-4af6-9aab-961462451a34.png',
      prompt: 'Sikorsky sea king helicopter but from Star Wars',
    },
    {
      image:
        'Hiprioni_environment_concept_art_feudal_Japan_evening_winter_Ja_1db1c8c3-d01f-4fbb-b204-ea819e4bfab1.png',
      prompt:
        'environment concept art, feudal Japan, evening, winter, Japanese lanterns, girl walking upstairs wearing traditional dress, nine tail fox walking on the right side from the --ar 3:2',
    },
    {
      image:
        'Kennydakydd_tattoos_Old_western_Afro_Samurai_by_Anna_Dittmann_V_d850a14f-ad8b-4b18-8bf3-769c895f3e11.png',
      prompt:
        'Old western Afro Samurai by Anna Dittmann, Vibrant, In Watercolour --ar 2:3 --c 30',
    },
    {
      image:
        'oma_thule_portrait_a_beautiful_30-year-old_Norwegian_female_bea_03936a6d-efb6-467e-9b17-97a8c44b9633.png',
      prompt:
        "portrait a beautiful 30-year-old Norwegian female beautiful model photographed by Sally Mann in black and white, shot from the waist up, wearing a red denim jacket with a white fur red collar, standing in the bus, photo taken against the sun, the sun's rays illuminate the hair and back, hyper-detailed skin, hyper-realistic eyes, blonde-hair --ar 2:3 --v 4",
    },
    {
      image:
        'Kennydakydd_tattoos_Ancient_African_Goddess_complimentary_color_c9233b15-7e4e-4d30-a1ff-a8f552450b53.png',
      prompt:
        'Ancient African Goddess, complimentary colored butterfly,by Anna Dittmann, Vibrant, In Watercolour --ar 2:3 --c 30',
    },
    {
      image:
        'kike-snt_ilustration_crazy_skeleton_on_war_in_style_of_iron_mai_e3f76307-845e-4df5-98f5-99e86581ff9d.png',
      prompt:
        'illustration, crazy skeleton on war in style of iron maiden --ar 2:3 --v 4',
    },
    {
      image:
        'Hiprioni_cyberpunk_styled_bike_painted_red_and_chrome_details_s_aa8d92c2-1715-4e28-bd5e-6960886d81a2.png',
      prompt:
        'cyberpunk styled bike, painted red and chrome, details shape is smooth',
    },
    {
      image:
        'ingyt_a_demon_embraces_a_beautiful_woman_red_moon_Ashley_wood_s_d762bcca-0c92-4ff8-bdf5-e493a396552b.png',
      prompt:
        'a demon embraces a beautiful woman, red moon, Ashley wood style, --ar 2:3 --v 4',
    },
    {
      image:
        'emmylouthejew_Twilight_low_angle_view_of_the_Milky_Way_from_wit_6c217fd8-c508-4670-8d09-020e9f9c94dd.png',
      prompt:
        'Twilight low angle view of the Milky Way from within the overhanging branches of an epic willow tree, overgrown with ivy + ferns + vines + fungi, decay, rising mist, nearby stream, stars, dramatic natural night lighting, cinematic, mystical, intriguing, serene, hdr, intricately detailed, octane render --q 4 --upbeta --chaos 100 --ar 3:2',
    },
    {
      image:
        'emmylouthejew_Twilight_low_angle_view_of_the_Milky_Way_from_wit_e53591df-1493-4498-940b-b9a57ecc9875.png',
      prompt:
        'Twilight low angle view of the Milky Way from within the overhanging branches of an epic willow tree, overgrown with ivy + ferns + vines + fungi, decay, rising mist, nearby stream, stars, dramatic natural night lighting, cinematic, mystical, intriguing, serene, hdr, intricately detailed, octane render --ar 3:2 --test --creative --upbeta --chaos 10',
    },
    {
      image:
        'earthkdkd_japanese_samurai_whole_body_portrait_in_the_style_of__20f10129-1405-4be9-9b8c-8fbf5f4ff200.png',
      prompt:
        'japanese samurai, whole body portrait in the style of Gustav Klimt::7 and HR Gigger::4, 3D::3, ornamental organic metallic machinery design::4, morphing smoke on edges::6, gold::4, fractals::1, jewellery::3 Reflections, Color Grading, Ultra-Wide Angle, Depth of Field, hyper-detailed, beautifully color-coded, intricate details, photorealistic, 8k, cinematography, photorealistic --v 4 --s 850 --ar 3:2 --q 5',
    },
    {
      image:
        'earthkdkd_japanese_samurai_whole_body_portrait_in_the_style_of__aa557687-88af-48a2-87a7-7f3fb4a6f524.png',
      prompt:
        'japanese samurai, whole body portrait in the style of Gustav Klimt::7 and HR Gigger::4, 3D::3, ornamental organic metallic machinery design::4, morphing smoke on edges::6, gold::4, fractals::1, jewellery::3 Reflections, Color Grading, Ultra-Wide Angle, Depth of Field, hyper-detailed, beautifully color-coded, intricate details, photorealistic, 8k, cinematography, photorealistic --v 4 --s 850 --ar 3:2 --q 5',
    },
    {
      image:
        'JasonW_cartoon_windup_fish_robotic_93099359-edcf-40b2-9faf-fa88f721e4d2.png',
      prompt: 'cartoon windup fish, robotic',
    },
    {
      image:
        'Natstah_harry_potter_cyberpunk_d1489434-7829-464a-8494-dd06aac27668.png',
      prompt: 'harry potter cyberpunk',
    },
    {
      image:
        'LittleAnt_9_tail_fox_looking_forward_red_and_White_cute_anime_s_ae556870-71ba-4e83-8983-9dce8e115a68.png',
      prompt:
        '9 tail fox, looking forward, red and White, cute anime style, sticker style, goofy looking',
    },
    {
      image:
        'LPKILI_Very_Dark_Room_Glowing_ball_lens_flare_hologram_hologra_e42b799a-826b-491f-900f-112372e576e6.png',
      prompt:
        'Very Dark Room, Glowing ball, lens flare, hologram, holographic, earth globe atlas, grid matrix, floating, flying, Isolated, 3d render, 8k, HD, cinematography, photorealistic, epic composition Unreal Engine, Cinematic, Color Grading, portrait Photography, Ultra-Wide Angle, Depth of Field, hyper-detailed, beautifully color-coded, insane details, intricate details, beautifully color graded, Unreal Engine, Cinematic, Color Grading, Editorial Photography, Photography, Photoshoot, Depth of Field, DOF, Tilt Blur, White Balance, 32k, Super-Resolution, Megapixel, ProPhoto RGB, VR, Halfrear Lighting, Backlight, Natural Lighting, Incandescent, Optical Fiber, Moody Lighting, Cinematic Lighting, Studio Lighting, Soft Lighting, Volumetric, Contre-Jour, Beautiful Lighting, Accent Lighting, Global Illumination, Screen Space Global Illumination, Ray Tracing Global Illumination, Optics, Scattering, Glowing, Shadows, Rough, Shimmering, Ray Tracing Reflections, Lumen Reflections, Screen Space Reflections, Diffraction Grading, Chromatic Aberration, GB Displacement, Scan Lines, Ray Traced, Ray Tracing Ambient Occlusion, Anti-Aliasing, FKAA, TXAA, RTX, SSAO, Shaders, OpenGL-Shaders, GLSL-Shaders, Post Processing, Post-Production, Cel Shading, Tone Mapping, CGI, VFX, SFX, insanely detailed and intricate, hypermaximalist, elegant, hyper realistic, super detailed, dynamic pose, photography, no background, Typography LP, 8k 8k --v 4 --v 4 --ar 3:2',
    },
  ]

  const imagesPerPage = 5

  const handleNext = () => {
    if (currentIndex + imagesPerPage >= images.length) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + imagesPerPage)
    }
    window.scrollTo(0, 0)
  }

  const handlePrevious = () => {
    if (currentIndex - imagesPerPage < 0) {
      setCurrentIndex(images.length - (images.length % imagesPerPage))
    } else {
      setCurrentIndex(currentIndex - imagesPerPage)
    }
    window.scrollTo(0, 0)
  }

  const Buttons = () => {
    return (
      <div>
        <button onClick={handlePrevious}>PREVIOUS</button>
        <button onClick={handleNext}>NEXT</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Midjourney Gallery with Prompts</h1>
      <Buttons />
      {images
        .slice(currentIndex, currentIndex + imagesPerPage)
        .map((image, index) => (
          <div key={index}>
            <div>{`Image ${currentIndex + index + 1} of ${images.length}`}</div>
            <img src={`images/${image.image}`} />
            <div>{image.prompt}</div>
          </div>
        ))}
      <Buttons />
    </div>
  )
}

export default Gallery
