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
  ]

  const handleNext = () => {
    if (currentIndex + 10 >= images.length) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 10)
    }
  }

  const handlePrevious = () => {
    if (currentIndex - 10 < 0) {
      setCurrentIndex(images.length - (images.length % 10))
    } else {
      setCurrentIndex(currentIndex - 10)
    }
  }

  return (
    <div>
      <h1>Midjourney Gallery with Prompts</h1>
      <div>
        <button onClick={handlePrevious}>PREVIOUS</button>
        <button onClick={handleNext}>NEXT</button>
      </div>
      {images.slice(currentIndex, currentIndex + 10).map((image, index) => (
        <div key={index}>
          <div>{`Image ${currentIndex + index + 1} of ${images.length}`}</div>
          <img src={`images/${image.image}`} />
          <div>{image.prompt}</div>
        </div>
      ))}
      <div>
        <button onClick={handlePrevious}>PREVIOUS</button>
        <button onClick={handleNext}>NEXT</button>
      </div>
    </div>
  )
}

export default Gallery
