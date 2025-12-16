import{o as FC,e as OC}from"./index.45e6b93c.js";const eu="";function nn(){const s0=["CLAMP_TO_EDGE","_primitives","onComplete","_emscripten_bind_DracoUInt8Array_DracoUInt8Array_0","PolygonGeometry","startObject","getBarrierPoint",".water","NEGATIVE_INFINITY","parent","_orthographicIn3D","rawConstructor","Unsupported compressed format.","addCredential","offsetX","string","textureId","verticesCount","processFrame","POINT_CLOUD","_fileExtension","_billboardMode","ColorTableMinKey","greaterThanOrEquals","TextureName","RangeDataList","begin","onload","_view","_emscripten_bind_AttributeQuantizationTransform_AttributeQuantizationTransform_0","ViewShed3D","vertexShaderSource","buffer","_screenSpaceCameraController","emscripten_bind_Decoder_GetAttributeFloat_3","getUniformMapCallback","upsampleTerrainData","187803GJoGQz","invoker","minInstensity","Pause","subTexInfos","PhysicalIndex","_subTextureManager","quadKey","Authentication error","_emscripten_enum_draco_DataType_DT_INT8","loading","near","fromCache","emscripten_bind_DracoUInt8Array_size_0","DT_UINT16","Tried to invoke ctor of ","WEBGL_compressed_texture_pvrtc","Space","GlobeSurfaceTileProviderExt","clipPlane","CommonNoLigthNoTextureVp","noise","mixColorTypeChange","updateObjsColor","FillForeColor","_emscripten_bind_Mesh_num_points_0","getCache","getImageData","application/vnd.quantized-mesh,application/octet-stream;q=0.9,*/*;q=0.01","comparedTo","needsStart","RGBA","MaterialManager","emscripten_bind_DracoUInt32Array___destroy___0","region","S3MTile","no native wasm support detected","decode_texCoord3_normConstant","Z_STREAM_END","peek","srcX","_tilesToRender","upWC","endFunc","computeArea","msg","modifyTerrainMesh","line width","Unknown float type: ","createGeometry","resetVisibleChangedQueue","basis_transcoder.wasm","calculateResolution","distance","print","VK_FORMAT_R8G8B8A8_UNORM","clearCustomClipBox","GetAttributeInt16ForAllPoints","ProjectionImage.hue","parameter stop is required!","generateBuffer","Module.instantiateWasm callback failed with error: "," instance already deleted","texUnitIndex","distanceToTile","resolveFramebuffers","attributeLocations","QuadtreeTileExt","getLiveInheritedInstances","minus","isSameDocumentAs","attribute_type","CLIP_NOTHING","ClearCommand","3441465eBrUTS","_subdomainConfig","max visible altitude","contentState","_tweenjs","DEGREES_PER_RADIAN","_emscripten_bind_AttributeTransformData___destroy___0","aPosition0","scheme","TextureManager","setLineVisible","LineWidth","index buffer is null","serverKey","layers","thisProgram","_tileversion","constructor","ModifyTerrain","uv9","FLATTEN","terrainz","rangeList","imageryProvider","instanceBuffer","floatToByte",`
#ifdef EXCAVATION
    uniform sampler2D uExcavationTexture;
    uniform float uExcavationMode;
    uniform vec4 uExcavationRect;
    varying vec4 vExcavationVertexPos;
    vec2 calculatePolyTexCoord(vec4 vertexPos, vec4 rectPos, out float ptInRect){
        vec4 realVertexPos = vertexPos;
        vec2 vecRatio = vec2(rectPos.z - rectPos.x, rectPos.w - rectPos.y);
        vec2 texCoord = vec2(realVertexPos.x - rectPos.x, realVertexPos.y - rectPos.y);
        texCoord.x = texCoord.x / vecRatio.x;
        texCoord.y = texCoord.y / vecRatio.y;
        ptInRect = step(0.0, texCoord.x) * step(0.0, texCoord.y) * step(0.0, 1.0 - texCoord.x) * step(0.0, 1.0 - texCoord.y);
        texCoord = clamp(texCoord, vec2(0.0), vec2(1.0));
        return texCoord;
    }
    bool executeExcavation()
    {

        float hasExcavation = 1.0;
        vec2 vecExcavationTexCoord = calculatePolyTexCoord(vExcavationVertexPos, uExcavationRect, hasExcavation);
        bool excavationInside = (uExcavationMode < 0.5);
        if(hasExcavation < 0.1)
        {
            return !excavationInside;
        }
        if(excavationInside)
        {
            return texture2D(uExcavationTexture, vecExcavationTexCoord.xy).r > 0.5;
        }
        else
        {
            return texture2D(uExcavationTexture, vecExcavationTexCoord.xy).r < 0.5;
        }
    }
#endif
`,"__cache__","setBatchedAttribute","_southeastChild","destructorFunction","stencilCommand","then","equals","_freeVertexArray","invalid distances set","readValueFromPointer","_hintLineVisible","EPSILON5","emscripten_bind_PointAttribute_attribute_type_0","distanceSquared","fromCharCode",'" as a ',"_clipRegionRasterized","setDelayFunction","the index is 0~8","Cesium","handleSuccess","waterNormalMapUrl","TAM_WRAP","emscripten_bind_DracoUInt8Array___destroy___0","sin","scene and mode is required!","createRegularEdgeAttributes","computeCullingVolume","isLeaf","dynCall_viiiiii","addressmode","SceneMode","mode","Unknown integer type: ","_flattenPar","bottomCommands","globalData","specularEnvironmentMaps","isUseRegion","_setThrew","getSkyline2D","requestTileGeometry must not be called before the terrain provider is ready.","matrixU","emscripten_bind_Mesh_Mesh_0","Bounds","_isBigNumber","transpose","_blockCache","dynCall_vii","Cannot convert argument of type ","Bernstein","bindTexture","Matrix3","_farDepthFromNearPlusOne","_addStop","_accumulationDis","return function emval_allocator_","shiftedBy","modifyTerrainMeshMap","getterReturnType","computeTileVisibility","canvas","_edgeDistanceFalloffFactor","invalid code -- missing end-of-block","REPLACE","iconRelatedTextLayerID","Wait","createBatchTable","componentsLength","_duration","GetValue","isSuperMapiServer","_emscripten_bind_PointAttribute_normalized_0","delay","negativeZ","2.1.0","computeFlyToLocationForRectangle","getImageTranscodedSizeInBytes","stopPlayMode","Z_BUF_ERROR","_emscripten_bind_Decoder_DecodeBufferToMesh_2","hookLoadTilesetFunc","AddressMode","textureWidth","Fill_And_WireFrame","subdivideLine","setInputAction","_modelViewDirty","wrap","getAuthority","Title","GLOBE","emscripten_bind_Decoder_DecodeBufferToMesh_2","EPSILON15","worldPosLeftBottom","fileExtension","OSGB","endPosition","draco","Level","fromElements","altitudefree","scaleDenominators","currentRoute","_entireFrustum","Cartesian3","apply","_point","Specular","Cannot pass non-string to C++ string type ","_labelPixelOffset","hcrc","updateBillboardsBounds","RGB_DXT1","_guid","___getTypeName","_emscripten_enum_draco_DataType_DT_INVALID","COLOR","get scene config failed,","webgl2","colorBuffer","pbrParameterChange","spEntity","Matrix","ZERO","_mesh","_isInstanceModel","decode_texCoord2_min","blockRequest","emscripten_bind_DecoderBuffer_Init_2","ROUND_HALF_FLOOR","bottom"," not an object: ","_allTextOverlap","keyWord","fetchText","_isConvert","vertexAttrUniqueIDs","ComponentDatatype","emscripten_bind_Decoder_GetAttributeInt8ForAllPoints_3","RasterRegionVS","_minimumLevel","geoName","emscripten_bind_AttributeQuantizationTransform_AttributeQuantizationTransform_0","emscripten_bind_DracoUInt16Array_size_0","vertexColor","TransparentSorting","DT_INT16","WEBGL2","setOnlyObjsVisible","Argument not an object: ","fromTranslation","ElementCount","AttributeType_Position","_offset"," failed,","vkFormat","emscripten_bind_Decoder_GetAttributeInt32ForAllPoints_3","heightmapHeight","emscripten_bind_Status___destroy___0","_disLabel","_updateColorDictTable","Unsupported draco mesh geometry type.","normalized","elementIndexUint","getActualType","inspect","_emscripten_enum_draco_StatusCode_OK","loadeddata","emscripten_bind_PointCloud_num_attributes_0","VOL_AND_HYP","decode_texCoord4_normConstant","distbits","_context","_eyeHeight","parameter ","TextureWrap","build","_excavationSideTexture","aTexCoordZ","terrainData","lightSourceImpl","calcWindowCoordRect","rightWC","_hasExcavation","Identifier","Roll","_accumulationArea","VisibleDistanceMin","_speed","ROUND_CEIL","unloadBlockTiles","instance","dividedBy","CesiumExt","_emscripten_enum_draco_GeometryAttribute_Type_INVALID","getStringFromTypedArray","onModuleParsed","emscripten_enum_draco_DataType_DT_UINT64","epEntity","setTyped","isConst","SHORT","right","MeasureHandler","_dictTable","RIGHT_CLICK","blockSize","Diffuse","alloc","pass","Available","activeTexture","_addedStops","_tileWidth","emscripten_enum_draco_EncodedGeometryType_TRIANGULAR_MESH","the index is 0~3","_capturePointColor","./utils/strings","Standard","eastNorthUpToFixedFrame","Can not resolve #include <","fieldName","pointLightDecl","ShaderSource","enum","_viewerLineCommand","subTextureManager","Module","blue","AttributeQuantizationTransform","the position is [longitude, latitude ,height] and is not equals viewPosition","compressedTexImage2D","_littleEndian","_requestImagery","atuoConstants","_emscripten_bind_PointAttribute_size_0","getSkyline3D","Failed","ellipsoid","isUpdate","addImageryProvider","getV","_pixelHeight","fromRadians","aTexCoord","getAllRouteStops","blockscale","_wmtstileMatrixSet","isNegative","emscripten_bind_Decoder_GetAttribute_2"," to parameter type ","Init","modifyRegionsMap","_contrast","vertexAttributes","suffix","3411BxIdnp","_ids","aSideness",`
    attribute vec4 aPosition;
    varying vec2 fSelected;
#ifdef VertexColor
    attribute vec4 aColor;
#endif
#ifdef USE_TextureCoordMatrix
    attribute vec2 aTextureCoordMatrix;
#endif
#ifdef VertexNormal
    attribute vec3 aNormal;
#endif
#ifdef Instance
    attribute float instanceId;
#else
    attribute float batchId;
#endif 

#ifdef TextureAtlas
    attribute float aTextureBatchId0;
#endif

#ifdef EXCAVATION
    varying vec4 vExcavationVertexPos;
#endif

#ifdef TexCoord
    attribute vec4 aTexCoord0;
    varying vec4 vTexCoord;
    uniform mat4 uTexMatrix;
    uniform vec2 decodeTexCoord0Min;
    uniform vec2 decodeTexCoord1Min;
#ifdef COMPUTE_TEXCOORD
#ifdef TextureAtlas
    uniform vec4 uTexAtlasDim;
    varying vec4 vTexAtlasTran;
    varying vec4 vTexAtlasScale;
    varying vec4 vTexAtlasSize;
    varying vec2 vMaxMipLevel;
#else
    uniform float uTexture0Width;
    varying vec4 vTexMatrix;
    varying vec4 vTexCoordTransform;
#endif    
#endif
#endif

#ifdef TexCoord2
    attribute vec4 aTexCoord1;
    uniform float uTexture1Width;
    varying vec4 vTexMatrix2;
#endif
#ifdef InstanceBim
    attribute vec4 uv2;
    attribute vec4 uv3;
    attribute vec4 uv4;
    attribute vec4 secondary_colour;
    attribute vec4 uv6;   
#endif

#ifdef InstancePipe
    attribute vec4 uv1;
    attribute vec4 uv2;
    attribute vec4 uv3;
    attribute vec4 uv4;
    attribute vec4 uv5;
    attribute vec4 uv6;
    attribute vec4 uv7;
    attribute vec4 secondary_colour;
    attribute vec4 uv9;
#endif

#ifdef COMPRESS_VERTEX
    uniform vec4 decodePositionMin;
    uniform float decodePositionNormConstant;
#endif

// meshopt\u5224\u65AD
#ifdef MeshOPT_Compress
    uniform vec3 decodeTexCoord0vNormConstant;
    uniform vec3 decodeTexCoord1vNormConstant;
#else
    uniform float decode_texCoord0_normConstant;
    uniform float decode_texCoord1_normConstant;
#endif

#ifdef HYPSOMETRIC
    varying float wValue;    
#endif
#ifdef FLATTEN
    uniform sampler2D uFlattenTexture;
    uniform vec4 uFlattenRect;
#endif
    uniform mat4 uGeoMatrix;
    uniform mat4 uInverseGeoMatrix;
    uniform vec4 uSelectedColor;
    uniform vec4 uFillForeColor;
    
    varying vec4 vSecondColor;
    varying vec4 vPositionMC;
    varying vec3 vPositionEC;
#ifdef VertexNormal
    varying vec3 vNormalEC;
#endif
    
    varying vec4 vColor;
    
    const float SHIFT_LEFT8 = 256.0;
    const float SHIFT_RIGHT8 = 1.0 / 256.0;
    const float SHIFT_RIGHT4 = 1.0 / 16.0;
    const float SHIFT_LEFT4 = 16.0;
    void getTextureMatrixFromZValue(in float nZ, inout float XTran, inout float YTran, inout float scale)
    {
        if(nZ <= 0.0)
        {
            return;
        }
        float nDel8 = floor(nZ * SHIFT_RIGHT8);
        float nDel16 = floor(nDel8 * SHIFT_RIGHT8);
        float nDel20 = floor(nDel16 * SHIFT_RIGHT4);
        YTran = nZ - nDel8 * SHIFT_LEFT8;
        XTran = nDel8 - nDel16 * SHIFT_LEFT8;
        float nLevel = nDel16 - nDel20 * SHIFT_LEFT4;
        scale = 1.0 / pow(2.0, nLevel);
    }
    
    void operation(vec4 operationType, vec4 color, vec4 selectedColor, inout vec4 vertexColor, inout vec2 fSelected)
    {
        float right_2 = operationType.x * 0.5;
        float right_4 = right_2 * 0.5;
        float right_8 = right_4 * 0.5;
        float right_16 = right_8 * 0.5;
        float isSetColor = fract(right_2);
        if(isSetColor > 0.1)
        {
            #ifdef REPLACE_COLOR_TYPE
                vertexColor = color;
                fSelected.x = 1.0;
            #else
                vertexColor *= color;
            #endif
        }
        float isPicked = fract(floor(right_2)* 0.5);
        if(isPicked > 0.1)
        {
            #ifdef REPLACE_SELECT_TYPE
                vertexColor = selectedColor;
                fSelected.y = 1.0;
            #else
                vertexColor *= selectedColor;
            #endif    
        }
        float isHide = fract(floor(right_4)* 0.5);
        if(isHide > 0.1)
        {
            vertexColor.a = 0.0;
        }
    }
    
#ifdef FLATTEN
    float unpackValue(vec4 packedValue)
    {
        float SHIFT_LEFT16 = 65536.0;
        float SHIFT_LEFT8 = 256.0;
        vec4 value = packedValue * 255.0;
        return value.r * SHIFT_LEFT16 + value.g * SHIFT_LEFT8 + value.b - 9000.0;
    }
    vec4 calculateHeight(vec4 vertexPos)
    {
        vec4 vecPos = uGeoMatrix * vec4(vertexPos.xyz, 1.0);
        vec2 vecRatio = vec2(uFlattenRect.z - uFlattenRect.x, uFlattenRect.w - uFlattenRect.y);
        vec2 vecTexCoord = vec2(vecPos.x - uFlattenRect.x, vecPos.y - uFlattenRect.y);
        vecTexCoord.x = vecTexCoord.x / vecRatio.x;
        vecTexCoord.y = vecTexCoord.y / vecRatio.y;
        if(vecTexCoord.x > 1.0 || vecTexCoord.x < 0.0 || vecTexCoord.y > 1.0 || vecTexCoord.y < 0.0)
        {
            return vertexPos;
        }
        float fHeight = unpackValue(texture2D(uFlattenTexture, vecTexCoord.xy));
        fHeight = fHeight;
        if(vecPos.z > fHeight)
        {
            vecPos.z = fHeight;
            vecPos.w = vecPos.z;
        }
        return uInverseGeoMatrix * vec4(vecPos.xyz, 1.0);
    }
#endif
#ifdef TextureAtlas
    uniform highp sampler2D batchTextureAtlas; 
    uniform vec4 batchTextureAtlasStep; 
#ifdef SecTextureAtlas
    uniform highp sampler2D batchTextureAtlasSec; 
    uniform vec4 batchTextureAtlasStepSec; 
#endif
    vec2 computeAtlasSt(float batchId, vec4 step) 
    { 
        float stepX = step.x; 
        float centerX = step.y; 
        float numberOfAttributes = float(1); 
        return vec2(centerX + (batchId * numberOfAttributes * stepX), 0.5); 
    } 
    vec4 atlas_batchTable_xywh(float batchId, sampler2D atlasTexture, vec4 step) 
    { 
        vec2 st = computeAtlasSt(batchId, step); 
        st.x += step.x * float(0); 
        vec4 textureValue = texture2D(atlasTexture, st); 
        vec4 value = textureValue; 
        return value; 
    } 
    void getTexAtlasParameter(in vec4 xywh, in vec2 textureDim, inout vec2 translate, inout vec2 scale, inout vec2 texSize, inout float maxMipLevel)
    {
        float width = xywh.z;
        float height  = xywh.w;
        width *= 2.0 / 3.0;
        maxMipLevel = log2(min(width, height));
        scale.x = width / textureDim.x;
        scale.y = height / textureDim.y;
        translate.x = xywh.x;
        translate.y  = xywh.y;
        translate /= textureDim;
        texSize.x = width;
        texSize.y = height;
    }
#endif
    void main()
    {
      

    #ifdef TexCoord
        #ifdef COMPRESS_TEXCOORD
            #ifdef MeshOPT_Compress
                vec2 texCoord0;
                texCoord0.x = aTexCoord0.x * decodeTexCoord0vNormConstant.x;
                texCoord0.y = aTexCoord0.y * decodeTexCoord0vNormConstant.y;
                vTexCoord.xy = decodeTexCoord0Min + texCoord0.xy;
            #else
                vTexCoord.xy = decodeTexCoord0Min.xy + aTexCoord0.xy * decodeTexCoord0vNormConstant;
            #endif
        #else
            vTexCoord.xy = aTexCoord0.xy;
        #endif
    #endif
    #ifdef COMPUTE_TEXCOORD
    #ifdef TextureAtlas
        if(aTextureBatchId0 < 0.0)
        {
            vMaxMipLevel.x = -1.0;
        }
        else
        {
            vec4 xywh = atlas_batchTable_xywh(aTextureBatchId0, batchTextureAtlas, batchTextureAtlasStep);
            getTexAtlasParameter(xywh, uTexAtlasDim.xy, vTexAtlasTran.xy, vTexAtlasScale.xy, vTexAtlasSize.xy, vMaxMipLevel.x);
        }
    #else
        vTexMatrix = vec4(0.0,0.0,1.0,0.0);
        vTexCoordTransform.x = aTexCoord0.z;
            #ifdef USE_TextureCoordMatrix
                vTexCoordTransform.x = aTextureCoordMatrix.x;
            #endif
        if(vTexCoordTransform.x < -90000.0)
        {
            vTexMatrix.z = -1.0;
        }
        getTextureMatrixFromZValue(floor(vTexCoordTransform.x), vTexMatrix.x, vTexMatrix.y, vTexMatrix.z);
        vTexMatrix.w = log2(uTexture0Width * vTexMatrix.z);
    #endif
    #ifdef TexCoord2
    #ifdef TextureAtlas
        if(aTextureBatchIdSec < 0.0)
        {
            vMaxMipLevel.y = -1.0;
        }
        else
        {
            vec4 xywh2 = atlas_batchTable_xywh(aTextureBatchIdSec, batchTextureAtlasSec, batchTextureAtlasStepSec);
            getTexAtlasParameter(xywh2, uTexAtlasDim.zw, vTexAtlasTran.zw, vTexAtlasScale.zw, vTexAtlasSize.zw, vMaxMipLevel.y);
        }
    #else
        vTexCoord.zw = aTexCoord1.xy;
        #ifdef COMPRESS_TEXCOORD
            #ifdef MeshOPT_Compress
                vec2 texCoord1;
                texCoord1.x = aTexCoord1.x * decodeTexCoord1vNormConstant.x;
                texCoord1.y = aTexCoord1.y * decodeTexCoord1vNormConstant.y;
                vTexCoord.zw = decodeTexCoord1Min + texCoord1.xy;
            #else
                vTexCoord.zw = decodeTexCoord1Min.xy + aTexCoord1.xy * decodeTexCoord1vNormConstant;
            #endif
        #endif
        vTexMatrix2 = vec4(0.0,0.0,1.0,0.0);
        vTexCoordTransform.y = aTexCoord1.z;
            #ifdef USE_TextureCoordMatrix
                vTexCoordTransform.y = aTextureCoordMatrix.y;
            #endif
        if(vTexCoordTransform.y < -90000.0)
        {
            vTexMatrix2.z = -1.0;
        }
        getTextureMatrixFromZValue(floor(vTexCoordTransform.y), vTexMatrix2.x, vTexMatrix2.y, vTexMatrix2.z);
        vTexMatrix2.w = log2(uTexture1Width * vTexMatrix.z);
    #endif
    #endif
    #endif
    
    #ifdef COMPRESS_VERTEX
        vec4 vertexPos = vec4(1.0);
        vertexPos = decodePositionMin + vec4(aPosition.xyz, 1.0) * decodePositionNormConstant;
    #else
        vec4 vertexPos = aPosition;
    #endif

#ifdef FLATTEN
    vertexPos = calculateHeight(vertexPos);
#endif
#ifdef EXCAVATION
    vExcavationVertexPos = uGeoMatrix * vec4(vertexPos.xyz, 1.0);
#endif
    vec4 vertexColor = uFillForeColor;
#ifdef VertexColor
    vertexColor *= aColor;
#endif
#ifdef VertexNormal
    vec3 normal = aNormal;
    #ifdef COMPRESS_NORMAL
        #ifdef MeshOPT_Compress
            normal.x = aNormal.x / 127.0;
            normal.y = aNormal.y / 127.0;
            normal.z = 1.0 - abs(normal.x) - abs(normal.y);
            normal = normalize(normal);
        #else
            normal = czm_octDecode(aNormal.xy, normal_rangeConstant).zxy;
        #endif
    #endif
#endif
#ifdef InstanceBim
    mat4 worldMatrix;
    worldMatrix[0] = uv2;
    worldMatrix[1] = uv3;
    worldMatrix[2] = uv4;
    worldMatrix[3] = vec4(0, 0, 0, 1);
    vertexPos = vec4(vertexPos.xyz,1.0) * worldMatrix;
    vertexColor *= secondary_colour; 
#endif
#ifdef InstancePipe
    mat4 worldMatrix;
    mat4 worldMatrix0;
    mat4 worldMatrix1;
    vec4 worldPos0;
    vec4 worldPos1;
    worldMatrix0[0] = uv1;
    worldMatrix0[1] = uv2;
    worldMatrix0[2] = uv3;
    worldMatrix0[3] = vec4( 0.0, 0.0, 0.0, 1.0 );
    worldMatrix1[0] = uv4;
    worldMatrix1[1] = uv5;
    worldMatrix1[2] = uv6;
    worldMatrix1[3] = vec4( 0.0, 0.0, 0.0, 1.0 );
    vec4 realVertex = vec4(vertexPos.xyz, 1.0);
    realVertex.x = realVertex.x * uv7.z;
    worldPos0 = realVertex * worldMatrix0;
    worldPos1 = realVertex * worldMatrix1;
    vertexColor *= secondary_colour; 
#ifdef TexCoord
    if(aTexCoord0.y > 0.5)
    {
        vec4 tex4Vec = uTexMatrix * vec4(uv7.y, aTexCoord0.x, 0.0, 1.0);
        vTexCoord.xy = tex4Vec.xy;
        vertexPos = worldPos1;
        worldMatrix = worldMatrix1;
    }
    else
    {
        vec4 tex4Vec = uTexMatrix * vec4(uv7.x, aTexCoord0.x, 0.0, 1.0);
        vTexCoord.xy = tex4Vec.xy;
        vertexPos = worldPos0;
        worldMatrix = worldMatrix0;
    }
#endif
#ifdef VertexNormal
    normal.x = normal.x * uv7.z;
#endif
#endif
    #ifdef Instance  
        float index = instanceId;
    #else
        float index = batchId;
    #endif  
    #ifdef HYPSOMETRIC
        wValue = vertexPos.w;
    #endif
        vec4 operationType = s3m_batchTable_operation(index);
        vec4 objsColor = s3m_batchTable_color(index);
        operation(operationType, objsColor, uSelectedColor, vertexColor, fSelected);
        vSecondColor = s3m_batchTable_pickColor(index);
        vec4 positionMC = vec4(vertexPos.xyz, 1.0);
        vColor = vertexColor;
        vPositionMC = positionMC;
        vPositionEC = (czm_modelView * positionMC).xyz;
    #ifdef VertexNormal
        vNormalEC = czm_normal * normal;
    #endif
        gl_Position = czm_modelViewProjection * vec4(vertexPos.xyz, 1.0);
    }
`,"provider","_swipeEnabled","LINE_STRIP","crunch.wasm","PRJ_SPHERE_MERCATOR",", got an instance of ","&tilematrixset=","reflect","resource","_ignoreGlobe","_isLineVisible","printErr","lens","_modelViewInfiniteProjectionDirty","raySphere","chunkSize","Unknown boolean type size: ","instanceBounds","getDerivedShaderProgram","texParameteri","defined","PBR_THEME","_modifyDrawCommands","complete","_customDPI","customRequestHeaders","setCustomClipBox","subVertexOffsetArr","SCREEN_ALIGNED","transcodeImage","Decoder","quantization","prepare","initialize","QuadKey",`var destructors = [];
`,"planePos","reverse","tmpEntities","_metallicRoughnessTextureIndex","isPowerOfTwo","EasingFunction","reflectFramebuffer","add imagery layer ","context","GetAttributeDataArrayForAllPoints","Memory","Saturation","fromTypedArray","_cache","). Build with -s ASSERTIONS=1 for more info.","hookDestroy","unloadTiles","requestNames","_pickInfo","quadKeyIndexPack","trim","type","scale","wasmReady","TextureAtlasSec","rawShare"," = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + ","emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_OCTAHEDRON_TRANSFORM","lenbits",'" from JS side to C/C++ side to an argument of type "',"GlobeExt","mask","batchId","rainDecl","Clockwise","BRDF","_maximumHeight","volume","emscripten_bind_MetadataQuerier_NumEntries_1","GetAttributeMetadata","retType","xOffset","queryNumericAttribute","fillStyle"," which is not a function","SVC_TexutreCoord","WebMercatorTilingScheme","_imageBuffer","VertexWeight","path","subtract","MIX","deactivate","_v3AffineX","getElementsByTagNameNS","setColumn","_stopCollection","S3MTilesVS","CLIP_FILT_BY_ID","locateFile","inflateInit","Z_NEED_DICT","get_first_emval","UseLineColor","subTextureNames","QUANTIZATION_BITS12","_maximumMemoryUsage","_quadtree",`uniform sampler2D colorTexture;
varying vec2 v_textureCoordinates;
uniform float speed;
uniform float angle;

float hash(float x){
    return fract(sin(x * 133.3) * 13.13);
}

void main(void){
    float time = czm_frameNumber / 60.0;
    vec2 resolution = czm_viewport.zw;
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
    vec3 c = vec3(0.6, 0.7, 0.8);
    float a = angle;
    float si = sin(a);
    float co = cos(a);
    uv *= mat2(co, -si, si, co);
    uv *= length(uv + vec2(0.0, 4.9)) * 0.3 + 1.0;
    float v = 1.0 - sin(hash(floor(uv.x * 100.0)) * 2.0);
    float b = clamp(abs(sin(speed * time * v + uv.y * (5.0 / (2.0 + v)))) - 0.95, 0.0, 1.0) * 20.0;
    c *= v * b;
    gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(c, 1.0), speed < 0.00001 ? 0.0 : 0.15);
}`,"_excavationRegions","endPause","CenterZ","_emscripten_bind_Decoder_GetAttributeUInt16ForAllPoints_3","nFormat","aNormal","emscripten_enum_draco_StatusCode_INVALID_PARAMETER","[Emscripten Module object]","arraySize","Radius","arrIndexPackage","second","BLEND","Bottom","requestMetadata","dimensions position is required to create CustomClipBox","crypto unavailable","S3mModel","_heightValues","scaleAndBias","imageBuffer","call","_preStopIndex","hookUpdateFunc","Cesium3DTile","_labelBackgroundColor","_updateDrawCommands","S3MWaterRenderEntity","registeredClass","sml:Level","_fovy","_segmentCount","fromPositions","ITU","horizontalPolyline","Distance","/rest/realspace","disableReflection","Status","CRYPTO","emscripten_bind_DracoInt8Array___destroy___0","startPackRequest","location","defaultValue",`
    attribute vec4 aPosition;
    varying vec4 vClipPos;
    void main() {
        vClipPos = czm_modelViewProjection * vec4(aPosition.xyz, 1.0);
	    gl_Position = vClipPos;
    }
`,"HAS_TRANSMISSION","  is not iterable(cannot read property Symbol(Symbol.iterator))","throwInstantiationError","customVertexAttribute","TWO_PI","endUpdate","bytesOffset","emscripten_enum_draco_GeometryAttribute_Type_INVALID","s3m_batchTable_color","data/path/{z}/{x}/{y}.terrainz?v={version}","owner","ImageFileLayer","next_out","currentViewMatrix","./crc32","snowMaskTexture","pixelHeight","clipRasterTexture","combine","wasCreatedByUpsampling","edgeTotalLength","fromHeadingPitchRoll","etc1","_framebufferList","boundingbox","_mixColorType","_subTexInfos","isIndexed","_heading","reportSuccess","south","posUniqueID","repeat","CellWidth","_emscripten_enum_draco_DataType_DT_INT32","USE_TextureCoordMatrix","offset","CESIUM_3D_TILE_MASK","COMPRESS_NORMAL","/data/",`
#ifdef HAS_RAIN
uniform float uAnimationSpeed;
uniform sampler2D uRippleTexture;
uniform float uRippleScale;
uniform float uWindIntensity;
uniform float uRain;
uniform float uCameraDepth;
    
void getTimeInfo(float animationSpeed, out vec2 timeVec)
{
	float time = czm_frameNumber * animationSpeed;
	time = floor(30.0 * time);
	float time_diff = floor(time*0.25);
	time = mod(time, 4.0);
	time_diff = mod(time_diff, 4.0);
	timeVec = vec2(time, time_diff);
}

void getPosInfo(vec4 posMC, out vec2 posMC_frac1, out vec2 posMC_frac2)
{
	float ripple_scale = 1.0 / uRippleScale;
	vec2 posXY = posMC.xy * ripple_scale;
	posMC_frac1 = fract(posXY);
	vec2 posStep = vec2(0.5);
	posMC_frac2 = fract(posXY + posStep);
}

float getAlpha(vec2 posMC_frac1)
{
	vec2 dist = (posMC_frac1 - vec2(0.5)) * 2.0;
	dist = vec2(abs(dist.x), abs(dist.y));
	vec2 result = pow(dist, vec2(5.0));
	return result.x + result.y;
}

vec4 getRippleValue(sampler2D uRippleTexture, vec2 timeVec, vec2 posMC_frac1, vec2 posMC_frac2, float alpha)
{
	vec2 rippleUV_1 = (timeVec + posMC_frac1)*0.25;
	vec2 rippleUV_2 = (timeVec + posMC_frac2)*0.25;
	vec4 rippleValue_1 = texture2D(uRippleTexture, rippleUV_1.xy);
	vec4 rippleValue_2 = texture2D(uRippleTexture, rippleUV_2.xy);
	return mix(rippleValue_1, rippleValue_2, alpha);
}

vec3 getRippleNormal(vec4 rippleValue, float wind_intensity, float rain, float depthFade)
{
	vec2 rippleValueXY = rippleValue.xy;
	vec2 rippleValueZW = rippleValue.zw;
	const vec2 _value = vec2(0.5);
	vec2 part_1 = (rippleValueZW - _value) * wind_intensity * 0.13;
	vec2 part_2 = (rippleValueXY - _value) * 0.6;
	vec2 mergedValue = mix(part_1, part_2, rain) * depthFade;
	return vec3(mergedValue, 1.0);
}

float getNormalAlpha(vec3 normalWS,float wetness)
{
	float valueZ = normalWS.z - 0.5;
	float wet_correction = wetness * clamp(valueZ * 2.5, 0.0, 1.0);
	return pow(wet_correction, 15.0);
}

vec3 rippleNormalCorrection(vec3 rippleNormal,float normalAlpha)
{
	const vec3 blueNormal = vec3(0.0, 0.0, 1.0);
	return mix(blueNormal, rippleNormal, normalAlpha);
}

vec3 rippleGenerator(sampler2D uRippleTexture, float animationSpeed,vec3 normalWS,float wetness)
{
	vec2 timeVec = vec2(1.0);
	getTimeInfo(animationSpeed, timeVec);
	vec2 posMC_frac1 = vec2(1.0);
	vec2 posMC_frac2 = vec2(1.0);
	getPosInfo(vPositionMC, posMC_frac1, posMC_frac2);
	float alpha = getAlpha(posMC_frac1);
	vec4 rippleValue = getRippleValue(uRippleTexture, timeVec, posMC_frac1, posMC_frac2, alpha);
	vec3 rippleNormal = getRippleNormal(rippleValue, uWindIntensity, uRain, uCameraDepth);
	float normalAlpha = getNormalAlpha(normalWS, wetness);
	return normalize(rippleNormalCorrection(rippleNormal, normalAlpha));
}
#endif
`,"AmbientB",`
            void main() {
                globe_main();
                #ifdef Apply_Excavation
                if(texture2D(uClipRasterTexture, v_textureCoordinates.xy).w > 0.5) {
                    discard;
                }
                #endif
            }
        `,"byte_stride","token","getFloat32","_transmissionFactor","_labelPixelOffsetScaleByDistance","ContentState","uv5","_emscripten_bind_DracoInt32Array_size_0","RasterRegion","OrientedBoundingBox","_emissionTextureAtlas","ZLIB","sort","waterPlane","_lineEntity","groupSeparator","HAS_VOLUME","removeAllModifyRegion","editPointColor","_selectEnabled","_selectColorType","_lineStripCollection","filtermax","uHiddenColor","#define texture2DProjGradEXT textureProjGrad","_weight","handler","rectangle must not be called before the imagery provider is ready.","_excavateMatrix","makeClassHandle requires ptr and ptrType","_frustumPlanes","pendingRequests","POSITION","GetTrianglesUInt16Array","_worldPosLeftBottom","MaxZ","distdyn","triangulate","RenderTarget","constructor_body","abs","isArray","_emscripten_enum_draco_DataType_DT_INT16","active","createTerrainData"," arguments, expected ","rippleTexture","_updateExcavateRegions","Visible","addWaterPlane","RGBA_DXT5","emscripten_bind_Decoder_GetAttributeFloatForAllPoints_3","initTexture","_southIndices","pendingTextureCount","faceCount","freeze","emscripten_bind_Decoder_GetAttributeInt16ForAllPoints_3","isTiltFree","removeInputAction","positiveZ","vertexColorCount","entities","imagery","_visible","/lib/inflate.js","modelMatrix","LESS_OR_EQUAL","RGBA8_ETC2_EAC","initializeIndexed","maxHeight","secondColorUniqueID","_emscripten_bind_DracoUInt8Array_size_0","polyline-","fillForeColor","createPickId","wasm streaming compile failed: ","Buf32","inverseViewMatrix","lte","_emscripten_bind_DracoUInt32Array_DracoUInt32Array_0","_addPositions","copyWithin","versions","_emscripten_bind_Mesh_num_attributes_0","_enableClip","ancestorTextureBake","s3m_batchTable_pickColor","emscripten_enum_draco_StatusCode_UNKNOWN_VERSION","hue","addToken","LOADING","InternalError","GetAttributeIdByMetadataEntry","snowNormalTextureIndex","replace","binary","aspectRatio","_emscripten_bind_MetadataQuerier_GetIntEntry_2","isIntersectionTest","hemisphereLightDecl","Fill","emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_QUANTIZATION_TRANSFORM","png","_emscripten_bind_DecoderBuffer_Init_2","AttributeType_FirstTexcoord","TRIANGULAR_MESH","updateVisibility",'type "',"_emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_NO_TRANSFORM","_stack","_currentTargetPoint","rawGetPointee","emscripten_bind_AttributeTransformData___destroy___0","_minVisibleAltitude","Malformed buffer data: ","_verticalFov","getObjectIds","_isCreateSkirt","fileName",".deleteObject(arg","yoyo","queryStringValue","emscripten_bind_MetadataQuerier_GetStringEntry_2","WebMercatorProjection","Infinity","DecodeBufferToPointCloud","createBoundingVolume","swipeRegion must be a instance of BoundingRectangle.","surroundDuration","VoidPtr","getComUniformMap","GetEntryName","emscripten_bind_AttributeQuantizationTransform_min_value_1","edgeVA","brdfLutGenerator","Carteisan3","USE_LINECOLOR","computeBarycentricCoordinates","compare"," not true or false: ","decodeTextureCoordinates","_emscripten_bind_GeometryAttribute___destroy___0","MaxVisibleValue","getScale",`attribute vec4 position;

uniform vec4 uRect;

void main()
{
   vec4 vPos = position;
   vec2 vBounds = uRect.zw - uRect.xy;
   vPos.xy = (vPos.xy - uRect.xy) / vBounds.xy * 2.0 - 1.0;
   gl_Position = vec4(vPos.xy, 0.0, 1.0);
}`,"createElement","time","multiplyByPoint","SVC_VertexColor","_fb","Assets/Textures/waterNormalsSmall.jpg","TransparencyOptimization","FALTTEN","_cameraDir","for","createCRN","BlockScale","_visibleDistanceMax","array","Multiple","monitorRunDependencies","available","SlopeScale","TOTAL_MEMORY","arraySet","NICEST","_startObject","fillStyle value","ptrType","updateFrustum","_excavateRegionCommands","_createVertexArrayForMesh","distcode","flushPendingDeletes","getElementsByTagName","col","addTargetPoint","Buf16","true","_ceiling","_tileHeight","_northIndices","_nextStopIndex","_createCommand","add","setSelection","malloc","register","primitive","unproject","blockCacheSize","Assets/Textures/middle-edit.png","emscripten_bind_PointAttribute___destroy___0","_emissionTexCoordScale","_viewPosition","BLACK","_enableClipPlane","cullPass","320","isReference","_excavationBottomTexture","OUTSIDE","TEXTURE_WRAP_S","textureAtlasID","texmodmatrix","TEXTURE_2D","instancePrototype","dynCall_iiii","No url provided.","getUrlComponent","pointToWindowCoordinates","minCategory","_emscripten_bind_PointCloud_num_attributes_0","drawingBufferHeight","Interpolation","isStopVisible","texMatrix","_editObject","3006CLhMyb","_emissionTextureChanged","specularColor","_inverseViewRotation","_extShadersByTexturesFlags",`
#ifdef Mode_Height
varying float vHeight;
vec4 packValue(float value)
{
    float SHIFT_LEFT8 = 256.0;
	float SHIFT_RIGHT8 = 1.0 / 256.0;
	vec4 result;
	result.a = 255.0;
	float fPos = abs(value + 9000.0) * SHIFT_RIGHT8;
	result.b = (fPos - floor(fPos)) * SHIFT_LEFT8;
	fPos = floor(fPos) * SHIFT_RIGHT8;
	result.g = (fPos - floor(fPos)) * SHIFT_LEFT8;
	result.r = floor(fPos);
	result /= 255.0;
	return result;
}
#endif

void main()
{
   gl_FragColor = vec4(1.0);
#ifdef Mode_Height
   gl_FragColor = packValue(vHeight);
#endif
}`,"east","extractTopGeometry","GeometryError","stream error","S3MTilesFS","pickInfo","_maxCategory","_emscripten_bind_Decoder_GetAttributeFloat_3","rooturl","_modelViewProjectionRelativeToEyeDirty","'! Overload resolution is currently only performed using the parameter count, not actual type info!","PROGRAM","CredentialType"," Level: ","_vValues","GlobeSurfaceTileProvider","TerrainQuantization","_brightness","Linear","ancestorTexture","textureCache","rss","execute","ProjectionImage.saturation","emscripten_enum_draco_StatusCode_OK","_lastSelectionResult","units","_boundingSphereFromXML","S3MBlockParser",`attribute vec4 position;
uniform vec4 uRect;
uniform vec4 uSingleRegion;
varying float fHeight;
varying vec2 vTexCoord;

void main()
{
   vec4 vPos = position;
   vec2 vBounds = uRect.zw - uRect.xy;
   vTexCoord = (vPos.xy - uSingleRegion.xy) / (uSingleRegion.zw - uSingleRegion.xy);
   vPos.xy = (vPos.xy - uRect.xy) / vBounds.xy * 2.0 - 1.0;
   gl_Position = vec4(vPos.xy, 0.5, 1.0);
   fHeight = vPos.z;
}`,"_gl","destructors","emscripten_bind_Decoder_GetTrianglesUInt16Array_3","SetColor","_emscripten_enum_draco_EncodedGeometryType_POINT_CLOUD","setInfo","pixelDatatype","NORMAL","swipeEnabled","body","_inverseNormalDirty","Visibility","APPLY_SPLIT","removeLimitbody","computeView","wsize","destroyObject","createWireFrame","comment","_emissionTextureArray","ProjectionImageFS","_noValueColor","emscripten_bind_Decoder_GetFaceFromMesh_3","renderToTexture","#define gl_FragDepthEXT gl_FragDepth","namespace","ScreenSpaceEventType","ATTRIBUTE_QUANTIZATION_TRANSFORM","/tileset/config","pow","diffuseColor","TEXTURE_MIN_FILTER","_layerIndex","NoLightNoTextureVS","SRGB","_pickObjs","_polygonOffsetConfig","ids","HORIZONTAL_LINE","LowerCorner","_editPoints","PRJ_TRANSVERSE_MERCATOR","_stencilCommand","Cannot pass deleted object as a pointer of type ","indexBuffer","ROUND_HALF_UP","_emscripten_enum_draco_DataType_DT_TYPES_COUNT","LOADED","_emscripten_bind_AttributeOctahedronTransform___destroy___0","_emscripten_bind_PointAttribute_byte_offset_0","selectionInfoMap","data/index/{y}/{x}.{fileExtension}?level={level}","setEditObject","_emscripten_bind_Decoder_GetMetadata_1","isViewer","modifyTerrainVertexArray","./inftrees","NearFarScalar","emscripten_bind_PointAttribute_unique_id_0","CompressedTextureBuffer","projectionMatrix","AttributeType_Custom1","relativePath","division","_compressType","_trimTiles","visibleDistanceMin","_malloc","_gamma","_blockCacheSize","TileBoundingSphere","_attributeLocations","ColorPoint","isFinite","Z_FINISH","rectangle","projection-image-","enableBakeTextureRenderable","unsigned","uv3","emscripten_bind_Decoder_GetTrianglesUInt32Array_3","inverse","childNodes","cartographicToCartesian","chunks","_entityCollection","dpi","minimumByComponent","NONE","hookEndUpdate","minimumLevel must not be called before the imagery provider is ready.","heightmapWidth","GREATER","ptr","_crn_get_dxt_format","availabilityTilesLoaded",`
    precision mediump float;
    precision mediump int;
    uniform sampler2D uBottomTex;
    varying vec2 vUV;
    void main() {
        gl_FragColor = texture2D(uBottomTex, vUV);
        gl_FragColor = czm_gammaCorrect(gl_FragColor);
    }
`,"DT_FLOAT64","polylines","READY","_emscripten_bind_Mesh_Mesh_0","emscripten_enum_draco_EncodedGeometryType_INVALID_GEOMETRY_TYPE","UASTC","charAt","routestop","_emscripten_bind_Decoder_GetAttributeInt16ForAllPoints_3","argPackAdvance","_emscripten_bind_Decoder_GetAttributeDataArrayForAllPoints_5","/home/web_user","absolutePosition","_removeIndex","Altitude","number","_clearCommand","SuperMap3D","KTX2File","responseType","_dataView","subarray","setAttribute","numberOfLevelZeroTilesY","invalid window size","_oriClipPlane","_image","_displayMode","texCoordUniqueIDs","metallicRoughnessTexture","maxVisibleAltitude","emscripten_bind_PointCloud_num_points_0","centerZDepth","pos",`['argPackAdvance'];
`,"multipliedBy","_removeObjsOperationType","_fillForeColor","NULL","_value","regions","queryBooleanAttribute","head","updateFrameState","_objsOperationList","MaxHeight","clamp","UNPACK_PREMULTIPLY_ALPHA_WEBGL","WEBGL_compressed_texture_s3tc","DECREMENT_WRAP","orientedBoundingBox","_emscripten_bind_DracoUInt16Array___destroy___0","_scales","north","queryChildNodes","noiseScale","Volume2","southeastChild","properties","s3m","transformResource","lat","dynCall_iidiiii","_hasNormalBuffer","resolve Layer Extend XML error:","NON_OCCLUDED","num_attributes","alongline","work",") - expected (",`attribute vec4 aPosition;
attribute vec4 aColor;
uniform float uPointCloudSize;
varying float vPixelDistance;
#ifdef COMPRESS_VERTEX
    uniform vec4 decode_position_min;
    uniform float decode_position_normConstant;
#endif
#ifdef HYPSOMETRIC
    uniform sampler2D uHypsometricTexture;
    uniform vec4 uMinMaxValue;
    uniform vec4 uOpacityIntervalFillMode;
    uniform vec4 uHypLineColor;
    uniform vec4 uNoValueColor;
    uniform float uUseWValue;
    uniform float uBottom;
#endif
    uniform vec4 uFillForeColor;
    varying vec4 vColor;
    varying vec4 vPositionMC;

#ifdef HYPSOMETRIC

float computeWValue(vec4 vertexPos){
    float realWValue = vertexPos.w;
#ifdef TEXTURE_COORD_ONE_IS_W
    realWValue = aTexCoord0.x;
#endif
    if(uUseWValue > 0.1)
    {
        return realWValue + uBottom;
    }
    
    return vertexPos.z + uBottom;
}

vec4 computeContourMapColor(float fValue)
{
    float floorValue = uMinMaxValue.x;
    float ceilValue = uMinMaxValue.y;
    float threshold = clamp(abs(ceilValue - floorValue), 0.000001, 20000.0);
    float contourRate = (fValue - floorValue) / threshold;
    float finalCoord = clamp(contourRate, 0.0, 1.0);
    float count = floor(finalCoord * 16.0);
    float y = (count*2.0 + 1.0)/32.0;
    float x = fract(finalCoord*16.0);
    if(y > 1.0)
    {
        x = 1.0;
    }
    return texture2D(uHypsometricTexture, vec2(x, y)).rgba;
}
vec4 getHypsometricColor(vec4 oriColor, float fValue)
{
    vec4 contourMapColor = vec4(0.0);
    float finalOpacity = uOpacityIntervalFillMode.x;
    float fillMode = uOpacityIntervalFillMode.z;
    float minVisibleValue = uMinMaxValue.z;
    float maxVisibleValue = uMinMaxValue.w;
    if(fValue > maxVisibleValue || fValue < minVisibleValue)
    {
        return uNoValueColor * oriColor;
    }
    contourMapColor = computeContourMapColor(fValue);
    finalOpacity *= sign(fillMode);
    vec4 mixColor = mix(vec4(1.0,1.0,1.0,1.0), contourMapColor, finalOpacity);
    return mixColor;
}
#endif

void main()
{
#ifdef COMPRESS_VERTEX
    vec4 vertexPos = vec4(1.0);
    vertexPos = decode_position_min + aPosition * decode_position_normConstant;
#else
    vec4 vertexPos = aPosition;
#endif
    vertexPos.w = 1.0;
    vec4 vertexColor = vec4(1.0);
#ifdef VertexColor
    vertexColor = aColor;
    #ifdef COMPRESS_COLOR
        #ifdef MeshOPT_Compress
            vertexColor = aColor;
        #else
            vertexColor = aColor / 255.0;
        #endif
    #endif
#endif
    vColor = vertexColor * uFillForeColor;
    vPositionMC.xyz = vertexPos.xyz;
    vPositionMC.w = 0.0;
    gl_Position = czm_modelViewProjection * vertexPos;
#ifdef HYPSOMETRIC
    float wValue = computeWValue(vertexPos);
    vColor = getHypsometricColor(vColor, wValue);
#endif
    vPixelDistance = 2.0 / uPointCloudSize;
    gl_PointSize = uPointCloudSize;
}`,"elementCount","_layerQueue","RouteCollection","interpolation","getAttribute","positionCartographic","bTransparentSorting","RuntimeError","BillboardMode","secondaryGroupSize","_stopPlayMode","XmlParser","#define texture2DGradEXT textureGrad","_emscripten_enum_draco_DataType_DT_BOOL","deleteScheduled","aPosition","_coverageArea","distanceToCamera","instanceId","_textureFilterMode","_urlTemplate","CustomTilingScheme","frustumCommandsList","quadKeyPack","fetchXML","autoSetView","options.context","getPickRay","selectColorType","{x}","needed","_emscripten_enum_draco_DataType_DT_UINT16","_nextUint8","vertexBuffer","_levels","VertexCompressOption","typedArrayTypes","0.5","regularEdgeCommand","Ambient","GetTrianglesUInt32Array","providerName","UNPACK_FLIP_Y_WEBGL","noExitRuntime","Ray","_excavationHeightLayer","scene is required!","_emscripten_bind_AttributeOctahedronTransform_InitFromAttribute_1","dirty","invalid distance too far back","inflateInfo","beginFunc","emscripten_enum_draco_DataType_DT_INT8","vertCompressConstant","readyState","Index","left","undefined","S3MCacheFileRenderEntity","typeSize","_emscripten_enum_draco_EncodedGeometryType_TRIANGULAR_MESH","getValue","timeVal","ColorTable","Easing","prePassesUpdate","xml content is required to create routes!","function","Intersect","fractionGroupSeparator","sphereMatrix","meshopt_decodeFilterExp","fromBoundingSpheres","HAS_DIR_LIGHTS","silhouette","cacheEnable","Queue","Sampler","_modelViewRelativeToEyeDirty","_clipMode","_routeName","_maximumPriority","IndexDatatype","czm_batchTable_xywh2","negativeX","isVoid","_renderTextureMatrixs","not an integer: ","GlobeSurfaceTileExt","_crn_get_levels","_ancestorTextureBake",`uniform vec4 uSkylineColor;

void main()
{
   gl_FragColor = uSkylineColor;
}`,"proxy","getLevels","levelBuffer","S3MContentParser","pointColor","dynCall_jiji","addTokenWithKey","GetTriangleStripsFromMesh","updateBatchTableAttributes","sceneFramebuffer","depthTextureToCopy","updateMaterialBatchTable","MODULE_NOT_FOUND","RRRG","GeometryAttribute","indexOfRefraction","wasmMemory","TextCache","currentFrustum","angleBetween","#define varying out","Data","HAS_BASE_TEXTURE","emissiveFactor","pbrMetallicRoughness","_pixelWidth","AttributeType_SecondColor","visible","_isFlyLoop","GetAttributeUInt8ForAllPoints","decode_texCoord7_normConstant","curDis","isConvert","_offCenterFrustum","getU","POLYGON_OFFSET","MinHeight","ISERVER_TOKEN","requestImage","InstancePipe","fpEntity","EndCol","readPixels","hookPickFunc","Pixel","heading","data","PostProcessStageSampleMode","VertexWeight_1","_rectangle","entityCollection","Cartographic","dynCall_iiiiiii","toFormat","ambientColor","SELECTED","atlas_batchTable_xywh","DEBUG","_heightmapWidth","scroll","blockKey","end","decode_texCoord1_min","instantiateWasm","_encodedNormals","texturelod","groupNode","ProjectionImage.brightness","No transcoding format target available for ETC1S compressed ktx2.","Cannot call ","randomBytes","CellHeight","VertexNormal","MULTI_TEX","longitude","refreshReferenceAddPoint","_textureStep","count_emval_handles","refreshReferencePoint","reflectRs","DracoInt16Array","_emscripten_enum_draco_GeometryAttribute_Type_GENERIC","_maxVisibleValue","rectangleSouthwestInMeters","clampToGroundPolylines","5121UaekLj","_northSkirtHeight","getPrototypeOf","_emscripten_bind_Status_ok_0","selectColorTypeChange","removeAll","Wired","Smoothly","FData",`
            uniform sampler2D u_depthTexture;
            varying vec2 v_textureCoordinates;
            void main()
            {
                gl_FragColor = czm_packDepth(texture2D(u_depthTexture, v_textureCoordinates).r);
            }
        `,"BoundingSphere","index package is null","selectIndexData","_hasVertexNormals","fbo","setterArgumentType","./zlib/constants","_emscripten_bind_PointAttribute_GetAttributeTransformData_0","emscripten_bind_DracoInt32Array_GetValue_1","_ready","globe","squareRoot","INVALID","Use 'new' to construct ","dynCall_iii","list","addModifyRegion","absoluteValue","emscripten_bind_DracoInt32Array_DracoInt32Array_0","shininess","sqrt","_v3AffineY","crossorigin","CenterX","GetAttributeId","RGBA_DXT3","VK_FORMAT_R16G16B16A16_SFLOAT","dynCall_viiiii","ADJUST_COLOR","set Objs Operation ids","POINT_LIGHTS ","_readyPromise","UNIT_Y","Table","sign","Area","_style3D","atan","_emscripten_bind_AttributeTransformData_transform_type_0","emscripten_bind_DecoderBuffer___destroy___0","WEBG_compressed_texture_etc","shaderCache","endY","Mesh","emscripten_bind_DracoInt8Array_GetValue_1","indicesCount","BYTE","_emscripten_enum_draco_StatusCode_DRACO_ERROR","shift","boundingVolumeSourceTile","freeVertexArray","pop","emscripten_bind_DracoFloat32Array_DracoFloat32Array_0","test","minFresnel","last","_updatePolygon","_playRate","flattening","AttributeType_Custom0","24180MsLeRT","computeVisibilityWithPlaneMask","MOUSE_MOVE","setTranslation","subTextureNamesBake","lencode","StoreType","fetchJson","_minVisibleValue","version","updateAllObjsVisible","INVALID_OBLIQUE","AttributeType_Normal","tail",`
attribute vec4 aPosition;
uniform vec4 uRect;
#ifdef Mode_Height
varying float vHeight;
#endif

void main()
{
   vec4 vPos = aPosition;
   vec2 bounds = uRect.zw - uRect.xy;
   vPos.xy = (vPos.xy - uRect.xy) / bounds.xy * 2.0 - 1.0;
   gl_Position = vec4(vPos.xy, 0.5, 1.0);
#ifdef Mode_Height
   vHeight = vPos.z;
#endif
}`,"parameter stop must be instanceof RouteStop!","BoundingBox","loadConfig","layer3DType","createIfNeeded","duration","typeOf","distanceToNext","baseColorTexture","_maxVisibleAltitude","}\\B","toUrl","CallbackProperty","contentReadyPromise","createKTX2","/realspace","_rectangleNortheastInMeters","pickId","tileXYToRectangle","updateAndExecuteCommands","tileUrlTemplates","Instance","INVALID_GEOMETRY_TYPE","DrawHandler","LineDisplayType","setModifyRegions","DepthFramebuffer",", arg","remove","emscripten_enum_draco_StatusCode_IO_ERROR","preloadedImages","createBillboardsBounds","multiplyByScalar","isAltitudeFree","tileHeight must not be called before the imagery provider is ready.","Out","normalize","adler","hookComputeTileVisibility","CRN_DXT5","DEGREE","decodeVertexBuffer","convertToColumbusCartesian","CacheFileType","_baseResource","arraybuffer","Assets/Textures/vertex-edit.png","_invertViewProjectionMatrix","_heightmapStructure","resolve","ViewShedAnalysisFS","filtermin","_emscripten_bind_DracoInt8Array___destroy___0","getSkylineSectorParameter","ALL","touch","queryToObject","Material","rest/realspace","_maxHeight","_updateObjsOperation","FILL_AND_OUTLINE","urls","overloadTable","waterTime","_heightRangeAttributeName","window","_vertexCompressionType","LEFT_CLICK","heigtRangeMax","_target","FAILED","positiveY","getFloat64","getChildValue","MaxCategory","getColorTexture","_requestWaterMask","_keymap","arrayBuffer","ATTRIBUTE_NO_TRANSFORM","_addRenderedEdge","_sceneMode","PageLods","Geode","jsessionID"," number: ","_getLabelWeightOrHeight","_requestMetadata",`
#ifdef BRDF
#define RECIPROCAL_PI 0.31830988618
#define M_PI 3.141592653589793
#define EPSILON 1e-6
#define CUBEUV_MAX_MIP 8.0
#define CUBEUV_TEXEL_WIDTH 0.0013020833333333333
#define CUBEUV_TEXEL_HEIGHT 0.0009765625
#define saturate(a) clamp( a, 0.0, 1.0 )
float pow2( const in float x ) { return x * x; }

uniform vec4 uBaseColorFactor;
uniform vec4 uEmissiveFactor;
uniform float uMetallicFactor;
uniform float uRoughnessFactor;
uniform float uAlphaCutoff;

struct IncidentLight {
    vec3 direction;
    vec3 color;
    bool visible;
};

struct GeometricContext {
    vec3 position;
    vec3 normal;
    vec3 viewDir;
};

struct PhysicalMaterial {
    vec3	diffuseColor;
    float	roughness;
    vec3	specularColor;
    float specularF90;
};

struct ReflectedLight {
    vec3 directDiffuse;
    vec3 directSpecular;
    vec3 indirectDiffuse;
    vec3 indirectSpecular;
};

#ifdef HAS_BASE_TEXTURE
    uniform sampler2D uBaseTexture;
#endif

#ifdef HAS_NORMAL_TEXTURE
    uniform sampler2D uNormalTexture;
    uniform float uNormalTextureScale;
#ifdef HAS_ANISOTROPY
    uniform vec4 uAnisotropy;
#endif
#endif

#ifdef HAS_EMISSIVE_TEXTURE
    uniform sampler2D uEmissionTexture;
    uniform vec4 uEmissiveUVOffsetAndTiling;
#endif

#ifdef HAS_MetallicRoughness_TEXTURE
    uniform sampler2D uMetallicRoughnessTexture;
#endif

#ifdef HAS_OCCLUSION_TEXTURE
    uniform sampler2D uOcclusionTexture;
#endif

#ifdef REFRACTION
    uniform float uIndexOfRefraction;
#endif

#ifdef HAS_TRANSMISSION
    uniform float uTransmissionFactor;
#endif

#ifdef HAS_WETNESS
    uniform float uWetnessFactor;
#endif

#ifdef HAS_VOLUME
    uniform vec4 uTintColor;
    uniform vec4 uDiffusionDistance;
    uniform float uThickness;
#endif

#ifdef HAS_CLEARCOAT
    uniform float uClearcoatFactor;
    uniform float uClearcoatRoughnessFactor;
#endif

//\u53C2\u8003UE4.24\u5B9E\u73B0\u8BA1\u7B97\u7CBE\u786E\u5149\u6E90\u7684\u8870\u51CF
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
    float d = lightDistance;
    float r = cutoffDistance;
    float d2 = d * d;
    float attenuation = 1.0 / (d2 + 1.0);
    float m = saturate(1.0 - pow(d / r, 4.0));
    float m2 = m * m;
    return attenuation * m2;
}

#include <hemisphereLightDecl>
#include <directionLightDecl>
#include <pointLightDecl>
#include <spotLightDecl>
#include <snowDecl>
#include <rainDecl>

#ifdef HAS_ANISOTROPY
vec3 getAnisotropicBentNormals(const vec3 T, const vec3 B, const vec3 N, const vec3 V, float anisotropy) {
    vec3 anisotropicFrameDirection = anisotropy >= 0.0 ? B : T;
    vec3 anisotropicFrameTangent = cross(normalize(anisotropicFrameDirection), V);
    vec3 anisotropicFrameNormal = cross(anisotropicFrameTangent, anisotropicFrameDirection);
    vec3 anisotropicNormal = normalize(mix(N, anisotropicFrameNormal, abs(anisotropy)));
    return anisotropicNormal;
}
#endif

#ifdef HAS_VOLUME
vec3 computeColorAtDistanceInMedia(vec3 color, float distance) {
    return -log(color) / distance;
}
vec3 cocaLambert(vec3 alpha, float distance) {
    return exp(-alpha * distance);
}
#endif


vec3 sRGBToLinear(vec3 srgbIn) 
{
    return pow(srgbIn, vec3(2.2));
}

vec4 sRGBToLinear(vec4 srgbIn)
{
    srgbIn = srgbIn ;
    vec3 linearOut = pow(srgbIn.rgb, vec3(2.2));
    return vec4(linearOut, srgbIn.a);
}

vec3 LinearTosRGB(vec3 linearIn) 
{
#ifndef HDR 
    return pow(linearIn, vec3(1.0/2.2));
#else 
    return linearIn;
#endif 
}

vec3 lambertianDiffuse(vec3 diffuseColor) 
{
    return diffuseColor * RECIPROCAL_PI;
}

vec3 applyTonemapping(vec3 linearIn) 
{
    vec3 color = linearIn ;
    return czm_acesTonemapping(color);
}

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
    float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
    return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}

float GeometrySchlickGGX(float roughness, float NoV)
{
    float k = pow(roughness + 1.0, 2.0) / 8.0;
    return NoV / (NoV * (1.0 - k) + k);
}

float D_GGX( const in float alpha, const in float dotNH ) {
    float a2 = pow2( alpha );
    float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
    return RECIPROCAL_PI * a2 / pow2( denom );
}

vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
    float alpha = roughness * roughness;
    vec3 halfDir = normalize( lightDir + viewDir );
    float dotNL = clamp( dot( normal, lightDir ), 0.001, 1.0 );
    float dotNV = abs( dot( normal, viewDir ) ) + 0.001;
    float dotNH = saturate( dot( normal, halfDir ) );
    float dotLH = saturate( dot( lightDir, halfDir ) );
    float dotVH = saturate( dot( viewDir, halfDir ) );
    vec3 F = F_Schlick( f0, f90, dotVH );
    float G = GeometrySchlickGGX(alpha, dotNV) * GeometrySchlickGGX(alpha, dotNL);
    float D = D_GGX( alpha, dotNH );
    return F * ( G * D ) / (4.0 * dotNL * dotNV);
}

void directPhysical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
    float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
    vec3 irradiance = dotNL * directLight.color;
    reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
    reflectedLight.directDiffuse += irradiance * lambertianDiffuse( material.diffuseColor );
}

#ifdef HAS_NORMAL_TEXTURE
vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
    vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
    vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
    vec2 st0 = dFdx( uv.st );
    vec2 st1 = dFdy( uv.st );
    float scale = sign( st1.t * st0.s - st0.t * st1.s );
    vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
    vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
    vec3 N = normalize( surf_norm );
    mat3 tsn = mat3( S, T, N );
    vec3 mapN = texture2D( uNormalTexture, uv.xy ).xyz * 2.0 - 1.0;
    mapN.xy *= uNormalTextureScale;
    mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
    return normalize( tsn * mapN );
}
#endif

#include <cubeUV_reflection>

vec3 inverseTransformDirection( in vec3 dir ) {
    mat3 fixedToENU = mat3(czm_modelView[0][0], czm_modelView[1][0], czm_modelView[2][0], czm_modelView[0][1], czm_modelView[1][1], czm_modelView[2][1], czm_modelView[0][2], czm_modelView[1][2], czm_modelView[2][2]);
    const mat3 yUpToZUp = mat3(1.0, 0.0, 0.0, 0.0, 0.0, -1.0, 0.0, 1.0, 0.0);
    return normalize( yUpToZUp * fixedToENU * dir );
}

void indirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
    reflectedLight.indirectDiffuse += irradiance * lambertianDiffuse( material.diffuseColor );
}

vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
    float dotNV = saturate( dot( normal, viewDir ) );
    const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
    const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
    vec4 r = roughness * c0 + c1;
    float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
    vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
    return fab;
}

void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
    vec2 fab = DFGApprox( normal, viewDir, roughness );
    vec3 Fr = specularColor;
    vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
    float Ess = fab.x + fab.y;
    float Ems = 1.0 - Ess;
    vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;
    vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
    singleScatter += FssEss;
    multiScatter += Fms * Ems;
}

void indirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
    vec3 singleScattering = vec3( 0.0 );
    vec3 multiScattering = vec3( 0.0 );
    vec3 cosineWeightedIrradiance = irradiance;
    computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
    vec3 totalScattering = singleScattering + multiScattering;
    vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
    reflectedLight.indirectSpecular += radiance * singleScattering;
    reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
    reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}

// vec3 getIBLIrradiance( const in vec3 normal ) {
//     vec3 worldNormal = inverseTransformDirection( normal );
//     vec4 envMapColor = textureCubeUV( czm_hdrEnvMap, worldNormal, 1.0 );
//     return envMapColor.rgb;
// }

// vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
//     vec3 reflectVec = reflect( - viewDir, normal );
//     reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
//     reflectVec = inverseTransformDirection( reflectVec );
//     vec4 envMapColor = textureCubeUV( czm_hdrEnvMap, reflectVec, roughness );
//     return envMapColor.rgb;
// }

float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
    return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}

vec4 brdf(in vec4 baseColorWithAlpha, vec2 texCoord, vec2 oriTexCoord, vec3 posEC, vec3 posMC, vec3 vertexNormalEC, vec4 sunLightColor) {
#ifndef USE_BatchPBR
    baseColorWithAlpha = baseColorWithAlpha * uBaseColorFactor;
#endif
#ifdef BaseColorReplace
    baseColorWithAlpha = uBaseColorFactor;
#endif
    float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
    vec3 ng = length(vertexNormalEC) < 0.1 ? normalize(czm_normal * computeNormal(posMC.xyz)) : normalize(vertexNormalEC);
    ng = ng * faceDirection;
#ifdef HAS_BASE_TEXTURE
    baseColorWithAlpha = texture2D(uBaseTexture, oriTexCoord);
    baseColorWithAlpha = sRGBToLinear(baseColorWithAlpha) * uBaseColorFactor;
#endif
#ifdef HAS_NORMAL_TEXTURE
    vec3 n = perturbNormal2Arb(posEC, ng, oriTexCoord);
#ifdef HAS_ANISOTROPY
    float anisotropy = uAnisotropy.b;
    vec3 anisotropyDirection = vec3(uAnisotropy.xy, 0.0);
    vec3 anisotropicTangent = normalize(tbn * anisotropyDirection);
    vec3 anisotropicBitangent = normalize(cross(tbn[2], anisotropicTangent));
    n = getAnisotropicBentNormals(anisotropicTangent, anisotropicBitangent, n, v, anisotropy);
#endif
#else
    vec3 n = ng;
#endif
#ifdef HAS_WETNESS
    mat3 fixedToENU_wetness = mat3(czm_modelView[0][0], czm_modelView[1][0], czm_modelView[2][0], czm_modelView[0][1], czm_modelView[1][1], czm_modelView[2][1], czm_modelView[0][2], czm_modelView[1][2], czm_modelView[2][2]);
    vec3 normalWS_wetness = normalize(fixedToENU_wetness * n);
#endif
#ifdef HAS_RAIN
    n = rippleGenerator(uRippleTexture,uAnimationSpeed,normalWS_wetness,uWetnessFactor);
#endif
    vec3 baseColor = baseColorWithAlpha.rgb;
    float roughness = uRoughnessFactor;
    float metalness = uMetallicFactor;
    vec4 emissiveFactor = uEmissiveFactor;
    vec2 emissiveTexCoord = texCoord.xy;
#ifdef PBR_THEME
    int pbrIndex = int(vPBRIndex);
    if(vPBRIndex < 0.0)
    {
        return baseColorWithAlpha;
    }
    mat4 pbrPar = mat4(0.0);
    for(int i = 0;i < NUM_PBR_MATERIALS;i++)
    {
        if(i == pbrIndex)
        {
            pbrPar = uPBRMaterials[i];
            break;
        }
    }
    roughness = clamp(pbrPar[0][0], 0.04, 1.0);
    metalness = clamp(pbrPar[0][1], 0.0, 1.0);
    baseColor = (baseColorWithAlpha / uBaseColorFactor * vec4(pbrPar[0][2], pbrPar[0][3], pbrPar[1][0], pbrPar[1][1])).rgb;
#endif
#ifdef USE_BatchPBR
    metalness = vMetallicRoughness.x;
    roughness = vMetallicRoughness.y;
    emissiveFactor = vEmissiveFactor;
    emissiveTexCoord = texCoord.xy;
#endif
    metalness = clamp(metalness, 0.0, 1.0);
    roughness = clamp(roughness, 0.0, 1.0);
    
#ifdef HAS_MetallicRoughness_TEXTURE
    vec3 metallicRoughness = texture2D(uMetallicRoughnessTexture, oriTexCoord).rgb;
    metalness = clamp(metalness * metallicRoughness.r, 0.0, 1.0);
    roughness = clamp(roughness * metallicRoughness.g, 0.04, 1.0);
#ifdef HAS_WETNESS
    float fWetness = clamp(uWetnessFactor,0.0,1.0);
    float fWetness_correction = pow(4.0*fWetness,2.0);
    fWetness_correction = clamp(fWetness_correction,clamp(fWetness,0.0,0.9),1.0);
    float fWerness_normalized = fWetness_correction * clamp(normalWS_wetness.z + 0.85,0.0,1.0);
    baseColor = mix(baseColor,baseColor*0.7,fWerness_normalized);
    roughness = mix(roughness,0.05,fWerness_normalized);
#endif
#ifdef HAS_SNOW
    mat3 fixedToENU_snow = mat3(czm_modelView[0][0], czm_modelView[1][0], czm_modelView[2][0], czm_modelView[0][1], czm_modelView[1][1], czm_modelView[2][1], czm_modelView[0][2], czm_modelView[1][2], czm_modelView[2][2]);
    vec3 normalWS_snow = normalize(fixedToENU_snow * n);
    snowGenerator(uSnowMaskTexture,uSnowNormalTexture, oriTexCoord,uSnowCoverageFactor,normalWS_snow,baseColor,roughness);
#endif
#endif

    vec3 lightColorHdr = vec3(2.0) * sunLightColor.rgb;
    vec3 l = normalize(czm_lightDirectionEC);
    vec3 v = -normalize(posEC);
    vec3 h = normalize(v + l);
    vec3 f0 = vec3(0.04);
    vec3 diffuseColor = baseColor * (1.0 - metalness) * (1.0 - f0);
    vec3 specularColor = mix(f0, baseColor, metalness);
    
    float alpha = roughness * roughness;
    float dotNL = clamp( dot( n, l ), 0.001, 1.0 );
    float dotNV = abs( dot( n, v ) ) + 0.001;
    float dotNH = saturate( dot( n, h ) );
    float dotLH = saturate( dot( l, h ) );
    float dotVH = saturate( dot( v, h ) );
    float reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);
    float f90 = clamp(reflectance * 25.0, 0.0, 1.0);
    vec3 F = F_Schlick( specularColor, f90, dotVH );
    float G = GeometrySchlickGGX(alpha, dotNV) * GeometrySchlickGGX(alpha, dotNL);
    float D = D_GGX( alpha, dotNH );
    vec3 diffuseContribution = (1.0 - F) * lambertianDiffuse(diffuseColor);
    vec3 specularContribution = F * G * D / (4.0 * dotNL * dotNV);
    
    vec3 geometryNormal = ng;
    PhysicalMaterial material;
    material.diffuseColor = diffuseColor;
    vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
    float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
    material.roughness = max( roughness, 0.0525 );
    material.roughness += geometryRoughness;
    material.roughness = min( material.roughness, 1.0 );
    material.specularColor = specularColor;
    material.specularF90 = 1.0;
    
    GeometricContext geometry;
    geometry.position = posEC;
    geometry.normal = n;
    geometry.viewDir = v;
    ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
    reflectedLight.directDiffuse += dotNL * lightColorHdr * diffuseContribution;
    reflectedLight.directSpecular += dotNL * lightColorHdr * specularContribution;
    
    IncidentLight directLight; 
    #include <lightSourceImpl>
    
    vec3 irradiance = vec3(0.0);
    vec3 radiance = vec3(0.0);
  
#ifdef HAS_HEMISPHERE_LIGHTS
    HemisphereLight hemiLight;
    hemiLight.skyColor = uSkyColor[0];
    hemiLight.groundColor = uGroundColor[0];
    hemiLight.direction = normalize(czm_normal * vec3(0.0, 0.0, 1.0));
    irradiance += getHemisphereLightIrradiance( hemiLight, geometry );
#endif

#ifdef IBL

#ifdef KtxEnvMap
    mat3 fixedToENU = mat3(czm_modelView[0][0], czm_modelView[1][0], czm_modelView[2][0], czm_modelView[0][1], czm_modelView[1][1], czm_modelView[2][1], czm_modelView[0][2], czm_modelView[1][2], czm_modelView[2][2]);
    const mat3 yUpToZUp = mat3(-1.0, 0.0, 0.0, 0.0, 0.0, -1.0, 0.0, 1.0, 0.0);
    vec3 cubeDir = normalize( yUpToZUp * fixedToENU * reflect(-v, n) );
    vec3 worldNormal = normalize( yUpToZUp * fixedToENU * n );
    irradiance = czm_sphericalHarmonics(worldNormal, czm_sphericalHarmonicCoefficients);
    radiance = czm_sampleOctahedralProjection(czm_specularEnvironmentMaps, czm_specularEnvironmentMapSize, cubeDir,  roughness * czm_specularEnvironmentMapsMaximumLOD, czm_specularEnvironmentMapsMaximumLOD);
#else
    // irradiance += getIBLIrradiance( geometry.normal );
    // radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
#endif
    
#else
    vec3 positionWC = vec3(czm_inverseView * vec4(posEC, 1.0));
    vec3 r = normalize(czm_inverseViewRotation * normalize(reflect(v, n)));
    float vertexRadius = length(positionWC);
    float horizonDotNadir = 1.0 - min(1.0, czm_ellipsoidRadii.x / vertexRadius);
    float reflectionDotNadir = dot(r, normalize(positionWC));
    r.x = -r.x;
    r = -normalize(czm_temeToPseudoFixed * r);
    r.x = -r.x;
    float inverseRoughness = 1.04 - roughness;
    inverseRoughness *= inverseRoughness;
    vec3 sceneSkyBox = textureCube(czm_environmentMap, r).rgb * inverseRoughness;
    float atmosphereHeight = 0.05;
    float blendRegionSize = 0.1 * ((1.0 - inverseRoughness) * 8.0 + 1.1 - horizonDotNadir);
    float blendRegionOffset = roughness * -1.0;
    float farAboveHorizon = clamp(horizonDotNadir - blendRegionSize * 0.5 + blendRegionOffset, 1.0e-10 - blendRegionSize, 0.99999);
    float aroundHorizon = clamp(horizonDotNadir + blendRegionSize * 0.5, 1.0e-10 - blendRegionSize, 0.99999);
    float farBelowHorizon = clamp(horizonDotNadir + blendRegionSize * 1.5, 1.0e-10 - blendRegionSize, 0.99999);
    float smoothstepHeight = smoothstep(0.0, atmosphereHeight, horizonDotNadir);
    vec3 belowHorizonColor = mix(vec3(0.1, 0.15, 0.25), vec3(0.4, 0.7, 0.9), smoothstepHeight);
    vec3 nadirColor = belowHorizonColor * 0.5;
    vec3 aboveHorizonColor = mix(vec3(0.9, 1.0, 1.2), belowHorizonColor, roughness * 0.5);
    vec3 blueSkyColor = mix(vec3(0.18, 0.26, 0.48), aboveHorizonColor, reflectionDotNadir * inverseRoughness * 0.5 + 0.75);
    vec3 zenithColor = mix(blueSkyColor, sceneSkyBox, smoothstepHeight);
    vec3 blueSkyDiffuseColor = vec3(0.7, 0.85, 0.9);
    float diffuseIrradianceFromEarth = (1.0 - horizonDotNadir) * (reflectionDotNadir * 0.25 + 0.75) * smoothstepHeight;
    float diffuseIrradianceFromSky = (1.0 - smoothstepHeight) * (1.0 - (reflectionDotNadir * 0.25 + 0.25));
    vec3 diffuseIrradiance = blueSkyDiffuseColor * clamp(diffuseIrradianceFromEarth + diffuseIrradianceFromSky, 0.0, 1.0);
    float notDistantRough = (1.0 - horizonDotNadir * roughness * 0.8);
    vec3 specularIrradiance = mix(zenithColor, aboveHorizonColor, smoothstep(farAboveHorizon, aroundHorizon, reflectionDotNadir) * notDistantRough);
    specularIrradiance = mix(specularIrradiance, belowHorizonColor, smoothstep(aroundHorizon, farBelowHorizon, reflectionDotNadir) * inverseRoughness);
    specularIrradiance = mix(specularIrradiance, nadirColor, smoothstep(farBelowHorizon, 1.0, reflectionDotNadir) * inverseRoughness);
    irradiance = diffuseIrradiance;
    radiance = specularIrradiance;
#endif

    indirectSpecular_Physical(radiance, irradiance, geometry, material, reflectedLight);

#ifdef HAS_OCCLUSION_TEXTURE
    float ambientOcclusion = texture2D(uOcclusionTexture, oriTexCoord.xy).r;
    reflectedLight.indirectDiffuse *= ambientOcclusion;
#ifdef IBL
    reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
#endif
#endif

vec3 color = reflectedLight.directDiffuse + reflectedLight.directSpecular + reflectedLight.indirectDiffuse + reflectedLight.indirectSpecular;

#ifdef HAS_EMISSIVE_TEXTURE
    emissiveTexCoord = emissiveTexCoord * uEmissiveUVOffsetAndTiling.zw + uEmissiveUVOffsetAndTiling.xy;
    vec3 emissive = texture2D(uEmissionTexture, emissiveTexCoord).rgb;
    emissive *= emissiveFactor.rgb;
    color += emissive;
#else
    color += emissiveFactor.rgb;
#endif

    color = applyTonemapping(color);
    color = LinearTosRGB(color);
    
#ifdef MASK
    if (baseColorWithAlpha.a < uAlphaCutoff)
    {
        discard;
    }
    return vec4(color.rgb, 1.0);
#endif
    return vec4(color.rgb, baseColorWithAlpha.a);
}
#endif
`,"must be non-object","GpuConstants","subRequest","setBaseUrl","createAttributeLocations","SVO_HasInstSelInfo","heightRange","Cannot use deleted val. handle = ","TileSelectionResult","RGB_ETC1","oriTextureBake","getTileCredits","normalTextureIndex",`

uniform sampler2D uTexture; 
uniform sampler2D uSecTexture; 
 
varying vec4 vColor; 
varying vec4 vTexCoord; 
varying vec4 clip_vertex; 
varying vec4 vSecondColor; 
uniform vec4 uAmbientColor; 

void main() 
{ 
	if(vColor.a < 0.1){
		discard; 
	}
	vec4 texColor = vec4(vColor.rgb, min(texture2D(uTexture, vTexCoord.xy).a, vColor.a)); 
	vec4 haloTexColor = vec4(uAmbientColor.rgb, min(texture2D(uSecTexture, vTexCoord.zw).a, uAmbientColor.a)); 
	if(texColor.a + haloTexColor.a < 0.2) 
	{ 
		discard; 
	} 
	vec3 v3Color = mix(haloTexColor.rgb, texColor.rgb, texColor.a + 0.2); 
	gl_FragColor = vec4(v3Color.rgb, min(1.0, texColor.a + haloTexColor.a)); 
	if(gl_FragColor.a < 0.1) 
	{ 
		discard; 
	} 
    gl_FragColor = czm_gammaCorrect(gl_FragColor); 
}`,"runDestructors","waterNormalMap","nextSibling","_emscripten_bind_DracoInt16Array_GetValue_1","HAS_NORMAL_TEXTURE","MAX_VALUE","clampToGroundPolyline","getH","SpecularR","decode_texCoord1_normConstant","emscripten_bind_DracoInt8Array_size_0","_emscripten_bind_DracoUInt8Array___destroy___0","hookCreateMesh","segmentCount","_pitch","getHeading","RectangleExt","Globe_Excavation","getEstimatedLevelZeroGeometricErrorForAHeightmap","getter","easing","_updateFlattenFramebuffer","hookFreeVertexArray","_fillStyle","route","unloadBlockTile","Check","Apply_Excavation","_inverseModelViewDirty","aTextureCoordMatrix","northeast","FresnelFp","getSizeInBytes","_scene","meshopt_decodeIndexBuffer","yOffset","_pbrParameter","BoundingRectangle","LINES","create","_position","TEXTURE_MAX_ANISOTROPY_EXT","bReflect","Mismatched type converter count","onRuntimeInitialized","EditHandler","_roughnessFactor","GetMetadata","Resource","_isAltitudeFree","TRANSPARENT","sphere","dracoDecodePointCloud","radius","negate","getExtension","_baseColor","themeStyle","video","_modelView3DDirty","viewPosition","constrast","mesh","billboardMode","valueOf","del","aCustom","emscripten_bind_DracoUInt32Array_GetValue_1","HeightRange","GetDoubleEntry","transcodeImage() failed.","buildModuleUrl","image/png","PACK","xflags","scene","first is required","_heightmapHeight","_emscripten_bind_PointAttribute_num_components_0","decode_texCoord0_min","EPSILON7","#define texture2DLodEXT textureLod","requestTileGeometry","typedArray","latitude","init","emscripten_bind_DracoInt16Array_DracoInt16Array_0","vertexPackage","ScreenSpaceEventHandler","castObject",'Cannot convert "',"_hintLineColor","lineCommand","viewMatrix","getFragment","maximumRadius","dimensions",`
#ifdef GL_EXT_frag_depth
#extension GL_EXT_frag_depth : enable
#endif
#ifdef GL_OES_standard_derivatives
#extension GL_OES_standard_derivatives : enable
#endif

uniform vec4 uVisibleAreaColor;
uniform vec4 uHiddenAreaColor;
uniform vec2 uTextureSize;
uniform sampler2D uGlobalDepthTexture;
uniform sampler2D uTexture;
uniform mat4 uRenderTextureMatrix;
varying vec4 vClipPos;

float getDepth(in vec4 depth)
{
    float z_window = czm_unpackDepth(depth);
    return z_window;
}

float getDepthFromShadowMap(in sampler2D viewShedTexture, in vec4 texCoord)
{
	vec2 tCoord;
    tCoord = texCoord.xy * uTextureSize - 0.5;
	float x0 = floor(tCoord.x);
	float x1 = ceil(tCoord.x);
	float y0 = floor(tCoord.y);
	float y1 = ceil(tCoord.y);
	vec2 invTexSize = 1.0 / uTextureSize;
	vec2 t00 = vec2((x0 + 0.5) * invTexSize.x, (y0 + 0.5) * invTexSize.y);
	vec2 t10 = vec2((x1 + 0.5) * invTexSize.x, (y0 + 0.5) * invTexSize.y);
	vec2 t01 = vec2((x0 + 0.5) * invTexSize.x, (y1 + 0.5) * invTexSize.y);
	vec2 t11 = vec2((x1 + 0.5) * invTexSize.x, (y1 + 0.5) * invTexSize.y);
	float z00 = getDepth(texture2D(uTexture, t00));
	float z10 = getDepth(texture2D(uTexture, t01));
	float z01 = getDepth(texture2D(uTexture, t10));
	float z11 = getDepth(texture2D(uTexture, t11));
	float depth = max(max(z00, z01), max(z10, z11));
	return depth;
}

void main()
{
	vec4 depthTexCoord = vClipPos / vClipPos.w;
	depthTexCoord.xy = depthTexCoord.xy * 0.5 + 0.5;
	float sceneDepth = czm_unpackDepth(texture2D(uGlobalDepthTexture, depthTexCoord.xy));
	sceneDepth = sceneDepth * 2.0 - 1.0;
	vec4 pos = vClipPos;
	pos.z = sceneDepth * pos.w;
	vec4 renderTextureCoord = uRenderTextureMatrix * pos;
	vec4 texCoord = renderTextureCoord / renderTextureCoord.w;
	texCoord.xyz = texCoord.xyz * 0.5 + 0.5;
	float depth = getDepthFromShadowMap(uTexture, texCoord);
	float dxc = abs(dFdx(texCoord.z));
	float dyc = abs(dFdy(texCoord.z));
	float dF = max(dxc, dyc) * 3.0;
	float bias = 1.0e-6 + dF;
	float c = float(depth + bias < texCoord.z);
	vec4 finalColor = mix(uVisibleAreaColor, uHiddenAreaColor, vec4(c));
	if(finalColor.a < 0.1)
	{
		discard;
	}
	gl_FragColor = czm_gammaCorrect(finalColor);
}
`,"TRANSPARENT_BACK_COLOR","UNIT_X","UNIT_W","Transforms","freeRasterResource","strings","copyFromArrayView","#define gl_FragColor out_FragColor","addS3MTilesLayerByScp","decode_texCoord0_normConstant","rainEffect","lineEntity","100 20px SimSun","Levels","DracoUInt16Array","endX","succeed","S3MTilesFontWithHaloFp","CenterY","too many length or distance symbols","onStop","loadingExcavateTexture","_emscripten_enum_draco_GeometryAttribute_Type_POSITION","_isOverlapDisplayed","componentsPerAttribute","cos","StopPause","xExtent","DecodeBufferToMesh","terrainProvider","_hasWaterMask","visibility","DT_UINT32","DeveloperError","S3MPointCloudFS","addPotentialVisibiltyChangedLayer","getLevelMaximumGeometricError","Sightline","QuadtreeTile","_renderBottomAndSideCommands","data:application/octet-stream;base64,","getAttributeLocations","SCENE2D","s3m:TransparencyOptimization","_indexOfRefraction","ONLY_KEEP_LINE","LabelCollection","_blockScale","uncaughtException","web_user","removeModifyRegion","min","visibility:hidden;position:absolute;top:0px;left:0px;","splice","DracoUInt32Array","_surroundDuration","_northwestChild","_routes","appendForwardSlash","TEXTURE_WRAP_T","TilesBounds"," cannot be zero: ","DDSTexture","options.url is required.","requestedFrame","DT_INT64","cache","1693820DHmytt","GeoName","WithinLayer3DGroup","cTFPVRTC1_4_RGBA","fetchArrayBuffer","emscripten_bind_DracoInt32Array_size_0","Material3Ds","layer",'Missing field:  "',"RegionVectex","ModelEdgeVp","split","vertexColorInstance","/extendxml.xml","ProjectionImage.contrast","S3MCompressType","Object already scheduled for deletion","emscripten_bind_PointAttribute_num_components_0","WEBKIT_WEBGL_compressed_texture_pvrtc","_editPointIndex","isLessThan","lon","command","PassState","isTileMap","_emscripten_bind_AttributeTransformData_AttributeTransformData_0","_emscripten_bind_AttributeQuantizationTransform_quantization_bits_0","snowMaskTextureIndex","fromGeometry","isVisible","rangeMode","toWireType","the distance is greater than 0.0 an less than 1.0","createCommand","dynCall_vi","materials","plus","GENERIC","_setTransform","_layers","renderedMesh","var thisWired = classParam.toWireType(","EndRow","start","_emscripten_bind_Decoder_GetAttributeUInt8ForAllPoints_3","dataFormatDescriptor","readyTextureCount","attachFiles","GeoDeModMatrix","_interpolationMode","Texture","getVisibleInViewport","directionWC","CLIPPLANE","isAliasOf"," called with ' + arguments.length + ' arguments, expected ","hold","toBytes","_invisibleChangedQueue","authority",`);
`,"namespaceURI","_iconRelatedTextLayerID","pvrtc","BUFFER","pack imagery index invalid","_updateEdgeDistanceFalloffFactor","emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_NO_TRANSFORM","loadTileDataAvailability",`.readValueFromPointer(args);
args += argType`,"emscripten_bind_GeometryAttribute___destroy___0","POW_PRECISION","instanceMode","insert","emscripten_bind_PointAttribute_GetAttributeTransformData_0","total","Exponent not an integer: ","srcY","EMPTY_OBJECT","_instanceCount","getterContext","DrawCommand","UTiling","PostProcessStage","ImageryLayer","pitch","get scene list failed,","[object ArrayBuffer]","_resource","_maxWValue","arrayFloat","packArray","Color","_emscripten_bind_AttributeQuantizationTransform_min_value_1","VTiling","_updatePBRMaterial","Globe","oriPointCount","schedule","HAS_SNOW","COMPUTE_W_VALUE","fromRectangle3D","dataVersion","IPORTAL_KEY","loadMehopt","fragment","_flattenTextureWidth","blockInfo","_emscripten_bind_DracoInt32Array_GetValue_1","SELECTION","sum","Error: Cannot destroy object. (Did you create it yourself?)","EUCLID","_normalDirty","GlobeSurfaceShaderSet","NEAREST","OCT_VERTEX_NORMALS","isReal","ScaleDenominator","emscripten_bind_Decoder_GetAttributeUInt16ForAllPoints_3","TextureCoordMatrix","wmts_sub","_infiniteProjection","line color","Hypsometric","./utils/common","_singleInstance","_distanceRangeSquare","_bottomAltitude","boundingVolume",`(constructor, argTypes, args) {
`,"4999","maximumHeight","Program terminated with exit("," with invalid number of parameters (","extensions","averageHeight","S3MTilesNoLightVS","fromType","_emscripten_bind_Decoder_GetAttributeIdByName_2","METER","verticalFov","oriTexture","show","_emscripten_bind_PointCloud_num_points_0","HIDE","_sortKey","strm","_dictColorTable","_southSkirtHeight","_emscripten_bind_Decoder___destroy___0","PrimitiveType","hypsometric","_pointSize","_normal3DDirty","___wasm_call_ctors",`#ifdef GL_OES_standard_derivatives
#extension GL_OES_standard_derivatives : enable
#endif
    varying vec4 vColor;
    varying vec4 vPositionMC;
    varying float vPixelDistance;
#ifdef APPLY_SWIPE
    uniform vec4 uSwipeRegion;
    void rollerShutter(vec2 coord, vec4 region)
    {
        vec2 f = step(region.xw, coord);
        vec2 s = step(coord, region.zy);
        if (f.x * f.y * s.x * s.y < 1.0)
        {
            discard;
        }
    }
#endif
void main()
{
#ifdef APPLY_SWIPE 
    rollerShutter(gl_FragCoord.xy, uSwipeRegion);
#endif
	if(vColor.a < 0.1)
	{
		discard;
	}
    gl_FragColor = vColor;
    float distanceToCenter = length(gl_PointCoord - vec2(0.5));
    float maxDistance = max(0.0, 0.5 - vPixelDistance);
    float wholeAlpha = 1.0 - smoothstep(maxDistance, 0.5, distanceToCenter);
    gl_FragColor.a *= wholeAlpha;
	if(gl_FragColor.a < 0.1)
	{
		discard;
	}
#ifdef CLIP
    gl_FragColor *= czm_clip(czm_modelView * vec4(vPositionMC.xyz, 1.0), 1.0);
#endif
    gl_FragColor = czm_gammaCorrect(gl_FragColor);
}`,"levels","MeshOpt","CESIUM_3D_TILE","_targetPoints","queryNumericValue","_inverseView","hookRequestContentFunc","idsOperationMap","_coordUnit","uClipRasterTexture","_mode","_direction","_frameState","AmbientR","_objsColorList","forEach","isTileAvailable","_northeastChild","idsColorMap","geometry",`#ifdef Mode_Height
varying float fHeight;
#endif
#ifdef OVERLAY
   varying vec2 vTexCoord;
   uniform sampler2D uTexture;
#endif

void main()
{
   gl_FragColor = vec4(1.0);
#ifdef Mode_Height
    #ifdef UseFloatTexture
    gl_FragColor = vec4(fHeight, 0.0, 0.0, 1.0);
    #else
    gl_FragColor = czm_packValue(fHeight);
    #endif
#endif
#ifdef OVERLAY
   gl_FragColor = texture2D(uTexture,vTexCoord);
#endif
}`,"_hLabel","next","physicalIndex","bottomGeometry","blockCache","_upsampleParent","An error occurred while accessing ","addEventListener","Hue","DT_UINT64","bumpSpeed","flattenChunks","raw","parse","PixelDatatype","aCustom1","IsReal","uniqueCount","amd","input","cubeUV_reflection","fromVertices","customDPI","Camera","KTX2Transcoder","polygonOffset","rest/maps","Ellipsoid","flyTo","_emscripten_enum_draco_DataType_DT_FLOAT64","__destroy__","_depthBuffers","reset","HeadingPitchRoll","MinVisibleValue","fromWireType","pureVirtualFunctions","emscripten_bind_AttributeOctahedronTransform___destroy___0","RRR","removeStop","onUpdate","enableRotate","isEqualTo","defineProperties","refCount","emscripten_bind_DecoderBuffer_DecoderBuffer_0","_emscripten_bind_DracoInt8Array_GetValue_1","pixelDepth","edgeSP",` args!');
}
`,"TextureAtlas","analysisMode","_currentDis","modifyTiles","inflateSetDictionary","    var arg","_featheringScale","SubTextureManager","varargs","texturePackage","_removeAllExcavationCommands","TextureCompressType","vBuffer","' called with an invalid number of arguments (","documentElement","S3MContentFactory","buffers","Assets/Textures/grepin.png","_emissionColor",`attribute vec4 aPosition;
varying vec4 vClipVertex;
varying float fWindowZ;
vec4 depthClampFarPlane(vec4 clipPos)
{
	fWindowZ = (0.5 * (clipPos.z / clipPos.w) + 0.5) * clipPos.w;
	clipPos.z = min(clipPos.z, clipPos.w);
	return clipPos;
}
void main()
{
   vec4 pos = czm_modelViewProjection * vec4(aPosition.xyz, 1.0);
   gl_Position = depthClampFarPlane(pos);
}
`,"getTexture","isGreaterThanOrEqualTo","_clipRasterFbo","useDepthPicking","roughnessFactor","Framebuffer","isNaN","_commands"," out of range: ","ambient","preUpdate","onAbort","regular","_drawEvt","count","computeNeighbors","geodes","fromDegreesArrayHeights","Name","_swipeRegion","Number primitive has more than 15 significant digits: ","Missing KTX 2.0 identifier.","alpha","Wired = argType","memory","max","PrimitiveCollection","altitude","ended","IntersectionTests","hasWaterMask","transform_type","enableTextureRenderable","emscripten_bind_Metadata___destroy___0","pako inflate (from Nodeca project)","snowEffect","headers","positiveX","clearcoat","_requestTiles","XMLParser","textureunitstates","STATIC_DRAW","options.duration is required and must be positive.","error","TexModMatrix","Constrast","ModelEdgeFp","_texture"," already exists in this Scene.","flycircle","UNSIGNED_INT","DT_TYPES_COUNT","_calloutColor","__class__","check","ellipsoidMatrix","_delay","setter","contextId","_emscripten_enum_draco_EncodedGeometryType_INVALID_GEOMETRY_TYPE","StencilConstants","_errorEvent","visibleDistanceMax","toCartesian","arrayBufferView","layer is required.","__growWasmMemory","SVC_TexutreCoordIsW","fromDegrees","emscripten_bind_Mesh___destroy___0","aVertexWeight_1","addTexture","tilt","modify_","removeExcavationRegion","Style3D","setSelection ids","_stopsInfo","decode_position_normConstant","BlendingState","subRequestNamesBake","./zlib/gzheader","isSct","drawingBufferWidth","isOverlapDisplayed","totalLength","OVERLAY","Draco","ViewPosition","S3MPageLod","/datas/","minVisibleAltitude","_waitTime","VideoName","RotateY","datas/",'?x={x}&y={y}&scale={scale}&origin={"x":',"_turningMode","argv","_modifyRegions","SKETCH_MODE","emscripten_bind_Decoder_GetAttributeByUniqueId_2","setOnlyObjsVisible ids","pickFramebuffer","null","materialPass","invGeoMatrix","brightness","tileXYToNativeRectangle","emscripten_enum_draco_DataType_DT_UINT32","var obj = new constructor(","_terrainDataStructure",`
    #ifdef QUANTIZATION_BITS12
        attribute vec4 compressed0;
    #else
        attribute vec4 position3DAndHeight;
        attribute vec4 textureCoordAndEncodedNormals;
    #endif
    
    #ifdef QUANTIZATION_BITS12
        uniform vec2 u_minMaxHeight;
        uniform mat4 u_scaleAndBias;
    #endif
    
    uniform float uMinHeight;
    uniform float uHeightRange;
    uniform vec2 uRepeat;
    varying vec2 vUV;
    uniform mat4 u_modifiedModelViewProjection;
    void main() {
    #ifdef QUANTIZATION_BITS12
        vec2 xy = czm_decompressTextureCoordinates(compressed0.x);
        vec2 zh = czm_decompressTextureCoordinates(compressed0.y);
        vec3 position = vec3(xy, zh.x);
        float height = zh.y;
        vec2 textureCoordinates = czm_decompressTextureCoordinates(compressed0.z);
        height = height * (u_minMaxHeight.y - u_minMaxHeight.x) + u_minMaxHeight.x;
        position = (u_scaleAndBias * vec4(position, 1.0)).xyz;
        float texCoordX = czm_decompressTextureCoordinates(compressed0.w).x;
    #else
        vec3 position = position3DAndHeight.xyz;
        float height = position3DAndHeight.w;
        float texCoordX = textureCoordAndEncodedNormals.z;
    #endif    
        
        gl_Position = u_modifiedModelViewProjection * vec4(position, 1.0);
        float y = uRepeat.y * (height - uMinHeight) / uHeightRange;
        vUV = vec2(texCoordX * uRepeat.x, y);
    }
`,"the max of vertexTextureImageUnits less 1, function is not supported.","transparentsorting","videoName","emscripten_bind_AttributeTransformData_transform_type_0","read","DecoderBuffer","_log2FarDepthFromNearPlusOne","#define texture2D texture","PointAttribute","APPLY_SWIPE","LINEAR","MODULO_MODE","ThirdParty/basis_transcoder.wasm","emscripten_enum_draco_DataType_DT_INT32","getColor","UNLOADED","MipmapHint","ARM_NONE","fromRectangle","ndist","_emscripten_bind_DracoInt16Array___destroy___0","indexType","_emissiveTextureIndex","FORMAT","StopAround","_tweens","_combiInfo",`
#ifdef HAS_DIR_LIGHTS

uniform vec3 uDirectionalLightDirectionEC[ DIR_LIGHTS ];
uniform vec3 uDirectionalLightColor[ DIR_LIGHTS ];
    
#endif
`,"BIM2","saturation","useLogDepth","cacheNode","_emscripten_bind_DracoUInt32Array_GetValue_1","canRefine","boundingSphere","generateMipmap","_crn_get_width",".bil?level=","CRNProcessor","_free","Failed to obtain image tile X: ","texCoordCompressConstant","sane",`
        varying float vHeight;
        vec4 packValue(float value)
        {
            float SHIFT_LEFT8 = 256.0;
            float SHIFT_RIGHT8 = 1.0 / 256.0;
            vec4 result;
            result.a = 255.0;
            float fPos = abs(value + 9000.0) * SHIFT_RIGHT8;
            result.b = (fPos - floor(fPos)) * SHIFT_LEFT8;
            fPos = floor(fPos) * SHIFT_RIGHT8;
            result.g = (fPos - floor(fPos)) * SHIFT_LEFT8;
            result.r = floor(fPos);
            result /= 255.0;
            return result;
        }
        void main()
        {
            gl_FragColor = packValue(vHeight);
        }
    `,"shallowClone","_emscripten_bind_DracoFloat32Array___destroy___0","emscripten_bind_DracoInt16Array___destroy___0","ETC1S","vertexArrayDestroyable","GetAttributeInt32ForAllPoints","waitTime","DECIMAL_PLACES","projection-image","filter","Matrix4","1.0.0","_showMeasureResult","texture","bc7","status","_hash","COMPRESS_VERTEX","join","frameNumber","material","firstChild","depthTexture","MODE 0","_destroyCommand","_emscripten_bind_Decoder_GetAttribute_2","cTFBC7_RGBA","emscripten_bind_DracoInt16Array_size_0","NONEARTHFLAT","code","_oneOverLog2FarDepthFromNearPlusOne","renderState","[BigNumber Error] ","indexCountWithoutSkirts","deleteObject","_emscripten_bind_DracoInt8Array_DracoInt8Array_0","/config","emscripten_bind_Decoder_DecodeBufferToPointCloud_2","concat","CLIP_BEHIND_ALL_PLANE","nodeName","ready","IGNORE_NORMAL","isS3MB","DT_FLOAT32","fromCartesianArray","modifyTerrainVertexArrayMap","clip","emscripten_bind_DracoUInt8Array_GetValue_1","Style","LabelStyle","{y}","point size","emscripten_bind_DracoFloat32Array_GetValue_1"," const*","GetAttributeIdByName","southwest","gpuConstants","bool","isInViewport","&tilerow=","asm","viewProjectionMatrix","_anisotropy","negativeY","key","obb","incorrect header check","computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid","createChildTile","_emscripten_bind_DracoInt16Array_size_0","_queue"," not a primitive number: ","IMAGERY","hasVertexNormals","RequestType","emscripten_enum_draco_GeometryAttribute_Type_NORMAL","_emscripten_bind_Decoder_SkipAttributeTransform_1","blockCacheQueue","created","worldGeometry","toCssColorString","positionWC","HEAPU32","point color","substr","StencilFunction","uv6","GET","gbk","AttributeTransformData","unknownFunctionName","_isAlongline","href","textureRenderableFlag","img","grow","_minHeight","raiseEvent","SkipAttributeTransform","emscripten_bind_DracoInt16Array_GetValue_1","compressOptions","No transcoding format target available for UASTC compressed ktx2.","options.rectangles,options.levels is required.","DIR_LIGHTS ","_hasMetadata","SceneFramebuffer","HEAP16","beginPath","totalMemoryUsageInBytes","errorEvent","W_VISIBLE","level","upcast","_nextUint16","all","MIN_VALUE","magnitude","Microsoft.XMLDOM","modifySideCommands","positionToTileXY","windowBits","maxVisibleDistance","_eastSkirtHeight","dequeue","avail_in","Cartesian2","skeletonIds","flipY","side","isBuild",`var ret = retType.fromWireType(rv);
return ret;
`,"GpuConstantDefinition","VERSION","TRANSLUCENT","shaderProgram","the depth buffer is not supported.","message","samples","hasOwnProperty","_nextUint32","viewer","_emscripten_bind_PointAttribute_unique_id_0","green","instanceIndex","layerCount","FULL","_depthBuffer","LINEAR_NONE","LINEAR_MIPMAP_LINEAR","width",".json","Object expected: ","row","MaterialExt","VertexArray","format","err","bind","_updateObjsColor","northeastChild","infiniteProjectionMatrix","wmts100","height","aTexCoord0","brdf","primitiveType","initializeFromClipResult","textureInfo","InstanceMode","s3mGroup","_isTransparencyOptimization","smartPtr","EXT_texture_compression_bptc","subTexturesToUpload","DiffuseR","regionUpdate","response","_easingFunction","num_faces","_vLabel","integerValue","HEAPF64","object","_tileFormat","TextureMinificationFilter","Ground","touchedFrame",`attribute vec4 position;

uniform vec4 uRect;

varying float fHeight;

void main()
{
   vec4 vPos = position;
   vec2 vBounds = uRect.zw - uRect.xy;
   vPos.xy = (vPos.xy - uRect.xy) / vBounds.xy * 2.0 - 1.0;
   gl_Position = vec4(vPos.xy, 0.5, 1.0);
   fHeight = vPos.z;
}`,"dirPolyline","resolution","ShaderProgram","createIndexBuffer","vertexCount","_emscripten_bind_Decoder_GetTrianglesUInt16Array_3","rgba(38, 38, 38, 0.85)","total_out","RequestScheduler","_command","createTexture","MeasureHandler.lineDisplayType","createTypedArrayFromArrayBuffer","_excavationTexture","BASICFORMAT","_subBatchValuesBake","_floor","_lineWidth","S3MTilesCommonOntTextureFP","ncode","./inffast","_isDown","_emscripten_bind_DracoUInt16Array_DracoUInt16Array_0","wrapS","_color","pointerType","uBuffer","PBR","_inverseViewProjectionDirty","vertexBufferToCreate","PT_CLOUD","_tranverseRenderEntity","_obb","/layers.json","_dirty","Credential.value is necessory.","fileType","minValues","stopCollection","_tilt","CRNTranscoder","excavateSideCommands",'?x={x}&y={y}&scale={scale}&origin={"x":-180,"y":90}',"vertexArray","ICON","tilingScheme","DisplayMode","_scheme","_blockCacheQueue","setThrew","instanceIds","_clampMode","isS3MBlock","Left","_uValues","UNSPECIFIED","AttributeCompression","byteOffset","DVH","createDerivedShaderProgram","verticalPolyline","Invalid KTX2 file.","_isSkirtDirty","Right","createdBaker","enableTranslate","Geometry","destructor","_snow","INCREMENT_WRAP","header crc mismatch","vertices","nlen","silhouetteEdgeCommand","GetAttributeInt8ForAllPoints","CLIP_INSIDE","_waterParameters","WHITE","TEXTURE0","decodeTexCoord1Min","MASK_OUTSIDE","updateEnvironment","values","toFixed","stringify","POSITIVE_INFINITY","extractEdgeInformation","cTFETC1_RGB","ROUND_HALF_CEIL","removeObjsColor","_stopArrived","_PBRMaterialParams","invoker(fn","HorizontalOrigin","rootTextureName","_projection","uv7","pickColorIdentifier","createPickIds","_currentTween","preservePointerOnDelete","fresnelPower","ratio","fromCssColorString","_initialize","_editPoint","stopCount","StencilOperation","/tileset/data/path/","UNSUPPORTED_VERSION","__wasm_call_ctors","startY","onStart","center3D","dot","NORMAL_AND_DEPTH","_clipRasterTexture","_isS3MB","CreateTexture","RESET","emscripten_bind_DracoInt32Array___destroy___0","JobType","_skirtScale","componentDatatype","withAlpha","9999","FeatureDetection","skylineCamera","credits","multiple","tileImage","decimalSeparator","hookGetShaderProgram","url","viewport","sharingPolicy","cross","uniformMap","isLessThanOrEqualTo","Not a","maxFresnel","modifyRegionTiles","_edgeCurrentTotalLength","toString","computeVisibility","createModifyVertexArray",`
#ifdef GL_OES_standard_derivatives
#extension GL_OES_standard_derivatives : enable
#endif
precision highp float;
varying vec4 vColor;
varying float vRadius;
varying vec3 vPosition;
varying vec3 vViewPosition;
varying float vLineLengthPixels;
varying float vSizeFalloffFactor;
varying float vLineIndex;
varying float vDistanceFromEye;

// At which coverage threshold we discard a fragment completely
#define COVERAGE_TEST_THRESHOLD 0.01
const float nearRange = 1000.0;
const float farRange = 20000.0;

// Sketch
#if (MODE == 2 || MODE == 1)
//uniform sampler2D uStrokesTexture;
//uniform float uStrokesNormalizationScale;
varying vec2 vStrokeUV;

float calculateLineOffsetSketch()
{
    //float offsetNorm = rgba2float(texture2D(uStrokesTexture, vStrokeUV));
    //return (offsetNorm - 0.5) * uStrokesNormalizationScale;
    return 1.0;
}

float calculateLinePressureSketch()
{
    //return rgba2float(texture2D(uStrokesTexture, vStrokeUV + vec2(0.0, 0.5)));
    return 1.0;
}
#endif

#if (MODE == 1)
float calculateLineOffset()
{
    return calculateLineOffsetSketch();
}
float calculateLinePressure()
{
    return calculateLinePressureSketch();
}
#endif

// Solid
#if (MODE == 2 || MODE == 0)
float calculateLineOffsetSolid()
{
    return 0.0;
}
float calculateLinePressureSolid()
{
    return 1.0;
}
#endif

#if (MODE == 0)
float calculateLineOffset()
{
    return calculateLineOffsetSolid();
}
float calculateLinePressure()
{
    return calculateLinePressureSolid();
}
#endif

// Uber
#if (MODE == 2)
varying float vType;
float calculateLineOffset()
{
    if (vType <= 0.0)
    {
        return calculateLineOffsetSketch();
    }
    else
    {
        return calculateLineOffsetSolid();
    }
}

float calculateLinePressure()
{
    if (vType <= 0.0)
    {
        return calculateLinePressureSketch();
    }
    else
    {
        return calculateLinePressureSolid();
    }
}
#endif

vec2 lineWithCapsDistance(float radius, vec2 position, float lineLength)
{
    float lineOffset = calculateLineOffset();
    float positionX = position.x - lineOffset;
    if (radius < 1.0)
    {
        float coverageX = clamp(min(radius, positionX + 0.5) - max(-radius, positionX - 0.5), 0.0, 1.0);
        float coverageY = clamp(min(lineLength, position.y + 0.5) - max(0.0, position.y - 0.5), 0.0, 1.0);
        float coverage = min(coverageX, coverageY);
        return vec2(0.5 - coverage, 0.0);
    }
    else
    {
        // Between -radius -> 0 for start cap, 0 for line, 0 -> radius
        float positionOnCap = position.y - clamp(position.y, 0.0, lineLength);
        vec2 lineToPosition = vec2(positionX, positionOnCap);
        return vec2(length(lineToPosition) - radius, positionOnCap / radius);
    }
}

#ifdef CLIP
    uniform float uClipMode;
    uniform vec4 uClipPlanes[6];
    float getClipDistance(vec3 pos, vec3 planeNormal, float disToOrigin)
    {
        return dot(planeNormal, pos) + disToOrigin;
    }

    float clipBehindAllPlane(float fBorderWidth, vec4 vertex)
    {
        float distance = 0.0;
        float result = -1.0;
    #ifdef CLIPPLANE
        distance = getClipDistance(vertex.xyz, uClipPlanes[0].xyz, uClipPlanes[0].w);
        if (distance < 0.0)
        {
            return 1.0;
        }
        else if (distance < fBorderWidth)
        {
            result = 0.0;
        }
    #else
        for(int i = 0; i < 6; i++)
        {
            distance = getClipDistance(vertex.xyz, uClipPlanes[i].xyz, uClipPlanes[i].w);
            if(distance < 0.0)
            {
                return 1.0;
            }
            else if(distance < fBorderWidth)
            {
                result = 0.0;
            }
        }
    #endif
        return result;
    }

    float clipBehindAnyPlane(float fBorderWidth, vec4 vertex)
    {
        float result = 1.0;
        for(int i = 0; i < 6; i++)
        {
            float distance = getClipDistance(vertex.xyz, uClipPlanes[i].xyz, uClipPlanes[i].w);
            if((distance + fBorderWidth) < 0.0)
            {
                return -1.0;
            }
            else if(distance < 0.0)
            {
                result = 0.0;
            }
        }
        return result;
    }
    float clipAnythingButLine(float fBorderWidth, vec4 vertex)
    {
        float result = -1.0;
        for(int i = 0; i < 6; i++)
        {
            float distance = getClipDistance(vertex.xyz, uClipPlanes[i].xyz, uClipPlanes[i].w);
            if(distance < 0.0)
            {
                return -1.0;
            }
            else if(distance < fBorderWidth)
            {
                result = 0.0;
            }
        }
        return result;
    }
    vec4 clip(vec4 vertex)
    {
        if(uClipMode < 0.5)
        {
            return vec4(1.0);
        }
    #ifdef GL_OES_standard_derivatives
        float dxc = abs(dFdx(vertex.x));
        float dyc = abs(dFdy(vertex.y));
        float fBorderWidth = max(dxc, dyc);
    #else
        float fBorderWidth = 1.0;
    #endif
        float clipResult = 1.0;
        if(uClipMode < 1.5)
        {
            clipResult = clipBehindAnyPlane(fBorderWidth, vertex);
        }
        else if(uClipMode < 2.5)
        {
            clipResult = clipBehindAllPlane(fBorderWidth, vertex);
        }
        else if(uClipMode < 3.5)
        {
            clipResult = clipAnythingButLine(fBorderWidth, vertex);
        }
        if(clipResult < -0.5)
        {
            discard;
        }
        else if(clipResult < 0.5)
        {
            return vec4(1.0);
        }
        return vec4(1.0);
    }
#endif

#ifdef APPLY_SWIPE
    uniform vec4 uSwipeRegion;
    void rollerShutter(vec2 coord, vec4 region)
    {
        vec2 f = step(region.xw, coord);
        vec2 s = step(coord, region.zy);
        if (f.x * f.y * s.x * s.y < 1.0)
        {
            discard;
        }
    }
#endif

float readNonPerspective(float value, float oneOverW) {
    return value * oneOverW;
}

vec2 readNonPerspective(vec2 value, float oneOverW) {
    return value * oneOverW;
}

vec3 readNonPerspective(vec3 value, float oneOverW) {
    return value * oneOverW;
}

vec4 readNonPerspective(vec4 value, float oneOverW) {
    return value * oneOverW;
}

void main()
{
    vec3 realPosition = readNonPerspective(vPosition, gl_FragCoord.w);
    float radius = vRadius * calculateLinePressure();
    vec2 distance = lineWithCapsDistance(radius, realPosition.xy, vLineLengthPixels);
    float coverage = clamp(0.5 - distance.x, 0.0, 1.0);
#ifdef ANTIALIASING
    const float coverageLimit = COVERAGE_TEST_THRESHOLD;
#else
    /* ANTIALIASING */
    // Use subpixel coverage computation when lines get subpixel widths
    // so we still render them appropriately. Otherwise discard anything
    // that is not fully within the line
    float coverageLimit = radius <= 0.5 ? COVERAGE_TEST_THRESHOLD : 0.75;
#endif /* ANTIALIASING */
    if (coverage < coverageLimit)
    {
        discard;
    }
    float alpha = vColor.a * coverage;
    gl_FragColor = vec4(vColor.rgb, alpha);
#ifdef APPLY_SWIPE
     rollerShutter(gl_FragCoord.xy, uSwipeRegion);
#endif

#ifdef CLIP
     gl_FragColor *= clip(vec4(vViewPosition, 1.0), 1.0);
#endif

     float attenuation = 1.0 - smoothstep(nearRange, farRange, vDistanceFromEye);
     gl_FragColor.a *= attenuation;
     czm_writeLogDepth();
}`,"getUint16","anisotropy","AAA","normalRangeConstant","pointSize","TileMatrixSet","Plane","MetadataQuerier","SILHOUETTE","startsWith","_emscripten_enum_draco_StatusCode_IO_ERROR","primitives","WEBP","pickPosition","_quantizedVertices","textureBakeRenderableFlag","_polyline","_sentinel","_modelViewProjectionDirty","warn","_emscripten_bind_DracoInt32Array___destroy___0","../utils/common","push","_emscripten_bind_AttributeOctahedronTransform_AttributeOctahedronTransform_0","NO_TEXCOORD","requireRegisteredType","fields",`
    #define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		uv.x += filterInt * 3.0 * cubeUV_minTileSize;

		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );

		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

	}

	// These defines must match with PMREMGenerator

	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= cubeUV_r1 ) {

			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;

		} else if ( roughness >= cubeUV_r4 ) {

			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;

		} else if ( roughness >= cubeUV_r5 ) {

			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;

		} else if ( roughness >= cubeUV_r6 ) {

			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}
`,"emscripten_enum_draco_StatusCode_DRACO_ERROR","set","compressedTextureSizeInBytes","isAncestorBlock","_emissionTextureUrl","_pointColor","_sightlineCameras","_imageReady","emscripten_enum_draco_DataType_DT_BOOL","RGB","west","_emscripten_bind_DracoUInt32Array_size_0","./zlib/zstream","ROUNDING_MODE","0123456789","geoPackage","blob:","localName","_minCategory","_baseColorTextureIndex","SPOT_LIGHTS ","_isStopVisible","setObjsColor","_drawCommands","TileProviderError","emscripten_bind_DracoFloat32Array_size_0","requestSubTextures","renderable","reflectMatrix","decimalPlaces","rangeData","_calloutWidth","POINTS","USpeed","dictionary","BigNumber","request","freeResources","altitudeMode value","TexCoord2","substring","_urls","ExitStatus","_distance","PolygonGeometryLibrary","metallicFactor","negateNormal","intersection","_sampleTerrainMostDetailed","LODRangeScale","HAS_SPOT_LIGHTS","loadTileset","interpolateHeightExt","_roll","deferred","GetAttributeUInt16ForAllPoints","emscripten_bind_PointAttribute_size_0","urlScheme","rootName","enabled","Buf8","emscripten_bind_Decoder_GetAttributeUInt8ForAllPoints_3","_index","view","inflate","VertexColor","southeast","emscripten_bind_Status_error_msg_0","_emscripten_enum_draco_StatusCode_UNKNOWN_VERSION","parseFromString","_setObjsOperationType","TEX_COORD","HAS_CLEARCOAT","Selectable","fill","_sampleTerrainMostDetailedFunc","QuadtreePrimitive","PointPrimitiveCollection","onModuleLoaded","VSpeed",".UTF-8","cTFBC3_RGBA","AlphaMode","ALPHA_BLEND","showrouteline","decode_texCoord4_min"," due to unbound types","&_cache=true","roll","emissiveTexture","detected subdomain url scheme, but no subdomain provided.","Inflate","bits","emscripten_bind_VoidPtr___destroy___0","_objsHideList","Base","_linesInterval","0123456789abcdefghijklmnopqrstuvwxyz","indices","_hiddenColor","240","routes","Buffer","languages","downcast","minimumHeight","emissiveTextureIndex","update","num_points","EllipsoidalOccluder","wDescript","_clearcoat","both async and sync fetching of the wasm failed","_id","frustum","tileProvider","hookEndFrame","dynCall_viii","postRun","numberOfIndices","Layers","toNumber","_isTiltFree","emscripten_bind_Decoder_Decoder_0","error_msg","textureCoordinates","contains","requestTileGeometry must not be called before ready returns true.",'" to ',"_emscripten_enum_draco_StatusCode_INVALID_PARAMETER","6yldBFd","dynCall_viiii","createShaderProgram","executeServerExcavationDecl","HAS_NORMAL","pixelStorei","S3MBlockContentParser","exaggeration","onData","decode","return function ","stop","_viewProjectionDirty","FlyInterpolationMode","drillPick","invalid bit length repeat","_emscripten_bind_MetadataQuerier_NumEntries_1","createTerrainMesh","textureParameter","S3MTilesLayer","_update","minVisibleDistance","./zlib/inflate","data/path/","Cannot register multiple constructors with identical number of parameters (","round","_updateAllObjsVisible","Math","BottomAltitude","clear","children","isDeleted","RegionAltitudeVectex","decodeTexCoord0vNormConstant","_ellipsoid","SpecularA","_ZSt18uncaught_exceptionv","Cartesian4","drawEvt","createEdgeDataByIndices","referencePointColor","WGS84","FresnelVp","byteStride","&tileversion=","wasmBinary","preInit","aSecondColor","#define textureCubeGradEXT textureGrad",".texblock","alphaMode","thisWired","dmax","_emscripten_bind_AttributeQuantizationTransform_InitFromAttribute_1","getDerivedResource","s3m:FileType","hierarchy","divideByScalar","RasterRegionFS","textureBakeInitilized",`runDestructors(destructors);
`,"_renderQueue","_emscripten_enum_draco_DataType_DT_UINT32","filteringoption","headingPitchRollToFixedFrame","bottomAltitude value","skirtScale","_fillColor","_hiddenAreaColor","_emscripten_bind_DracoInt32Array_DracoInt32Array_0","selectEnabled","performance","cTFETC2_RGBA","emscripten_bind_Decoder_GetAttributeId_2","_edgeCurrentCount","maximum","failed to asynchronously prepare wasm: ","internalFormat","visibleScales","Pass","state","onEnd","classParam","Cannot register multiple overloads of a function with the same number of arguments (","ProjectionImage.visible","createMesh","500 16px sans-serif","etc","meetVisible","METADATA","IO_ERROR","registerType registeredInstance requires argPackAdvance","ALPHA_PREMULTIPLIED","dataViewByteOffset","unknown compression method","heightBuffer","bMipMap","equalsEpsilon","Z_NO_FLUSH","farToNearRatio","edgeCount","_emscripten_bind_Decoder_GetFaceFromMesh_3","refcount","unloadTile","%23","getBaseUri","_loadedEmissionTexture","meshopt_decodeFilterOct","HasEntry","_totalDuration","_isCleared","_volume","GetAttributeByUniqueId","depth","Excepted S3MTilesLayer.subdomains to be type of Array.","_inverseView3DDirty","_emscripten_bind_MetadataQuerier_HasEntry_2","updateTextVisible","NOT_EQUAL","createOneEdgeCommand","_tileDiscardPolicy","_tilingScheme","_editZ","TexCoord","hookCloneFunc","_scaleDenominators","CLIP_BEHIND_ANY_PLANE","colorUniqueID","_owner","packingRequest","_emscripten_bind_Decoder_GetAttributeMetadata_2","requestContent","autoplay",`(handle, name, destructors, args) {
`,"StopPlayMode","inflateInit2","setObjsVisible","textureParameterBake","className","waterColour","done","emscripten_bind_Status_code_0","invViewMatrix","add all layers failed,","contentResource","AnalysisRegionMode","_width","get s3m layer config failed,xml document undefined.","VisibleAltitudeMax","subdomains"," not an integer: ","#ffe500","normalUniqueID","addToChangeQueue","avail_out","LINEAR_MIPMAP_NEAREST","_supportCompressType","_isGenerated","ATTRIBUTE_OCTAHEDRON_TRANSFORM","TerrainProvider","Rectangle","origin","scene are required.","_removeModifyRegionSideCommands","BLOCK","failed to load wasm binary file at '","Argument","BillboardCollection","weight","NTSC","options.url is error","7ljJisn","getHeight","ceil","_totalMemoryUsageInBytes","query","objectToQuery","/layers/","NoLightNoTextureFS","_hypsometric","RequestState","EPSILON6","_maximumLevel","AssociativeArray","loadingTexture","getElementById","dirname","emscripten_enum_draco_GeometryAttribute_Type_TEX_COORD","_visibleViewport","ViewShedAnalysisVS","instantiate","wnext","dynCall_ii","spotLightDecl","updateGeometry","_dblclickListener","now","selectedColor","lerp","setStopVisible","DiffuseA","aTextureBatchId",`() {
    "use strict";    return body.apply(this, arguments);
};
`,"descriptorBlockSize","8411256Dudepu","maximumLevel","PolygonPipeline","Metadata","_lineCommand","Flatten","Options","div","_normalTextureScale","pbrMaterialsArr","_emscripten_bind_Decoder_GetAttributeInt32ForAllPoints_3","GetAttributeIntForAllPoints","data error","decodeTexCoord0Min","addLimitbody","deleteTexture","Scene","lessThanOrEquals","_contentResource","Tex","SkyAtmosphere","inflateReset","isLineVisible",`    return retType.toWireType(destructors, rv);
`,"tiles","clipMode","S3MLayerCache","emscripten_bind_PointCloud_PointCloud_0","matrix","text/xml","setLodRangeScale","SLOG2","_excavationBounds","cullingVolume","_emscripten_bind_VoidPtr___destroy___0","indexBufferToCreate","EXCAVATION","data_type","cellWidth","_emscripten_bind_Mesh___destroy___0","Meter","createRasterRegionDrawCommand","getKey","_emscripten_bind_DracoUInt8Array_GetValue_1","realspace","isAlongline","updatedVisibilityFrame","Top","_scan","cTFASTC_4x4_RGBA","decodeHeight","setVisibiltyChangedToLayer","ProjectionImage.gamma","value","pixel","{fileExtension}","dynCall_v","options is required.","plane","HAS_LIGHT","queryStringAttribute","Running...","createViewportQuadCommand","emscripten_bind_DracoFloat32Array___destroy___0","options","getSingleInstance","_selections","emscripten_bind_AttributeQuantizationTransform_InitFromAttribute_1","S3MLayerScheduler","QuantizedMeshTerrainDataExt","chordLength","_stopMarkCollection","GetStringEntry","emscripten_bind_MetadataQuerier_GetDoubleEntry_2","_nextUint64","validate","decode_texCoord3_min","SV_Compressed","SLOG","stream end","ancestorMap","skeletonNames","ShadowType","GGG","getNumberOfYTilesAtLevel","instanceCount","position","_customRequestHeaders","transform","Cannot pass non-string to std::string","quantization_bits","GeographicProjection","rayPlane","multiplyComponents","windowCoordRect","ZIP","indexOf","_measureEvt","LineInterval","result","ProgramDefines","MixColorType","enableReflection","_processTiles","endPoint","toDegrees","subRequestedBaker","layerId","FIXED_ANGLE","num_components","^(?:([^:/?#]+):)?(?://([^/?#]*))?([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$","bufferByteOffset","_emscripten_bind_PointAttribute_data_type_0","_minWValue","emscripten_bind_Mesh_num_points_0","getURL","_selectPageLods","TEXTURE_MAG_FILTER","allSettled","addAvailableTileRange","An layer with name ","IconPointCache","_layer","symbol","options.name","file error","isRootTile","_radius","vertexCountWithoutSkirts","GetAttribute","polyline","_selectedColor","clampToGroundPolylinePositions","TEXTURE_COORD_ONE_IS_W","initLayerSetting","ignoreDuplicateRegistrations","No scene provided.","_normalTextureIndex",`
        attribute vec4 position;
        varying float vHeight;
        void main() {
            vHeight = position.z;
            gl_Position = czm_modelViewProjection * vec4(position.xy, 0.0, 1.0);
        }
    `,"LayerName","minHeight","ktx2Buffer","emscripten_bind_Decoder_SkipAttributeTransform_1","fromFile","model","_cameraDepthBuffer","crunch","uv2","activate","viewer and mode is required!","abort(","toUpperCase","subBatchValues","clampToGroundPolygonPositions","_updateCopyCommand","AltitudeMode","KTX2 texture arrays are not supported.","get layer list failed,","tileImages","_updateFramebuffer","lodRangeScale","xmldom","name","zExtent","SightWideLineVS","S3MBlockCache","copyFrom","_lineDisplayType","RotateX","_selectionInforMap",`
#ifdef GL_OES_standard_derivatives
#extension GL_OES_standard_derivatives : enable
#endif
#ifdef GL_EXT_shader_texture_lod
#extension GL_EXT_shader_texture_lod : enable
#endif
    varying vec2 fSelected;
    uniform vec4 uDiffuseColor;
    uniform vec4 uAmbientColor;
#ifdef TexCoord
    varying vec4 vTexCoord;
#ifdef COMPUTE_TEXCOORD
    uniform sampler2D uTexture;
#ifdef TextureAtlas
    uniform vec4 uTexAtlasDim;
    varying vec4 vTexAtlasTran;
    varying vec4 vTexAtlasScale;
    varying vec4 vTexAtlasSize;
    varying vec2 vMaxMipLevel;
#else
    uniform float uTexture0Width;
    varying vec4 vTexCoordTransform;
    varying vec4 vTexMatrix;
#endif
#endif
#endif
#ifdef NO_TEXCOORD
    uniform sampler2D uTexture;
#endif
    varying vec4 vColor;
    varying vec4 vSecondColor;
    varying vec4 vPositionMC;
    varying vec3 vPositionEC;
#ifdef VertexNormal
    varying vec3 vNormalEC;
#endif
#ifdef TexCoord2
    uniform sampler2D uTexture2;
    uniform float uTexture1Width;
    varying vec4 vTexMatrix2;
#endif 
    void calculateMipLevel(in vec2 inTexCoord, in float vecTile, in float fMaxMip, inout float mipLevel)
    {
        vec2 dx = dFdx(inTexCoord * vecTile);
        vec2 dy = dFdy(inTexCoord * vecTile);
        float dotX = dot(dx, dx);
        float dotY = dot(dy, dy);
        float dMax = max(dotX, dotY);
        float dMin = min(dotX, dotY);
        float offset = (dMax - dMin) / (dMax + dMin);
        offset = clamp(offset, 0.0, 1.0);
        float d = dMax * (1.0 - offset) + dMin * offset;
        mipLevel = 0.5 * log2(d);
        mipLevel = clamp(mipLevel, 0.0, fMaxMip - 1.62);
    }

    void calculateMipLevel(in vec2 inTexCoord, in vec2 vecTile, in float fMaxMip, inout float mipLevel)
    {
        vec2 dx = dFdx(inTexCoord * vecTile.x);
        vec2 dy = dFdy(inTexCoord * vecTile.y);
        float dotX = dot(dx, dx);
        float dotY = dot(dy, dy);
        float dMax = max(dotX, dotY);
        float dMin = min(dotX, dotY);
        float offset = (dMax - dMin) / (dMax + dMin);
        offset = clamp(offset, 0.0, 1.0);
        float d = dMax * (1.0 - offset) + dMin * offset;
        mipLevel = 0.5 * log2(d);
        mipLevel = clamp(mipLevel, 0.0, fMaxMip - 1.62);
    }
    
    void calculateTexCoord(in vec3 inTexCoord, in float scale, in float XTran, in float YTran, in float fTile, in float mipLevel, inout vec2 outTexCoord)
    {
        if(inTexCoord.z < -9000.0)
        {
            outTexCoord = inTexCoord.xy;
        }
        else
        {
            vec2 fTexCoord = fract(inTexCoord.xy);
            float offset = 1.0 * pow(2.0, mipLevel) / fTile;
            fTexCoord = clamp(fTexCoord, offset, 1.0 - offset);
            outTexCoord.x = (fTexCoord.x + XTran) * scale;
            outTexCoord.y = (fTexCoord.y + YTran) * scale;
        }
    }
    
    vec4 getTexColorForS3M(sampler2D curTexture, vec3 oriTexCoord, float texTileWidth, float fMaxMipLev, float fTexCoordScale, vec2 vecTexCoordTranslate)
    {
        vec4 color = vec4(1.0);
        float mipLevel = 0.0;
     #if defined(GL_OES_standard_derivatives) || defined(WEBGL2)
        calculateMipLevel(oriTexCoord.xy, texTileWidth, fMaxMipLev, mipLevel);
    #endif
        vec2 realTexCoord;
        calculateTexCoord(oriTexCoord, fTexCoordScale, vecTexCoordTranslate.x, vecTexCoordTranslate.y, texTileWidth, mipLevel, realTexCoord);
        if(oriTexCoord.z < -9000.0)
        {
            color = texture2D(curTexture, realTexCoord.xy);
        }
        else
        {
            #ifdef GL_EXT_shader_texture_lod
                color = texture2DLodEXT(curTexture, realTexCoord.xy, mipLevel);
            #else
                #ifdef WEBGL2
                    color = textureLod(curTexture, realTexCoord.xy, mipLevel);
                #else
                    color = texture2D(curTexture, realTexCoord.xy, mipLevel);
                #endif
                
            #endif
        }
        return color;
    }
#ifdef COMPUTE_TEXCOORD
#ifdef TextureAtlas
    vec4 getTextureAtlasColor(sampler2D texture, vec2 uv, vec2 texDim, vec2 texTran, vec2 texScale, float maxMipLevel)
    {
        if(maxMipLevel < 0.0)
        {
            return vec4(1.0);
        }
        vec4 colorCeil = vec4(1.0);
        float mipLevel = 0.0;
     #if defined(GL_OES_standard_derivatives) || defined(WEBGL2)
        calculateMipLevel(uv, texDim, maxMipLevel, mipLevel);
    #endif
        float ceilMipLevel = ceil(mipLevel);
        vec2 translate = vec2(texTran.x, texTran.y);
        float temp;
        if(ceilMipLevel > 0.0)
        {
            translate.x = texTran.x + texScale.x;
            temp = pow(2.0, ceilMipLevel - 1.0);
            translate.y = texTran.y + texScale.y * (temp - 1.0) / temp;
        }
        float scale = 1.0 / pow(2.0, ceilMipLevel);
        vec2 texcoord = fract(uv);
        float offsetX = pow(2.0, ceilMipLevel) / texDim.x;
        float offsetY = pow(2.0, ceilMipLevel) / texDim.y;
        texcoord.x = clamp(texcoord.x, 0.0 + offsetX, 1.0 - offsetX);
        texcoord.y = clamp(texcoord.y, 0.0 + offsetY, 1.0 - offsetY);
        texcoord.x = texcoord.x * texScale.x * scale + translate.x;
        texcoord.y = texcoord.y * texScale.y * scale + translate.y;
    #ifdef GL_EXT_shader_texture_lod
        colorCeil = texture2DLodEXT(texture, texcoord.xy, 0.0);
    #else
        #ifdef WEBGL2
            colorCeil = textureLod(texture, texcoord.xy, 0.0);
        #else
            colorCeil = texture2D(texture, texcoord.xy, 0.0);
        #endif
    #endif
        vec4 colorFloor = vec4(1.0);
        float floorMipLevel = floor(mipLevel);
        translate = vec2(texTran.x, texTran.y);
        if(floorMipLevel > 0.0)
        {
            translate.x = texTran.x + texScale.x;
            temp = pow(2.0, floorMipLevel - 1.0);
            translate.y = texTran.y + texScale.y * (temp - 1.0) / temp;
        }
        scale = 1.0 / pow(2.0, floorMipLevel);
        texcoord = fract(uv);
        offsetX = pow(2.0, floorMipLevel) / texDim.x;
        offsetY = pow(2.0, floorMipLevel) / texDim.y;
        texcoord.x = clamp(texcoord.x, 0.0 + offsetX, 1.0 - offsetX);
        texcoord.y = clamp(texcoord.y, 0.0 + offsetY, 1.0 - offsetY);
        texcoord.x = texcoord.x * texScale.x * scale + translate.x;
        texcoord.y = texcoord.y * texScale.y * scale + translate.y;
    #ifdef GL_EXT_shader_texture_lod
        colorFloor = texture2DLodEXT(texture, texcoord.xy, 0.0);
    #else
        #ifdef WEBGL2
            colorFloor = textureLod(texture, texcoord.xy, 0.0);
        #else
            colorFloor = texture2D(texture, texcoord.xy, 0.0);
        #endif
        
    #endif
        vec4 color = colorCeil * 0.5 + colorFloor * 0.5;
        return color;
    }
#else
    vec4 getTextureColor()
    {
        if(vTexMatrix.z < 0.0)
        {
            return vec4(1.0);
        }
        float texTileWidth0 = vTexMatrix.z * uTexture0Width;
        vec3 realTexCoord = vec3(vTexCoord.xy, vTexCoordTransform.x);
        vec4 FColor = getTexColorForS3M(uTexture, realTexCoord, texTileWidth0, vTexMatrix.w, vTexMatrix.z, vTexMatrix.xy);
    #ifdef TexCoord2
        float texTileWidth1 = vTexMatrix2.z * uTexture1Width;
        realTexCoord = vec3(vTexCoord.zw, vTexCoordTransform.y);
        vec4 SColor = getTexColorForS3M(uTexture2, realTexCoord, texTileWidth1, vTexMatrix2.w, vTexMatrix2.z, vTexMatrix2.xy);
        SColor.r = clamp(SColor.r, 0.0, 1.0);
        SColor.g = clamp(SColor.g, 0.0, 1.0);
        SColor.b = clamp(SColor.b, 0.0, 1.0);
        return FColor * SColor;
        // return FColor;
    #else
        return FColor;
    #endif
    }
#endif
#endif
    
    const float M_PI = 3.141592653589793;
    vec3 SRGBtoLINEAR3(vec3 srgbIn) 
    {
        return pow(srgbIn, vec3(2.2));
    }
    
    vec4 SRGBtoLINEAR4(vec4 srgbIn)
    {
        srgbIn = srgbIn ;
        vec3 linearOut = pow(srgbIn.rgb, vec3(2.2));
        return vec4(linearOut, srgbIn.a);
    }
    vec3 LINEARtoSRGB(vec3 linearIn)
    {
    #ifndef HDR 
        return pow(linearIn, vec3(1.0/2.2));
    #else
        return linearIn;
    #endif
    }
    
    vec3 fresnelSchlick2(vec3 f0, vec3 f90, float VdotH) 
    {
        return f0 + (f90 - f0) * pow(clamp(1.0 - VdotH, 0.0, 1.0), 5.0);
    }
    
    float smithVisibilityG1(float NdotV, float roughness) 
    {
        float k = (roughness + 1.0) * (roughness + 1.0) / 8.0;
        return NdotV / (NdotV * (1.0 - k) + k);
    }
    
    float smithVisibilityGGX(float roughness, float NdotL, float NdotV) 
    {
        return smithVisibilityG1(NdotL, roughness) * smithVisibilityG1(NdotV, roughness);
    }
    
    float GGX(float roughness, float NdotH) 
    {
        float roughnessSquared = roughness * roughness;
        float f = (NdotH * roughnessSquared - NdotH) * NdotH + 1.0;
        return roughnessSquared / (M_PI * f * f);
    }
    
#ifdef CLIP
    uniform float uClipMode;
    uniform vec4 uClipPlanes[6];
    float clipBehindAllPlane(float fBorderWidth, vec4 vertex)
    {
        float distance = 0.0;
        float result = -1.0;
    #ifdef CLIPPLANE
        distance = czm_planeDistance(uClipPlanes[0].xyz, uClipPlanes[0].w, vertex.xyz);
        if (distance < 0.0)
        {
            return 1.0;
        }
        else if (distance < fBorderWidth)
        {
            result = 0.0;
        }
    #else
        for(int i = 0; i < 6; i++)
        {
            distance = czm_planeDistance(uClipPlanes[i].xyz, uClipPlanes[i].w, vertex.xyz);
            if(distance < 0.0)
            {
                return 1.0;
            }
            else if(distance < fBorderWidth)
            {
                result = 0.0;
            }
        }
    #endif
        return result;
    }

    float clipBehindAnyPlane(float fBorderWidth, vec4 vertex)
    {
        float result = 1.0;
        for(int i = 0; i < 6; i++)
        {
            float distance = czm_planeDistance(uClipPlanes[i].xyz, uClipPlanes[i].w, vertex.xyz);
            if((distance + fBorderWidth) < 0.0)
            {
                return -1.0;
            }
            else if(distance < 0.0)
            {
                result = 0.0;
            }
        }
        return result;
    }
    float clipAnythingButLine(float fBorderWidth, vec4 vertex)
    {
        float result = -1.0;
        for(int i = 0; i < 6; i++)
        {
            float distance = czm_planeDistance(uClipPlanes[i].xyz, uClipPlanes[i].w, vertex.xyz);
            if(distance < 0.0)
            {
                return -1.0;
            }
            else if(distance < fBorderWidth)
            {
                result = 0.0;
            }
        }
        return result;
    }
    vec4 clip(vec4 vertex)
    {
        if(uClipMode < 0.5)
        {
            return vec4(1.0);
        }
     #if defined(GL_OES_standard_derivatives) || defined(WEBGL2)
        float dxc = abs(dFdx(vertex.x));
        float dyc = abs(dFdy(vertex.y));
        float fBorderWidth = max(dxc, dyc);
    #else
        float fBorderWidth = 1.0;
    #endif
        float clipResult = 1.0;
        if(uClipMode < 1.5)
        {
            clipResult = clipBehindAnyPlane(fBorderWidth, vertex);
        }
        else if(uClipMode < 2.5)
        {
            clipResult = clipBehindAllPlane(fBorderWidth, vertex);
        }
        else if(uClipMode < 3.5)
        {
            clipResult = clipAnythingButLine(fBorderWidth, vertex);
        }
        if(clipResult < -0.5)
        {
            discard;
        }
        else if(clipResult < 0.5)
        {
            return vec4(1.0);
        }
        return vec4(1.0);
    }
#endif

#ifdef HYPSOMETRIC
    uniform sampler2D uHypsometricTexture;
    uniform vec4 uMinMaxValue;
    uniform vec4 uOpacityIntervalFillMode;
    uniform vec4 uHypLineColor;
    uniform vec4 uNoValueColor;
    varying float wValue;
    
    float computeMixCon(float fValue)
    {
        float distanceToContour;
        float minVisibleValue = uMinMaxValue.z;
        float maxVisibleValue = uMinMaxValue.w;
        float interval = uOpacityIntervalFillMode.y;
        if(abs(maxVisibleValue - minVisibleValue) > 0.1)
        {
            if(fValue < 0.5)
            {
                distanceToContour = mod(fValue - 0.0002, interval);
            }
            else
            {
                float t = floor(fValue / interval);
                distanceToContour = abs(fValue - (t * interval) - 0.1);
            }
        }
        else
        {
            distanceToContour = abs(fValue - maxVisibleValue);
        }
        float dxc = abs(dFdx(fValue));
        float dyc = abs(dFdy(fValue));
        float dF = max(dxc, dyc);
        return distanceToContour < dF ? 1.0 : 0.0;
    }
    
    vec4 computeContourMapColor(float fValue)
    {
        float floorValue = uMinMaxValue.x;
        float ceilValue = uMinMaxValue.y;
        float threshold = abs(ceilValue - floorValue);
        float contourRate = (fValue - floorValue) / threshold;
        float finalCoord = clamp(contourRate, 0.0, 1.0);
        float count = floor(finalCoord * 16.0);
        float y = (count*2.0 + 1.0)/32.0;
        float x = fract(finalCoord*16.0);
        if(y > 1.0)
        {
            x = 1.0;
        }
        vec2 contourCoord = vec2(x, y);
        return texture2D(uHypsometricTexture, contourCoord);
    }
    
    vec4 getContourMapColor(vec4 oriColor, float fValue)
    {
        vec4 contourMapColor = vec4(0.0);
        float finalOpacity = uOpacityIntervalFillMode.x;
        float minVisibleValue = uMinMaxValue.z;
        float maxVisibleValue = uMinMaxValue.w;
        float fillMode = uOpacityIntervalFillMode.z;
    
        if(fValue > maxVisibleValue + 4.0 || fValue < minVisibleValue - 4.0)
        {
            return uNoValueColor * oriColor;
        }
        
        if(fillMode > 2.9)
        {
            float mix_con = computeMixCon(fValue);
            contourMapColor = mix(computeContourMapColor(fValue), uHypLineColor, mix_con);
        }
        else if(fillMode > 1.9)
        {
            finalOpacity = computeMixCon(fValue);
            contourMapColor = uHypLineColor;
        }
        else if(fillMode > 0.9)
        {
            contourMapColor = computeContourMapColor(fValue);
        }
        else
        {
            finalOpacity = 0.0;
        }
        
        vec4 finalColor = mix(oriColor, contourMapColor, finalOpacity);
    #ifdef PT_CLOUD
        finalColor = mix(vec4(1.0,1.0,1.0,1.0), contourMapColor, finalOpacity);
    #endif
        return finalColor;
    }
#endif
  
#ifdef APPLY_SWIPE
    uniform vec4 uSwipeRegion;
    void rollerShutter(vec2 coord, vec4 region)
    {
        vec2 f = step(region.xw, coord);
        vec2 s = step(coord, region.zy);
        if (f.x * f.y * s.x * s.y < 1.0)
        {
            discard;
        }
    }
#endif
    vec3 computeNormal(in vec3 oriVertex)
    {
        vec3 normal = cross(vec3(dFdx(oriVertex.x), dFdx(oriVertex.y), dFdx(oriVertex.z)), vec3(dFdy(oriVertex.x), dFdy(oriVertex.y), dFdy(oriVertex.z)));
        normal = normalize(normal);
        return normal;
    }
    
    vec3 directionLight(vec3 normalEC) 
    {
        const vec3 SunLightColor = vec3(0.8);
        const vec3 AmbientLightColor = vec3(0.7);
        vec3 totalDiffuseLight = vec3(0.0);
        vec3 totalSpecularLight = vec3(0.0);
        float sunLightDiffuseWeight = max( dot( normalEC, czm_lightDirectionEC ), 0.0 );
        totalDiffuseLight = SunLightColor * sunLightDiffuseWeight;
        return uDiffuseColor.rgb * (totalDiffuseLight + AmbientLightColor * uAmbientColor.rgb) + totalSpecularLight;
    }
    #ifdef ADJUST_COLOR
        uniform float uBrightness;
        uniform float uContrast;
        uniform float uHue;
        uniform float uSaturation;
        uniform float uOneOverGamma;
        vec3 adjustColor(vec3 inputColor)
        {
            vec3 outputColor = inputColor;
            outputColor.rgb = mix(vec3(0.0), outputColor.rgb, uBrightness);
            outputColor.rgb = mix(vec3(0.5), outputColor.rgb, uContrast);
            outputColor.rgb = czm_hue(outputColor.rgb, uHue);
            outputColor.rgb = clamp(outputColor.rgb, 0.0, 1.0);
            outputColor.rgb = czm_saturation(outputColor.rgb, uSaturation);
            outputColor.rgb = pow(outputColor.rgb, vec3(uOneOverGamma));
            return outputColor;
        }
    #endif

    #include <brdf>
    #include <executeExcavation>

    void main()
    {
        if(vColor.a < 0.1)
        {
            discard;
        } 
    #ifdef APPLY_SWIPE
        rollerShutter(gl_FragCoord.xy, uSwipeRegion);
    #endif
        vec4 baseColorWithAlpha = vColor;
    #ifdef COMPUTE_TEXCOORD
    #ifdef TextureAtlas
        baseColorWithAlpha *= getTextureAtlasColor(uTexture, vTexCoord.xy, vTexAtlasSize.xy, vTexAtlasTran.xy, vTexAtlasScale.xy, vMaxMipLevel.x);
    #else
        baseColorWithAlpha *= getTextureColor();
    #endif
    #endif
    #ifdef NO_TEXCOORD
        #ifndef REPLACE_COLOR_TYPE
            baseColorWithAlpha *= texture2D(uTexture, vec2(0.5));
        #endif
    #endif
        if(baseColorWithAlpha.a < 0.1)
        {
            discard;
        }
    #if defined(REPLACE_SELECT_TYPE) || defined(REPLACE_COLOR_TYPE)
        if(fSelected.x > 0.9 || fSelected.y > 0.9)
        {
            baseColorWithAlpha = vColor;
        }
    #endif
        vec4 outColor = baseColorWithAlpha;
    #ifndef USE_LINECOLOR    
        vec3 ng = vec3(0.0);
    #ifdef VertexNormal
        ng = normalize(vNormalEC);
    #endif
        ng = length(ng) > 0.1 ? ng : computeNormal(vPositionMC.xyz);
    #ifdef HAS_NORMAL_TEXTURE
        vec3 pos_dx = dFdx(vPositionEC);
        vec3 pos_dy = dFdy(vPositionEC);
        vec3 tex_dx = dFdx(vec3(vTexCoord.xy, 0.0));
        vec3 tex_dy = dFdy(vec3(vTexCoord.xy, 0.0));
        vec3 t = (tex_dy.t * pos_dx - tex_dx.t * pos_dy) / (tex_dx.s * tex_dy.t - tex_dy.s * tex_dx.t);
        t = normalize(t - ng * dot(ng, t));
        vec3 b = normalize(cross(ng, t));
        mat3 tbn = mat3(t, b, ng);
        vec3 n = texture2D(uNormalTexture, vTexCoord.xy).rgb;
        n = normalize(tbn * (2.0 * n - 1.0));
    #else
        vec3 n = ng;
    #endif
    #ifdef EXCAVATION
        if(executeExcavation())
        {
            discard;
        }
    #endif
    vec3 baseColor = baseColorWithAlpha.rgb;
    outColor.rgb = baseColor * directionLight(n);
    #else
    outColor = baseColorWithAlpha * uDiffuseColor;
    #endif
    #ifdef HYPSOMETRIC
        outColor = getContourMapColor(outColor, wValue);
    #endif
    #ifdef BRDF
    vec2 texCoord = vec2(0.0);
    #ifdef TexCoord
        texCoord = vTexCoord.xy;
    #endif
    vec3 normal_EC = vec3(0.0);
    #ifdef VertexNormal
        normal_EC = vNormalEC;
    #endif
    outColor = brdf(outColor, texCoord, texCoord, vPositionEC, vPositionMC.xyz, normal_EC, uAmbientColor);
    #endif
    #ifdef ADJUST_COLOR
        outColor.rgb = adjustColor(outColor.rgb);
    #endif
    #ifdef CLIP
        outColor *= clip(vec4(vPositionEC, 1.0));
    #endif
        gl_FragColor = outColor;
    }
`,"times","clearModifyRegions","prototype","toFraction","_emscripten_bind_DracoInt8Array_size_0","HAS_POINT_LIGHTS","_excavationMode","FILL_FACEANDLINE","TEXTURE","textureCoordIsW","referencePoint","lendyn","enableExcavation","loadXML","_emscripten_bind_Decoder_GetEncodedGeometryType_1","_tempLayerName","item",".s3m",'Cannot pass "',"pickFeatures","DrawMode","ATTRIBUTE_INVALID_TRANSFORM","_hdr","CommonNoTextureFp","textureHeight","Cannot register type '","colorModel","_levelZeroMaximumGeometricError","appendChild","SubTextureUploadJob","_changedEvt","S3MCreateVertexJob","attributes","toExponential","charCodeAt","getNumberOfXTilesAtLevel","_emscripten_bind_AttributeOctahedronTransform_quantization_bits_0","CLIP_OUTSIDE",`precision highp float;
const float uPixelRatio = 1.0;
// Inputs
attribute vec3 aPosition0;
attribute vec3 aPosition1;
//attribute float aVariantOffset;
//attribute float aVariantStroke;
//attribute float aVariantExtension;

#ifdef SILHOUETTE
attribute vec3 aNormalA;
attribute vec3 aNormalB;
#else /* SILHOUETTE */
attribute vec3 aNormal;
#endif /* SILHOUETTE */

attribute vec2 aSideness;
//attribute vec2 aPackedAttributes;

struct UnpackedAttributes
{
    vec2 sideness;
    vec2 sidenessNorm;
    float lineWidthPixels;
    float extensionLengthPixels;
#if (MODE == 2)
    float type;
#endif
};

// Output required to compute color
varying vec4 vColor;
// Output required to compute distance to line/caps
varying vec3 vPosition; 
varying vec3 vViewPosition;
varying float vRadius;
varying float vLineLengthPixels;
varying float vSizeFalloffFactor;
varying float vDistanceFromEye;

uniform float uLineWidth;
uniform vec4 uLineColor;
const vec2 uDepthBias = vec2(0.5, -4e-4);

// Utility function to check for NaN values
bool isNaN(float val)
{
    return ( val < 0.0 || 0.0 < val || val == 0.0 ) ? false : true;
    // important: some nVidias failed to cope with version below.
    // Probably wrong optimization.
    /*return ( val <= 0.0 || 0.0 <= val ) ? false : true;*/
}

vec2 calculateProjectedBiasXY(vec4 projPos, vec3 worldNormal)
{
    float offsetXY = uDepthBias.x;
    float offsetZ  = uDepthBias.y;
    vec4 projNormal = czm_projection * czm_view * vec4(worldNormal, 0.0);
    return offsetXY * projPos.w * 2.0 / czm_viewport.zw * normalize(projNormal.xyz).xy;
}

// A z-offset, using a depth based heuristic.
float calculateProjectedBiasZ(vec4 projPos)
{
    float fProjZ = projPos.z / projPos.w;
    if(fProjZ < 0.1)
    {
        return 0.0;
    }
    float offsetZ = uDepthBias.y;
    return sqrt(projPos.z) * offsetZ;
}

vec4 adjustProjectedPosition(vec4 projPos, vec3 worldNormal, float lineWidth)
{
    vec2 offsetXY = calculateProjectedBiasXY(projPos, worldNormal);
    // we currently have to do this check because some geometries come with 0 length edge normals.
    if (!isNaN(offsetXY.x) && !isNaN(offsetXY.y))
    {
        projPos.xy += offsetXY;
    }
#ifdef LOG_DEPTH
    vDistanceFromEye = projPos.w;
#else
    projPos.z += calculateProjectedBiasZ(projPos);
#endif
    return projPos;
}

#if (MODE == 2 || MODE == 1)
uniform vec2 uStrokesTextureScale;
uniform float uStrokesLog2Resolution;
uniform float uStrokeVariants;
varying vec2 vStrokeUV;
varying float vLineIndex;
void calculateStyleOutputsSketch(float lineLength, UnpackedAttributes unpackedAttributes)
{
    vec2 sidenessNorm = unpackedAttributes.sidenessNorm;
    float lineIndex = clamp(ceil(log2(lineLength)), 0.0, uStrokesLog2Resolution);
    vStrokeUV = vec2(exp2(lineIndex) * sidenessNorm.y, lineIndex * uStrokeVariants + aVariantStroke + 0.5) * uStrokesTextureScale;
    vStrokeUV.x += aVariantOffset;
    vLineIndex = lineIndex;
}
#endif

#if (MODE == 0)
void calculateStyleOutputs(vec4 viewPosV0, vec4 viewPosV1, vec4 worldPosV0, vec4 worldPosV1, vec4 projPos, vec3 worldNormal, UnpackedAttributes unpackedAttributes)
{}
#elif (MODE == 1)
void calculateStyleOutputs(vec4 viewPosV0, vec4 viewPosV1, vec4 worldPosV0, vec4 worldPosV1, vec4 projPos, vec3 worldNormal, UnpackedAttributes unpackedAttributes)
{
    calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}
#elif (MODE == 2)
varying float vType;
void calculateStyleOutputs(vec4 viewPosV0, vec4 viewPosV1, vec4 worldPosV0, vec4 worldPosV1, vec4 projPos, vec3 worldNormal, UnpackedAttributes unpackedAttributes)
{
    vType = unpackedAttributes.type;
    if (unpackedAttributes.type <= 0.0)
    {
        calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
    }
}
#endif


// Solid
#if (MODE == 2 || MODE == 0)
float calculateLineAmplitudeSolid()
{
    return 0.0;
}
#endif
#if (MODE == 0)
float calculateLineAmplitude(UnpackedAttributes unpackedAttributes)
{
    return calculateLineAmplitudeSolid();
}
#endif
// Sketch
#if (MODE == 2 || MODE == 1)
    uniform float uStrokesAmplitude;
float calculateLineAmplitudeSketch()
{
    return uStrokesAmplitude;
}
#endif
#if (MODE == 1)
float calculateLineAmplitude(UnpackedAttributes unpackedAttributes)
{
    return calculateLineAmplitudeSketch();
}
#endif
// Uber
#if (MODE == 2)
float calculateLineAmplitude(UnpackedAttributes unpackedAttributes)
{
    float type = unpackedAttributes.type;
    if (type <= 0.0)
    {
        return calculateLineAmplitudeSketch();
    }
    else
    {
        return calculateLineAmplitudeSolid();
    }
}
#endif


uniform float uDistanceFalloffFactor;
float distanceBasedPerspectiveFactor(float distance)
{
    return clamp(sqrt(uDistanceFalloffFactor / distance), 0.0, 1.0);
}

#define COMPONENT_COLOR_FIELD_OFFSET 0.0
#define COMPONENT_OTHER_FIELDS_OFFSET 1.0
#define COMPONENT_FIELD_COUNT 2.0
#define LINE_WIDTH_FRACTION_FACTOR 8.0
#define EXTENSION_LENGTH_OFFSET 128.0
#define COMPONENT_TEX_WIDTH 4096.0

struct ComponentData
{
    float lineWidth;
    float extensionLength;
    float type;
};


ComponentData readComponentData()
{
    return ComponentData(uLineWidth, 0.0, 0.0);
}

vec3 modelToWorldNormal(vec3 normal)
{
    return (czm_model * vec4(normal, 0.0)).xyz;
}

vec3 silhouetteWorldNormal(vec3 normalA, vec3 normalB)
{
    return modelToWorldNormal(normalize(normalA + normalB));
}

// Fall-off extension length for shorter strokes, starting from strokes that are 256 size,
// fall-off exponentially
float calculateExtensionLength(float extensionLength, float lineLength)
{
    return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}

#ifdef SILHOUETTE
// #uniforms: czm_view, czm_model
bool isSilhouetteEdge(vec4 viewPos, vec3 normalA, vec3 normalB)
{
// transform the two face normals
    vec3 viewNormalA = (czm_view * czm_model * vec4(normalA, 0.0)).xyz;
    vec3 viewNormalB = (czm_view * czm_model * vec4(normalB, 0.0)).xyz;
// compute the direction from the edge to the camera
    vec3 viewDir = -viewPos.xyz;
// check which of the two faces are visible
// display the edge if exactly one of the two is visible
    float faceAVisible = dot(viewDir, viewNormalA);
// positive if visible
    float faceBVisible = dot(viewDir, viewNormalB);
// positive if visible
// 1 if exactly one face visible, 0 otherwise
    return faceAVisible * faceBVisible < 0.0;
}
#endif /* SILHOUETTE */

void clipLineSegmentToNearPlane(vec3 p0,vec3 p1,out bool clipped,out bool culledByNearPlane,out vec4 clippedPositionEC)
{
    culledByNearPlane = false;
    clipped = false;
    vec3 p0ToP1 = p1 - p0;
    float magnitude = length(p0ToP1);
    vec3 direction = normalize(p0ToP1);
    float endPoint0Distance =  czm_currentFrustum.x + p0.z;
    float denominator = -direction.z;
    if (endPoint0Distance > 0.0 && abs(denominator) < czm_epsilon7)
    {
        culledByNearPlane = true;
    }
    else if (endPoint0Distance > 0.0)
    {
        float t = endPoint0Distance / denominator;
        if (t < 0.0 || t > magnitude)
        {
            culledByNearPlane = true;
        }
        else
        {
            p0 = p0 + t * direction;
            p0.z = min(p0.z, -czm_currentFrustum.x);
            clipped = true;
        }
    }
    clippedPositionEC = vec4(p0, 1.0);
}

float writeNonPerspective(float value, float w) {
    return value * w;
}

vec2 writeNonPerspective(vec2 value, float w) {
    return value * w;
}

vec3 writeNonPerspective(vec3 value, float w) {
    return value * w;
}

vec4 writeNonPerspective(vec4 value, float w) {
    return value * w;
}

vec4 calculateGeometricOutputs(vec4 viewPosV0, vec4 viewPosV1, vec4 worldPosV0, vec4 worldPosV1, vec3 worldNormal, UnpackedAttributes unpackedAttributes)
{
    vec2 sideness = unpackedAttributes.sideness;
    vec2 sidenessNorm = unpackedAttributes.sidenessNorm;
    vec4 clippedViewPosV0;    bool clippedV0,culledV0;    clipLineSegmentToNearPlane(viewPosV0.xyz, viewPosV1.xyz, clippedV0, culledV0, clippedViewPosV0);    vec4 clippedViewPosV1;    bool clippedV1, culledV1;    clipLineSegmentToNearPlane(viewPosV1.xyz, viewPosV0.xyz, clippedV1, culledV1, clippedViewPosV1);    vec4 viewPos = mix(clippedViewPosV0, clippedViewPosV1, sidenessNorm.y);
    vViewPosition = viewPos.xyz / viewPos.w;
    vec4 projPosV0 = czm_projection * clippedViewPosV0;
    vec4 projPosV1 = czm_projection * clippedViewPosV1;
    vec4 projPos = czm_projection * viewPos;
    vec3 screenSpaceLineNDC = (projPosV1.xyz / projPosV1.w - projPosV0.xyz / projPosV0.w);
    vec2 uNDCToPixel = vec2(czm_viewport.z / 2.0, czm_viewport.w / 2.0);
    vec2 screenSpaceLinePixels = screenSpaceLineNDC.xy * uNDCToPixel;
    float lineLengthPixels = length(screenSpaceLinePixels);
    float dzPerPixel = screenSpaceLineNDC.z / lineLengthPixels;
    vec2 screenSpaceDirection = screenSpaceLinePixels / lineLengthPixels;
    vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x) * sideness.x;
    float falloffFactor = distanceBasedPerspectiveFactor(-viewPos.z) * uPixelRatio;
    float lineWidthPixels = unpackedAttributes.lineWidthPixels * falloffFactor;
    float extensionLengthPixels = calculateExtensionLength(unpackedAttributes.extensionLengthPixels, lineLengthPixels) * falloffFactor;
    float lineAmplitudePixels = calculateLineAmplitude(unpackedAttributes) * uPixelRatio;
    vSizeFalloffFactor = falloffFactor;
    float lineWidthAndAmplitudePixels = lineWidthPixels + lineAmplitudePixels + lineAmplitudePixels;
    float extendedLineLengthPixels = lineLengthPixels + extensionLengthPixels + extensionLengthPixels;
#ifdef ANTIALIASING
    const float aaPaddingPixels = 1.0;
    // Line size with padding
    float halfAAPaddedLineWidthAndAmplitudePixels = lineWidthAndAmplitudePixels * 0.5 + aaPaddingPixels;
    float aaPaddedRoundedCapSizePixels = lineWidthPixels * 0.5 + aaPaddingPixels;
    // Line length with padding
    float aaPaddedLineLengthPixels = extendedLineLengthPixels + aaPaddingPixels + aaPaddingPixels;
    float halfAAPaddedLineLengthPixels = aaPaddedLineLengthPixels * 0.5;
#else /* ANTIALIASING */
    // Even if there is no AA, we still want to do proper <1px rendering,
    // so we effectively clamp the pixel sizes to minimum of 1px and compute
    // coverage in the fragment shader   
    float halfAAPaddedLineWidthAndAmplitudePixels = max(lineWidthAndAmplitudePixels, 1.0) * 0.5;
    float aaPaddedRoundedCapSizePixels = max(lineWidthPixels, 1.0) * 0.5;
    float halfAAPaddedLineLengthPixels = max(extendedLineLengthPixels, 1.0) * 0.5;
#endif /* ANTIALIASING */
    // Half line width in NDC including padding for anti aliasing
    vec2 uPixelToNDC = vec2(2.0 / czm_viewport.z, 2.0 / czm_viewport.w);
    vec2 halfAAPaddedLineWidthAndAmplitudeNDC = halfAAPaddedLineWidthAndAmplitudePixels * uPixelToNDC;
    vec2 aaPaddedRoundedCapSizeNDC = aaPaddedRoundedCapSizePixels * uPixelToNDC;
    vec2 extensionLengthNDC = extensionLengthPixels * uPixelToNDC;
    // Compute screen space position of vertex, offsetting for line size and end caps
    vec2 ndcOffset = (screenSpaceDirection * sideness.y * (aaPaddedRoundedCapSizeNDC + extensionLengthNDC) + perpendicularScreenSpaceDirection * halfAAPaddedLineWidthAndAmplitudeNDC);
    projPos.xy += ndcOffset * projPos.w;
    projPos.z += (dzPerPixel * (aaPaddedRoundedCapSizePixels + extensionLengthPixels)) * sideness.y * projPos.w;
    projPos = adjustProjectedPosition(projPos, worldNormal, 1.0 + max((lineWidthAndAmplitudePixels - 1.0) * 0.5, 0.0));
    // Line length with end caps
    float aaPaddedLineWithCapsLengthPixels = extendedLineLengthPixels + aaPaddedRoundedCapSizePixels + aaPaddedRoundedCapSizePixels;
    float pixelPositionAlongLine = aaPaddedLineWithCapsLengthPixels * sidenessNorm.y - aaPaddedRoundedCapSizePixels;
    // Position in pixels with origin at first vertex of line segment
    // The line width radius in pixels
    vRadius = lineWidthPixels * 0.5;
    vLineLengthPixels = extendedLineLengthPixels;
    vPosition = writeNonPerspective(vec3(halfAAPaddedLineWidthAndAmplitudePixels * sideness.x, pixelPositionAlongLine, pixelPositionAlongLine / extendedLineLengthPixels), projPos.w);
#ifdef SILHOUETTE
    gl_Position = isSilhouetteEdge(viewPosV0, aNormalA, aNormalB) ? projPos : vec4(10.0, 10.0, 10.0, 1.0);
#else /* SILHOUETTE */
    gl_Position = projPos;
#endif /* SILHOUETTE */

#if (MODE == 2)
    if (unpackedAttributes.type <= 0.0 && lineLengthPixels <= 3.0)
    {
        gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
    }
#elif (MODE == 1)
    if (lineLengthPixels <= 3.0)
    {
        gl_Position = vec4(10.0, 10.0, 10.0, 1.0); 
    }
#endif
    return projPos;
}


#if (MODE == 2)
UnpackedAttributes unpackAttributes(ComponentData component)
{
    vec2 sidenessNorm = aSideness;
    vec2 sideness = sidenessNorm * 2.0 - 1.0;
    float fType = component.type;
    float extensionLengthPixels = component.extensionLength;
    float lineWidth = component.lineWidth;
    if (fType <= 0.0)
    {
        extensionLengthPixels *= aVariantExtension * 2.0 - 1.0;
    }
    return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels, fType);
}
#else /* (MODE == 2) */
UnpackedAttributes unpackAttributes(ComponentData component)
{
    vec2 sidenessNorm = aSideness;
    vec2 sideness = sidenessNorm * 2.0 - 1.0;
    float extensionLengthPixels = component.extensionLength;
#if (MODE == 1)
    extensionLengthPixels *= aVariantExtension * 2.0 - 1.0;
#endif
    float lineWidth = component.lineWidth;
    return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels);
}
#endif /* (MODE == 2) */

varying float fSelected;
void main()
{
    fSelected = 0.0;
    ComponentData component = readComponentData();
    UnpackedAttributes unpackedAttributes = unpackAttributes(component);
    vec4 worldPosV0 = czm_model * vec4(aPosition0, 1.0);
    vec4 worldPosV1 = czm_model * vec4(aPosition1, 1.0);
    vec4 viewPosV0 = czm_modelView * vec4(aPosition0, 1.0);
    vec4 viewPosV1 = czm_modelView * vec4(aPosition1, 1.0);
#ifdef SILHOUETTE
    vec3 worldNormal = silhouetteWorldNormal(aNormalA, aNormalB);
#else /* SILHOUETTE */
    vec3 worldNormal = modelToWorldNormal(aNormal);
#endif /* SILHOUETTE */
    // General geometric computation for all types of edges
    vec4 projPos = calculateGeometricOutputs(viewPosV0, viewPosV1, worldPosV0, worldPosV1, worldNormal, unpackedAttributes);
    vColor = uLineColor;
}`,"batchTableBake","HEAPU16","deleteLater","quadKeyIndex","isHeadingFree","commandList","emscripten_bind_AttributeOctahedronTransform_quantization_bits_0","precision mediump sampler2DArray;","_getEmissionTexAtlasTilingAndOffset","the distance is greater than 0.0","wbits","updateGeoBounds","fragmentShaderSource","availabilityLevels","_updateCamera","FLOAT","_isSci3D","_objsVisibleList","pixelFormat","GeometryPipeline","planeNormal","RenderState","SVC_Normal","ALPHA_STRAIGHT","center","null is not a valid ","_rectangles","minVerticesValue","batchTableDirty","inverseProjection","shrinkBuf","HAS_SKELETONSELECTED","default","node","UNIT_Z","GpuProgramParameters","_tileToUpdateHeights","fillStyleChange","createBakeTexture","pointeeType","labels","PLANECLIPMODE","s3m:VertexCompressionType","mod","colorCommand","nodeValue","emscripten_enum_draco_GeometryAttribute_Type_GENERIC","hookAddImageryProviderFunc","byte_offset","transcode","_lodRangeScale","TileAvailability","sceneMode","image","_array","get s3m layer config failed,extendxml.xml foamat error,layer name is ","getPoint","_subdomains","createBuffers","argCount","toLowerCase","UnLoad","_promise","curTextureName","AttributeType_SecondTexcoord","cancelled","startX","__ZSt18uncaught_exceptionv","HeightmapTerrainData","occlusionTextureIndex","_allObjsHide","Argument ","_emscripten_bind_PointAttribute___destroy___0","UniformState","CategoryRange","havedict","fData","getVertexShaderCallback","[object Array]","priority","_emscripten_bind_MetadataQuerier_GetIntEntryArray_3","points","insufficient memory","speed","SV_Standard","hasMetadata","S3M","index","_cacheKey","Assets/Textures/excavationregion_side.jpg","removeObjsColor ids","ColorType","cancelTween","REFRACTION",`
            #if defined(Apply_Excavation)
            uniform sampler2D uClipRasterTexture;
            #endif
        `,"_positionWC","compressType","GlobeSurfaceTile","calledRun","parseBuffer","open scene url error!","point","_waterPlanes","REPLACE_SELECT_TYPE","layerName","getRandomValues","catch","log","rtc",`};
`,"Volume","_name","_visibleChangedQueue","cannot construct a VoidPtr, no constructor in IDL","yExtent","geoMatrix","direction","queryFirstNode","Unsupporting sharing policy","aPosition1","baseClass","isInHeightRange","uv1","startHeight","attrLocation","AttributeOctahedronTransform","_overlapWeightAttributeName","CREDENTIAL","edgeGeometry","specular","WrapperObject","emscripten_bind_MetadataQuerier_HasEntry_2","framebuffer","BLUE","ORANGE","_eastIndices","COMPRESS_TEXCOORD","OPAQUE","hookFreeResources","paramType","_renderTextureMatrix","fromPoints","emscripten_bind_Status_ok_0","activeEvt","useWValue","_emscripten_bind_Status___destroy___0","statusCode","measureEvt","_baseUri","FixedZ","meshopt_decodeFilterQuat","Request","getHasAlpha",".readValueFromPointer(args","updateCamera","lineWidth","_emscripten_bind_DracoUInt32Array___destroy___0","Credit","NUM_PBR_MATERIALS ","halfAxes","swipe","isLeafTile","anyfunc","indicesTypedArray","RotateZ","_enableDepthTest","aColor","tile","inflateReset2","tms","_defaultView","_tilesToRenderByTextureCount","SelectColorType","s3tc","copyDepthCommand","lastIndexOf","pbrMaterialIndex","ROUND_FLOOR","useConfigFile","jobScheduler","only_keep_line","_subTexInfosBake","BGR","promise","map","text","DT_INT8","FixedXYZ","instantiateStreaming","_emscripten_bind_Decoder_DecodeBufferToPointCloud_2","_points","fov","ReflectFramebuffer","min_value","preVertexCount","script","_positions","EPSILON3","southwestChild","FLOOD_ANALYSIS","ROUGHNESS","multiplyByPlane","postProcessStages","testLog","22168344PGVZiB","GeographicTilingScheme","isCreateModifyTerrain","requestVertexNormals","getUint8","sideGeometry","fromXML","normal","getPointee","routeName","sources","meshopt_decodeIndexSequence","SuperMapTerrainProvider","back","Bounce","AUTO_Z_AXIAL","groupSize","OSGBGroup","unshift","arguments","getFramebuffer","CullFace","getTileDataAvailable","keys","HAS_ANISOTROPY","QuantizedMeshTerrainData","_currentTargetName","RenderEntity","queryBooleanValue","DT_INT32","getInt32","availability","createVertexBuffer","getShaderProgram","handleError","currentScript","shaderProgramToCreate","_visibleDistanceMin","RADIANS_PER_DEGREE","stopNodes","first","fromPointNormal","_usedModifyDrawCommands","snowNormalTexture","getQuery","responseText","BIM","KEEP","minimumLevel","_accumulationPositions","isSmartPointer","_isHeadingFree","setCustomClipPlane","HAS_EMISSIVE_TEXTURE","RegionTextureVertex","Playing","_emscripten_bind_Decoder_GetAttributeFloatForAllPoints_3","_emscripten_bind_Decoder_GetTrianglesUInt32Array_3","Mode_Height","removeListenerFunc","incorrect length check","HEAPF32","boolean","__emval_register","createSelectionMap","far","slice","_excavateRegions","releaseSelection","GetAttributeFloat","createSilhouetteEdgeAttributes","batchTable","S3MTilesNoLightFS","stack","emscripten_bind_MetadataQuerier_MetadataQuerier_0","_dtor","pixelWidth","send","FileExtentName","_arrtextOverlapInfo","UseInstanceSkeletonMatrix","loadImageFromTypedArray","encoding","foveatedFactor","_numberOfLevelZeroTilesX","_updateAll","Fill3DMode","tileDiscardPolicy",`
#ifdef SERVEREXCAVATION
uniform sampler2D uServerExcavationTexture;
uniform float uServerExcavationMode;
uniform vec4 uServerExcavationRect;
varying vec4 vServerExcavationVertexPos;
vec2 CalculateServerExcavationPolyTexCoord(vec4 vertexPos, vec4 rectPos, out float ptInRect)
{
    vec2 vecRatio = vec2(rectPos.z - rectPos.x, rectPos.w - rectPos.y);
    vec2 texCoord = vec2(vertexPos.x - rectPos.x, vertexPos.y - rectPos.y);
    texCoord.x = texCoord.x / vecRatio.x;
    texCoord.y = texCoord.y / vecRatio.y;
    ptInRect = step(0.0, texCoord.x) * step(0.0, texCoord.y) * step(0.0, 1.0 - texCoord.x) * step(0.0, 1.0 - texCoord.y);
    texCoord = clamp(texCoord, vec2(0.0), vec2(1.0));
    return texCoord;
}
bool executeServerExcavation()
{
    float hasExcavation = 1.0;
    vec2 vecExcavationTexCoord = CalculateServerExcavationPolyTexCoord(vServerExcavationVertexPos, uServerExcavationRect, hasExcavation);
    bool excavationInside = (uServerExcavationMode < 0.5);
    if(hasExcavation < 0.1)
    {
        return !excavationInside;
    }
    if(excavationInside)
    {
        return texture2D(uServerExcavationTexture, vecExcavationTexCoord.xy).r > 0.5;
    }
    else
    {
        return texture2D(uServerExcavationTexture, vecExcavationTexCoord.xy).r < 0.5;
    }
}
#endif`,"_addPoints","_barrierPointArray","sml:Bottom","texImage2D","emscripten_bind_DracoUInt16Array_GetValue_1","{scale}","search","createTypedArray","hookRequestImageryFunc","chain","dataName","RGBA_ASTC","_viewProjMatrixs","subName","UseFloatTexture","getExtensionFromUri","_repeat","COLUMBUS_VIEW","_emscripten_bind_DecoderBuffer_DecoderBuffer_0","uSecTexture","getAttributeNodeNS","IDENTITY","CANCELLED","exec","isNormalTexture","_horizontalFov","InitFromAttribute","projection","reject","DracoFloat32Array","wrapT"," = argType","imageryLayer","addRoute","NumEntries","_excavationUpdate","_rootTiles","set layer lod range scale","HAS_RAIN","HEAP8","TerrainEncoding","); // ","_invertViewMatrix","baseUri","sseDenominator","addSkirtIndices","out of range: ","_dtor(","isInVisibleRange","BindingError","RegionRasterSp","_flyStatus","prjCoordSys","binstring2buf","decode_texCoord6_normConstant","S3MCreateShaderProgramJob","DracoUInt8Array","inflateGetHeader","readyPromise","_areaLabel","_emscripten_bind_AttributeQuantizationTransform_range_0","TRIANGLES","#51ff00","ImageryLayerCollection","printChar","_excavateRegionUpdate","Cannot construct ","_isTileMap","_faceCommand","showroutestop","_activeEvt","match","_isSct","HEAP32","_westSkirtHeight","Assertion failed: ","getItem","_emscripten_bind_DecoderBuffer___destroy___0","Z_SYNC_FLUSH","_rasterTiles","ErrnoError","_colorCommand","_textures","PIPELINE","REPLACE_COLOR_TYPE","#define textureCubeLodEXT textureLod","textContent","GetAttributeUInt32ForAllPoints","emscripten_bind_Decoder_GetAttributeIdByMetadataEntry_3","SVC_Vertex","_emissionTexCoordSpeed","random","LEFT_UP",`
attribute vec3 aPosition;
#ifndef ICON
attribute vec3 aNormal;
#endif
attribute vec4 aTexCoord0;
attribute vec4 aTexCoord1;
#ifdef VertexColor
    attribute vec4 aColor;
#endif

#ifdef BatchTable
attribute float batchId;
#endif

varying vec4 vColor;
varying vec4 vSecondColor;
varying vec4 vTexCoord;
varying vec4 clip_vertex;
uniform vec4 uSelColor;
uniform vec4 uDiffuseColor;

float computerOnePixelLength()
{
	vec4 viewPos = czm_modelView  * vec4(aPosition, 1.0);
	vec4 winPos = czm_projection * viewPos;
	float dwidth = czm_metersPerPixel(viewPos);
	winPos.x = winPos.x - 2.0 * dwidth;
	vec4 newViewPos = czm_inverseProjection * winPos;
	return length(viewPos - newViewPos);
}

mat3 rotateZ(in float angle)
{
    float sina = sin(angle);
    float cosa = cos(angle);
    mat3 rotMatrix = mat3(cosa, sina, 0.0, -sina, cosa, 0.0, 0.0, 0.0, 1.0);
    return rotMatrix;
}
vec4 computePos(vec3 v3Normal)
{
    vec4 viewPos = czm_modelView * vec4(aPosition, 1.0);
    vec4 origViewPos = czm_view * vec4(0.0, 0.0, 0.0, 1.0);
    vec4 fixedAxis = viewPos - origViewPos;
    vec3 zAxis = normalize(fixedAxis.xyz);
    vec4 upView = vec4(0.0, 1.0, 0.0, 1.0);
    upView = czm_view * upView;
    vec3 upViewVector = normalize(upView.xyz - origViewPos.xyz);
    vec3 xAxis = normalize(cross(upViewVector, zAxis));
    vec3 yAxis = cross(zAxis, xAxis);
    yAxis = normalize(yAxis);
    mat3 matrix = mat3(xAxis,yAxis,zAxis);
    vec3 offset = matrix * rotateZ(-czm_piOverFour * 3.0 + aTexCoord0.z) * v3Normal;
	viewPos.xyz = viewPos.xyz + offset * computerOnePixelLength();
	clip_vertex = viewPos;
	vec4 pos = czm_projection * viewPos;
	return pos;
}
void operation(vec4 operationType, vec4 color, vec4 selectedColor, inout vec4 vertexColor)
{
    float right_2 = operationType.x * 0.5;
    float right_4 = right_2 * 0.5;
    float right_8 = right_4 * 0.5;
    float right_16 = right_8 * 0.5;
    float isSetColor = fract(right_2);
    if(isSetColor > 0.1)
    {
        vertexColor *= color;
    }
    float isPicked = fract(floor(right_2)* 0.5);
    if(isPicked > 0.1)
    {
        vertexColor *= selectedColor;
    }
    float isHide = fract(floor(right_4)* 0.5);
    if(isHide > 0.1)
    {
        vertexColor.a = 0.0;
    }
}

void main()
{
   vTexCoord.xy = aTexCoord0.xy;
    vec4 vertexColor = vec4(1.0);
#ifdef VertexColor
    vertexColor = aColor;
#endif
#ifdef BatchTable
    vSecondColor = s3m_batchTable_pickColor(batchId);
    vec4 operationType = s3m_batchTable_operation(batchId);
    vec4 objsColor = s3m_batchTable_color(batchId);
    operation(operationType, objsColor, uSelColor, vertexColor);
#endif
   vColor = vertexColor * uDiffuseColor;
#ifdef ICON
   gl_Position = computePos(aTexCoord1.xyz);
#else
   vTexCoord.zw = aTexCoord1.xy;
   gl_Position = computePos(aNormal);
#endif
}
`,"emscripten_bind_PointAttribute_byte_stride_0","was","_altitudeMode","size","emscripten_bind_AttributeOctahedronTransform_AttributeOctahedronTransform_0","_buildModuleUrlFromBaseUrl","_modifyRegionUpdate","__esModule","invalid stored block lengths","emscripten_bind_PointAttribute_normalized_0","processRequests","ColorTableMaxKey","scene list response null!","_isTerrainZ","LineColor","endFrame","MarkerSize","useLineColor","extra_len","removeWaterPlane","_dynamicCurrentStopIndex","_isS3MBlock","utf8","bounds","removeDotSegments","viewProjection","tileHeight","rawDestructor","name is required.","setPBRMaterialFromJSON","promisePack","_credit","clone","defines","wrapPointer","addExcavationRegion","CLIP","diffuse","prepareRequest","isInteger","color","isTexBlock","unpack","cartesianToCartographic",`");
var arg`,"constructor ","emscripten_bind_PointCloud___destroy___0"," has no accessible constructor","HAS_MetallicRoughness_TEXTURE","FillStyle","movingEvt","startPoint","Event","_emscripten_bind_Decoder_GetAttributeId_2","{s}","Polygon","unknown function pointer with signature ","isGreaterThan","false","UpperCorner","textures","DracoInt8Array","minTexCoordValue","invalid distance code","texCoordZMatrix","play","BufferUsage","emscripten_bind_DracoInt8Array_DracoInt8Array_0","_opacity","enqueue","fromArray","PostProcessStageRain","clipTriangleAtAxisAlignedThreshold","{tileversion}","convertTo3DCartesian","heightOffset","_video","./adler32","SIXTY_FOUR_KILOBYTES","preShow",`
#ifdef HAS_SNOW
uniform float uSnowCoverageFactor;
uniform sampler2D uSnowMaskTexture;
uniform sampler2D uSnowNormalTexture;

vec3 getSnowMaskValue(sampler2D uSnowMaskTexture, vec2 snowUV)
{
	return texture2D(uSnowMaskTexture, snowUV).rgb;
}

float getSnowCoverage(float snow_coverage, float max_snow_coverage, vec3 normalWS, float z_mask)
{
	float normal_z = normalWS.z;
	normal_z += 1.1 + z_mask;
	normal_z = clamp(normal_z * 0.5, 0.0, 1.0);
	float final_snow_coverage = clamp(snow_coverage, 0.0, max_snow_coverage);
	final_snow_coverage = clamp(final_snow_coverage*normal_z, 0.0, 1.0);
	return final_snow_coverage;
}

float getSnowCoverageWithMaskTexture(float finalSnowCoverage, float heightValue, float snow_scatter_value, float snow_scatter_alpha, float tighten_value)
{
	float scatter_value = mix(heightValue, snow_scatter_value, snow_scatter_alpha);
	return clamp((tighten_value + 1.0) * finalSnowCoverage - tighten_value * scatter_value, 0.0, 1.0);
}

float getSnowAlpha(vec3 normalWS, float snow_coverage, float z_mask)
{
	return clamp((normalWS.z + z_mask) * 5.0, 0.0, 1.0) * snow_coverage;
}

vec3 getFinalBaseColor(vec3 baseColor, vec3 snow_baseColor, float snowAlpha)
{
	return mix(baseColor, snow_baseColor, snowAlpha);
}

float getFinalRoughness(float roughness, float snow_roughness, float snowAlpha)
{
	return mix(roughness, snow_roughness, snowAlpha);
}

vec3 getFinalNormal(vec3 normalWS, vec3 snowNormal, float blendNormalValue, float snow_coverage)
{
	vec3 snowNormal_part2 = vec3(snowNormal.xy - vec2(0.5), 1.0);
	float normal_alpha = (1.0 - blendNormalValue)* snow_coverage;
	return mix(normalWS, snowNormal_part2, normal_alpha);
}

void snowGenerator(sampler2D uSnowMaskTexture, sampler2D uSnowNormalTexture, vec2 snowUV, float snow_coverage, inout vec3 normalWS, inout vec3 baseColor, inout float roughness)
{
	vec3 snowMaskValue = texture2D(uSnowMaskTexture, snowUV).rgb;
	const float max_snow_coverage = 1.0;
	const float z_mask = 0.0;
	float snowCoverage = getSnowCoverage(snow_coverage, max_snow_coverage, normalWS, z_mask);
	const float heightValue = 0.5;
	float snow_scatter_value = snowMaskValue.g;
	const float snow_scatter_alpha = 0.5;
	const float tighten_value = 4.0;
    snowCoverage = getSnowCoverageWithMaskTexture(snowCoverage, heightValue, snow_scatter_value, snow_scatter_alpha, tighten_value);
	float snow_alpha = getSnowAlpha(normalWS, snowCoverage, z_mask);
	baseColor = getFinalBaseColor(baseColor, vec3(snowMaskValue.r), snow_alpha);
	roughness = getFinalRoughness(roughness, snowMaskValue.b, snow_alpha);
	vec3 snowNormalValue = texture2D(uSnowNormalTexture, snowUV).rgb;
	const float blendNormalValue = 0.3;
	normalWS = getFinalNormal(normalWS, snowNormalValue, blendNormalValue, snowCoverage);
}

#endif
`,"inflateRaw","_requestImageError","Skyline","passState","_useConfigFile","passes","_materialManager","DepthFunction","Gamma","_hue","#define textureCube texture","src","credit","unique_id","tintColour","_emscripten_bind_Mesh_num_faces_0","textureInitilized","flags","_tileProvider","quantizationBits","GetFaceFromMesh","TweenCollection","REPEAT","_indices","rootBatchIdMap","meshopt_decodeVertexBuffer","Cesium3DTileset","unpackArray","toRadians","_schuduler","BatchTable","delete","referenceAddPoint","renderEntities","invalid literal/lengths set","uv4","S3MTextIconRenderEntity","matrixV","GetIntEntry","multiply","_Water","emscripten_enum_draco_StatusCode_UNSUPPORTED_VERSION","Route","same-origin","PointCloud","idiv","supercompressionScheme","ALWAYS","centerPixelOffset","length","removeTargetPoint","subdomainConfig","SEC_TEX_EMISSION","LEFT","_list","_visibleColor","prefix","Intersections2D","WEBGL_compressed_texture_astc","exports","_requestVertexNormals","RegularInstanceStride","preloadedAudios","invertClassification","S3MPixelFormat","range","_catmullRomSpline","___embind_register_native_and_builtin_types","hypsometricSetting","setView","red","_lineColor","aNormalA","initBakeTexture","_crn_get_bytes_per_block","reflectPlane","assign","removeAllTargetPoint","BlockCacheList","../","TileOrientedBoundingBox","_emscripten_bind_MetadataQuerier_MetadataQuerier_0","_surface","vSecondColor","utf8border","RANGE","subRequested","multiplyByVector","smartPtrType","MESHOPT","createGuid",`
#ifdef GL_EXT_frag_depth
#extension GL_EXT_frag_depth : enable
#endif
uniform vec4 uColor;
varying float fWindowZ;
void main()
{
#ifdef GL_EXT_frag_depth
	gl_FragDepthEXT = min(fWindowZ * gl_FragCoord.w, 1.0);
#endif
   gl_FragColor = uColor;
}`,"_saturation","lineColor","setStatus","cCRNFmtDXT5","?tilematrix=","PerspectiveFrustum","BillboardPixelSizeWithAngleVp","close","destroy","clearCommand","PagedLOD","totalDuration","sml:Left","InstanceBim","_windowCoordRect","SILHOUETTE_SELECT_TYPE","PolylineCollection","MinZ","_emscripten_bind_Metadata_Metadata_0","isGlobalVisible","Files","S3ModelOldParser","get","_crn_get_uncompressed_size","Z_OK","aVertexWeight","GetEncodedGeometryType","floor","_stopName","run","COMPUTE_TEXCOORD","BASISLZ","isHeightmap","BITS12","ArraySize","S3MBVertexTag","_updateModifyRegions","frameState","arg","invModelMatrix","_emscripten_enum_draco_GeometryAttribute_Type_NORMAL","_crn_decompress","_displayStyle","_occlusionTextureIndex","HAS_WETNESS","stackRestore","getPointer","tan","decodeTexCoord1vNormConstant","_emscripten_bind_DracoInt16Array_DracoInt16Array_0","Heading","CatmullRomSpline","cCRNFmtDXT1","_visibleAreaColor","stopObject","copy","secondary_colour","hookDrillPickFunc"," invalid: ","easingFunction","s3m:TextureCompressionType","readFileSync","UNKNOWN_VERSION","polygon","getUint32","newIndex","pause","requestWaterMask","box","snowDecl","gpuProgramParameters","buf2binstring","_view3DDirty","terrain","requestBakeSubTextures","pageLods","stackSave","normalTextureScale","nodeType","extra","DISTANCE_FROM_EYE_POINT","DRACO_ERROR","childTile","_hasHeightRangeAttributeName","isDestroyed","emscripten_bind_MetadataQuerier_GetIntEntryArray_3","Line","Factorial","_isBlock","DoublyLinkedList","_westIndices","next_in","getSelection","sizeInBytes","_multiChoose","keyValue","_packingRequest","cancelFlight","numArguments","setImage","EMISSION_TEXTURE","whave","write","previous","emscripten_bind_Decoder_GetAttributeIdByName_2","corridor","HAS_OCCLUSION_TEXTURE","stackAlloc","config","free","environmentVisible","isBitSet","11OsbZWp","vertexColorOffset","tablename","littleEndianExtensionSize","queryNodes","B9h79tEBBBE8fV9gBB9gVUUUUUEU9gIUUUB9gEUEU9gIUUUEUIKQBEEEDDDILLLVE9wEEEVIEBEOWEUEC+Q/IEKR/LEdO9tw9t9vv95DBh9f9f939h79t9f9j9h229f9jT9vv7BB8a9tw79o9v9wT9f9kw9j9v9kw9WwvTw949C919m9mwvBEy9tw79o9v9wT9f9kw9j9v9kw69u9kw949C919m9mwvBDe9tw79o9v9wT9f9kw9j9v9kw69u9kw949Twg91w9u9jwBIl9tw79o9v9wT9f9kw9j9v9kws9p2Twv9P9jTBLk9tw79o9v9wT9f9kw9j9v9kws9p2Twv9R919hTBVl9tw79o9v9wT9f9kw9j9v9kws9p2Twvt949wBOL79iv9rBRQ+x8yQDBK/qMEZU8jJJJJBCJ/EB9rGV8kJJJJBC9+HODNADCEFAL0MBCUHOAIrBBC+gE9HMBAVAIALFGRAD9rADZ1JJJBHWCJ/ABAD9uC/wfBgGOCJDAOCJD6eHdAICEFHLCBHQDNINAQAE9PMEAdAEAQ9rAQAdFAE6eHKDNDNADtMBAKCSFGOC9wgHXAOCL4CIFCD4HMAWCJDFHpCBHSALHZINDNARAZ9rAM9PMBCBHLXIKAZAMFHLDNAXtMBCBHhCBHIINDNARAL9rCk9PMBCBHLXVKAWCJ/CBFAIFHODNDNDNDNDNAZAICO4FrBBAhCOg4CIgpLBEDIBKAO9CB83IBAOCWF9CB83IBXIKAOALrBLALrBBGoCO4GaAaCIsGae86BBAOCEFALCLFAaFGarBBAoCL4CIgGcAcCIsGce86BBAOCDFAaAcFGarBBAoCD4CIgGcAcCIsGce86BBAOCIFAaAcFGarBBAoCIgGoAoCIsGoe86BBAOCLFAaAoFGarBBALrBEGoCO4GcAcCIsGce86BBAOCVFAaAcFGarBBAoCL4CIgGcAcCIsGce86BBAOCOFAaAcFGarBBAoCD4CIgGcAcCIsGce86BBAOCRFAaAcFGarBBAoCIgGoAoCIsGoe86BBAOCWFAaAoFGarBBALrBDGoCO4GcAcCIsGce86BBAOCdFAaAcFGarBBAoCL4CIgGcAcCIsGce86BBAOCQFAaAcFGarBBAoCD4CIgGcAcCIsGce86BBAOCKFAaAcFGarBBAoCIgGoAoCIsGoe86BBAOCXFAaAoFGorBBALrBIGLCO4GaAaCIsGae86BBAOCMFAoAaFGorBBALCL4CIgGaAaCIsGae86BBAOCpFAoAaFGorBBALCD4CIgGaAaCIsGae86BBAOCSFAoAaFGOrBBALCIgGLALCIsGLe86BBAOALFHLXDKAOALrBWALrBBGoCL4GaAaCSsGae86BBAOCEFALCWFAaFGarBBAoCSgGoAoCSsGoe86BBAOCDFAaAoFGorBBALrBEGaCL4GcAcCSsGce86BBAOCIFAoAcFGorBBAaCSgGaAaCSsGae86BBAOCLFAoAaFGorBBALrBDGaCL4GcAcCSsGce86BBAOCVFAoAcFGorBBAaCSgGaAaCSsGae86BBAOCOFAoAaFGorBBALrBIGaCL4GcAcCSsGce86BBAOCRFAoAcFGorBBAaCSgGaAaCSsGae86BBAOCWFAoAaFGorBBALrBLGaCL4GcAcCSsGce86BBAOCdFAoAcFGorBBAaCSgGaAaCSsGae86BBAOCQFAoAaFGorBBALrBVGaCL4GcAcCSsGce86BBAOCKFAoAcFGorBBAaCSgGaAaCSsGae86BBAOCXFAoAaFGorBBALrBOGaCL4GcAcCSsGce86BBAOCMFAoAcFGorBBAaCSgGaAaCSsGae86BBAOCpFAoAaFGorBBALrBRGLCL4GaAaCSsGae86BBAOCSFAoAaFGOrBBALCSgGLALCSsGLe86BBAOALFHLXEKAOAL8pBB83BBAOCWFALCWF8pBB83BBALCZFHLKAhCDFHhAICZFGIAX6MBKKDNALMBCBHLXIKDNAKtMBAWASFrBBHhCBHOApHIINAIAWCJ/CBFAOFrBBGZCE4CBAZCEg9r7AhFGh86BBAIADFHIAOCEFGOAK9HMBKKApCEFHpALHZASCEFGSAD9HMBKKABAQAD2FAWCJDFAKAD2Z1JJJB8aAWAWCJDFAKCUFAD2FADZ1JJJB8aKAKCBALeAQFHQALMBKC9+HOXEKCBC99ARAL9rADCAADCA0eseHOKAVCJ/EBF8kJJJJBAOK+OoEZU8jJJJJBC/AE9rGV8kJJJJBC9+HODNAECI9uGRChFAL0MBCUHOAIrBBGWC/wEgC/gE9HMBAWCSgGdCE0MBAVC/ABFCfECJEZ+JJJJB8aAVCuF9CU83IBAVC8wF9CU83IBAVCYF9CU83IBAVCAF9CU83IBAVCkF9CU83IBAVCZF9CU83IBAV9CU83IWAV9CU83IBAIALFC9wFHQAICEFGWARFHKDNAEtMBCMCSAdCEseHXABHICBHdCBHMCBHpCBHLCBHOINDNAKAQ9NMBC9+HOXIKDNDNAWrBBGRC/vE0MBAVC/ABFARCL4CU7AOFCSgCITFGSYDLHZASYDBHhDNARCSgGSAX9PMBAVARCU7ALFCSgCDTFYDBAdASeHRAStHSDNDNADCD9HMBABAh87EBABCLFAR87EBABCDFAZ87EBXEKAIAhbDBAICWFARbDBAICLFAZbDBKAdASFHdAVC/ABFAOCITFGoARbDBAoAZbDLAVALCDTFARbDBAVC/ABFAOCEFCSgGOCITFGZAhbDBAZARbDLALASFHLAOCEFHOXDKDNDNASCSsMBAMASFASC987FCEFHMXEKAK8sBBGSCfEgHRDNDNASCU9MMBAKCEFHKXEKAK8sBEGSCfBgCRTARCfBgvHRDNASCU9MMBAKCDFHKXEKAK8sBDGSCfBgCpTARvHRDNASCU9MMBAKCIFHKXEKAK8sBIGSCfBgCxTARvHRDNASCU9MMBAKCLFHKXEKAKrBLC3TARvHRAKCVFHKKARCE4CBARCEg9r7AMFHMKDNDNADCD9HMBABAh87EBABCLFAM87EBABCDFAZ87EBXEKAIAhbDBAICWFAMbDBAICLFAZbDBKAVC/ABFAOCITFGRAMbDBARAZbDLAVALCDTFAMbDBAVC/ABFAOCEFCSgGOCITFGRAhbDBARAMbDLALCEFHLAOCEFHOXEKDNARCPE0MBAVALAQARCSgFrBBGSCL4GZ9rCSgCDTFYDBAdCEFGhAZeHRAVALAS9rCSgCDTFYDBAhAZtGoFGhASCSgGZeHSAZtHZDNDNADCD9HMBABAd87EBABCLFAS87EBABCDFAR87EBXEKAIAdbDBAICWFASbDBAICLFARbDBKAVALCDTFAdbDBAVC/ABFAOCITFGaARbDBAaAdbDLAVALCEFGLCSgCDTFARbDBAVC/ABFAOCEFCSgCITFGaASbDBAaARbDLAVALAoFCSgGLCDTFASbDBAVC/ABFAOCDFCSgGOCITFGRAdbDBARASbDLAOCEFHOALAZFHLAhAZFHdXEKAdCBAKrBBGaeGZARC/+EsGcFHRAaCSgHhDNDNAaCL4GoMBARCEFHSXEKARHSAVALAo9rCSgCDTFYDBHRKDNDNAhMBASCEFHdXEKASHdAVALAa9rCSgCDTFYDBHSKDNDNActMBAKCEFHaXEKAK8sBEGaCfEgHZDNDNAaCU9MMBAKCDFHaXEKAK8sBDGaCfBgCRTAZCfBgvHZDNAaCU9MMBAKCIFHaXEKAK8sBIGaCfBgCpTAZvHZDNAaCU9MMBAKCLFHaXEKAK8sBLGaCfBgCxTAZvHZDNAaCU9MMBAKCVFHaXEKAKCOFHaAKrBVC3TAZvHZKAZCE4CBAZCEg9r7AMFGMHZKDNDNAoCSsMBAaHcXEKAa8sBBGKCfEgHRDNDNAKCU9MMBAaCEFHcXEKAa8sBEGKCfBgCRTARCfBgvHRDNAKCU9MMBAaCDFHcXEKAa8sBDGKCfBgCpTARvHRDNAKCU9MMBAaCIFHcXEKAa8sBIGKCfBgCxTARvHRDNAKCU9MMBAaCLFHcXEKAaCVFHcAarBLC3TARvHRKARCE4CBARCEg9r7AMFGMHRKDNDNAhCSsMBAcHKXEKAc8sBBGKCfEgHSDNDNAKCU9MMBAcCEFHKXEKAc8sBEGKCfBgCRTASCfBgvHSDNAKCU9MMBAcCDFHKXEKAc8sBDGKCfBgCpTASvHSDNAKCU9MMBAcCIFHKXEKAc8sBIGKCfBgCxTASvHSDNAKCU9MMBAcCLFHKXEKAcCVFHKAcrBLC3TASvHSKASCE4CBASCEg9r7AMFGMHSKDNDNADCD9HMBABAZ87EBABCLFAS87EBABCDFAR87EBXEKAIAZbDBAICWFASbDBAICLFARbDBKAVC/ABFAOCITFGaARbDBAaAZbDLAVALCDTFAZbDBAVC/ABFAOCEFCSgCITFGaASbDBAaARbDLAVALCEFGLCSgCDTFARbDBAVC/ABFAOCDFCSgCITFGRAZbDBARASbDLAVALAotAoCSsvFGLCSgCDTFASbDBALAhtAhCSsvFHLAOCIFHOKAWCEFHWABCOFHBAICXFHIAOCSgHOALCSgHLApCIFGpAE6MBKKCBC99AKAQseHOKAVC/AEF8kJJJJBAOK/tLEDU8jJJJJBCZ9rHVC9+HODNAECVFAL0MBCUHOAIrBBC/+EgC/QE9HMBAV9CB83IWAICEFHOAIALFC98FHIDNAEtMBDNADCDsMBINDNAOAI6MBC9+SKAO8sBBGDCfEgHLDNDNADCU9MMBAOCEFHOXEKAO8sBEGDCfBgCRTALCfBgvHLDNADCU9MMBAOCDFHOXEKAO8sBDGDCfBgCpTALvHLDNADCU9MMBAOCIFHOXEKAO8sBIGDCfBgCxTALvHLDNADCU9MMBAOCLFHOXEKAOrBLC3TALvHLAOCVFHOKAVCWFALCEgCDTvGDALCD4CBALCE4CEg9r7ADYDBFGLbDBABALbDBABCLFHBAECUFGEMBXDKKINDNAOAI6MBC9+SKAO8sBBGDCfEgHLDNDNADCU9MMBAOCEFHOXEKAO8sBEGDCfBgCRTALCfBgvHLDNADCU9MMBAOCDFHOXEKAO8sBDGDCfBgCpTALvHLDNADCU9MMBAOCIFHOXEKAO8sBIGDCfBgCxTALvHLDNADCU9MMBAOCLFHOXEKAOrBLC3TALvHLAOCVFHOKABALCD4CBALCE4CEg9r7AVCWFALCEgCDTvGLYDBFGD87EBALADbDBABCDFHBAECUFGEMBKKCBC99AOAIseHOKAOK+lVOEUE99DUD99EUD99DNDNADCL9HMBAEtMEINDNDNjBBBzjBBB+/ABCDFGD8sBB+yAB8sBBGI+yGL+L+TABCEFGV8sBBGO+yGR+L+TGWjBBBB9gGdeAWjBB/+9CAWAWnjBBBBAWAdeGQAQ+MGKAICU9KeALmGLALnAQAKAOCU9KeARmGQAQnmm+R+VGRnmGW+LjBBB9P9dtMBAW+oHIXEKCJJJJ94HIKADAI86BBDNDNjBBBzjBBB+/AQjBBBB9geAQARnmGW+LjBBB9P9dtMBAW+oHDXEKCJJJJ94HDKAVAD86BBDNDNjBBBzjBBB+/ALjBBBB9geALARnmGW+LjBBB9P9dtMBAW+oHDXEKCJJJJ94HDKABAD86BBABCLFHBAECUFGEMBXDKKAEtMBINDNDNjBBBzjBBB+/ABCLFGD8uEB+yAB8uEBGI+yGL+L+TABCDFGV8uEBGO+yGR+L+TGWjBBBB9gGdeAWjB/+fsAWAWnjBBBBAWAdeGQAQ+MGKAICU9KeALmGLALnAQAKAOCU9KeARmGQAQnmm+R+VGRnmGW+LjBBB9P9dtMBAW+oHIXEKCJJJJ94HIKADAI87EBDNDNjBBBzjBBB+/AQjBBBB9geAQARnmGW+LjBBB9P9dtMBAW+oHDXEKCJJJJ94HDKAVAD87EBDNDNjBBBzjBBB+/ALjBBBB9geALARnmGW+LjBBB9P9dtMBAW+oHDXEKCJJJJ94HDKABAD87EBABCWFHBAECUFGEMBKKK/SILIUI99IUE99DNAEtMBCBHIABHLINDNDNj/zL81zALCOF8uEBGVCIv+y+VGOAL8uEB+ynGRjB/+fsnjBBBzjBBB+/ARjBBBB9gemGW+LjBBB9P9dtMBAW+oHdXEKCJJJJ94HdKALCLF8uEBHQALCDF8uEBHKABAVCEFCIgAIvCETFAd87EBDNDNAOAK+ynGWjB/+fsnjBBBzjBBB+/AWjBBBB9gemGX+LjBBB9P9dtMBAX+oHKXEKCJJJJ94HKKABAVCDFCIgAIvCETFAK87EBDNDNAOAQ+ynGOjB/+fsnjBBBzjBBB+/AOjBBBB9gemGX+LjBBB9P9dtMBAX+oHQXEKCJJJJ94HQKABAVCUFCIgAIvCETFAQ87EBDNDNjBBJzARARn+TAWAWn+TAOAOn+TGRjBBBBARjBBBB9ge+RjB/+fsnjBBBzmGR+LjBBB9P9dtMBAR+oHQXEKCJJJJ94HQKABAVCIgAIvCETFAQ87EBALCWFHLAICLFHIAECUFGEMBKKK6BDNADCD4AE2GEtMBINABABYDBGDCWTCW91+yADCk91ClTCJJJ/8IF++nuDBABCLFHBAECUFGEMBKKK9TEIUCBCBYDJ1JJBGEABCIFC98gFGBbDJ1JJBDNDNABzBCZTGD9NMBCUHIABAD9rCffIFCZ4NBCUsMEKAEHIKAIK/lEEEUDNDNAEABvCIgtMBABHIXEKDNDNADCZ9PMBABHIXEKABHIINAIAEYDBbDBAICLFAECLFYDBbDBAICWFAECWFYDBbDBAICXFAECXFYDBbDBAICZFHIAECZFHEADC9wFGDCS0MBKKADCL6MBINAIAEYDBbDBAECLFHEAICLFHIADC98FGDCI0MBKKDNADtMBINAIAErBB86BBAICEFHIAECEFHEADCUFGDMBKKABK/AEEDUDNDNABCIgtMBABHIXEKAECfEgC+B+C+EW2HLDNDNADCZ9PMBABHIXEKABHIINAIALbDBAICXFALbDBAICWFALbDBAICLFALbDBAICZFHIADC9wFGDCS0MBKKADCL6MBINAIALbDBAICLFHIADC98FGDCI0MBKKDNADtMBINAIAE86BBAICEFHIADCUFGDMBKKABKKKEBCJWKLZ9kBB","onerror","loop","emscripten_bind_Metadata_Metadata_0","_textureCompressType","S3MB","_objsVisibleMap","geoBounds","byteLength","waterBrightness","globalDepthBuffer","_clipPlane","ZSTD","rectangleNortheastInMeters","POST_EFFECT","getInt8","directionLightDecl","setting","_basePath","_centerPixelOffset","subRequestNames",".toWireType(","QuadtreePrimitiveExt","instancesData","materialCode","setDistDirByPoint","AttributeType_Color","ClampMode","preRun","minMaxHeight","{level}","textureunitstate","cameraDepthBuffer","updatePriority","attribute is null","normalTexture","bufferView","_bImmediately","emscripten_bind_DracoUInt8Array_DracoUInt8Array_0","DracoInt32Array","setVisibleInViewport","_emscripten_bind_PointCloud___destroy___0","isDrawing","_removeExcavationCommands","_url","occlusionTexture","_viewMatrix","USE_BatchPBR","None","CatmullRom","UNSIGNED_BYTE","supportsTypedArrays","HAS_HEMISPHERE_LIGHTS","Horizontal","_createRasterRegion","style3D","find","bottomAltitude","PixelFormat","pick","_rectangleSouthwestInMeters","tileImage.","OperationType","baseColor","addColorStop","total_in","sceneType","invalid literal/length code","globe_main","draw","_currentFlight","aTexCoord1","modifyTerrainData","sml:Version","UNSIGNED_SHORT","Stop","_lastTimeIndex","EXPONENTIAL_AT","currentStopIndex","createLinearGradient","GetAttributeTransformData","Credential","GetIntEntryArray","flatten","utf-16le","_crn_get_height","LUMINANCE_ALPHA","_renderTargets","isRoot","XML","IBL","project","_tileCredits","textureData","OrthographicFrustum","isBigNumber","inflateResetKeep","camera","_rasterCount","add S3M layer","temps","from","unhandledRejection","DT_BOOL","unregister","have","_currentStopIndex","geodeticLatitudeToMercatorAngle","sml:Bounds","_minimumHeight","_emscripten_bind_DracoFloat32Array_DracoFloat32Array_0","_viewProjMatrix","RGBA_BC7","_polygon","instanceDivisor",`

attribute vec3 aPosition;
#ifdef VertexNormal 
attribute vec3 aNormal;
#endif 
attribute vec4 aTexCoord0;
attribute vec4 aTexCoord1;
 
#ifdef VertexColor
    attribute vec4 aColor;
#endif
#ifdef BatchTable 
attribute float batchId; 
#endif 
 
varying vec4 vColor; 
varying vec4 vSecondColor; 
varying vec4 vTexCoord; 
varying vec4 clip_vertex; 
uniform vec4 uSelColor;
uniform vec4 uDiffuseColor;
 
float computerOnePixelLength() 
{ 
	vec4 viewPos = czm_modelView * vec4(aPosition, 1.0); 
	viewPos.xyz *= 0.9; 
	vec4 winPos = czm_projection * viewPos; 
	float dwidth = czm_metersPerPixel(viewPos); 
	#ifdef EYE_DISTANCE_SCALING 
	    dwidth = 1.0; 
	#endif 
	winPos.x = winPos.x - 2.0 * dwidth; 
	vec4 newViewPos = czm_inverseProjection * winPos; 
	return length(viewPos - newViewPos); 
} 
 
vec4 computePos(vec3 v3Normal) 
{ 
    vec4 viewPos = czm_modelView * vec4(aPosition, 1.0); 
	viewPos.xyz = viewPos.xyz + v3Normal * computerOnePixelLength(); 
	viewPos.xyz = viewPos.xyz * 0.9; 
	clip_vertex = viewPos; 
	vec4 pos = czm_projection * viewPos; 
	return pos; 
} 

void operation(vec4 operationType, vec4 color, vec4 selectedColor, inout vec4 vertexColor)
{
    float right_2 = operationType.x * 0.5;
    float right_4 = right_2 * 0.5;
    float right_8 = right_4 * 0.5;
    float right_16 = right_8 * 0.5;
    float isSetColor = fract(right_2);
    if(isSetColor > 0.1)
    {
        vertexColor *= color;
    }
    float isPicked = fract(floor(right_2)* 0.5);
    if(isPicked > 0.1)
    {
        vertexColor *= selectedColor;
    }
    float isHide = fract(floor(right_4)* 0.5);
    if(isHide > 0.1)
    {
        vertexColor.a = 0.0;
    }
}
 
void main() 
{ 
   vTexCoord.xy = aTexCoord0.xy; 
   vec4 vertexColor = vec4(1.0); 
#ifdef VertexColor 
    vertexColor = aColor;
#endif 
#ifdef BatchTable 
    vSecondColor = s3m_batchTable_pickColor(batchId); 
    vec4 operationType = s3m_batchTable_operation(batchId); 
    vec4 objsColor = s3m_batchTable_color(batchId); 
    operation(operationType, objsColor, uSelColor, vertexColor); 
#endif 
   vColor = vertexColor * uDiffuseColor; 
#ifdef ICON
    gl_Position = computePos(aTexCoord1.xyz); 
#else 
    vTexCoord.zw = aTexCoord1.xy;
   #ifdef VertexNormal 
   	    gl_Position = computePos(aNormal);
   #else
        gl_Position = computePos(aTexCoord1.xyz);
   #endif
#endif 
}`,"methodCaller_","setOnlyObjsVisible isVisible","open","B9h79tEBBBE5V9gBB9gVUUUUUEU9gIUUUB9gDUUB9gEUEUIMXBBEBEEDIDIDLLVE9wEEEVIEBEOWEUEC+Q/aEKR/LEdO9tw9t9vv95DBh9f9f939h79t9f9j9h229f9jT9vv7BB8a9tw79o9v9wT9f9kw9j9v9kw9WwvTw949C919m9mwvBDy9tw79o9v9wT9f9kw9j9v9kw69u9kw949C919m9mwvBLe9tw79o9v9wT9f9kw9j9v9kw69u9kw949Twg91w9u9jwBVl9tw79o9v9wT9f9kw9j9v9kws9p2Twv9P9jTBOk9tw79o9v9wT9f9kw9j9v9kws9p2Twv9R919hTBWl9tw79o9v9wT9f9kw9j9v9kws9p2Twvt949wBQL79iv9rBKQ/j6XLBZIK9+EVU8jJJJJBCZ9rHBCBHEINCBHDCBHIINABCWFADFAICJUAEAD4CEgGLe86BBAIALFHIADCEFGDCW9HMBKAEC+Q+YJJBFAI86BBAECITC+Q1JJBFAB8pIW83IBAECEFGECJD9HMBKK1HLSUD97EUO978jJJJJBCJ/KB9rGV8kJJJJBC9+HODNADCEFAL0MBCUHOAIrBBC+gE9HMBAVAIALFGRAD9rAD/8QBBCJ/ABAD9uC/wfBgGOCJDAOCJD6eHWAICEFHOCBHdDNINAdAE9PMEAWAEAd9rAdAWFAE6eHQDNDNADtMBAQCSFGLC9wgGKCI2HXAKCETHMALCL4CIFCD4HpCBHSINAOHZCBHhDNINDNARAZ9rAp9PMBCBHOXVKAVCJ/CBFAhAK2FHoAZApFHOCBHIDNAKC/AB6MBARAO9rC/gB6MBCBHLINAoALFHIDNDNDNDNDNAZALCO4FrBBGaCIgpLBEDIBKAICBPhPKLBXIKAIAOPBBLAOPBBBGcCLP+MEAcPMBZEhDoIaLcVxOqRlGcCDP+MEAcPMBZEhDoIaLcVxOqRlC+D+G+MkPhP9OGxCIPSP8jGcP5B9CJf/8/4/w/g/AB9+9Cu1+nGqCITC+Q1JJBFPBIBAqC+Q+YJJBFPBBBGlAlPMBBBBBBBBBBBBBBBBAcP5E9CJf/8/4/w/g/AB9+9Cu1+nGqCITC+Q1JJBFPBIBP9uPMBEDILVORZhoacxqlPpAxAcP9SPKLBAOCLFAlPqBFAqC+Q+YJJBFrBBFHOXDKAIAOPBBWAOPBBBGcCLP+MEAcPMBZEhDoIaLcVxOqRlC+P+e+8/4BPhP9OGxCSPSP8jGcP5B9CJf/8/4/w/g/AB9+9Cu1+nGqCITC+Q1JJBFPBIBAqC+Q+YJJBFPBBBGlAlPMBBBBBBBBBBBBBBBBAcP5E9CJf/8/4/w/g/AB9+9Cu1+nGqCITC+Q1JJBFPBIBP9uPMBEDILVORZhoacxqlPpAxAcP9SPKLBAOCWFAlPqBFAqC+Q+YJJBFrBBFHOXEKAIAOPBBBPKLBAOCZFHOKDNDNDNDNDNAaCD4CIgpLBEDIBKAICBPhPKLZXIKAIAOPBBLAOPBBBGcCLP+MEAcPMBZEhDoIaLcVxOqRlGcCDP+MEAcPMBZEhDoIaLcVxOqRlC+D+G+MkPhP9OGxCIPSP8jGcP5B9CJf/8/4/w/g/AB9+9Cu1+nGqCITC+Q1JJBFPBIBAqC+Q+YJJBFPBBBGlAlPMBBBBBBBBBBBBBBBBAcP5E9CJf/8/4/w/g/AB9+9Cu1+nGqCITC+Q1JJBFPBIBP9uPMBEDILVORZhoacxqlPpAxAcP9SPKLZAOCLFAlPqBFAqC+Q+YJJBFrBBFHOXDKAIAOPBBWAOPBBBGcCLP+MEAcPMBZEhDoIaLcVxOqRlC+P+e+8/4BPhP9OGxCSPSP8jGcP5B9CJf/8/4/w/g/AB9+9Cu1+nGqCITC+Q1JJBFPBIBAqC+Q+YJJBFPBBBGlAlPMBBBBBBBBBBBBBBBBAcP5E9CJf/8/4/w/g/AB9+9Cu1+nGqCITC+Q1JJBFPBIBP9uPMBEDILVORZhoacxqlPpAxAcP9SPKLZAOCWFAlPqBFAqC+Q+YJJBFrBBFHOXEKAIAOPBBBPKLZAOCZFHOKDNDNDNDNDNAaCL4CIgpLBEDIBKAICBPhPKLAXIKAIAOPBBLAOPBBBGcCLP+MEAcPMBZEhDoIaLcVxOqRlGcCDP+MEAcPMBZEhDoIaLcVxOqRlC+D+G+MkPhP9OGxCIPSP8jGcP5B9CJf/8/4/w/g/AB9+9Cu1+nGqCITC+Q1JJBFPBIBAqC+Q+YJJBFPBBBGlAlPMBBBBBBBBBBBBBBBBAcP5E9CJf/8/4/w/g/AB9+9Cu1+nGqCITC+Q1JJBFPBIBP9uPMBEDILVORZhoacxqlPpAxAcP9SPKLAAOCLFAlPqBFAqC+Q+YJJBFrBBFHOXDKAIAOPBBWAOPBBBGcCLP+MEAcPMBZEhDoIaLcVxOqRlC+P+e+8/4BPhP9OGxCSPSP8jGcP5B9CJf/8/4/w/g/AB9+9Cu1+nGqCITC+Q1JJBFPBIBAqC+Q+YJJBFPBBBGlAlPMBBBBBBBBBBBBBBBBAcP5E9CJf/8/4/w/g/AB9+9Cu1+nGqCITC+Q1JJBFPBIBP9uPMBEDILVORZhoacxqlPpAxAcP9SPKLAAOCWFAlPqBFAqC+Q+YJJBFrBBFHOXEKAIAOPBBBPKLAAOCZFHOKDNDNDNDNDNAaCO4pLBEDIBKAICBPhPKL8wXIKAIAOPBBLAOPBBBGcCLP+MEAcPMBZEhDoIaLcVxOqRlGcCDP+MEAcPMBZEhDoIaLcVxOqRlC+D+G+MkPhP9OGxCIPSP8jGcP5B9CJf/8/4/w/g/AB9+9Cu1+nGaCITC+Q1JJBFPBIBAaC+Q+YJJBFPBBBGlAlPMBBBBBBBBBBBBBBBBAcP5E9CJf/8/4/w/g/AB9+9Cu1+nGaCITC+Q1JJBFPBIBP9uPMBEDILVORZhoacxqlPpAxAcP9SPKL8wAOCLFAlPqBFAaC+Q+YJJBFrBBFHOXDKAIAOPBBWAOPBBBGcCLP+MEAcPMBZEhDoIaLcVxOqRlC+P+e+8/4BPhP9OGxCSPSP8jGcP5B9CJf/8/4/w/g/AB9+9Cu1+nGaCITC+Q1JJBFPBIBAaC+Q+YJJBFPBBBGlAlPMBBBBBBBBBBBBBBBBAcP5E9CJf/8/4/w/g/AB9+9Cu1+nGaCITC+Q1JJBFPBIBP9uPMBEDILVORZhoacxqlPpAxAcP9SPKL8wAOCWFAlPqBFAaC+Q+YJJBFrBBFHOXEKAIAOPBBBPKL8wAOCZFHOKALC/ABFHIALCJEFAK0MEAIHLARAO9rC/fB0MBKKDNAIAK9PMBAICI4HLINDNARAO9rCk9PMBCBHOXRKAoAIFHaDNDNDNDNDNAZAICO4FrBBALCOg4CIgpLBEDIBKAaCBPhPKLBXIKAaAOPBBLAOPBBBGcCLP+MEAcPMBZEhDoIaLcVxOqRlGcCDP+MEAcPMBZEhDoIaLcVxOqRlC+D+G+MkPhP9OGxCIPSP8jGcP5B9CJf/8/4/w/g/AB9+9Cu1+nGqCITC+Q1JJBFPBIBAqC+Q+YJJBFPBBBGlAlPMBBBBBBBBBBBBBBBBAcP5E9CJf/8/4/w/g/AB9+9Cu1+nGqCITC+Q1JJBFPBIBP9uPMBEDILVORZhoacxqlPpAxAcP9SPKLBAOCLFAlPqBFAqC+Q+YJJBFrBBFHOXDKAaAOPBBWAOPBBBGcCLP+MEAcPMBZEhDoIaLcVxOqRlC+P+e+8/4BPhP9OGxCSPSP8jGcP5B9CJf/8/4/w/g/AB9+9Cu1+nGqCITC+Q1JJBFPBIBAqC+Q+YJJBFPBBBGlAlPMBBBBBBBBBBBBBBBBAcP5E9CJf/8/4/w/g/AB9+9Cu1+nGqCITC+Q1JJBFPBIBP9uPMBEDILVORZhoacxqlPpAxAcP9SPKLBAOCWFAlPqBFAqC+Q+YJJBFrBBFHOXEKAaAOPBBBPKLBAOCZFHOKALCDFHLAICZFGIAK6MBKKDNAOtMBAOHZAhCEFGhCLsMDXEKKCBHOXIKDNAKtMBAVCJDFASFHIAVASFPBDBHlCBHaINAIAVCJ/CBFAaFGLPBLBGxCEP9tAxCEPSGcP9OP9hP9RGxALAKFPBLBGkCEP9tAkAcP9OP9hP9RGkPMBZEhDoIaLcVxOqRlGyALAMFPBLBG8aCEP9tA8aAcP9OP9hP9RG8aALAXFPBLBGeCEP9tAeAcP9OP9hP9RGePMBZEhDoIaLcVxOqRlG3PMBEZhDIoaLVcxORqlGcAcPMBEDIBEDIBEDIBEDIAlP9uGlPeBbDBAIADFGLAlAcAcPMLVORLVORLVORLVORP9uGlPeBbDBALADFGLAlAcAcPMWdQKWdQKWdQKWdQKP9uGlPeBbDBALADFGLAlAcAcPMXMpSXMpSXMpSXMpSP9uGlPeBbDBALADFGLAlAyA3PMWdkyQK8aeXM35pS8e8fGcAcPMBEDIBEDIBEDIBEDIP9uGlPeBbDBALADFGLAlAcAcPMLVORLVORLVORLVORP9uGlPeBbDBALADFGLAlAcAcPMWdQKWdQKWdQKWdQKP9uGlPeBbDBALADFGLAlAcAcPMXMpSXMpSXMpSXMpSP9uGlPeBbDBALADFGLAlAxAkPMWkdyQ8aKeX3M5p8eS8fGxA8aAePMWkdyQ8aKeX3M5p8eS8fGkPMBEZhDIoaLVcxORqlGcAcPMBEDIBEDIBEDIBEDIP9uGlPeBbDBALADFGLAlAcAcPMLVORLVORLVORLVORP9uGlPeBbDBALADFGLAlAcAcPMWdQKWdQKWdQKWdQKP9uGlPeBbDBALADFGLAlAcAcPMXMpSXMpSXMpSXMpSP9uGlPeBbDBALADFGLAlAxAkPMWdkyQK8aeXM35pS8e8fGcAcPMBEDIBEDIBEDIBEDIP9uGlPeBbDBALADFGLAlAcAcPMLVORLVORLVORLVORP9uGlPeBbDBALADFGLAlAcAcPMWdQKWdQKWdQKWdQKP9uGlPeBbDBALADFGLAlAcAcPMXMpSXMpSXMpSXMpSP9uGlPeBbDBALADFHIAaCZFGaAK6MBKKASCLFGSAD6MBKKABAdAD2FAVCJDFAQAD2/8QBBAVAVCJDFAQCUFAD2FAD/8QBBKAQCBAOeAdFHdAOMBKC9+HOXEKCBC99ARAO9rADCAADCA0eseHOKAVCJ/KBF8kJJJJBAOKWBZ+BJJJBK+KoEZU8jJJJJBC/AE9rGV8kJJJJBC9+HODNAECI9uGRChFAL0MBCUHOAIrBBGWC/wEgC/gE9HMBAWCSgGdCE0MBAVC/ABFCfECJE/8KBAVCuF9CU83IBAVC8wF9CU83IBAVCYF9CU83IBAVCAF9CU83IBAVCkF9CU83IBAVCZF9CU83IBAV9CU83IWAV9CU83IBAIALFC9wFHQAICEFGWARFHKDNAEtMBCMCSAdCEseHXABHICBHdCBHMCBHpCBHLCBHOINDNAKAQ9NMBC9+HOXIKDNDNAWrBBGRC/vE0MBAVC/ABFARCL4CU7AOFCSgCITFGSYDLHZASYDBHhDNARCSgGSAX9PMBAVARCU7ALFCSgCDTFYDBAdASeHRAStHSDNDNADCD9HMBABAh87EBABCLFAR87EBABCDFAZ87EBXEKAIAhbDBAICWFARbDBAICLFAZbDBKAdASFHdAVC/ABFAOCITFGoARbDBAoAZbDLAVALCDTFARbDBAVC/ABFAOCEFCSgGOCITFGZAhbDBAZARbDLALASFHLAOCEFHOXDKDNDNASCSsMBAMASFASC987FCEFHMXEKAK8sBBGSCfEgHRDNDNASCU9MMBAKCEFHKXEKAK8sBEGSCfBgCRTARCfBgvHRDNASCU9MMBAKCDFHKXEKAK8sBDGSCfBgCpTARvHRDNASCU9MMBAKCIFHKXEKAK8sBIGSCfBgCxTARvHRDNASCU9MMBAKCLFHKXEKAKrBLC3TARvHRAKCVFHKKARCE4CBARCEg9r7AMFHMKDNDNADCD9HMBABAh87EBABCLFAM87EBABCDFAZ87EBXEKAIAhbDBAICWFAMbDBAICLFAZbDBKAVC/ABFAOCITFGRAMbDBARAZbDLAVALCDTFAMbDBAVC/ABFAOCEFCSgGOCITFGRAhbDBARAMbDLALCEFHLAOCEFHOXEKDNARCPE0MBAVALAQARCSgFrBBGSCL4GZ9rCSgCDTFYDBAdCEFGhAZeHRAVALAS9rCSgCDTFYDBAhAZtGoFGhASCSgGZeHSAZtHZDNDNADCD9HMBABAd87EBABCLFAS87EBABCDFAR87EBXEKAIAdbDBAICWFASbDBAICLFARbDBKAVALCDTFAdbDBAVC/ABFAOCITFGaARbDBAaAdbDLAVALCEFGLCSgCDTFARbDBAVC/ABFAOCEFCSgCITFGaASbDBAaARbDLAVALAoFCSgGLCDTFASbDBAVC/ABFAOCDFCSgGOCITFGRAdbDBARASbDLAOCEFHOALAZFHLAhAZFHdXEKAdCBAKrBBGaeGZARC/+EsGcFHRAaCSgHhDNDNAaCL4GoMBARCEFHSXEKARHSAVALAo9rCSgCDTFYDBHRKDNDNAhMBASCEFHdXEKASHdAVALAa9rCSgCDTFYDBHSKDNDNActMBAKCEFHaXEKAK8sBEGaCfEgHZDNDNAaCU9MMBAKCDFHaXEKAK8sBDGaCfBgCRTAZCfBgvHZDNAaCU9MMBAKCIFHaXEKAK8sBIGaCfBgCpTAZvHZDNAaCU9MMBAKCLFHaXEKAK8sBLGaCfBgCxTAZvHZDNAaCU9MMBAKCVFHaXEKAKCOFHaAKrBVC3TAZvHZKAZCE4CBAZCEg9r7AMFGMHZKDNDNAoCSsMBAaHcXEKAa8sBBGKCfEgHRDNDNAKCU9MMBAaCEFHcXEKAa8sBEGKCfBgCRTARCfBgvHRDNAKCU9MMBAaCDFHcXEKAa8sBDGKCfBgCpTARvHRDNAKCU9MMBAaCIFHcXEKAa8sBIGKCfBgCxTARvHRDNAKCU9MMBAaCLFHcXEKAaCVFHcAarBLC3TARvHRKARCE4CBARCEg9r7AMFGMHRKDNDNAhCSsMBAcHKXEKAc8sBBGKCfEgHSDNDNAKCU9MMBAcCEFHKXEKAc8sBEGKCfBgCRTASCfBgvHSDNAKCU9MMBAcCDFHKXEKAc8sBDGKCfBgCpTASvHSDNAKCU9MMBAcCIFHKXEKAc8sBIGKCfBgCxTASvHSDNAKCU9MMBAcCLFHKXEKAcCVFHKAcrBLC3TASvHSKASCE4CBASCEg9r7AMFGMHSKDNDNADCD9HMBABAZ87EBABCLFAS87EBABCDFAR87EBXEKAIAZbDBAICWFASbDBAICLFARbDBKAVC/ABFAOCITFGaARbDBAaAZbDLAVALCDTFAZbDBAVC/ABFAOCEFCSgCITFGaASbDBAaARbDLAVALCEFGLCSgCDTFARbDBAVC/ABFAOCDFCSgCITFGRAZbDBARASbDLAVALAotAoCSsvFGLCSgCDTFASbDBALAhtAhCSsvFHLAOCIFHOKAWCEFHWABCOFHBAICXFHIAOCSgHOALCSgHLApCIFGpAE6MBKKCBC99AKAQseHOKAVC/AEF8kJJJJBAOK/tLEDU8jJJJJBCZ9rHVC9+HODNAECVFAL0MBCUHOAIrBBC/+EgC/QE9HMBAV9CB83IWAICEFHOAIALFC98FHIDNAEtMBDNADCDsMBINDNAOAI6MBC9+SKAO8sBBGDCfEgHLDNDNADCU9MMBAOCEFHOXEKAO8sBEGDCfBgCRTALCfBgvHLDNADCU9MMBAOCDFHOXEKAO8sBDGDCfBgCpTALvHLDNADCU9MMBAOCIFHOXEKAO8sBIGDCfBgCxTALvHLDNADCU9MMBAOCLFHOXEKAOrBLC3TALvHLAOCVFHOKAVCWFALCEgCDTvGDALCD4CBALCE4CEg9r7ADYDBFGLbDBABALbDBABCLFHBAECUFGEMBXDKKINDNAOAI6MBC9+SKAO8sBBGDCfEgHLDNDNADCU9MMBAOCEFHOXEKAO8sBEGDCfBgCRTALCfBgvHLDNADCU9MMBAOCDFHOXEKAO8sBDGDCfBgCpTALvHLDNADCU9MMBAOCIFHOXEKAO8sBIGDCfBgCxTALvHLDNADCU9MMBAOCLFHOXEKAOrBLC3TALvHLAOCVFHOKABALCD4CBALCE4CEg9r7AVCWFALCEgCDTvGLYDBFGD87EBALADbDBABCDFHBAECUFGEMBKKCBC99AOAIseHOKAOK/xVDIUO978jJJJJBCA9rGI8kJJJJBDNDNADCL9HMBDNAEC98gGLtMBABHDCBHVINADADPBBBGOCkP+rECkP+sEP/6EGRAOCWP+rECkP+sEP/6EARP/gEAOCZP+rECkP+sEP/6EGWP/gEP/kEP/lEGdCBPhP+2EGQARCJJJJ94PhGKP9OP9RP/kEGRjBB/+9CPaARARP/mEAdAdP/mEAWAQAWAKP9OP9RP/kEGRARP/mEP/kEP/kEP/jEP/nEGWP/mEjBBN0PaGQP/kECfEPhP9OAOCJJJ94PhP9OP9QARAWP/mEAQP/kECWP+rECJ/+IPhP9OP9QAdAWP/mEAQP/kECZP+rECJJ/8RPhP9OP9QPKBBADCZFHDAVCLFGVAL6MBKKALAE9PMEAIAECIgGVCDTGDvCBCZAD9r/8KBAIABALCDTFGLAD/8QBBDNAVtMBAIAIPBLBGOCkP+rECkP+sEP/6EGRAOCWP+rECkP+sEP/6EARP/gEAOCZP+rECkP+sEP/6EGWP/gEP/kEP/lEGdCBPhP+2EGQARCJJJJ94PhGKP9OP9RP/kEGRjBB/+9CPaARARP/mEAdAdP/mEAWAQAWAKP9OP9RP/kEGRARP/mEP/kEP/kEP/jEP/nEGWP/mEjBBN0PaGQP/kECfEPhP9OAOCJJJ94PhP9OP9QARAWP/mEAQP/kECWP+rECJ/+IPhP9OP9QAdAWP/mEAQP/kECZP+rECJJ/8RPhP9OP9QPKLBKALAIAD/8QBBXEKABAEC98gGDZ+HJJJBADAE9PMBAIAECIgGLCITGVFCBCAAV9r/8KBAIABADCITFGDAV/8QBBAIALZ+HJJJBADAIAV/8QBBKAICAF8kJJJJBK+yIDDUR97DNAEtMBCBHDINABCZFGIAIPBBBGLCBPhGVCJJ98P3ECJJ98P3IGOP9OABPBBBGRALPMLVORXMpScxql358e8fCffEPhP9OP/6EARALPMBEDIWdQKZhoaky8aeGLCZP+sEP/6EGWP/gEALCZP+rECZP+sEP/6EGdP/gEP/kEP/lEGLjB/+fsPaAdALAVP+2EGVAdCJJJJ94PhGQP9OP9RP/kEGdAdP/mEALALP/mEAWAVAWAQP9OP9RP/kEGLALP/mEP/kEP/kEP/jEP/nEGWP/mEjBBN0PaGVP/kECZP+rEAdAWP/mEAVP/kECffIPhP9OP9QGdALAWP/mEAVP/kECUPSCBPlDCBPlICBPlOCBPlRCBPlQCBPlKCBPlpCBPlSP9OGLPMWdkyQK8aeXM35pS8e8fP9QPKBBABARAOP9OAdALPMBEZhDIoaLVcxORqlP9QPKBBABCAFHBADCLFGDAE6MBKKK94EIU8jJJJJBCA9rGI8kJJJJBABAEC98gGLZ+JJJJBDNALAE9PMBAIAECIgGVCITGEFCBCAAE9r/8KBAIABALCITFGBAE/8QBBAIAVZ+JJJJBABAIAE/8QBBKAICAF8kJJJJBK/hILDUE97EUV978jJJJJBCZ9rHDDNAEtMBCBHIINADABPBBBGLABCZFGVPBBBGOPMLVORXMpScxql358e8fGRCZP+sEGWCLP+rEPKLBABjBBJzPaj/zL81zPaAWCIPhP9QP/6EP/nEGWALAOPMBEDIWdQKZhoaky8aeGLCZP+rECZP+sEP/6EP/mEGOAOP/mEAWALCZP+sEP/6EP/mEGdAdP/mEAWARCZP+rECZP+sEP/6EP/mEGRARP/mEP/kEP/kEP/lECBPhP+4EP/jEjB/+fsPaGWP/mEjBBN0PaGLP/kECffIPhGQP9OAdAWP/mEALP/kECZP+rEP9QGdARAWP/mEALP/kECZP+rEAOAWP/mEALP/kEAQP9OP9QGWPMBEZhDIoaLVcxORqlGLP5BADPBLBPeB+t+J83IBABCWFALP5EADPBLBPeE+t+J83IBAVAdAWPMWdkyQK8aeXM35pS8e8fGWP5BADPBLBPeD+t+J83IBABCkFAWP5EADPBLBPeI+t+J83IBABCAFHBAICLFGIAE6MBKKK/3EDIUE978jJJJJBC/AB9rHIDNADCD4AE2GLC98gGVtMBCBHDABHEINAEAEPBBBGOCWP+rECWP+sEP/6EAOCkP+sEClP+rECJJJ/8IPhP+uEP/mEPKBBAECZFHEADCLFGDAV6MBKKDNAVAL9PMBAIALCIgGDCDTGEvCBC/ABAE9r/8KBAIABAVCDTFGVAE/8QBBDNADtMBAIAIPBLBGOCWP+rECWP+sEP/6EAOCkP+sEClP+rECJJJ/8IPhP+uEP/mEPKLBKAVAIAE/8QBBKK9TEIUCBCBYDJ1JJBGEABCIFC98gFGBbDJ1JJBDNDNABzBCZTGD9NMBCUHIABAD9rCffIFCZ4NBCUsMEKAEHIKAIKKKEBCJWKLZ9tBB","_heigtRangeMax","cancel","levelData","wetnessFactor",`attribute vec4 aPosition;
attribute vec3 aNormal;
attribute vec4 aTexCoord0;
attribute vec4 aColor;
uniform float uTimeVal;
uniform float uScale;
uniform float uScroll;
uniform vec2 uBumpSpeed;
uniform mat4 uGeoMatrix;

varying vec2 vNoiseCoord;
varying vec3 vProjectionCoord;
varying vec3 vEyeDir;
varying vec3 vNormal;
varying vec4 vColor;
varying vec4 vPositionMC;
varying float fSelected;
varying vec3 vPositionEC;
#ifdef EXCAVATION
    varying vec4 vExcavationVertexPos;
#endif

void main()
{
	#ifdef EXCAVATION
		vExcavationVertexPos = uGeoMatrix * vec4(aPosition.xyz, 1.0);
	#endif
	vec4 oPos = czm_modelViewProjection * aPosition;
	vPositionMC = uGeoMatrix * aPosition;
	vPositionEC = (czm_modelView * vPositionMC).xyz;
	mat4 scalemat = mat4(0.5, 0.0, 0.0, 0.0,
			0.0, 0.5, 0.0, 0.0,
			0.0, 0.0, 0.5, 0.0,
			0.5, 0.5, 0.5, 1.0);
	vec4 proj = scalemat * oPos;
	vProjectionCoord = proj.xyw;
	vNoiseCoord.xy = aTexCoord0.xy * uScale + uBumpSpeed * uTimeVal;
	vec4 cameraPos = czm_inverseModel * vec4(czm_viewerPositionWC, 1.0);
	vEyeDir = aPosition.xyz - cameraPos.xyz;
	vNormal = aNormal.xyz;
	gl_Position = oPos;
	vec4 vertexColor = vec4(1.0);
    vertexColor = aColor;
    vColor = vertexColor;
}`,"GetAttributeFloatForAllPoints","operationValue","encode","header","Extensions","SCENE3D","fetchImage","waterIndex","func","isUseHypColorTable","MASK","horizontalFov","offsetY","imageryLayers","isAbsolute","maxCategory","updateObjsOperation","astc","maximumComponent","_minimumPriority","BYTES_PER_ELEMENT","RangeMode","_availability","setObjsColor ids","UnboundTypeError","&x={x}&y={y}&scale={scale}","FilterMode","MaxX","newFrame","_updateExcavationFrameBuffer","log2FarDepthFromNearPlusOne","incorrect data check","renderTexture","_emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_INVALID_TRANSFORM","_emscripten_enum_draco_GeometryAttribute_Type_COLOR","clampToGround","KTX2","distanceToTileCenter","replaceMain","visibilityPlaneMask","MeasureMode","Fov","greaterThan","executeExcavation","_boundingSphere","output","top","emscripten_bind_AttributeQuantizationTransform_range_0","_emscripten_bind_Decoder_GetAttributeIntForAllPoints_3","void","VK_FORMAT_R32G32B32A32_SFLOAT","FileName","COMPRESS_COLOR","parentNode","renderTextureMatrix","enable","DRACO","buf2string","fromCartesian","emscripten_bind_AttributeTransformData_AttributeTransformData_0","uniformState","emscripten_enum_draco_DataType_DT_UINT16","S3MObliqueRenderEntity","removeAllLimitBody","subTextureInfo","Replacing nonexistant public symbol","falling back to ArrayBuffer instantiation","HEAPU8","emscripten_enum_draco_EncodedGeometryType_POINT_CLOUD","aNormalB","HYPSOMETRIC","_proxy","defaultTexture","positions","options.startObject and options.stopObject are required.","FACE","defineProperty","inflateEnd","getMatrix3","invalid block type","_limitBodys","emscripten_enum_draco_DataType_DT_INT64","_currentArea","_metallicFactor","_loadMaterialTexture","sml:Right",'" must have a positive integer typeid pointer',"CullingVolume","need dictionary"];return nn=function(){return s0},nn()}function C0(s0,o){const lx=nn();return C0=function(me,L2){return me=me-441,lx[me]},C0(s0,o)}(function(s0,o){const lx=C0,me=s0();for(;[];)try{if(parseInt(lx(4061))/1+-parseInt(lx(1084))/2*(parseInt(lx(668))/3)+-parseInt(lx(1819))/4+parseInt(lx(4135))/5*(parseInt(lx(2719))/6)+parseInt(lx(2890))/7*(-parseInt(lx(2923))/8)+-parseInt(lx(1465))/9*(-parseInt(lx(1535))/10)+parseInt(lx(3805))/11*(parseInt(lx(3337))/12)===o)break;me.push(me.shift())}catch{me.push(me.shift())}})(nn,915527),function(s0,o){const lx=C0;lx(2408)==typeof exports&&lx(1345)!=typeof module?o(exports):lx(1355)==typeof define&&define[lx(2015)]?define([lx(3660)],o):o((s0=lx(1345)!=typeof globalThis?globalThis:s0||self)[lx(1234)]={})}(globalThis,function(s0){const o=C0;function lx(e){const x=C0;this.context=e,this.sceneFramebuffer=new Cesium.SceneFramebuffer,this[x(3604)]=new Cesium[x(1842)](e),this.passState.viewport=new Cesium[x(1691)],this[x(3803)]={isSunVisible:!1,isMoonVisible:!1,isSkyAtmosphereVisible:!1,isSkyBoxVisible:!1,isGlobalVisible:!0,isObjectVisible:!0},this[x(2375)]=0,this[x(2388)]=0,this[x(3307)]=void 0,this[x(3702)]=void 0,this[x(3265)]=void 0,this.depthTextureToCopy=void 0,this.rs=void 0,this[x(2247)]=void 0,this[x(3265)]=void 0,this[x(651)]=!1}lx.prototype[o(3082)]=function(e){const x=o;let t=e[x(2151)],a=e[x(1079)];this[x(3265)]&&this[x(2375)]===t&&this.height===a||(this[x(2375)]=t,this[x(2388)]=a,this[x(2247)]=this[x(2247)]&&!this[x(2247)][x(3777)]()&&this[x(2247)].destroy(),this[x(2247)]=new Cesium[x(1869)]({context:e,width:t,height:a,pixelFormat:Cesium[x(3868)].RGBA,pixelDatatype:Cesium.PixelDatatype.UNSIGNED_BYTE,sampler:new Cesium.Sampler({wrapS:Cesium.TextureWrap[x(4024)],wrapT:Cesium[x(587)].CLAMP_TO_EDGE,minificationFilter:Cesium[x(2410)][x(1934)],magnificationFilter:Cesium.TextureMagnificationFilter[x(1934)]})}),this[x(3265)]=this.framebuffer&&!this.framebuffer[x(3777)]()&&this[x(3265)].destroy(),this.framebuffer=new Cesium[x(2072)]({context:e,colorTextures:[this[x(2247)]],destroyAttachments:!1}))},lx[o(3096)]._updateCopyCommand=function(e){const x=o;if(this.rs&&Cesium.BoundingRectangle[x(4168)](this.passState[x(2548)],this.rs[x(2548)])||(this.rs=Cesium[x(3154)].fromCache({viewport:this[x(3604)].viewport})),!this[x(3307)]){let t=x(1474);this.copyDepthCommand=e[x(2985)](t,{uniformMap:{u_depthTexture:()=>this[x(1390)]},owner:this})}this[x(3702)]||(this[x(3702)]=new Cesium[x(4134)]({color:new Cesium[x(1911)](0,0,0,0),stencil:0,depth:1,owner:this})),this.copyDepthCommand.renderState=this.rs,this[x(3307)][x(3265)]=this[x(3265)],this[x(3702)][x(3265)]=this[x(3265)]},lx[o(3096)].begin=function(e){const x=o;this.sceneFramebuffer[x(2696)](e[x(716)],e[x(2652)][x(2548)],e[x(3116)]),this[x(3604)][x(3265)]=this[x(1389)][x(3357)](),Cesium[x(1691)][x(3552)](e.view[x(2548)],this[x(3604)][x(2548)]);let t=e[x(716)];return this[x(3082)](t),this[x(3077)](t),this[x(3702)].execute(t,this[x(3604)]),e.frameState[x(3606)][x(2832)]=!0,this[x(1339)]&&this[x(1339)](e[x(3730)]),this[x(3604)]},lx[o(3096)][o(1441)]=function(e,x){const t=o;e.passes[t(3869)]=!1,e[t(3606)][t(2832)]=!1,this[t(1390)]=x[t(3265)].depthStencilTexture,this.copyDepthCommand&&this[t(3307)][t(1112)](e[t(716)],x),this[t(4104)]&&this[t(4104)](e)},lx[o(3096)].renderToTexture=function(e){const x=o;if(!this.isUpdate)return;const t=e[x(3730)];t.commandList[x(3650)]=0,t[x(1479)]=!0,e[x(2070)]=!1;const a=this.begin(e);e[x(2495)](),e[x(1569)](a,Cesium[x(1911)][x(1061)]),this[x(1441)](e[x(3730)],a),t[x(1479)]=!1,e.useDepthPicking=!0},lx[o(3096)][o(3777)]=function(){return!1},lx[o(3096)].destroy=function(){const e=o;if(this[e(2247)]=this[e(2247)]&&!this.depthTexture[e(3777)]()&&this.depthTexture.destroy(),this[e(3265)]=this.framebuffer&&!this[e(3265)][e(3777)]()&&this[e(3265)][e(3701)](),this[e(3307)]){let x=this[e(3307)].sp;x=x&&!x[e(3777)]()&&x.destroy(),this.copyDepthCommand=void 0}return this.clearCommand=void 0,this.depthTextureToCopy=void 0,this[e(651)]=!1,Cesium[e(1136)](this)};var me=o(2066),L2=o(3692),qi=o(821),jr=`#ifdef GL_EXT_frag_depth
#extension GL_EXT_frag_depth : enable
#endif
#ifdef GL_OES_standard_derivatives
#extension GL_OES_standard_derivatives : enable
#endif

uniform mat4 uRenderTextureMatrix;
uniform vec2 uTexture1_size;
uniform sampler2D uTexture1;
uniform sampler2D uDiffuseTexture;
uniform float uFeatheringScale;
uniform vec3 uV3AffineX;
uniform vec3 uV3AffineY;

varying vec4 vClipPos;

const float oldFeatureingRadius = 0.707;
vec4 feathering(vec4 oldColor, vec2 texCoord){
    float disToCenter = length(texCoord - vec2(0.5));
    float roundRadius = oldFeatureingRadius * (1.0 - uFeatheringScale);
    float disToRoundBounds = disToCenter - roundRadius;
    float featheringAlpha = min(1.0, 1.0 - disToRoundBounds / (oldFeatureingRadius - roundRadius));
    return vec4(oldColor.rgb, featheringAlpha);
}
float getDepth(in vec4 depth)
{
	float z_window = czm_unpackDepth(depth);
	float n_range = czm_depthRange.near;
	float f_range = czm_depthRange.far;
	return (2.0 * z_window - n_range - f_range) / (f_range - n_range);
}

float getDepthFromShadowMap(in sampler2D viewShedTexture, in vec4 texCoord)
{
	vec2 tCoord;
    tCoord = texCoord.xy * uTexture1_size - 0.5;
	float x0 = floor(tCoord.x);
	float x1 = ceil(tCoord.x);
	float y0 = floor(tCoord.y);
	float y1 = ceil(tCoord.y);
	vec2 invTexSize = 1.0 / uTexture1_size;
	vec2 t00 = vec2((x0 + 0.5) * invTexSize.x, (y0 + 0.5) * invTexSize.y);
	vec2 t10 = vec2((x1 + 0.5) * invTexSize.x, (y0 + 0.5) * invTexSize.y);
	vec2 t01 = vec2((x0 + 0.5) * invTexSize.x, (y1 + 0.5) * invTexSize.y);
	vec2 t11 = vec2((x1 + 0.5) * invTexSize.x, (y1 + 0.5) * invTexSize.y);
	float z00 = getDepth(texture2D(uTexture1, t00));
	float z10 = getDepth(texture2D(uTexture1, t01));
	float z01 = getDepth(texture2D(uTexture1, t10));
	float z11 = getDepth(texture2D(uTexture1, t11));
	float depth = max(max(z00, z01), max(z10, z11));
	return depth;
}

void main()
{
    //czm_writeDepthClamp();
	vec4 depthTexCoord = vClipPos / vClipPos.w;
	depthTexCoord.xy = depthTexCoord.xy * 0.5 + 0.5;
	float sceneDepth = czm_unpackDepth(texture2D(czm_globeDepthTexture, depthTexCoord.xy));
	sceneDepth = czm_reverseLogDepth(sceneDepth);
	sceneDepth = sceneDepth * 2.0 - 1.0;
	vec4 pos = vClipPos;
	pos.z = sceneDepth * pos.w;
	vec4 viewPos = czm_inverseProjection * pos;
	vec4 renderTextureCoord = uRenderTextureMatrix * viewPos;
	vec4 texCoord = renderTextureCoord / renderTextureCoord.w;
	texCoord.xyz = texCoord.xyz * 0.5 + 0.5;
	if(texCoord.x < 0.0 || texCoord.x > 1.0 || texCoord.y < 0.0 || texCoord.y > 1.0)
	{
		discard;
	}
	float depth = getDepthFromShadowMap(uTexture1, texCoord);
	depth = depth * 0.5 + 0.5;
	float dxc = abs(dFdx(texCoord.z));
	float dyc = abs(dFdy(texCoord.z));
	float dF = max(dxc, dyc) * 3.0;
	float bias = 1.0e-6 + dF;
	if(depth + 0.00002 < texCoord.z)
	{
		discard;
	}
	vec2 finalTexCoord = texCoord.xy;
    texCoord.x = uV3AffineX.x * finalTexCoord.x + uV3AffineX.y * finalTexCoord.y + uV3AffineX.z;
    texCoord.y = uV3AffineY.x * finalTexCoord.x + uV3AffineY.y * finalTexCoord.y + uV3AffineY.z;
    if(texCoord.x > 1.0 || texCoord.y > 1.0 || texCoord.x < 0.0 || texCoord.y < 0.0)
    {
        discard;
    }
	gl_FragColor = texture2D(uDiffuseTexture, texCoord.xy);
	gl_FragColor = feathering(gl_FragColor, texCoord.xy);
	//gl_FragColor.rgb = czm_adjustColor(gl_FragColor.rgb);
}`;const m2=Cesium.defined;function fx(){}fx[o(762)]=function(e,x,t){const a=o;var r=[];if(e.getElementsByTagNameNS)r=e[a(762)](x,t);else for(var n,s,u=e.getElementsByTagName("*"),c=0,f=u[a(3650)];c<f;++c)s=(n=u[c])[a(3657)]?n[a(3657)]+":"+t:t,t!=="*"&&s!==n[a(2265)]||x!=="*"&&x!==n[a(1880)]||r[a(2583)](n);return r},fx[o(3446)]=function(e,x,t){const a=o;var r=null;if(e[a(3446)])r=e[a(3446)](x,t);else for(var n,s=e.attributes,u=0,c=s.length;u<c;++u)if((n=s[u])[a(1880)]===x&&(n[a(3657)]?n[a(3657)]+":"+t:t)===n[a(2265)]){r=n;break}return r},fx[o(1624)]=function(e,x){const t=o;var a=x||"";if(e)for(var r=e[t(2246)];r;r=r[t(1656)])switch(r[t(3771)]){case 3:case 4:a+=r.nodeValue}return a},fx[o(750)]=function(e,x){const t=o;if(m2(e)){var a=e[t(1292)](x);if(a!==null){var r=parseFloat(a);return isNaN(r)?void 0:r}}},fx.queryStringAttribute=function(e,x){const t=o;if(m2(e)){var a=e[t(1292)](x);return a!==null?a:void 0}},fx[o(1258)]=function(e,x){const t=o;if(m2(e)){var a=e[t(1292)](x);return t(3578)!==(a=a[t(3193)]())&&(t(1044)===a||void 0)}},fx[o(3250)]=function(e,x,t){const a=o;if(m2(e))for(var r=e[a(1202)],n=r[a(3650)],s=0;s<n;s++){var u=r[s];if(t){if(u[a(2606)]===x&&t[a(3019)](u.namespaceURI)!==-1)return u}else if(u[a(2606)]===x)return u}},fx[o(3809)]=function(e,x,t){const a=o;if(m2(e)){for(var r=[],n=fx[a(762)](e,"*",x),s=n[a(3650)],u=0;u<s;u++){var c=n[u];t?c[a(2606)]===x&&t.indexOf(c[a(1880)])!==-1&&r[a(2583)](c):c.localName===x&&r[a(2583)](c)}return r}},fx[o(1271)]=function(e,x,t){const a=o;if(!m2(e))return[];for(var r=[],n=e[a(1202)],s=n[a(3650)],u=0;u<s;u++){var c=n[u];t?c[a(2606)]===x&&t[a(3019)](c[a(1880)])!==-1&&r[a(2583)](c):c.localName===x&&r[a(2583)](c)}return r},fx[o(1980)]=function(e,x,t){const a=o;var r=fx[a(3250)](e,x,t);if(m2(r)){var n=parseFloat(r[a(3512)]);return isNaN(n)?void 0:n}},fx.queryStringValue=function(e,x,t){const a=o;var r=fx.queryFirstNode(e,x,t);if(m2(r))return r[a(3512)].trim()},fx[o(3365)]=function(e,x,t){const a=o;var r=fx[a(3250)](e,x,t);if(m2(r)){var n=r[a(3512)][a(728)]();return n==="1"||/^true$/i[a(1528)](n)}};const rn=Cesium.BoundingSphere,tu=Cesium[o(2351)],dx=Cesium[o(516)],qr=Cesium[o(2756)],on=Cesium[o(1911)],tt=Cesium[o(549)],Bx=Cesium[o(692)],Yr=Cesium[o(820)],iu=Cesium.destroyObject,i2=Cesium.DeveloperError,Jr=Cesium[o(1370)],he=Cesium.Math,Mt=Cesium.Matrix4,sn=Cesium[o(1970)],it=Cesium[o(1680)],au=Cesium[o(1810)],nu=Cesium[o(2879)],ru=Cesium[o(1356)],Zr=Cesium[o(1431)],cn=Cesium.Pass,un=Cesium[o(2691)],ln=Cesium[o(3586)],fn=Cesium.DrawCommand,dn=Cesium[o(3154)],mn=Cesium[o(1869)],hn=Cesium[o(2416)],Cn=Cesium[o(2380)],ou=Cesium.ShaderSource,su=Cesium.BlendingState,cu=Cesium[o(442)],Pe=Cesium.StencilOperation,Yi=Cesium[o(2311)],uu=Cesium[o(3608)],bn=Cesium[o(1702)];function Ge(e){const x=o;if(!Bx(e))throw new i2(x(2881));if(!e.context.depthTexture)throw new i2(x(2361));this[x(1729)]=e,this[x(3068)]=void 0,this[x(2927)]=void 0,this._stencilCommand=void 0,this[x(3507)]=void 0,this[x(3979)]=new rn,this[x(1060)]=[0,0,0],this[x(1987)]=0,this[x(1668)]=0,this._roll=0,this[x(3451)]=90,this._verticalFov=60,this[x(2632)]=200,this[x(1745)]=new on(1,1,1,1),this[x(4172)]=!0,this._texture=void 0,this._segmentCount=20,this[x(3468)]=new Mt,this[x(3921)]=new Mt,this[x(3273)]=new Mt,this._update=!0,this[x(3596)]=void 0,this._brightness=1,this[x(665)]=1,this[x(3610)]=0,this[x(3693)]=1,this._gamma=1,this._featheringScale=0,this[x(761)]=new dx(1,0,0),this[x(1496)]=new dx(0,1,0),this[x(929)]=!0,this._visibleDistanceMax=500,this[x(2355)]=!1}function Qr(e){const x=o;Bx(e[x(1162)])&&(e[x(1162)][x(2457)]=e[x(1162)][x(2457)]&&e[x(1162)][x(2457)][x(3701)](),e[x(1162)][x(2360)]=e[x(1162)][x(2360)]&&e[x(1162)].shaderProgram[x(3701)](),e[x(1162)]=void 0),Bx(e[x(3507)])&&(e[x(3507)][x(2457)]=e[x(3507)][x(2457)]&&e[x(3507)][x(2457)][x(3701)](),e[x(3507)][x(2360)]=e[x(3507)].shaderProgram&&e[x(3507)][x(2360)][x(3701)](),e[x(3507)]=void 0),Bx(e[x(2927)])&&(e[x(2927)][x(2457)]=e[x(2927)][x(2457)]&&e[x(2927)][x(2457)][x(3701)](),e[x(2927)][x(2360)]=e[x(2927)][x(2360)]&&e[x(2927)][x(2360)][x(3701)](),e[x(2927)]=void 0)}function lu(e,x,t){const a=o,r=e[a(3451)]*he[a(3375)],n=e._verticalFov*he.RADIANS_PER_DEGREE,s=Math[a(3740)](.5*r)/Math[a(3740)](.5*n);e._distance;const u=Math[a(2092)](e[a(2632)],10),c=e[a(1987)]*he[a(3375)],f=e[a(1668)]*he[a(3375)],l=e._roll*he[a(3375)],m=dx[a(2084)](e[a(1060)])[0],h=t.camera,C=h.frustum[a(962)],p=h.frustum[a(3324)],_=h[a(2703)][a(4072)],y=h[a(2703)][a(3402)],A=new dx,b=h[a(1425)],B=h[a(1904)],T=h[a(2677)];dx[a(3552)](h[a(3009)],A),e[a(3068)][a(651)]=!0;const M=t.useLogDepth;e[a(3068)].beginFunc=function(){const w=a;t[w(2211)]=!1,dx[w(3552)](h[w(3009)],A),h.frustum[w(962)]=s,h[w(2703)][w(3324)]=s>=1?r:n,h[w(2703)][w(4072)]=1,h[w(2703)][w(3402)]=u,M&&(h[w(2703)][w(4072)]=.1,h.frustum.far=1e8),h[w(3670)]({destination:m,orientation:{heading:c,pitch:f,roll:l}}),Mt[w(3640)](h[w(2703)][w(1180)],h[w(1747)],e[w(3921)]),Mt[w(3552)](h.inverseViewMatrix,e._invertViewMatrix),dx[w(3552)](dx[w(535)],e[w(3979)][w(3157)]),e[w(3979)].radius=e._distance,rn[w(3011)](e._boundingSphere,e[w(3468)],e[w(3979)])},e._cameraDepthBuffer[a(4104)]=function(){const w=a;h.setView({destination:A,orientation:{heading:b,pitch:B,roll:T},convert:!1}),h.frustum[w(962)]=C,h[w(2703)][w(3324)]=p,h[w(2703)].near=_,h[w(2703)].far=y,t[w(2211)]=M,e[w(3068)][w(651)]=!1}}function fu(e,x,t){const a=o,r=(e[a(808)]+1)*(e[a(808)]+1)+1,n=tt.createTypedArray(tt[a(3148)],3*r);let s=3;const u=e._horizontalFov*he[a(3375)],c=e[a(981)]*he[a(3375)],f=(Math[a(3740)](.5*u),Math[a(3740)](.5*c));e[a(2632)];const l=e[a(2632)]*f,m=Math.PI-.5*u;let h=0,C=0,p=u/e[a(808)];for(let H=0;H<e._segmentCount+1;H++){h=m+H*p;const z=l/(e[a(2632)]/Math[a(1777)](h)),u0=Math[a(1512)](z),n0=-u0,N=2*u0/e[a(808)];for(let Y=0;Y<e[a(808)]+1;Y++)C=n0+Y*N,n[s++]=e[a(2632)]*Math[a(1777)](C)*Math[a(4186)](h),n[s++]=e._distance*Math[a(4186)](C),n[s++]=e._distance*Math.cos(C)*Math[a(1777)](h)}const _=2*(4+5*e[a(808)]+2*e[a(808)]*3),y=e[a(808)]*e[a(808)]*3*2+3*e[a(808)]*4,A=tt.createTypedArray(tt.UNSIGNED_SHORT,_),b=tt[a(3433)](tt[a(3884)],y);let B=0;for(let H=0;H<e._segmentCount;H++)for(let z=0;z<e[a(808)];z++)b[B++]=1+H+z*(e[a(808)]+1),b[B++]=1+H+1+z*(e[a(808)]+1),b[B++]=1+H+(z+1)*(e[a(808)]+1),b[B++]=1+H+1+z*(e[a(808)]+1),b[B++]=1+H+1+(z+1)*(e[a(808)]+1),b[B++]=1+H+(z+1)*(e[a(808)]+1);for(let H=0;H<e._segmentCount;H++)b[B++]=H+1+1,b[B++]=H+1,b[B++]=0,b[B++]=0,b[B++]=H+e[a(808)]*(e[a(808)]+1)+1,b[B++]=H+1+e[a(808)]*(e[a(808)]+1)+1;for(let H=0;H<e._segmentCount;H++)b[B++]=0,b[B++]=H*(e[a(808)]+1)+1,b[B++]=(H+1)*(e._segmentCount+1)+1,b[B++]=e[a(808)]+(H+1)*(e._segmentCount+1)+1,b[B++]=e[a(808)]+H*(e[a(808)]+1)+1,b[B++]=0;B=0,A[B++]=0,A[B++]=1,A[B++]=0,A[B++]=e[a(808)]+1,A[B++]=0,A[B++]=e[a(808)]*(e[a(808)]+1)+1,A[B++]=0,A[B++]=(e[a(808)]+1)*(e._segmentCount+1);for(let H=0;H<5;H++)for(let z=0;z<e[a(808)];z++)A[B++]=1+z+5*(e._segmentCount+1)*H,A[B++]=1+(z+1)+5*(e[a(808)]+1)*H;for(let H=0;H<5;H++)for(let z=0;z<e[a(808)];z++)A[B++]=1+(e[a(808)]+1)*z+5*H,A[B++]=1+(e[a(808)]+1)*(z+1)+5*H;const T=un[a(3369)]({context:x,typedArray:n,usage:ln.STATIC_DRAW}),M=[],w={aPosition:0};M[a(2583)]({index:w[a(1303)],vertexBuffer:T,componentsPerAttribute:3,componentDatatype:tt[a(3148)],offsetInBytes:0,strideInBytes:12,normalize:!1});const I=un.createIndexBuffer({context:x,typedArray:A,usage:ln[a(2109)],indexDatatype:Jr[a(3884)]}),P=un[a(2417)]({context:x,typedArray:b,usage:ln[a(2109)],indexDatatype:Jr[a(3884)]});e._lineCommand=new fn({primitiveType:sn[a(1692)],modelMatrix:e[a(3468)],boundingVolume:e[a(3979)],pass:cn[a(3270)],owner:e,cull:!0}),e._lineCommand[a(2457)]=new Cn({context:x,attributes:M,indexBuffer:I}),e[a(2927)][a(2360)]=hn[a(4073)]({context:x,vertexShaderSource:me,fragmentShaderSource:L2,attributeLocations:w}),e[a(2927)][a(2256)]=dn[a(4073)]({cull:{enabled:!1},depthTest:{enabled:!0}});const V=[];for(let H=0;H<6;H++)V[H]=new qr(0,0,0,0);e[a(2927)][a(2551)]={uDiffuseColor:function(){return e._hintLineColor},clip_mode:function(){return 0},clip_planes:function(){return V},clip_line_color:function(){return qr[a(1754)]}},e[a(1162)]=new fn({primitiveType:sn[a(3487)],modelMatrix:e[a(3468)],boundingVolume:e[a(3979)],pass:cn[a(3270)],owner:e,cull:!0}),e[a(1162)][a(2457)]=new Cn({context:x,attributes:M,indexBuffer:P}),e[a(1162)][a(2360)]=hn.fromCache({context:x,vertexShaderSource:me,fragmentShaderSource:L2,attributeLocations:w});let q={enabled:!0,frontFunction:Yi[a(3648)],frontOperation:{fail:Pe[a(3384)],zFail:Pe[a(3384)],zPass:Pe[a(2483)]},backFunction:Yi[a(3648)],backOperation:{fail:Pe.KEEP,zFail:Pe[a(3384)],zPass:Pe[a(1266)]},reference:0,mask:-1};e[a(1162)][a(2256)]=dn[a(4073)]({depthMask:!1,colorMask:{red:!1,green:!1,blue:!1,alpha:!1},depthTest:{enabled:!0,func:uu.GREATER},stencilTest:q,stencilMask:1}),e[a(1162)].uniformMap={uColor:function(){return on[a(2491)]}},e[a(3507)]=new fn({primitiveType:sn.TRIANGLES,modelMatrix:e._invertViewMatrix,boundingVolume:e._boundingSphere,pass:cn[a(3270)],owner:e,cull:!0}),e[a(3507)][a(2457)]=new Cn({context:x,attributes:M,indexBuffer:P});const X=new ou({name:a(2908),sources:[qi]});e[a(3507)].shaderProgram=hn[a(4073)]({context:x,vertexShaderSource:X,fragmentShaderSource:jr,attributeLocations:w}),q={enabled:!0,frontFunction:Yi[a(2837)],frontOperation:{fail:Pe[a(3384)],zFail:Pe[a(3384)],zPass:Pe[a(1266)]},backFunction:Yi[a(2837)],backOperation:{fail:Pe[a(3384)],zFail:Pe[a(3384)],zPass:Pe[a(1266)]},reference:0,mask:-1},e[a(3507)][a(2256)]=dn.fromCache({cull:{enabled:!1},depthTest:{enabled:!1},depthMask:!1,stencilTest:q,blending:su[a(2672)]}),e[a(3507)][a(2551)]={uRenderTextureMatrix:function(){return e._renderTextureMatrix},uTexture1_size:function(){const H=a,z=e._cameraDepthBuffer[H(2247)];return new tu(z[H(2375)],z[H(2388)])},uTexture1:function(){const H=a;return e._cameraDepthBuffer[H(2247)]},uDiffuseTexture:function(){return e[a(2115)]},uBrightness:function(){return e._brightness},uContrast:function(){return e._contrast},uHue:function(){return e[a(3610)]},uSaturation:function(){return e[a(3693)]},uOneOverGamma:function(){return 1/e._gamma},uFeatheringScale:function(){return e[a(2053)]},uV3AffineX:function(){return e[a(761)]},uV3AffineY:function(){return e[a(1496)]}}}function $r(e,x,t){const a=o;return dx[a(4114)](e[a(2307)],x[a(3157)])>t?!0:e[a(2703)][a(4189)](e[a(2307)],e[a(1871)],e[a(4103)])[a(2558)](x)===ru.OUTSIDE}function xo(e){const x=o,t=fx[x(987)](e,x(2161)),a=fx[x(3250)](e,x(3976)),r=fx[x(1980)](a,x(3863)),n=fx.queryNumericValue(a,"Vertical"),s=fx[x(1980)](e,x(812)),u=fx[x(1980)](e,x(3743)),c=fx.queryNumericValue(e,"Pitch"),f=fx[x(1980)](e,x(597)),l=fx[x(3250)](e,x(2156)),m=[0,0,0];m[0]=fx[x(1980)](l,"X"),m[1]=fx[x(1980)](l,"Y"),m[2]=fx[x(1980)](l,"Z");const h=fx[x(3250)](e,x(534)),C=fx[x(987)](h,"U"),p=fx.queryStringValue(h,"V");fx[x(987)](h,"W");const _=C[x(1830)](","),y=new dx(parseFloat(_[0]),parseFloat(_[1]),parseFloat(_[2])),A=p[x(1830)](","),b=new dx(parseFloat(A[0]),parseFloat(A[1]),parseFloat(A[2])),B=fx[x(3250)](e,x(455));let T;if(B){const M=he.toRadians(fx[x(1980)](B,x(2467))),w=he[x(3629)](fx[x(1980)](B,"Top")),I=he[x(3629)](fx.queryNumericValue(B,"Right")),P=he[x(3629)](fx.queryNumericValue(B,x(790))),V=new nu(M,P,I,w);let q=s*Math[x(1777)](he.toRadians(c));q=c<0?-q:q;const X=m[2]+q;T=rn[x(1920)](V,void 0,X)}return{videoName:t,viewPosition:m,heading:u,pitch:c,roll:f,horizontalFov:r,verticalFov:n,matrixU:y,matrixV:b,distance:s,boundingSphere:T}}function du(e,x){const t=o;let a=document[t(2904)](t(2233));Bx(a)||(a=document[t(1011)](t(2930)),a[t(1239)]("id",t(2233)),document.body.appendChild(a));const r=document[t(1011)]("video");return r.style=t(1804),r[t(1239)](t(2375),t(1064)),r[t(1239)](t(2388),t(2689)),r[t(1239)](t(2851),t(2851)),r[t(1239)](t(3812),t(3812)),r[t(1239)](t(1497),"crossorigin"),r[t(1239)](t(3612),e),r[t(1239)]("id",t(1196)+x),a[t(3122)](r),r}Object[o(2040)](Ge.prototype,{viewPosition:{get:function(){return this[o(1060)]},set:function(e){const x=o;this[x(1060)]=e,this[x(2739)]=!0}},direction:{get:function(){return this[o(1987)]},set:function(e){const x=o;this[x(1987)]=e,this[x(2739)]=!0}},pitch:{get:function(){return this[o(1668)]},set:function(e){this._pitch=e,this._update=!0}},roll:{get:function(){return this[o(2642)]},set:function(e){const x=o;this[x(2642)]=e,this[x(2739)]=!0}},horizontalFov:{get:function(){return this[o(3451)]},set:function(e){const x=o;this[x(3451)]=e,this[x(2739)]=!0}},verticalFov:{get:function(){return this._verticalFov},set:function(e){const x=o;this[x(981)]=e,this._update=!0}},distance:{get:function(){return this._distance},set:function(e){const x=o;if(e<=0)throw new i2(x(3142));this._distance=e,this[x(2739)]=!0}},featheringScale:{get:function(){return this._featheringScale},set:function(e){const x=o;if(e<0||e>1)throw new i2(x(1851));this._featheringScale=e}},hintLineColor:{get:function(){return this._hintLineColor},set:function(e){const x=o;Bx(e)&&(this[x(1745)]=on[x(3552)](e,this[x(1745)]))}},hintLineVisible:{get:function(){return this._hintLineVisible},set:function(e){const x=o;this[x(4172)]=e}},brightness:{get:function(){return this[o(1107)]},set:function(e){const x=o;it[x(1556)][x(1232)][x(4047)](x(1447),e,0),this[x(1107)]=e}},contrast:{get:function(){return this._contrast},set:function(e){const x=o;it[x(1556)].number[x(4047)](x(1833),e,0),this[x(665)]=e}},hue:{get:function(){return this._hue},set:function(e){const x=o;it[x(1556)][x(1232)][x(4047)](x(4119),e,0),this._hue=e}},saturation:{get:function(){return this._saturation},set:function(e){const x=o;it.typeOf[x(1232)][x(4047)](x(1113),e,0),this[x(3693)]=e}},gamma:{get:function(){return this[o(1188)]},set:function(e){const x=o;it[x(1556)].number[x(3977)](x(2975),e,0),this[x(1188)]=e}},visible:{get:function(){return this._visible},set:function(e){const x=o;it.typeOf[x(2283)](x(2803),e),this[x(929)]=e}},visibleDistanceMax:{get:function(){return this[o(1023)]},set:function(e){const x=o;it[x(1556)].number("ProjectionImage.visibleDistance",e),this[x(1023)]=e}}}),Ge[o(3096)][o(2696)]=function(e){const x=o,t=e.context,a=e[x(3138)],r=e[x(3907)];e[x(1479)]||!this[x(929)]||r[x(1696)]||Bx(this[x(1117)])&&$r(r,this[x(1117)],this[x(1023)])||this._boundingSphere[x(1707)]!==0&&!this[x(2739)]&&$r(r,this._boundingSphere,this._visibleDistanceMax)||(Mt.multiply(this[x(3921)],r.inverseViewMatrix,this._renderTextureMatrix),Bx(this._video)&&this[x(3596)][x(1342)]>=2&&(Bx(this._texture)?this[x(2115)].copyFrom(this[x(3596)]):this._texture=new mn({context:t,source:this[x(3596)]})),Bx(this[x(2115)])&&(this[x(1729)],this[x(2739)]&&(Bx(this[x(3068)])||(this._cameraDepthBuffer=new lx(t)),this[x(2739)]=!1,Qr(this),lu(this,0,e),fu(this,t)),Bx(this[x(3068)].depthTexture)&&(Bx(this[x(1162)])&&a[x(2583)](this[x(1162)]),Bx(this[x(3507)])&&a.push(this[x(3507)]),Bx(this[x(2927)])&&this[x(4172)])))},Ge[o(3096)][o(3792)]=function(e){const x=o;if(!Bx(e))throw new i2(x(2980));if(!Bx(e.url)&&!Bx(e[x(1712)])&&!Bx(e[x(3186)]))throw new i2("options.url or options.video or options.image are required.");if(Bx(e[x(2547)])){const t=bn[x(1554)](e[x(2547)]),a=this;t[x(3941)]().then(r=>{const n=x;Bx(a._texture)&&a[n(2115)][n(3701)](),a[n(2115)]=new mn({context:a.scene[n(584)],source:r})})}else Bx(e[x(3186)])?Bx(this._texture)?this[x(2115)][x(3089)](e[x(3186)]):this[x(2115)]=new mn({context:this[x(1729)][x(584)],source:e[x(3186)]}):this._video=e.video},Ge.prototype[o(3835)]=function(e){const x=o;if(e[0]===this[x(1060)][0]&&e[1]===this._viewPosition[1]&&e[2]===this[x(1060)][2])throw new i2(x(642));const t=this[x(1729)][x(3907)],a=t[x(2509)];let r,n;if(this[x(1729)][x(443)]===cu.SCENE3D)r=dx[x(2084)](e)[0],n=dx[x(2084)](this[x(1060)])[0];else{const _=Zr[x(2136)](e[0],e[1],e[2]);r=a[x(3901)](_,new dx);const y=Zr[x(2136)](this[x(1060)][0],this[x(1060)][1],this[x(1060)][2]);n=a.project(y,new dx)}const s=new dx;dx[x(758)](r,n,s);const u=dx.magnitude(s);dx[x(1586)](s,s),this[x(4114)]=u;const c=t[x(1425)],f=t.pitch,l=t.roll,m=new dx;dx[x(3552)](t[x(3009)],m);const h=s[x(3552)]();let C=n[x(3552)]();C=dx[x(1586)](C,C),Math.abs(dx[x(2528)](C,h))>=1&&(C=Math[x(905)](dx[x(2528)](h,dx[x(1507)]))<1?dx[x(3552)](dx[x(1507)],C):dx[x(3552)](dx.UNIT_Z,C));let p=new dx;dx[x(2550)](C,h,p),p=dx[x(1586)](p,p),dx[x(2550)](h,p,C),C=dx.normalize(C,C),t[x(3670)]({destination:n,orientation:{direction:h,up:C},convert:!1}),this.direction=t[x(1425)]*he.DEGREES_PER_RADIAN,this[x(1904)]=t[x(1904)]*he[x(4140)],t[x(3670)]({destination:m,orientation:{heading:c,pitch:f,roll:l},convert:!1})},Ge[o(3096)][o(1125)]=function(e){const x=o;if(!Bx(e))throw new i2(x(1074));const t=this;return bn[x(1554)](e)[x(1312)]()[x(4167)](function(a){const r=x,n=xo(a[r(2246)]);t[r(3249)]=n.heading,t[r(1904)]=Yr(n.pitch,t[r(1904)]),t[r(2642)]=Yr(n[r(2677)],t[r(2642)]),t[r(3946)]=n[r(3946)],t[r(1960)]=n[r(1960)],dx[r(3552)](n[r(453)],t[r(761)]),dx.clone(n[r(3638)],t[r(1496)]),t[r(4114)]=n[r(4114)],t.viewPosition=n[r(1714)],t[r(1117)]=n[r(2215)]},a=>{console[x(2111)](a)})},Ge.fromInfo=function(e,x,t){const a=o;if(!Bx(e))throw new i2(a(3059));if(!Bx(x))throw new i2("No url provided.");return bn.createIfNeeded(x).fetchXML()[a(4167)](function(r){const n=a,s={},u=r.firstChild;for(let c=0,f=u[n(2749)][n(3650)];c<f;c++){const l=xo(u[n(2749)][c]);let m=l[n(2183)];m=Bx(t)?au(t)+l[n(2183)]:x[n(3403)](0,x[n(3308)]("/")+1)+l[n(2183)];const h=new Ge(e),C=du(m,h[n(525)]);h[n(1714)]=l[n(1714)],h[n(3249)]=l[n(1425)],h.pitch=l.pitch,h[n(3946)]=l[n(3946)],h[n(1960)]=l[n(1960)],dx[n(3552)](l[n(453)],h._v3AffineX),dx[n(3552)](l[n(3638)],h[n(1496)]),h[n(4114)]=l.distance,h[n(3792)]({video:C}),h[n(3979)]=XML=l[n(2215)],C[n(2004)](n(579),function(p){p[n(588)]()}[n(2383)](C,h)),s[l[n(2183)]]=h}return s},r=>{console.error(r)})},Ge[o(3096)][o(588)]=function(){const e=o;this[e(2355)]||(this[e(2355)]=!0,this[e(1729)][e(2572)][e(1050)](this),this[e(3396)]=this[e(1729)].preUpdate[e(2004)](x=>{const t=e;Bx(this[t(3068)])&&this[t(3068)][t(1143)](x)},this))},Ge[o(3096)][o(2748)]=function(){const e=o;this.isBuild&&(this.isBuild=!1,this[e(3396)](),this[e(1729)].primitives[e(1578)](this))},Ge[o(3096)].destroy=function(){const e=o,x=document[e(2904)]("projection-image-"+this[e(525)]);if(x){const t=x.parentNode;t.removeChild(x),t[e(2749)][e(3650)]===0&&t[e(3988)].removeChild(t)}return this[e(3068)]=this[e(3068)]&&this[e(3068)][e(3701)](),Qr(this),this._texture=this[e(2115)]&&!this[e(2115)][e(3777)]()&&this[e(2115)][e(3701)](),this[e(1729)][e(2572)][e(1578)](this),iu(this)};var eo=`attribute vec2 aSideness;
attribute vec3 aPosition0;
attribute vec3 aPosition1;

uniform float uLineWidth;
uniform mat4 uRenderTextureMatrix;

varying vec4 renderTextureCoord;

vec4 resolvePosition(vec4 viewPosV0, vec4 viewPosV1, vec2 sidenessNorm) {
    vec2 sideness = sidenessNorm * 2.0 - 1.0;
    vec4 viewPos = mix(viewPosV0, viewPosV1, sidenessNorm.y);
    vec4 projPosV0 = czm_projection * viewPosV0;
    vec4 projPosV1 = czm_projection * viewPosV1;
    vec4 projPos = czm_projection * viewPos;
    vec3 screenSpaceLineNDC = (projPosV1.xyz / projPosV1.w - projPosV0.xyz / projPosV0.w);
    vec2 uNDCToPixel = vec2(czm_viewport.z / 2.0, czm_viewport.w / 2.0);
    vec2 screenSpaceLinePixels = screenSpaceLineNDC.xy * uNDCToPixel;
    float lineLengthPixels = length(screenSpaceLinePixels);
    float dzPerPixel = screenSpaceLineNDC.z / lineLengthPixels;
    vec2 screenSpaceDirection = screenSpaceLinePixels / lineLengthPixels;
    vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x) * sideness.x;
    vec2 uPixelToNDC = vec2(2.0 / czm_viewport.z, 2.0 / czm_viewport.w);
    float halfLineWidth = max(uLineWidth, 1.0) * 0.5;
    vec2 halfLineWidthNDC = halfLineWidth * uPixelToNDC;
    vec2 ndcOffset = screenSpaceDirection * halfLineWidthNDC + perpendicularScreenSpaceDirection * halfLineWidthNDC;
    projPos.xy += ndcOffset * projPos.w;
    projPos.z += (dzPerPixel * halfLineWidth) * sideness.y * projPos.w;
    return projPos;
}

void main() {
    vec4 viewPosV0 = czm_modelView * vec4(aPosition0, 1.0);
    vec4 viewPosV1 = czm_modelView * vec4(aPosition1, 1.0);
    gl_Position = resolvePosition(viewPosV0, viewPosV1, aSideness);
    vec4 viewPos = czm_inverseProjection * gl_Position;
    renderTextureCoord = uRenderTextureMatrix * viewPos;
}`,to=`uniform sampler2D uTexture0;
uniform vec4 uVisibleColor;
uniform vec4 uHiddenColor;
varying vec4 renderTextureCoord;

void main() {
    vec4 resultColor = uVisibleColor;
    vec4 texCoord = renderTextureCoord / renderTextureCoord.w;
    float depth = texCoord.z * 0.5 + 0.5;
    texCoord.xy = texCoord.xy * 0.5 + 0.5;
    float z_window = czm_unpackDepth(texture2D(uTexture0, texCoord.xy));
    if(z_window < depth && z_window > 0.0 && z_window < 1.0)
    {
        resultColor = uHiddenColor;
    }
    gl_FragColor = resultColor;
}`;function we(e){const x=o;this[x(1729)]=e,this[x(2423)]=void 0,this[x(1060)]=[0,0,0],this[x(1019)]=new Cesium.Cartesian3,this[x(3438)]=new Cesium[x(2902)],this._renderTextureMatrixs=new Cesium.AssociativeArray,this._visibleColor=new Cesium[x(1911)](0,1,0,1),this._hiddenColor=new Cesium.Color(1,0,0,1),this[x(1979)]=new Cesium[x(2902)],this._sightlineCameras=new Cesium[x(2902)],this[x(2739)]=!1,this[x(3422)]=!1,this[x(3427)]=new Cesium[x(2902)],this[x(2028)]=new Cesium.AssociativeArray,this[x(2074)]=new Cesium[x(2902)],this[x(2431)]=2,this[x(2355)]=!1}function io(e,x,t){const a=o,r=t.camera,n=r[a(2509)];let s;if(e[a(1729)][a(443)]===Cesium[a(442)].SCENE3D)s=Cesium.Cartesian3[a(2084)](e[a(1060)])[0];else{const w=Cesium.Cartographic.fromDegrees(e[a(1060)][0],e[a(1060)][1],e[a(1060)][2]);s=n[a(3901)](w,new Cesium[a(516)])}const u=new Cesium[a(516)](0,0,0);e._targetPoints._hash;let c=0;const f=e[a(976)];let l;if(e.scene[a(443)]===Cesium[a(442)][a(3940)])l=Cesium[a(516)][a(2084)](f)[0];else{const w=Cesium[a(1431)][a(2136)](f[0],f[1],f[2]);l=n[a(3901)](w,new Cesium[a(516)])}const m=new Cesium[a(516)];Cesium[a(516)][a(758)](l,s,m),Cesium[a(516)].normalize(m,m),Cesium[a(516)].add(u,m,u),c=Math[a(2092)](c,Cesium[a(516)].distance(l,s)),Cesium.Cartesian3.normalize(u,u),Cesium[a(516)].clone(u,e[a(1019)]);const h=new Cesium.Cartesian3,C=new Cesium[a(516)],p=new Cesium.Cartesian3;let _=r[a(2703)].fov;Cesium.Cartesian3.clone(r[a(3009)],h),Cesium[a(516)][a(3552)](r.direction,C),Cesium[a(516)][a(3552)](r.up,p);const y=2*Cesium[a(2746)].PI/3,A=r[a(2703)][a(4072)],b=r[a(2703)][a(3402)],B=t[a(2211)],T=e._currentTargetName;let M=e._depthBuffers.get(T);Cesium[a(692)](M)||(M=new lx(x),e[a(2028)][a(2590)](T,M)),M[a(651)]=!0,M[a(1339)]=()=>{const w=a;t.useLogDepth=!1,Cesium.Cartesian3[w(3552)](r[w(3009)],h),Cesium.Cartesian3[w(3552)](r[w(3249)],C),Cesium[w(516)][w(3552)](r.up,p),_=r[w(2703)].fov,r.frustum[w(3324)]=y;const I=u;let P=new Cesium[w(516)];P=Cesium[w(516)][w(3552)](s,P),P=Cesium.Cartesian3.normalize(P,P),Math[w(905)](Cesium[w(516)][w(2528)](P,I))>=1&&(P=Math.abs(Cesium[w(516)][w(2528)](I,Cesium.Cartesian3.UNIT_Y))<1?Cesium.Cartesian3[w(3552)](Cartesian3[w(1507)],P):Cesium[w(516)][w(3552)](Cesium.Cartesian3.UNIT_Z,P));let V=new Cesium[w(516)];Cesium[w(516)][w(2550)](P,I,V),V=Cesium[w(516)][w(1586)](V,V),Cesium[w(516)][w(2550)](I,V,P),P=Cesium[w(516)].normalize(P,P);const q={destination:s,orientation:{direction:I,up:P},convert:!1};r.setView(q),e[w(2595)].set(T,q),r[w(2703)].near=1,r[w(2703)][w(3402)]=Math[w(2892)](Math.max(c,10));const X=e.scene[w(4025)][w(4025)];for(let z=0;z<X[w(3650)];++z){const u0=X[z];Cesium[w(692)](u0[w(2450)])||(u0.preShow=u0[w(1962)],u0[w(1962)]=!1)}const H=new Cesium[w(2235)];Cesium[w(2235)].multiply(r.frustum.projectionMatrix,r[w(1747)],H),e[w(3438)][w(2590)](T,H),e[w(1374)].set(T,new Cesium[w(2235)])},M.endFunc=function(){const w=a;t[w(2211)]=B,r[w(2703)][w(3324)]=_,r[w(3670)]({destination:h,orientation:{direction:C,up:p},convert:!1}),r[w(2703)][w(4072)]=A,r[w(2703)][w(3402)]=b,M[w(651)]=!1;const I=e[w(1729)][w(4025)]._primitives;for(let P=0;P<I[w(3650)];++P){const V=I[P];Cesium[w(692)](V[w(2450)])||(V[w(1962)]=V.preShow)}if(!e._update){const P=no(e,T);e._barrierPointArray[w(2590)](T,P)}}}Object.defineProperties(we[o(3096)],{viewPosition:{get:function(){return this[o(1060)]},set:function(e){const x=o;this[x(1060)]=e,this[x(3422)]=!0,this[x(2739)]=!0}},visibleColor:{get:function(){return this[o(3656)]},set:function(e){const x=o;e!==void 0&&(this[x(3656)]=Cesium[x(1911)][x(3552)](e,this[x(3656)]))}},hiddenColor:{get:function(){return this._hiddenColor},set:function(e){const x=o;e!==void 0&&(this[x(2688)]=Cesium[x(1911)][x(3552)](e,this._hiddenColor))}},lineWidth:{get:function(){return this[o(2431)]},set:function(e){const x=o;e!==void 0&&(this[x(2431)]=e)}}}),we[o(3096)][o(1042)]=function(e){const x=o,t=e[x(3085)],a=e[x(3009)];return!(!Cesium[x(692)](t)||!Cesium[x(692)](a))&&(this[x(1979)][x(2590)](t,a),this[x(3363)]=t,this._currentTargetPoint=a,this[x(2739)]=!0,this[x(3427)][x(2590)](t,{}),!0)},we[o(3096)][o(3651)]=function(e){const x=o;this[x(3427)].remove(e);const t=this[x(1979)][x(1578)](e);if(this[x(2595)][x(1578)](e),!t)return!1;this._viewProjMatrixs.remove(e),this[x(1374)][x(1578)](e);const a=this[x(2028)][x(3715)](e);Cesium[x(692)](a)&&(a[x(3701)](),this._depthBuffers[x(1578)](e));const r=this[x(2074)][x(3715)](e);if(Cesium.defined(r)){for(let n=0;n<r[x(3650)];n++){const s=r[n];s.shaderProgram=s[x(2360)]&&!s.shaderProgram[x(3777)]()&&s[x(2360)][x(3701)](),s.vertexArray=s[x(2457)]&&!s[x(2457)][x(3777)]()&&s.vertexArray.destroy()}this[x(2074)][x(1578)](e)}return this[x(2739)]=!0,!0},we[o(3096)].removeAllTargetPoint=function(){const e=o;this[e(3427)][e(1470)](),this[e(1979)][e(1470)](),this[e(2595)][e(1470)]();for(let x in this[e(2028)]._hash)this[e(2028)]._hash.hasOwnProperty(x)&&this._depthBuffers[e(2241)][x][e(3701)]();this._depthBuffers.removeAll();for(let x=0,t=this._commands[e(3650)];x<t;x++){const a=this[e(2074)][e(2496)][x];for(let r=0;r<a.length;r++){const n=a[r];n[e(2360)]=n[e(2360)]&&!n[e(2360)][e(3777)]()&&n[e(2360)][e(3701)](),n[e(2457)]=n[e(2457)]&&!n[e(2457)][e(3777)]()&&n[e(2457)].destroy()}}this[e(2074)].removeAll(),this[e(3438)][e(1470)](),this._renderTextureMatrixs.removeAll(),this[e(2739)]=!0};const mu=new Cesium[o(2235)](0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1);let si=null;function hu(e){const x=o;if(Cesium[x(692)](si))return si;const t=new Float32Array(8);let a=0;return t[a++]=0,t[a++]=0,t[a++]=0,t[a++]=1,t[a++]=1,t[a++]=1,t[a++]=1,t[a++]=0,si=Cesium[x(2691)][x(3369)]({context:e,typedArray:t,usage:Cesium.BufferUsage[x(2109)]}),si[x(2229)]=!1,si}function Cu(e,x){const t=o,a=Cesium[t(549)].createTypedArray(Cesium[t(549)][t(3148)],6);return a[0]=0,a[1]=0,a[2]=0,a[3]=x.x,a[4]=x.y,a[5]=x.z,Cesium[t(2691)][t(3369)]({context:e,typedArray:a,usage:Cesium.BufferUsage[t(2109)]})}function bu(){const e=new Uint16Array(6);let x=0;return e[x++]=2,e[x++]=1,e[x++]=0,e[x++]=3,e[x++]=2,e[x++]=0,e}let Ji=null;function pu(e){const x=o;return Cesium.defined(Ji)||(Ji=Cesium[x(2691)].createIndexBuffer({context:e,typedArray:bu(),usage:Cesium[x(3586)].STATIC_DRAW,indexDatatype:Cesium[x(1370)][x(3884)]}),Ji[x(2229)]=!1),Ji}let pn=new Cesium[o(1911)],vn=new Cesium.Color;function ao(e,x,t){const a=o,r=t.camera[a(2509)];let n;if(e.scene[a(443)]===Cesium[a(442)].SCENE3D)n=Cesium[a(516)].fromDegreesArrayHeights(e[a(1060)])[0];else{const b=Cesium.Cartographic.fromDegrees(e[a(1060)][0],e._viewPosition[1],e[a(1060)][2]);n=r[a(3901)](b,new Cesium[a(516)])}const s=e[a(976)];let u;if(e.scene[a(443)]===Cesium[a(442)][a(3940)])u=Cesium.Cartesian3.fromDegreesArrayHeights(s)[0];else{let b=Cesium[a(1431)].fromDegrees(s[0],s[1],s[2]);u=r.project(b,new Cesium.Cartesian3)}const c=new Cesium.Cartesian3;Cesium[a(516)].subtract(u,n,c);const f=hu(x),l=Cu(x,c),m=[],h={aSideness:0};m[a(2583)]({index:h.aSideness,vertexBuffer:f,componentsPerAttribute:2,componentDatatype:Cesium[a(549)][a(3148)],offsetInBytes:0,strideInBytes:8,normalize:!1}),h[a(4142)]=1,m[a(2583)]({index:h[a(4142)],vertexBuffer:l,componentsPerAttribute:3,componentDatatype:Cesium[a(549)].FLOAT,offsetInBytes:0,strideInBytes:12,normalize:!1,instanceDivisor:1}),h.aPosition1=2,m[a(2583)]({index:h[a(3252)],vertexBuffer:l,componentsPerAttribute:3,componentDatatype:Cesium[a(549)][a(3148)],offsetInBytes:12,strideInBytes:12,normalize:!1,instanceDivisor:1});const C=pu(x),p=new Cesium[a(1900)]({primitiveType:Cesium[a(1970)][a(3487)],pass:Cesium[a(2798)][a(3270)],owner:e,boundingVolume:new Cesium[a(1475)](n,1e4),cull:!1});let _=new Cesium[a(2235)];Cesium[a(2235)].clone(Cesium[a(2235)][a(3447)],_),Cesium[a(2235)][a(1538)](_,n,_),e[a(1729)][a(443)]!==Cesium.SceneMode[a(3940)]&&Cesium[a(2235)][a(3640)](mu,_,_),p[a(931)]=_,p[a(2457)]=new Cesium[a(2380)]({context:x,attributes:m,indexBuffer:C}),p.shaderProgram=Cesium[a(2416)][a(4073)]({context:x,vertexShaderSource:eo,fragmentShaderSource:to,attributeLocations:h}),p[a(2256)]=Cesium[a(3154)].fromCache({cull:{enabled:!1},depthTest:{enabled:!0}});const y=e[a(3363)];p[a(2551)]={uRenderTextureMatrix:function(){const b=a;return e[b(1374)][b(3715)](y)},uTexture0:function(){const b=a;return e._depthBuffers[b(3715)](y)[b(2247)]},uVisibleColor:function(){return e._visibleColor},uHiddenColor:function(){return e[a(2688)]},uLineWidth:function(){return e[a(2431)]}};const A=Cesium.DrawCommand.shallowClone(p);A[a(621)]=Cesium[a(2798)][a(3270)],A.renderState=Cesium.RenderState[a(4073)]({depthMask:!1,depthTest:{enabled:!1},blending:Cesium[a(2147)][a(2672)]}),A[a(2551)][a(888)]=function(){const b=a;return Cesium[b(1911)].clone(e[b(2688)],pn),pn.alpha=.2,pn},A.uniformMap.uVisibleColor=function(){const b=a;return Cesium[b(1911)][b(3552)](e[b(3656)],vn),vn[b(2089)]=.2,vn},e[a(2074)][a(2590)](y,[A,p])}function no(e,x){const t=o,a=e[t(1979)][t(3715)](x);if(!Cesium[t(692)](a))return;const r={isViewer:!0},n=Cesium[t(516)][t(2084)](a)[0],s=new Cesium[t(2756)](n.x,n.y,n.z,1),u=e[t(3438)][t(3715)](x);if(Cesium.Matrix4[t(3688)](u,s,s),Cesium[t(2756)][t(2776)](s,s.w,s),s.x>1||s.x<-1||s.y>1||s.y<-1)return r;const c=e[t(1729)].context,f=c[t(2151)],l=c[t(1079)],m=(.5*s.x+.5)*f-.5,h=(.5*s.y+.5)*l-.5;if(m<0||h<0)return r;const C=Math[t(3720)](m),p=m-C,_=Math[t(3720)](h),y=h-_,A=e[t(2028)][t(3715)](x),b=c[t(1422)]({framebuffer:A[t(3265)],x:C,y:_,width:2,height:2}),B=new Cesium.Cartesian4;new Cesium[t(516)];const T=new Cesium.Cartesian4(1/255,1/65025,1/160581375,1/4228250625),M=[];e[t(1729)];const w=c[t(3995)][t(1398)];w.x,w.y;for(let P=0;P<4;P++){const V=Cesium.Cartesian4[t(3562)](b,4*P,B),q=Cesium.Cartesian4[t(2528)](V,T);if(!(q<1&&q>0))return r;M[P]=2*q-1}const I=(1-y)*((1-p)*M[0]+p*M[1])+y*((1-p)*M[2]+p*M[3]);if(s.z-I>1e-6){const P=new Cesium[t(2235)];Cesium.Matrix4[t(1201)](u,P),s.z=I,Cesium[t(2235)][t(3688)](P,s,s),Cesium[t(2756)][t(2776)](s,s.w,s);const V=Cesium[t(1431)][t(3993)](s);r[t(3009)]=V,r[t(1174)]=!1,r.st=new Cesium[t(2351)](C,_)}return r}var An,ro,ci;we[o(3096)].update=function(e){const x=o;if(e.fbo||e[x(3606)][x(3869)]||e[x(3606)][x(2832)])return;const t=e.camera;for(let a in this[x(3438)][x(2241)])if(this[x(3438)][x(2241)][x(2364)](a)){const r=this._viewProjMatrixs[x(3715)](a);Cesium[x(2235)][x(3640)](r,t[x(943)],this[x(1374)][x(3715)](a))}if(this[x(2739)]){if(this[x(2739)]=!1,this[x(1979)][x(2496)].length<1)return;if(this._updateAll){this._updateAll=!1;for(let a in this[x(1979)][x(2241)])if(this[x(1979)]._hash[x(2364)](a)){const r=this._targetPoints[x(3715)](a);this[x(976)]=r,this[x(3363)]=a,io(this,this[x(1729)].context,e),ao(this,this[x(1729)][x(716)],e)}}else io(this,this[x(1729)][x(716)],e),ao(this,this[x(1729)][x(716)],e)}if(!e[x(3606)].pick){const a=this._commands[x(3650)];for(let r=0;r<a;r++)if(Cesium.defined(this._depthBuffers[x(2496)][r][x(3265)])){const n=this._commands[x(2496)][r];e[x(3138)][x(2583)](n[0]),e[x(3138)][x(2583)](n[1])}}},we[o(3096)][o(4030)]=function(e,x){const t=o,a=this[t(3427)][t(3715)](e);return Cesium.defined(x)&&x[t(2383)](null,a)(),a},we[o(3096)][o(588)]=function(){const e=o;this[e(2355)]||(this[e(2355)]=!0,this[e(1729)][e(2572)].add(this),this[e(3396)]=this[e(1729)][e(2077)][e(2004)]((x,t)=>{const a=e;for(let r in this._depthBuffers._hash)this._depthBuffers[a(2241)][a(2364)](r)&&this[a(2028)][a(2241)][r][a(1143)](x)},this))},we.prototype[o(2748)]=function(){const e=o;this[e(2355)]&&(this.isBuild=!1,this[e(3396)](),this.scene[e(2572)][e(1578)](this))},Cesium.FeatureDetection[o(3861)]()&&(An=new ArrayBuffer(4),ro=new Uint32Array(An),ci=new Uint8Array(An));const vu=function(e,x,t,a){return ci[0]=e,ci[1]=x,ci[2]=t,ci[3]=a,ro[0]},Au=function(e,x){const t=o;return Cesium[t(1680)].defined(t(1567),x),e._pickObjects[x]};var yu=3,_u=3,ui=new Cesium[o(1691)](0,0,yu,_u),gu=new Cesium[o(1911)](0,0,0,0);const Tu=function(e,x){const t=o;var a=e._context,r=e[t(3303)];e._view=r;var n=r[t(2548)];n.x=0,n.y=0,n[t(2375)]=a.drawingBufferWidth,n[t(2388)]=a[t(1079)],ui.x=0,ui.y=0,ui[t(2375)]=a.drawingBufferWidth,ui.height=a[t(1079)];var s=a.uniformState,u=e._frameState;e[t(1260)](e),u[t(3664)]=!1,u[t(3606)][t(3869)]=!0,s[t(2696)](u);var c=r[t(2171)][t(4050)](ui,n),f=e.camera,l=Cesium[t(516)].clone(f.position),m=f.heading,h=f[t(1904)],C=f.roll;e[t(3907)][t(3670)](x),e[t(2495)](),e[t(1569)](c,gu),e[t(4126)](c),a[t(3535)](),f[t(3670)]({destination:l,orientation:{heading:m,pitch:h,roll:C}})};function Bu(e,x){const t=o;var a=no(e,x);if(Cesium[t(692)](a)&&Cesium[t(692)](a[t(3009)])&&Cesium[t(692)](a.st))return a.st}we[o(3096)][o(982)]=function(){const e=o;for(var x={},t=Object[e(3360)](this._targetPoints._hash),a=0,r=t.length;a<r;a++){var n=t[a];Tu(this[e(1729)],this._sightlineCameras[e(3715)](n));var s=this[e(1729)][e(3303)][e(2171)],u=this[e(1729)]._context,c=Bu(this,n);if(Cesium[e(692)](c)){var f=u.readPixels({x:c.x,y:c.y,width:1,height:1,framebuffer:s[e(1015)]}),l=vu(f[0],f[1],f[2],f[3]),m=Au(u,l);if(Cesium[e(692)](m)){var h=m[e(1054)].id;l=m.id,Cesium[e(692)](x[h])||(x[h]=[]),x[h].indexOf(l)===-1&&x[h][e(2583)](l)}}}return x},we[o(3096)][o(3777)]=function(){return!1},we[o(3096)][o(3701)]=function(){const e=o;return this[e(3678)](),this.scene[e(2572)][e(1578)](this),Cesium[e(1136)](this)};var yn=`attribute vec4 aPosition;
attribute vec4 aTexCoord0;

void main()
{
   gl_Position = czm_modelViewProjection * aPosition;
}`,_n=o(1379);window[o(4181)]=Cesium;const Eu=Cesium[o(2902)],Pu=Cesium[o(1475)],ee=Cesium.Cartesian3,He=Cesium[o(2756)],oo=Cesium[o(1431)],so=Cesium[o(1911)],ze=Cesium[o(549)],Kx=Cesium.defined,wu=Cesium[o(1136)],gn=Cesium[o(1785)],co=Cesium[o(1370)],Zi=Cesium[o(2746)],at=Cesium[o(2235)],uo=Cesium.PrimitiveType;Cesium[o(4081)],Cesium[o(3117)];const lo=Cesium[o(2798)],Qi=Cesium[o(2691)],$i=Cesium[o(3586)],Su=Cesium.ContextLimits,fo=Cesium[o(1900)],mo=Cesium[o(3154)],ho=Cesium[o(2416)],Co=Cesium.VertexArray,Tn=Cesium[o(442)],Mu=Cesium[o(3709)],bo=Cesium[o(1607)],po=Cesium[o(1755)];function _e(e){const x=o;if(!Kx(e))throw new gn(x(2881));if(!e.context[x(2247)])throw new gn(x(2361));if(Su.maximumVertexTextureImageUnits<1)throw new gn(x(2181));this[x(1244)]={LINE:0,FACE:1},this[x(1729)]=e,this[x(2372)]=void 0,this[x(2423)]=void 0,this._lineCommand=void 0,this[x(637)]=void 0,this[x(3979)]=new Pu,this[x(1060)]=[0,0,0],this[x(1987)]=0,this._pitch=0,this[x(3735)]=this._displayMode.LINE,this._invertViewMatrix=new at,this[x(1597)]=new at,this._color=new so(1,0,0,1),this[x(3050)]=-1,this[x(681)]=!1,this._limitBodys=new Eu,this[x(2739)]=!1,this[x(3323)]=[],this[x(2431)]=1,this[x(886)]=e[x(2572)][x(1050)](new Mu),this.isBuild=!1}function Bn(e){const x=o;Kx(e._command)&&(e[x(2423)][x(2457)]=e[x(2423)][x(2457)]&&e[x(2423)].vertexArray.destroy(),e[x(2423)][x(2360)]=e[x(2423)][x(2360)]&&e[x(2423)][x(2360)][x(3701)](),e[x(2423)]=void 0),Kx(e[x(2927)])&&(e._lineCommand.vertexArray=e[x(2927)][x(2457)]&&e[x(2927)].vertexArray.destroy(),e[x(2927)][x(2360)]=e[x(2927)][x(2360)]&&e._lineCommand.shaderProgram[x(3701)](),e[x(2927)]=void 0),Kx(e[x(3494)])&&(e._faceCommand[x(2457)]=e[x(3494)][x(2457)]&&e[x(3494)][x(2457)][x(3701)](),e[x(3494)][x(2360)]=e[x(3494)][x(2360)]&&e[x(3494)][x(2360)][x(3701)](),e._faceCommand=void 0)}function Ru(e,x,t){const a=o,r=e[a(1060)][2];let n=5e-4*r;n=n<1?1:n;const s=Math.abs(r)+6378137;let u=Math[a(1495)]((s-6378137)*(s+6378137));r<0&&u<5e4?u=5e4:r<100&&r>0&&(u*=50);const c=e[a(1987)]*Zi.RADIANS_PER_DEGREE,f=e._pitch*Zi[a(3375)],l=t[a(3907)],m=l[a(2509)];let h;if(e.scene[a(443)]===Tn[a(3940)])h=ee[a(2084)](e[a(1060)])[0];else{const b=oo[a(2136)](e[a(1060)][0],e[a(1060)][1],e[a(1060)][2]);h=m[a(3901)](b,new ee)}let C=l.frustum[a(4072)],p=l.frustum.far;const _=new ee;let y=l.heading,A=l[a(1904)];ee[a(3552)](l[a(3009)],_),e[a(2372)][a(651)]=!0,e[a(2372)][a(1339)]=function(){const b=a;C=l[b(2703)][b(4072)],p=l.frustum.far,y=l[b(1425)],A=l[b(1904)],ee[b(3552)](l[b(3009)],_),l[b(2703)][b(4072)]=n,l[b(2703)][b(3402)]=u;const B={destination:h,orientation:{heading:c,pitch:f},convert:!1};if(l.setView(B),e[b(2541)]=B,at[b(3552)](l.inverseViewMatrix,e[b(3468)]),at[b(3640)](l[b(2703)][b(1180)],l.viewMatrix,e[b(1597)]),at.inverse(e[b(1597)],e._invertViewProjectionMatrix),e[b(1729)].mode===Tn.SCENE3D)ee[b(3552)](h,e[b(3979)][b(3157)]);else{const T=po[b(1592)](ee[b(2136)](e[b(1060)][0],e[b(1060)][1],e[b(1060)][2]));ee[b(3552)](T,e[b(3979)][b(3157)])}e._boundingSphere.radius=u},e[a(2372)][a(4104)]=function(){const b=a;if(Kx(e[b(2927)])){e[b(3323)][b(3650)]=0;const B=x[b(1422)]({framebuffer:e[b(2372)][b(3265)]});let T=e[b(2927)][b(2457)].getAttribute(0);const M=0,w=4*(x[b(2151)]+1),I=ze[b(3433)](T.componentDatatype,w);I[0]=0,I[1]=0,I[2]=0,I[3]=1,4*w!==T[b(1321)][b(3786)]&&(Bn(e),vo(e,x),T=e._lineCommand[b(2457)][b(1292)](0));const P=new He,V=new He(1,1/255,1/65025,1/160581375),q=x[b(3995)],X=q[b(3162)],H=q[b(1398)],z=H.x,u0=H.y;for(let n0=0;n0<x[b(2151)];n0++){let N=0,Y=x.drawingBufferHeight-1;for(;Y>-1;Y--){const f0=4*(x[b(2151)]*Y+n0),v=He[b(3562)](B,f0,P);if(He[b(2776)](v,255,v),N=He[b(2528)](v,V),N>0)break;N=0}if(e[b(1729)][b(3730)][b(2211)]&&N>0){const f0=N*q[b(3965)];N=u0*(1-z/(Math[b(1149)](2,f0)-1+z))/(u0-z)}P.x=n0/x[b(2151)]*2-1,P.y=Y/x[b(1079)]*2-1,P.z=2*N-1,P.w=1,at.multiplyByVector(X,P,P);const W=new ee(P.x,P.y,P.z);ee[b(2776)](W,P.w,W);const x0=ee[b(2342)](W);e[b(3050)]>0&&x0>e[b(3050)]&&(ee[b(1586)](W,W),W.x*=e[b(3050)],W.y*=e[b(3050)],W.z*=e[b(3050)]),P.x=W.x,P.y=W.y,P.z=W.z,P.w=1;let y0=ee.fromCartesian4(at[b(3688)](e[b(3468)],P,new He));if(e[b(1729)][b(443)]===Tn[b(3443)]&&(y0=po[b(3594)](y0)),e._points[b(3650)]>0){const f0=ee[b(4114)](e[b(3323)][e[b(3323)][b(3650)]-1],y0);if(f0>1e3){const v=Math.ceil(f0/1e3);for(let T0=1;T0<v;T0++){let F0=new ee;F0=ee[b(2917)](e[b(3323)][e[b(3323)][b(3650)]-1],y0,T0/v,F0),e._points[b(2583)](F0)}}}e._points[b(2583)](y0),I[4*(n0+1)]=P.x,I[4*(n0+1)+1]=P.y,I[4*(n0+1)+2]=P.z,I[4*(n0+1)+3]=P.w}T[b(1321)][b(1758)](I,M);for(let n0=0;n0<e[b(4015)][b(2496)].length;n0++)e._limitBodys[b(2496)][n0][b(2696)](x,l);e[b(886)][b(1470)](),e[b(2431)]>=2&&e[b(886)][b(1050)]({width:e[b(2431)],positions:e[b(3323)],material:bo.fromType(bo[b(3224)],{color:e[b(2438)]})})}l[b(3670)]({destination:_,orientation:{heading:y,pitch:A,roll:l[b(2677)]},convert:!1}),l[b(2703)][b(4072)]=C,l[b(2703)][b(3402)]=p,e[b(2372)][b(651)]=!1}}function vo(e,x,t){const a=o,r=x[a(2151)]+1,n=ze[a(3433)](ze[a(3148)],4*r),s=ze.createTypedArray(ze.FLOAT,2*r),u=ze[a(3433)](ze[a(3884)],r-1),c=ze[a(3433)](ze[a(3884)],r);s[0]=-1;for(let y=1;y<r;y++)s[2*y]=y/(r-1),s[2*y+1]=0;for(let y=0;y<r-1;y++)u[y]=y+1,c[y]=y;c[r-1]=r-1;const f=Qi[a(3369)]({context:x,typedArray:n,usage:$i[a(2109)]}),l=[],m={aPosition:0};l[a(2583)]({index:m[a(1303)],vertexBuffer:f,componentsPerAttribute:4,componentDatatype:ze[a(3148)],offsetInBytes:0,strideInBytes:16,normalize:!1}),m[a(2389)]=1;const h=Qi[a(3369)]({context:x,typedArray:s,usage:$i[a(2109)]});l[a(2583)]({index:m.aTexCoord0,vertexBuffer:h,componentsPerAttribute:2,componentDatatype:ze[a(3148)],offsetInBytes:0,strideInBytes:8,normalize:!1});const C=Qi.createIndexBuffer({context:x,typedArray:u,usage:$i[a(2109)],indexDatatype:co[a(3884)]}),p=Qi[a(2417)]({context:x,typedArray:c,usage:$i.STATIC_DRAW,indexDatatype:co[a(3884)]}),_={uSkylineColor:function(){return e[a(2438)]}};e[a(2927)]=new fo({primitiveType:uo[a(674)],modelMatrix:e[a(3468)],boundingVolume:e._boundingSphere,pass:lo[a(3270)],owner:e,cull:!1}),e[a(2927)].vertexArray=new Co({context:x,attributes:l,indexBuffer:C}),e[a(2927)][a(2360)]=ho.fromCache({context:x,vertexShaderSource:yn,fragmentShaderSource:_n,attributeLocations:m}),e._lineCommand[a(2256)]=mo[a(4073)]({cull:{enabled:!1},depthTest:{enabled:!0}}),e[a(2927)][a(2551)]=_,e[a(3494)]=new fo({primitiveType:uo.TRIANGLE_FAN,modelMatrix:e[a(3468)],boundingVolume:e._boundingSphere,pass:lo.OPAQUE,owner:e,cull:!1}),e[a(3494)].vertexArray=new Co({context:x,attributes:l,indexBuffer:p}),e._faceCommand[a(2360)]=ho[a(4073)]({context:x,vertexShaderSource:yn,fragmentShaderSource:_n,attributeLocations:m}),e._faceCommand[a(2256)]=mo[a(4073)]({cull:{enabled:!1},depthTest:{enabled:!0}}),e[a(3494)][a(2551)]=_}Object[o(2040)](_e.prototype,{viewPosition:{get:function(){return this[o(1060)]},set:function(e){const x=o;this[x(1060)]=e,this._update=!0}},color:{get:function(){return this[o(2438)]},set:function(e){const x=o;Kx(e)&&(this[x(2438)]=so[x(3552)](e,this[x(2438)]))}},direction:{get:function(){return this[o(1987)]},set:function(e){const x=o;this[x(1987)]=e,this[x(2739)]=!0}},pitch:{get:function(){return this._pitch},set:function(e){const x=o;this[x(1668)]=e,this[x(2739)]=!0}},displayMode:{get:function(){return this[o(1244)]}},displayStyle:{get:function(){return this[o(3735)]},set:function(e){const x=o;this[x(3735)]=e}},radius:{get:function(){return this[o(3050)]},set:function(e){const x=o;this[x(3050)]=e,this._update=!0}},lineWidth:{get:function(){return this[o(2431)]},set:function(e){const x=o;this[x(2431)]=e,this._update=!0}},ignoreGlobe:{get:function(){return this[o(681)]},set:function(e){const x=o;this[x(681)]=e,Kx(this._depthBuffer)&&(this[x(2372)][x(3803)][x(3712)]=!this._ignoreGlobe,this[x(2739)]=!0)}}}),_e[o(3096)][o(2696)]=function(e){const x=o;if(!e[x(1479)]){this._update&&(Kx(this[x(2372)])||(this[x(2372)]=new lx(this[x(1729)][x(716)]),this[x(2372)][x(3803)][x(3712)]=!this[x(681)]),this._update=!1,Bn(this),Ru(this,this[x(1729)][x(716)],e),vo(this,this[x(1729)][x(716)]));for(let t=0;t<this[x(4015)][x(2496)].length;t++){const a=this[x(4015)][x(2496)][t];Kx(a)&&Kx(a[x(2423)])&&e.commandList[x(2583)](a._command)}this._displayStyle===this[x(1244)].LINE?Kx(this[x(2927)])&&this._lineWidth<2&&e[x(3138)].push(this[x(2927)]):Kx(this[x(3494)])&&e.commandList[x(2583)](this[x(3494)])}},_e[o(3096)][o(451)]=function(){const e=o;if(this[e(2739)])return;const x=this[e(1729)][e(716)],t=x[e(1422)]({framebuffer:this[e(2372)][e(3265)]});x[e(2151)];const a=[],r=[],n=[],s=[],u=new He,c=new He(1,1/255,1/65025,1/160581375);for(let f=0;f<x[e(2151)];f++){let l=0;for(let m=x[e(1079)]-1;m>-1;m--){const h=4*(x[e(2151)]*m+f),C=He[e(3562)](t,h,u);if(He[e(2776)](C,255,C),l=He.dot(C,c),l>0){a[e(2583)](f/x[e(2151)]),r[e(2583)](m/x[e(1079)]),n[e(2583)](f),s[e(2583)](m);break}}}return{x:a,y:r,drawingBufferXArr:n,drawingBufferYArr:s}},_e[o(3096)][o(648)]=function(){const e=o;if(this._update)return;const x=[],t=[],a=[];let r;for(let n=0,s=this[e(3323)][e(3650)];n<s;n++)r=oo.fromCartesian(this[e(3323)][n]),x[e(2583)](r[e(1454)]*Zi.DEGREES_PER_RADIAN),t[e(2583)](r[e(1738)]*Zi[e(4140)]),a[e(2583)](r[e(2388)]);return{x,y:t,z:a}},_e[o(3096)][o(2937)]=function(e){const x=o,t=e.name,a=e[x(3009)];if(!Kx(t)||!Kx(a))return!1;let r=this[x(4015)].get(t);if(Kx(r))return!1;r=new LimitBody(a,this),this[x(4015)][x(2590)](t,r),Kx(this._depthBuffer)&&(this[x(2372)].isUpdate=!0)},_e.prototype[o(1133)]=function(e){const x=o;return!!this[x(4015)][x(1578)](e)},_e.prototype.removeAllLimitBody=function(){const e=o;for(let x=0;x<this[e(4015)].values[e(3650)];x++)this._limitBodys[e(2496)][x].destroy(),this[e(4015)][e(2496)][x]=null;this._limitBodys[e(1470)]()},_e.prototype[o(1603)]=function(){const e=o,x=this.getSkyline3D();if(!Kx(x))return;const t=x.x,a=x.y,r=x.z;let n,s,u;const c=new Point3Ds;for(let f=0,l=t[e(3650)];f<l;f++)n=t[f],s=a[f],u=r[f],c[e(1050)](new Point3D(n,s,u));return{geoLine3D:new GeoLine3D([c]),viewPos:new Point3D(this._viewPosition[0],this[e(1060)][1],this._viewPosition[2])}},_e.prototype[o(588)]=function(){const e=o;this[e(2355)]||(this[e(2355)]=!0,this[e(1729)][e(2572)][e(1050)](this),this[e(3396)]=this[e(1729)][e(2077)][e(2004)](x=>{const t=e;Kx(this[t(2372)])&&this[t(2372)].renderToTexture(x)},this))},_e[o(3096)].clear=function(){const e=o;this[e(2355)]&&(this[e(2355)]=!1,this[e(3998)](),this[e(886)].removeAll(),this[e(3396)](),this.scene[e(2572)].remove(this))},_e.prototype[o(3777)]=function(){return!1},_e[o(3096)][o(3701)]=function(){const e=o;return this[e(2372)]=this._depthBuffer&&this[e(2372)].destroy(),Bn(this),this[e(3998)](),this.scene[e(2572)][e(1578)](this),wu(this)};var Ao=o(1751);function Ke(e){const x=o;this[x(1729)]=e,this[x(3842)]=new lx(e._context),this[x(3820)]=new lx(e._context),this[x(1667)]=20,this[x(1060)]=[0,0,0],this._direction=0,this._pitch=0,this[x(3451)]=90,this[x(981)]=60,this[x(2632)]=100,this[x(3746)]=new Cesium.Color(0,1,0,.5),this[x(2787)]=new Cesium.Color(1,0,0,.5),this[x(1745)]=new Cesium[x(1911)](1,1,1,1),this[x(2215)]=new Cesium[x(1475)],this[x(2287)]=new Cesium[x(2235)],this[x(2861)]=new Cesium[x(2235)],this[x(3989)]=new Cesium[x(2235)],this[x(3177)]=void 0,this[x(4166)]=void 0,this[x(1746)]=void 0,this[x(1336)]=!1,this[x(2355)]=!1}function Du(e){const x=o,t=e[x(1667)],a=e[x(1667)]+1,r=e._distance;let n=a*a+1,s=Cesium[x(549)][x(3433)](Cesium[x(549)][x(3148)],3*n),u=e._horizontalFov*Cesium[x(2746)][x(3375)],c=e._verticalFov*Cesium[x(2746)][x(3375)],f=Math[x(3740)](.5*c),l=Math.PI-.5*u,m=r*f,h=0,C=0,p=u/t,_=3;for(let y=0;y<a;y++){h=l+y*p;let A=m/(r/Math.cos(h)),b=Math[x(1512)](A),B=-b,T=2*b/t;for(let M=0;M<a;M++){C=B+M*T;let w=r*Math.cos(C)*Math[x(4186)](h),I=r*Math.sin(C),P=r*Math[x(1777)](C)*Math.cos(h);s[_++]=w,s[_++]=I,s[_++]=P}}return s}function Iu(e){const x=o,t=e[x(1667)],a=t+1;let r=t*t*3*2+3*t*4,n=Cesium[x(549)].createTypedArray(Cesium[x(549)].UNSIGNED_SHORT,r),s=0;for(let u=0;u<t;u++)for(let c=0;c<t;c++)n[s++]=1+u+c*a,n[s++]=1+u+1+c*a,n[s++]=1+u+(c+1)*a,n[s++]=1+u+1+c*a,n[s++]=1+u+1+(c+1)*a,n[s++]=1+u+(c+1)*a;for(let u=0;u<t;u++)n[s++]=u+1+1,n[s++]=u+1,n[s++]=0,n[s++]=0,n[s++]=u+t*a+1,n[s++]=u+1+t*a+1;for(let u=0;u<t;u++)n[s++]=0,n[s++]=u*a+1,n[s++]=(u+1)*a+1,n[s++]=t+(u+1)*a+1,n[s++]=t+u*a+1,n[s++]=0;return n}function Lu(e){const x=o,t=e[x(1667)],a=t+1,r=2*(4+5*t+2*t*3);let n=Cesium[x(549)].createTypedArray(Cesium.ComponentDatatype[x(3884)],r),s=0;n[s++]=0,n[s++]=1,n[s++]=0,n[s++]=a,n[s++]=0,n[s++]=t*a+1,n[s++]=0,n[s++]=a*a;for(let u=0;u<5;u++)for(let c=0;c<t;c++)n[s++]=1+c+5*a*u,n[s++]=1+(c+1)+5*a*u;for(let u=0;u<5;u++)for(let c=0;c<t;c++)n[s++]=1+a*c+5*u,n[s++]=1+a*(c+1)+5*u;return n}function Ix(){}Object[o(2040)](Ke[o(3096)],{viewPosition:{get:function(){return this[o(1060)]},set:function(e){const x=o;this[x(1060)]=e}},direction:{get:function(){return this[o(1987)]},set:function(e){const x=o;this[x(1987)]=e,this.dirty=!0}},pitch:{get:function(){return this._pitch},set:function(e){const x=o;this[x(1668)]=e,this.dirty=!0}},horizontalFov:{get:function(){return this[o(3451)]},set:function(e){const x=o;this[x(3451)]=e,this[x(1336)]=!0}},verticalFov:{get:function(){return this[o(981)]},set:function(e){const x=o;this[x(981)]=e,this[x(1336)]=!0}},distance:{get:function(){return this._distance},set:function(e){const x=o;this[x(2632)]=Math[x(2092)](e,0),this[x(1336)]=!0}}}),Ke[o(3096)]._updateCamera=function(e){const x=o;let t=e[x(3907)],a=this[x(3451)]*Cesium[x(2746)][x(3375)],r=this._verticalFov*Cesium.Math[x(3375)],n=Math[x(3740)](.5*a)/Math[x(3740)](.5*r);this[x(2632)];let s=Math[x(2092)](this[x(2632)],10),u=this[x(1987)]*Cesium[x(2746)][x(3375)],c=this[x(1668)]*Cesium[x(2746)][x(3375)],f=Cesium.Cartesian3[x(2084)](this._viewPosition)[0],l=t[x(2703)].aspectRatio,m=t.frustum[x(3324)],h=t[x(2703)].near,C=t[x(2703)][x(3402)],p=new Cesium[x(516)],_=t[x(1425)],y=t[x(1904)];Cesium.Cartesian3.clone(t[x(3009)],p);let A=e[x(2211)],b=this.scene[x(2818)];this[x(3842)][x(651)]=!0,this[x(3842)][x(1339)]=B=>{const T=x;B[T(2211)]=!1,l=t[T(2703)].aspectRatio,m=t[T(2703)].fov,h=t[T(2703)][T(4072)],C=t.frustum[T(3402)],_=t.heading,y=t.pitch,Cesium[T(516)][T(3552)](t[T(3009)],p),t[T(2703)].aspectRatio=n,t.frustum.fov=a,t[T(2703)][T(4072)]=1,t.frustum.far=s+1,t[T(3670)]({destination:f,orientation:{heading:u,pitch:c,roll:t[T(2677)]}});const M=this[T(1729)][T(4025)]._primitives;for(let w=0;w<M[T(3650)];++w){const I=M[w];Cesium[T(692)](I.fileType)||(I[T(3599)]=I[T(1962)],I[T(1962)]=!1)}Cesium[T(2235)][T(3640)](t[T(2703)][T(1180)],t[T(1747)],this.viewProjectionMatrix),Cesium.Matrix4[T(3552)](t[T(943)],this.invViewMatrix),Cesium[T(516)][T(3552)](Cesium.Cartesian3.ZERO,this[T(2215)].center),this.boundingSphere[T(1707)]=this[T(2632)],Cesium.BoundingSphere[T(3011)](this[T(2215)],this[T(2861)],this.boundingSphere)},this[x(3842)][x(4104)]=B=>{const T=x;t[T(3670)]({destination:p,orientation:{heading:_,pitch:y,roll:t[T(2677)]},convert:!1}),t.frustum[T(962)]=l,t[T(2703)].fov=m,t[T(2703)][T(4072)]=h,t.frustum[T(3402)]=C;const M=this[T(1729)]._primitives._primitives;for(let w=0;w<M[T(3650)];++w){const I=M[w];Cesium[T(692)](I[T(2450)])||(I[T(1962)]=I[T(3599)])}this.cameraDepthBuffer[T(651)]=!1,B[T(2211)]=A},this[x(3820)][x(651)]=!0,this[x(3820)][x(1339)]=B=>{const T=x;B[T(2211)]=!1,t[T(2703)][T(4072)]=10,this.scene.farToNearRatio=this[T(1729)].logarithmicDepthFarToNearRatio},this[x(3820)][x(4104)]=B=>{const T=x;if(this[T(1729)][T(2652)][T(1310)][T(3650)]>0){let I=this[T(1729)].view.frustumCommandsList[0];t.frustum[T(4072)]=I.near,t[T(2703)][T(3402)]=I[T(3402)]}let M=Cesium[T(2235)].inverse(t[T(2703)].projectionMatrix,new Cesium[T(2235)]),w=Cesium[T(2235)].multiply(t[T(943)],M,new Cesium[T(2235)]);Cesium[T(2235)][T(3640)](this[T(2287)],w,this.renderTextureMatrix),B.useLogDepth=A,this.scene[T(2818)]=b,t[T(2703)][T(4072)]=h,t.frustum.far=C}},Ke[o(3096)][o(1049)]=function(e){const x=o;let t=Du(this),a=Iu(this),r=Lu(this),n=e.context,s=Cesium[x(2691)].createVertexBuffer({context:n,typedArray:t,usage:Cesium[x(3586)].STATIC_DRAW}),u=Cesium[x(2691)][x(2417)]({context:n,typedArray:a,usage:Cesium[x(3586)][x(2109)],indexDatatype:Cesium[x(1370)].UNSIGNED_SHORT}),c=[{index:0,vertexBuffer:s,componentsPerAttribute:3,componentDatatype:Cesium[x(549)][x(3148)],offsetInBytes:0,strideInBytes:12,normalize:!1}],f={aPosition:0},l=new Cesium.VertexArray({context:n,attributes:c,indexBuffer:u}),m=new Cesium[x(635)]({sources:[qi]}),h=new Cesium[x(635)]({sources:[Ao]}),C=Cesium[x(2416)][x(4073)]({context:n,vertexShaderSource:m,fragmentShaderSource:h,attributeLocations:f}),p=Cesium[x(3154)][x(4073)]({cull:{enabled:!1},depthTest:{enabled:!1},depthMask:!1,stencilTest:{enabled:!0,frontFunction:Cesium.StencilFunction[x(2837)],frontOperation:{fail:Cesium.StencilOperation[x(3384)],zFail:Cesium[x(2521)][x(3384)],zPass:Cesium.StencilOperation.DECREMENT_WRAP},backFunction:Cesium.StencilFunction[x(2837)],backOperation:{fail:Cesium[x(2521)][x(3384)],zFail:Cesium[x(2521)][x(3384)],zPass:Cesium.StencilOperation[x(1266)]},reference:0,mask:-1},blending:Cesium[x(2147)][x(2672)]});this[x(3177)]=new Cesium[x(1900)]({primitiveType:Cesium[x(1970)].TRIANGLES,modelMatrix:this[x(2861)],boundingVolume:this[x(2215)],pass:Cesium.Pass[x(3270)],shaderProgram:C,vertexArray:l,renderState:p,owner:this,cull:!0}),this[x(3177)].uniformMap={uVisibleAreaColor:()=>this[x(3746)],uHiddenAreaColor:()=>this[x(2787)],uRenderTextureMatrix:()=>this.renderTextureMatrix,uTextureSize:()=>{const A=x;let b=this[A(3842)][A(2247)];return new Cesium.Cartesian2(b[A(2375)],b[A(2388)])},uTexture:()=>this.cameraDepthBuffer[x(2247)],uGlobalDepthTexture:()=>this.globalDepthBuffer[x(2247)]};let _=Cesium[x(1900)][x(2225)](this[x(3177)]);_[x(2256)]=Cesium[x(3154)].fromCache({depthMask:!1,colorMask:{red:!1,green:!1,blue:!1,alpha:!1},depthTest:{enabled:!0,func:Cesium[x(3608)][x(1212)]},stencilTest:{enabled:!0,frontFunction:Cesium[x(2311)][x(3648)],frontOperation:{fail:Cesium[x(2521)].KEEP,zFail:Cesium.StencilOperation[x(3384)],zPass:Cesium[x(2521)].INCREMENT_WRAP},backFunction:Cesium[x(2311)][x(3648)],backOperation:{fail:Cesium.StencilOperation[x(3384)],zFail:Cesium[x(2521)][x(3384)],zPass:Cesium[x(2521)].DECREMENT_WRAP},reference:0,mask:-1}}),this.stencilCommand=_;let y=Cesium[x(2691)][x(2417)]({context:n,typedArray:r,usage:Cesium[x(3586)][x(2109)],indexDatatype:Cesium[x(1370)].UNSIGNED_SHORT});this[x(1746)]=new Cesium[x(1900)]({primitiveType:Cesium[x(1970)][x(1692)],modelMatrix:this[x(2861)],boundingVolume:this[x(2215)],pass:Cesium[x(2798)][x(3270)],owner:this,cull:!0}),this[x(1746)][x(2457)]=new Cesium.VertexArray({context:n,attributes:c,indexBuffer:y}),this[x(1746)][x(2360)]=Cesium[x(2416)][x(4073)]({context:n,vertexShaderSource:me,fragmentShaderSource:L2,attributeLocations:f}),this[x(1746)].renderState=Cesium.RenderState[x(4073)]({cull:{enabled:!1},depthTest:{enabled:!0},blending:Cesium[x(2147)][x(2672)]}),this.lineCommand[x(2551)]={uColor:()=>this[x(1745)]}},Ke[o(3096)].setDistDirByPoint=function(e){const x=o;let t=this[x(1729)][x(3907)];t[x(2509)];let a=Cesium[x(516)][x(2084)](e)[0],r=Cesium[x(516)][x(2084)](this._viewPosition)[0],n=new Cesium[x(516)];Cesium.Cartesian3.subtract(a,r,n);let s=Cesium.Cartesian3[x(2342)](n);Cesium.Cartesian3[x(1586)](n,n),this[x(4114)]=s;let u=t[x(1425)],c=t.pitch,f=t.roll,l=new Cesium.Cartesian3;Cesium.Cartesian3.clone(t[x(3009)],l);let m=n[x(3552)](),h=r.clone();h=Cesium.Cartesian3[x(1586)](h,h),Math[x(905)](Cesium[x(516)].dot(h,m))>=1&&(h=Math.abs(Cesium[x(516)][x(2528)](m,Cesium[x(516)].UNIT_Y))<1?Cesium[x(516)][x(3552)](Cartesian3.UNIT_Y,h):Cesium[x(516)][x(3552)](Cartesian3[x(3167)],h));let C=new Cesium[x(516)];Cesium[x(516)][x(2550)](h,m,C),C=Cesium[x(516)][x(1586)](C,C),Cesium.Cartesian3[x(2550)](m,C,h),h=Cesium.Cartesian3[x(1586)](h,h),t[x(3670)]({destination:r,orientation:{direction:m,up:h},convert:!1}),this[x(3249)]=t[x(1425)]*Cesium[x(2746)].DEGREES_PER_RADIAN,this.pitch=t[x(1904)]*Cesium[x(2746)][x(4140)],t[x(3670)]({destination:l,orientation:{heading:u,pitch:c,roll:f},convert:!1})},Ke[o(3096)][o(2249)]=function(){const e=o;this.colorCommand&&(this[e(3177)][e(2457)]=this[e(3177)][e(2457)]&&!this[e(3177)].vertexArray.isDestroyed()&&this[e(3177)][e(2457)][e(3701)](),this[e(3177)][e(2360)]=this.colorCommand.shaderProgram&&!this[e(3177)][e(2360)][e(3777)]()&&this[e(3177)][e(2360)][e(3701)](),this[e(3177)]=void 0),this.stencilCommand&&(this[e(4166)][e(2457)]=this[e(4166)][e(2457)]&&!this[e(4166)][e(2457)][e(3777)]()&&this[e(4166)][e(2457)][e(3701)](),this[e(4166)][e(2360)]=this[e(4166)][e(2360)]&&!this[e(4166)][e(2360)][e(3777)]()&&this[e(4166)][e(2360)][e(3701)](),this.stencilCommand=void 0),this[e(1746)]&&(this[e(1746)].vertexArray=this[e(1746)][e(2457)]&&!this[e(1746)][e(2457)][e(3777)]()&&this.lineCommand.vertexArray[e(3701)](),this.lineCommand[e(2360)]=this.lineCommand[e(2360)]&&!this[e(1746)][e(2360)].isDestroyed()&&this[e(1746)][e(2360)][e(3701)](),this[e(1746)]=void 0)},Ke[o(3096)][o(2696)]=function(e){const x=o;e.fbo||e[x(3606)][x(3869)]||e.passes[x(2832)]||(this.dirty&&(this[x(1336)]=!1,this[x(2249)](),this[x(3147)](e),this[x(1049)](e)),this.stencilCommand&&e.commandList.push(this.stencilCommand),this[x(3177)]&&e[x(3138)][x(2583)](this.colorCommand),this.lineCommand&&e[x(3138)][x(2583)](this.lineCommand))},Ke[o(3096)][o(588)]=function(){const e=o;this[e(2355)]||(this[e(2355)]=!0,this.scene[e(2572)][e(1050)](this),this[e(3396)]=this[e(1729)][e(2077)].addEventListener((x,t)=>{const a=e;this[a(3842)][a(1143)](x),this[a(3820)][a(1143)](x)},this))},Ke[o(3096)][o(2748)]=function(){const e=o;this[e(2355)]&&(this[e(2355)]=!1,this[e(3396)](),this.scene[e(2572)][e(1578)](this))},Ke[o(3096)].isDestroyed=function(){return!1},Ke[o(3096)][o(3701)]=function(){const e=o;if(this[e(3842)]=this.cameraDepthBuffer[e(3701)](),this[e(3820)]=this[e(3820)][e(3701)](),this[e(3177)]){let x=this.colorCommand[e(2457)],t=this.colorCommand[e(2360)];x=x&&!x[e(3777)]()&&x[e(3701)](),t=t&&!t.isDestroyed()&&t[e(3701)](),this[e(3177)]=void 0}if(this[e(4166)]){let x=this[e(4166)][e(2457)],t=this.stencilCommand[e(2360)];x=x&&!x[e(3777)]()&&x[e(3701)](),t=t&&!t.isDestroyed()&&t.destroy(),this[e(4166)]=void 0}if(this.lineCommand){let x=this[e(1746)].vertexArray,t=this[e(1746)][e(2360)];x=x&&!x[e(3777)]()&&x[e(3701)](),t=t&&!t.isDestroyed()&&t[e(3701)](),this[e(1746)]=void 0}},Ix[o(731)]=!1,Ix[o(3069)]=void 0,Ix[o(4071)]=!1,Ix[o(1739)]=function(){const e=o;Ix[e(4071)]||(Promise[e(1599)]()[e(4167)](function(){return N1})[e(4167)](x=>{const t=e;Ix[t(4071)]=!1,Ix[t(3069)]=x[t(3165)],Object[t(3360)](Ix[t(3069)][t(2286)])[t(3650)]>0&&(Ix[t(731)]=!0),Ix[t(3069)][t(1698)]=function(){const a=t;Ix[a(731)]=!0}}),Ix[e(4071)]=!0)};const En={cCRNFmtInvalid:-1,cCRNFmtDXT1:0,cCRNFmtDXT3:1,cCRNFmtDXT5:2},xa={};var li,Pn;xa[En[o(3745)]]=Cesium[o(3868)][o(524)],xa[En.cCRNFmtDXT3]=Cesium.PixelFormat[o(1500)],xa[En[o(3696)]]=Cesium.PixelFormat[o(915)];var yo=0;function Fu(e,x,t,a){const r=o;var n,s=t/4,u=a%4,c=new Uint32Array(e[r(4056)],0,(a-u)/4),f=new Uint32Array(x[r(4056)]);for(n=0;n<c[r(3650)];n++)f[s+n]=c[n];for(n=a-u;n<a;n++)x[t+n]=e[n]}Ix[o(3182)]=function(e){const x=o,t=Ix[x(3069)];var a=e.data,r=a[x(3818)],n=new Uint8Array(a),s=t[x(1187)](r);Fu(n,t[x(4002)],s,r);var u=t._crn_get_dxt_format(s,r),c=xa[u];if(!Cesium[x(692)](c))throw new Cesium[x(1295)](x(4036));var f,l=t[x(1377)](s,r),m=t[x(2217)](s,r),h=t[x(3895)](s,r),C=0;for(f=0;f<l;++f)C+=Cesium[x(3868)][x(2591)](c,m>>f,h>>f);if(yo<C&&(Cesium[x(692)](li)&&t._free(li),li=t[x(1187)](C),Pn=new Uint8Array(t[x(4002)][x(4056)],li,C),yo=C),t._crn_decompress(s,r,li,C,0,l),t[x(2220)](s),Cesium[x(820)](e[x(2815)],!1)){var p=Pn[x(3403)](0,C);return Cesium.CompressedTextureBuffer[x(3650)]===4?new Cesium[x(1179)](c,m,h,p):new Cesium[x(1179)](c,Cesium[x(2011)][x(3860)],m,h,p)}var _=Cesium.PixelFormat.compressedTextureSizeInBytes(c,m,h),y=Pn.subarray(0,_),A=new Uint8Array(_);return A[x(2590)](y,0),Cesium[x(1179)][x(3650)]===4?new Cesium[x(1179)](c,m,h,A):new Cesium[x(1179)](c,Cesium.PixelDatatype.UNSIGNED_BYTE,m,h,A)};var Rt,Dt,wn,Ou=/((?:.*\/)|^)SuperMap3D\.js$/;function Nu(){const e=o;for(var x=document[e(1040)](e(3328)),t=0,a=x[e(3650)];t<a;++t){var r=x[t].getAttribute(e(3612)),n=Ou[e(3449)](r);if(n!==null)return n[1]}}function _o(e){const x=o;return x(1345)==typeof document?e:(Cesium[x(692)](Rt)||(Rt=document.createElement("a")),Rt[x(2318)]=e,Rt[x(2318)]=Rt[x(2318)],Rt[x(2318)])}function go(){const e=o;if(Cesium[e(692)](Dt))return Dt;var x;if(x=e(1345)!=typeof eu?eu:Nu(),!Cesium[e(692)](x))throw new Cesium[e(1785)]("Unable to determine Cesium base URL automatically, try defining a global variable called SUPERMAP_BASE_URL.");return(Dt=new Cesium[e(1702)]({url:_o(x)}))[e(1810)](),Dt}function Vu(e){const x=o;return _o(require[x(1561)](x(3680)+e))}function To(e){const x=o;return go()[x(2773)]({url:e})[x(2547)]}function Qx(e){const x=o;return Cesium.defined(wn)||(wn=x(2408)==typeof define&&Cesium[x(692)](define.amd)&&!define[x(2015)].toUrlUndefined&&Cesium[x(692)](require.toUrl)?Vu:To),wn(e)}Qx[o(3525)]=To,Qx._clearBaseResource=function(){Dt=void 0},Qx[o(1643)]=function(e){const x=o;Dt=Cesium[x(1702)].DEFAULT[x(2773)]({url:e})},Qx.getCesiumBaseUrl=go;const Ce=Cesium.PixelFormat,fi=Cesium.PixelDatatype,Uu=Cesium[o(692)];function Se(){}var Sn;Se[o(731)]=!1,Se[o(4071)]=!1;var kx={astc:!1,bc7:!0,etc:!1,etc1:!1,pvrtc:!1,s3tc:!0};function It(e,x){const t=o;for(var a=x[t(3650)],r=0;r<a;++r){var n=e[t(1709)](x[r]);if(n)return n}}function Gu(e){const x=o;kx[x(3306)]=!!It(e,[x(1265),"MOZ_WEBGL_compressed_texture_s3tc","WEBKIT_WEBGL_compressed_texture_s3tc"]),kx[x(1882)]=!!It(e,[x(4077),x(1837)]),kx[x(844)]=!!It(e,["WEBGL_compressed_texture_etc1"]),kx[x(3952)]=!!It(e,[x(3659)]),kx[x(2806)]=!!It(e,[x(1515)]),kx[x(2239)]=!!It(e,[x(2398)])}Se[o(1739)]=function(e){const x=o;Se.loading||(e&&Gu(e[x(1120)]),Promise[x(1599)]()[x(4167)](function(){return U1})[x(4167)](t=>{const a=x;Cesium.Resource.fetchArrayBuffer({url:Qx(a(2193))}).then(function(r){const n=a;t[n(3165)]({wasmBinary:r})[n(4167)](function(s){const u=n;(Sn=s).initializeBasis(),Se[u(731)]=!0})})}),Se[x(4071)]=!0)};var Hu={VK_FORMAT_UNDEFINED:0,VK_FORMAT_R4G4_UNORM_PACK8:1,VK_FORMAT_R4G4B4A4_UNORM_PACK16:2,VK_FORMAT_B4G4R4A4_UNORM_PACK16:3,VK_FORMAT_R5G6B5_UNORM_PACK16:4,VK_FORMAT_B5G6R5_UNORM_PACK16:5,VK_FORMAT_R5G5B5A1_UNORM_PACK16:6,VK_FORMAT_B5G5R5A1_UNORM_PACK16:7,VK_FORMAT_A1R5G5B5_UNORM_PACK16:8,VK_FORMAT_R8_UNORM:9,VK_FORMAT_R8_SNORM:10,VK_FORMAT_R8_USCALED:11,VK_FORMAT_R8_SSCALED:12,VK_FORMAT_R8_UINT:13,VK_FORMAT_R8_SINT:14,VK_FORMAT_R8_SRGB:15,VK_FORMAT_R8G8_UNORM:16,VK_FORMAT_R8G8_SNORM:17,VK_FORMAT_R8G8_USCALED:18,VK_FORMAT_R8G8_SSCALED:19,VK_FORMAT_R8G8_UINT:20,VK_FORMAT_R8G8_SINT:21,VK_FORMAT_R8G8_SRGB:22,VK_FORMAT_R8G8B8_UNORM:23,VK_FORMAT_R8G8B8_SNORM:24,VK_FORMAT_R8G8B8_USCALED:25,VK_FORMAT_R8G8B8_SSCALED:26,VK_FORMAT_R8G8B8_UINT:27,VK_FORMAT_R8G8B8_SINT:28,VK_FORMAT_R8G8B8_SRGB:29,VK_FORMAT_B8G8R8_UNORM:30,VK_FORMAT_B8G8R8_SNORM:31,VK_FORMAT_B8G8R8_USCALED:32,VK_FORMAT_B8G8R8_SSCALED:33,VK_FORMAT_B8G8R8_UINT:34,VK_FORMAT_B8G8R8_SINT:35,VK_FORMAT_B8G8R8_SRGB:36,VK_FORMAT_R8G8B8A8_UNORM:37,VK_FORMAT_R8G8B8A8_SNORM:38,VK_FORMAT_R8G8B8A8_USCALED:39,VK_FORMAT_R8G8B8A8_SSCALED:40,VK_FORMAT_R8G8B8A8_UINT:41,VK_FORMAT_R8G8B8A8_SINT:42,VK_FORMAT_R8G8B8A8_SRGB:43,VK_FORMAT_B8G8R8A8_UNORM:44,VK_FORMAT_B8G8R8A8_SNORM:45,VK_FORMAT_B8G8R8A8_USCALED:46,VK_FORMAT_B8G8R8A8_SSCALED:47,VK_FORMAT_B8G8R8A8_UINT:48,VK_FORMAT_B8G8R8A8_SINT:49,VK_FORMAT_B8G8R8A8_SRGB:50,VK_FORMAT_A8B8G8R8_UNORM_PACK32:51,VK_FORMAT_A8B8G8R8_SNORM_PACK32:52,VK_FORMAT_A8B8G8R8_USCALED_PACK32:53,VK_FORMAT_A8B8G8R8_SSCALED_PACK32:54,VK_FORMAT_A8B8G8R8_UINT_PACK32:55,VK_FORMAT_A8B8G8R8_SINT_PACK32:56,VK_FORMAT_A8B8G8R8_SRGB_PACK32:57,VK_FORMAT_A2R10G10B10_UNORM_PACK32:58,VK_FORMAT_A2R10G10B10_SNORM_PACK32:59,VK_FORMAT_A2R10G10B10_USCALED_PACK32:60,VK_FORMAT_A2R10G10B10_SSCALED_PACK32:61,VK_FORMAT_A2R10G10B10_UINT_PACK32:62,VK_FORMAT_A2R10G10B10_SINT_PACK32:63,VK_FORMAT_A2B10G10R10_UNORM_PACK32:64,VK_FORMAT_A2B10G10R10_SNORM_PACK32:65,VK_FORMAT_A2B10G10R10_USCALED_PACK32:66,VK_FORMAT_A2B10G10R10_SSCALED_PACK32:67,VK_FORMAT_A2B10G10R10_UINT_PACK32:68,VK_FORMAT_A2B10G10R10_SINT_PACK32:69,VK_FORMAT_R16_UNORM:70,VK_FORMAT_R16_SNORM:71,VK_FORMAT_R16_USCALED:72,VK_FORMAT_R16_SSCALED:73,VK_FORMAT_R16_UINT:74,VK_FORMAT_R16_SINT:75,VK_FORMAT_R16_SFLOAT:76,VK_FORMAT_R16G16_UNORM:77,VK_FORMAT_R16G16_SNORM:78,VK_FORMAT_R16G16_USCALED:79,VK_FORMAT_R16G16_SSCALED:80,VK_FORMAT_R16G16_UINT:81,VK_FORMAT_R16G16_SINT:82,VK_FORMAT_R16G16_SFLOAT:83,VK_FORMAT_R16G16B16_UNORM:84,VK_FORMAT_R16G16B16_SNORM:85,VK_FORMAT_R16G16B16_USCALED:86,VK_FORMAT_R16G16B16_SSCALED:87,VK_FORMAT_R16G16B16_UINT:88,VK_FORMAT_R16G16B16_SINT:89,VK_FORMAT_R16G16B16_SFLOAT:90,VK_FORMAT_R16G16B16A16_UNORM:91,VK_FORMAT_R16G16B16A16_SNORM:92,VK_FORMAT_R16G16B16A16_USCALED:93,VK_FORMAT_R16G16B16A16_SSCALED:94,VK_FORMAT_R16G16B16A16_UINT:95,VK_FORMAT_R16G16B16A16_SINT:96,VK_FORMAT_R16G16B16A16_SFLOAT:97,VK_FORMAT_R32_UINT:98,VK_FORMAT_R32_SINT:99,VK_FORMAT_R32_SFLOAT:100,VK_FORMAT_R32G32_UINT:101,VK_FORMAT_R32G32_SINT:102,VK_FORMAT_R32G32_SFLOAT:103,VK_FORMAT_R32G32B32_UINT:104,VK_FORMAT_R32G32B32_SINT:105,VK_FORMAT_R32G32B32_SFLOAT:106,VK_FORMAT_R32G32B32A32_UINT:107,VK_FORMAT_R32G32B32A32_SINT:108,VK_FORMAT_R32G32B32A32_SFLOAT:109,VK_FORMAT_R64_UINT:110,VK_FORMAT_R64_SINT:111,VK_FORMAT_R64_SFLOAT:112,VK_FORMAT_R64G64_UINT:113,VK_FORMAT_R64G64_SINT:114,VK_FORMAT_R64G64_SFLOAT:115,VK_FORMAT_R64G64B64_UINT:116,VK_FORMAT_R64G64B64_SINT:117,VK_FORMAT_R64G64B64_SFLOAT:118,VK_FORMAT_R64G64B64A64_UINT:119,VK_FORMAT_R64G64B64A64_SINT:120,VK_FORMAT_R64G64B64A64_SFLOAT:121,VK_FORMAT_B10G11R11_UFLOAT_PACK32:122,VK_FORMAT_E5B9G9R9_UFLOAT_PACK32:123,VK_FORMAT_D16_UNORM:124,VK_FORMAT_X8_D24_UNORM_PACK32:125,VK_FORMAT_D32_SFLOAT:126,VK_FORMAT_S8_UINT:127,VK_FORMAT_D16_UNORM_S8_UINT:128,VK_FORMAT_D24_UNORM_S8_UINT:129,VK_FORMAT_D32_SFLOAT_S8_UINT:130,VK_FORMAT_BC1_RGB_UNORM_BLOCK:131,VK_FORMAT_BC1_RGB_SRGB_BLOCK:132,VK_FORMAT_BC1_RGBA_UNORM_BLOCK:133,VK_FORMAT_BC1_RGBA_SRGB_BLOCK:134,VK_FORMAT_BC2_UNORM_BLOCK:135,VK_FORMAT_BC2_SRGB_BLOCK:136,VK_FORMAT_BC3_UNORM_BLOCK:137,VK_FORMAT_BC3_SRGB_BLOCK:138,VK_FORMAT_BC4_UNORM_BLOCK:139,VK_FORMAT_BC4_SNORM_BLOCK:140,VK_FORMAT_BC5_UNORM_BLOCK:141,VK_FORMAT_BC5_SNORM_BLOCK:142,VK_FORMAT_BC6H_UFLOAT_BLOCK:143,VK_FORMAT_BC6H_SFLOAT_BLOCK:144,VK_FORMAT_BC7_UNORM_BLOCK:145,VK_FORMAT_BC7_SRGB_BLOCK:146,VK_FORMAT_ETC2_R8G8B8_UNORM_BLOCK:147,VK_FORMAT_ETC2_R8G8B8_SRGB_BLOCK:148,VK_FORMAT_ETC2_R8G8B8A1_UNORM_BLOCK:149,VK_FORMAT_ETC2_R8G8B8A1_SRGB_BLOCK:150,VK_FORMAT_ETC2_R8G8B8A8_UNORM_BLOCK:151,VK_FORMAT_ETC2_R8G8B8A8_SRGB_BLOCK:152,VK_FORMAT_EAC_R11_UNORM_BLOCK:153,VK_FORMAT_EAC_R11_SNORM_BLOCK:154,VK_FORMAT_EAC_R11G11_UNORM_BLOCK:155,VK_FORMAT_EAC_R11G11_SNORM_BLOCK:156,VK_FORMAT_ASTC_4x4_UNORM_BLOCK:157,VK_FORMAT_ASTC_4x4_SRGB_BLOCK:158,VK_FORMAT_ASTC_5x4_UNORM_BLOCK:159,VK_FORMAT_ASTC_5x4_SRGB_BLOCK:160,VK_FORMAT_ASTC_5x5_UNORM_BLOCK:161,VK_FORMAT_ASTC_5x5_SRGB_BLOCK:162,VK_FORMAT_ASTC_6x5_UNORM_BLOCK:163,VK_FORMAT_ASTC_6x5_SRGB_BLOCK:164,VK_FORMAT_ASTC_6x6_UNORM_BLOCK:165,VK_FORMAT_ASTC_6x6_SRGB_BLOCK:166,VK_FORMAT_ASTC_8x5_UNORM_BLOCK:167,VK_FORMAT_ASTC_8x5_SRGB_BLOCK:168,VK_FORMAT_ASTC_8x6_UNORM_BLOCK:169,VK_FORMAT_ASTC_8x6_SRGB_BLOCK:170,VK_FORMAT_ASTC_8x8_UNORM_BLOCK:171,VK_FORMAT_ASTC_8x8_SRGB_BLOCK:172,VK_FORMAT_ASTC_10x5_UNORM_BLOCK:173,VK_FORMAT_ASTC_10x5_SRGB_BLOCK:174,VK_FORMAT_ASTC_10x6_UNORM_BLOCK:175,VK_FORMAT_ASTC_10x6_SRGB_BLOCK:176,VK_FORMAT_ASTC_10x8_UNORM_BLOCK:177,VK_FORMAT_ASTC_10x8_SRGB_BLOCK:178,VK_FORMAT_ASTC_10x10_UNORM_BLOCK:179,VK_FORMAT_ASTC_10x10_SRGB_BLOCK:180,VK_FORMAT_ASTC_12x10_UNORM_BLOCK:181,VK_FORMAT_ASTC_12x10_SRGB_BLOCK:182,VK_FORMAT_ASTC_12x12_UNORM_BLOCK:183,VK_FORMAT_ASTC_12x12_SRGB_BLOCK:184,VK_FORMAT_G8B8G8R8_422_UNORM:1000156e3,VK_FORMAT_B8G8R8G8_422_UNORM:1000156001,VK_FORMAT_G8_B8_R8_3PLANE_420_UNORM:1000156002,VK_FORMAT_G8_B8R8_2PLANE_420_UNORM:1000156003,VK_FORMAT_G8_B8_R8_3PLANE_422_UNORM:1000156004,VK_FORMAT_G8_B8R8_2PLANE_422_UNORM:1000156005,VK_FORMAT_G8_B8_R8_3PLANE_444_UNORM:1000156006,VK_FORMAT_R10X6_UNORM_PACK16:1000156007,VK_FORMAT_R10X6G10X6_UNORM_2PACK16:1000156008,VK_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16:1000156009,VK_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16:1000156010,VK_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16:1000156011,VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16:1000156012,VK_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16:1000156013,VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16:1000156014,VK_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16:1000156015,VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16:1000156016,VK_FORMAT_R12X4_UNORM_PACK16:1000156017,VK_FORMAT_R12X4G12X4_UNORM_2PACK16:1000156018,VK_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16:1000156019,VK_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16:1000156020,VK_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16:1000156021,VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16:1000156022,VK_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16:1000156023,VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16:1000156024,VK_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16:1000156025,VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16:1000156026,VK_FORMAT_G16B16G16R16_422_UNORM:1000156027,VK_FORMAT_B16G16R16G16_422_UNORM:1000156028,VK_FORMAT_G16_B16_R16_3PLANE_420_UNORM:1000156029,VK_FORMAT_G16_B16R16_2PLANE_420_UNORM:1000156030,VK_FORMAT_G16_B16_R16_3PLANE_422_UNORM:1000156031,VK_FORMAT_G16_B16R16_2PLANE_422_UNORM:1000156032,VK_FORMAT_G16_B16_R16_3PLANE_444_UNORM:1000156033,VK_FORMAT_PVRTC1_2BPP_UNORM_BLOCK_IMG:1000054e3,VK_FORMAT_PVRTC1_4BPP_UNORM_BLOCK_IMG:1000054001,VK_FORMAT_PVRTC2_2BPP_UNORM_BLOCK_IMG:1000054002,VK_FORMAT_PVRTC2_4BPP_UNORM_BLOCK_IMG:1000054003,VK_FORMAT_PVRTC1_2BPP_SRGB_BLOCK_IMG:1000054004,VK_FORMAT_PVRTC1_4BPP_SRGB_BLOCK_IMG:1000054005,VK_FORMAT_PVRTC2_2BPP_SRGB_BLOCK_IMG:1000054006,VK_FORMAT_PVRTC2_4BPP_SRGB_BLOCK_IMG:1000054007,VK_FORMAT_ASTC_4x4_SFLOAT_BLOCK_EXT:1000066e3,VK_FORMAT_ASTC_5x4_SFLOAT_BLOCK_EXT:1000066001,VK_FORMAT_ASTC_5x5_SFLOAT_BLOCK_EXT:1000066002,VK_FORMAT_ASTC_6x5_SFLOAT_BLOCK_EXT:1000066003,VK_FORMAT_ASTC_6x6_SFLOAT_BLOCK_EXT:1000066004,VK_FORMAT_ASTC_8x5_SFLOAT_BLOCK_EXT:1000066005,VK_FORMAT_ASTC_8x6_SFLOAT_BLOCK_EXT:1000066006,VK_FORMAT_ASTC_8x8_SFLOAT_BLOCK_EXT:1000066007,VK_FORMAT_ASTC_10x5_SFLOAT_BLOCK_EXT:1000066008,VK_FORMAT_ASTC_10x6_SFLOAT_BLOCK_EXT:1000066009,VK_FORMAT_ASTC_10x8_SFLOAT_BLOCK_EXT:1000066010,VK_FORMAT_ASTC_10x10_SFLOAT_BLOCK_EXT:1000066011,VK_FORMAT_ASTC_12x10_SFLOAT_BLOCK_EXT:1000066012,VK_FORMAT_ASTC_12x12_SFLOAT_BLOCK_EXT:1000066013,VK_FORMAT_G8B8G8R8_422_UNORM_KHR:1000156e3,VK_FORMAT_B8G8R8G8_422_UNORM_KHR:1000156001,VK_FORMAT_G8_B8_R8_3PLANE_420_UNORM_KHR:1000156002,VK_FORMAT_G8_B8R8_2PLANE_420_UNORM_KHR:1000156003,VK_FORMAT_G8_B8_R8_3PLANE_422_UNORM_KHR:1000156004,VK_FORMAT_G8_B8R8_2PLANE_422_UNORM_KHR:1000156005,VK_FORMAT_G8_B8_R8_3PLANE_444_UNORM_KHR:1000156006,VK_FORMAT_R10X6_UNORM_PACK16_KHR:1000156007,VK_FORMAT_R10X6G10X6_UNORM_2PACK16_KHR:1000156008,VK_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16_KHR:1000156009,VK_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16_KHR:1000156010,VK_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16_KHR:1000156011,VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16_KHR:1000156012,VK_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16_KHR:1000156013,VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16_KHR:1000156014,VK_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16_KHR:1000156015,VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16_KHR:1000156016,VK_FORMAT_R12X4_UNORM_PACK16_KHR:1000156017,VK_FORMAT_R12X4G12X4_UNORM_2PACK16_KHR:1000156018,VK_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16_KHR:1000156019,VK_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16_KHR:1000156020,VK_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16_KHR:1000156021,VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16_KHR:1000156022,VK_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16_KHR:1000156023,VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16_KHR:1000156024,VK_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16_KHR:1000156025,VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16_KHR:1000156026,VK_FORMAT_G16B16G16R16_422_UNORM_KHR:1000156027,VK_FORMAT_B16G16R16G16_422_UNORM_KHR:1000156028,VK_FORMAT_G16_B16_R16_3PLANE_420_UNORM_KHR:1000156029,VK_FORMAT_G16_B16R16_2PLANE_420_UNORM_KHR:1000156030,VK_FORMAT_G16_B16_R16_3PLANE_422_UNORM_KHR:1000156031,VK_FORMAT_G16_B16R16_2PLANE_422_UNORM_KHR:1000156032,VK_FORMAT_G16_B16_R16_3PLANE_444_UNORM_KHR:1000156033},ea=Object[o(921)](Hu);const oe=[171,75,84,88,32,50,48,187,13,10,26,10];var Mn,Rn,Dn,ta,Bo,In,Eo,Po,F2;(F2=Mn||(Mn={}))[F2.NONE=0]=o(1208),F2[F2.BASISLZ=1]=o(3724),F2[F2.ZSTD=2]=o(3822),F2[F2[o(876)]=3]=o(876),function(e){const x=o;e[e.BASICFORMAT=0]=x(2428)}(Rn||(Rn={})),function(e){const x=o;e[e[x(2469)]=0]=x(2469),e[e[x(2228)]=163]="ETC1S",e[e[x(1222)]=166]=x(1222)}(Dn||(Dn={})),function(e){const x=o;e[e[x(2469)]=0]=x(2469),e[e[x(1154)]=1]="SRGB"}(ta||(ta={})),function(e){const x=o;e[e[x(2469)]=0]=x(2469),e[e[x(2191)]=1]="LINEAR",e[e[x(1154)]=2]=x(1154),e[e.ITU=3]=x(810),e[e[x(2888)]=4]=x(2888),e[e[x(3001)]=5]=x(3001),e[e[x(2954)]=6]=x(2954)}(Bo||(Bo={})),function(e){const x=o;e[e[x(3156)]=0]="ALPHA_STRAIGHT",e[e[x(2811)]=1]=x(2811)}(In||(In={})),function(e){const x=o;e[e[x(2598)]=0]=x(2598),e[e.RRR=3]=x(2035),e[e[x(3006)]=4]="GGG",e[e.AAA=15]=x(2563)}(Eo||(Eo={})),function(e){const x=o;e[e[x(2598)]=0]=x(2598),e[e[x(4092)]=3]=x(4092),e[e.RRR=4]=x(2035),e[e[x(1393)]=5]=x(1393)}(Po||(Po={}));class zu{constructor(){const x=o;this[x(567)]=0,this[x(1347)]=1,this[x(3413)]=0,this[x(838)]=0,this[x(2044)]=0,this[x(2370)]=0,this[x(920)]=1,this[x(3647)]=Mn.NONE,this[x(1976)]=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:Rn.BASICFORMAT,versionNumber:2,descriptorBlockSize:40,colorModel:Dn[x(2469)],colorPrimaries:ta[x(1154)],transferFunction:ta[x(1154)],flags:In[x(3156)],texelBlockDimension:{x:4,y:4,z:1,w:1},bytesPlane:[],samples:[]}],this.keyValue={},this[x(447)]=null}}class di{constructor(x,t,a,r){const n=o;this[n(1237)]=new DataView(x[n(4056)],x[n(2471)]+t,a),this[n(644)]=r,this[n(565)]=0}[o(1320)](){const x=o,t=this[x(1237)].getUint8(this._offset);return this[x(565)]+=1,t}[o(2339)](){const x=o,t=this[x(1237)][x(2561)](this._offset,this[x(644)]);return this[x(565)]+=2,t}[o(2365)](){const x=o,t=this[x(1237)][x(3757)](this[x(565)],this[x(644)]);return this[x(565)]+=4,t}_nextUint64(){const x=o,t=this._dataView[x(3757)](this._offset,this._littleEndian)+2**32*this[x(1237)][x(3757)](this._offset+4,this[x(644)]);return this[x(565)]+=8,t}_skip(x){const t=o;return this[t(565)]+=x,this}[o(2971)](x,t=0){const a=o,r=this[a(565)];let n=0;for(;this[a(1237)][a(3341)](this[a(565)])!==t&&n<x;)n++,this[a(565)]++;return n<x&&this[a(565)]++,new Uint8Array(this._dataView[a(4056)],this[a(1237)][a(2471)]+r,n)}}function wo(e){const x=o;return x(1345)!=typeof TextDecoder?new TextDecoder()[x(2728)](e):Buffer[x(3911)](e)[x(2557)](x(3542))}function Ku(e){const x=o,t=new Uint8Array(e.buffer,e.byteOffset,oe[x(3650)]);if(t[0]!==oe[0]||t[1]!==oe[1]||t[2]!==oe[2]||t[3]!==oe[3]||t[4]!==oe[4]||t[5]!==oe[5]||t[6]!==oe[6]||t[7]!==oe[7]||t[8]!==oe[8]||t[9]!==oe[9]||t[10]!==oe[10]||t[11]!==oe[11])throw new Error(x(2088));const a=new zu,r=17*Uint32Array[x(3955)],n=new di(e,oe.length,r,!0);a.vkFormat=n[x(2365)](),a.typeSize=n[x(2365)](),a[x(3413)]=n[x(2365)](),a[x(838)]=n._nextUint32(),a[x(2044)]=n[x(2365)](),a[x(2370)]=n._nextUint32(),a.faceCount=n[x(2365)]();const s=n[x(2365)]();a[x(3647)]=n[x(2365)]();const u=n._nextUint32(),c=n[x(2365)](),f=n[x(2365)](),l=n[x(2365)](),m=n[x(2997)](),h=n[x(2997)](),C=new di(e,oe[x(3650)]+r,3*s*8,!0);for(let W=0;W<s;W++)a[x(1976)][x(2583)]({levelData:new Uint8Array(e[x(4056)],e[x(2471)]+C._nextUint64(),C[x(2997)]()),uncompressedByteLength:C[x(2997)]()});const p=new di(e,u,c,!0),_={vendorId:p._skip(4)._nextUint16(),descriptorType:p[x(2339)](),versionNumber:p[x(2339)](),descriptorBlockSize:p._nextUint16(),colorModel:p._nextUint8(),colorPrimaries:p[x(1320)](),transferFunction:p._nextUint8(),flags:p[x(1320)](),texelBlockDimension:{x:p[x(1320)]()+1,y:p._nextUint8()+1,z:p[x(1320)]()+1,w:p[x(1320)]()+1},bytesPlane:[p[x(1320)](),p[x(1320)](),p[x(1320)](),p[x(1320)](),p[x(1320)](),p[x(1320)](),p[x(1320)](),p[x(1320)]()],samples:[]},y=(_[x(2922)]/4-6)/4;for(let W=0;W<y;W++)_[x(2363)][W]={bitOffset:p[x(2339)](),bitLength:p._nextUint8(),channelID:p._nextUint8(),samplePosition:[p[x(1320)](),p[x(1320)](),p[x(1320)](),p._nextUint8()],sampleLower:p[x(2365)](),sampleUpper:p[x(2365)]()};a[x(1864)].length=0,a.dataFormatDescriptor[x(2583)](_);const A=new di(e,f,l,!0);for(;A[x(565)]<l;){const W=A._nextUint32(),x0=A[x(2971)](W),y0=wo(x0),f0=A[x(2971)](W-x0[x(3818)]);a[x(3788)][y0]=y0[x(3497)](/^ktx/i)?wo(f0):f0,A[x(565)]%4&&A._skip(4-A[x(565)]%4)}if(h<=0)return a;const b=new di(e,m,h,!0),B=b[x(2339)](),T=b[x(2339)](),M=b[x(2365)](),w=b._nextUint32(),I=b[x(2365)](),P=b[x(2365)](),V=[];for(let W=0;W<s;W++)V[x(2583)]({imageFlags:b._nextUint32(),rgbSliceByteOffset:b[x(2365)](),rgbSliceByteLength:b[x(2365)](),alphaSliceByteOffset:b[x(2365)](),alphaSliceByteLength:b[x(2365)]()});const q=m+b[x(565)],X=q+M,H=X+w,z=H+I,u0=new Uint8Array(e[x(4056)],e[x(2471)]+q,M),n0=new Uint8Array(e[x(4056)],e[x(2471)]+X,w),N=new Uint8Array(e.buffer,e.byteOffset+H,I),Y=new Uint8Array(e[x(4056)],e[x(2471)]+z,P);return a[x(447)]={endpointCount:B,selectorCount:T,imageDescs:V,endpointsData:u0,selectorsData:n0,tablesData:N,extendedData:Y},a}var So=[o(2104),o(1372),o(1622),o(2289),o(925),o(485)];Se[o(1564)]=function(e,x,t){const a=o;let r=this[a(3182)]({ktx2Buffer:t[a(2132)]});var n,s=0,u=!0,c=Cesium[a(820)](c,!0),f=t[a(2437)],l=t.wrapT;Array.isArray(r)&&(s=r[a(3650)],n=r[a(3403)](1,r.length)[a(3317)](function(h){return h.bufferView}),r=r[0]),c||(s=0,n=void 0,u=!1);var m=new Cesium.Sampler({wrapS:f,wrapT:l,minificationFilter:s!==0&&u?Cesium[a(2410)][a(2374)]:Cesium[a(2410)].LINEAR,magnificationFilter:Cesium[a(2410)][a(2191)]});return Uu(r[a(2796)])?new Cesium[a(1869)]({context:e,pixelFormat:r[a(2796)],width:r[a(2375)],height:r[a(2388)],source:{arrayBufferView:r[a(3846)],mipLevels:n},sampler:m}):new Texture({context:e,source:r,sampler:m})};var Mo=163,Ro=166;function ku(e,x){const t=o;var a,r=e[t(567)]===ea.VK_FORMAT_R8G8B8_SRGB?Ce[t(2598)]:Ce.RGBA;e[t(567)]===ea[t(4116)]?a=fi.UNSIGNED_BYTE:e.vkFormat===ea[t(1501)]?a=fi.HALF_FLOAT:e[t(567)]===ea[t(3985)]&&(a=fi.FLOAT);for(var n=0;n<e[t(1976)].length;++n){var s={};x[n]=s;for(var u=e[t(1976)][n][t(3932)],c=e.pixelWidth>>n,f=e[t(838)]>>n,l=c*f*Ce[t(479)](r),m=0;m<e[t(920)];++m){var h,C=u[t(2471)]+l*e.typeSize*m;h=Cesium[t(692)](a)&&fi.sizeInBytes(a)!==1?fi[t(3786)](a)===2?new Uint16Array(u[t(4056)],C,l):new Float32Array(u[t(4056)],C,l):new Uint8Array(u[t(4056)],C,l),s[So[m]]={internalFormat:r,datatype:a,width:c,height:f,levelBuffer:h}}}}function Wu(e,x,t){const a=o;var r,n,s=new Sn[a(1235)](e),u=s.getWidth(),c=s[a(2891)](),f=s[a(1381)]();if(s[a(3285)](),!(u>0&&c>0&&f>0))throw s[a(3700)](),s[a(3632)](),new Cesium.RuntimeError("Invalid KTX2 file");var l=x[a(1864)][0],m=Sn.transcoder_texture_format;if(l[a(3120)]===Mo)if(kx.etc)r=Ce.RGBA8_ETC2_EAC,n=m[a(2791)];else if(kx[a(844)])r=Ce[a(1649)],n=m[a(2501)];else if(kx[a(3306)])r=Ce[a(915)],n=m.cTFBC3_RGBA;else if(kx[a(1882)])r=Ce.RGBA_PVRTC_4BPPV1,n=m[a(1822)];else if(kx.astc)r=Ce[a(3437)],n=m[a(2972)];else{if(!kx.bc7)throw new Cesium[a(1295)](a(1448));r=Ce[a(3922)],n=m[a(2251)]}else if(l[a(3120)]===Ro)if(kx[a(3952)])r=Ce.RGBA_ASTC,n=m[a(2972)];else if(kx[a(2239)])r=Ce[a(3922)],n=m.cTFBC7_RGBA;else if(kx[a(3306)])r=Ce[a(915)],n=m[a(2670)];else if(kx[a(2806)])r=Ce[a(933)],n=m[a(2791)];else{if(kx.etc1,!kx[a(1882)])throw new Cesium[a(1295)](a(2327));r=Ce.RGBA_PVRTC_4BPPV1,n=m[a(1822)]}if(!s.startTranscoding())throw s[a(3700)](),s[a(3632)](),new Cesium.RuntimeError("startTranscoding() failed");for(var h=0;h<x.levels[a(3650)];++h){var C={};t[h]=C,u=x[a(3413)]>>h,c=x.pixelHeight>>h;var p=s[a(488)](h,0,0,n[a(2976)]),_=new Uint8Array(p),y=s[a(701)](_,h,0,0,n.value,0,-1,-1);if(!Cesium[a(692)](y))throw new Cesium[a(1295)](a(1724));C[So[0]]={internalFormat:r,width:u,height:c,levelBuffer:_}}return s[a(3700)](),s[a(3632)](),t}Se[o(3182)]=function(e){const x=o;var t,a=e[x(3064)];a instanceof ArrayBuffer&&(a=new Uint8Array(a));try{t=Ku(a)}catch{throw new Cesium.RuntimeError(x(2475))}if(t[x(2370)]!==0)throw new Cesium.RuntimeError(x(3079));if(t.pixelDepth!==0)throw new Cesium.RuntimeError("KTX2 3D textures are unsupported.");var r=t[x(1864)][0],n=new Array(t.levelCount);t[x(567)]!==0||r[x(3120)]!==Mo&&r[x(3120)]!==Ro?ku(t,n):Wu(a,t,n);var s,u=n[x(3650)],c=Object.keys(n[0]),f=c[x(3650)];for(s=0;s<u;s++)for(var l=n[s],m=0;m<f;m++){var h=l[c[m]];Cesium.CompressedTextureBuffer[x(3650)]===4?l[c[m]]=new Cesium.CompressedTextureBuffer(h[x(2796)],h.width,h.height,h[x(1382)]):l[c[m]]=new Cesium[x(1179)](h[x(2796)],h.datatype,h[x(2375)],h.height,h[x(1382)])}if(f===1){for(s=0;s<u;++s)n[s]=n[s][c[0]];u===1&&(n=n[0])}return n};const Wx=Cesium[o(516)],Ln=Cesium[o(1431)],Fn=Cesium[o(3362)],ia=Cesium[o(1475)],aa=Cesium.OrientedBoundingBox,On=Cesium.Matrix4,Xx=Cesium[o(692)],ge=Cesium[o(2746)],Nn=Cesium.Cartesian2,Xu=Cesium[o(2698)],ju=Cesium.AxisAlignedBoundingBox,qu=Cesium[o(3466)],na=Cesium[o(1370)],Yu=Cesium[o(2878)],Ju=Cesium.TerrainMesh,Vn=Cesium[o(3658)],Zu=Cesium[o(1755)],Un=Cesium.WebMercatorProjection,Qu=Cesium[o(1648)],$u=Cesium[o(2879)],xl=Cesium.Ray;var Vx=32767,ke=Vx/2|0,O2=new Wx,el=new Wx,tl=new Wx,gx=new Ln,Do=new Nn,il=[],Io=[],al=[],nl=[],rl=[],ol=[],sl=[],cl=new Wx,ul=new ia,ll=new aa,fl=new Nn;function We(){}function ra(e,x){const t=o;var a;return t(1355)==typeof e[t(3403)]&&t(1355)!=typeof(a=e.slice()).sort&&(a=void 0),Xx(a)||(a=Array.prototype[t(3403)][t(798)](e)),a[t(877)](x),a}function oa(e,x,t,a,r,n,s,u,c,f,l){const m=o;var h=u.north,C=u[m(852)],p=u[m(1090)],_=u.west;p<_&&(p+=ge[m(826)]);for(var y=t[m(3650)],A=0;A<y;++A){var b=t[A],B=r[b],T=n[b];gx[m(1454)]=ge.lerp(_,p,T.x)+f,gx.latitude=ge[m(2917)](C,h,T.y)+l,gx[m(2388)]=B-c;var M=s[m(1203)](gx,O2);x=a.encode(e,x,M,T,gx[m(2388)],Do,0)}}function Ux(){const e=o;this.vertexBuffer=void 0,this.index=void 0,this[e(3377)]=void 0,this.second=void 0,this[e(2516)]=void 0}Ux.prototype[o(3552)]=function(e){const x=o;return Xx(e)||(e=new Ux),e[x(2440)]=this[x(2440)],e[x(2059)]=this[x(2059)],e[x(2814)]=this[x(2814)],e[x(3220)]=this[x(3220)],e[x(3377)]=this[x(3377)],e[x(788)]=this[x(788)],e[x(2516)]=this.ratio,e},Ux[o(3096)][o(934)]=function(e,x,t,a){const r=o;this[r(2440)]=e,this.vBuffer=x,this.heightBuffer=t,this.index=a,this[r(3377)]=void 0,this[r(788)]=void 0,this[r(2516)]=void 0},Ux[o(3096)].initializeFromClipResult=function(e,x,t){const a=o;var r=x+1;return e[x]!==-1?t[e[x]][a(3552)](this):(this[a(1321)]=void 0,this[a(3220)]=void 0,this[a(3377)]=t[e[r]],++r,this[a(788)]=t[e[r]],++r,this.ratio=e[r],++r),r},Ux[o(3096)].getKey=function(){const e=o;return this[e(849)]()?this.index:JSON[e(2498)]({first:this[e(3377)][e(2965)](),second:this[e(788)][e(2965)](),ratio:this[e(2516)]})},Ux[o(3096)][o(849)]=function(){return Xx(this[o(3220)])},Ux.prototype[o(1661)]=function(){const e=o;return Xx(this[e(3220)])?this[e(2814)][this[e(3220)]]:ge[e(2917)](this.first[e(1661)](),this.second[e(1661)](),this[e(2516)])},Ux.prototype[o(1414)]=function(){const e=o;return Xx(this[e(3220)])?this[e(2440)][this.index]:ge[e(2917)](this[e(3377)].getU(),this[e(788)].getU(),this[e(2516)])},Ux.prototype[o(653)]=function(){const e=o;return Xx(this[e(3220)])?this.vBuffer[this[e(3220)]]:ge[e(2917)](this[e(3377)].getV(),this.second[e(653)](),this[e(2516)])};var se=[];function Lo(e,x,t,a,r,n,s){const u=o;if(n[u(3650)]!==0){for(var c=0,f=0;f<n[u(3650)];)f=se[c++][u(2392)](n,f,s);for(var l=0;l<c;++l){var m=se[l];if(m.isIndexed())m[u(3758)]=r[m[u(3220)]],m[u(2440)]=e,m[u(2059)]=x,m.heightBuffer=t;else{var h=m[u(2965)]();if(Xx(r[h]))m[u(3758)]=r[h];else{var C=e[u(3650)];e.push(m[u(1414)]()),x[u(2583)](m[u(653)]()),t[u(2583)](m.getH()),m[u(3758)]=C,r[h]=C}}}c===3?(a[u(2583)](se[0][u(3758)]),a[u(2583)](se[1][u(3758)]),a[u(2583)](se[2][u(3758)])):c===4&&(a.push(se[0].newIndex),a[u(2583)](se[1][u(3758)]),a[u(2583)](se[2][u(3758)]),a[u(2583)](se[0][u(3758)]),a[u(2583)](se[2][u(3758)]),a[u(2583)](se[3][u(3758)]))}}se[o(2583)](new Ux),se.push(new Ux),se[o(2583)](new Ux),se.push(new Ux),We[o(2736)]=function(e,x,t,a){const r=o;var n=e[r(2459)][r(650)],s=e[r(1195)],u=x._quantizedVertices,c=u.length/3,f=x[r(3783)][r(3650)]+x[r(3268)].length+x[r(918)][r(3650)]+x[r(1047)][r(3650)],l=s[r(2599)],m=s[r(852)],h=s[r(1090)],C=s.north,p=1*x[r(3919)],_=1*x._maximumHeight,y=Un[r(3917)](m),A=1/(Un[r(3917)](C)-y),b=x[r(3979)][r(3157)],B=u[r(1238)](0,c),T=u[r(1238)](c,2*c),M=u.subarray(2*c,3*c),w=new Array(c),I=new Array(c),P=new Array(c),V=new Array(c),q=el;q.x=Number[r(2499)],q.y=Number.POSITIVE_INFINITY,q.z=Number.POSITIVE_INFINITY;var X=tl;X.x=Number[r(4032)],X.y=Number[r(4032)],X.z=Number.NEGATIVE_INFINITY;var H=Number[r(2499)],z=Number[r(4032)],u0=Number[r(2499)],n0=Number[r(4032)];let N=new Wx,Y=0;for(var W=0;W<c;++W){var x0,y0;if(x[r(841)]()){var f0=B[W],v=T[W];x0=f0/Vx,y0=v/Vx,gx[r(1454)]=ge[r(2917)](l,h,x0),gx[r(1738)]=ge.lerp(m,C,y0),gx[r(2388)]=M[W]}else gx[r(1454)]=B[W],gx.latitude=T[W],gx[r(2388)]=M[W],x0=(gx[r(1454)]-l)/s[r(2375)],y0=(gx[r(1738)]-m)/s[r(2388)];H=Math[r(1803)](gx[r(1454)],H),z=Math[r(2092)](gx[r(1454)],z),u0=Math.min(gx[r(1738)],u0),n0=Math[r(2092)](gx.latitude,n0);var T0=n[r(1203)](gx);if(w[W]=new Nn(x0,y0),I[W]=gx[r(2388)],P[W]=T0,V[W]=(Un[r(3917)](gx[r(1738)])-y)*A,t){let N0=Math[r(3720)](.5*c);Y=W===N0?0:Y,W%N0===0?V[W]=0:(Y+=Wx.distance(N,T0),V[W]=Y/a),N=Wx.clone(T0,N)}}var F0,O0,w0=ra(x[r(3783)],function(N0,sx){return w[N0].y-w[sx].y}),U0=ra(x[r(3268)],function(N0,sx){return w[sx].y-w[N0].y}),xx=ra(x[r(918)],function(N0,sx){return w[sx].x-w[N0].x}),W0=ra(x._northIndices,function(N0,sx){return w[N0].x-w[sx].x});O0=ia[r(3274)](P),F0=aa[r(2199)](s,p,_,n),b=Wx[r(3552)](O0.center);var j0=Zu[r(631)](b,n),tx=On.inverseTransformation(j0,new On);for(W=0;W<c;W++)T0=P[W],On.multiplyByPoint(tx,T0,O2),Wx[r(1207)](O2,q,q),Wx.maximumByComponent(O2,X,X);for(var v0=new ju(q,X,b),ix=new qu(v0,p,_,j0,!1,!0),ax=ix.getStride(),H0=new Float32Array(c*ax+f*ax),G0=0,nx=0;nx<c;++nx)G0=ix[r(3937)](H0,G0,P[nx],w[nx],I[nx],Do,V[nx]);var L=Math[r(2092)](0,2*(f-4)),U=x[r(3624)][r(3650)]+3*L,K=na[r(3433)](c+f,U);K[r(2590)](x[r(3624)],0);var k=1e-4,d0=(z-H)*k,$=(n0-u0)*k,r0=-d0,a0=d0,e0=$,b0=-$,o0=c*ax;oa(H0,o0,w0,ix,I,w,n,s,x[r(3500)],r0,0),oa(H0,o0+=x._westIndices.length*ax,xx,ix,I,w,n,s,x[r(1968)],0,b0),oa(H0,o0+=x[r(918)][r(3650)]*ax,U0,ix,I,w,n,s,x[r(2348)],a0,0),oa(H0,o0+=x._eastIndices.length*ax,W0,ix,I,w,n,s,x[r(1466)],0,e0),Yu[r(3471)](w0,xx,U0,W0,c,K,x[r(3624)][r(3650)],void 0);var c0=x[r(2575)].length/3,S0=c0+x._westIndices.length+x[r(918)].length+x[r(3268)][r(3650)]+x[r(1047)][r(3650)],z0=na[r(3433)](S0,K[r(4056)]),q0=z0[r(3650)]===0;return x[r(536)]=new Ju(b,H0,z0,x[r(3624)].length,c0,p,_,O0,void 0,ax,F0,ix,1,w0,xx,U0,W0,q0),x[r(2575)]=void 0,x[r(1444)]=void 0,x[r(3624)]=void 0,x[r(2468)]=void 0,x[r(1104)]=void 0,x[r(795)]=void 0,x[r(3783)]=void 0,x._southIndices=void 0,x[r(3268)]=void 0,x[r(1047)]=void 0,x[r(536)]},We[o(4060)]=function(e,x){const t=o;var a=e[t(4033)];if(Xx(a)&&Xx(a[t(1426)])&&Xx(x)){var r=x,n=a.x,s=a.y;a.level;var u=r[t(536)];if(Xx(u)){var c=2*n!==e.x,f=2*s===e.y,l=e.tilingScheme,m=l[t(650)],h=l[t(1568)](e.x,e.y,e[t(2337)]),C=c?ke:0,p=c?Vx:ke,_=f?ke:0,y=f?Vx:ke,A=nl,b=rl,B=ol;A.length=0,b[t(3650)]=0,B[t(3650)]=0;var T=sl;T[t(3650)]=0;var M={},w=u[t(2485)],I=u[t(2687)];I=I.subarray(0,u[t(2258)]);var P=u[t(3419)],V=u[t(2726)],q=0,X=u[t(3051)];r[t(3919)],r._maximumHeight;var H,z,u0,n0,N,Y=new Array(X),W=new Array(X),x0=new Array(X);for(z=0,u0=0;z<X;++z,u0+=2){var y0=P[t(1006)](w,z,fl);H=P[t(2973)](w,z)/V,n0=ge[t(1263)](y0.x*Vx|0,0,Vx),N=ge[t(1263)](y0.y*Vx|0,0,Vx),x0[z]=H,n0<20&&(n0=0),N<20&&(N=0),Vx-n0<20&&(n0=Vx),Vx-N<20&&(N=Vx),Y[z]=n0,W[z]=N,(c&&n0>=ke||!c&&n0<=ke)&&(f&&N>=ke||!f&&N<=ke)&&(M[z]=q,A[t(2583)](n0),b[t(2583)](N),B[t(2583)](x0[z]),++q)}var f0=[];f0[t(2583)](new Ux),f0.push(new Ux),f0[t(2583)](new Ux);var v,T0=[];for(T0[t(2583)](new Ux),T0[t(2583)](new Ux),T0[t(2583)](new Ux),z=0;z<I[t(3650)];z+=3){var F0=I[z],O0=I[z+1],w0=I[z+2],U0=Y[F0],xx=Y[O0],W0=Y[w0];f0[0][t(934)](Y,W,x0,F0),f0[1].initializeIndexed(Y,W,x0,O0),f0[2][t(934)](Y,W,x0,w0);var j0=Vn.clipTriangleAtAxisAlignedThreshold(ke,c,U0,xx,W0,il);(v=0)>=j0[t(3650)]||(v=T0[0][t(2392)](j0,v,f0))>=j0.length||(v=T0[1][t(2392)](j0,v,f0))>=j0[t(3650)]||(v=T0[2][t(2392)](j0,v,f0),Lo(A,b,B,T,M,Vn[t(3592)](ke,f,T0[0][t(653)](),T0[1].getV(),T0[2][t(653)](),Io),T0),v<j0.length&&(T0[2][t(3552)](T0[1]),T0[2][t(2392)](j0,v,f0),Lo(A,b,B,T,M,Vn[t(3592)](ke,f,T0[0][t(653)](),T0[1][t(653)](),T0[2][t(653)](),Io),T0)))}var tx=c?-Vx:0,v0=f?-Vx:0,ix=[],ax=[],H0=[],G0=[],nx=Number[t(1659)],L=-nx,U=al;U[t(3650)]=0;var K=h,k=K.north,d0=K[t(852)],$=K[t(1090)],r0=K[t(2599)];for($<r0&&($+=ge[t(826)]),z=0;z<A[t(3650)];++z)(n0=Math[t(2744)](A[z]))<=C?(ix[t(2583)](z),n0=0):n0>=p?(H0[t(2583)](z),n0=Vx):n0=2*n0+tx,A[z]=n0,(N=Math[t(2744)](b[z]))<=_?(ax[t(2583)](z),N=0):N>=y?(G0[t(2583)](z),N=Vx):N=2*N+v0,b[z]=N,(H=B[z])<nx&&(nx=H),H>L&&(L=H),B[z]=H,gx[t(1454)]=ge[t(2917)](r0,$,n0/Vx),gx[t(1738)]=ge[t(2917)](d0,k,N/Vx),gx.height=H,m.cartographicToCartesian(gx,O2),U.push(O2.x),U[t(2583)](O2.y),U.push(O2.z);var a0=ia[t(2018)](U,Wx.ZERO,3,ul),e0=aa.fromRectangle(K,nx,L,m,ll),b0=new Xu(m)[t(2293)](a0.center,U,3,a0[t(3157)],nx,cl),o0=new Float64Array(A[t(3650)]+b[t(3650)]+B[t(3650)]);for(z=0;z<A[t(3650)];++z)o0[z]=A[z];var c0=A[t(3650)];for(z=0;z<b.length;++z)o0[c0+z]=b[z];for(c0+=b[t(3650)],z=0;z<B.length;++z)o0[c0+z]=B[z];var S0=na[t(3433)](A[t(3650)],T),z0=new Float64Array(o0[t(4056)]),q0=na[t(3433)](z0[t(3650)]/3,S0[t(4056)]),N0=Math[t(1803)](r._westSkirtHeight,r[t(2348)]);N0=Math[t(1803)](N0,r[t(1968)]),N0=Math[t(1803)](N0,r[t(1466)]);var sx=r._credits;if(z0.length!==0)return new Fn({quantizedVertices:z0,indices:q0,minimumHeight:nx,maximumHeight:L,boundingSphere:a0,orientedBoundingBox:e0,horizonOcclusionPoint:b0,westIndices:ix,southIndices:ax,eastIndices:H0,northIndices:G0,westSkirtHeight:0,southSkirtHeight:0,eastSkirtHeight:0,northSkirtHeight:0,childTileMask:0,credits:sx,createdByUpsampling:!0})}}},We[o(909)]=function(e,x,t,a,r){const n=o;e[n(1426)],e.rectangle;var s=[].concat(Wx.unpackArray(x.attributes[n(3009)][n(2496)])),u=s[n(3650)],c=new Float64Array(3*u);let f=-Number.MAX_VALUE;for(let p=0;p<u;p++){var l=s[p];Ln[n(3993)](l,void 0,gx);var m=gx.height;if(Xx(r))if(m<-99)m=t;else{var h=Cl(e,gx);m=r+(h=h>0?h:0)}c[p]=gx.longitude,c[u+p]=gx[n(1738)],c[2*u+p]=m,f=Math.max(f,m)}var C=x[n(2687)];return new Fn({quantizedVertices:c,indices:C,encodedNormals:void 0,minimumHeight:t,maximumHeight:f,boundingSphere:new ia,orientedBoundingBox:new aa,horizonOcclusionPoint:new Wx,westIndices:[],southIndices:[],eastIndices:[],northIndices:[],westSkirtHeight:0,southSkirtHeight:0,eastSkirtHeight:0,northSkirtHeight:0,childTileMask:0,credits:void 0,createdByUpsampling:!1})};var dl=new Wx,Fo=new Wx,ml=new Ln,hl=new xl;function Cl(e,x){const t=o;if(!Xx(x))throw new DeveloperError("cartographic is required");for(;e[t(1115)]===Qu.REFINED;)e=Gn(e[t(3331)],x)||Gn(e[t(1274)],x)||Gn(e.northwestChild,x)||e[t(2385)];if(Xx(e[t(1426)])&&Xx(e[t(1426)][t(1859)])){var a=e[t(2459)].ellipsoid,r=Wx[t(655)](x[t(1454)],x.latitude,0,a,dl),n=hl,s=a.geodeticSurfaceNormal(r,n[t(3249)]),u=a.getSurfaceNormalIntersectionWithZAxis(r,11500,n[t(2880)]);if(!Xx(u)){var c=Math[t(1803)](defaultValue(e[t(1426)].minimumHeight,0),-11500),f=Wx[t(1582)](s,Math[t(905)](c)+1,Fo);Wx[t(758)](r,f,n[t(2880)])}if(Xx(e[t(1426)][t(591)])&&e[t(1426)][t(591)]instanceof Fn)return e[t(1426)][t(591)][t(2641)](e[t(1195)],x[t(1454)],x[t(1738)]);var l=e[t(1426)][t(3869)](n,void 0,void 0,!1,Fo);if(Xx(l))return a[t(3563)](l,ml)[t(2388)]}}function Gn(e,x){const t=o;return $u.contains(e[t(1195)],x)?e:void 0}var bl={ISERVER_TOKEN:"token",IPORTAL_KEY:o(2290)},Me=Object.freeze(bl);/**
 * @license
 *
 * Grauw URI utilities
 *
 * See: http://hg.grauw.nl/grauw-lib/file/tip/src/uri.js
 *
 * @author Laurens Holst (http://www.grauw.nl/)
 *
 *   Copyright 2012 Laurens Holst
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 */function Ex(e){const x=o;if(e instanceof Ex)this[x(4143)]=e[x(4143)],this[x(1878)]=e.authority,this[x(757)]=e[x(757)],this[x(2894)]=e[x(2894)],this[x(1924)]=e.fragment;else if(e){var t=pl.exec(e);this.scheme=t[1],this[x(1878)]=t[2],this[x(757)]=t[3],this[x(2894)]=t[4],this[x(1924)]=t[5]}}Ex[o(3096)].scheme=null,Ex[o(3096)].authority=null,Ex[o(3096)][o(757)]="",Ex[o(3096)].query=null,Ex[o(3096)][o(1924)]=null;var pl=new RegExp(o(3033));Ex[o(3096)].getScheme=function(){return this[o(4143)]},Ex[o(3096)][o(500)]=function(){return this[o(1878)]},Ex[o(3096)].getPath=function(){return this[o(757)]},Ex[o(3096)][o(3381)]=function(){return this[o(2894)]},Ex[o(3096)][o(1748)]=function(){return this.fragment},Ex.prototype[o(3949)]=function(){return!!this[o(4143)]&&!this.fragment},Ex[o(3096)][o(4131)]=function(e){const x=o;return e[x(4143)]==this.scheme&&e.authority==this.authority&&e[x(757)]==this.path&&e.query==this[x(2894)]},Ex[o(3096)][o(4168)]=function(e){const x=o;return this[x(4131)](e)&&e.fragment==this[x(1924)]},Ex[o(3096)][o(1586)]=function(){const e=o;this.removeDotSegments(),this.scheme&&(this[e(4143)]=this[e(4143)].toLowerCase()),this[e(1878)]&&(this[e(1878)]=this[e(1878)].replace(Al,yl)[e(960)](sa,ca)),this.path&&(this[e(757)]=this[e(757)][e(960)](sa,ca)),this[e(2894)]&&(this[e(2894)]=this.query[e(960)](sa,ca)),this[e(1924)]&&(this[e(1924)]=this[e(1924)].replace(sa,ca))};var sa=/%[0-9a-z]{2}/gi,vl=/[a-zA-Z0-9\-\._~]/,Al=/(.*@)?([^@:]*)(:.*)?/;function ca(e){const x=o;var t=unescape(e);return vl[x(1528)](t)?t:e[x(3074)]()}function yl(e,x,t,a){return(x||"")+t[o(3193)]()+(a||"")}Ex[o(3096)].resolve=function(e){const x=o;var t=new Ex;return this[x(4143)]?(t[x(4143)]=this[x(4143)],t[x(1878)]=this[x(1878)],t.path=this.path,t[x(2894)]=this[x(2894)]):(t[x(4143)]=e[x(4143)],this[x(1878)]?(t.authority=this[x(1878)],t.path=this.path,t.query=this[x(2894)]):(t.authority=e[x(1878)],this.path==""?(t[x(757)]=e[x(757)],t[x(2894)]=this[x(2894)]||e[x(2894)]):(this[x(757)].charAt(0)=="/"?(t.path=this.path,t[x(3544)]()):(e[x(1878)]&&e[x(757)]==""?t[x(757)]="/"+this[x(757)]:t[x(757)]=e[x(757)][x(2629)](0,e[x(757)][x(3308)]("/")+1)+this.path,t.removeDotSegments()),t[x(2894)]=this[x(2894)]))),t[x(1924)]=this[x(1924)],t},Ex[o(3096)][o(3544)]=function(){const e=o;var x,t=this[e(757)][e(1830)]("/"),a=[],r=t[0]=="";for(r&&t.shift(),t[0]==""&&t[e(1523)]();t.length;)(x=t[e(1523)]())==".."?a[e(1526)]():x!="."&&a[e(2583)](x);x!="."&&x!=".."||a[e(2583)](""),r&&a.unshift(""),this[e(757)]=a[e(2243)]("/")},Ex.prototype[o(2557)]=function(){const e=o;var x="";return this.scheme&&(x+=this.scheme+":"),this.authority&&(x+="//"+this.authority),x+=this[e(757)],this[e(2894)]&&(x+="?"+this[e(2894)]),this[e(1924)]&&(x+="#"+this.fragment),x};const _l=Cesium[o(820)],Re=Cesium[o(692)],Oo=Cesium[o(1785)];function Hn(e,x,t){const a=o;if(!Re(e))throw new Oo(a(1730));if(!Re(x))throw new Oo("second is required");if(t=_l(t,!0),e instanceof Ex||(e=new Ex(e)),x instanceof Ex||(x=new Ex(x)),e[a(4143)]==="data")return e[a(2557)]();if(a(1426)===x[a(4143)])return x.toString();Re(x[a(1878)])&&!Re(x[a(4143)])&&(a(1345)!=typeof document&&Re(document.location)&&Re(document[a(819)][a(2318)])?x.scheme=new Ex(document[a(819)].href)[a(4143)]:x[a(4143)]=e[a(4143)]);var r=e;x[a(3949)]()&&(r=x);var n="";Re(r.scheme)&&(n+=r[a(4143)]+":"),Re(r[a(1878)])&&(n+="//"+r.authority,r[a(757)]!==""&&r[a(757)]!=="/"&&(n=n[a(960)](/\/?$/,"/"),r[a(757)]=r[a(757)][a(960)](/^\/?/g,""),r[a(1878)]===""&&(n+="/"))),n+=r===e?t?e[a(757)].replace(/\/?$/,"/")+x[a(757)][a(960)](/^\/?/g,""):e[a(757)]+x[a(757)]:x.path;var s=Re(e.query),u=Re(x[a(2894)]);s&&u?n+="?"+e.query+"&"+x[a(2894)]:s&&!u?n+="?"+e[a(2894)]:!s&&u&&(n+="?"+x[a(2894)]);var c=Re(x.fragment);return Re(e[a(1924)])&&!c?n+="#"+e[a(1924)]:c&&(n+="#"+x[a(1924)]),n}const No=Cesium[o(692)],Vo=Cesium[o(820)],gl=Cesium[o(1785)],Xe=Cesium[o(2895)];function P0(e,x){const t=o;this[t(1628)]={},this[t(4037)](e,x)}Object.defineProperties(P0[o(3096)],{value:{get:function(){return this[o(1256)]},set:function(e){this._value=e}},name:{get:function(){return this[o(3244)]},set:function(e){this._name=e}}}),P0[o(955)]=function(e){const x=o;var t,a=e[x(2629)](0,e.indexOf(x(1565))+10);if(No(P0[x(3260)][x(1628)][a]))switch(P0[x(3260)][x(1628)][a][x(729)]){case Me.ISERVER_TOKEN:t="?"+Xe({token:P0[x(3260)][x(1628)][a].value});break;case Me[x(1922)]:t="?"+Xe({key:P0[x(3260)][x(1628)][a].value});break;default:t=""}else switch(P0.CREDENTIAL[x(3085)]){case Me.ISERVER_TOKEN:t="?"+Xe({token:P0[x(3260)][x(2976)]});break;case Me[x(1922)]:t="?"+Xe({key:P0[x(3260)].value});break;default:t="?"+P0.CREDENTIAL.name+"="+P0[x(3260)][x(2976)]}return Hn(e,t,!1)},P0[o(1386)]=function(e,x){const t=o;var a;if(No(P0.CREDENTIAL[t(1628)][e])){if(P0[t(3260)][t(1628)][e][t(729)]instanceof Array){var r,n=P0[t(3260)][t(1628)][e][t(729)],s=P0[t(3260)][t(1628)][e][t(2976)];(c={})[n[0]]=s[0],r=Hn(x,"?"+Xe(c),!1);for(var u=1;u<n.length;u++)(c={})[n[u]]=s[u],r=r+"&"+Xe(c);return r}switch(P0.CREDENTIAL[t(1628)][e][t(729)]){case Me[t(1417)]:a="?"+Xe({token:P0.CREDENTIAL[t(1628)][e][t(2976)]});break;case Me.IPORTAL_KEY:a="?"+Xe({key:P0[t(3260)][t(1628)][e][t(2976)]});break;default:var c;(c={})[P0[t(3260)][t(1628)][e].type]=P0.CREDENTIAL[t(1628)][e][t(2976)],a="?"+Xe(c)}}else switch(P0[t(3260)][t(3085)]){case Me[t(1417)]:a="?"+Xe({token:P0[t(3260)].value});break;case Me.IPORTAL_KEY:a="?"+Xe({key:P0.CREDENTIAL.value});break;default:a="?"+P0[t(3260)].name+"="+P0[t(3260)].value}return Hn(x,a,!1)},P0[o(3096)].addCredential=function(e,x){const t=o;if(e instanceof Array){for(var a=0,r=e[t(3650)];a<r;a++)if(this[t(1628)][e[a].rooturl]={type:e[a][t(729)]||Me[t(1417)],value:e[a][t(2976)]},e[a][t(1098)][t(3019)](t(1565))!==-1){var n=e[a][t(1098)].substring(0,e[a].rooturl[t(3308)](t(1565))+10);this._keymap[n]={type:e[a][t(729)]||Me[t(1417)],value:e[a][t(2976)]}}}else{if(this[t(1256)]=Vo(e,""),e==null)throw new gl(t(2449));this[t(3244)]=Vo(x,Me[t(1417)]),this[t(1628)][t(3165)]={type:this[t(3244)],value:this[t(1256)]}}},P0[o(3260)]=null;const Te=Cesium[o(692)];function Uo(e){const x=o;for(var t=Number.MAX_VALUE,a=-Number[x(1659)],r=2,n=e[x(3650)];r<n;r+=3){var s=e[r];t=Math[x(1803)](t,s),a=Math[x(2092)](a,s)}return{min:t,max:a}}Cesium[o(1915)].prototype[o(3555)]=function(e){const x=o,t=e[x(3085)],a=e[x(3009)];let r=e[x(2388)];if(!Te(t)||!Te(a)||!Te(r))return;r=Math[x(2092)](r,1);const n=this[x(3683)][x(3619)];let s=n[x(3404)];if(Te(s)||(s=n[x(3404)]=new Cesium[x(2902)]),s.contains(t))return;let u=Uo(a),c=u.min-r,f=u[x(2092)];const l=Cesium[x(516)][x(2084)](a);let m=0;for(let w=0,I=l.length;w<I;w++){let P=l[w],V=w===I-1?l[0]:l[w+1];m+=Cesium.Cartesian3.distance(P,V)}const h=new Cesium[x(4028)]({polygonHierarchy:{positions:l}}),C=.01*Math.PI/Math.pow(2,11)/64,p=new Cesium[x(4028)]({polygonHierarchy:{positions:l},granularity:C,extrudedHeight:-100,closeTop:!1,closeBottom:!1}),_=new Cesium[x(4028)]({polygonHierarchy:{positions:l},height:c}),y=Cesium[x(4028)][x(4110)](h),A=Cesium.PolygonGeometry.createGeometry(p),b=Cesium[x(4028)][x(4110)](_),B=Cesium[x(2879)][x(2270)](l),T=Cesium[x(1475)].fromRectangle3D(B,Cesium[x(2024)].WGS84,f),M={rectangle:B,worldGeometry:y,sideGeometry:A,bottomGeometry:b,positions:a,modelMatrix:Cesium.Matrix4[x(562)](new Cesium.Cartesian3(a[0],a[1],0),new Cesium[x(2235)]),command:void 0,name:t,height:c,minimumHeight:c,maximumHeight:f,totalLength:m,oriPointCount:l[x(3650)],boundingVolume:T};n[x(3404)][x(2590)](t,M),n[x(3491)]=!0},Cesium[o(1915)].prototype[o(2142)]=function(e){const x=o,t=this[x(3683)][x(3619)];if(!Te(t[x(3404)]))return;const a=t[x(3404)];if(!a[x(2715)](e))return;t._removeExcavationCommands(e);const r=a[x(3715)](e);Te(r[x(1841)])&&(r[x(1841)][x(2457)]=r[x(1841)][x(2457)]&&!r.command.vertexArray[x(3777)]()&&r[x(1841)][x(2457)].destroy(),r[x(1841)][x(2360)]=r.command[x(2360)]&&!r[x(1841)].shaderProgram[x(3777)]()&&r[x(1841)][x(2360)].destroy()),r[x(1841)]=void 0,a[x(1578)](e)},Cesium[o(1915)][o(3096)].removeAllExcavationRegion=function(){const e=o,x=this[e(3683)][e(3619)];if(!Te(x._excavateRegions))return;x[e(2057)]();const t=Object[e(3360)](x[e(3404)][e(2241)]);for(let a=0,r=t[e(3650)];a<r;a++){let n=t[a];this[e(2142)](n)}x._excavateRegions[e(1470)]()},Cesium[o(1915)][o(3096)][o(1491)]=function(e){const x=o,t=e[x(3085)],a=e[x(3009)];if(!Te(t)||!Te(a))return;const r=this[x(3683)][x(3619)];let n=r[x(2167)];if(Te(n)||(n=r._modifyRegions=new Cesium[x(2902)]),n[x(2715)](t))return;const s=Uo(a),u=s.min,c=s[x(2092)],f=Cesium[x(516)][x(2084)](a);let l=0;for(let T=0,M=f.length;T<M;T++){let w=f[T],I=T===M-1?f[0]:f[T+1];l+=Cesium[x(516)].distance(w,I)}const m=Cesium[x(4028)].createGeometry(new Cesium[x(4028)]({polygonHierarchy:{positions:f},extrudedHeight:Math[x(1803)](-1e3,u),perPositionHeight:!0}));if(!m)return;const h=Cesium[x(4028)][x(4110)](new Cesium.PolygonGeometry({polygonHierarchy:{positions:f},perPositionHeight:!0})),C=.01*Math.PI/Math.pow(2,11)/64,p=new Cesium[x(4028)]({polygonHierarchy:{positions:f},granularity:C,extrudedHeight:-100,closeTop:!1,closeBottom:!1}),_=Cesium[x(4028)][x(4110)](p),y=Cesium[x(2879)].fromCartesianArray(f),A=[];f.forEach(T=>{const M=x;A[M(2583)](Cesium[M(1431)].fromCartesian(T))});const b=Cesium[x(1475)][x(1920)](y,Cesium[x(2024)][x(2760)],c);b.radius=Math[x(2092)](b[x(1707)],c);const B={geometry:m,worldGeometry:h,sideGeometry:_,modelMatrix:Cesium.Matrix4[x(562)](new Cesium[x(516)](a[0],a[1],0),new Cesium.Matrix4),rectangle:y,minimumHeight:Math[x(1803)](0,u),maximumHeight:c,command:void 0,cartographics:A,name:t,totalLength:l,oriPointCount:f.length,boundingVolume:b,modifyTiles:[]};n[x(2590)](t,B),r[x(3526)]=!0},Cesium.Globe.prototype[o(1802)]=function(e){const x=o,t=this[x(3683)][x(3619)];if(!Te(t[x(2167)]))return;const a=t[x(2167)];if(!a.contains(e))return;t._removeModifyRegionSideCommands(e);const r=a[x(3715)](e);Te(r[x(1841)])&&(r[x(1841)][x(2457)]=r[x(1841)][x(2457)]&&!r[x(1841)][x(2457)].isDestroyed()&&r[x(1841)][x(2457)][x(3701)](),r[x(1841)][x(2360)]=r.command[x(2360)]&&!r.command.shaderProgram[x(3777)]()&&r[x(1841)][x(2360)][x(3701)]()),r[x(1841)]=void 0;const n=r[x(2050)];for(let s=0,u=n[x(3650)];s<u;s++){let c=n[s];const f=c[x(469)][e];c[x(4107)]=c[x(4107)][x(2234)](m=>f!==m);const l=c[x(2271)][e];c.modifyTerrainVertexArray=c[x(1175)][x(2234)](m=>m!==l),l&&!l[x(3777)]()&&l[x(3701)](),delete c.modifyRegionsMap[e],delete c[x(3882)][e],delete c[x(469)][e],delete c.modifyTerrainVertexArrayMap[e]}r[x(2050)][x(3650)]=0,t[x(2167)][x(1578)](e)},Cesium.Globe[o(3096)][o(882)]=function(){const e=o,x=this[e(3683)][e(3619)];if(!Te(x._modifyRegions))return;const t=Object[e(3360)](x._modifyRegions._hash);for(let a=0,r=t[e(3650)];a<r;a++){let n=t[a];this[e(1802)](n)}x._modifyRegions[e(1470)]()};var Tl={};const nt=Cesium.defined;Cesium.GlobeSurfaceShaderSet.prototype[o(2546)]=Cesium[o(1933)][o(3096)][o(3370)],Cesium[o(1933)][o(3096)].getShaderProgram=function(e){const x=o,t=e[x(3730)][x(716)];let a=this[x(2546)](e);const r=e.surfaceTile[x(1524)];if(!nt(r)||(0|Cesium[x(820)](r[x(4178)],!1))===0)return a;let n=t[x(1516)][x(690)](a,x(1671));if(!nt(n)){const s=a[x(1191)],u=a.vertexShaderSource[x(3552)](),c=a.fragmentShaderSource[x(3552)]();u[x(3553)]=nt(u[x(3553)])?u[x(3553)][x(3403)](0):[],c[x(3553)]=nt(c[x(3553)])?c[x(3553)][x(3403)](0):[],c[x(3553)][x(2583)]("Apply_Excavation");const f=x(3227),l=c[x(3347)];l[x(3355)](f);let m=l[x(3650)];for(let C=0;C<m;++C)l[C]=Cesium[x(635)][x(3973)](l[C],x(3878));const h=x(864);l[x(2583)](h),n=t[x(1516)][x(2473)](a,"Globe_Excavation",{vertexShaderSource:u,fragmentShaderSource:c,attributeLocations:s})}return n},Cesium[o(1933)][o(3096)][o(723)]=Cesium[o(1933)][o(3096)].destroy,Cesium[o(1933)][o(3096)][o(3701)]=function(){const e=o;let x,t;const a=this[e(1088)];if(nt(a)){for(const r in a)if(a.hasOwnProperty(r)){const n=a[r];if(!nt(n))continue;for(x in n)n[e(2364)](x)&&(t=n[x],nt(t)&&t[e(3701)]())}}this.hookDestroy()};var Bl={};const h2=Cesium[o(692)];function El(e){const x=o;let t=e[x(1426)],a=Number.MAX_VALUE,r=Number[x(2341)];for(let f=0,l=t.modifyTerrainMesh[x(3650)];f<l;f++){let m=t[x(4107)][f];a=Math[x(1803)](a,m[x(2694)]),r=Math[x(2092)](r,m[x(1951)])}const n=a,s=r;let u=t[x(1716)],c=e.parent;for(;!h2(u)&&h2(c)&&h2(c[x(1426)]);)t=c.data,u=t.mesh,c=c.parent;if(h2(u))return a=Math[x(1803)](u[x(2694)],n),r=Math[x(2092)](u[x(1951)],s),Cesium.OrientedBoundingBox[x(2199)](e[x(1195)],a,r)}function Pl(e,x,t,a){const r=o,n=x[r(1426)],s=Cesium[r(3230)][r(1037)](e,t);return n[r(1175)][r(2583)](s),n.orientedBoundingBox=El(x),s}Cesium[o(3230)][o(3096)].createModifyVertexArray=function(e,x,t,a,r){const n=o,s=Cesium[n(820)](a[n(1091)],a[n(1995)]),u=a[n(2694)],c=a.maximumHeight;if(h2(this[n(664)])||(this[n(664)]={}),this[n(664)][a.name])return!0;let f;if(r){const m=t.parent.data.modifyTerrainData[a[n(3085)]];f=We[n(4060)](t,m)}else f=We[n(909)](t,s,u,c,a.extractHeight);if(!h2(f))return!1;h2(this[n(1175)])||(this[n(3882)]={},this[n(469)]={},this[n(2271)]={},this[n(4107)]=[],this[n(1175)]=[]),this[n(3882)][a[n(3085)]]=f;const l=We[n(2736)](t,f,!1,a[n(2153)]);return this[n(4107)][n(2583)](l),this[n(469)][a[n(3085)]]=l,this[n(2271)][a[n(3085)]]=Pl(e,t,l),this[n(664)][a[n(3085)]]=!0,a.modifyTiles[n(2583)](this),this[n(2555)]=a[n(2050)],!0},Cesium[o(3230)][o(3096)][o(1676)]=Cesium[o(3230)][o(3096)][o(1525)],Cesium[o(3230)][o(3096)].freeVertexArray=function(){const e=o;this[e(1676)]();const x=this[e(1175)];if(h2(x)&&x[e(3650)]>0){for(let t=0;t<x[e(3650)];t++)Cesium.GlobeSurfaceTile[e(4169)](x[t]);if(this[e(3882)]=void 0,this[e(469)]=void 0,this[e(2271)]=void 0,this[e(4107)]=void 0,this[e(664)]=void 0,this[e(1175)]=void 0,h2(this.modifyRegionTiles)){let t=this[e(2555)][e(3019)](this);this[e(2555)][e(1805)](t,1),this[e(2555)]=void 0}}};var wl={};const Z0=Cesium[o(692)],zn=new Cesium[o(2351)],Kn=new Cesium[o(516)],ua=new Cesium.Cartographic,Sl=new Cesium[o(516)],la=new Cesium.Matrix4,mi=new Cesium[o(2351)];function Ml(e,x,t){const a=o;if(t){let r=e.camera[a(2509)][a(3901)](Cartographic[a(2136)](x[a(4008)][0],x[a(4008)][1]));r=new Cesium[a(516)](r.z,r.x,r.y),x[a(893)]=Cesium.Matrix4[a(562)](r)}else x[a(893)]=Cesium[a(1755)].eastNorthUpToFixedFrame(Cesium[a(516)][a(2136)](x[a(4008)][0],x[a(4008)][1]))}function Rl(e,x){const t=o,a=Cesium.Matrix4.getTranslation(x,new Cesium[t(516)]),r=e[t(3126)][t(3009)][t(2496)],n=r[t(3650)];for(let s=0;s<n;s+=3){Cesium[t(516)].unpack(r,s,Kn),Cesium[t(1431)].fromCartesian(Kn,void 0,ua);let u=Cesium[t(2746)][t(3028)](ua.longitude);u-=a.x;let c=Cesium[t(2746)][t(3028)](ua.latitude);c-=a.y,r[s]=u,r[s+1]=c,r[s+2]=ua.height-1}}function Go(e,x){const t=o;if(Z0(x[t(1841)]))return;const a=new Cesium.DrawCommand({primitiveType:Cesium[t(1970)].TRIANGLES,modelMatrix:x[t(931)]});Rl(x[t(2305)],x[t(931)]),a.vertexArray=Cesium[t(2380)][t(1847)]({context:e,geometry:x.worldGeometry,attributeLocations:{position:0},bufferUsage:Cesium[t(3586)][t(2109)],interleave:!0});var r=new Cesium[t(635)]({sources:[t(3061)]}),n=new Cesium[t(635)]({sources:[t(2224)]});a[t(2360)]=Cesium[t(2416)][t(4073)]({context:e,vertexShaderSource:r,fragmentShaderSource:n,attributeLocations:{position:0}}),x[t(1841)]=a}function Ho(e,x){const t=o;if(!x[t(589)]){const a=Qx(t(3222));Cesium[t(1702)][t(1554)](a)[t(3941)]()[t(4167)](function(r){const n=t;x._excavationSideTexture=new Cesium[n(1869)]({context:e.context,source:r,sampler:new Cesium.Sampler({wrapS:Cesium[n(587)][n(3623)],wrapT:Cesium.TextureWrap[n(3623)],minificationFilter:Cesium.TextureMinificationFilter.LINEAR_MIPMAP_NEAREST,magnificationFilter:Cesium[n(2410)][n(2191)]})}),x[n(589)].generateMipmap(Cesium.MipmapHint.NICEST)})}}function zo(e,x){const t=o;if(!Z0(x[t(1066)])){const a=Qx("Assets/Textures/excavationregion_bottom.jpg");Cesium.Resource[t(1554)](a)[t(3941)]()[t(4167)](function(r){const n=t;x[n(1066)]=new Cesium[n(1869)]({context:e.context,source:r,sampler:new Cesium[n(1365)]({minificationFilter:Cesium.TextureMinificationFilter[n(2874)],magnificationFilter:Cesium.TextureMinificationFilter[n(2191)]})}),x[n(1066)][n(2216)](Cesium.MipmapHint[n(1031)])})}}function Ko(e,x){const t=o;let a,r=!1;for(let n=0,s=e[t(3650)];n<s;n++){a=e[n];let u=Cesium[t(2879)].simpleIntersection(a[t(1195)],x);if(Z0(u)){r=!0;break}}if(Z0(a)&&r)for(;Z0(a);){if(a[t(1195)][t(2715)](x))return a;a=a[t(4033)]}}const Dl=o(2180),Il=`
    precision mediump float;
    precision mediump int;
    uniform sampler2D uSideTex;
    varying vec2 vUV;
    void main() {
        gl_FragColor = texture2D(uSideTex, vUV);
        gl_FragColor = czm_gammaCorrect(gl_FragColor);
    }
`;function ko(e,x,t,a,r){const n=o,s=e[n(716)],u=a[n(3419)];let c;c=u[n(703)]===Cesium.TerrainQuantization[n(3726)]?{compressed0:0}:{position3DAndHeight:0,textureCoordAndEncodedNormals:1};const f=Cesium[n(3230)][n(1037)](s,a),l=new Cesium.DrawCommand({primitiveType:Cesium[n(1970)][n(3487)],boundingVolume:t.boundingVolume,pass:Cesium.Pass[n(502)]});l[n(2457)]=f;const m=new Cesium.ShaderSource({sources:[Dl]});u[n(703)]===Cesium[n(1106)].BITS12&&m[n(3553)][n(2583)](n(773));const h=new Cesium.ShaderSource({sources:[Il]});l[n(2360)]=Cesium[n(2416)][n(4073)]({context:s,vertexShaderSource:m,fragmentShaderSource:h,attributeLocations:c}),l[n(2256)]=Cesium[n(3154)][n(4073)]({cull:{enabled:!1},depthTest:{enabled:!0}});const C=s[n(3995)];l[n(2551)]={uSideTex:function(){return x[n(589)]},uMinHeight:function(){return t[n(2694)]},uHeightRange:function(){const p=n;return t.maximumHeight-t[p(2694)]},u_modifiedModelViewProjection:function(){const p=n;let _=C[p(2652)],y=C.projection,A=Cesium[p(2235)][p(1013)](_,a[p(3157)],Sl);return Cesium[p(2235)].setTranslation(_,A,la),Cesium[p(2235)][p(3640)](y,la,la),la},uRepeat:function(){const p=n;return mi.x=t[p(1916)],mi.y=Math[p(3720)]((t[p(1951)]-t[p(2694)])/100),mi.y=Math[p(2092)](mi.y,1),mi},u_minMaxHeight:function(){const p=n;return zn.x=u.minimumHeight,zn.y=u[p(1951)],zn},u_scaleAndBias:function(){return u[n(2951)]}},r[t[n(3085)]]=l}const Ll=`
    attribute vec4 position;
    attribute vec2 st;
    varying vec2 vUV;
    void main() {
        gl_Position = czm_modelViewProjection * vec4(position.xyz, 1.0);
        vUV = st.xy;
    }
`,Fl=o(1216);function Ol(e,x){const t=o;let a=Cesium[t(516)][t(3628)](x),r=e[t(893)],n=Cesium[t(2235)][t(1201)](r,new Cesium[t(2235)]);for(let s=0,u=a.length;s<u;s++){let c=a[s],f=Cesium[t(2235)][t(1013)](n,c,Kn);x[3*s]=f.x,x[3*s+1]=f.y,x[3*s+2]=f.z}}function Nl(e,x,t,a,r){const n=o,s=e[n(716)];Ol(t,a[n(3126)].position[n(2496)]);const u=Cesium[n(2380)][n(1847)]({context:s,geometry:a,attributeLocations:Cesium[n(3152)][n(1644)](a),bufferUsage:Cesium[n(3586)].STATIC_DRAW,interleave:!0}),c=new Cesium[n(1900)]({primitiveType:Cesium[n(1970)][n(3487)],boundingVolume:t[n(1948)],pass:Cesium[n(2798)][n(502)],modelMatrix:t[n(893)]});c[n(2457)]=u;const f=new Cesium[n(635)]({sources:[Ll]}),l=new Cesium.ShaderSource({sources:[Fl]});c[n(2360)]=Cesium[n(2416)][n(4073)]({context:s,vertexShaderSource:f,fragmentShaderSource:l,attributeLocations:Cesium[n(3152)][n(1644)](a)}),c.renderState=Cesium[n(3154)][n(4073)]({cull:{enabled:!1},depthTest:{enabled:!0}}),c[n(2551)]={uBottomTex:function(){return x._excavationBottomTexture}},r[t.name]=c}function Vl(e,x,t){const a=o;Z0(x[a(1985)])||(x[a(1985)]=function(){const r=a;return Z0(this[r(1275)].clipRasterTexture)?this.properties[r(839)]:e[r(716)][r(4007)]}),x[a(1275)][a(839)]=t[a(2530)],x.properties[a(3300)]=t}function Ul(e,x,t,a){const r=o,n=t[r(1426)];if(!Z0(n))return;const s=n.modifyTerrainVertexArray,u=n[r(4107)];if(Z0(s)&&Z0(u)){Z0(x[r(694)])||(x[r(694)]=[],x[r(3379)]=0);for(let c=0,f=s[r(3650)];c<f;c++){let l;x[r(694)][r(3650)]<=x[r(3379)]?(l=Cesium[r(1900)][r(2225)](a),x._modifyDrawCommands[r(2583)](l)):(l=x[r(694)][x[r(3379)]],Cesium[r(1900)][r(2225)](a,l)),++x[r(3379)];let m=Cesium[r(840)](a[r(2551)],{}),h=Cesium[r(840)](m.properties,{});m.properties=h,l.uniformMap=m,h[r(3241)]=new Cesium[r(516)],h[r(2527)]=new Cesium[r(516)],h[r(796)]=new Cesium[r(2235)],h[r(3839)]=new Cesium.Cartesian2;let C=s[c],p=u[c],_=p[r(3419)];l[r(2457)]=C,l.count=C[r(1164)][r(2708)],l[r(1948)]=n[r(1267)],Cesium[r(516)][r(3552)](p[r(3157)],h[r(3241)]),Cesium[r(516)].clone(p[r(3157)],h[r(2527)]),Cesium[r(2235)].clone(_[r(2951)],h.scaleAndBias),h.minMaxHeight.x=_.minimumHeight,h.minMaxHeight.y=_.maximumHeight;let y=l.shaderProgram;const A=y[r(4055)][r(3552)](),b=y[r(3145)][r(3552)]();A[r(3553)]=Z0(A[r(3553)])?A[r(3553)][r(3403)](0):[],b[r(3553)]=Z0(b[r(3553)])?b[r(3553)][r(3403)](0):[],b[r(3553)]=b[r(3553)][r(2234)](B=>r(1681)!==B),p[r(3419)][r(703)]===Cesium[r(1106)].BITS12&&A[r(3553)].indexOf(r(773))===-1&&A[r(3553)][r(2583)](r(773)),l[r(2360)]=Cesium[r(2416)][r(4073)]({context:e[r(716)],vertexShaderSource:A,fragmentShaderSource:b,attributeLocations:_[r(1793)]()}),e[r(3138)][r(2583)](l)}}}Cesium.GlobeSurfaceTileProvider.prototype[o(912)]=function(e){const x=o;if(!this[x(3491)]||e.camera[x(1696)]||this[x(3304)][x(3650)]<1||(this[x(1773)]||(this.loadingExcavateTexture=!0,Ho(e,this),zo(e,this)),!Z0(this._excavationBottomTexture)||!Z0(this[x(589)])))return;this._excavateRegionUpdate=!1;const t=e[x(3907)]._scene[x(443)]===Cesium[x(442)][x(3443)],a=this._excavateRegions[x(2496)],r=this[x(3404)][x(3650)];Z0(this[x(2455)])||(this[x(2455)]={}),Z0(this[x(446)])||(this.bottomCommands={});for(let n=0;n<r;n++){const s=a[n];if(s[x(3339)])continue;Ml(e,s,t),Go(e[x(716)],s);const u=s[x(1195)],c=Ko(this._quadtree[x(4102)],u);if(!Z0(c)||!Z0(c[x(1426)]))continue;const f=s[x(3342)],l=s[x(2694)],m=s[x(1951)],h=We[x(909)](c,f,l,m,0);if(!Z0(h))continue;let C=We[x(2736)](c,h,!0,s[x(2153)]);Z0(C)&&ko(e,this,s,C,this.excavateSideCommands),Nl(e,this,s,s[x(2e3)],this.bottomCommands),s.isCreateModifyTerrain=!0}},Cesium[o(1105)][o(3096)][o(3729)]=function(e){const x=o;if(!this[x(3526)]||e.camera[x(1696)]||this[x(775)][x(4102)][x(3650)]===0||this[x(775)][x(4102)][0][x(2337)]<10||(this[x(1773)]||(this.loadingExcavateTexture=!0,Ho(e,this),zo(e,this)),!Z0(this._excavationSideTexture)))return;Z0(this[x(2344)])||(this[x(2344)]={}),this[x(3526)]=!1;var t=this[x(2167)][x(2496)],a=t[x(3650)];const r=e[x(716)];for(let n=0;n<a;n++){const s=t[n];if(s[x(3339)])continue;const u=s[x(1195)];Go(r,s);const c=Ko(this[x(775)][x(4102)],u);if(!Z0(c)||!Z0(c[x(1426)]))continue;c[x(1426)][x(2559)](r,this,c,s,!1)&&this[x(2002)](r,c,s);const f=s.sideGeometry,l=s[x(2694)],m=s[x(1951)],h=We[x(909)](c,f,l,m,0);if(s[x(1951)]=h[x(744)],Z0(h)){let C=We[x(2736)](c,h,!0,s[x(2153)]);Z0(C)&&ko(e,this,s,C,this[x(2344)])}s[x(3339)]=!0}},Cesium[o(1105)][o(3096)]._upsampleParent=function(e,x,t){const a=o,r=t[a(1195)];var n,s=x._southwestChild;Z0(s)&&Z0(s[a(1426)])&&(n=Cesium[a(2879)][a(2636)](s[a(1195)],r),Z0(n))&&s[a(1426)][a(2559)](e,this,s,t,!0)&&this[a(2002)](e,s,t),s=x[a(4164)],Z0(s)&&Z0(s[a(1426)])&&(n=Cesium.Rectangle[a(2636)](s[a(1195)],r),Z0(n))&&s[a(1426)][a(2559)](e,this,s,t,!0)&&this[a(2002)](e,s,t),s=x[a(1808)],Z0(s)&&Z0(s[a(1426)])&&(n=Cesium[a(2879)].intersection(s[a(1195)],r),Z0(n))&&s[a(1426)].createModifyVertexArray(e,this,s,t,!0)&&this[a(2002)](e,s,t),s=x[a(1993)],Z0(s)&&Z0(s[a(1426)])&&(n=Cesium[a(2879)].intersection(s[a(1195)],r),Z0(n))&&s[a(1426)][a(2559)](e,this,s,t,!0)&&this[a(2002)](e,s,t)},Cesium[o(1105)].prototype._rasterTiles=function(e){const x=o,t=this[x(3304)];let a=t[x(3650)];for(let r=0;r<a;++r){const n=t[r];if(!Z0(n))continue;let s=n[x(3650)];for(let u=0;u<s;++u)n[u].rasterClipRegion(e,this)}},Cesium[o(1105)].prototype[o(803)]=function(e){const x=o;for(let t=0,a=this._usedDrawCommands;t<a;t++){let r=this[x(2612)][t],n=r[x(2551)],s=r[x(832)];Vl(e,n,s),Ul(e,this,s,r)}this[x(3379)]=0},Cesium.GlobeSurfaceTileProvider[o(3096)][o(1791)]=function(e){const x=o,t=e.commandList;if(Z0(this[x(2455)]))for(let a in this.excavateSideCommands){let r=this[x(2455)][a];t[x(2583)](r)}if(Z0(this.modifySideCommands))for(let a in this.modifySideCommands){let r=this[x(2344)][a];t.push(r)}if(Z0(this[x(446)]))for(let a in this[x(446)]){let r=this[x(446)][a];t[x(2583)](r)}},Cesium[o(1105)][o(3096)][o(1209)]=Cesium.GlobeSurfaceTileProvider[o(3096)][o(827)],Cesium[o(1105)][o(3096)][o(827)]=function(e){const x=o;this[x(912)](e),this[x(3729)](e),this[x(3505)](e),this[x(1209)](e),this[x(803)](e),this[x(1791)](e)},Cesium[o(1105)][o(3096)]._removeExcavationCommands=function(e){const x=o;if(Z0(this[x(2455)])){let t=this.excavateSideCommands[e];Z0(t)&&(t[x(2457)]=t[x(2457)]&&!t[x(2457)][x(3777)]()&&t[x(2457)].destroy(),t[x(2360)]=t[x(2360)]&&!t[x(2360)][x(3777)]()&&t[x(2360)][x(3701)](),delete this[x(2455)][e])}if(Z0(this[x(446)])){let t=this.bottomCommands[e];Z0(t)&&(t[x(2457)]=t.vertexArray&&!t[x(2457)].isDestroyed()&&t[x(2457)][x(3701)](),t.shaderProgram=t[x(2360)]&&!t[x(2360)].isDestroyed()&&t[x(2360)][x(3701)](),delete this[x(446)][e])}},Cesium[o(1105)].prototype[o(2057)]=function(){const e=o,x=Object.keys(this._excavateRegions._hash);for(let t=0,a=x[e(3650)];t<a;t++){let r=x[t];this[e(3853)](r)}},Cesium[o(1105)][o(3096)][o(2882)]=function(e){const x=o;if(Z0(this[x(2344)])){let t=this[x(2344)][e];Z0(t)&&(t[x(2457)]=t[x(2457)]&&!t[x(2457)][x(3777)]()&&t[x(2457)][x(3701)](),t[x(2360)]=t.shaderProgram&&!t[x(2360)][x(3777)]()&&t[x(2360)][x(3701)](),delete this[x(2344)][e])}},Cesium[o(1105)].prototype[o(1588)]=Cesium[o(1105)][o(3096)][o(471)],Cesium[o(1105)][o(3096)][o(471)]=function(e,x,t){const a=o;let r=this.hookComputeTileVisibility(e,x,t);return Z0(e[a(1426)])&&Z0(e.data[a(1175)])&&e[a(1426)][a(1175)][a(3650)]>0&&(r=Cesium[a(1131)][a(2371)]),r};var Gl={};const rt=Cesium[o(692)];function Hl(e,x){const t=o;let a,r=!1;for(let n=0,s=e[t(3650)];n<s;n++){a=e[n];let u=Cesium[t(2879)].simpleIntersection(a[t(1195)],x);if(rt(u)){r=!0;break}}if(rt(a)&&r)for(;rt(a);){if(a[t(1195)].contains(x))return a;a=a[t(4033)]}}function zl(e,x,t){const a=o,r=x[a(2167)];if(!rt(r)||r[a(3650)]<1||t[a(3650)]<1)return;const n=[][a(2263)](x[a(2167)][a(2496)]);for(let s=0,u=n[a(3650)];s<u;s++){const c=n[s],f=Hl(t,c[a(1195)]);if(!rt(f)||!rt(f[a(1426)]))continue;const l=f[a(1426)];l[a(2559)](e,x,f,c,!1),rt(l.modifyTerrainVertexArray)&&x[a(2002)](e,f,c)}}Cesium[o(2665)].prototype[o(2705)]=Cesium[o(2665)][o(3096)][o(3535)],Cesium.QuadtreePrimitive[o(3096)][o(3535)]=function(e){const x=o;zl(e.context,this[x(2704)],this[x(3169)]),this.hookEndFrame(e)};var Kl={};const Lt=Cesium[o(692)],kn=new Cesium.BoundingRectangle,Wo=new Cesium[o(2235)];function kl(e,x){const t=o,a=x[t(716)][t(3995)],r=Cesium[t(1691)].clone(a[t(2548)]),n=e._rectangle,s=Cesium[t(2746)][t(3028)](n.west),u=Cesium[t(2746)][t(3028)](n[t(1090)]),c=Cesium.Math[t(3028)](n[t(1270)]),f=Cesium.Math[t(3028)](n[t(852)]),l=x[t(3907)],m=l[t(2703)].clipPlane,h=l[t(1425)],C=l.pitch,p=l.roll,_=new Cesium[t(516)];l[t(1696)]&&l[t(814)](),Cesium.Cartesian3.clone(l[t(3228)],_),Cesium[t(2235)][t(3552)](l[t(3011)],Wo),l[t(1857)](Cesium[t(2235)].IDENTITY);const y=new Cesium[t(3904)]({width:u-s,aspectRatio:1,near:1,far:100}),A=new Cesium[t(516)](.5*(s+u),.5*(c+f),50),b=new Cesium[t(516)](0,0,-1),B=new Cesium.Cartesian3(0,1,0),T=Cesium[t(516)][t(2550)](b,B,new Cesium[t(516)]);return Cesium[t(2235)][t(1134)](A,b,B,T,a[t(2652)]),a.updateFrustum(y),{position:_,viewport:r,waterPlane:m,heading:h,pitch:C,roll:p}}function Wl(e,x){const t=o,a=e[t(716)][t(3995)],r=e[t(3907)];r[t(1696)]&&x[t(878)]&&r.enableReflection(x.waterPlane),r._setTransform(Wo),r.setView({destination:x[t(3009)],orientation:{heading:x[t(1425)],pitch:x[t(1904)],roll:x[t(2677)]},convert:!1}),a[t(2696)](e),a.updateFrustum(r[t(2703)]),a[t(2548)]=x.viewport}Cesium[o(1790)].prototype.rasterClipRegion=function(e,x){const t=o;if(this[t(2337)]<2)return;let a=[];const r=x[t(3404)];Lt(r)&&(a=a[t(2263)](r[t(2496)]));const n=x[t(2167)];Lt(n)&&(a=a[t(2263)](n.values));const s=a[t(3650)];if(s<1)return void this.freeRasterResource();if(e.camera[t(2703)]instanceof Cesium[t(3904)])return;kn[t(2375)]=256,kn.height=256;const u=kl(this,e);let c=!1,f=0;for(let l=0;l<s;l++){const m=a[l],h=Cesium[t(2879)][t(2636)](m[t(1195)],this._rectangle);if(!Lt(h))continue;const C=m[t(1841)];Lt(m[t(1841)])&&(Lt(this[t(2069)])||(this[t(2530)]=new Cesium[t(1869)]({context:e[t(716)],width:256,height:256,pixelFormat:Cesium[t(3868)][t(4092)]}),this[t(2069)]=new Cesium[t(2072)]({context:e[t(716)],colorTextures:[this[t(2530)]],destroyAttachments:!1})),Lt(this[t(1233)])||(this[t(1233)]=new Cesium[t(4134)]({color:new Cesium[t(1911)](0,0,0,0),depth:1})),c||(c=!0,this[t(1233)][t(3265)]=this._clipRasterFbo,this[t(1233)][t(1112)](e[t(716)])),C[t(2256)]=Cesium[t(3154)][t(4073)]({viewport:kn,cull:{enabled:!1}}),C[t(3265)]=this[t(2069)],C.execute(e[t(716)]),f++)}Wl(e,u),this[t(3908)]=f,this[t(3908)]===0&&this.freeRasterResource(),this[t(4178)]=f>0},Cesium[o(1790)][o(3096)][o(1756)]=function(){const e=o;this[e(4178)]&&(this[e(2530)]=this._clipRasterTexture&&!this._clipRasterTexture[e(3777)]()&&this[e(2530)][e(3701)](),this[e(2069)]=this[e(2069)]&&!this[e(2069)][e(3777)]()&&this[e(2069)][e(3701)](),this[e(4178)]=!1)},Cesium.QuadtreeTile.prototype[o(3271)]=Cesium.QuadtreeTile[o(3096)][o(2626)],Cesium[o(1790)][o(3096)][o(2626)]=function(){const e=o;this[e(1756)](),this[e(3271)]()};var Xl={};const jl=Cesium[o(692)],Wn=32767,Xo=new Cesium[o(516)],ql=new Cesium[o(2351)],Yl=new Cesium.Cartesian2,Jl=new Cesium[o(2351)];function jo(e,x,t,a,r,n,s,u){const c=o,f=Math[c(1803)](t,r,s),l=Math[c(2092)](t,r,s),m=Math[c(1803)](a,n,u),h=Math[c(2092)](a,n,u);return e>=f&&e<=l&&x>=m&&x<=h}function Zl(e,x,t){const a=o,r=e[a(536)],n=r[a(2485)],s=r.encoding,u=r[a(2687)];for(let h=0,C=u.length;h<C;h+=3){let p=u[h],_=u[h+1],y=u[h+2],A=s.decodeTextureCoordinates(n,p,ql),b=s[a(1006)](n,_,Yl),B=s[a(1006)](n,y,Jl);if(jo(x,t,A.x,A.y,b.x,b.y,B.x,B.y)){var c=Cesium[a(3658)][a(1003)](x,t,A.x,A.y,b.x,b.y,B.x,B.y,Xo);if(c.x>=-1e-15&&c.y>=-1e-15&&c.z>=-1e-15){var f=s[a(2973)](n,p),l=s[a(2973)](n,_),m=s.decodeHeight(n,y);return c.x*f+c.y*l+c.z*m}}}}function Ql(e,x,t){const a=o,r=e._uValues,n=e[a(1104)],s=e._heightValues,u=e[a(3624)];for(let f=0,l=u[a(3650)];f<l;f+=3){let m=u[f],h=u[f+1],C=u[f+2],p=r[m],_=r[h],y=r[C],A=n[m],b=n[h],B=n[C];if(jo(x,t,p,A,_,b,y,B)){var c=Cesium[a(3658)][a(1003)](x,t,p,A,_,b,y,B,Xo);if(c.x>=-1e-15&&c.y>=-1e-15&&c.z>=-1e-15){let T=c.x*s[m]+c.y*s[h]+c.z*s[C];return CesiumMath[a(2917)](e[a(3919)],e[a(744)],T/Wn)}}}}Cesium[o(3362)][o(3096)].interpolateHeightExt=function(e,x,t){const a=o,r=Cesium[a(2746)][a(1263)]((x-e[a(2599)])/e.width,0,1),n=r*Wn,s=Cesium.Math[a(1263)]((t-e[a(852)])/e.height,0,1),u=s*Wn;return jl(this[a(536)])?Zl(this,r,s):Ql(this,n,u)};var $l={};const fa=new Cesium.Cartographic;Cesium[o(2879)][o(3096)][o(2715)]=function(e){const x=o;return Cesium.Rectangle[x(2715)](this,Cesium[x(2879)][x(2281)](e,fa))&&Cesium.Rectangle[x(2715)](this,Cesium.Rectangle.northwest(e,fa))&&Cesium[x(2879)][x(2715)](this,Cesium[x(2879)][x(2655)](e,fa))&&Cesium[x(2879)][x(2715)](this,Cesium[x(2879)].northeast(e,fa))};var xf={};function J(){}J[o(2185)]=function(e){const x=o;let t=e.indexOf("<");return t>0&&(e=e[x(2629)](t)),DOMParser?(J[x(3084)]||(J[x(3084)]=new DOMParser),J[x(3084)][x(2658)](e,x(2952))):(J[x(3084)]||(J[x(3084)]=new ActiveXObject(x(2343))),J.xmldom[x(3107)](e))},J[o(762)]=function(e,x,t){const a=o;let r=[];if(e[a(762)])r=e[a(762)](x,t);else{let n,s,u=e[a(1040)]("*");for(let c=0,f=u[a(3650)];c<f;++c)n=u[c],s=n.prefix?n[a(3657)]+":"+t:t,t!=="*"&&s!==n[a(2265)]||x!=="*"&&x!==n[a(1880)]||r[a(2583)](n)}return r},J[o(3446)]=function(e,x,t){const a=o;let r=null;if(e[a(3446)])r=e[a(3446)](x,t);else{let n,s,u=e[a(3126)];for(let c=0,f=u[a(3650)];c<f;++c)if(n=u[c],n[a(1880)]===x&&(s=n[a(3657)]?n[a(3657)]+":"+t:t,s===n[a(2265)])){r=n;break}}return r},J[o(1624)]=function(e,x){const t=o;let a=x||"";if(e)for(let r=e[t(2246)];r;r=r.nextSibling)switch(r.nodeType){case 3:case 4:a+=r[t(3178)]}return a},J[o(750)]=function(e,x){const t=o;if(!e)return;let a=e[t(1292)](x);if(a!==null){let r=parseFloat(a);return isNaN(r)?void 0:r}},J[o(2983)]=function(e,x){if(!e)return;let t=e.getAttribute(x);return t!==null?t:void 0},J.queryBooleanAttribute=function(e,x){const t=o;if(!e)return;let a=e[t(1292)](x);return a=a[t(3193)](),t(3578)!==a&&(t(1044)===a||void 0)},J[o(3250)]=function(e,x,t){const a=o;if(!e)return;let r=e[a(1202)],n=r[a(3650)];for(let s=0;s<n;s++){let u=r[s];if(t){if(u[a(2606)]===x&&t[a(3019)](u.namespaceURI)!==-1)return u}else if(u[a(2606)]===x)return u}},J[o(3809)]=function(e,x,t){const a=o;if(!e)return;let r=[],n=e[a(762)]("*",x),s=n.length;for(let u=0;u<s;u++){let c=n[u];t?c[a(2606)]===x&&t[a(3019)](c[a(1880)])!==-1&&r[a(2583)](c):c[a(2606)]===x&&r[a(2583)](c)}return r},J[o(1271)]=function(e,x,t){const a=o;if(!e)return[];let r=[],n=e[a(1202)],s=n[a(3650)];for(let u=0;u<s;u++){let c=n[u];t?c[a(2606)]===x&&t[a(3019)](c[a(1880)])!==-1&&r[a(2583)](c):c[a(2606)]===x&&r.push(c)}return r},J.queryNumericValue=function(e,x,t){const a=o;let r=J[a(3250)](e,x,t);if(r){let n=parseFloat(r[a(3512)]);return isNaN(n)?void 0:n}},J[o(987)]=function(e,x,t){const a=o;let r=J.queryFirstNode(e,x,t);if(r)return r[a(3512)].trim()},J[o(3365)]=function(e,x,t){const a=o;let r=J[a(3250)](e,x,t);if(r){let n=r.textContent.trim();return n==="1"||/^true$/i[a(1528)](n)}};const ef={Fill:0,WireFrame:1,Fill_And_WireFrame:2};var ot=Object[o(921)](ef);const tf={None:0,FixedZ:1,FixedXYZ:2};var Ft=Object[o(921)](tf);function da(){const e=o;this[e(1254)]=new Cesium[e(1911)],this[e(1677)]=ot[e(966)],this[e(3672)]=new Cesium.Color,this._lineWidth=1,this[e(1947)]=0,this[e(1972)]=1,this[e(2594)]=new Cesium[e(1911)],this[e(3522)]=Cesium.HeightReference[e(1208)],this[e(2065)]=new Cesium[e(1911)](1,1,1,1),this[e(2847)]=void 0,this[e(2448)]=!1,this[e(1243)]=void 0,this[e(2596)]=!0,this[e(2120)]=Cesium[e(1911)].RED,this[e(2620)]=1,this[e(4045)]=Ft[e(700)]}Object[o(2040)](da[o(3096)],{fillForeColor:{get:function(){return this._fillForeColor},set:function(e){const x=o;Cesium[x(1680)][x(1556)][x(2408)]("fillForeColor value",e),Cesium[x(1911)].clone(e,this[x(1254)])}},bottomAltitude:{get:function(){return this[o(1947)]},set:function(e){const x=o;Cesium[x(1680)][x(1556)][x(1232)](x(2784),e),this[x(1947)]!==e&&(this[x(1947)]=e,this[x(2448)]=!0)}},altitudeMode:{get:function(){return this[o(3522)]},set:function(e){const x=o;Cesium[x(1680)][x(1556)][x(1232)](x(2627),e),this[x(3522)]=e}},fillStyle:{get:function(){return this[o(1677)]},set:function(e){const x=o;Cesium[x(1680)][x(1556)][x(1232)](x(1033),e);let t=this[x(1677)];this[x(1677)]=e,e!==t&&this[x(2847)]&&this[x(2847)][x(3170)]()}},lineColor:{get:function(){return this[o(3672)]},set:function(e){const x=o;Cesium[x(1680)].typeOf[x(2408)](x(1942),e),Cesium.Color[x(3552)](e,this[x(3672)])}},lineWidth:{get:function(){return this[o(2431)]},set:function(e){const x=o;Cesium[x(1680)][x(1556)][x(1232)](x(4108),e),this._lineWidth=e}},pointSize:{get:function(){return this[o(1972)]},set:function(e){const x=o;Cesium[x(1680)][x(1556)][x(1232)](x(2277),e),this[x(1972)]=e}},pointColor:{get:function(){return this._pointColor},set:function(e){const x=o;Cesium.Check[x(1556)].object(x(2309),e),Cesium.Color[x(3552)](e,this[x(2594)])}},emissionColor:{get:function(){return this[o(2065)]},set:function(e){const x=o;Cesium[x(1680)][x(1556)].object("emission color",e),Cesium.Color[x(3552)](e,this[x(2065)])}},image:{get:function(){return this[o(1243)]},set:function(e){const x=o;this._imageReady=!1,this[x(1243)]=e,x(4039)==typeof e?this._loadImage():this[x(2596)]=!0}},imageReady:{get:function(){return this[o(2596)]}},calloutColor:{get:function(){return this[o(2120)]},set:function(e){const x=o;this[x(2120)]!==e&&(this[x(2120)]=e)}},calloutWidth:{get:function(){return this._calloutWidth},set:function(e){const x=o;this._calloutWidth!==e&&(this[x(2620)]=e)}},billboardMode:{get:function(){return this[o(4045)]},set:function(e){const x=o;this[x(4045)]!==e&&(this[x(4045)]=e)}}});const af={UNLOADED:0,LOADING:1,LOADED:2,READY:3,FAILED:4};var $x=Object[o(921)](af),De=Object.freeze({NONE:0,LUMINANCE_8:1,LUMINANCE_16:2,ALPHA:3,ALPHA_4_LUMINANCE_4:4,LUMINANCE_ALPHA:5,RGB_565:6,BGR565:7,RGB:10,BGR:11,ARGB:12,ABGR:13,BGRA:14,WEBP:25,RGBA:28,DXT1:17,DXT2:18,DXT3:19,DXT4:20,DXT5:21,CRN_DXT5:26,STANDARD_CRN:27,KTX2:31});const nf={encNONE:0,enrS3TCDXTN:14,enrPVRTPF_PVRTC2:19,enrPVRTPF_PVRTC:20,enrPVRTPF_PVRTC_4bpp:21,enrPVRTPF_ETC1:22};var rf=Object[o(921)](nf);const of={SVC_Vertex:1,SVC_Normal:2,SVC_VertexColor:4,SVC_SecondColor:8,SVC_TexutreCoord:16,SVC_TexutreCoordIsW:32};var cx=Object[o(921)](of),qo={};qo=function e(x,t,a){function r(u,c){const f=C0;if(!t[u]){if(!x[u]){var l=f(1355)==typeof require&&require;if(!c&&l)return l(u,!0);if(n)return n(u,!0);var m=new Error("Cannot find module '"+u+"'");throw m[f(2254)]=f(1392),m}var h=t[u]={exports:{}};x[u][0][f(798)](h[f(3660)],function(C){var p=x[u][1][C];return r(p||C)},h,h[f(3660)],e,x,t,a)}return t[u][f(3660)]}for(var n=typeof require=="function"&&require,s=0;s<a.length;s++)r(a[s]);return r}({1:[function(e,x,t){const a=o;var r=a(1345)!=typeof Uint8Array&&a(1345)!=typeof Uint16Array&&a(1345)!=typeof Int32Array;t[a(3677)]=function(u){const c=a;for(var f=Array[c(3096)][c(3403)].call(arguments,1);f[c(3650)];){var l=f[c(1523)]();if(l){if(c(2408)!=typeof l)throw new TypeError(l+c(1640));for(var m in l)l[c(2364)](m)&&(u[m]=l[m])}}return u},t.shrinkBuf=function(u,c){const f=a;return u[f(3650)]===c?u:u[f(1238)]?u.subarray(0,c):(u.length=c,u)};var n={arraySet:function(u,c,f,l,m){const h=a;if(c[h(1238)]&&u[h(1238)])u[h(2590)](c[h(1238)](f,f+l),m);else for(var C=0;C<l;C++)u[m+C]=c[f+C]},flattenChunks:function(u){const c=a;var f,l,m,h,C,p;for(m=0,f=0,l=u[c(3650)];f<l;f++)m+=u[f][c(3650)];for(p=new Uint8Array(m),h=0,f=0,l=u.length;f<l;f++)C=u[f],p[c(2590)](C,h),h+=C[c(3650)];return p}},s={arraySet:function(u,c,f,l,m){for(var h=0;h<l;h++)u[m+h]=c[f+h]},flattenChunks:function(u){const c=a;return[].concat[c(517)]([],u)}};t[a(611)]=function(u){const c=a;u?(t[c(2649)]=Uint8Array,t.Buf16=Uint16Array,t[c(942)]=Int32Array,t.assign(t,n)):(t[c(2649)]=Array,t[c(1043)]=Array,t[c(942)]=Array,t[c(3677)](t,s))},t[a(611)](r)},{}],2:[function(e,x,t){const a=o;var r=e("./common"),n=!0,s=!0;try{String[a(4176)].apply(null,[0])}catch{n=!1}try{String[a(4176)][a(517)](null,new Uint8Array(1))}catch{s=!1}for(var u=new r[a(2649)](256),c=0;c<256;c++)u[c]=c>=252?6:c>=248?5:c>=240?4:c>=224?3:c>=192?2:1;function f(l,m){const h=a;if(m<65537&&(l.subarray&&s||!l[h(1238)]&&n))return String[h(4176)][h(517)](null,r[h(3163)](l,m));for(var C="",p=0;p<m;p++)C+=String.fromCharCode(l[p]);return C}u[254]=u[254]=1,t.string2buf=function(l){const m=a;var h,C,p,_,y,A=l[m(3650)],b=0;for(_=0;_<A;_++)(64512&(C=l[m(3128)](_)))==55296&&_+1<A&&(64512&(p=l[m(3128)](_+1)))==56320&&(C=65536+(C-55296<<10)+(p-56320),_++),b+=C<128?1:C<2048?2:C<65536?3:4;for(h=new r.Buf8(b),y=0,_=0;y<b;_++)(64512&(C=l[m(3128)](_)))==55296&&_+1<A&&(64512&(p=l[m(3128)](_+1)))==56320&&(C=65536+(C-55296<<10)+(p-56320),_++),C<128?h[y++]=C:C<2048?(h[y++]=192|C>>>6,h[y++]=128|63&C):C<65536?(h[y++]=224|C>>>12,h[y++]=128|C>>>6&63,h[y++]=128|63&C):(h[y++]=240|C>>>18,h[y++]=128|C>>>12&63,h[y++]=128|C>>>6&63,h[y++]=128|63&C);return h},t[a(3764)]=function(l){return f(l,l.length)},t[a(3479)]=function(l){const m=a;for(var h=new r[m(2649)](l.length),C=0,p=h[m(3650)];C<p;C++)h[C]=l[m(3128)](C);return h},t[a(3992)]=function(l,m){const h=a;var C,p,_,y,A=m||l[h(3650)],b=new Array(2*A);for(p=0,C=0;C<A;)if((_=l[C++])<128)b[p++]=_;else if((y=u[_])>4)b[p++]=65533,C+=y-1;else{for(_&=y===2?31:y===3?15:7;y>1&&C<A;)_=_<<6|63&l[C++],y--;y>1?b[p++]=65533:_<65536?b[p++]=_:(_-=65536,b[p++]=55296|_>>10&1023,b[p++]=56320|1023&_)}return f(b,p)},t[a(3685)]=function(l,m){const h=a;var C;for((m=m||l[h(3650)])>l[h(3650)]&&(m=l.length),C=m-1;C>=0&&(192&l[C])==128;)C--;return C<0||C===0?m:C+u[l[C]]>m?C:m}},{"./common":1}],3:[function(e,x,t){const a=o;function r(n,s,u,c){for(var f=65535&n|0,l=n>>>16&65535|0,m=0;u!==0;){u-=m=u>2e3?2e3:u;do l=l+(f=f+s[c++]|0)|0;while(--m);f%=65521,l%=65521}return f|l<<16|0}x[a(3660)]=r},{}],4:[function(e,x,t){const a=o;x[a(3660)]={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],5:[function(e,x,t){function a(){for(var s,u=[],c=0;c<256;c++){s=c;for(var f=0;f<8;f++)s=1&s?3988292384^s>>>1:s>>>1;u[c]=s}return u}var r=a();function n(s,u,c,f){var l=r,m=f+c;s^=-1;for(var h=f;h<m;h++)s=s>>>8^l[255&(s^u[h])];return-1^s}x.exports=n},{}],6:[function(e,x,t){const a=o;function r(){const n=C0;this.text=0,this[n(1012)]=0,this[n(1728)]=0,this.os=0,this[n(3772)]=null,this.extra_len=0,this.name="",this[n(1138)]="",this[n(522)]=0,this[n(2859)]=!1}x[a(3660)]=r},{}],7:[function(e,x,t){const a=o;var r=30,n=12;x[a(3660)]=function(s,u){const c=a;var f,l,m,h,C,p,_,y,A,b,B,T,M,w,I,P,V,q,X,H,z,u0,n0,N,Y;f=s[c(2799)],l=s[c(3784)],N=s.input,m=l+(s[c(2350)]-5),h=s[c(834)],Y=s[c(3980)],C=h-(u-s[c(2873)]),p=h+(s.avail_out-257),_=f[c(2771)],y=f[c(1135)],A=f[c(3794)],b=f[c(2910)],B=f.window,T=f[c(1875)],M=f[c(2681)],w=f[c(1540)],I=f[c(1038)],P=(1<<f[c(736)])-1,V=(1<<f.distbits)-1;x:do{M<15&&(T+=N[l++]<<M,M+=8,T+=N[l++]<<M,M+=8),q=w[T&P];e:for(;;){if(T>>>=X=q>>>24,M-=X,(X=q>>>16&255)==0)Y[h++]=65535&q;else{if(!(16&X)){if((64&X)==0){q=w[(65535&q)+(T&(1<<X)-1)];continue e}if(32&X){f.mode=n;break x}s[c(4106)]="invalid literal/length code",f[c(443)]=r;break x}H=65535&q,(X&=15)&&(M<X&&(T+=N[l++]<<M,M+=8),H+=T&(1<<X)-1,T>>>=X,M-=X),M<15&&(T+=N[l++]<<M,M+=8,T+=N[l++]<<M,M+=8),q=I[T&V];t:for(;;){if(T>>>=X=q>>>24,M-=X,!(16&(X=q>>>16&255))){if((64&X)==0){q=I[(65535&q)+(T&(1<<X)-1)];continue t}s[c(4106)]=c(3583),f[c(443)]=r;break x}if(z=65535&q,M<(X&=15)&&(T+=N[l++]<<M,(M+=8)<X&&(T+=N[l++]<<M,M+=8)),(z+=T&(1<<X)-1)>_){s[c(4106)]=c(1337),f.mode=r;break x}if(T>>>=X,M-=X,z>(X=h-C)){if((X=z-X)>A&&f[c(2223)]){s[c(4106)]="invalid distance too far back",f[c(443)]=r;break x}if(u0=0,n0=B,b===0){if(u0+=y-X,X<H){H-=X;do Y[h++]=B[u0++];while(--X);u0=h-z,n0=Y}}else if(b<X){if(u0+=y+b-X,(X-=b)<H){H-=X;do Y[h++]=B[u0++];while(--X);if(u0=0,b<H){H-=X=b;do Y[h++]=B[u0++];while(--X);u0=h-z,n0=Y}}}else if(u0+=b-X,X<H){H-=X;do Y[h++]=B[u0++];while(--X);u0=h-z,n0=Y}for(;H>2;)Y[h++]=n0[u0++],Y[h++]=n0[u0++],Y[h++]=n0[u0++],H-=3;H&&(Y[h++]=n0[u0++],H>1&&(Y[h++]=n0[u0++]))}else{u0=h-z;do Y[h++]=Y[u0++],Y[h++]=Y[u0++],Y[h++]=Y[u0++],H-=3;while(H>2);H&&(Y[h++]=Y[u0++],H>1&&(Y[h++]=Y[u0++]))}break}}break}}while(l<m&&h<p);l-=H=M>>3,T&=(1<<(M-=H<<3))-1,s.next_in=l,s[c(834)]=h,s.avail_in=l<m?m-l+5:5-(l-m),s[c(2873)]=h<p?p-h+257:257-(h-p),f[c(1875)]=T,f[c(2681)]=M}},{}],8:[function(e,x,t){const a=o;var r=e(a(2582)),n=e(a(3597)),s=e(a(836)),u=e(a(2434)),c=e(a(1176)),f=0,l=1,m=2,h=4,C=5,p=6,_=0,y=1,A=2,b=-2,B=-3,T=-4,M=-5,w=8,I=1,P=2,V=3,q=4,X=5,H=6,z=7,u0=8,n0=9,N=10,Y=11,W=12,x0=13,y0=14,f0=15,v=16,T0=17,F0=18,O0=19,w0=20,U0=21,xx=22,W0=23,j0=24,tx=25,v0=26,ix=27,ax=28,H0=29,G0=30,nx=31,L=852,U=592,K=15;function k(Z){return(Z>>>24&255)+(Z>>>8&65280)+((65280&Z)<<8)+((255&Z)<<24)}function d0(){const Z=a;this[Z(443)]=0,this.last=!1,this[Z(499)]=0,this[Z(3208)]=!1,this.flags=0,this[Z(2771)]=0,this[Z(2122)]=0,this[Z(1894)]=0,this[Z(1259)]=null,this.wbits=0,this.wsize=0,this[Z(3794)]=0,this[Z(2910)]=0,this[Z(1616)]=null,this[Z(1875)]=0,this[Z(2681)]=0,this[Z(3650)]=0,this[Z(858)]=0,this.extra=0,this.lencode=null,this[Z(1038)]=null,this[Z(736)]=0,this.distbits=0,this.ncode=0,this[Z(2486)]=0,this.ndist=0,this[Z(3915)]=0,this.next=null,this.lens=new r.Buf16(320),this[Z(1285)]=new r[Z(1043)](288),this[Z(3105)]=null,this[Z(901)]=null,this[Z(2223)]=0,this[Z(3350)]=0,this[Z(3521)]=0}function $(Z){const p0=a;var S;return Z&&Z[p0(2799)]?(S=Z.state,Z[p0(3875)]=Z.total_out=S[p0(1894)]=0,Z[p0(4106)]="",S[p0(499)]&&(Z[p0(1587)]=1&S.wrap),S.mode=I,S[p0(1530)]=0,S[p0(3208)]=0,S.dmax=32768,S[p0(1259)]=null,S[p0(1875)]=0,S[p0(2681)]=0,S[p0(1540)]=S[p0(3105)]=new r[p0(942)](L),S[p0(1038)]=S[p0(901)]=new r[p0(942)](U),S.sane=1,S[p0(3350)]=-1,_):b}function r0(Z){const p0=a;var S;return Z&&Z[p0(2799)]?((S=Z[p0(2799)]).wsize=0,S[p0(3794)]=0,S[p0(2910)]=0,$(Z)):b}function a0(Z,p0){const S=a;var F,D0;return Z&&Z[S(2799)]?(D0=Z[S(2799)],p0<0?(F=0,p0=-p0):(F=1+(p0>>4),p0<48&&(p0&=15)),p0&&(p0<8||p0>15)?b:(D0[S(1616)]!==null&&D0[S(3143)]!==p0&&(D0.window=null),D0.wrap=F,D0[S(3143)]=p0,r0(Z))):b}function e0(Z,p0){const S=a;var F,D0;return Z?(D0=new d0,Z[S(2799)]=D0,D0[S(1616)]=null,(F=a0(Z,p0))!==_&&(Z[S(2799)]=null),F):b}function b0(Z){return e0(Z,K)}var o0,c0,S0=!0;function z0(Z){const p0=a;if(S0){var S;for(o0=new r[p0(942)](512),c0=new r[p0(942)](32),S=0;S<144;)Z[p0(684)][S++]=8;for(;S<256;)Z[p0(684)][S++]=9;for(;S<280;)Z[p0(684)][S++]=7;for(;S<288;)Z[p0(684)][S++]=8;for(c(l,Z[p0(684)],0,288,o0,0,Z[p0(1285)],{bits:9}),S=0;S<32;)Z[p0(684)][S++]=5;c(m,Z[p0(684)],0,32,c0,0,Z[p0(1285)],{bits:5}),S0=!1}Z[p0(1540)]=o0,Z[p0(736)]=9,Z[p0(1038)]=c0,Z[p0(583)]=5}function q0(Z,p0,S,F){const D0=a;var vx,L0=Z[D0(2799)];return L0[D0(1616)]===null&&(L0[D0(1135)]=1<<L0[D0(3143)],L0[D0(2910)]=0,L0[D0(3794)]=0,L0.window=new r[D0(2649)](L0[D0(1135)])),F>=L0[D0(1135)]?(r[D0(1030)](L0[D0(1616)],p0,S-L0[D0(1135)],L0[D0(1135)],0),L0[D0(2910)]=0,L0.whave=L0.wsize):((vx=L0[D0(1135)]-L0[D0(2910)])>F&&(vx=F),r[D0(1030)](L0[D0(1616)],p0,S-F,vx,L0[D0(2910)]),(F-=vx)?(r[D0(1030)](L0[D0(1616)],p0,S-F,F,0),L0[D0(2910)]=F,L0.whave=L0.wsize):(L0.wnext+=vx,L0[D0(2910)]===L0[D0(1135)]&&(L0[D0(2910)]=0),L0[D0(3794)]<L0[D0(1135)]&&(L0[D0(3794)]+=vx))),0}function N0(Z,p0){const S=a;var F,D0,vx,L0,_x,R0,ex,g0,_0,$2,Ax,K0,l2,Et,bx,Rx,Zx,Ox,xt,f2,wx,ne,Be,Ae,Hx=0,Dx=new r[S(2649)](4),Pt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!Z||!Z[S(2799)]||!Z.output||!Z[S(2016)]&&Z[S(2350)]!==0)return b;(F=Z[S(2799)])[S(443)]===W&&(F[S(443)]=x0),_x=Z[S(834)],vx=Z[S(3980)],ex=Z[S(2873)],L0=Z[S(3784)],D0=Z[S(2016)],R0=Z.avail_in,g0=F[S(1875)],_0=F[S(2681)],$2=R0,Ax=ex,ne=_;x:for(;;)switch(F.mode){case I:if(F[S(499)]===0){F[S(443)]=x0;break}for(;_0<16;){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}if(2&F.wrap&&g0===35615){F.check=0,Dx[0]=255&g0,Dx[1]=g0>>>8&255,F[S(2122)]=s(F[S(2122)],Dx,2,0),g0=0,_0=0,F[S(443)]=P;break}if(F[S(3618)]=0,F.head&&(F[S(1259)][S(2859)]=!1),!(1&F[S(499)])||(((255&g0)<<8)+(g0>>8))%31){Z[S(4106)]=S(2292),F.mode=G0;break}if((15&g0)!==w){Z[S(4106)]="unknown compression method",F[S(443)]=G0;break}if(_0-=4,wx=8+(15&(g0>>>=4)),F[S(3143)]===0)F.wbits=wx;else if(wx>F[S(3143)]){Z[S(4106)]=S(1241),F[S(443)]=G0;break}F[S(2771)]=1<<wx,Z.adler=F[S(2122)]=1,F[S(443)]=512&g0?N:W,g0=0,_0=0;break;case P:for(;_0<16;){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}if(F[S(3618)]=g0,(255&F[S(3618)])!==w){Z.msg=S(2813),F[S(443)]=G0;break}if(57344&F[S(3618)]){Z[S(4106)]="unknown header flags set",F.mode=G0;break}F.head&&(F[S(1259)][S(3318)]=g0>>8&1),512&F[S(3618)]&&(Dx[0]=255&g0,Dx[1]=g0>>>8&255,F[S(2122)]=s(F[S(2122)],Dx,2,0)),g0=0,_0=0,F.mode=V;case V:for(;_0<32;){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}F[S(1259)]&&(F.head[S(1012)]=g0),512&F.flags&&(Dx[0]=255&g0,Dx[1]=g0>>>8&255,Dx[2]=g0>>>16&255,Dx[3]=g0>>>24&255,F[S(2122)]=s(F.check,Dx,4,0)),g0=0,_0=0,F[S(443)]=q;case q:for(;_0<16;){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}F.head&&(F[S(1259)][S(1728)]=255&g0,F[S(1259)].os=g0>>8),512&F[S(3618)]&&(Dx[0]=255&g0,Dx[1]=g0>>>8&255,F[S(2122)]=s(F[S(2122)],Dx,2,0)),g0=0,_0=0,F[S(443)]=X;case X:if(1024&F[S(3618)]){for(;_0<16;){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}F[S(3650)]=g0,F[S(1259)]&&(F[S(1259)][S(3538)]=g0),512&F[S(3618)]&&(Dx[0]=255&g0,Dx[1]=g0>>>8&255,F[S(2122)]=s(F[S(2122)],Dx,2,0)),g0=0,_0=0}else F[S(1259)]&&(F[S(1259)].extra=null);F[S(443)]=H;case H:if(1024&F[S(3618)]&&((K0=F[S(3650)])>R0&&(K0=R0),K0&&(F[S(1259)]&&(wx=F[S(1259)].extra_len-F.length,F[S(1259)].extra||(F.head.extra=new Array(F[S(1259)][S(3538)])),r.arraySet(F[S(1259)][S(3772)],D0,L0,K0,wx)),512&F[S(3618)]&&(F[S(2122)]=s(F[S(2122)],D0,K0,L0)),R0-=K0,L0+=K0,F[S(3650)]-=K0),F[S(3650)]))break x;F.length=0,F[S(443)]=z;case z:if(2048&F[S(3618)]){if(R0===0)break x;K0=0;do wx=D0[L0+K0++],F[S(1259)]&&wx&&F.length<65536&&(F[S(1259)][S(3085)]+=String[S(4176)](wx));while(wx&&K0<R0);if(512&F[S(3618)]&&(F[S(2122)]=s(F[S(2122)],D0,K0,L0)),R0-=K0,L0+=K0,wx)break x}else F[S(1259)]&&(F[S(1259)][S(3085)]=null);F[S(3650)]=0,F[S(443)]=u0;case u0:if(4096&F.flags){if(R0===0)break x;K0=0;do wx=D0[L0+K0++],F[S(1259)]&&wx&&F[S(3650)]<65536&&(F[S(1259)].comment+=String[S(4176)](wx));while(wx&&K0<R0);if(512&F.flags&&(F[S(2122)]=s(F[S(2122)],D0,K0,L0)),R0-=K0,L0+=K0,wx)break x}else F[S(1259)]&&(F[S(1259)][S(1138)]=null);F[S(443)]=n0;case n0:if(512&F[S(3618)]){for(;_0<16;){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}if(g0!==(65535&F[S(2122)])){Z[S(4106)]=S(2484),F[S(443)]=G0;break}g0=0,_0=0}F[S(1259)]&&(F[S(1259)][S(522)]=F[S(3618)]>>9&1,F[S(1259)].done=!0),Z[S(1587)]=F[S(2122)]=0,F[S(443)]=W;break;case N:for(;_0<32;){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}Z[S(1587)]=F[S(2122)]=k(g0),g0=0,_0=0,F.mode=Y;case Y:if(F[S(3208)]===0)return Z[S(834)]=_x,Z.avail_out=ex,Z[S(3784)]=L0,Z[S(2350)]=R0,F[S(1875)]=g0,F[S(2681)]=_0,A;Z.adler=F.check=1,F[S(443)]=W;case W:if(p0===C||p0===p)break x;case x0:if(F[S(1530)]){g0>>>=7&_0,_0-=7&_0,F[S(443)]=ix;break}for(;_0<3;){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}switch(F[S(1530)]=1&g0,_0-=1,3&(g0>>>=1)){case 0:F[S(443)]=y0;break;case 1:if(z0(F),F[S(443)]=w0,p0===p){g0>>>=2,_0-=2;break x}break;case 2:F[S(443)]=T0;break;case 3:Z[S(4106)]=S(4014),F[S(443)]=G0}g0>>>=2,_0-=2;break;case y0:for(g0>>>=7&_0,_0-=7&_0;_0<32;){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}if((65535&g0)!=(g0>>>16^65535)){Z[S(4106)]=S(3528),F[S(443)]=G0;break}if(F.length=65535&g0,g0=0,_0=0,F[S(443)]=f0,p0===p)break x;case f0:F[S(443)]=v;case v:if(K0=F[S(3650)]){if(K0>R0&&(K0=R0),K0>ex&&(K0=ex),K0===0)break x;r[S(1030)](vx,D0,L0,K0,_x),R0-=K0,L0+=K0,ex-=K0,_x+=K0,F[S(3650)]-=K0;break}F[S(443)]=W;break;case T0:for(;_0<14;){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}if(F[S(2486)]=257+(31&g0),g0>>>=5,_0-=5,F[S(2200)]=1+(31&g0),g0>>>=5,_0-=5,F.ncode=4+(15&g0),g0>>>=4,_0-=4,F[S(2486)]>286||F.ndist>30){Z[S(4106)]=S(1771),F[S(443)]=G0;break}F.have=0,F.mode=F0;case F0:for(;F[S(3915)]<F[S(2433)];){for(;_0<3;){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}F[S(684)][Pt[F[S(3915)]++]]=7&g0,g0>>>=3,_0-=3}for(;F[S(3915)]<19;)F[S(684)][Pt[F.have++]]=0;if(F[S(1540)]=F.lendyn,F[S(736)]=7,Be={bits:F[S(736)]},ne=c(f,F[S(684)],0,19,F[S(1540)],0,F[S(1285)],Be),F[S(736)]=Be[S(2681)],ne){Z[S(4106)]="invalid code lengths set",F[S(443)]=G0;break}F[S(3915)]=0,F[S(443)]=O0;case O0:for(;F.have<F.nlen+F.ndist;){for(;Rx=(Hx=F.lencode[g0&(1<<F[S(736)])-1])>>>16&255,Zx=65535&Hx,!((bx=Hx>>>24)<=_0);){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}if(Zx<16)g0>>>=bx,_0-=bx,F[S(684)][F.have++]=Zx;else{if(Zx===16){for(Ae=bx+2;_0<Ae;){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}if(g0>>>=bx,_0-=bx,F.have===0){Z[S(4106)]=S(2734),F[S(443)]=G0;break}wx=F.lens[F[S(3915)]-1],K0=3+(3&g0),g0>>>=2,_0-=2}else if(Zx===17){for(Ae=bx+3;_0<Ae;){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}_0-=bx,wx=0,K0=3+(7&(g0>>>=bx)),g0>>>=3,_0-=3}else{for(Ae=bx+7;_0<Ae;){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}_0-=bx,wx=0,K0=11+(127&(g0>>>=bx)),g0>>>=7,_0-=7}if(F.have+K0>F[S(2486)]+F.ndist){Z[S(4106)]=S(2734),F[S(443)]=G0;break}for(;K0--;)F[S(684)][F[S(3915)]++]=wx}}if(F[S(443)]===G0)break;if(F[S(684)][256]===0){Z[S(4106)]=S(474),F.mode=G0;break}if(F[S(736)]=9,Be={bits:F[S(736)]},ne=c(l,F[S(684)],0,F[S(2486)],F[S(1540)],0,F[S(1285)],Be),F[S(736)]=Be[S(2681)],ne){Z.msg=S(3635),F[S(443)]=G0;break}if(F[S(583)]=6,F.distcode=F[S(901)],Be={bits:F[S(583)]},ne=c(m,F[S(684)],F.nlen,F.ndist,F[S(1038)],0,F[S(1285)],Be),F[S(583)]=Be[S(2681)],ne){Z[S(4106)]=S(4170),F[S(443)]=G0;break}if(F[S(443)]=w0,p0===p)break x;case w0:F[S(443)]=U0;case U0:if(R0>=6&&ex>=258){Z.next_out=_x,Z[S(2873)]=ex,Z[S(3784)]=L0,Z[S(2350)]=R0,F[S(1875)]=g0,F[S(2681)]=_0,u(Z,Ax),_x=Z.next_out,vx=Z[S(3980)],ex=Z[S(2873)],L0=Z[S(3784)],D0=Z.input,R0=Z[S(2350)],g0=F[S(1875)],_0=F[S(2681)],F[S(443)]===W&&(F[S(3350)]=-1);break}for(F.back=0;Rx=(Hx=F[S(1540)][g0&(1<<F.lenbits)-1])>>>16&255,Zx=65535&Hx,!((bx=Hx>>>24)<=_0);){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}if(Rx&&(240&Rx)==0){for(Ox=bx,xt=Rx,f2=Zx;Rx=(Hx=F.lencode[f2+((g0&(1<<Ox+xt)-1)>>Ox)])>>>16&255,Zx=65535&Hx,!(Ox+(bx=Hx>>>24)<=_0);){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}g0>>>=Ox,_0-=Ox,F.back+=Ox}if(g0>>>=bx,_0-=bx,F[S(3350)]+=bx,F[S(3650)]=Zx,Rx===0){F[S(443)]=v0;break}if(32&Rx){F[S(3350)]=-1,F[S(443)]=W;break}if(64&Rx){Z.msg=S(3877),F.mode=G0;break}F.extra=15&Rx,F[S(443)]=xx;case xx:if(F[S(3772)]){for(Ae=F.extra;_0<Ae;){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}F[S(3650)]+=g0&(1<<F[S(3772)])-1,g0>>>=F[S(3772)],_0-=F[S(3772)],F[S(3350)]+=F[S(3772)]}F[S(3521)]=F[S(3650)],F[S(443)]=W0;case W0:for(;Rx=(Hx=F[S(1038)][g0&(1<<F.distbits)-1])>>>16&255,Zx=65535&Hx,!((bx=Hx>>>24)<=_0);){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}if((240&Rx)==0){for(Ox=bx,xt=Rx,f2=Zx;Rx=(Hx=F[S(1038)][f2+((g0&(1<<Ox+xt)-1)>>Ox)])>>>16&255,Zx=65535&Hx,!(Ox+(bx=Hx>>>24)<=_0);){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}g0>>>=Ox,_0-=Ox,F[S(3350)]+=Ox}if(g0>>>=bx,_0-=bx,F[S(3350)]+=bx,64&Rx){Z.msg=S(3583),F.mode=G0;break}F[S(858)]=Zx,F[S(3772)]=15&Rx,F[S(443)]=j0;case j0:if(F[S(3772)]){for(Ae=F[S(3772)];_0<Ae;){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}F.offset+=g0&(1<<F.extra)-1,g0>>>=F[S(3772)],_0-=F[S(3772)],F[S(3350)]+=F[S(3772)]}if(F[S(858)]>F[S(2771)]){Z[S(4106)]=S(1337),F[S(443)]=G0;break}F[S(443)]=tx;case tx:if(ex===0)break x;if(K0=Ax-ex,F[S(858)]>K0){if((K0=F[S(858)]-K0)>F[S(3794)]&&F[S(2223)]){Z[S(4106)]=S(1337),F[S(443)]=G0;break}K0>F[S(2910)]?(K0-=F.wnext,l2=F[S(1135)]-K0):l2=F[S(2910)]-K0,K0>F.length&&(K0=F[S(3650)]),Et=F.window}else Et=vx,l2=_x-F[S(858)],K0=F.length;K0>ex&&(K0=ex),ex-=K0,F[S(3650)]-=K0;do vx[_x++]=Et[l2++];while(--K0);F[S(3650)]===0&&(F[S(443)]=U0);break;case v0:if(ex===0)break x;vx[_x++]=F.length,ex--,F[S(443)]=U0;break;case ix:if(F.wrap){for(;_0<32;){if(R0===0)break x;R0--,g0|=D0[L0++]<<_0,_0+=8}if(Ax-=ex,Z[S(2421)]+=Ax,F[S(1894)]+=Ax,Ax&&(Z[S(1587)]=F[S(2122)]=F.flags?s(F[S(2122)],vx,Ax,_x-Ax):n(F[S(2122)],vx,Ax,_x-Ax)),Ax=ex,(F[S(3618)]?g0:k(g0))!==F[S(2122)]){Z[S(4106)]=S(3966),F[S(443)]=G0;break}g0=0,_0=0}F[S(443)]=ax;case ax:if(F[S(499)]&&F[S(3618)]){for(;_0<32;){if(R0===0)break x;R0--,g0+=D0[L0++]<<_0,_0+=8}if(g0!==(4294967295&F.total)){Z.msg=S(3397),F[S(443)]=G0;break}g0=0,_0=0}F[S(443)]=H0;case H0:ne=y;break x;case G0:ne=B;break x;case nx:return T;default:return b}return Z[S(834)]=_x,Z[S(2873)]=ex,Z[S(3784)]=L0,Z[S(2350)]=R0,F[S(1875)]=g0,F[S(2681)]=_0,(F[S(1135)]||Ax!==Z[S(2873)]&&F.mode<G0&&(F.mode<ix||p0!==h))&&q0(Z,Z.output,Z.next_out,Ax-Z[S(2873)]),$2-=Z[S(2350)],Ax-=Z[S(2873)],Z[S(3875)]+=$2,Z[S(2421)]+=Ax,F[S(1894)]+=Ax,F[S(499)]&&Ax&&(Z[S(1587)]=F[S(2122)]=F.flags?s(F[S(2122)],vx,Ax,Z[S(834)]-Ax):n(F[S(2122)],vx,Ax,Z[S(834)]-Ax)),Z[S(2960)]=F.bits+(F[S(1530)]?64:0)+(F.mode===W?128:0)+(F.mode===w0||F[S(443)]===f0?256:0),($2===0&&Ax===0||p0===h)&&ne===_&&(ne=M),ne}function sx(Z){const p0=a;if(!Z||!Z.state)return b;var S=Z[p0(2799)];return S[p0(1616)]&&(S[p0(1616)]=null),Z[p0(2799)]=null,_}function hx(Z,p0){const S=a;var F;return Z&&Z.state?(2&(F=Z[S(2799)])[S(499)])==0?b:(F[S(1259)]=p0,p0[S(2859)]=!1,_):b}function Y0(Z,p0){const S=a;var F,D0=p0[S(3650)];return Z&&Z.state?(F=Z.state).wrap!==0&&F[S(443)]!==Y?b:F.mode===Y&&n(1,p0,D0,0)!==F.check?B:q0(Z,p0,D0,D0)?(F.mode=nx,T):(F[S(3208)]=1,_):b}t[a(2944)]=r0,t[a(3301)]=a0,t[a(3906)]=$,t[a(768)]=b0,t[a(2854)]=e0,t[a(2653)]=N0,t.inflateEnd=sx,t[a(3483)]=hx,t.inflateSetDictionary=Y0,t[a(1338)]=a(2101)},{"../utils/common":1,"./adler32":3,"./crc32":5,"./inffast":7,"./inftrees":9}],9:[function(e,x,t){const a=o;var r=e("../utils/common"),n=15,s=852,u=592,c=0,f=1,l=2,m=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],h=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],C=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],p=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];x[a(3660)]=function(_,y,A,b,B,T,M,w){const I=a;var P,V,q,X,H,z,u0,n0,N,Y=w[I(2681)],W=0,x0=0,y0=0,f0=0,v=0,T0=0,F0=0,O0=0,w0=0,U0=0,xx=null,W0=0,j0=new r.Buf16(n+1),tx=new r[I(1043)](n+1),v0=null,ix=0;for(W=0;W<=n;W++)j0[W]=0;for(x0=0;x0<b;x0++)j0[y[A+x0]]++;for(v=Y,f0=n;f0>=1&&j0[f0]===0;f0--);if(v>f0&&(v=f0),f0===0)return B[T++]=20971520,B[T++]=20971520,w[I(2681)]=1,0;for(y0=1;y0<f0&&j0[y0]===0;y0++);for(v<y0&&(v=y0),O0=1,W=1;W<=n;W++)if(O0<<=1,(O0-=j0[W])<0)return-1;if(O0>0&&(_===c||f0!==1))return-1;for(tx[1]=0,W=1;W<n;W++)tx[W+1]=tx[W]+j0[W];for(x0=0;x0<b;x0++)y[A+x0]!==0&&(M[tx[y[A+x0]]++]=x0);if(_===c?(xx=v0=M,z=19):_===f?(xx=m,W0-=257,v0=h,ix-=257,z=256):(xx=C,v0=p,z=-1),U0=0,x0=0,W=y0,H=T,T0=v,F0=0,q=-1,X=(w0=1<<v)-1,_===f&&w0>s||_===l&&w0>u)return 1;for(;;){u0=W-F0,M[x0]<z?(n0=0,N=M[x0]):M[x0]>z?(n0=v0[ix+M[x0]],N=xx[W0+M[x0]]):(n0=96,N=0),P=1<<W-F0,y0=V=1<<T0;do B[H+(U0>>F0)+(V-=P)]=u0<<24|n0<<16|N|0;while(V!==0);for(P=1<<W-1;U0&P;)P>>=1;if(P!==0?(U0&=P-1,U0+=P):U0=0,x0++,--j0[W]==0){if(W===f0)break;W=y[A+M[x0]]}if(W>v&&(U0&X)!==q){for(F0===0&&(F0=v),H+=y0,O0=1<<(T0=W-F0);T0+F0<f0&&!((O0-=j0[T0+F0])<=0);)T0++,O0<<=1;if(w0+=1<<T0,_===f&&w0>s||_===l&&w0>u)return 1;B[q=U0&X]=v<<24|T0<<16|H-T|0}}return U0!==0&&(B[H+U0]=W-F0<<24|64<<16|0),w.bits=v,0}},{"../utils/common":1}],10:[function(e,x,t){const a=o;x[a(3660)]={2:a(4023),1:a(3002),0:"","-1":a(3048),"-2":a(1093),"-3":a(2935),"-4":a(3215),"-5":"buffer error","-6":"incompatible version"}},{}],11:[function(e,x,t){function a(){const r=C0;this[r(2016)]=null,this[r(3784)]=0,this.avail_in=0,this[r(3875)]=0,this.output=null,this[r(834)]=0,this[r(2873)]=0,this[r(2421)]=0,this[r(4106)]="",this.state=null,this[r(2960)]=2,this[r(1587)]=0}x.exports=a},{}],"/lib/inflate.js":[function(e,x,t){const a=o;var r=e(a(2741)),n=e(a(1944)),s=e(a(629)),u=e(a(1481)),c=e("./zlib/messages"),f=e(a(2601)),l=e(a(2149)),m=Object[a(3096)][a(2557)];function h(_){const y=a;if(!(this instanceof h))return new h(_);this[y(2987)]=n[y(3677)]({chunkSize:16384,windowBits:0,to:""},_||{});var A=this.options;A[y(2009)]&&A[y(2346)]>=0&&A.windowBits<16&&(A.windowBits=-A[y(2346)],A[y(2346)]===0&&(A.windowBits=-15)),!(A[y(2346)]>=0&&A.windowBits<16)||_&&_[y(2346)]||(A.windowBits+=32),A[y(2346)]>15&&A.windowBits<48&&(15&A[y(2346)])==0&&(A[y(2346)]|=15),this[y(2382)]=0,this[y(4106)]="",this[y(2095)]=!1,this.chunks=[],this[y(1966)]=new f,this[y(1966)].avail_out=0;var b=r[y(2854)](this[y(1966)],A.windowBits);if(b!==u[y(3717)])throw new Error(c[b]);this[y(3938)]=new l,r.inflateGetHeader(this[y(1966)],this[y(3938)])}function C(_,y){const A=a;var b=new h(y);if(b[A(2583)](_,!0),b[A(2382)])throw b[A(4106)]||c[b[A(2382)]];return b[A(3022)]}function p(_,y){const A=a;return(y=y||{})[A(2009)]=!0,C(_,y)}h[a(3096)][a(2583)]=function(_,y){const A=a;var b,B,T,M,w,I,P=this.strm,V=this.options[A(687)],q=this[A(2987)][A(2623)],X=!1;if(this[A(2095)])return!1;B=y===~~y?y:y===!0?u[A(1194)]:u[A(2817)],typeof _=="string"?P[A(2016)]=s[A(3479)](_):A(1906)===m[A(798)](_)?P[A(2016)]=new Uint8Array(_):P[A(2016)]=_,P[A(3784)]=0,P[A(2350)]=P[A(2016)][A(3650)];do{if(P.avail_out===0&&(P[A(3980)]=new n[A(2649)](V),P.next_out=0,P[A(2873)]=V),(b=r[A(2653)](P,u.Z_NO_FLUSH))===u[A(769)]&&q&&(I=A(4039)==typeof q?s.string2buf(q):A(1906)===m[A(798)](q)?new Uint8Array(q):q,b=r[A(2051)](this.strm,I)),b===u[A(490)]&&X===!0&&(b=u[A(3717)],X=!1),b!==u[A(4099)]&&b!==u[A(3717)])return this.onEnd(b),this.ended=!0,!1;P[A(834)]&&(P.avail_out!==0&&b!==u[A(4099)]&&(P[A(2350)]!==0||B!==u[A(1194)]&&B!==u[A(3504)])||(this[A(2987)].to==="string"?(T=s[A(3685)](P[A(3980)],P[A(834)]),M=P[A(834)]-T,w=s[A(3992)](P.output,T),P[A(834)]=M,P.avail_out=V-M,M&&n[A(1030)](P[A(3980)],P[A(3980)],T,M,0),this[A(2727)](w)):this[A(2727)](n[A(3163)](P.output,P.next_out)))),P[A(2350)]===0&&P.avail_out===0&&(X=!0)}while((P.avail_in>0||P[A(2873)]===0)&&b!==u.Z_STREAM_END);return b===u[A(4099)]&&(B=u.Z_FINISH),B===u[A(1194)]?(b=r[A(4012)](this[A(1966)]),this.onEnd(b),this.ended=!0,b===u[A(3717)]):B!==u[A(3504)]||(this[A(2800)](u[A(3717)]),P[A(2873)]=0,!0)},h[a(3096)][a(2727)]=function(_){this[a(1204)].push(_)},h[a(3096)][a(2800)]=function(_){const y=a;_===u.Z_OK&&(this[y(2987)].to==="string"?this[y(3022)]=this.chunks[y(2243)](""):this.result=n[y(2008)](this[y(1204)])),this[y(1204)]=[],this.err=_,this[y(4106)]=this[y(1966)].msg},t[a(2680)]=h,t[a(2653)]=C,t[a(3601)]=p,t.ungzip=C},{"./utils/common":1,"./utils/strings":2,"./zlib/constants":4,"./zlib/gzheader":6,"./zlib/inflate":8,"./zlib/messages":10,"./zlib/zstream":11}]},{},[])(o(930));var N2=qo;function Lx(){}Lx[o(3662)]=9,Lx.createEdgeData=function(e,x,t){const a=o;if(x.length==0)return null;let r,n=x[0];r=n[a(2202)]===0?new Uint16Array(n.indicesTypedArray.buffer,n.indicesTypedArray[a(2471)],n.indicesTypedArray[a(3818)]/2):new Uint32Array(n[a(3296)][a(4056)],n[a(3296)][a(2471)],n[a(3296)][a(3818)]/4);let s=Lx[a(2500)](e,!1,r),u=EdgePreprocessing.extractEdges(s);return t&&(u[a(2079)][a(3833)]&&t[a(2583)](u[a(2079)][a(3833)][a(4056)]),u.silhouette[a(3833)]&&t.push(u[a(1362)].instancesData[a(4056)])),u};let hi=null;function Yo(e){const x=o;if(hi)return hi;let t=new Float32Array(8),a=0;return t[a++]=0,t[a++]=0,t[a++]=0,t[a++]=1,t[a++]=1,t[a++]=1,t[a++]=1,t[a++]=0,hi=Cesium[x(2691)].createVertexBuffer({context:e,typedArray:t,usage:Cesium[x(3586)][x(2109)]}),hi[x(2229)]=!1,hi}function sf(){let e=new Uint16Array(6),x=0;return e[x++]=2,e[x++]=1,e[x++]=0,e[x++]=3,e[x++]=2,e[x++]=0,e}let ma=null;Lx[o(2417)]=function(e){const x=o;return ma||(ma=Cesium[x(2691)][x(2417)]({context:e,typedArray:sf(),usage:Cesium.BufferUsage[x(2109)],indexDatatype:Cesium.IndexDatatype[x(3884)]}),ma[x(2229)]=!1,ma)},Lx.createRegularEdgeAttributes=function(e,x){const t=o;if(!x[t(3833)]||x.instancesData[t(3650)]===0)return;let a={},r=[];x.attributeLocations=a,x[t(3126)]=r;let n=Cesium.Buffer[t(3369)]({context:e,typedArray:x[t(3833)],usage:Cesium.BufferUsage.STATIC_DRAW});x[t(3833)]=null;let s=Cesium.ComponentDatatype[t(1686)](Cesium[t(549)][t(3148)]),u=Yo(e),c=0;a[t(670)]=c++,r.push({index:a.aSideness,vertexBuffer:u,componentsPerAttribute:2,componentDatatype:Cesium[t(549)][t(3148)],offsetInBytes:0,strideInBytes:2*Cesium[t(549)][t(1686)](Cesium.ComponentDatatype[t(3148)]),normalize:!1});let f=Lx.RegularInstanceStride,l=0;a[t(4142)]=c++,r[t(2583)]({index:a[t(4142)],vertexBuffer:n,componentsPerAttribute:3,componentDatatype:Cesium[t(549)][t(3148)],normalize:!1,offsetInBytes:s*l,strideInBytes:s*f,instanceDivisor:1}),l+=3,a.aPosition1=c++,r[t(2583)]({index:a[t(3252)],vertexBuffer:n,componentsPerAttribute:3,componentDatatype:Cesium[t(549)][t(3148)],normalize:!1,offsetInBytes:s*l,strideInBytes:s*f,instanceDivisor:1}),l+=3,a[t(782)]=c++,r[t(2583)]({index:a[t(782)],vertexBuffer:n,componentsPerAttribute:3,componentDatatype:Cesium[t(549)][t(3148)],normalize:!0,offsetInBytes:s*l,strideInBytes:s*f,instanceDivisor:1}),l+=3},Lx.createSilhouetteEdgeAttributes=function(e,x){const t=o;if(!x.instancesData||x[t(3833)][t(3650)]==0)return;let a={},r=[];x[t(4127)]=a,x[t(3126)]=r;let n=Cesium[t(2691)][t(3369)]({context:e,typedArray:x.instancesData,usage:Cesium.BufferUsage.STATIC_DRAW});x[t(3833)]=null;let s=Cesium[t(549)][t(1686)](Cesium[t(549)].FLOAT),u=0;a[t(670)]=u++,r[t(2583)]({index:a[t(670)],vertexBuffer:Yo(e),componentsPerAttribute:2,componentDatatype:Cesium[t(549)][t(3148)],offsetInBytes:0,strideInBytes:2*s,normalize:!1});let c=0;a.aPosition0=u++,r[t(2583)]({index:a[t(4142)],vertexBuffer:n,componentsPerAttribute:3,componentDatatype:Cesium.ComponentDatatype[t(3148)],normalize:!1,offsetInBytes:s*c,strideInBytes:12*s,instanceDivisor:1}),c+=3,a[t(3252)]=u++,r[t(2583)]({index:a[t(3252)],vertexBuffer:n,componentsPerAttribute:3,componentDatatype:Cesium[t(549)][t(3148)],normalize:!1,offsetInBytes:s*c,strideInBytes:12*s,instanceDivisor:1}),c+=3,a[t(3673)]=u++,r[t(2583)]({index:a[t(3673)],vertexBuffer:n,componentsPerAttribute:3,componentDatatype:Cesium[t(549)].FLOAT,normalize:!0,offsetInBytes:s*c,strideInBytes:12*s,instanceDivisor:1}),c+=3,a[t(4004)]=u++,r.push({index:a[t(4004)],vertexBuffer:n,componentsPerAttribute:3,componentDatatype:Cesium[t(549)][t(3148)],normalize:!0,offsetInBytes:s*c,strideInBytes:12*s,instanceDivisor:1}),c+=3},Lx.extractEdgeInformation=function(e,x,t){const a=o;let r=e.attrLocation[a(1303)],n=e.vertexAttributes[r],s=n[a(1776)],u=new Float32Array(n.typedArray[a(4056)],n[a(1737)][a(2471)],n[a(1737)].byteLength/4),c=u.length/s;if(x&&t)return{faces:t,neighbors:MeshProcessing[a(2082)](t,c),vertices:u,dim:s};let f,l=n[a(1737)].buffer;f=isCompress?u[a(4056)]:l[a(3403)](n.typedArray.byteOffset,n[a(1737)].byteOffset+n[a(1737)].byteLength);let m=MeshProcessing.deduplicate(f,s),h=Lx[a(1477)](m[a(2687)],t);return{faces:h,neighbors:MeshProcessing.computeNeighbors(h,m[a(2014)]),vertices:new Float32Array(m[a(4056)]),dim:s}},Lx[o(1477)]=function(e,x){const t=o;if(x){x=x[t(3403)]();for(let a=0;a<x[t(3650)];a++)x[a]=e[x[a]];return x}return e};let Gx=new Cesium[o(516)],te=new Cesium[o(516)],st=new Cesium.Cartesian3,Ot=new Cesium[o(516)],jx=new Cesium[o(516)],ha=new Cesium[o(516)],C2=new Cesium[o(516)],Jo=new Cesium.Cartesian3;function cf(e){const x=o;var t=x(1345)!=typeof document&&document.currentScript?document[x(3372)][x(3612)]:void 0;function a(d,D){d||f(x(3501)+D)}function r(d,D,O){const i0=x;var I0=D+O;for(O=D;d[O]&&!(O>=I0);)++O;if(16<O-D&&d[i0(1238)]&&$)return $[i0(2728)](d[i0(1238)](D,O));for(I0="";D<O;){var Q0=d[D++];if(128&Q0){var ox=63&d[D++];if((224&Q0)==192)I0+=String[i0(4176)]((31&Q0)<<6|ox);else{var zx=63&d[D++];65536>(Q0=(240&Q0)==224?(15&Q0)<<12|ox<<6|zx:(7&Q0)<<18|ox<<12|zx<<6|63&d[D++])?I0+=String[i0(4176)](Q0):(Q0-=65536,I0+=String.fromCharCode(55296|Q0>>10,56320|1023&Q0))}}else I0+=String.fromCharCode(Q0)}return I0}function n(d,D){return d?r(a0,d,D):""}function s(d,D){return 0<d%D&&(d+=D-d%D),d}function u(d){const D=x;o0=d,v.HEAP8=r0=new Int8Array(d),v[D(2332)]=new Int16Array(d),v[D(3499)]=e0=new Int32Array(d),v[D(4002)]=a0=new Uint8Array(d),v.HEAPU16=new Uint16Array(d),v[D(2308)]=new Uint32Array(d),v.HEAPF32=new Float32Array(d),v.HEAPF64=new Float64Array(d)}function c(d){const D=x;for(;0<d[D(3650)];){var O=d[D(1523)]();if(D(1355)==typeof O)O();else{var i0=O.func;typeof i0=="number"?O[D(3731)]===void 0?v[D(2979)](i0):v.dynCall_vi(i0,O[D(3731)]):i0(O.arg===void 0?null:O[D(3731)])}}}function f(d){const D=x;throw v[D(2078)]&&v[D(2078)](d),L(d+=""),U(d),d0=!0,new WebAssembly[D(1295)](D(3073)+d+D(722))}function l(d){const D=x;return String.prototype[D(2570)]?d.startsWith("data:application/octet-stream;base64,"):d[D(3019)]("data:application/octet-stream;base64,")===0}function m(){try{if(nx)return new Uint8Array(nx);if(G0)return G0(Z);throw"both async and sync fetching of the wasm failed"}catch(d){f(d)}}function h(){const d=x;if(!h[d(1757)]){var D,O={USER:"web_user",LOGNAME:d(1801),PATH:"/",PWD:"/",HOME:d(1228),LANG:(d(2408)==typeof navigator&&navigator[d(2692)]&&navigator.languages[0]||"C")[d(960)]("-","_")+d(2669),_:W0};for(D in p0)O[D]=p0[D];var i0=[];for(D in O)i0[d(2583)](D+"="+O[D]);h.strings=i0}return h[d(1757)]}function C(d){const D=x;function O(){const i0=C0;if(!ji&&(ji=!0,!d0)){if(N0=!0,c(S0),c(z0),v.onRuntimeInitialized&&v[i0(1698)](),v[i0(2707)])for(i0(1355)==typeof v[i0(2707)]&&(v[i0(2707)]=[v[i0(2707)]]);v[i0(2707)][i0(3650)];)q0[i0(3355)](v[i0(2707)][i0(1523)]());c(q0)}}if(!(0<sx)){if(v[D(3838)])for(D(1355)==typeof v[D(3838)]&&(v[D(3838)]=[v[D(3838)]]);v[D(3838)][D(3650)];)c0[D(3355)](v.preRun[D(1523)]());c(c0),0<sx||(v.setStatus?(v[D(3695)]("Running..."),setTimeout(function(){setTimeout(function(){v[C0(3695)]("")},1),O()},1)):O())}}function p(){}function _(d){return(d||p)[x(4162)]}function y(d,D){const O=x;var i0=_(D),I0=i0[d];return I0||((I0=Object[O(1693)]((D||p).prototype))[O(1213)]=d,i0[d]=I0)}function A(d){const D=x;if(D(4039)==typeof d){for(var O=0,i0=0;i0<d[D(3650)];++i0){var I0=d[D(3128)](i0);55296<=I0&&57343>=I0&&(I0=65536+((1023&I0)<<10)|1023&d[D(3128)](++i0)),127>=I0?++O:O=2047>=I0?O+2:65535>=I0?O+3:O+4}if(i0=0,0<(I0=(O=Array(O+1))[D(3650)])){I0=i0+I0-1;for(var Q0=0;Q0<d[D(3650)];++Q0){var ox=d.charCodeAt(Q0);if(55296<=ox&&57343>=ox&&(ox=65536+((1023&ox)<<10)|1023&d[D(3128)](++Q0)),127>=ox){if(i0>=I0)break;O[i0++]=ox}else{if(2047>=ox){if(i0+1>=I0)break;O[i0++]=192|ox>>6}else{if(65535>=ox){if(i0+2>=I0)break;O[i0++]=224|ox>>12}else{if(i0+3>=I0)break;O[i0++]=240|ox>>18,O[i0++]=128|ox>>12&63}O[i0++]=128|ox>>6&63}O[i0++]=128|63&ox}}O[i0]=0}d=px.alloc(O,r0),px[D(3748)](O,r0,d)}return d}function b(){throw"cannot construct a Status, no constructor in IDL"}function B(){const d=x;this[d(1213)]=g0(),_(B)[this[d(1213)]]=this}function T(){const d=x;this[d(1213)]=K0(),_(T)[this[d(1213)]]=this}function M(){const d=x;this.ptr=Rx(),_(M)[this[d(1213)]]=this}function w(){const d=x;this[d(1213)]=f2(),_(w)[this[d(1213)]]=this}function I(){const d=x;this[d(1213)]=Ae(),_(I)[this.ptr]=this}function P(){const d=x;this[d(1213)]=Rr(),_(P)[this[d(1213)]]=this}function V(){this.ptr=ja(),_(V)[this.ptr]=this}function q(){const d=x;this[d(1213)]=Hi(),_(q)[this[d(1213)]]=this}function X(){const d=x;this[d(1213)]=Nr(),_(X)[this[d(1213)]]=this}function H(){const d=x;this[d(1213)]=ii(),_(H)[this[d(1213)]]=this}function z(){const d=x;this.ptr=Qa(),_(z)[this[d(1213)]]=this}function u0(){const d=x;this.ptr=ri(),_(u0)[this[d(1213)]]=this}function n0(){this.ptr=Wr(),_(n0)[this.ptr]=this}function N(){const d=x;this[d(1213)]=E(),_(N)[this[d(1213)]]=this}function Y(){const d=x;this[d(1213)]=G(),_(Y)[this[d(1213)]]=this}function W(){const d=x;this[d(1213)]=k1(),_(W)[this[d(1213)]]=this}function x0(){throw x(3246)}function y0(){const d=x;this[d(1213)]=J1(),_(y0)[this[d(1213)]]=this}function f0(){const d=x;this.ptr=xC(),_(f0)[this[d(1213)]]=this}x(1345)!=typeof __filename&&(t=t||__filename);var v=(e=e||{})!==void 0?e:{},T0=!1,F0=!1;v[x(1698)]=function(){const d=x;T0=!0,F0&&d(1355)==typeof v[d(2667)]&&v[d(2667)](v)},v[x(608)]=function(){const d=x;F0=!0,T0&&d(1355)==typeof v.onModuleLoaded&&v[d(2667)](v)},v.isVersionSupported=function(d){const D=x;return D(4039)==typeof d&&!(2>(d=d[D(1830)]("."))[D(3650)]||3<d[D(3650)])&&(d[0]==1&&0<=d[1]&&3>=d[1]||!(d[0]!=0||10<d[1]))};var O0,w0={};for(O0 in v)v.hasOwnProperty(O0)&&(w0[O0]=v[O0]);var U0,xx,W0="./this.program",j0=!1,tx=!1;j0=x(2408)==typeof window,tx=typeof importScripts=="function",U0=x(2408)==typeof process&&x(2408)==typeof process[x(948)]&&x(4039)==typeof process[x(948)][x(3166)]&&!j0&&!tx,xx=!j0&&!U0&&!tx;var v0,ix,ax="";if(U0){ax=__dirname+"/";var H0=function(d,D){const O=x;return v0||(v0=require("fs")),ix||(ix=require(O(757))),d=ix[O(1586)](d),v0[O(3754)](d,D?null:O(3542))},G0=function(d){const D=x;return(d=H0(d,!0))[D(4056)]||(d=new Uint8Array(d)),a(d.buffer),d};1<process.argv[x(3650)]&&(W0=process.argv[1][x(960)](/\\/g,"/")),process[x(2166)].slice(2),process.on(x(1800),function(d){throw d}),process.on(x(3912),f),v[x(577)]=function(){return x(784)}}else xx?(typeof read<"u"&&(H0=function(d){return read(d)}),G0=function(d){const D=x;return typeof readbuffer=="function"?new Uint8Array(readbuffer(d)):(a(D(2408)==typeof(d=read(d,D(961)))),d)},x(1345)!=typeof print&&(x(1345)==typeof console&&(console={}),console[x(3240)]=print,console[x(2580)]=console[x(2111)]=typeof printErr<"u"?printErr:print)):(j0||tx)&&(tx?ax=self.location[x(2318)]:document[x(3372)]&&(ax=document[x(3372)][x(3612)]),t&&(ax=t),ax=ax[x(3019)](x(2605))!==0?ax.substr(0,ax[x(3308)]("/")+1):"",H0=function(d){const D=x;var O=new XMLHttpRequest;return O.open(D(2313),d,!1),O[D(3414)](null),O[D(3382)]},tx&&(G0=function(d){const D=x;var O=new XMLHttpRequest;return O[D(3928)](D(2313),d,!1),O[D(1236)]=D(1595),O[D(3414)](null),new Uint8Array(O[D(2402)])}));var nx,L=v[x(4115)]||console[x(3240)][x(2383)](console),U=v[x(683)]||console.warn.bind(console);for(O0 in w0)w0[x(2364)](O0)&&(v[O0]=w0[O0]);w0=null,v.thisProgram&&(W0=v[x(4150)]),v[x(2764)]&&(nx=v[x(2764)]),x(2408)!=typeof WebAssembly&&U(x(4097));var K,k=new WebAssembly[x(1508)]({initial:381,maximum:381,element:"anyfunc"}),d0=!1,$=x(1345)!=typeof TextDecoder?new TextDecoder(x(3542)):void 0;typeof TextDecoder<"u"&&new TextDecoder(x(3894));var r0,a0,e0,b0=v[x(1029)]||16777216;if(K=v[x(1396)]?v.wasmMemory:new WebAssembly[x(718)]({initial:b0/65536}))var o0=K[x(4056)];b0=o0[x(3818)],u(o0),e0[4604]=5261456;var c0=[],S0=[],z0=[],q0=[],N0=!1,sx=0,hx=null;v[x(1580)]={},v[x(3663)]={};var Y0,Z="draco_decoder.wasm";l(Z)||(Y0=Z,Z=v[x(767)]?v.locateFile(Y0,ax):ax+Y0),S0.push({func:function(){vx()}});var p0={},S={buffers:[null,[],[]],printChar:function(d,D){const O=x;var i0=S[O(2063)][d];D===0||D===10?((d===1?L:U)(r(i0,0)),i0[O(3650)]=0):i0[O(2583)](D)},varargs:0,get:function(d){const D=x;return S[D(2055)]+=4,e0[S[D(2055)]-4>>2]},getStr:function(){return n(S.get())},get64:function(){const d=x;var D=S[d(3715)]();return S[d(3715)](),D},getZero:function(){S.get()}},F={__cxa_allocate_exception:function(d){return LC(d)},__cxa_throw:function(d,D,O){throw d},abort:function(){f()},emscripten_get_sbrk_ptr:function(){return 18416},emscripten_memcpy_big:function(d,D,O){const i0=x;a0[i0(2590)](a0[i0(1238)](D,D+O),d)},emscripten_resize_heap:function(d){const D=x;if(2147418112<d)return!1;for(var O=Math.max(r0.length,16777216);O<d;)O=536870912>=O?s(2*O,65536):Math.min(s((3*O+2147483648)/4,65536),2147418112);x:{try{K[D(2321)](O-o0[D(3818)]+65535>>16),u(K.buffer);var i0=1;break x}catch{}i0=void 0}return!!i0},environ_get:function(d,D){var O=0;return h().forEach(function(i0,I0){const Q0=C0;var ox=D+O;for(I0=e0[d+4*I0>>2]=ox,ox=0;ox<i0[Q0(3650)];++ox)r0[I0++>>0]=i0[Q0(3128)](ox);r0[I0>>0]=0,O+=i0[Q0(3650)]+1}),0},environ_sizes_get:function(d,D){const O=x;var i0=h();e0[d>>2]=i0[O(3650)];var I0=0;return i0[O(1991)](function(Q0){I0+=Q0.length+1}),e0[D>>2]=I0,0},fd_close:function(d){return 0},fd_seek:function(d,D,O,i0,I0){return 0},fd_write:function(d,D,O,i0){const I0=x;try{for(var Q0=0,ox=0;ox<O;ox++){for(var zx=e0[D+8*ox>>2],d2=e0[D+(8*ox+4)>>2],an=0;an<d2;an++)S[I0(3490)](d,a0[zx+an]);Q0+=d2}return e0[i0>>2]=Q0,0}catch(Xr){return I0(1345)!=typeof FS&&Xr instanceof FS.ErrnoError||f(Xr),Xr.errno}},memory:K,setTempRet0:function(d){},table:k},D0=function(){const d=x;function D(Q0,ox){const zx=C0;v[zx(2286)]=Q0.exports,sx--,v.monitorRunDependencies&&v.monitorRunDependencies(sx),sx==0&&hx&&(Q0=hx,hx=null,Q0())}function O(Q0){D(Q0.instance)}function i0(Q0){const ox=C0;return(nx||!j0&&!tx||ox(1355)!=typeof fetch?new Promise(function(zx,d2){zx(m())}):fetch(Z,{credentials:ox(3644)}).then(function(zx){const d2=ox;if(!zx.ok)throw d2(2884)+Z+"'";return zx[d2(1629)]()})[ox(3239)](function(){return m()}))[ox(4167)](function(zx){return WebAssembly[ox(2909)](zx,I0)})[ox(4167)](Q0,function(zx){U(ox(2795)+zx),f(zx)})}var I0={env:F,wasi_unstable:F};if(sx++,v[d(1026)]&&v[d(1026)](sx),v[d(1443)])try{return v[d(1443)](I0,D)}catch(Q0){return U(d(4122)+Q0),!1}return function(){const Q0=d;if(nx||typeof WebAssembly[Q0(3321)]!="function"||l(Z)||Q0(1355)!=typeof fetch)return i0(O);fetch(Z,{credentials:Q0(3644)})[Q0(4167)](function(ox){const zx=Q0;return WebAssembly[zx(3321)](ox,I0).then(O,function(d2){U(zx(941)+d2),U("falling back to ArrayBuffer instantiation"),i0(O)})})}(),{}}();v.asm=D0;var vx=v[x(1974)]=function(){const d=x;return v.asm[d(2524)][d(517)](null,arguments)},L0=v._emscripten_bind_Status_code_0=function(){const d=x;return v[d(2286)][d(2860)].apply(null,arguments)},_x=v[x(1468)]=function(){const d=x;return v[d(2286)][d(3275)][d(517)](null,arguments)},R0=v._emscripten_bind_Status_error_msg_0=function(){const d=x;return v.asm[d(2656)][d(517)](null,arguments)},ex=v[x(3278)]=function(){const d=x;return v[d(2286)][d(570)][d(517)](null,arguments)},g0=v[x(2436)]=function(){const d=x;return v.asm.emscripten_bind_DracoUInt16Array_DracoUInt16Array_0[d(517)](null,arguments)},_0=v._emscripten_bind_DracoUInt16Array_GetValue_1=function(){const d=x;return v[d(2286)][d(3430)][d(517)](null,arguments)},$2=v._emscripten_bind_DracoUInt16Array_size_0=function(){const d=x;return v.asm[d(555)][d(517)](null,arguments)},Ax=v[x(1268)]=function(){const d=x;return v.asm.emscripten_bind_DracoUInt16Array___destroy___0[d(517)](null,arguments)},K0=v._emscripten_bind_PointCloud_PointCloud_0=function(){const d=x;return v[d(2286)][d(2950)][d(517)](null,arguments)},l2=v[x(1078)]=function(){const d=x;return v.asm[d(580)][d(517)](null,arguments)},Et=v[x(1963)]=function(){const d=x;return v[d(2286)][d(1248)][d(517)](null,arguments)},bx=v[x(3851)]=function(){const d=x;return v[d(2286)][d(3566)].apply(null,arguments)},Rx=v[x(4027)]=function(){const d=x;return v[d(2286)][d(3848)][d(517)](null,arguments)},Zx=v[x(2966)]=function(){const d=x;return v[d(2286)][d(2273)][d(517)](null,arguments)},Ox=v[x(937)]=function(){const d=x;return v[d(2286)][d(4074)][d(517)](null,arguments)},xt=v[x(1665)]=function(){const d=x;return v[d(2286)][d(4185)][d(517)](null,arguments)},f2=v[x(945)]=function(){return v[x(2286)].emscripten_bind_DracoUInt32Array_DracoUInt32Array_0.apply(null,arguments)},wx=v[x(2213)]=function(){const d=x;return v[d(2286)][d(1721)][d(517)](null,arguments)},ne=v[x(2600)]=function(){const d=x;return v.asm.emscripten_bind_DracoUInt32Array_size_0[d(517)](null,arguments)},Be=v[x(3289)]=function(){const d=x;return v[d(2286)][d(4094)][d(517)](null,arguments)},Ae=v[x(2584)]=function(){const d=x;return v[d(2286)][d(3524)].apply(null,arguments)},Hx=v[x(1335)]=function(){const d=x;return v[d(2286)].emscripten_bind_AttributeOctahedronTransform_InitFromAttribute_1[d(517)](null,arguments)},Dx=v[x(3130)]=function(){const d=x;return v[d(2286)][d(3139)].apply(null,arguments)},Pt=v[x(1168)]=function(){const d=x;return v[d(2286)][d(2034)][d(517)](null,arguments)},Rr=v._emscripten_bind_PointAttribute_PointAttribute_0=function(){const d=x;return v.asm.emscripten_bind_PointAttribute_PointAttribute_0[d(517)](null,arguments)},Dr=v[x(647)]=function(){const d=x;return v[d(2286)][d(2645)].apply(null,arguments)},Ir=v[x(1482)]=function(){const d=x;return v[d(2286)][d(1893)][d(517)](null,arguments)},wt=v._emscripten_bind_PointAttribute_attribute_type_0=function(){const d=x;return v[d(2286)][d(4174)][d(517)](null,arguments)},Lr=v[x(3035)]=function(){return v[x(2286)].emscripten_bind_PointAttribute_data_type_0.apply(null,arguments)},ei=v[x(1732)]=function(){const d=x;return v[d(2286)][d(1836)][d(517)](null,arguments)},Fr=v[x(483)]=function(){const d=x;return v[d(2286)][d(3529)][d(517)](null,arguments)},x2=v._emscripten_bind_PointAttribute_byte_stride_0=function(){const d=x;return v[d(2286)][d(3520)][d(517)](null,arguments)},Xa=v[x(1169)]=function(){const d=x;return v[d(2286)].emscripten_bind_PointAttribute_byte_offset_0[d(517)](null,arguments)},Or=v[x(2367)]=function(){const d=x;return v.asm[d(1178)][d(517)](null,arguments)},Ee=v[x(3205)]=function(){const d=x;return v[d(2286)][d(1058)].apply(null,arguments)},ja=v[x(1844)]=function(){const d=x;return v.asm[d(3994)].apply(null,arguments)},qa=v[x(1513)]=function(){const d=x;return v.asm[d(2184)][d(517)](null,arguments)},ti=v[x(4141)]=function(){const d=x;return v.asm[d(978)][d(517)](null,arguments)},Hi=v[x(4053)]=function(){const d=x;return v[d(2286)][d(554)][d(517)](null,arguments)},Ya=v[x(2772)]=function(){const d=x;return v[d(2286)][d(2990)][d(517)](null,arguments)},Ja=v[x(1845)]=function(){const d=x;return v[d(2286)].emscripten_bind_AttributeQuantizationTransform_quantization_bits_0[d(517)](null,arguments)},zi=v[x(1912)]=function(){const d=x;return v[d(2286)][d(998)][d(517)](null,arguments)},de=v[x(3486)]=function(){const d=x;return v[d(2286)][d(3982)][d(517)](null,arguments)},Ki=v._emscripten_bind_AttributeQuantizationTransform___destroy___0=function(){const d=x;return v[d(2286)].emscripten_bind_AttributeQuantizationTransform___destroy___0[d(517)](null,arguments)},Nr=v[x(2260)]=function(){const d=x;return v[d(2286)][d(3587)][d(517)](null,arguments)},Vr=v[x(2043)]=function(){const d=x;return v[d(2286)][d(1519)][d(517)](null,arguments)},e2=v[x(3098)]=function(){const d=x;return v[d(2286)][d(1664)][d(517)](null,arguments)},Ur=v[x(1602)]=function(){const d=x;return v[d(2286)][d(817)][d(517)](null,arguments)},ii=v[x(3682)]=function(){const d=x;return v.asm[d(3411)][d(517)](null,arguments)},et=v[x(2835)]=function(){const d=x;return v[d(2286)][d(3264)][d(517)](null,arguments)},Gr=v[x(963)]=function(){const d=x;return v[d(2286)].emscripten_bind_MetadataQuerier_GetIntEntry_2[d(517)](null,arguments)},Hr=v[x(3213)]=function(){const d=x;return v.asm[d(3778)][d(517)](null,arguments)},St=v._emscripten_bind_MetadataQuerier_GetDoubleEntry_2=function(){const d=x;return v[d(2286)][d(2996)][d(517)](null,arguments)},zr=v._emscripten_bind_MetadataQuerier_GetStringEntry_2=function(){const d=x;return v[d(2286)][d(988)].apply(null,arguments)},ai=v[x(2735)]=function(){const d=x;return v[d(2286)][d(746)][d(517)](null,arguments)},ki=v._emscripten_bind_MetadataQuerier_GetEntryName_2=function(){const d=x;return v[d(2286)].emscripten_bind_MetadataQuerier_GetEntryName_2[d(517)](null,arguments)},Za=v._emscripten_bind_MetadataQuerier___destroy___0=function(){return v[x(2286)].emscripten_bind_MetadataQuerier___destroy___0.apply(null,arguments)},Qa=v[x(3742)]=function(){const d=x;return v[d(2286)][d(1740)].apply(null,arguments)},Kr=v[x(1657)]=function(){const d=x;return v[d(2286)][d(2325)][d(517)](null,arguments)},ni=v[x(2295)]=function(){const d=x;return v[d(2286)][d(2252)].apply(null,arguments)},kr=v[x(2201)]=function(){const d=x;return v[d(2286)][d(2227)][d(517)](null,arguments)},ri=v[x(3920)]=function(){const d=x;return v.asm[d(1527)].apply(null,arguments)},Wi=v._emscripten_bind_DracoFloat32Array_GetValue_1=function(){const d=x;return v.asm[d(2278)][d(517)](null,arguments)},t2=v._emscripten_bind_DracoFloat32Array_size_0=function(){const d=x;return v[d(2286)][d(2614)][d(517)](null,arguments)},$a=v[x(2226)]=function(){const d=x;return v.asm[d(2986)].apply(null,arguments)},Wr=v._emscripten_bind_GeometryAttribute_GeometryAttribute_0=function(){const d=x;return v[d(2286)].emscripten_bind_GeometryAttribute_GeometryAttribute_0[d(517)](null,arguments)},Xi=v[x(1007)]=function(){const d=x;return v[d(2286)][d(1889)].apply(null,arguments)},E=v[x(3444)]=function(){const d=x;return v.asm[d(2042)][d(517)](null,arguments)},g=v[x(969)]=function(){const d=x;return v.asm[d(540)][d(517)](null,arguments)},R=v[x(3503)]=function(){const d=x;return v[d(2286)][d(1514)][d(517)](null,arguments)},G=v._emscripten_bind_Decoder_Decoder_0=function(){const d=x;return v[d(2286)][d(2712)][d(517)](null,arguments)},t0=v[x(3108)]=function(){return v.asm.emscripten_bind_Decoder_GetEncodedGeometryType_1.apply(null,arguments)},Q=v[x(3322)]=function(){const d=x;return v.asm[d(2262)][d(517)](null,arguments)},l0=v[x(491)]=function(){const d=x;return v[d(2286)][d(503)][d(517)](null,arguments)},A0=v[x(3573)]=function(){const d=x;return v.asm[d(2792)][d(517)](null,arguments)},h0=v[x(1958)]=function(){const d=x;return v[d(2286)][d(3797)][d(517)](null,arguments)},m0=v._emscripten_bind_Decoder_GetAttributeIdByMetadataEntry_3=function(){const d=x;return v[d(2286)][d(3514)][d(517)](null,arguments)},B0=v[x(2250)]=function(){const d=x;return v.asm[d(661)][d(517)](null,arguments)},V0=v._emscripten_bind_Decoder_GetAttributeByUniqueId_2=function(){const d=x;return v.asm[d(2169)].apply(null,arguments)},k0=v[x(1173)]=function(){const d=x;return v[d(2286)].emscripten_bind_Decoder_GetMetadata_1[d(517)](null,arguments)},X0=v[x(2849)]=function(){return v[x(2286)].emscripten_bind_Decoder_GetAttributeMetadata_2.apply(null,arguments)},J0=v[x(2820)]=function(){const d=x;return v[d(2286)][d(1142)].apply(null,arguments)},rx=v._emscripten_bind_Decoder_GetTriangleStripsFromMesh_2=function(){return v.asm.emscripten_bind_Decoder_GetTriangleStripsFromMesh_2.apply(null,arguments)},yx=v[x(2419)]=function(){const d=x;return v[d(2286)][d(1122)][d(517)](null,arguments)},xe=v[x(3394)]=function(){const d=x;return v[d(2286)][d(1200)].apply(null,arguments)},re=v[x(1097)]=function(){const d=x;return v[d(2286)][d(4058)][d(517)](null,arguments)},Nx=v[x(3393)]=function(){const d=x;return v[d(2286)][d(916)][d(517)](null,arguments)},Tx=v[x(3983)]=function(){const d=x;return v.asm.emscripten_bind_Decoder_GetAttributeIntForAllPoints_3[d(517)](null,arguments)},oi=v._emscripten_bind_Decoder_GetAttributeInt8ForAllPoints_3=function(){const d=x;return v[d(2286)][d(550)][d(517)](null,arguments)},xn=v[x(1863)]=function(){const d=x;return v[d(2286)][d(2650)][d(517)](null,arguments)},en=v[x(1225)]=function(){const d=x;return v[d(2286)][d(922)][d(517)](null,arguments)},ye=v[x(780)]=function(){const d=x;return v[d(2286)][d(1938)][d(517)](null,arguments)},tn=v[x(2933)]=function(){const d=x;return v.asm[d(568)][d(517)](null,arguments)},G1=v._emscripten_bind_Decoder_GetAttributeUInt32ForAllPoints_3=function(){const d=x;return v[d(2286)].emscripten_bind_Decoder_GetAttributeUInt32ForAllPoints_3[d(517)](null,arguments)},H1=v[x(1227)]=function(){const d=x;return v.asm.emscripten_bind_Decoder_GetAttributeDataArrayForAllPoints_5[d(517)](null,arguments)},z1=v[x(2302)]=function(){const d=x;return v.asm[d(3065)][d(517)](null,arguments)},K1=v[x(1969)]=function(){return v[x(2286)].emscripten_bind_Decoder___destroy___0.apply(null,arguments)},k1=v[x(1220)]=function(){const d=x;return v[d(2286)][d(454)][d(517)](null,arguments)},W1=v[x(3616)]=function(){const d=x;return v[d(2286)].emscripten_bind_Mesh_num_faces_0[d(517)](null,arguments)},X1=v[x(949)]=function(){const d=x;return v[d(2286)].emscripten_bind_Mesh_num_attributes_0[d(517)](null,arguments)},j1=v[x(4086)]=function(){const d=x;return v.asm[d(3037)][d(517)](null,arguments)},q1=v[x(2962)]=function(){const d=x;return v[d(2286)][d(2137)][d(517)](null,arguments)},Y1=v[x(2957)]=function(){const d=x;return v[d(2286)][d(2682)][d(517)](null,arguments)},J1=v[x(2788)]=function(){const d=x;return v[d(2286)][d(1493)][d(517)](null,arguments)},Z1=v[x(1927)]=function(){const d=x;return v.asm[d(1483)].apply(null,arguments)},Q1=v[x(872)]=function(){const d=x;return v[d(2286)][d(1824)][d(517)](null,arguments)},$1=v[x(2581)]=function(){const d=x;return v[d(2286)][d(2534)][d(517)](null,arguments)},xC=v[x(3711)]=function(){const d=x;return v[d(2286)][d(3813)][d(517)](null,arguments)},eC=v._emscripten_bind_Metadata___destroy___0=function(){const d=x;return v.asm[d(2100)][d(517)](null,arguments)},tC=v[x(578)]=function(){const d=x;return v[d(2286)][d(1114)].apply(null,arguments)},iC=v[x(1522)]=function(){const d=x;return v[d(2286)][d(2589)][d(517)](null,arguments)},aC=v[x(2571)]=function(){const d=x;return v[d(2286)][d(1579)][d(517)](null,arguments)},nC=v[x(2718)]=function(){const d=x;return v[d(2286)][d(783)].apply(null,arguments)},rC=v._emscripten_enum_draco_StatusCode_UNSUPPORTED_VERSION=function(){const d=x;return v[d(2286)][d(3642)][d(517)](null,arguments)},oC=v[x(2657)]=function(){const d=x;return v[d(2286)][d(953)].apply(null,arguments)},sC=v[x(527)]=function(){const d=x;return v[d(2286)].emscripten_enum_draco_DataType_DT_INVALID[d(517)](null,arguments)},cC=v[x(4070)]=function(){const d=x;return v[d(2286)][d(1340)][d(517)](null,arguments)},uC=v._emscripten_enum_draco_DataType_DT_UINT8=function(){const d=x;return v[d(2286)].emscripten_enum_draco_DataType_DT_UINT8[d(517)](null,arguments)},lC=v[x(907)]=function(){return v[x(2286)].emscripten_enum_draco_DataType_DT_INT16.apply(null,arguments)},fC=v[x(1319)]=function(){const d=x;return v[d(2286)][d(3996)][d(517)](null,arguments)},dC=v[x(856)]=function(){const d=x;return v.asm[d(2194)].apply(null,arguments)},mC=v[x(2781)]=function(){const d=x;return v[d(2286)][d(2177)][d(517)](null,arguments)},hC=v._emscripten_enum_draco_DataType_DT_INT64=function(){const d=x;return v[d(2286)][d(4016)][d(517)](null,arguments)},CC=v._emscripten_enum_draco_DataType_DT_UINT64=function(){const d=x;return v.asm[d(609)][d(517)](null,arguments)},bC=v._emscripten_enum_draco_DataType_DT_FLOAT32=function(){const d=x;return v.asm.emscripten_enum_draco_DataType_DT_FLOAT32[d(517)](null,arguments)},pC=v[x(2026)]=function(){const d=x;return v[d(2286)].emscripten_enum_draco_DataType_DT_FLOAT64[d(517)](null,arguments)},vC=v[x(1301)]=function(){const d=x;return v.asm[d(2597)][d(517)](null,arguments)},AC=v[x(1166)]=function(){const d=x;return v[d(2286)].emscripten_enum_draco_DataType_DT_TYPES_COUNT[d(517)](null,arguments)},yC=v[x(2127)]=function(){const d=x;return v[d(2286)][d(1221)][d(517)](null,arguments)},_C=v[x(1124)]=function(){const d=x;return v[d(2286)][d(4003)][d(517)](null,arguments)},gC=v[x(1348)]=function(){const d=x;return v[d(2286)][d(626)][d(517)](null,arguments)},TC=v[x(3968)]=function(){const d=x;return v[d(2286)].emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_INVALID_TRANSFORM[d(517)](null,arguments)},BC=v[x(974)]=function(){const d=x;return v[d(2286)][d(1886)].apply(null,arguments)},EC=v._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_QUANTIZATION_TRANSFORM=function(){const d=x;return v[d(2286)][d(967)].apply(null,arguments)},PC=v._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_OCTAHEDRON_TRANSFORM=function(){const d=x;return v[d(2286)][d(735)][d(517)](null,arguments)},wC=v[x(606)]=function(){const d=x;return v[d(2286)][d(829)][d(517)](null,arguments)},SC=v[x(1774)]=function(){return v[x(2286)].emscripten_enum_draco_GeometryAttribute_Type_POSITION.apply(null,arguments)},MC=v[x(3733)]=function(){const d=x;return v[d(2286)][d(2301)][d(517)](null,arguments)},RC=v[x(3969)]=function(){return v[x(2286)].emscripten_enum_draco_GeometryAttribute_Type_COLOR.apply(null,arguments)},DC=v._emscripten_enum_draco_GeometryAttribute_Type_TEX_COORD=function(){const d=x;return v[d(2286)][d(2906)][d(517)](null,arguments)},IC=v[x(1461)]=function(){const d=x;return v.asm[d(3179)][d(517)](null,arguments)};v[x(450)]=function(){const d=x;return v[d(2286)][d(2463)][d(517)](null,arguments)},v[x(3200)]=function(){const d=x;return v[d(2286)][d(2755)].apply(null,arguments)},v[x(2220)]=function(){const d=x;return v[d(2286)][d(3802)][d(517)](null,arguments)};var ji,LC=v[x(1187)]=function(){const d=x;return v[d(2286)][d(1052)][d(517)](null,arguments)};if(v.stackSave=function(){const d=x;return v[d(2286)][d(3769)][d(517)](null,arguments)},v[x(3800)]=function(){return v[x(2286)].stackAlloc.apply(null,arguments)},v[x(3738)]=function(){const d=x;return v[d(2286)].stackRestore[d(517)](null,arguments)},v[x(2134)]=function(){return v.asm.__growWasmMemory.apply(null,arguments)},v[x(2911)]=function(){const d=x;return v.asm[d(2911)][d(517)](null,arguments)},v[x(1853)]=function(){const d=x;return v[d(2286)].dynCall_vi[d(517)](null,arguments)},v[x(1489)]=function(){const d=x;return v.asm[d(1489)][d(517)](null,arguments)},v[x(459)]=function(){const d=x;return v[d(2286)].dynCall_vii[d(517)](null,arguments)},v.dynCall_iiii=function(){const d=x;return v[d(2286)][d(1073)].apply(null,arguments)},v[x(2979)]=function(){const d=x;return v[d(2286)][d(2979)][d(517)](null,arguments)},v[x(2706)]=function(){return v[x(2286)].dynCall_viii.apply(null,arguments)},v[x(2720)]=function(){const d=x;return v.asm[d(2720)][d(517)](null,arguments)},v[x(1432)]=function(){const d=x;return v[d(2286)][d(1432)][d(517)](null,arguments)},v[x(1279)]=function(){const d=x;return v[d(2286)][d(1279)].apply(null,arguments)},v[x(1385)]=function(){const d=x;return v[d(2286)][d(1385)][d(517)](null,arguments)},v[x(4191)]=function(){const d=x;return v[d(2286)][d(4191)].apply(null,arguments)},v[x(1502)]=function(){const d=x;return v[d(2286)][d(1502)][d(517)](null,arguments)},v[x(2286)]=D0,v[x(4167)]=function(d){const D=x;if(ji)d(v);else{var O=v[D(1698)];v[D(1698)]=function(){O&&O(),d(v)}}return v},hx=function d(){ji||C(),ji||(hx=d)},v[x(3722)]=C,v.preInit)for(x(1355)==typeof v[x(2765)]&&(v[x(2765)]=[v[x(2765)]]);0<v.preInit[x(3650)];)v[x(2765)].pop()();C(),p[x(3096)]=Object[x(1693)](p[x(3096)]),p[x(3096)][x(4152)]=p,p[x(3096)].__class__=p,p.__cache__={},v[x(3263)]=p,v[x(4087)]=_,v[x(3554)]=y,v[x(1743)]=function(d,D){return y(d[x(1213)],D)},v[x(1255)]=y(0),v[x(3701)]=function(d){const D=x;if(!d[D(2027)])throw D(1930);d[D(2027)](),delete _(d.__class__)[d[D(1213)]]},v[x(1004)]=function(d,D){return d.ptr===D.ptr},v[x(3739)]=function(d){return d.ptr},v.getClass=function(d){return d[x(2121)]};var px={buffer:0,size:0,pos:0,temps:[],needed:0,prepare:function(){const d=x;if(px.needed){for(var D=0;D<px[d(3910)][d(3650)];D++)v[d(2220)](px.temps[D]);px[d(3910)][d(3650)]=0,v[d(2220)](px[d(4056)]),px[d(4056)]=0,px[d(3523)]+=px[d(1318)],px[d(1318)]=0}px[d(4056)]||(px.size+=128,px[d(4056)]=v[d(1187)](px[d(3523)]),a(px[d(4056)])),px[d(1250)]=0},alloc:function(d,D){const O=x;return a(px.buffer),d=(d=d[O(3650)]*D[O(3955)])+7&-8,px[O(1250)]+d>=px[O(3523)]?(a(0<d),px[O(1318)]+=d,D=v[O(1187)](d),px[O(3910)][O(2583)](D)):(D=px[O(4056)]+px.pos,px.pos+=d),D},copy:function(d,D,O){const i0=x;switch(D[i0(3955)]){case 2:O>>=1;break;case 4:O>>=2;break;case 8:O>>=3}for(var I0=0;I0<d[i0(3650)];I0++)D[O+I0]=d[I0]}};return b[x(3096)]=Object[x(1693)](p[x(3096)]),b[x(3096)][x(4152)]=b,b[x(3096)].__class__=b,b.__cache__={},v[x(815)]=b,b[x(3096)][x(2254)]=b[x(3096)][x(2254)]=function(){return L0(this[x(1213)])},b[x(3096)].ok=b[x(3096)].ok=function(){return!!_x(this.ptr)},b[x(3096)][x(2713)]=b[x(3096)][x(2713)]=function(){return n(R0(this.ptr))},b[x(3096)][x(2027)]=b[x(3096)][x(2027)]=function(){ex(this[x(1213)])},B[x(3096)]=Object[x(1693)](p.prototype),B[x(3096)][x(4152)]=B,B[x(3096)][x(2121)]=B,B[x(4162)]={},v[x(1766)]=B,B[x(3096)].GetValue=B.prototype[x(481)]=function(d){const D=x;var O=this[D(1213)];return d&&D(2408)==typeof d&&(d=d[D(1213)]),_0(O,d)},B[x(3096)][x(3523)]=B.prototype.size=function(){return $2(this.ptr)},B.prototype[x(2027)]=B[x(3096)][x(2027)]=function(){Ax(this[x(1213)])},T[x(3096)]=Object[x(1693)](p.prototype),T[x(3096)][x(4152)]=T,T[x(3096)].__class__=T,T.__cache__={},v.PointCloud=T,T[x(3096)].num_attributes=T[x(3096)][x(1283)]=function(){return l2(this.ptr)},T[x(3096)][x(2697)]=T[x(3096)].num_points=function(){return Et(this.ptr)},T[x(3096)][x(2027)]=T[x(3096)][x(2027)]=function(){bx(this[x(1213)])},M[x(3096)]=Object[x(1693)](p[x(3096)]),M[x(3096)].constructor=M,M.prototype[x(2121)]=M,M.__cache__={},v.DracoUInt8Array=M,M[x(3096)].GetValue=M[x(3096)][x(481)]=function(d){const D=x;var O=this[D(1213)];return d&&D(2408)==typeof d&&(d=d[D(1213)]),Zx(O,d)},M[x(3096)].size=M[x(3096)][x(3523)]=function(){return Ox(this[x(1213)])},M[x(3096)].__destroy__=M[x(3096)][x(2027)]=function(){xt(this[x(1213)])},w[x(3096)]=Object[x(1693)](p[x(3096)]),w[x(3096)][x(4152)]=w,w[x(3096)].__class__=w,w[x(4162)]={},v[x(1806)]=w,w[x(3096)][x(481)]=w[x(3096)].GetValue=function(d){const D=x;var O=this.ptr;return d&&D(2408)==typeof d&&(d=d.ptr),wx(O,d)},w[x(3096)][x(3523)]=w[x(3096)][x(3523)]=function(){return ne(this.ptr)},w[x(3096)][x(2027)]=w[x(3096)][x(2027)]=function(){Be(this[x(1213)])},I.prototype=Object.create(p[x(3096)]),I[x(3096)][x(4152)]=I,I[x(3096)][x(2121)]=I,I.__cache__={},v[x(3258)]=I,I[x(3096)][x(3452)]=I.prototype[x(3452)]=function(d){const D=x;var O=this[D(1213)];return d&&typeof d=="object"&&(d=d[D(1213)]),!!Hx(O,d)},I.prototype[x(3013)]=I[x(3096)][x(3013)]=function(){return Dx(this[x(1213)])},I[x(3096)][x(2027)]=I[x(3096)].__destroy__=function(){Pt(this[x(1213)])},P[x(3096)]=Object[x(1693)](p.prototype),P[x(3096)][x(4152)]=P,P[x(3096)][x(2121)]=P,P[x(4162)]={},v[x(2189)]=P,P[x(3096)][x(3523)]=P.prototype[x(3523)]=function(){return Dr(this[x(1213)])},P[x(3096)][x(3890)]=P[x(3096)][x(3890)]=function(){return y(Ir(this[x(1213)]),V)},P[x(3096)][x(4132)]=P[x(3096)][x(4132)]=function(){return wt(this[x(1213)])},P[x(3096)][x(2960)]=P.prototype[x(2960)]=function(){return Lr(this[x(1213)])},P[x(3096)][x(3032)]=P.prototype.num_components=function(){return ei(this[x(1213)])},P.prototype[x(574)]=P[x(3096)][x(574)]=function(){return!!Fr(this[x(1213)])},P[x(3096)][x(865)]=P[x(3096)][x(865)]=function(){return x2(this[x(1213)])},P[x(3096)][x(3181)]=P[x(3096)][x(3181)]=function(){return Xa(this[x(1213)])},P[x(3096)][x(3614)]=P[x(3096)].unique_id=function(){return Or(this[x(1213)])},P[x(3096)].__destroy__=P.prototype[x(2027)]=function(){Ee(this[x(1213)])},V[x(3096)]=Object[x(1693)](p.prototype),V[x(3096)][x(4152)]=V,V[x(3096)][x(2121)]=V,V[x(4162)]={},v[x(2315)]=V,V[x(3096)][x(2098)]=V.prototype[x(2098)]=function(){return qa(this[x(1213)])},V.prototype[x(2027)]=V[x(3096)][x(2027)]=function(){ti(this[x(1213)])},q[x(3096)]=Object[x(1693)](p[x(3096)]),q[x(3096)][x(4152)]=q,q.prototype[x(2121)]=q,q[x(4162)]={},v[x(641)]=q,q[x(3096)][x(3452)]=q[x(3096)].InitFromAttribute=function(d){const D=x;var O=this[D(1213)];return d&&D(2408)==typeof d&&(d=d.ptr),!!Ya(O,d)},q[x(3096)].quantization_bits=q.prototype[x(3013)]=function(){return Ja(this.ptr)},q[x(3096)][x(3326)]=q[x(3096)][x(3326)]=function(d){const D=x;var O=this[D(1213)];return d&&D(2408)==typeof d&&(d=d.ptr),zi(O,d)},q[x(3096)][x(3666)]=q[x(3096)][x(3666)]=function(){return de(this.ptr)},q[x(3096)].__destroy__=q[x(3096)][x(2027)]=function(){Ki(this[x(1213)])},X.prototype=Object[x(1693)](p[x(3096)]),X[x(3096)].constructor=X,X[x(3096)].__class__=X,X[x(4162)]={},v[x(3581)]=X,X[x(3096)][x(481)]=X[x(3096)][x(481)]=function(d){const D=x;var O=this[D(1213)];return d&&typeof d=="object"&&(d=d[D(1213)]),Vr(O,d)},X[x(3096)].size=X[x(3096)][x(3523)]=function(){return e2(this.ptr)},X[x(3096)][x(2027)]=X[x(3096)][x(2027)]=function(){Ur(this[x(1213)])},H.prototype=Object[x(1693)](p[x(3096)]),H[x(3096)][x(4152)]=H,H[x(3096)].__class__=H,H[x(4162)]={},v[x(2568)]=H,H[x(3096)][x(2827)]=H.prototype[x(2827)]=function(d,D){const O=x;var i0=this[O(1213)];return px[O(704)](),d&&O(2408)==typeof d&&(d=d[O(1213)]),D=D&&O(2408)==typeof D?D[O(1213)]:A(D),!!et(i0,d,D)},H.prototype[x(3639)]=H[x(3096)].GetIntEntry=function(d,D){const O=x;var i0=this.ptr;return px[O(704)](),d&&O(2408)==typeof d&&(d=d.ptr),D=D&&typeof D=="object"?D.ptr:A(D),Gr(i0,d,D)},H.prototype[x(3892)]=H[x(3096)].GetIntEntryArray=function(d,D,O){const i0=x;var I0=this[i0(1213)];px.prepare(),d&&i0(2408)==typeof d&&(d=d[i0(1213)]),D=D&&i0(2408)==typeof D?D.ptr:A(D),O&&i0(2408)==typeof O&&(O=O[i0(1213)]),Hr(I0,d,D,O)},H[x(3096)][x(1723)]=H[x(3096)][x(1723)]=function(d,D){const O=x;var i0=this.ptr;return px[O(704)](),d&&O(2408)==typeof d&&(d=d.ptr),D=D&&O(2408)==typeof D?D.ptr:A(D),St(i0,d,D)},H[x(3096)][x(2995)]=H[x(3096)].GetStringEntry=function(d,D){const O=x;var i0=this.ptr;return px.prepare(),d&&O(2408)==typeof d&&(d=d[O(1213)]),D=D&&O(2408)==typeof D?D.ptr:A(D),n(zr(i0,d,D))},H[x(3096)].NumEntries=H[x(3096)][x(3460)]=function(d){const D=x;var O=this.ptr;return d&&D(2408)==typeof d&&(d=d.ptr),ai(O,d)},H[x(3096)][x(997)]=H[x(3096)][x(997)]=function(d,D){const O=x;var i0=this.ptr;return d&&O(2408)==typeof d&&(d=d[O(1213)]),D&&O(2408)==typeof D&&(D=D[O(1213)]),n(ki(i0,d,D))},H[x(3096)].__destroy__=H[x(3096)][x(2027)]=function(){Za(this[x(1213)])},z[x(3096)]=Object.create(p[x(3096)]),z.prototype[x(4152)]=z,z.prototype[x(2121)]=z,z[x(4162)]={},v[x(1460)]=z,z.prototype[x(481)]=z[x(3096)][x(481)]=function(d){const D=x;var O=this[D(1213)];return d&&D(2408)==typeof d&&(d=d[D(1213)]),Kr(O,d)},z[x(3096)].size=z[x(3096)][x(3523)]=function(){return ni(this[x(1213)])},z[x(3096)][x(2027)]=z.prototype[x(2027)]=function(){kr(this[x(1213)])},u0.prototype=Object[x(1693)](p[x(3096)]),u0[x(3096)][x(4152)]=u0,u0[x(3096)].__class__=u0,u0[x(4162)]={},v[x(3455)]=u0,u0[x(3096)].GetValue=u0[x(3096)][x(481)]=function(d){const D=x;var O=this.ptr;return d&&D(2408)==typeof d&&(d=d[D(1213)]),Wi(O,d)},u0[x(3096)][x(3523)]=u0.prototype[x(3523)]=function(){return t2(this[x(1213)])},u0.prototype[x(2027)]=u0[x(3096)][x(2027)]=function(){$a(this.ptr)},n0[x(3096)]=Object[x(1693)](p[x(3096)]),n0.prototype[x(4152)]=n0,n0[x(3096)].__class__=n0,n0[x(4162)]={},v[x(1394)]=n0,n0[x(3096)].__destroy__=n0[x(3096)][x(2027)]=function(){Xi(this.ptr)},N[x(3096)]=Object.create(p[x(3096)]),N[x(3096)][x(4152)]=N,N[x(3096)][x(2121)]=N,N[x(4162)]={},v[x(2186)]=N,N[x(3096)][x(663)]=N.prototype[x(663)]=function(d,D){const O=x;var i0=this[O(1213)];if(px[O(704)](),O(2408)==typeof d&&O(2408)==typeof d){var I0=px[O(620)](d,r0);px[O(3748)](d,r0,I0),d=I0}D&&O(2408)==typeof D&&(D=D[O(1213)]),g(i0,d,D)},N.prototype[x(2027)]=N[x(3096)].__destroy__=function(){R(this[x(1213)])},Y.prototype=Object[x(1693)](p[x(3096)]),Y[x(3096)].constructor=Y,Y.prototype.__class__=Y,Y[x(4162)]={},v[x(702)]=Y,Y[x(3096)][x(3719)]=Y.prototype.GetEncodedGeometryType=function(d){const D=x;var O=this[D(1213)];return d&&D(2408)==typeof d&&(d=d[D(1213)]),t0(O,d)},Y[x(3096)].DecodeBufferToPointCloud=Y[x(3096)][x(991)]=function(d,D){const O=x;var i0=this[O(1213)];return d&&O(2408)==typeof d&&(d=d.ptr),D&&O(2408)==typeof D&&(D=D[O(1213)]),y(Q(i0,d,D),b)},Y[x(3096)][x(1780)]=Y.prototype[x(1780)]=function(d,D){const O=x;var i0=this[O(1213)];return d&&O(2408)==typeof d&&(d=d[O(1213)]),D&&O(2408)==typeof D&&(D=D[O(1213)]),y(l0(i0,d,D),b)},Y[x(3096)].GetAttributeId=Y[x(3096)][x(1499)]=function(d,D){const O=x;var i0=this[O(1213)];return d&&O(2408)==typeof d&&(d=d[O(1213)]),D&&O(2408)==typeof D&&(D=D[O(1213)]),A0(i0,d,D)},Y.prototype.GetAttributeIdByName=Y[x(3096)][x(2280)]=function(d,D){const O=x;var i0=this[O(1213)];return px.prepare(),d&&O(2408)==typeof d&&(d=d[O(1213)]),D=D&&O(2408)==typeof D?D[O(1213)]:A(D),h0(i0,d,D)},Y[x(3096)][x(958)]=Y[x(3096)][x(958)]=function(d,D,O){const i0=x;var I0=this[i0(1213)];return px[i0(704)](),d&&i0(2408)==typeof d&&(d=d[i0(1213)]),D=D&&i0(2408)==typeof D?D[i0(1213)]:A(D),O=O&&i0(2408)==typeof O?O[i0(1213)]:A(O),m0(I0,d,D,O)},Y[x(3096)].GetAttribute=Y[x(3096)][x(3052)]=function(d,D){const O=x;var i0=this[O(1213)];return d&&O(2408)==typeof d&&(d=d[O(1213)]),D&&O(2408)==typeof D&&(D=D[O(1213)]),y(B0(i0,d,D),P)},Y[x(3096)][x(2831)]=Y[x(3096)][x(2831)]=function(d,D){const O=x;var i0=this[O(1213)];return d&&typeof d=="object"&&(d=d[O(1213)]),D&&O(2408)==typeof D&&(D=D[O(1213)]),y(V0(i0,d,D),P)},Y[x(3096)][x(1701)]=Y[x(3096)][x(1701)]=function(d){const D=x;var O=this[D(1213)];return d&&D(2408)==typeof d&&(d=d[D(1213)]),y(k0(O,d),f0)},Y[x(3096)][x(747)]=Y[x(3096)][x(747)]=function(d,D){const O=x;var i0=this[O(1213)];return d&&O(2408)==typeof d&&(d=d[O(1213)]),D&&O(2408)==typeof D&&(D=D[O(1213)]),y(X0(i0,d,D),f0)},Y.prototype.GetFaceFromMesh=Y[x(3096)].GetFaceFromMesh=function(d,D,O){const i0=x;var I0=this.ptr;return d&&i0(2408)==typeof d&&(d=d.ptr),D&&i0(2408)==typeof D&&(D=D[i0(1213)]),O&&typeof O=="object"&&(O=O[i0(1213)]),!!J0(I0,d,D,O)},Y[x(3096)].GetTriangleStripsFromMesh=Y.prototype[x(1387)]=function(d,D){const O=x;var i0=this[O(1213)];return d&&O(2408)==typeof d&&(d=d[O(1213)]),D&&O(2408)==typeof D&&(D=D[O(1213)]),rx(i0,d,D)},Y[x(3096)][x(898)]=Y[x(3096)][x(898)]=function(d,D,O){const i0=x;var I0=this[i0(1213)];return d&&i0(2408)==typeof d&&(d=d[i0(1213)]),D&&i0(2408)==typeof D&&(D=D[i0(1213)]),O&&i0(2408)==typeof O&&(O=O[i0(1213)]),!!yx(I0,d,D,O)},Y[x(3096)][x(1328)]=Y[x(3096)][x(1328)]=function(d,D,O){const i0=x;var I0=this.ptr;return d&&i0(2408)==typeof d&&(d=d[i0(1213)]),D&&i0(2408)==typeof D&&(D=D[i0(1213)]),O&&typeof O=="object"&&(O=O[i0(1213)]),!!xe(I0,d,D,O)},Y[x(3096)][x(3406)]=Y[x(3096)][x(3406)]=function(d,D,O){const i0=x;var I0=this[i0(1213)];return d&&typeof d=="object"&&(d=d.ptr),D&&i0(2408)==typeof D&&(D=D.ptr),O&&typeof O=="object"&&(O=O.ptr),!!re(I0,d,D,O)},Y.prototype[x(3935)]=Y[x(3096)][x(3935)]=function(d,D,O){const i0=x;var I0=this[i0(1213)];return d&&i0(2408)==typeof d&&(d=d[i0(1213)]),D&&i0(2408)==typeof D&&(D=D[i0(1213)]),O&&typeof O=="object"&&(O=O.ptr),!!Nx(I0,d,D,O)},Y[x(3096)][x(2934)]=Y[x(3096)][x(2934)]=function(d,D,O){const i0=x;var I0=this[i0(1213)];return d&&typeof d=="object"&&(d=d[i0(1213)]),D&&typeof D=="object"&&(D=D.ptr),O&&i0(2408)==typeof O&&(O=O.ptr),!!Tx(I0,d,D,O)},Y.prototype[x(2488)]=Y[x(3096)][x(2488)]=function(d,D,O){const i0=x;var I0=this[i0(1213)];return d&&i0(2408)==typeof d&&(d=d[i0(1213)]),D&&i0(2408)==typeof D&&(D=D[i0(1213)]),O&&typeof O=="object"&&(O=O[i0(1213)]),!!oi(I0,d,D,O)},Y[x(3096)][x(1409)]=Y[x(3096)][x(1409)]=function(d,D,O){const i0=x;var I0=this[i0(1213)];return d&&typeof d=="object"&&(d=d.ptr),D&&typeof D=="object"&&(D=D.ptr),O&&i0(2408)==typeof O&&(O=O[i0(1213)]),!!xn(I0,d,D,O)},Y[x(3096)].GetAttributeInt16ForAllPoints=Y[x(3096)][x(4118)]=function(d,D,O){const i0=x;var I0=this[i0(1213)];return d&&i0(2408)==typeof d&&(d=d.ptr),D&&i0(2408)==typeof D&&(D=D[i0(1213)]),O&&i0(2408)==typeof O&&(O=O.ptr),!!en(I0,d,D,O)},Y[x(3096)][x(2644)]=Y[x(3096)][x(2644)]=function(d,D,O){const i0=x;var I0=this[i0(1213)];return d&&i0(2408)==typeof d&&(d=d.ptr),D&&i0(2408)==typeof D&&(D=D.ptr),O&&i0(2408)==typeof O&&(O=O.ptr),!!ye(I0,d,D,O)},Y.prototype[x(2230)]=Y[x(3096)][x(2230)]=function(d,D,O){const i0=x;var I0=this[i0(1213)];return d&&typeof d=="object"&&(d=d.ptr),D&&i0(2408)==typeof D&&(D=D[i0(1213)]),O&&i0(2408)==typeof O&&(O=O[i0(1213)]),!!tn(I0,d,D,O)},Y[x(3096)][x(3513)]=Y.prototype[x(3513)]=function(d,D,O){const i0=x;var I0=this[i0(1213)];return d&&i0(2408)==typeof d&&(d=d.ptr),D&&i0(2408)==typeof D&&(D=D[i0(1213)]),O&&i0(2408)==typeof O&&(O=O[i0(1213)]),!!G1(I0,d,D,O)},Y.prototype.GetAttributeDataArrayForAllPoints=Y[x(3096)][x(717)]=function(d,D,O,i0,I0){const Q0=x;var ox=this[Q0(1213)];return d&&Q0(2408)==typeof d&&(d=d[Q0(1213)]),D&&Q0(2408)==typeof D&&(D=D[Q0(1213)]),O&&typeof O=="object"&&(O=O.ptr),i0&&Q0(2408)==typeof i0&&(i0=i0[Q0(1213)]),I0&&typeof I0=="object"&&(I0=I0[Q0(1213)]),!!H1(ox,d,D,O,i0,I0)},Y.prototype.SkipAttributeTransform=Y[x(3096)][x(2324)]=function(d){const D=x;var O=this[D(1213)];d&&D(2408)==typeof d&&(d=d[D(1213)]),z1(O,d)},Y[x(3096)][x(2027)]=Y[x(3096)][x(2027)]=function(){K1(this[x(1213)])},W[x(3096)]=Object[x(1693)](p[x(3096)]),W.prototype[x(4152)]=W,W.prototype[x(2121)]=W,W[x(4162)]={},v.Mesh=W,W[x(3096)][x(2404)]=W[x(3096)][x(2404)]=function(){return W1(this[x(1213)])},W.prototype[x(1283)]=W[x(3096)].num_attributes=function(){return X1(this[x(1213)])},W[x(3096)][x(2697)]=W[x(3096)][x(2697)]=function(){return j1(this.ptr)},W[x(3096)][x(2027)]=W[x(3096)][x(2027)]=function(){q1(this[x(1213)])},x0[x(3096)]=Object[x(1693)](p[x(3096)]),x0[x(3096)][x(4152)]=x0,x0[x(3096)][x(2121)]=x0,x0.__cache__={},v[x(995)]=x0,x0[x(3096)][x(2027)]=x0[x(3096)].__destroy__=function(){Y1(this[x(1213)])},y0[x(3096)]=Object[x(1693)](p[x(3096)]),y0[x(3096)].constructor=y0,y0[x(3096)][x(2121)]=y0,y0[x(4162)]={},v[x(3849)]=y0,y0[x(3096)][x(481)]=y0.prototype.GetValue=function(d){const D=x;var O=this.ptr;return d&&D(2408)==typeof d&&(d=d[D(1213)]),Z1(O,d)},y0[x(3096)][x(3523)]=y0[x(3096)][x(3523)]=function(){return Q1(this.ptr)},y0[x(3096)][x(2027)]=y0[x(3096)].__destroy__=function(){$1(this[x(1213)])},f0[x(3096)]=Object[x(1693)](p.prototype),f0[x(3096)].constructor=f0,f0[x(3096)][x(2121)]=f0,f0[x(4162)]={},v[x(2926)]=f0,f0[x(3096)].__destroy__=f0.prototype.__destroy__=function(){eC(this[x(1213)])},function(){const d=x;function D(){const O=C0;v.OK=tC(),v[O(3774)]=iC(),v[O(2809)]=aC(),v.INVALID_PARAMETER=nC(),v[O(2523)]=rC(),v[O(3755)]=oC(),v.DT_INVALID=sC(),v[O(3319)]=cC(),v.DT_UINT8=uC(),v[O(558)]=lC(),v[O(4075)]=fC(),v[O(3366)]=dC(),v[O(1784)]=mC(),v[O(1817)]=hC(),v[O(2006)]=CC(),v[O(2269)]=bC(),v[O(1217)]=pC(),v[O(3913)]=vC(),v[O(2119)]=AC(),v[O(1572)]=yC(),v[O(4043)]=_C(),v[O(971)]=gC(),v[O(3115)]=TC(),v[O(1630)]=BC(),v[O(1147)]=EC(),v[O(2877)]=PC(),v[O(1487)]=wC(),v[O(897)]=SC(),v[O(1127)]=MC(),v.COLOR=RC(),v[O(2660)]=DC(),v[O(1856)]=IC()}N0?D():z0[d(3355)](D)}(),x(1355)==typeof v.onModuleParsed&&v[x(608)](),e}Lx[o(2758)]=function(e,x){const t=o;let a,r=e[t(3257)][t(1303)],n=e[t(666)][r],s=n.componentsPerAttribute,u=new Float32Array(n.typedArray[t(4056)],n[t(1737)][t(2471)],n[t(1737)][t(3818)]/4);a=x[t(2202)]===0?new Uint16Array(x.indicesTypedArray[t(4056)],x.indicesTypedArray[t(2471)],x[t(3296)][t(3818)]/2):new Uint32Array(x[t(3296)][t(4056)],x[t(3296)][t(2471)],x.indicesTypedArray.byteLength/4);let c=[],f=[],l=a[t(3650)],m=0;for(let _=0,y=4*Math[t(3720)](l/4);_<y;_+=4){let A=a[_],b=a[_+1],B=a[_+2],T=a[_+3];if(Gx.x=u[s*A],Gx.y=u[s*A+1],Gx.z=u[s*A+2],te.x=u[s*b],te.y=u[s*b+1],te.z=u[s*b+2],st.x=u[s*B],st.y=u[s*B+1],st.z=u[s*B+2],Ot.x=u[s*T],Ot.y=u[s*T+1],Ot.z=u[s*T+2],!(Cesium[t(516)][t(4168)](te,st)||Cesium[t(516)][t(4168)](te,Ot)||Cesium[t(516)].equals(te,Gx)||Cesium.Cartesian3[t(4168)](st,Gx)||Cesium.Cartesian3.equals(Ot,Gx))){if(B===T){if(Cesium[t(516)][t(758)](te,Gx,jx),Cesium[t(516)].subtract(st,Gx,ha),Cesium[t(516)][t(2550)](jx,ha,jx),Cesium[t(516)][t(4168)](jx,Cesium[t(516)][t(535)]))continue;Cesium[t(516)][t(1586)](jx,jx),c[t(2583)](Gx.x),c[t(2583)](Gx.y),c[t(2583)](Gx.z),c.push(te.x),c[t(2583)](te.y),c[t(2583)](te.z),c[t(2583)](jx.x),c.push(jx.y),c[t(2583)](jx.z)}else{if(Cesium[t(516)][t(758)](te,Gx,jx),Cesium[t(516)][t(758)](st,Gx,ha),Cesium[t(516)][t(2550)](jx,ha,jx),Cesium.Cartesian3[t(4168)](jx,Cesium[t(516)][t(535)])||(Cesium.Cartesian3[t(1586)](jx,jx),Cesium[t(516)][t(758)](te,Gx,C2),Cesium[t(516)][t(758)](Ot,Gx,Jo),Cesium[t(516)][t(2550)](C2,Jo,C2),Cesium[t(516)][t(4168)](C2,Cesium.Cartesian3[t(535)])))continue;Cesium[t(516)].normalize(C2,C2),f[t(2583)](Gx.x),f[t(2583)](Gx.y),f[t(2583)](Gx.z),f[t(2583)](te.x),f.push(te.y),f[t(2583)](te.z),f[t(2583)](jx.x),f[t(2583)](jx.y),f[t(2583)](jx.z),f.push(C2.x),f[t(2583)](C2.y),f[t(2583)](C2.z)}m+=Cesium[t(516)].distance(Gx,te)}}let h=m/(l/4),C=c.length/Lx.RegularInstanceStride,p=f[t(3650)]/12;return{regular:{instancesData:new Float32Array(c),instanceCount:C,edgeLength:C*h},silhouette:{instancesData:new Float32Array(f),instanceCount:p,edgeLength:p},averageEdgeLength:h}};const b2=Cesium.defined;Cesium[o(820)];const uf=Cesium.Cartesian2,Xn=Cesium[o(2756)],Ca=Cesium[o(549)],jn=Cesium.IndexDatatype,lf=Cesium[o(1970)],qn=Cesium[o(1295)],Ci=Cesium[o(1431)],qx=Cesium[o(516)],V2=Cesium[o(2235)],ff=Cesium[o(2024)];function ce(){}var Cx;function df(e,x){const t=o;for(var a=e.num_points(),r=e.num_faces(),n=new Cx[t(3849)],s=3*r,u=jn.createTypedArray(a,s),c=0,f=0;f<r;++f)x[t(3621)](e,f,n),u[c+0]=n[t(481)](0),u[c+1]=n[t(481)](1),u[c+2]=n.GetValue(2),c+=3;var l=jn[t(3884)];return u instanceof Uint32Array&&(l=jn[t(2118)]),Cx[t(3701)](n),{typedArray:u,numberOfIndices:s,indexDataType:l}}function mf(e,x,t,a,r){const n=o;var s,u;a[n(3620)]<=8?(u=new Cx[n(3482)],s=new Uint8Array(r),x.GetAttributeUInt8ForAllPoints(e,t,u)):(u=new Cx[n(1766)],s=new Uint16Array(r),x[n(2644)](e,t,u));for(var c=0;c<r;++c)s[c]=u.GetValue(c);return Cx[n(3701)](u),s}function hf(e,x,t,a){const r=o;var n,s;switch(t[r(2960)]()){case 1:case 11:s=new Cx.DracoInt8Array,n=new Int8Array(a),x[r(2488)](e,t,s);break;case 2:s=new Cx[r(3482)],n=new Uint8Array(a),x[r(1409)](e,t,s);break;case 3:s=new Cx[r(1460)],n=new Int16Array(a),x[r(4118)](e,t,s);break;case 4:s=new Cx[r(1766)],n=new Uint16Array(a),x.GetAttributeUInt16ForAllPoints(e,t,s);break;case 5:case 7:s=new Cx.DracoInt32Array,n=new Int32Array(a),x[r(2230)](e,t,s);break;case 6:case 8:s=new Cx.DracoUInt32Array,n=new Uint32Array(a),x[r(3513)](e,t,s);break;case 9:case 10:s=new Cx[r(3455)],n=new Float32Array(a),x[r(3935)](e,t,s)}for(var u=0;u<a;++u)n[u]=s.GetValue(u);return Cx[r(3701)](s),n}function bi(e,x,t){const a=o;var r,n=e[a(2697)](),s=t[a(3032)](),u=new Cx[a(641)];if(u[a(3452)](t)){for(var c=new Array(s),f=0;f<s;++f)c[f]=u.min_value(f);r={quantizationBits:u[a(3013)](),minValues:c,range:u[a(3666)](),octEncoded:!1}}Cx[a(3701)](u),(u=new Cx[a(3258)])[a(3452)](t)&&(r={quantizationBits:u[a(3013)](),octEncoded:!0}),Cx[a(3701)](u);var l,m=n*s;l=b2(r)?mf(e,x,t,r,m):hf(e,x,t,m);var h=Ca[a(720)](l);return{array:l,data:{componentsPerAttribute:s,componentDatatype:h,byteOffset:t[a(3181)](),byteStride:Ca.getSizeInBytes(h)*s,normalized:t.normalized(),quantization:r}}}ce[o(731)]=!1,ce.draco=void 0,ce.loading=!1,ce.init=function(){const e=o;ce[e(4071)]||(Cesium[e(1702)][e(1823)]({url:Qx("ThirdParty/draco_decoder_new.wasm")})[e(4167)](function(x){const t=e;cf({wasmBinary:x})[t(4167)](function(a){const r=t;Cx=a,ce[r(509)]=Cx,ce[r(731)]=!0})}),ce.loading=!0)};var Cf=new qx(40680631590769,40680631590769,40408299984661445e-3),Ie=new qx,Nt=new qx;function bf(e,x,t,a){const r=o;var n=Math[r(1777)](x);Ie.x=n*Math.cos(e),Ie.y=n*Math[r(4186)](e),Ie.z=Math[r(4186)](x),Ie=qx[r(1586)](Ie,Ie),qx[r(3016)](Cf,Ie,Nt);var s=Math.sqrt(qx[r(2528)](Ie,Nt));return Nt=qx[r(2776)](Nt,s,Nt),Ie=qx[r(1582)](Ie,t,Ie),b2(a)||(a=new qx),qx.add(Nt,Ie,a)}var pf=new V2,vf=new V2,Yn=new qx,Af=new Ci;function Zo(e,x,t,a,r,n,s,u){const c=o;var f=void 0,l=void 0,m=void 0,h=void 0,C=t[c(666)],p=t[c(3257)];if(t[c(2326)]=0,b2(a[c(853)])&&a[c(853)]>=0){b2(u)||(t[c(2326)]|=cx[c(3515)]);var _=x.GetAttribute(e,a[c(853)]),y=bi(e,x,_),A=y[c(1426)][c(1776)];t[c(4041)]=y.array[c(3650)]/A,t.vertCompressConstant=y[c(1426)][c(703)][c(3666)]/(1<<y.data[c(703)][c(3620)]);var b=y[c(1426)][c(703)][c(2451)];t[c(3160)]=new Xn(b[0],b[1],b[2],1),A>3&&(t[c(3160)].w=b[3]);var B=t[c(4041)];if(n&&(f=new Ci,l=new Ci,m=new Float32Array(2*B),h=new Float64Array(2*B)),b2(u)){var T=y.array,M=A===3?qx.unpackArray(T):Xn[c(3628)](T);for(let w0=0,U0=M[c(3650)];w0<U0;w0++){let xx=M[w0];qx[c(1582)](xx,t[c(1341)],xx),qx[c(1050)](xx,t[c(3160)],xx)}var w=V2[c(3640)](u[c(1358)],u[c(3248)],pf),I=V2[c(3640)](u[c(2123)],u[c(3248)],vf);V2[c(1201)](I,I);var P=new ff(6378137,6378137,6378137);for(let w0=0,U0=M[c(3650)];w0<U0;w0++){let xx=M[w0];V2.multiplyByPoint(w,xx,Yn);let W0=P[c(3563)](Yn,Af);n&&(h[2*w0]=W0[c(1454)],h[2*w0+1]=W0.latitude,w0===0?(f.longitude=W0.longitude,f.latitude=W0[c(1738)],l[c(1454)]=W0[c(1454)],l[c(1738)]=W0[c(1738)]):(f[c(1454)]=Math.max(W0[c(1454)],f[c(1454)]),f.latitude=Math[c(2092)](W0.latitude,f[c(1738)]),l[c(1454)]=Math[c(1803)](W0[c(1454)],l.longitude),l.latitude=Math[c(1803)](W0[c(1738)],l.latitude)));let j0=bf(W0[c(1454)],W0[c(1738)],W0[c(2388)],Yn);V2[c(1013)](I,j0,xx)}var V=new Array(3*M[c(3650)]);A===3?qx[c(1910)](M,V):Xn.packArray(M,V),y[c(1024)]=new Float32Array(V),y[c(1426)][c(2537)]=Ca[c(3148)],y[c(1426)][c(2762)]=4*A}if(p.aPosition=C[c(3650)],C[c(2583)]({index:p[c(1303)],typedArray:y[c(1024)],componentsPerAttribute:A,componentDatatype:y[c(1426)].componentDatatype,offsetInBytes:y[c(1426)][c(2471)],strideInBytes:y.data[c(2762)],normalize:y[c(1426)][c(574)]}),!b2(u)&&n)for(var q=new qx,X=new qx,H=new Ci,z=0;z<B;z++)V2.multiplyByPoint(r,qx[c(511)](y.array[3*z]*t[c(1341)]+b[0],y[c(1024)][3*z+1]*t.vertCompressConstant+b[1],y[c(1024)][3*z+2]*t[c(1341)]+b[2],q),X),H=Ci[c(3993)](X),h[2*z]=H[c(1454)],h[2*z+1]=H[c(1738)],z===0?(f[c(1454)]=H[c(1454)],f[c(1738)]=H[c(1738)],l[c(1454)]=H[c(1454)],l[c(1738)]=H[c(1738)]):(f.longitude=Math[c(2092)](H.longitude,f[c(1454)]),f[c(1738)]=Math.max(H[c(1738)],f[c(1738)]),l[c(1454)]=Math.min(H[c(1454)],l.longitude),l.latitude=Math.min(H.latitude,l[c(1738)]));if(n){for(z=0;z<B;z++)m[2*z]=h[2*z]-l.longitude,m[2*z+1]=h[2*z+1]-l.latitude;p[c(2320)]=C[c(3650)],C[c(2583)]({index:p[c(2320)],typedArray:m,componentsPerAttribute:2,componentDatatype:Ca[c(3148)],offsetInBytes:0,strideInBytes:2*Float32Array[c(3955)],normalize:!1}),s[c(2092)]=f,s[c(1803)]=l}}if(b2(a[c(2871)])&&a.normalUniqueID>=0){t[c(2326)]|=cx.SVC_Normal;var u0=x.GetAttribute(e,a.normalUniqueID),n0=bi(e,x,u0),N=n0[c(1426)][c(703)];t.normalRangeConstant=(1<<N.quantizationBits)-1,p.aNormal=C[c(3650)],C[c(2583)]({index:p[c(782)],typedArray:n0[c(1024)],componentsPerAttribute:n0[c(1426)][c(1776)],componentDatatype:n0.data[c(2537)],offsetInBytes:n0[c(1426)][c(2471)],strideInBytes:n0.data[c(2762)],normalize:n0[c(1426)][c(574)]})}if(b2(a[c(2846)])&&a[c(2846)]>=0){t[c(2326)]|=cx[c(1014)];var Y=x.GetAttribute(e,a[c(2846)]),W=bi(e,x,Y);p[c(3299)]=C[c(3650)],C[c(2583)]({index:p[c(3299)],typedArray:W.array,componentsPerAttribute:W.data[c(1776)],componentDatatype:W[c(1426)][c(2537)],offsetInBytes:W.data[c(2471)],strideInBytes:W[c(1426)][c(2762)],normalize:W.data.normalized})}for(z=0;z<a[c(1245)][c(3650)];z++){t[c(2222)]=[],t.minTexCoordValue=[];var x0=a[c(1245)][z];if(!(x0<0)){var y0=x[c(3052)](e,x0),f0=bi(e,x,y0);b2(f0.data[c(703)])&&(t[c(2326)]|=cx[c(753)],t[c(2222)].push(f0.data[c(703)][c(3666)]/(1<<f0[c(1426)].quantization.quantizationBits)),b=f0[c(1426)][c(703)][c(2451)],t[c(3582)][c(2583)](new uf(b[0],b[1])));var v=c(656)+z;p[v]=C.length,C.push({index:p[v],typedArray:f0[c(1024)],componentsPerAttribute:f0[c(1426)].componentsPerAttribute,componentDatatype:f0[c(1426)][c(2537)],offsetInBytes:f0[c(1426)][c(2471)],strideInBytes:f0[c(1426)][c(2762)],normalize:f0[c(1426)].normalized}),t[c(3103)]=!0}}for(z=0;z<a.vertexAttrUniqueIDs[c(3650)];z++){var T0=a[c(548)][z];if(!(T0<0)){var F0=x[c(3052)](e,T0),O0=bi(e,x,F0);p.aVertexWeight=C[c(3650)],C[c(2583)]({index:p.aVertexWeight,typedArray:O0.array,componentsPerAttribute:O0.data.componentsPerAttribute,componentDatatype:O0.data[c(2537)],offsetInBytes:O0[c(1426)].byteOffset,strideInBytes:O0[c(1426)].byteStride,normalize:O0[c(1426)][c(574)]}),t[c(825)]={VertexWeight:0}}}}ce.dracoDecodePointCloud=function(e,x,t,a){const r=o;for(var n=new Cx.Decoder,s=[r(897),r(1127),r(528)],u=0;u<s.length;++u)n.SkipAttributeTransform(Cx[s[u]]);var c=new Cx[r(2186)];if(c[r(663)](e,x),n[r(3719)](c)!==Cx[r(4043)])throw new qn("Draco geometry type must be POINT_CLOUD.");var f=new Cx[r(3645)],l=n[r(991)](c,f);if(!l.ok()||f.ptr===0)throw new qn("Error decoding draco point cloud: "+l[r(2713)]());Cx[r(3701)](c),Zo(f,n,t,a),Cx[r(3701)](f),Cx[r(3701)](n)},ce.dracoDecodeMesh=function(e,x,t,a,r,n,s,u,c){const f=o;for(var l=new Cx.Decoder,m=[f(897),"NORMAL",f(528),"TEX_COORD"],h=0;h<m[f(3650)];++h)l.SkipAttributeTransform(Cx[m[h]]);var C=new Cx[f(2186)];if(C[f(663)](e,x),l.GetEncodedGeometryType(C)!==Cx.TRIANGULAR_MESH)throw new qn(f(573));var p=new Cx[f(1518)];if(!l[f(1780)](C,p).ok()||p[f(1213)]===0)return!1;Cx[f(3701)](C),Zo(p,l,t,r,n,s,u,c);var _=df(p,l);a[f(3296)]=_[f(1737)],a[f(1520)]=_[f(2708)],a.indexType=_.indexDataType,a[f(2391)]=lf.TRIANGLES,Cx[f(3701)](p),Cx[f(3701)](l)};var Sx=Object.freeze({AttributeType_Invalid:0,AttributeType_Position:1,AttributeType_PositionW:2,AttributeType_Normal:4,AttributeType_Tangent:8,AttributeType_FirstTexcoord:16,AttributeType_SecondTexcoord:32,AttributeType_Color:64,AttributeType_SecondColor:128,AttributeType_Custom0:512,AttributeType_Custom1:1024}),Jn=function(){const e=o;var x=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),t=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var a,r=e(3810);WebAssembly[e(2998)](x)&&(r=e(3929));var n=WebAssembly[e(2909)](function(f){const l=e;for(var m=new Uint8Array(f[l(3650)]),h=0;h<f[l(3650)];++h){var C=f[l(3128)](h);m[h]=C>96?C-71:C>64?C-65:C>47?C+4:C>46?63:62}var p=0;for(h=0;h<f[l(3650)];++h)m[p++]=m[h]<60?t[m[h]]:64*(m[h]-60)+m[++h];return m[l(4056)].slice(0,p)}(r),{})[e(4167)](function(f){const l=e;(a=f[l(603)])[l(3660)][l(2524)]()});function s(f,l,m,h,C,p){const _=e;var y=a.exports.sbrk,A=m+3&-4,b=y(A*h),B=y(C[_(3650)]),T=new Uint8Array(a[_(3660)][_(2091)][_(4056)]);T[_(2590)](C,B);var M=f(b,m,h,B,C.length);if(M==0&&p&&p(b,A,h),l.set(T[_(1238)](b,b+m*h)),y(b-y(0)),M!=0)throw new Error(_(980)+M)}var u={0:"",1:e(2826),2:"meshopt_decodeFilterQuat",3:e(1359),NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:e(3283),EXPONENTIAL:e(1359)},c={0:e(3626),1:e(1688),2:e(3348),ATTRIBUTES:e(3626),TRIANGLES:e(1688),INDICES:e(3348)};return{ready:n,supported:!0,decodeVertexBuffer:function(f,l,m,h,C){const p=e;s(a.exports[p(3626)],f,l,m,h,a.exports[u[C]])},decodeIndexBuffer:function(f,l,m,h){const C=e;s(a[C(3660)][C(1688)],f,l,m,h)},decodeIndexSequence:function(f,l,m,h){s(a[e(3660)].meshopt_decodeIndexSequence,f,l,m,h)},decodeGltfBuffer:function(f,l,m,h,C,p){const _=e;s(a.exports[c[C]],f,l,m,h,a[_(3660)][u[p]])}}}();function U2(e,x,t){const a=o;var r=e[a(1737)],n=new t(r.length+x.length);n.set(r,0),n[a(2590)](x,r[a(3650)]),e.typedArray=n}function Zn(e,x,t,a,r,n,s,u,c,f){const l=o;var m,h=0,C=r[l(666)],p=r.attrLocation;switch(x){case Sx[l(1547)]:case Sx[l(970)]:case Sx[l(3197)]:h=2*Uint16Array.BYTES_PER_ELEMENT,(16&n)!=0||x!==Sx.AttributeType_FirstTexcoord&&x!==Sx[l(3197)]||(h=2*Float32Array.BYTES_PER_ELEMENT),m=Cesium[l(549)][l(3433)](Cesium[l(549)][l(3860)],e*h);break;case Sx.AttributeType_Color:case Sx[l(1406)]:h=4*Uint8Array.BYTES_PER_ELEMENT,m=Cesium.ComponentDatatype[l(3433)](Cesium[l(549)][l(3860)],4*e);break;case Sx[l(1534)]:case Sx[l(1181)]:h=Float32Array[l(3955)]*t,m=Cesium.ComponentDatatype[l(3433)](Cesium.ComponentDatatype[l(3860)],e*t*4);break;default:h=4*Uint16Array[l(3955)],m=Cesium[l(549)][l(3433)](Cesium[l(549)][l(3860)],e*h)}switch(Jn[l(1591)](m,e,h,a,a.length),x){case Sx[l(564)]:var _=new Uint16Array(m[l(4056)],0,m[l(3650)]/2),y=Cesium[l(549)][l(613)];if(Cesium[l(692)](s)){var A=Cartesian3.unpackArray(_);for(let x0=0,y0=A.length;x0<y0;x0++){let f0=A[x0];Cartesian3[l(1582)](f0,r[l(1341)],f0),Cartesian3[l(1050)](f0,r[l(3160)],f0)}var b=Matrix4[l(3640)](s.sphereMatrix,s.geoMatrix,matModelScratch),B=Matrix4[l(3640)](s[l(2123)],s[l(3248)],invMatModelScratch);Matrix4[l(1201)](B,B);var T=new Ellipsoid(6378137,6378137,6378137);for(let x0=0,y0=A[l(3650)];x0<y0;x0++){let f0=A[x0];Matrix4[l(1013)](b,f0,scratchCartesian3);let v=T[l(3563)](scratchCartesian3,geoPosScratch),T0=radiansToCartesian3ForWGS84(v[l(1454)],v[l(1738)],v.height,scratchCartesian3);Matrix4[l(1013)](B,T0,f0)}var M=new Array(3*A.length);Cartesian3[l(1910)](A,M),_=new Float32Array(M),y=Cesium[l(549)][l(3148)]}if((u0=p[l(1303)])!==void 0?(U2(C[u0],_,Uint16Array),r[l(3327)]=r[l(4041)],r.verticesCount+=e):(p[l(1303)]=C[l(3650)],C.push({index:p[l(1303)],typedArray:_,componentsPerAttribute:4,componentDatatype:y,offsetInBytes:0,strideInBytes:0,normalize:!1}),r[l(4041)]=e),!Cesium.defined(s)&&u){var w=new Cesium.Cartographic,I=new Cesium[l(1431)],P=new Float32Array(2*e),V=new Float64Array(2*e),q=new Cesium[l(516)],X=new Cesium[l(516)],H=new Cesium[l(1431)];T=ellipsoid?new Cesium[l(2024)](6378137,6378137,6356752314245179e-9):new Cesium[l(2024)](6378137,6378137,6378137);for(var z=0;z<e;z++)Matrix4[l(1013)](f,Cartesian3[l(511)](_[4*z]*r[l(1341)]+r[l(3160)].x,_[4*z+1]*r[l(1341)]+r[l(3160)].y,_[4*z+2]*r[l(1341)]+r[l(3160)].z,q),X),H=T[l(3563)](X,geoPosScratch),V[2*z]=H[l(1454)],V[2*z+1]=H[l(1738)],z===0?(w[l(1454)]=H[l(1454)],w[l(1738)]=H[l(1738)],I.longitude=H[l(1454)],I[l(1738)]=H[l(1738)]):(w[l(1454)]=Math[l(2092)](H[l(1454)],w.longitude),w.latitude=Math.max(H[l(1738)],w.latitude),I[l(1454)]=Math[l(1803)](H.longitude,I[l(1454)]),I[l(1738)]=Math.min(H[l(1738)],I[l(1738)]));for(z=0;z<e;z++)P[2*z]=V[2*z]-I[l(1454)],P[2*z+1]=V[2*z+1]-I[l(1738)];p.img=C.length,C.push({index:p[l(2320)],typedArray:P,componentsPerAttribute:2,componentDatatype:ComponentDatatype.FLOAT,offsetInBytes:0,strideInBytes:2*Float32Array[l(3955)],normalize:!1}),c.max=w,c[l(1803)]=I}break;case Sx[l(1547)]:var u0=p[l(782)],n0=new Int16Array(m[l(4056)],0,m[l(3650)]/2);u0!==void 0?U2(C[u0],n0,Uint16Array):(p[l(782)]=C[l(3650)],C[l(2583)]({index:p[l(782)],typedArray:n0,componentsPerAttribute:2,componentDatatype:Cesium.ComponentDatatype.SHORT,offsetInBytes:0,strideInBytes:0,normalize:!1}));break;case Sx[l(970)]:var N=new Uint16Array(m[l(4056)],0,m[l(3650)]/2),Y=(u0=p[l(2389)],y=Cesium[l(549)].SHORT,Uint16Array);(16&n)==0&&(y=Cesium.ComponentDatatype[l(3148)],Y=Float32Array,N=new Float32Array(m[l(4056)],0,m[l(3650)]/4)),u0!==void 0?U2(C[u0],N,Y):(p[l(2389)]=C.length,C.push({index:p[l(2389)],typedArray:N,componentsPerAttribute:2,componentDatatype:y,offsetInBytes:0,strideInBytes:0,normalize:!1}));break;case Sx[l(3197)]:N=new Uint16Array(m.buffer,0,m.length/2),u0=p.aTexCoord1,y=Cesium[l(549)][l(613)],Y=Uint16Array,(16&n)==0&&(y=Cesium[l(549)].FLOAT,Y=Float32Array,N=new Float32Array(m[l(4056)],0,m[l(3650)]/4)),u0!==void 0?U2(C[u0],N,Y):(p[l(3881)]=C.length,C.push({index:p[l(3881)],typedArray:N,componentsPerAttribute:2,componentDatatype:y,offsetInBytes:0,strideInBytes:0,normalize:!1}));break;case Sx[l(3836)]:(u0=p[l(3299)])!==void 0?U2(C[u0],m,Uint8Array):(p[l(3299)]=C[l(3650)],C[l(2583)]({index:p[l(3299)],typedArray:m,componentsPerAttribute:4,componentDatatype:Cesium.ComponentDatatype[l(3860)],offsetInBytes:0,strideInBytes:0,normalize:!0}));break;case Sx[l(1406)]:(u0=p.aSecondColor)!==void 0?U2(C[u0],m,Uint8Array):(p.aSecondColor=C.length,C.push({index:p.aSecondColor,typedArray:m,componentsPerAttribute:4,componentDatatype:Cesium[l(549)][l(1521)],offsetInBytes:0,strideInBytes:0,normalize:!1}));break;case Sx[l(1534)]:N=new Float32Array(m[l(4056)],0,m[l(3650)]/4),(u0=p.aCustom0||p[l(3718)])!==void 0?U2(C[u0],N,Float32Array):(p.aCustom0=C[l(3650)],C[l(2583)]({index:p.aCustom0,typedArray:N,componentsPerAttribute:t,componentDatatype:Cesium[l(549)][l(3148)],offsetInBytes:0,strideInBytes:0,normalize:!1}));break;case Sx[l(1181)]:var W=new Float32Array(m.buffer,0,m.length/4);(u0=p[l(2012)]||p[l(1683)])!==void 0?U2(C[u0],W,Float32Array):(p[l(2012)]=C.length,C[l(2583)]({index:p[l(2012)],typedArray:W,componentsPerAttribute:t,componentDatatype:Cesium[l(549)].FLOAT,offsetInBytes:0,strideInBytes:0,normalize:!1}))}}function Qn(){}const ct={SV_Unkown:0,SV_Standard:1,SV_Compressed:2,SV_DracoCompressed:3},$n={Standard:0,Draco:1,MeshOpt:2};var Qo={SVO_HasInstSelInfo:1};function yf(e,x){const t=o;let a=new Uint8Array(e,x);return N2[t(2653)](a)[t(4056)]}function Vt(e,x,t){const a=o;var r=t,n=e[a(3757)](r,!0),s=r+=Uint32Array.BYTES_PER_ELEMENT,u=new Uint8Array(x,r,n);return{dataViewByteOffset:s,byteOffset:r+=n*Uint8Array[a(3955)],buffer:u}}function Le(e,x,t,a){const r=o;var n=e[r(3757)](a+x,!0);a+=Uint32Array.BYTES_PER_ELEMENT;var s=t[r(1238)](a,a+n);return{string:Cesium[r(607)](s),bytesOffset:a+=n}}function $o(e,x,t){const a=o;if(Cesium[a(1680)][a(692)](a(1024),e),Cesium[a(692)](x)&&Cesium[a(1680)][a(1556)].number("begin",x),Cesium[a(692)](t)&&Cesium[a(1680)][a(1556)][a(1232)](a(1441),t),a(1355)==typeof e.slice)return e.slice(x,t);for(var r=Array[a(3096)][a(3403)].call(e,x,t),n=Cesium[a(2540)][a(1324)],s=n.length,u=0;u<s;++u)if(e instanceof n[u]){r=new n[u](r);break}return r}function _f(e,x,t,a,r){const n=o;let s={},u=[],c=new Array(16);for(let m=0;m<16;m++)c[m]=x[n(1623)](t+a,!0),t+=Float64Array[n(3955)];let f=e;s[n(2951)]=c,s[n(3004)]=u;let l=x[n(3757)](t+a,!0);t+=Uint32Array.BYTES_PER_ELEMENT;for(let m=0;m<l;m++){let h=Le(x,a,f,t);u[n(2583)](h[n(4039)]),t=h[n(828)]}return r[n(2583)](s),t}function gf(e,x,t,a,r,n){const s=o;let u={};u[s(4157)]=x[s(867)](t+a,!0),t+=Float32Array[s(3955)],u[s(1849)]=x[s(2561)](t+a,!0),t+=Uint16Array[s(3955)];let c={};c.x=x[s(1623)](t+a,!0),t+=Float64Array.BYTES_PER_ELEMENT,c.y=x[s(1623)](t+a,!0),t+=Float64Array[s(3955)],c.z=x[s(1623)](t+a,!0),t+=Float64Array[s(3955)];let f=x[s(1623)](t+a,!0);if(t+=Float64Array[s(3955)],u.boundingSphere={center:c,radius:f},n[s(1544)]===3){let _=new Cesium.Cartesian3;_.x=x[s(1623)](t+a,!0),t+=Float64Array[s(3955)],_.y=x[s(1623)](t+a,!0),t+=Float64Array[s(3955)],_.z=x.getFloat64(t+a,!0),t+=Float64Array[s(3955)];let y=new Cesium[s(516)];y.x=x[s(1623)](t+a,!0),t+=Float64Array[s(3955)],y.y=x[s(1623)](t+a,!0),t+=Float64Array[s(3955)],y.z=x[s(1623)](t+a,!0),t+=Float64Array[s(3955)];let A=new Cesium[s(516)];A.x=x.getFloat64(t+a,!0),t+=Float64Array.BYTES_PER_ELEMENT,A.y=x[s(1623)](t+a,!0),t+=Float64Array.BYTES_PER_ELEMENT,A.z=x[s(1623)](t+a,!0),t+=Float64Array[s(3955)];let b=new Cesium.Cartesian3;b.x=x[s(1623)](t+a,!0),t+=Float64Array[s(3955)],b.y=x[s(1623)](t+a,!0),t+=Float64Array[s(3955)],b.z=x[s(1623)](t+a,!0),t+=Float64Array[s(3955)],u[s(2291)]={xExtent:y,yExtent:A,zExtent:b,center:_}}let l=e,m=Le(x,a,l,t),h=m[s(4039)];t=m.bytesOffset;let C=h[s(3019)](s(2480));if(C!==-1){let _=h[s(2629)](C);h=h[s(960)](_,"")}u[s(3775)]=h,u[s(2083)]=[];let p=x.getUint32(t+a,!0);t+=Uint32Array[s(3955)];for(let _=0;_<p;_++)t=_f(e,x,t,a,u[s(2083)]);return r[s(2583)](u),n.version===3&&(m=Le(x,a,l,t),t=m[s(828)]),t}function Tf(e,x,t,a){const r=o;let n={},s=[],u=0,c=Vt(x,e,t),f=c[r(4056)],l=c[r(2471)];t=c[r(2812)];let m=x[r(3757)](u+t,!0);u+=Uint32Array.BYTES_PER_ELEMENT;for(let C=0;C<m;C++)u=gf(f,x,u,t,s,a);n.pageLods=s;let h=l%4;return h!==0&&(l+=4-h),a[r(1446)]=n,l}function xs(e,x,t,a,r){const n=o;let s=x[n(3757)](t+a,!0);if(r.verticesCount=s,a+=Uint32Array[n(3955)],s<=0)return a;let u=x[n(2561)](t+a,!0);a+=Uint16Array[n(3955)];let c=x.getUint16(t+a,!0);c=u*Float32Array[n(3955)],a+=Uint16Array.BYTES_PER_ELEMENT;let f=s*u*Float32Array[n(3955)],l=e.subarray(a,a+f);a+=f;let m=r[n(666)],h=r.attrLocation;return h.aPosition=m[n(3650)],m[n(2583)]({index:h[n(1303)],typedArray:l,componentsPerAttribute:u,componentDatatype:Cesium[n(549)][n(3148)],offsetInBytes:0,strideInBytes:c,normalize:!1}),a}function es(e,x,t,a,r){const n=o;let s=x[n(3757)](t+a,!0);if(a+=Uint32Array.BYTES_PER_ELEMENT,s<=0)return a;let u=x[n(2561)](t+a,!0);a+=Uint16Array[n(3955)];let c=x[n(2561)](t+a,!0);a+=Uint16Array.BYTES_PER_ELEMENT;let f=s*u*Float32Array.BYTES_PER_ELEMENT,l=e[n(1238)](a,a+f);a+=f;let m=r[n(666)],h=r[n(3257)];return h[n(782)]=m[n(3650)],m[n(2583)]({index:h[n(782)],typedArray:l,componentsPerAttribute:u,componentDatatype:Cesium[n(549)][n(3148)],offsetInBytes:0,strideInBytes:c,normalize:!1}),a}function ts(e,x,t,a,r){const n=o;let s=x[n(3757)](t+a,!0);a+=Uint32Array[n(3955)];let u,c=r[n(4041)];if(s>0){x[n(2561)](t+a,!0),a+=Uint16Array[n(3955)],a+=2*Uint8Array[n(3955)];let m=s*Uint8Array.BYTES_PER_ELEMENT*4;u=$o(e,a,a+m),a+=m}else{u=new Uint8Array(4*c);for(let m=0;m<c;m++)u[4*m]=255,u[4*m+1]=255,u[4*m+2]=255,u[4*m+3]=255}let f=r[n(666)],l=r[n(3257)];return l.aColor=f.length,f.push({index:l.aColor,typedArray:u,componentsPerAttribute:4,componentDatatype:Cesium[n(549)][n(3860)],offsetInBytes:0,strideInBytes:4,normalize:!0}),r[n(556)]=u,a}function is(e,x,t,a,r){const n=o;let s=x[n(3757)](t+a,!0);if(a+=Uint32Array[n(3955)],s<=0)return a;x[n(2561)](t+a,!0),a+=Uint16Array.BYTES_PER_ELEMENT,a+=2*Uint8Array[n(3955)];let u=s*Uint8Array[n(3955)]*4,c=e.subarray(a,a+u);a+=u;let f=r[n(666)],l=r.attrLocation;return l.aSecondColor=f[n(3650)],f[n(2583)]({index:l[n(2766)],typedArray:c,componentsPerAttribute:4,componentDatatype:Cesium[n(549)][n(3860)],offsetInBytes:0,strideInBytes:4,normalize:!0}),a}function as(e,x,t,a,r){const n=o;let s=x.getUint16(t+a,!0);a+=Uint16Array[n(3955)],a+=Uint16Array.BYTES_PER_ELEMENT;for(let u=0;u<s;u++){let c=x[n(3757)](t+a,!0);a+=Uint32Array[n(3955)];let f=x[n(2561)](t+a,!0);a+=Uint16Array[n(3955)],x[n(2561)](t+a,!0),a+=Uint16Array[n(3955)];let l=c*f*Float32Array[n(3955)],m=e[n(1238)](a,a+l);a+=l;let h="aTexCoord"+u,C=r[n(666)],p=r[n(3257)];p[h]=C[n(3650)],C[n(2583)]({index:p[h],typedArray:m,componentsPerAttribute:f,componentDatatype:Cesium[n(549)][n(3148)],offsetInBytes:0,strideInBytes:f*Float32Array.BYTES_PER_ELEMENT,normalize:!1})}return a}function ns(e,x,t,a,r){const n=o;let s=x[n(2561)](t+a,!0);a+=Uint16Array[n(3955)],a+=Uint16Array[n(3955)];let u=r.vertexAttributes,c=r[n(3257)];for(let f=0;f<s;f++){let l=x.getUint32(t+a,!0);a+=Uint32Array.BYTES_PER_ELEMENT;let m=x[n(2561)](t+a,!0);if(a+=Uint16Array[n(3955)],m===16){a-=Uint16Array[n(3955)];let h=l*(m*Float32Array[n(3955)]+Uint16Array[n(3955)]),C=e[n(1238)](a,a+h);a+=h;let p=new Uint8Array(Float32Array[n(3955)]*m*l);r.instanceCount=l,r[n(1891)]=m,r[n(4159)]=p,r[n(2369)]=1;let _=Float32Array.BYTES_PER_ELEMENT*m+Uint16Array[n(3955)];for(let A=0;A<l;A++){let b=A*_+Uint16Array[n(3955)],B=C[n(1238)](b,b+_);p[n(2590)](B,A*(_-Uint16Array[n(3955)]))}let y=16*Float32Array.BYTES_PER_ELEMENT;c[n(3070)]=u[n(3650)],u[n(2583)]({index:c[n(3070)],componentsPerAttribute:4,componentDatatype:Cesium[n(549)].FLOAT,normalize:!1,offsetInBytes:0,strideInBytes:y,instanceDivisor:1}),c[n(1199)]=u[n(3650)],u[n(2583)]({index:c.uv3,componentsPerAttribute:4,componentDatatype:Cesium[n(549)].FLOAT,normalize:!1,offsetInBytes:4*Float32Array.BYTES_PER_ELEMENT,strideInBytes:y,instanceDivisor:1}),c[n(3636)]=u[n(3650)],u[n(2583)]({index:c[n(3636)],componentsPerAttribute:4,componentDatatype:Cesium.ComponentDatatype[n(3148)],normalize:!1,offsetInBytes:8*Float32Array[n(3955)],strideInBytes:y,instanceDivisor:1}),c[n(3749)]=u[n(3650)],u[n(2583)]({index:c[n(3749)],componentsPerAttribute:4,componentDatatype:Cesium[n(549)][n(3148)],normalize:!1,offsetInBytes:12*Float32Array.BYTES_PER_ELEMENT,strideInBytes:y,instanceDivisor:1})}else{x.getUint16(t+a,!0),a+=Uint16Array[n(3955)];let h=l*m*Float32Array[n(3955)];if(m===17||m===29){let C,p=e[n(1238)](a,a+h);r[n(3008)]=l,r[n(1891)]=m,r[n(4159)]=p,r[n(2369)]=1,m===17?(C=17*Float32Array[n(3955)],c[n(3070)]=u[n(3650)],u[n(2583)]({index:c.uv2,componentsPerAttribute:4,componentDatatype:Cesium[n(549)][n(3148)],normalize:!1,offsetInBytes:0,strideInBytes:C,instanceDivisor:1}),c.uv3=u[n(3650)],u[n(2583)]({index:c[n(1199)],componentsPerAttribute:4,componentDatatype:Cesium[n(549)][n(3148)],normalize:!1,offsetInBytes:4*Float32Array[n(3955)],strideInBytes:C,instanceDivisor:1}),c[n(3636)]=u[n(3650)],u[n(2583)]({index:c.uv4,componentsPerAttribute:4,componentDatatype:Cesium[n(549)][n(3148)],normalize:!1,offsetInBytes:8*Float32Array[n(3955)],strideInBytes:C,instanceDivisor:1}),c.secondary_colour=u[n(3650)],u.push({index:c[n(3749)],componentsPerAttribute:4,componentDatatype:Cesium[n(549)][n(3148)],normalize:!1,offsetInBytes:12*Float32Array.BYTES_PER_ELEMENT,strideInBytes:C,instanceDivisor:1}),c[n(2312)]=u[n(3650)],u.push({index:c[n(2312)],componentsPerAttribute:4,componentDatatype:Cesium[n(549)].UNSIGNED_BYTE,normalize:!0,offsetInBytes:16*Float32Array[n(3955)],strideInBytes:C,instanceDivisor:1})):m===29&&(C=29*Float32Array[n(3955)],c.uv1=u[n(3650)],u[n(2583)]({index:c.uv1,componentsPerAttribute:4,componentDatatype:Cesium[n(549)][n(3148)],normalize:!1,offsetInBytes:0,strideInBytes:C,instanceDivisor:1,byteLength:h}),c[n(3070)]=u[n(3650)],u.push({index:c[n(3070)],componentsPerAttribute:4,componentDatatype:Cesium[n(549)].FLOAT,normalize:!1,offsetInBytes:4*Float32Array[n(3955)],strideInBytes:C,instanceDivisor:1}),c[n(1199)]=u[n(3650)],u[n(2583)]({index:c.uv3,componentsPerAttribute:4,componentDatatype:Cesium[n(549)][n(3148)],normalize:!1,offsetInBytes:8*Float32Array.BYTES_PER_ELEMENT,strideInBytes:C,instanceDivisor:1}),c[n(3636)]=u[n(3650)],u[n(2583)]({index:c[n(3636)],componentsPerAttribute:4,componentDatatype:Cesium[n(549)][n(3148)],normalize:!1,offsetInBytes:12*Float32Array[n(3955)],strideInBytes:C,instanceDivisor:1}),c[n(871)]=u[n(3650)],u[n(2583)]({index:c[n(871)],componentsPerAttribute:4,componentDatatype:Cesium[n(549)][n(3148)],normalize:!1,offsetInBytes:16*Float32Array.BYTES_PER_ELEMENT,strideInBytes:C,instanceDivisor:1}),c[n(2312)]=u[n(3650)],u.push({index:c[n(2312)],componentsPerAttribute:4,componentDatatype:Cesium[n(549)].FLOAT,normalize:!1,offsetInBytes:20*Float32Array[n(3955)],strideInBytes:C,instanceDivisor:1}),c[n(2510)]=u[n(3650)],u[n(2583)]({index:c[n(2510)],componentsPerAttribute:3,componentDatatype:Cesium[n(549)][n(3148)],normalize:!1,offsetInBytes:24*Float32Array[n(3955)],strideInBytes:C,instanceDivisor:1}),c[n(3749)]=u[n(3650)],u[n(2583)]({index:c[n(3749)],componentsPerAttribute:4,componentDatatype:Cesium[n(549)][n(3860)],normalize:!0,offsetInBytes:27*Float32Array[n(3955)],strideInBytes:C,instanceDivisor:1}),c[n(4154)]=u[n(3650)],u[n(2583)]({index:c.uv9,componentsPerAttribute:4,componentDatatype:Cesium.ComponentDatatype[n(3860)],normalize:!0,offsetInBytes:28*Float32Array.BYTES_PER_ELEMENT,strideInBytes:C,instanceDivisor:1}))}else{let C=l*m;r[n(689)]=new Float32Array(C);for(let p=0;p<C;p++)r[n(689)][p]=x[n(867)](a+t+p*Float32Array[n(3955)],!0)}a+=h}}return a}function Bf(e,x,t,a,r){const n=o;let s=x[n(3757)](t+a,!0);if(r[n(4041)]=s,(a+=Uint32Array[n(3955)])<=0)return a;let u=x[n(2561)](t+a,!0);a+=Uint16Array.BYTES_PER_ELEMENT;let c=x[n(2561)](t+a,!0);c=u*Int16Array[n(3955)],a+=Uint16Array.BYTES_PER_ELEMENT;let f=x[n(867)](t+a,!0);a+=Float32Array[n(3955)];let l={};l.x=x.getFloat32(t+a,!0),a+=Float32Array[n(3955)],l.y=x[n(867)](t+a,!0),a+=Float32Array[n(3955)],l.z=x[n(867)](t+a,!0),a+=Float32Array[n(3955)],l.w=x.getFloat32(t+a,!0),a+=Float32Array.BYTES_PER_ELEMENT,r[n(1341)]=f,r[n(3160)]=l;let m=s*u*Int16Array[n(3955)],h=e[n(1238)](a,a+m);a+=m;let C=r.vertexAttributes,p=r[n(3257)];return p.aPosition=C[n(3650)],C[n(2583)]({index:p[n(1303)],typedArray:h,componentsPerAttribute:u,componentDatatype:Cesium.ComponentDatatype.SHORT,offsetInBytes:0,strideInBytes:c,normalize:!1}),a}function Ef(e,x,t,a,r){const n=o;let s=x.getUint32(t+a,!0);if(a+=Uint32Array[n(3955)],s<=0)return a;x[n(2561)](t+a,!0),a+=Uint16Array.BYTES_PER_ELEMENT;let u=x.getUint16(t+a,!0);a+=Uint16Array[n(3955)];let c=2*s*Int16Array[n(3955)],f=e[n(1238)](a,a+c);a+=c;let l=r.vertexAttributes,m=r[n(3257)];return m[n(782)]=l[n(3650)],l[n(2583)]({index:m[n(782)],typedArray:f,componentsPerAttribute:2,componentDatatype:Cesium[n(549)].SHORT,offsetInBytes:0,strideInBytes:u,normalize:!1}),a}function Pf(e,x,t,a,r){const n=o;r[n(2222)]=[],r[n(3582)]=[];let s=x[n(2561)](t+a,!0);a+=Uint16Array[n(3955)],a+=Uint16Array.BYTES_PER_ELEMENT;for(let u=0;u<s;u++){let c=x[n(3341)](t+a,!0);a+=Uint8Array[n(3955)],a+=3*Uint8Array.BYTES_PER_ELEMENT;let f=x[n(3757)](t+a,!0);a+=Uint32Array[n(3955)];let l=x.getUint16(t+a,!0);a+=Uint16Array[n(3955)],x[n(2561)](t+a,!0),a+=Uint16Array.BYTES_PER_ELEMENT;let m=x[n(867)](t+a,!0);a+=Float32Array.BYTES_PER_ELEMENT,r[n(2222)].push(m);let h={};h.x=x[n(867)](t+a,!0),a+=Float32Array.BYTES_PER_ELEMENT,h.y=x.getFloat32(t+a,!0),a+=Float32Array[n(3955)],h.z=x.getFloat32(t+a,!0),a+=Float32Array[n(3955)],h.w=x[n(867)](t+a,!0),a+=Float32Array[n(3955)],r[n(3582)][n(2583)](h);let C=f*l*Int16Array[n(3955)],p=e[n(1238)](a,a+C),_=(a+=C)%4;_!==0&&(a+=4-_);let y="aTexCoord"+u,A=r.vertexAttributes,b=r[n(3257)];if(b[y]=A[n(3650)],A[n(2583)]({index:b[y],typedArray:p,componentsPerAttribute:l,componentDatatype:Cesium[n(549)][n(613)],offsetInBytes:0,strideInBytes:l*Int16Array[n(3955)],normalize:!1}),c){C=f*Float32Array[n(3955)];let B=e[n(1238)](a,a+C);a+=C,r.texCoordZMatrix=!0,y="aTexCoordZ"+u,b[y]=A[n(3650)],A[n(2583)]({index:b[y],typedArray:B,componentsPerAttribute:1,componentDatatype:Cesium.ComponentDatatype[n(3148)],offsetInBytes:0,strideInBytes:Float32Array.BYTES_PER_ELEMENT,normalize:!1})}}return a}function wf(e,x,t,a,r,n){const s=o;if(n.version===3&&(x[s(3757)](a,!0),a+=Uint32Array[s(3955)]),a=ts(e,x,t,a=es(e,x,t,a=xs(e,x,t,a,r),r),r),n.version!==3&&(a=is(e,x,t,a,r)),a=ns(e,x,t,a=as(e,x,t,a,r),r),n[s(1544)]===3&&(a=Rf(e,x,t,a,r)[s(3034)]),n[s(1544)]==3){let u=Le(x,t,e,a);a=u.bytesOffset,r[s(825)]=JSON[s(2010)](u.string);let c=s(1720)+r[s(825)][s(1939)],f=s(1720)+r.customVertexAttribute.VertexWeight,l=s(1720)+r[s(825)][s(1428)];Cesium[s(692)](r[s(3257)][c])&&(r.attrLocation[s(1683)]=r[s(3257)][c],delete r[s(3257)][c]),Cesium[s(692)](r.attrLocation[f])&&(r[s(3257)].aVertexWeight=r[s(3257)][f],delete r[s(3257)][f]),Cesium.defined(r.attrLocation[l])&&(r[s(3257)][s(2138)]=r[s(3257)][l],delete r[s(3257)][l]);let m=Object[s(3360)](r[s(3257)]),h=m[s(3650)];for(let p=0;p<h;++p){let _=m[p];_[s(3019)](s(1720))!==-1&&delete r[s(3257)][_]}let C=(t+a)%4;C&&(C=4-C),a+=C}return n[s(1544)]===3&&(a=(n=Sf(e,x,t,a))[s(828)]),a}function Sf(e,x,t,a,r){const n=o;let s=x[n(3757)](t+a,!0);if(a+=Uint32Array[n(3955)],s<=0)return{bytesOffset:a};let u=x[n(2561)](t+a,!0);return a+=Uint16Array[n(3955)],x[n(2561)](t+a,!0),a+=Uint16Array[n(3955)],{bytesOffset:a+=s*u*Float32Array.BYTES_PER_ELEMENT}}const Mf={0:Uint32Array[o(3955)],1:Float32Array[o(3955)],2:Float64Array.BYTES_PER_ELEMENT};function Rf(e,x,t,a,r){const n=o;let s=x[n(3757)](t+a,!0);a+=Uint32Array[n(3955)];for(let u=0;u<s;u++){let c=x[n(3757)](t+a,!0);a+=Uint32Array[n(3955)];let f=x[n(2561)](t+a,!0);a+=Uint16Array.BYTES_PER_ELEMENT;let l=x[n(2561)](t+a,!0);a+=Uint16Array[n(3955)];let m=c*f*Mf[l],h=e[n(1238)](a,a+m);a+=m;let C=r[n(666)],p=r[n(3257)],_=n(1720)+u;p[_]=C[n(3650)],C.push({index:p[_],typedArray:h,componentsPerAttribute:f,componentDatatype:Cesium[n(549)].FLOAT,offsetInBytes:0,strideInBytes:0,normalize:!1})}return{bufferByteOffset:a}}function Df(e,x,t,a,r,n){const s=o;let u=x[s(3757)](t+a,!0);return r[s(2326)]=u,a+=Uint32Array[s(3955)],a=(u&cx[s(3515)])===cx[s(3515)]?Bf(e,x,t,a,r):xs(e,x,t,a,r),a=is(e,x,t,a=ts(e,x,t,a=(u&cx[s(3155)])===cx.SVC_Normal?Ef(e,x,t,a,r):es(e,x,t,a,r),r),r),a=(u&cx[s(753)])===cx[s(753)]?Pf(e,x,t,a,r):as(e,x,t,a,r),(u&cx[s(2135)])===cx[s(2135)]&&(r[s(3103)]=!0),a=ns(e,x,t,a,r)}function If(e,x,t,a,r,n,s){const u=o;let c=n[u(2604)];n[u(1544)]===3&&(x[u(3367)](t+a,!0),a+=Int32Array[u(3955)]),n[u(1544)]>=2&&(x.getInt32(t+a),a+=Int32Array[u(3955)]);let f,l={};l[u(853)]=x.getInt32(t+a,!0),a+=Int32Array[u(3955)],l[u(2871)]=x.getInt32(t+a,!0),a+=Int32Array[u(3955)],l.colorUniqueID=x[u(3367)](t+a,!0),a+=Int32Array[u(3955)],l[u(936)]=x[u(3367)](t+a,!0),a+=Int32Array[u(3955)],n[u(1544)]===3?(f=x.getUint32(t+a,!0),a+=Int32Array.BYTES_PER_ELEMENT):(f=x[u(2561)](t+a,!0),a+=Int16Array.BYTES_PER_ELEMENT);let m=[];for(let M=0;M<f;M++){const w=x[u(3367)](t+a,!0);m[u(2583)](w),a+=Int32Array.BYTES_PER_ELEMENT}l[u(1245)]=m;let h=[];if(n[u(1544)]===3){let M=x[u(3757)](t+a,!0);a+=Int32Array[u(3955)];for(let w=0;w<M;w++){const I=x[u(3367)](t+a,!0);a+=Int32Array.BYTES_PER_ELEMENT,h[u(2583)](I)}}l.vertexAttrUniqueIDs=h;const C=x.getInt32(t+a,!0);a+=Int32Array.BYTES_PER_ELEMENT;let p=[],_={};if(C>0){const M=(T=Le(x,t,e,a))[u(4039)];a=T[u(828)],_[u(3834)]=M,p[u(2583)](_)}var y;n[u(1544)]===3&&((y=(t+a)%4)&&(y=4-y),a+=y);let A=new Object;const b=x[u(3757)](t+a,!0);let B=$o(e,a+=Int32Array[u(3955)],a+b);var T;return C>0?ce.dracoDecodeMesh(B,b,r,_,l,void 0,!1,A,void 0):ce[u(1706)](B,b,r,l),Cesium.defined(A[u(1803)])&&Cesium[u(692)](A[u(2092)])||(A=void 0),a+=b,n[u(1544)]===3&&((y=(t+a)%4)&&(y=4-y),(y=(t+(a=(T=Le(x,t,e,a+=y))[u(828)]))%4)&&(y=4-y),a+=y),c[s]={vertexPackage:r,arrIndexPackage:p,cartographicBounds:A},a}function Lf(e,x,t,a,r,n,s,u,c){const f=o;let l=Vt(t,x,r)[f(2812)],m=t[f(3757)](a+l,!0);a+=Uint32Array[f(3955)];let h=t[f(3757)](a+l,!0);a+=Uint32Array[f(3955)],n[f(3160)]=new Cesium.Cartesian4,n.minTexCoordValue=[new Cesium[f(2351)],new Cesium.Cartesian2],n[f(2222)]=[new Cesium.Cartesian3,new Cesium[f(516)]];let C=[];for(let p=0;p<h;p++){let _=t.getUint32(a+l,!0);a+=Uint32Array[f(3955)],n[f(1341)]=t[f(867)](a+l,!0),a+=Float32Array[f(3955)],n[f(3160)].x=t[f(1623)](a+l,!0),a+=Float64Array[f(3955)],n[f(3160)].y=t.getFloat64(a+l,!0),a+=Float64Array.BYTES_PER_ELEMENT,n.minVerticesValue.z=t[f(1623)](a+l,!0),a+=Float64Array.BYTES_PER_ELEMENT;let y=t[f(1623)](a+l,!0);a+=Float64Array[f(3955)];let A=t.getFloat64(a+l,!0);a+=Float64Array.BYTES_PER_ELEMENT;let b=t[f(1623)](a+l,!0);a+=Float64Array[f(3955)];let B=t[f(1623)](a+l,!0);a+=Float64Array[f(3955)];let T=t[f(1623)](a+l,!0);a+=Float64Array[f(3955)];let M=t[f(1623)](a+l,!0);a+=Float64Array[f(3955)];let w=t[f(1623)](a+l,!0);a+=Float64Array[f(3955)];let I=t.getFloat64(a+l,!0);a+=Float64Array[f(3955)],n[f(3582)][0].x=b,n.minTexCoordValue[0].y=B,n[f(3582)][1].x=w,n[f(3582)][1].y=I,n[f(2222)][0].x=y,n[f(2222)][0].y=A,n[f(2222)][1].x=T,n.texCoordCompressConstant[1].y=M;let P=t[f(3367)](a+l,!0);a+=Int32Array[f(3955)];let V=new Object;for(let W=0;W<P;W++){let x0=t.getInt32(a+l,!0);a+=Int32Array[f(3955)];let y0=x0,f0=0;y0!=Sx[f(1534)]&&y0!=Sx.AttributeType_Custom1||(f0=t.getInt32(a+l,!0),a+=Int32Array[f(3955)]);let v=t.getInt32(a+l,!0);a+=Int32Array[f(3955)];let T0=new Uint8Array(t[f(4056)],a+l,v),F0=((a+=Uint8Array.BYTES_PER_ELEMENT*v)+l)%4;F0&&(F0=4-F0),a+=F0,Zn(_,y0,f0,T0,n,m,void 0,![],V,void 0)}let q=Le(t,l,e,a);a=q[f(828)],n[f(825)]=JSON[f(2010)](q[f(4039)]);let X="aCustom"+n[f(825)][f(1939)],H=f(1720)+n[f(825)][f(756)],z=f(1720)+n[f(825)].VertexWeight_1;Cesium[f(692)](n[f(3257)][X])&&(n[f(3257)][f(1683)]=n.attrLocation[X],p===h-1&&delete n[f(3257)][X]),Cesium[f(692)](n[f(3257)][H])&&(n[f(3257)].aVertexWeight=n.attrLocation[H],p===h-1&&delete n[f(3257)][H]),Cesium.defined(n[f(3257)][z])&&(n[f(3257)][f(2138)]=n.attrLocation[z],p===h-1&&delete n[f(3257)][z]);let u0=Object[f(3360)](n[f(3257)]),n0=u0[f(3650)];for(let W=0;W<n0;++W){let x0=u0[W];x0.indexOf("aCustom")!==-1&&delete n[f(3257)][x0]}let N=(a+l)%4;N&&(N=4-N),a+=N;let Y=t[f(3367)](a+l,!0);a+=Int32Array[f(3955)];for(let W=0;W<Y;W++){let x0={},y0=t[f(3367)](a+l,!0);if(a+=Int32Array[f(3955)],y0>0){let f0=t.getInt8(a+l,!0);a+=Int8Array.BYTES_PER_ELEMENT,t.getInt8(a+l,!0),a+=Int8Array[f(3955)];let v=t.getInt8(a+l,!0);a+=Int8Array[f(3955)],t[f(3825)](a+l,!0),a+=Int8Array[f(3955)];let T0,F0=t.getInt32(a+l,!0);a+=Int32Array[f(3955)],v!==13?(T0=new Uint8Array(t[f(4056)],a+l,F0),a+=Uint8Array[f(3955)]*F0):(T0=new Uint32Array(t[f(4056)],a+l,F0),a+=Uint32Array[f(3955)]*F0);let O0,w0=(a+l)%4;w0&&(w0=4-w0),a+=w0,v!==13?(O0=Cesium.ComponentDatatype.createTypedArray(Cesium[f(549)][f(3860)],y0*Uint32Array.BYTES_PER_ELEMENT),Jn.decodeIndexBuffer(O0,y0,Uint32Array[f(3955)],T0)):O0=T0;let U0,xx=t[f(3367)](a+l,!0);a+=Int32Array[f(3955)],x0[f(2202)]=f0,f0===0?U0=new Uint16Array(y0):f0===1&&(U0=new Uint32Array(y0)),x0[f(1520)]=y0;let W0=new Uint32Array(O0[f(4056)],O0[f(2471)],O0[f(3818)]/4);U0.set(W0,0),x0[f(3296)]=U0,x0.primitiveType=v;for(let tx=0;tx<xx;tx++){let v0=Le(t,l,e,a),ix=v0[f(4039)];a=v0[f(828)],x0[f(3834)]=ix}if(C[f(3650)]>0&&v!==13){let tx=n[f(3327)];x0[f(3296)]=W0.map(function(v0){return v0+tx}),x0[f(2202)]=1}C[f(2583)](x0);let j0=(a+l)%4;j0&&(j0=4-j0),a+=j0}}}return n.compressOptions=m,u[c]={vertexPackage:n,arrIndexPackage:C,edgeGeometry:void 0,cartographicBounds:void 0},a}function rs(e,x,t,a,r,n){const s=o;let u=x.getUint32(a+t,!0);a+=Uint32Array.BYTES_PER_ELEMENT;for(let c=0;c<u;c++){let f={};n.version===3&&(x[s(3757)](a+t,!0),a+=Uint32Array[s(3955)]);let l=x[s(3757)](a+t,!0);a+=Uint32Array[s(3955)];let m=x[s(3341)](a+t,!0);a+=Uint8Array[s(3955)],x[s(3341)](a+t,!0),a+=Uint8Array[s(3955)];let h=x[s(3341)](a+t,!0);if(a+=Uint8Array[s(3955)],a+=Uint8Array[s(3955)],l>0){let p,_=null;m===1||m===3?(p=l*Uint32Array[s(3955)],_=e[s(1238)](a,a+p)):(p=l*Uint16Array.BYTES_PER_ELEMENT,_=e[s(1238)](a,a+p),l%2!=0&&(p+=2)),f.indicesTypedArray=_,a+=p}f[s(1520)]=l,f.indexType=m,f.primitiveType=h;let C=x[s(3757)](a+t,!0);a+=Uint32Array.BYTES_PER_ELEMENT;for(let p=0;p<C;p++){let _=Le(x,t,e,a),y=_[s(4039)];a=_.bytesOffset,f[s(3834)]=y}a%4!==0&&(a+=4-a%4),r[s(2583)](f)}return a}function Ff(e,x,t,a){const r=o;let n=Vt(x,e,t),s=n[r(4056)],u=n[r(2812)],c=0,f=x[r(3757)](c+u,!0);c+=Uint32Array.BYTES_PER_ELEMENT;let l=a[r(2604)];for(let m=0;m<f;m++){a[r(1544)]===3&&(x[r(3757)](c+u,!0),c+=Uint32Array[r(3955)]);let h=Le(x,u,s,c),C=h[r(4039)];c=h[r(828)];let p=c%4;p!==0&&(c+=4-p);let _=x[r(3757)](c+u,!0);c+=Int32Array[r(3955)];let y={vertexAttributes:[],attrLocation:{},instanceCount:0,instanceMode:0,instanceIndex:-1};if(a[r(1544)]===3)switch(_){case $n.Standard:_=ct[r(3217)];break;case $n[r(2155)]:_=ct.SV_DracoCompressed;break;case $n.MeshOpt:_=ct.SV_Compressed}if(_===ct[r(3217)]){c=wf(s,x,u,c,y,a);let A,b=[];c=rs(s,x,u,c,b,a),b[r(3650)]===2&&b[1][r(2391)]===13&&b[1].indicesCount>=3&&(A=Lx.createEdgeDataByIndices(y,b[1])),l[C]={vertexPackage:y,arrIndexPackage:b,edgeGeometry:A}}else if(_===ct[r(3e3)]&&a[r(1544)]!==3){c=Df(s,x,u,c,y);let A,b=[];c=rs(s,x,u,c,b,a),b[r(3650)]===2&&b[1][r(2391)]===13&&b[1][r(1520)]>=3&&(A=Lx[r(2758)](y,b[1])),l[C]={vertexPackage:y,arrIndexPackage:b,edgeGeometry:A}}else _===ct.SV_DracoCompressed?c=If(s,x,u,c,y,a,C):_===ct.SV_Compressed&&a.version===3&&(c=Lf(s,e,x,c,t,y,0,l,C));if(a.version===3){let A=new Cesium[r(516)];A.x=x[r(1623)](c+u,!0),c+=Float64Array[r(3955)],A.y=x[r(1623)](c+u,!0),c+=Float64Array.BYTES_PER_ELEMENT,A.z=x[r(1623)](c+u,!0),c+=Float64Array[r(3955)];let b=new Cesium[r(516)];b.x=x[r(1623)](c+u,!0),c+=Float64Array[r(3955)],b.y=x[r(1623)](c+u,!0),c+=Float64Array[r(3955)],b.z=x[r(1623)](c+u,!0),c+=Float64Array[r(3955)];let B=new Cesium.Cartesian3;B.x=x[r(1623)](c+u,!0),c+=Float64Array[r(3955)],B.y=x[r(1623)](c+u,!0),c+=Float64Array[r(3955)],B.z=x[r(1623)](c+u,!0),c+=Float64Array[r(3955)];let T=new Cesium[r(516)];T.x=x[r(1623)](c+u,!0),c+=Float64Array[r(3955)],T.y=x[r(1623)](c+u,!0),c+=Float64Array[r(3955)],T.z=x[r(1623)](c+u,!0),c+=Float64Array[r(3955)]}}return a.version!==3&&(n=Vt(x,e,c+u)),n[r(2471)]}function Of(e,x){const t=o;let a=Cesium[t(3868)][t(524)];return a=e===0?x===De[t(2598)]||x===De[t(3315)]?Cesium.PixelFormat[t(2598)]:x===De[t(3896)]?Cesium[t(3868)].LUMINANCE_ALPHA:Cesium[t(3868)][t(4092)]:x===De[t(2598)]||x===De[t(3315)]?Cesium[t(3868)][t(524)]:Cesium.PixelFormat.RGBA_DXT5,a}function Nf(e,x,t,a){const r=o;let n=Vt(x,e,t),s=n[r(4056)];t=n[r(2812)];var u=0;let c=x[r(3757)](u+t,!0);u+=Uint32Array.BYTES_PER_ELEMENT;for(let f=0;f<c;f++){let l=Le(x,t,s,u),m=l[r(4039)],h=(u=l[r(828)])%4;h!==0&&(u+=4-h),x[r(3757)](u+t,!0),u+=Uint32Array[r(3955)];let C=x[r(3757)](u+t,!0);u+=Uint32Array.BYTES_PER_ELEMENT;let p=x[r(3757)](u+t,!0);u+=Uint32Array[r(3955)];let _=x[r(3757)](u+t,!0);u+=Uint32Array[r(3955)];let y=x[r(3757)](u+t,!0);u+=Uint32Array[r(3955)];let A=x[r(3757)](u+t,!0);u+=Uint32Array.BYTES_PER_ELEMENT;let b=s[r(1238)](u,u+y);u+=y;let B=Of(_,A);a[m]={id:m,width:C,height:p,compressType:_,nFormat:A,internalFormat:B,arrayBufferView:b}}return n[r(2471)]}function Vf(e,x,t,a){const r=o;let n=x[r(3757)](t,!0);t+=Uint32Array[r(3955)];let s=new Uint8Array(e,t,n),u=Cesium[r(607)](s);return t+=n,a[r(1854)]=JSON[r(2010)](u),t}function Uf(e,x,t,a,r,n){const s=o;let u=Vt(x,e,t),c=u.buffer,f=0;if(t=u[s(2812)],(1&a)==1){let l=x[s(3757)](f+t,!0);f+=Uint32Array[s(3955)];for(let m=0;m<l;m++){let h=Le(x,t,c,f),C=h[s(4039)];f=h.bytesOffset;let p=x[s(3757)](f+t,!0);f+=Uint32Array[s(3955)];let _={};if(r[C].pickInfo=_,r[C][s(1741)][s(2369)]==-1){let y=new Float32Array(r[C].vertexPackage[s(4041)]);for(let A=0;A<p;A++){let b=x.getUint32(f+t,!0);f+=Uint32Array[s(3955)];let B=x.getUint32(f+t,!0);f+=Uint32Array.BYTES_PER_ELEMENT;let T=0,M=0;_[b]={batchId:A};for(let w=0;w<B;w++)M=x[s(3757)](f+t,!0),f+=Uint32Array[s(3955)],T=x.getUint32(f+t,!0),f+=Uint32Array[s(3955)],y[s(2663)](A,M,M+T);_[b][s(3806)]=M,_[b][s(2418)]=T}os(r[C][s(1741)],y,void 0)}else{let y=r[C].vertexPackage[s(3008)];r[C][s(1741)][s(4159)],r[C].vertexPackage[s(1891)];let A=new Float32Array(y),b=0;for(let B=0;B<p;B++){let T=x[s(3757)](f+t,!0);f+=Uint32Array[s(3955)];let M=x[s(3757)](f+t,!0);f+=Uint32Array[s(3955)];for(let w=0;w<M;w++){let I=x[s(3757)](f+t,!0);f+=Uint32Array[s(3955)],A[b]=b,_[T]===void 0&&(_[T]={vertexColorCount:1,instanceIds:[],vertexColorOffset:b}),_[T][s(2464)].push(I),b++,n===3&&(x[s(3757)](f+t,!0),f+=Uint32Array.BYTES_PER_ELEMENT)}}os(r[C][s(1741)],A,1)}}}}function os(e,x,t){const a=o;let r=e[a(666)],n=e[a(3257)],s=r[a(3650)];n[a(t===1?1306:740)]=s,r[a(2583)]({index:s,typedArray:x,componentsPerAttribute:1,componentDatatype:Cesium[a(549)].FLOAT,offsetInBytes:0,strideInBytes:0,instanceDivisor:t})}new Cesium[o(1911)],Qn[o(3232)]=function(e){const x=o;let t=0,a={version:void 0,groupNode:void 0,geoPackage:{},materials:void 0,texturePackage:{}},r=new DataView(e);a[x(1544)]=r[x(867)](t,!0),t+=Float32Array.BYTES_PER_ELEMENT;let n=0;a[x(1544)]>=3&&(n=r.getUint32(t,!0),t+=Uint32Array[x(3955)]),a[x(1544)]>=2&&(r.getUint32(t,!0),t+=Uint32Array[x(3955)]);let s=r[x(3757)](t,!0);t+=Uint32Array[x(3955)];let u,c=new Uint8Array(e,t,s);a[x(1544)]>=3&&n===0?u=c.buffer:(u=yf(e,t),t=0),r=new DataView(u);let f=r[x(3757)](t,!0);return t+=Uint32Array[x(3955)],t=Tf(u,r,t,a),t=Ff(u,r,t,a),t=Nf(u,r,t,a[x(2056)]),t=Vf(u,r,t,a),a[x(1544)]===3&&(f=r[x(3757)](t,!0),t+=Uint32Array[x(3955)]),(f&Qo.SVO_HasInstSelInfo)==Qo[x(1645)]&&Uf(u,r,t,f,a[x(2604)],a[x(1544)]),a};const Gf={Distance:0,Pixel:1,GeometryError:2};var ut=Object[o(921)](Gf);function Hf(e,x,t,a){const r=o;let n=t.getUint32(a,!0);a+=Uint32Array[r(3955)];let s=0,u={},c=u[r(666)]=[],f=u[r(3257)]={};u.instanceCount=0,u.instanceMode=0;let l=0;t[r(3757)](a,!0),a+=Uint32Array[r(3955)];let m=t[r(2561)](a,!0);a+=Uint32Array[r(3955)];let h=m;m>4&&(h=m>>8,m&=15);let C=t[r(3757)](a,!0);if(a+=Uint32Array[r(3955)],C>0){let I=t[r(2561)](a,!0);I=m*Float32Array.BYTES_PER_ELEMENT,a+=Uint32Array[r(3955)],s=C*I,f[r(1303)]=l,c[r(2583)]({index:f.aPosition,typedArray:x[r(1238)](a,a+s),componentsPerAttribute:m,componentDatatype:Cesium[r(549)].FLOAT,offsetInBytes:0,strideInBytes:I,normalize:!1}),l++,a+=s}let p=t[r(3757)](a,!0);if(a+=Uint32Array[r(3955)],p>0){let I=t.getUint16(a,!0);I=h*Float32Array.BYTES_PER_ELEMENT,a+=Uint32Array.BYTES_PER_ELEMENT,s=p*I,f[r(782)]=l,c[r(2583)]({index:f.aNormal,typedArray:x.subarray(a,a+s),componentsPerAttribute:h,componentDatatype:Cesium[r(549)][r(3148)],offsetInBytes:0,strideInBytes:I,normalize:!1}),l++,a+=s}let _=t[r(3757)](a,!0);if(a+=Uint32Array[r(3955)],_>0){let I=new Uint8Array(4*_),P=t[r(3757)](a,!0);P=4*Float32Array.BYTES_PER_ELEMENT,a+=Uint32Array.BYTES_PER_ELEMENT,s=_*P;let V=new Float32Array(x[r(4056)],a,4*C);for(let q=0;q<C;q++)I[4*q]=255*V[4*q],I[4*q+1]=255*V[4*q+1],I[4*q+2]=255*V[4*q+2],I[4*q+3]=255*V[4*q+3];a+=s,f[r(3299)]=l,c[r(2583)]({index:f[r(3299)],typedArray:I,componentsPerAttribute:4,componentDatatype:Cesium.ComponentDatatype[r(3860)],offsetInBytes:0,strideInBytes:4,normalize:!0}),l++}let y=t.getUint32(a,!0);a+=Uint32Array[r(3955)],y>0&&(s=16*y,a+=s);let A=t.getUint32(a,!0);a+=Uint32Array[r(3955)];let b,B,T=-1;for(let I=0;I<A;I++){b=t.getUint32(a,!0),a+=Uint32Array.BYTES_PER_ELEMENT,B=t[r(2561)](a,!0),a+=Uint16Array[r(3955)],t[r(2561)](a,!0),a+=Uint16Array[r(3955)],s=b*B*Float32Array[r(3955)];let P=x[r(1238)](a,a+s);if(T!==-1||B!==20&&B!==35)if(T!==-1)u[r(689)]=new Float32Array(x.buffer,a,b*B);else{let V=r(656)+I;f[V]=l++,c[r(2583)]({index:f[V],typedArray:P,componentsPerAttribute:B,componentDatatype:Cesium[r(549)].FLOAT,offsetInBytes:0,strideInBytes:B*Float32Array[r(3955)],normalize:!1})}else{let V;T=I,u[r(3008)]=b,u[r(1891)]=B,u[r(4159)]=P,B===20?(V=20*Float32Array[r(3955)],f[r(3070)]=l++,c[r(2583)]({index:f[r(3070)],componentsPerAttribute:4,componentDatatype:Cesium.ComponentDatatype[r(3148)],normalize:!1,offsetInBytes:0,strideInBytes:V,instanceDivisor:1}),f[r(1199)]=l++,c[r(2583)]({index:f.uv3,componentsPerAttribute:4,componentDatatype:Cesium.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:4*Float32Array.BYTES_PER_ELEMENT,strideInBytes:V,instanceDivisor:1}),f.uv4=l++,c[r(2583)]({index:f[r(3636)],componentsPerAttribute:4,componentDatatype:Cesium.ComponentDatatype[r(3148)],normalize:!1,offsetInBytes:8*Float32Array[r(3955)],strideInBytes:V,instanceDivisor:1}),f[r(3749)]=l++,c.push({index:f[r(3749)],componentsPerAttribute:4,componentDatatype:Cesium[r(549)].FLOAT,normalize:!1,offsetInBytes:12*Float32Array[r(3955)],strideInBytes:V,instanceDivisor:1}),f.uv6=l++,c[r(2583)]({index:f[r(2312)],componentsPerAttribute:4,componentDatatype:Cesium[r(549)].FLOAT,normalize:!1,offsetInBytes:16*Float32Array[r(3955)],strideInBytes:V,instanceDivisor:1})):B===35&&(V=35*Float32Array[r(3955)],f[r(3255)]=l++,c.push({index:f[r(3255)],componentsPerAttribute:4,componentDatatype:Cesium[r(549)][r(3148)],normalize:!1,offsetInBytes:0,strideInBytes:V,instanceDivisor:1,byteLength:s}),f.uv2=l++,c.push({index:f[r(3070)],componentsPerAttribute:4,componentDatatype:Cesium.ComponentDatatype[r(3148)],normalize:!1,offsetInBytes:4*Float32Array[r(3955)],strideInBytes:V,instanceDivisor:1}),f[r(1199)]=l++,c[r(2583)]({index:f.uv3,componentsPerAttribute:4,componentDatatype:Cesium[r(549)][r(3148)],normalize:!1,offsetInBytes:8*Float32Array[r(3955)],strideInBytes:V,instanceDivisor:1}),f[r(3636)]=l++,c[r(2583)]({index:f[r(3636)],componentsPerAttribute:4,componentDatatype:Cesium.ComponentDatatype[r(3148)],normalize:!1,offsetInBytes:12*Float32Array[r(3955)],strideInBytes:V,instanceDivisor:1}),f.uv5=l++,c[r(2583)]({index:f[r(871)],componentsPerAttribute:4,componentDatatype:Cesium[r(549)].FLOAT,normalize:!1,offsetInBytes:16*Float32Array[r(3955)],strideInBytes:V,instanceDivisor:1}),f[r(2312)]=l++,c.push({index:f[r(2312)],componentsPerAttribute:4,componentDatatype:Cesium[r(549)][r(3148)],normalize:!1,offsetInBytes:20*Float32Array.BYTES_PER_ELEMENT,strideInBytes:V,instanceDivisor:1}),f[r(2510)]=l++,c[r(2583)]({index:f.uv7,componentsPerAttribute:3,componentDatatype:Cesium[r(549)][r(3148)],normalize:!1,offsetInBytes:24*Float32Array[r(3955)],strideInBytes:V,instanceDivisor:1}),f.secondary_colour=l++,c[r(2583)]({index:f[r(3749)],componentsPerAttribute:4,componentDatatype:Cesium[r(549)][r(3148)],normalize:!1,offsetInBytes:27*Float32Array[r(3955)],strideInBytes:V,instanceDivisor:1}),f[r(4154)]=l++,c[r(2583)]({index:f[r(4154)],componentsPerAttribute:4,componentDatatype:Cesium[r(549)][r(3148)],normalize:!1,offsetInBytes:31*Float32Array.BYTES_PER_ELEMENT,strideInBytes:V,instanceDivisor:1}))}a+=s}u.verticesCount=C,u[r(2369)]=T;let M=t[r(3757)](a,!0);a+=Uint32Array[r(3955)];let w=[];for(let I=0;I<M;I++){let P={},V=t[r(3757)](a,!0);a+=Uint32Array[r(3955)];let q=t[r(3341)](a,!0);a+=Uint8Array[r(3955)],t[r(3341)](a,!0),a+=Uint8Array[r(3955)];let X=t[r(3341)](a,!0);a+=Uint8Array.BYTES_PER_ELEMENT,a+=1,P[r(1520)]=V,P[r(2202)]=q,P.primitiveType=X;let H=a;V>0&&(q===0?(s=V*Uint16Array.BYTES_PER_ELEMENT,a+=s,V%2==1&&(a+=2)):(s=4*V,a+=s)),P[r(3296)]=x[r(1238)](H,H+s);let z=t[r(3757)](a,!0);a+=Uint32Array.BYTES_PER_ELEMENT;let u0=t.getUint32(a,!0);a+=Uint32Array[r(3955)]*z,P.materialCode=u0,w[r(2583)](P)}return e[n]={vertexPackage:u,arrIndexPackage:w},a}function ss(e,x,t){const a=o;let r=e[a(666)],n=e[a(3257)],s=r[a(3650)];n[t===1?"instanceId":"batchId"]=s,r[a(2583)]({index:s,typedArray:x,componentsPerAttribute:1,componentDatatype:Cesium[a(549)][a(3148)],offsetInBytes:0,strideInBytes:0,instanceDivisor:t})}function zf(e,x,t){const a=o;let r=J[a(2185)](e)[a(2246)],n=r.namespaceURI;t[a(2245)]=[];let s=J.queryFirstNode(r,a(1825),n),u=J[a(1271)](s,a(2245),n);for(let l=0,m=u[a(3650)];l<m;l++){let h={},C=u[l];h.id=J.queryStringValue(C,a(3085),n);let p=J[a(3250)](C,a(1327),n),_=Cesium[a(820)](J.queryNumericValue(p,a(1989),n),1),y=Cesium.defaultValue(J[a(1980)](p,"AmbientG",n),1),A=Cesium.defaultValue(J[a(1980)](p,a(863),n),1),b=Cesium[a(820)](J.queryNumericValue(p,"AmbientA",n),1);h[a(2076)]={r:_,g:y,b:A,a:b};let B=J[a(3250)](C,a(619),n);_=Cesium[a(820)](J[a(1980)](B,a(2400),n),1),y=Cesium.defaultValue(J.queryNumericValue(B,"DiffuseG",n),1),A=Cesium.defaultValue(J.queryNumericValue(B,"DiffuseB",n),1),b=Cesium.defaultValue(J[a(1980)](B,a(2919),n),1),h.diffuse={r:_,g:y,b:A,a:b};let T=J[a(3250)](C,a(519),n);_=Cesium[a(820)](J[a(1980)](T,a(1662),n),0),y=Cesium[a(820)](J.queryNumericValue(T,"SpecularG",n),0),A=Cesium.defaultValue(J[a(1980)](T,"SpecularB",n),0),b=Cesium[a(820)](J[a(1980)](T,a(2754),n),0),h[a(3262)]={r:_,g:y,b:A,a:b},h[a(1494)]=J[a(1980)](C,"Shininess",n),h[a(2182)]=J[a(3365)](C,a(557),n),h[a(2108)]=[];let M=J[a(1271)](C,a(2238),n);for(let w=0;w<M[a(3650)];w++){let I={},P=M[w],V=J.queryStringValue(P,a(3085),n);J.queryStringValue(P,a(4048),n);let q=J.queryFirstNode(P,a(493),n),X=J[a(987)](q,"u",n)==="TAM_WRAP"?0:1,H=a(4184)===J[a(987)](q,"v",n)?0:1,z=J.queryStringValue(P,a(2112),n)[a(1830)](","),u0=16;for(;u0--;)z[u0]=parseFloat(z[u0]);I.addressmode={u:X,v:H,w:0},I[a(2782)]=538976288,I[a(887)]=2,I[a(1601)]=2,I.id=V,I.texmodmatrix=z,I[a(2547)]="",h.textureunitstates[a(2583)]({textureunitstate:I})}t[a(2245)].push({material:h})}let c=J[a(3250)](r,a(1633),n),f=J[a(1271)](c,a(3703),n);if(x[a(3768)]=[],f[a(3650)]>0)for(let l=0,m=f[a(3650)];l<m;l++){let h=f[l],C=J[a(987)](h,a(4049),n);C=C?C[a(960)](/.osgb$/,a(3111)):"";let p=J[a(987)](h,a(3956),n),_=J[a(1980)](h,"RangeList",n),y=J[a(3250)](h,a(1475),n),A={boundingSphere:{center:{x:J.queryNumericValue(y,"x",n),y:J[a(1980)](y,"y",n),z:J[a(1980)](y,"z",n)},radius:J[a(1980)](y,a(1707),n)},childTile:C,geodes:[],rangeList:_,rangeMode:a(3773)===p?ut[a(812)]:ut[a(1424)]};A[a(2083)]=[];let b=J[a(1271)](h,a(1634),n);for(let B=0;B<b[a(3650)];B++){let T={},M=b[B],w=J[a(987)](M,"GeoDeModMatrix",n)[a(1830)](",");for(let P=0;P<16;P++)w[P]=parseFloat(w[P]);T[a(2951)]=w;let I=J[a(1271)](M,a(1820));T[a(3004)]=[];for(let P=0;P<I[a(3650)];P++){let V=I[P][a(3512)][a(728)]();T.skeletonNames.push(V)}A[a(2083)][a(2583)](T)}x[a(3768)][a(2583)](A)}else{let l=J.queryChildNodes(c,a(1634),n);if(l[a(3650)]>0){let m={boundingSphere:{center:{x:0,y:0,z:0},radius:6378137},childTile:"",geodes:[],rangeList:0,rangeMode:ut[a(1424)]};for(let h=0,C=l[a(3650)];h<C;h++){let p={},_=l[h],y=J.queryStringValue(_,a(1867),n)[a(1830)](",");for(let b=0;b<16;b++)y[b]=parseFloat(y[b]);p[a(2951)]=y;let A=J[a(1271)](_,a(1820),n);p[a(3004)]=[];for(let b=0;b<A.length;b++){let B=A[b][a(3512)][a(728)]();p[a(3004)][a(2583)](B)}m.geodes[a(2583)](p)}x[a(3768)][a(2583)](m)}}return x}function Kf(e,x){let t=new Uint8Array(e,x);return N2.inflate(t).buffer}function xr(){}xr.parseBuffer=function(e){const x=o;let t=0,a={groupNode:{},geoPackage:{},materials:{},texturePackage:{},version:1},r=new Uint8Array(e,0,4);if(r[0]!==115||r[1]!==51||r[2]!==109)return{result:!1};let n=r[3];t+=4;let s=Kf(e,t),u=new Uint8Array(s),c=new DataView(s);t=0;let f=c.getUint32(t,!0);t+=Uint32Array[x(3955)];let l=new Uint8Array(s,t,f),m=f%4;m&&(m=4-m),t+=f+m,zf(Cesium[x(607)](l,void 0,void 0,x(2314)),a.groupNode,a.materials),c.getUint32(t,!0),t+=Uint32Array[x(3955)];let h=c[x(3757)](t,!0);t+=Uint32Array[x(3955)];let C=a[x(2604)];for(let A=0;A<h;A++)t=Hf(C,u,c,t);c[x(3757)](t,!0),t+=Uint32Array.BYTES_PER_ELEMENT;let p=c[x(3757)](t,!0);t+=Uint32Array[x(3955)];for(let A=0;A<p;A++){let b=c.getUint32(t,!0);t+=Uint32Array[x(3955)];let B=c.getUint32(t,!0);t+=Uint32Array[x(3955)];let T={};if(C[b][x(1741)].instanceIndex===-1){let M=new Float32Array(C[b][x(1741)].verticesCount);for(let w=0;w<B;w++){let I=c.getUint32(t,!0);t+=Uint32Array[x(3955)];let P=c[x(3757)](t,!0);t+=Uint32Array.BYTES_PER_ELEMENT;let V=0,q=0;T[I]=[];for(let X=0;X<P;X++){if(q=c[x(3757)](t,!0),t+=Uint32Array.BYTES_PER_ELEMENT,V=c.getUint32(t,!0),t+=Uint32Array[x(3955)],M[x(2663)])M[x(2663)](w,q,q+V);else{let H=q+q;for(let z=q;z<H;z++)M[z]=w}T[I][x(2583)]({vertexColorOffset:q,vertexColorCount:V,batchId:w})}}ss(C[b][x(1741)],M,void 0)}else{let M=C[b][x(1741)][x(3008)];C[b].vertexPackage[x(4159)],C[b][x(1741)][x(1891)];let w=new Float32Array(M),I=0;for(let P=0;P<B;P++){let V=c[x(3757)](t,!0);t+=Uint32Array[x(3955)];let q=c.getUint32(t,!0);t+=Uint32Array[x(3955)],T[V]=[];for(let X=0;X<q;X++){let H=c[x(3757)](t,!0);t+=Uint32Array[x(3955)],w[I]=I,T[V]===void 0&&(T[V]=[{vertexColorCount:1,instanceIds:[],vertexColorOffset:I}]),T[V][x(2464)][x(2583)](H),I++}}ss(C[b][x(1741)],w,1)}C[b][x(1095)]=T}c.getUint32(t,!0),t+=Uint32Array.BYTES_PER_ELEMENT;let _=c[x(3757)](t,!0);t+=Uint32Array[x(3955)];let y={};for(let A=0;A<_;A++){let b=c[x(3757)](t,!0);t+=Uint32Array[x(3955)];let B=c[x(3757)](t,!0);t+=Uint32Array[x(3955)];let T=c[x(3757)](t,!0);t+=Uint32Array.BYTES_PER_ELEMENT;let M=c[x(3757)](t,!0);t+=Uint32Array[x(3955)];let w=c[x(3757)](t,!0);t+=Uint32Array[x(3955)];let I=c[x(3757)](t,!0);t+=Uint32Array.BYTES_PER_ELEMENT;let P=I===De.RGB||I===De[x(3315)]?Cesium[x(3868)].RGB_DXT1:Cesium.PixelFormat[x(915)],V=new Uint8Array(s,t,w);y[b]={id:b,width:B,height:T,compressType:M,nFormat:I,arrayBufferView:V,internalFormat:P},t+=w}return a.version=n,a[x(2056)]=y,a};const kf={SV_Unkown:0,SV_Standard:1,SV_Compressed:2,SV_DracoCompressed:3};var Ut=Object[o(921)](kf);const Wf={Standard:0,Draco:1,MeshOpt:2};var er=Object[o(921)](Wf);function tr(){}let cs={SVO_HasInstSelInfo:1};function us(e,x,t){const a=o;let r=x[a(3757)](t,!0);t+=Uint32Array[a(3955)];let n=new Uint8Array(e,t,r);return{string:Cesium[a(607)](n),bytesOffset:t+=r}}function Xf(e){const x=o;let t=e.indexOf(x(2480));if(t===-1)return e;let a=e[x(2629)](t,e[x(3650)]);return e.replace(a,"")}function Gt(e,x,t){const a=o;let r=t,n=e[a(3757)](r,!0);r+=Uint32Array.BYTES_PER_ELEMENT;let s=r,u=new Uint8Array(x,r,n);return r+=n*Uint8Array[a(3955)],{dataViewByteOffset:s,byteOffset:r,buffer:u}}function p2(e,x,t,a){const r=o;let n=e[r(3757)](a+x,!0);a+=Uint32Array[r(3955)];let s=t[r(1238)](a,a+n);return{string:Cesium[r(607)](s),bytesOffset:a+=n}}function jf(e,x,t){const a=o;if(Cesium[a(1680)][a(692)](a(1024),e),Cesium.defined(x)&&Cesium[a(1680)][a(1556)][a(1232)](a(4050),x),Cesium[a(692)](t)&&Cesium[a(1680)][a(1556)][a(1232)]("end",t),a(1355)==typeof e[a(3403)])return e[a(3403)](x,t);let r=Array[a(3096)][a(3403)][a(798)](e,x,t),n=Cesium[a(2540)][a(1324)],s=n[a(3650)];for(let u=0;u<s;++u)if(e instanceof n[u]){r=new n[u](r);break}return r}function qf(e,x,t,a,r){const n=o;let s={},u=[],c=new Array(16);for(let m=0;m<16;m++)c[m]=x[n(1623)](t+a,!0),t+=Float64Array[n(3955)];let f=e;s[n(2951)]=c,s[n(3004)]=u;let l=x[n(3757)](t+a,!0);t+=Uint32Array.BYTES_PER_ELEMENT;for(let m=0;m<l;m++){let h=p2(x,a,f,t);u.push(h[n(4039)]),t=h[n(828)]}return r.push(s),t}function Yf(e,x,t,a,r,n){const s=o;let u={};u[s(4157)]=x[s(867)](t+a,!0),t+=Float32Array.BYTES_PER_ELEMENT,u.rangeMode=x[s(2561)](t+a,!0),t+=Uint16Array[s(3955)];let c={};c.x=x[s(1623)](t+a,!0),t+=Float64Array[s(3955)],c.y=x.getFloat64(t+a,!0),t+=Float64Array[s(3955)],c.z=x[s(1623)](t+a,!0),t+=Float64Array[s(3955)];let f=x.getFloat64(t+a,!0);if(t+=Float64Array[s(3955)],u[s(2215)]={center:c,radius:f},n[s(1544)]===3){let _=new Cesium.Cartesian3;_.x=x[s(1623)](t+a,!0),t+=Float64Array[s(3955)],_.y=x.getFloat64(t+a,!0),t+=Float64Array[s(3955)],_.z=x[s(1623)](t+a,!0),t+=Float64Array[s(3955)];let y=new Cesium[s(516)];y.x=x[s(1623)](t+a,!0),t+=Float64Array[s(3955)],y.y=x.getFloat64(t+a,!0),t+=Float64Array[s(3955)],y.z=x.getFloat64(t+a,!0),t+=Float64Array.BYTES_PER_ELEMENT;let A=new Cesium[s(516)];A.x=x[s(1623)](t+a,!0),t+=Float64Array[s(3955)],A.y=x[s(1623)](t+a,!0),t+=Float64Array[s(3955)],A.z=x.getFloat64(t+a,!0),t+=Float64Array[s(3955)];let b=new Cesium[s(516)];b.x=x[s(1623)](t+a,!0),t+=Float64Array[s(3955)],b.y=x[s(1623)](t+a,!0),t+=Float64Array[s(3955)],b.z=x.getFloat64(t+a,!0),t+=Float64Array[s(3955)],u[s(2446)]={xExtent:y,yExtent:A,zExtent:b,obbCenter:_}}let l=e,m=p2(x,a,l,t),h=m.string;t=m.bytesOffset;let C=h[s(3019)]("Geometry");if(C!==-1){let _=h[s(2629)](C);h=h[s(960)](_,"")}u.childTile=h,u[s(2083)]=[];let p=x[s(3757)](t+a,!0);t+=Uint32Array[s(3955)];for(let _=0;_<p;_++)t=qf(e,x,t,a,u.geodes);return r[s(2583)](u),n[s(1544)]===3&&(m=p2(x,a,l,t),t=m[s(828)]),t}function Jf(e,x,t,a){const r=o;let n={},s=[],u=0,c=Gt(x,e,t),f=c[r(4056)],l=c[r(2471)];t=c[r(2812)];let m=x[r(3757)](u+t,!0);u+=Uint32Array[r(3955)];for(let C=0;C<m;C++)u=Yf(f,x,u,t,s,a);n.pageLods=s;let h=l%4;return h!==0&&(l+=4-h),a[r(1446)]=n,l}function ls(e,x,t,a,r){const n=o;let s=x[n(3757)](t+a,!0);if(r.verticesCount=s,a+=Uint32Array.BYTES_PER_ELEMENT,s<=0)return a;let u=x[n(2561)](t+a,!0);a+=Uint16Array.BYTES_PER_ELEMENT;let c=x[n(2561)](t+a,!0);c=u*Float32Array[n(3955)],a+=Uint16Array.BYTES_PER_ELEMENT;let f=s*u*Float32Array.BYTES_PER_ELEMENT,l=e[n(1238)](a,a+f);a+=f;let m=r[n(666)],h=r[n(3257)];return h[n(1303)]=m[n(3650)],m[n(2583)]({index:h[n(1303)],typedArray:l,componentsPerAttribute:u,componentDatatype:Cesium[n(549)][n(3148)],offsetInBytes:0,strideInBytes:c,normalize:!1}),a}function fs(e,x,t,a,r){const n=o;let s=x.getUint32(t+a,!0);if(a+=Uint32Array[n(3955)],s<=0)return a;let u=x[n(2561)](t+a,!0);a+=Uint16Array[n(3955)];let c=x[n(2561)](t+a,!0);a+=Uint16Array[n(3955)];let f=s*u*Float32Array.BYTES_PER_ELEMENT,l=e[n(1238)](a,a+f);a+=f;let m=r[n(666)],h=r.attrLocation;return h[n(782)]=m.length,m[n(2583)]({index:h[n(782)],typedArray:l,componentsPerAttribute:u,componentDatatype:Cesium[n(549)][n(3148)],offsetInBytes:0,strideInBytes:c,normalize:!1}),a}function ds(e,x,t,a,r){const n=o;let s=x[n(3757)](t+a,!0);a+=Uint32Array[n(3955)];let u,c=r[n(4041)];if(s>0){x[n(2561)](t+a,!0),a+=Uint16Array[n(3955)],a+=2*Uint8Array[n(3955)];let m=s*Uint8Array[n(3955)]*4;u=jf(e,a,a+m),a+=m}else{u=new Uint8Array(4*c);for(let m=0;m<c;m++)u[4*m]=255,u[4*m+1]=255,u[4*m+2]=255,u[4*m+3]=255}let f=r.vertexAttributes,l=r[n(3257)];return l[n(3299)]=f.length,f[n(2583)]({index:l[n(3299)],typedArray:u,componentsPerAttribute:4,componentDatatype:Cesium[n(549)][n(3860)],offsetInBytes:0,strideInBytes:4,normalize:!0}),r[n(556)]=u,a}function ms(e,x,t,a,r){const n=o;let s=x[n(3757)](t+a,!0);if(a+=Uint32Array[n(3955)],s<=0)return a;x[n(2561)](t+a,!0),a+=Uint16Array[n(3955)],a+=2*Uint8Array.BYTES_PER_ELEMENT;let u=s*Uint8Array.BYTES_PER_ELEMENT*4,c=e[n(1238)](a,a+u);a+=u;let f=r[n(666)],l=r[n(3257)];return l[n(2766)]=f[n(3650)],f[n(2583)]({index:l[n(2766)],typedArray:c,componentsPerAttribute:4,componentDatatype:Cesium[n(549)][n(3860)],offsetInBytes:0,strideInBytes:4,normalize:!0}),a}function hs(e,x,t,a,r){const n=o;let s=x[n(2561)](t+a,!0);a+=Uint16Array[n(3955)],a+=Uint16Array[n(3955)];for(let u=0;u<s;u++){let c=x[n(3757)](t+a,!0);a+=Uint32Array[n(3955)];let f=x.getUint16(t+a,!0);a+=Uint16Array[n(3955)],x[n(2561)](t+a,!0),a+=Uint16Array[n(3955)];let l=c*f*Float32Array.BYTES_PER_ELEMENT,m=e[n(1238)](a,a+l);a+=l;let h="aTexCoord"+u,C=r[n(666)],p=r[n(3257)];p[h]=C[n(3650)],C[n(2583)]({index:p[h],typedArray:m,componentsPerAttribute:f,componentDatatype:Cesium[n(549)][n(3148)],offsetInBytes:0,strideInBytes:f*Float32Array[n(3955)],normalize:!1})}return a}function Cs(e,x,t,a,r){const n=o;let s=x[n(2561)](t+a,!0);a+=Uint16Array[n(3955)],a+=Uint16Array[n(3955)];let u=r[n(666)],c=r.attrLocation;for(let f=0;f<s;f++){let l=x[n(3757)](t+a,!0);a+=Uint32Array[n(3955)];let m=x[n(2561)](t+a,!0);a+=Uint16Array[n(3955)],x[n(2561)](t+a,!0),a+=Uint16Array[n(3955)];let h=l*m*Float32Array[n(3955)];if(m===17||m===29){let C=e[n(1238)](a,a+h);r[n(3008)]=l,r[n(1891)]=m,r[n(4159)]=C,r.instanceIndex=1;let p,_=m*l*4,y=C[n(3403)](0,_);r[n(1831)]=y,m===17?(p=17*Float32Array[n(3955)],c[n(3070)]=u[n(3650)],u[n(2583)]({index:c[n(3070)],componentsPerAttribute:4,componentDatatype:Cesium[n(549)][n(3148)],normalize:!1,offsetInBytes:0,strideInBytes:p,instanceDivisor:1}),c.uv3=u[n(3650)],u.push({index:c[n(1199)],componentsPerAttribute:4,componentDatatype:Cesium[n(549)][n(3148)],normalize:!1,offsetInBytes:4*Float32Array.BYTES_PER_ELEMENT,strideInBytes:p,instanceDivisor:1}),c[n(3636)]=u.length,u.push({index:c[n(3636)],componentsPerAttribute:4,componentDatatype:Cesium.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:8*Float32Array[n(3955)],strideInBytes:p,instanceDivisor:1}),c.secondary_colour=u[n(3650)],u.push({index:c[n(3749)],componentsPerAttribute:4,componentDatatype:Cesium[n(549)].FLOAT,normalize:!1,offsetInBytes:12*Float32Array[n(3955)],strideInBytes:p,instanceDivisor:1}),c[n(2312)]=u[n(3650)],u[n(2583)]({index:c[n(2312)],componentsPerAttribute:4,componentDatatype:Cesium[n(549)][n(3860)],normalize:!0,offsetInBytes:16*Float32Array[n(3955)],strideInBytes:p,instanceDivisor:1})):m===29&&(p=29*Float32Array.BYTES_PER_ELEMENT,c[n(3255)]=u[n(3650)],u[n(2583)]({index:c.uv1,componentsPerAttribute:4,componentDatatype:Cesium.ComponentDatatype[n(3148)],normalize:!1,offsetInBytes:0,strideInBytes:p,instanceDivisor:1,byteLength:h}),c[n(3070)]=u[n(3650)],u.push({index:c.uv2,componentsPerAttribute:4,componentDatatype:Cesium[n(549)].FLOAT,normalize:!1,offsetInBytes:4*Float32Array[n(3955)],strideInBytes:p,instanceDivisor:1}),c[n(1199)]=u.length,u[n(2583)]({index:c[n(1199)],componentsPerAttribute:4,componentDatatype:Cesium[n(549)].FLOAT,normalize:!1,offsetInBytes:8*Float32Array[n(3955)],strideInBytes:p,instanceDivisor:1}),c[n(3636)]=u.length,u.push({index:c[n(3636)],componentsPerAttribute:4,componentDatatype:Cesium[n(549)][n(3148)],normalize:!1,offsetInBytes:12*Float32Array.BYTES_PER_ELEMENT,strideInBytes:p,instanceDivisor:1}),c[n(871)]=u[n(3650)],u[n(2583)]({index:c[n(871)],componentsPerAttribute:4,componentDatatype:Cesium.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:16*Float32Array[n(3955)],strideInBytes:p,instanceDivisor:1}),c[n(2312)]=u[n(3650)],u[n(2583)]({index:c[n(2312)],componentsPerAttribute:4,componentDatatype:Cesium[n(549)][n(3148)],normalize:!1,offsetInBytes:20*Float32Array[n(3955)],strideInBytes:p,instanceDivisor:1}),c.uv7=u.length,u[n(2583)]({index:c.uv7,componentsPerAttribute:3,componentDatatype:Cesium[n(549)].FLOAT,normalize:!1,offsetInBytes:24*Float32Array[n(3955)],strideInBytes:p,instanceDivisor:1}),c[n(3749)]=u[n(3650)],u.push({index:c[n(3749)],componentsPerAttribute:4,componentDatatype:Cesium[n(549)][n(3860)],normalize:!0,offsetInBytes:27*Float32Array[n(3955)],strideInBytes:p,instanceDivisor:1}),c[n(4154)]=u[n(3650)],u[n(2583)]({index:c[n(4154)],componentsPerAttribute:4,componentDatatype:Cesium[n(549)][n(3860)],normalize:!0,offsetInBytes:28*Float32Array[n(3955)],strideInBytes:p,instanceDivisor:1}))}else{let C=l*m;r[n(689)]=new Float32Array(C);for(let p=0;p<C;p++)r[n(689)][p]=x[n(867)](a+p*Float32Array[n(3955)],!0)}a+=h}return a}function Zf(e,x,t,a,r){const n=o;let s=x[n(3757)](t+a,!0);if(r[n(4041)]=s,(a+=Uint32Array.BYTES_PER_ELEMENT)<=0)return a;let u=x[n(2561)](t+a,!0);a+=Uint16Array.BYTES_PER_ELEMENT;let c=x[n(2561)](t+a,!0);c=u*Int16Array[n(3955)],a+=Uint16Array[n(3955)];let f=x.getFloat32(t+a,!0);a+=Float32Array.BYTES_PER_ELEMENT;let l={};l.x=x[n(867)](t+a,!0),a+=Float32Array.BYTES_PER_ELEMENT,l.y=x.getFloat32(t+a,!0),a+=Float32Array[n(3955)],l.z=x[n(867)](t+a,!0),a+=Float32Array[n(3955)],l.w=x.getFloat32(t+a,!0),a+=Float32Array[n(3955)],r[n(1341)]=f,r.minVerticesValue=l;let m=s*u*Int16Array[n(3955)],h=e[n(1238)](a,a+m);a+=m;let C=r[n(666)],p=r[n(3257)];return p.aPosition=C.length,C.push({index:p[n(1303)],typedArray:h,componentsPerAttribute:u,componentDatatype:Cesium[n(549)][n(613)],offsetInBytes:0,strideInBytes:c,normalize:!1}),a}function Qf(e,x,t,a,r){const n=o;let s=x[n(3757)](t+a,!0);if(a+=Uint32Array[n(3955)],s<=0)return a;x[n(2561)](t+a,!0),a+=Uint16Array.BYTES_PER_ELEMENT;let u=x[n(2561)](t+a,!0);a+=Uint16Array.BYTES_PER_ELEMENT;let c=2*s*Int16Array[n(3955)],f=e[n(1238)](a,a+c);a+=c;let l=r[n(666)],m=r[n(3257)];return m[n(782)]=l[n(3650)],l[n(2583)]({index:m[n(782)],typedArray:f,componentsPerAttribute:2,componentDatatype:Cesium.ComponentDatatype[n(613)],offsetInBytes:0,strideInBytes:u,normalize:!1}),a}function $f(e,x,t,a,r){const n=o;r[n(2222)]=[],r.minTexCoordValue=[];let s=x.getUint16(t+a,!0);a+=Uint16Array[n(3955)],a+=Uint16Array.BYTES_PER_ELEMENT;for(let u=0;u<s;u++){let c=x[n(3341)](t+a,!0);a+=Uint8Array[n(3955)],a+=3*Uint8Array.BYTES_PER_ELEMENT;let f=x[n(3757)](t+a,!0);a+=Uint32Array[n(3955)];let l=x.getUint16(t+a,!0);a+=Uint16Array[n(3955)],x[n(2561)](t+a,!0),a+=Uint16Array[n(3955)];let m=x[n(867)](t+a,!0);a+=Float32Array[n(3955)],r[n(2222)][n(2583)](m);let h={};h.x=x[n(867)](t+a,!0),a+=Float32Array[n(3955)],h.y=x.getFloat32(t+a,!0),a+=Float32Array[n(3955)],h.z=x[n(867)](t+a,!0),a+=Float32Array[n(3955)],h.w=x[n(867)](t+a,!0),a+=Float32Array[n(3955)],r[n(3582)][n(2583)](h);let C=f*l*Int16Array[n(3955)],p=e[n(1238)](a,a+C),_=(a+=C)%4;_!==0&&(a+=4-_);let y=n(656)+u,A=r[n(666)],b=r.attrLocation;if(b[y]=A[n(3650)],A[n(2583)]({index:b[y],typedArray:p,componentsPerAttribute:l,componentDatatype:Cesium[n(549)][n(613)],offsetInBytes:0,strideInBytes:l*Int16Array[n(3955)],normalize:!1}),c){C=f*Float32Array[n(3955)];let B=e[n(1238)](a,a+C);a+=C,r[n(3584)]=!0,y=n(590)+u,b[y]=A.length,A[n(2583)]({index:b[y],typedArray:B,componentsPerAttribute:1,componentDatatype:Cesium[n(549)][n(3148)],offsetInBytes:0,strideInBytes:Float32Array[n(3955)],normalize:!1})}}return a}function xd(e,x,t,a,r,n){const s=o;if(n[s(1544)]===3&&(x[s(3757)](a,!0),a+=Uint32Array[s(3955)]),a=ds(e,x,t,a=fs(e,x,t,a=ls(e,x,t,a,r),r),r),n[s(1544)]!==3&&(a=ms(e,x,t,a,r)),a=Cs(e,x,t,a=hs(e,x,t,a,r),r),n[s(1544)]===3&&(a=id(e,x,t,a,r)[s(3034)]),n[s(1544)]==3){let u=p2(x,t,e,a);a=u[s(828)],r[s(825)]=JSON[s(2010)](u.string);let c="aCustom"+r[s(825)][s(1939)],f=s(1720)+r[s(825)].VertexWeight,l="aCustom"+r.customVertexAttribute[s(1428)];Cesium[s(692)](r[s(3257)][c])&&(r.attrLocation[s(1683)]=r[s(3257)][c],delete r.attrLocation[c]),Cesium[s(692)](r.attrLocation[f])&&(r.attrLocation[s(3718)]=r.attrLocation[f],delete r.attrLocation[f]),Cesium.defined(r[s(3257)][l])&&(r[s(3257)].aVertexWeight_1=r[s(3257)][l],delete r[s(3257)][l]);let m=Object[s(3360)](r[s(3257)]),h=m[s(3650)];for(let p=0;p<h;++p){let _=m[p];_[s(3019)](s(1720))!==-1&&delete r[s(3257)][_]}let C=(t+a)%4;C&&(C=4-C),a+=C}return n[s(1544)]===3&&(a=(n=ed(e,x,t,a))[s(828)]),a}function ed(e,x,t,a,r){const n=o;let s=x[n(3757)](t+a,!0);if(a+=Uint32Array[n(3955)],s<=0)return{bytesOffset:a};let u=x.getUint16(t+a,!0);return a+=Uint16Array[n(3955)],x[n(2561)](t+a,!0),a+=Uint16Array[n(3955)],{bytesOffset:a+=s*u*Float32Array[n(3955)]}}const td={0:Uint32Array[o(3955)],1:Float32Array[o(3955)],2:Float64Array[o(3955)]};function id(e,x,t,a,r){const n=o;let s=x.getUint32(t+a,!0);a+=Uint32Array[n(3955)];for(let u=0;u<s;u++){let c=x[n(3757)](t+a,!0);a+=Uint32Array[n(3955)];let f=x[n(2561)](t+a,!0);a+=Uint16Array[n(3955)];let l=x.getUint16(t+a,!0);a+=Uint16Array[n(3955)];let m=c*f*td[l],h=e[n(1238)](a,a+m);a+=m;let C=r[n(666)],p=r[n(3257)],_=n(1720)+u;p[_]=C[n(3650)],C[n(2583)]({index:p[_],typedArray:h,componentsPerAttribute:f,componentDatatype:Cesium[n(549)][n(3148)],offsetInBytes:0,strideInBytes:0,normalize:!1})}return{bufferByteOffset:a}}function ad(e,x,t,a,r,n){const s=o;let u=x[s(3757)](t+a,!0);return r[s(2326)]=u,a+=Uint32Array[s(3955)],a=(u&cx[s(3515)])===cx[s(3515)]?Zf(e,x,t,a,r):ls(e,x,t,a,r),a=ms(e,x,t,a=ds(e,x,t,a=(u&cx[s(3155)])===cx[s(3155)]?Qf(e,x,t,a,r):fs(e,x,t,a,r),r),r),a=(u&cx[s(753)])===cx[s(753)]?$f(e,x,t,a,r):hs(e,x,t,a,r),(u&cx[s(2135)])===cx.SVC_TexutreCoordIsW&&(r.textureCoordIsW=!0),a=Cs(e,x,t,a,r)}function nd(e,x,t,a,r,n,s,u,c){const f=o;let l=Gt(t,x,r).dataViewByteOffset,m=t[f(3757)](a+l,!0);a+=Uint32Array[f(3955)];let h,C=t[f(3757)](a+l,!0);a+=Uint32Array[f(3955)],n.minVerticesValue=new Cesium[f(2756)],n[f(3582)]=[new Cesium[f(2351)],new Cesium[f(2351)]],n.texCoordCompressConstant=[new Cesium[f(516)],new Cesium[f(516)]];let p,_=[];for(let y=0;y<C;y++){let A=t[f(3757)](a+l,!0);a+=Uint32Array[f(3955)],n.vertCompressConstant=t.getFloat32(a+l,!0),a+=Float32Array[f(3955)],n[f(3160)].x=t[f(1623)](a+l,!0),a+=Float64Array[f(3955)],n[f(3160)].y=t[f(1623)](a+l,!0),a+=Float64Array[f(3955)],n[f(3160)].z=t[f(1623)](a+l,!0),a+=Float64Array[f(3955)];let b=t.getFloat64(a+l,!0);a+=Float64Array[f(3955)];let B=t[f(1623)](a+l,!0);a+=Float64Array.BYTES_PER_ELEMENT;let T=t[f(1623)](a+l,!0);a+=Float64Array.BYTES_PER_ELEMENT;let M=t[f(1623)](a+l,!0);a+=Float64Array[f(3955)];let w=t.getFloat64(a+l,!0);a+=Float64Array[f(3955)];let I=t[f(1623)](a+l,!0);a+=Float64Array.BYTES_PER_ELEMENT;let P=t[f(1623)](a+l,!0);a+=Float64Array.BYTES_PER_ELEMENT;let V=t.getFloat64(a+l,!0);a+=Float64Array.BYTES_PER_ELEMENT,n.minTexCoordValue[0].x=T,n.minTexCoordValue[0].y=M,n.minTexCoordValue[1].x=P,n.minTexCoordValue[1].y=V,n[f(2222)][0].x=b,n[f(2222)][0].y=B,n[f(2222)][1].x=w,n.texCoordCompressConstant[1].y=I;let q=t[f(3367)](a+l,!0);a+=Int32Array.BYTES_PER_ELEMENT;let X=new Object;for(let y0=0;y0<q;y0++){let f0=t[f(3367)](a+l,!0);a+=Int32Array[f(3955)];let v=f0,T0=0;v!=Sx[f(1534)]&&v!=Sx.AttributeType_Custom1||(T0=t[f(3367)](a+l,!0),a+=Int32Array[f(3955)]);let F0=t[f(3367)](a+l,!0);a+=Int32Array[f(3955)];let O0=new Uint8Array(t.buffer,a+l,F0),w0=((a+=Uint8Array[f(3955)]*F0)+l)%4;w0&&(w0=4-w0),a+=w0,Zn(A,v,T0,O0,n,m,p,![],X,h)}let H=p2(t,l,e,a);a=H[f(828)],n[f(825)]=JSON[f(2010)](H[f(4039)]);let z=f(1720)+n[f(825)][f(1939)],u0=f(1720)+n[f(825)][f(756)],n0="aCustom"+n[f(825)].VertexWeight_1;Cesium.defined(n[f(3257)][z])&&(n[f(3257)][f(1683)]=n[f(3257)][z],y===C-1&&delete n[f(3257)][z]),Cesium[f(692)](n[f(3257)][u0])&&(n[f(3257)].aVertexWeight=n[f(3257)][u0],y===C-1&&delete n.attrLocation[u0]),Cesium.defined(n.attrLocation[n0])&&(n.attrLocation.aVertexWeight_1=n[f(3257)][n0],y===C-1&&delete n.attrLocation[n0]);let N=Object[f(3360)](n[f(3257)]),Y=N[f(3650)];for(let y0=0;y0<Y;++y0){let f0=N[y0];f0[f(3019)](f(1720))!==-1&&delete n.attrLocation[f0]}let W=(a+l)%4;W&&(W=4-W),a+=W;let x0=t[f(3367)](a+l,!0);a+=Int32Array[f(3955)];for(let y0=0;y0<x0;y0++){let f0={},v=t.getInt32(a+l,!0);if(a+=Int32Array[f(3955)],v>0){let T0=t[f(3825)](a+l,!0);a+=Int8Array[f(3955)],t[f(3825)](a+l,!0),a+=Int8Array[f(3955)];let F0=t.getInt8(a+l,!0);a+=Int8Array[f(3955)],t[f(3825)](a+l,!0),a+=Int8Array.BYTES_PER_ELEMENT;let O0,w0=t.getInt32(a+l,!0);a+=Int32Array[f(3955)],F0!==13?(O0=new Uint8Array(t[f(4056)],a+l,w0),a+=Uint8Array.BYTES_PER_ELEMENT*w0):(O0=new Uint32Array(t[f(4056)],a+l,w0),a+=Uint32Array[f(3955)]*w0);let U0,xx=(a+l)%4;xx&&(xx=4-xx),a+=xx,F0!==13?(U0=Cesium[f(549)][f(3433)](Cesium.ComponentDatatype[f(3860)],v*Uint32Array[f(3955)]),Jn.decodeIndexBuffer(U0,v,Uint32Array[f(3955)],O0)):U0=O0;let W0,j0=t[f(3367)](a+l,!0);a+=Int32Array[f(3955)],f0[f(2202)]=T0,T0===0?W0=new Uint16Array(v):T0===1&&(W0=new Uint32Array(v)),f0[f(1520)]=v;let tx=new Uint32Array(U0[f(4056)],U0.byteOffset,U0.byteLength/4);W0[f(2590)](tx,0),f0[f(3296)]=W0,f0.primitiveType=F0;for(let ix=0;ix<j0;ix++){let ax=p2(t,l,e,a),H0=ax[f(4039)];a=ax[f(828)],f0[f(3834)]=H0}if(_[f(3650)]>0&&F0!==13){let ix=n[f(3327)];f0[f(3296)]=tx[f(3317)](function(ax){return ax+ix}),f0[f(2202)]=1}_[f(2583)](f0);let v0=(a+l)%4;v0&&(v0=4-v0),a+=v0}}}return n[f(2326)]=m,u[c]={vertexPackage:n,arrIndexPackage:_,edgeGeometry:void 0,cartographicBounds:void 0},a}function bs(e,x,t,a,r,n){const s=o;let u=x[s(3757)](a+t,!0);a+=Uint32Array[s(3955)];for(let c=0;c<u;c++){let f={};n[s(1544)]===3&&(x[s(3757)](a+t,!0),a+=Uint32Array[s(3955)]);let l=x.getUint32(a+t,!0);a+=Uint32Array[s(3955)];let m=x.getUint8(a+t,!0);a+=Uint8Array[s(3955)],x[s(3341)](a+t,!0),a+=Uint8Array[s(3955)];let h=x[s(3341)](a+t,!0);if(a+=Uint8Array.BYTES_PER_ELEMENT,a+=Uint8Array[s(3955)],l>0){let p,_=null;m===1||m===3?(p=l*Uint32Array[s(3955)],_=e.subarray(a,a+p)):(p=l*Uint16Array[s(3955)],_=e[s(1238)](a,a+p),l%2!=0&&(p+=2)),f[s(3296)]=_,a+=p}f[s(1520)]=l,f[s(2202)]=m,f.primitiveType=h;let C=x[s(3757)](a+t,!0);a+=Uint32Array[s(3955)];for(let p=0;p<C;p++){let _=p2(x,t,e,a),y=_[s(4039)];a=_.bytesOffset,f.materialCode=y}a%4!==0&&(a+=4-a%4),r[s(2583)](f)}return a}function rd(e,x,t,a){const r=o;let n=Gt(x,e,t),s=n[r(4056)],u=n.dataViewByteOffset,c=0,f=x[r(3757)](c+u,!0);c+=Uint32Array[r(3955)];let l=a.geoPackage;for(let m=0;m<f;m++){a.version===3&&(x.getUint32(c+u,!0),c+=Uint32Array[r(3955)]);let h=p2(x,u,s,c),C=h[r(4039)];c=h.bytesOffset;let p=c%4;p!==0&&(c+=4-p);let _=x[r(3757)](c+u,!0);c+=Int32Array[r(3955)];let y={vertexAttributes:[],attrLocation:{},instanceCount:0,instanceMode:0,instanceIndex:-1};if(a[r(1544)]===3)switch(_){case er[r(630)]:_=Ut[r(3217)];break;case er[r(1977)]:_=Ut[r(3e3)]}if(_===Ut[r(3217)]){c=xd(s,x,u,c,y,a);let A,b=[];c=bs(s,x,u,c,b,a),b[r(3650)]===2&&b[1][r(2391)]===13&&b[1][r(1520)]>=3&&(A=Lx[r(2758)](y,b[1])),l[C]={vertexPackage:y,arrIndexPackage:b,edgeGeometry:A}}else if(_===Ut[r(3e3)]&&a[r(1544)]!==3){c=ad(s,x,u,c,y);let A,b=[];c=bs(s,x,u,c,b,a),b[r(3650)]===2&&b[1][r(2391)]===13&&b[1][r(1520)]>=3&&(A=Lx[r(2758)](y,b[1])),l[C]={vertexPackage:y,arrIndexPackage:b,edgeGeometry:A}}else _===Ut[r(3e3)]&&a[r(1544)]===3&&(window._vertexCompressionType="MESHOPT",c=nd(s,e,x,c,t,y,0,l,C));if(a.version===3){let A=new Cesium.Cartesian3;A.x=x[r(1623)](c+u,!0),c+=Float64Array[r(3955)],A.y=x[r(1623)](c+u,!0),c+=Float64Array[r(3955)],A.z=x[r(1623)](c+u,!0),c+=Float64Array.BYTES_PER_ELEMENT;let b=new Cesium.Cartesian3;b.x=x[r(1623)](c+u,!0),c+=Float64Array[r(3955)],b.y=x[r(1623)](c+u,!0),c+=Float64Array[r(3955)],b.z=x[r(1623)](c+u,!0),c+=Float64Array[r(3955)];let B=new Cesium[r(516)];B.x=x[r(1623)](c+u,!0),c+=Float64Array.BYTES_PER_ELEMENT,B.y=x[r(1623)](c+u,!0),c+=Float64Array[r(3955)],B.z=x[r(1623)](c+u,!0),c+=Float64Array[r(3955)];let T=new Cesium.Cartesian3;T.x=x[r(1623)](c+u,!0),c+=Float64Array[r(3955)],T.y=x[r(1623)](c+u,!0),c+=Float64Array.BYTES_PER_ELEMENT,T.z=x[r(1623)](c+u,!0),c+=Float64Array[r(3955)]}}return a.version!==3&&(n=Gt(x,e,c+u)),n.byteOffset}function od(e,x,t,a){const r=o;let n=t.length;for(let s=0;s<n;s++){let u=t[s],c=u[r(3439)][r(1830)]("_")[0],f=u[r(699)];for(let l=0;l<f[r(3650)];l++){let m=f[l],h=m[r(553)],C=m[r(858)],p=m[r(2081)],_=m[r(4124)],y=x[h].vertexPackage[r(4041)],A=a[h];Cesium[r(692)](A)||(A=a[h]={});let b=A[_];Cesium[r(692)](b)||(b=A[_]=new Float32Array(y),b[r(2663)](-1));let B=Cesium[r(692)](e)?e[c]:s;b[r(2663)](B,C,C+p)}}}function sd(e,x,t){const a=o;let r=e[a(666)],n=e.attrLocation,s=r[a(3650)];n[a(2920)+t]=s,r[a(2583)]({index:s,typedArray:x,componentsPerAttribute:1,componentDatatype:Cesium[a(549)][a(3148)],offsetInBytes:0,strideInBytes:0})}function cd(e,x,t,a,r){const n=o;let s=Gt(x,e,t),u=s[n(4056)],c=t=s[n(2812)],f=x[n(3757)](c,!0);c+=Uint32Array[n(3955)];let l={};for(let m=0;m<f;m++){let h=x.getUint32(c,!0);c+=Uint32Array[n(3955)];let C=Cesium.getStringFromTypedArray(u,c-t,h);c+=h;let p=c%4;p!==0&&(c+=4-p),x[n(3757)](c,!0),c+=Uint32Array[n(3955)];let _=x[n(3341)](c,!0);c+=Uint8Array[n(3955)];let y=x[n(3757)](c,!0);c+=Uint32Array[n(3955)];let A=x[n(3757)](c,!0);c+=Uint32Array[n(3955)];let b=x[n(3757)](c,!0);c+=Uint32Array[n(3955)];let B=x[n(3757)](c,!0);c+=Uint32Array[n(3955)];let T,M=x[n(3757)](c,!0);if(c+=Uint32Array.BYTES_PER_ELEMENT,a&&_){let n0=c-t;T=u[n(1238)](n0,n0+B),c+=B}let w=x.getUint32(c,!0);c+=Uint32Array.BYTES_PER_ELEMENT;for(let n0=0;n0<w;n0++){h=x.getUint32(c,!0),c+=Uint32Array.BYTES_PER_ELEMENT;let N=Cesium[n(607)](u,c-t,h);c+=h,r[n(3003)][N]=C}let I=x[n(3757)](c,!0);c+=Uint32Array.BYTES_PER_ELEMENT;let P=[];for(let n0=0;n0<I;n0++){h=x.getUint32(c,!0),c+=Uint32Array[n(3955)];let N=Cesium.getStringFromTypedArray(u,c-t,h);c+=h,P[n(2583)](N)}let V=x[n(3757)](c,!0);c+=Uint32Array[n(3955)];let q,X=[],H=C;if(a)q=r.rootBatchIdMap[C]={};else{let n0=r[n(3003)][C];for(H=n0;Cesium[n(692)](n0)&&n0!==C;)H=n0,n0=r[n(3003)][n0];Cesium[n(692)](H)&&(q=r[n(3625)][H])}let z=0;for(let n0=0;n0<V;n0++){h=x.getUint32(c,!0),c+=Uint32Array[n(3955)];let N=Cesium[n(607)](u,c-t,h);if(c+=h,a){let T0=N.split("_")[0];Cesium.defined(q[T0])?z++:q[T0]=n0-z}let Y=x[n(3757)](c,!0);c+=Uint32Array[n(3955)];let W=x[n(3757)](c,!0);c+=Uint32Array[n(3955)];let x0=x.getUint32(c,!0);c+=Uint32Array[n(3955)];let y0=x[n(3757)](c,!0);c+=Uint32Array.BYTES_PER_ELEMENT;let f0=x[n(3757)](c,!0);c+=Uint32Array[n(3955)];let v=[];for(let T0=0;T0<f0;T0++){h=x[n(3757)](c,!0),c+=Uint32Array.BYTES_PER_ELEMENT;let F0=Cesium[n(607)](u,c-t,h);c+=h;let O0=x[n(3757)](c,!0);c+=Uint32Array.BYTES_PER_ELEMENT;let w0=x[n(3757)](c,!0);c+=Uint32Array[n(3955)];let U0=x.getUint32(c,!0);c+=Uint32Array[n(3955)],v.push({geoName:F0,offset:O0,count:w0,texUnitIndex:U0})}X[n(2583)]({subName:N,offsetX:Y,offsetY:W,width:x0,height:y0,subVertexOffsetArr:v})}od(q,r[n(2604)],X,l);let u0=!1;r[n(2056)][C]={id:C,rootTextureName:H,width:y,height:A,compressType:b,size:B,format:M,textureData:T,subTexInfos:X,requestNames:P,isDXT:u0}}for(let m in l)if(l[n(2364)](m)){let h=r[n(2604)][m][n(1741)],C=l[m];for(let p in C)C.hasOwnProperty(p)&&sd(h,C[p],p)}return s[n(2471)]}function ud(e,x,t,a){const r=o;let n=x[r(3757)](t,!0);t+=Uint32Array[r(3955)];let s=new Uint8Array(e,t,n),u=Cesium.getStringFromTypedArray(s);return t+=n,a.materials=JSON.parse(u),t}function ld(e,x,t,a,r,n){const s=o;let u=Gt(x,e,t),c=u.buffer,f=0;if(t=u[s(2812)],(1&a)==1){let l=x.getUint32(f+t,!0);f+=Uint32Array[s(3955)];for(let m=0;m<l;m++){let h=p2(x,t,c,f),C=h[s(4039)];f=h[s(828)];let p=x[s(3757)](f+t,!0);f+=Uint32Array.BYTES_PER_ELEMENT;let _={};if(r[C][s(1095)]=_,r[C][s(1741)][s(2369)]==-1){let y=new Float32Array(r[C][s(1741)][s(4041)]);for(let A=0;A<p;A++){let b=x.getUint32(f+t,!0);f+=Uint32Array[s(3955)];let B=x[s(3757)](f+t,!0);f+=Uint32Array.BYTES_PER_ELEMENT;let T=0,M=0;_[b]={batchId:A};for(let w=0;w<B;w++)M=x[s(3757)](f+t,!0),f+=Uint32Array[s(3955)],T=x.getUint32(f+t,!0),f+=Uint32Array[s(3955)],y[s(2663)](A,M,M+T);_[b][s(3806)]=M,_[b][s(2418)]=T}ps(r[C][s(1741)],y,void 0)}else{let y=r[C][s(1741)].instanceCount;r[C][s(1741)].instanceBuffer,r[C].vertexPackage[s(1891)];let A=new Float32Array(y),b=0;for(let B=0;B<p;B++){let T=x[s(3757)](f+t,!0);f+=Uint32Array[s(3955)];let M=x[s(3757)](f+t,!0);f+=Uint32Array[s(3955)];for(let w=0;w<M;w++){let I=x[s(3757)](f+t,!0);f+=Uint32Array.BYTES_PER_ELEMENT,A[b]=b,_[T]===void 0&&(_[T]={vertexColorCount:1,instanceIds:[],vertexColorOffset:b}),_[T].instanceIds.push(I),b++,n===3&&(x.getUint32(f+t,!0),f+=Uint32Array[s(3955)])}}ps(r[C][s(1741)],A,1)}}}return u[s(2471)]}function ps(e,x,t){const a=o;let r=e[a(666)],n=e[a(3257)],s=r[a(3650)];n[t===1?"instanceId":a(740)]=s,r[a(2583)]({index:s,typedArray:x,componentsPerAttribute:1,componentDatatype:Cesium[a(549)][a(3148)],offsetInBytes:0,strideInBytes:0,instanceDivisor:t})}new Cesium[o(1911)],tr[o(3232)]=function(e,x){const t=o;let a=x.rootBatchIdMap,r=x[t(3003)],n=0,s=new DataView(e);s[t(867)](n,!0),n+=Float32Array[t(3955)];let u=s.getUint32(n,!0);n+=Uint32Array.BYTES_PER_ELEMENT;let c={};for(;u--;){s=new DataView(e);let f=us(e,s,n),l=c[f.string]={groupNode:void 0,geoPackage:{},texturePackage:{},materials:{},rootBatchIdMap:a,ancestorMap:r,version:void 0};n=f[t(828)];let m=s[t(3757)](n,!0);n+=Uint32Array[t(3955)];for(let b=0;b<m;b++){let B={},T=s[t(867)](n,!0);n+=Float32Array[t(3955)];let M=s[t(2561)](n,!0);n+=Uint16Array[t(3955)],B.rangeMode=M,B[t(4157)]=T;let w={};w.x=s[t(1623)](n,!0),n+=Float64Array[t(3955)],w.y=s[t(1623)](n,!0),n+=Float64Array[t(3955)],w.z=s[t(1623)](n,!0),n+=Float64Array[t(3955)];let I=s.getFloat64(n,!0);n+=Float64Array[t(3955)],B[t(2215)]={center:w,radius:I};let P=us(e,s,n),V=P[t(4039)];n=P[t(828)],V=V[t(960)](/(\.s3mblock)|(\.s3mbz)|(\.s3mb)/gi,""),V=Xf(V),B[t(3775)]=V}let h=s.getFloat32(n,!0);l[t(1544)]=h,n+=Float32Array[t(3955)],h>=3&&(s[t(3757)](n,!0),n+=Uint32Array.BYTES_PER_ELEMENT),s[t(3757)](n,!0),n+=Uint32Array.BYTES_PER_ELEMENT;let C=s.getUint32(n,!0);n+=Uint32Array[t(3955)];let p=new Uint8Array(e,n,C),_=n+C,y=N2[t(2653)](p)[t(4056)];s=new DataView(y),n=0;let A=s[t(3757)](n,!0);n+=Uint32Array[t(3955)],n=Jf(y,s,n,l),n=rd(y,s,n,l),n=cd(y,s,n,x[t(3049)],l),n=ud(y,s,n,l),l[t(1544)]===3&&(A=s[t(3757)](n,!0),n+=Uint32Array[t(3955)]),(A&cs[t(1645)])==cs.SVO_HasInstSelInfo&&(n=ld(y,s,n,A,l[t(2604)],l[t(1544)])),n=_}return c};const ir=4369,fd=6410;function v2(e,x,t){const a=o;let r=e[a(1120)];this[a(2126)]=e.id,this[a(4040)]=x,this[a(3030)]=t.layerId,this[a(2647)]=t.rootName,this[a(716)]=e,this[a(2375)]=t[a(2375)],this[a(2388)]=t[a(2388)],this[a(3229)]=t[a(3229)],this[a(2796)]=t.internalFormat,this[a(3151)]=t[a(3151)],this[a(2132)]=t[a(2132)],this[a(2437)]=Cesium[a(820)](t[a(2437)],Cesium[a(587)][a(4024)]),this.wrapT=Cesium.defaultValue(t[a(3456)],Cesium[a(587)][a(4024)]),this[a(1620)]=r[a(1071)],this._texture=void 0,this[a(2041)]=1,this.ready=!t.isTexBlock,this.renderable=!t[a(3561)],this[a(3561)]=t.isTexBlock,this[a(2132)]&&this[a(1739)]()}function dd(e,x,t,a){const r=o;let n=e[r(3650)],s=t,u=a,c=0;for(;c+=Cesium[r(3868)][r(2591)](x,s,u),s>>=1,u>>=1,!(s===0&&u===0);)s=Math[r(2092)](s,1),u=Math[r(2092)](u,1);return c===n}function Ht(){const e=o;this[e(1434)]=new Cesium[e(1911)],this[e(1150)]=new Cesium[e(1911)],this[e(1086)]=new Cesium[e(1911)](0,0,0,0),this[e(1494)]=50,this[e(1294)]=!1,this.alphaMode=void 0,this.texMatrix=Cesium[e(2235)].clone(Cesium.Matrix4.IDENTITY,new Cesium[e(2235)]),this[e(3580)]=[]}v2[o(3096)].init=function(){const e=o;let x=this[e(716)][e(1120)];this[e(2115)]||(this._texture=x[e(2424)]()),x[e(462)](x[e(1071)],this[e(2115)]);let t=this[e(2796)];t!==fd&&t!==ir||x[e(2724)](x.UNPACK_FLIP_Y_WEBGL,!0);let a=0;if(this.arrayBufferView){let r=0,n=this[e(2375)],s=this[e(2388)],u=dd(this[e(2132)],t,n,s);do{let c=Cesium.PixelFormat[e(2591)](t,n,s),f=new Uint8Array(this[e(2132)].buffer,this.arrayBufferView.byteOffset+r,c);t===ir?x.texImage2D(x[e(1071)],a++,x.RGBA,n,s,0,x.RGBA,x[e(3860)],f):x[e(643)](x.TEXTURE_2D,a++,t,n,s,0,f),n=Math.max(n>>1,1),s=Math[e(2092)](s>>1,1),r+=c}while(r<this[e(2132)][e(3818)]&&u)}else{let r=Cesium[e(3868)][e(2591)](t,this.width,this[e(2388)]);t===ir?x[e(3429)](x[e(1071)],0,x[e(4092)],this[e(2865)],this.height,0,x[e(4092)],x.UNSIGNED_BYTE,new Uint8Array(this[e(2375)]*this[e(2388)]*4)):x[e(643)](x.TEXTURE_2D,0,t,this[e(2375)],this[e(2388)],0,new Uint8Array(r))}a>1?(x[e(691)](x[e(1071)],x[e(3040)],x[e(2191)]),x[e(691)](x[e(1071)],x.TEXTURE_MIN_FILTER,x[e(2374)])):(x.texParameteri(x[e(1071)],x[e(3040)],x[e(2191)]),x[e(691)](x[e(1071)],x[e(1151)],x.LINEAR)),x.texParameteri(x[e(1071)],x[e(1068)],this[e(2437)]),x[e(691)](x[e(1071)],x[e(1811)],this[e(3456)]),x[e(691)](this._target,this.context._textureFilterAnisotropic[e(1695)],1),x[e(462)](x[e(1071)],null),this.arrayBufferView=void 0,this[e(2266)]=!0},v2[o(3096)][o(3089)]=function(e){const x=o;let t=this[x(716)]._gl,a=this[x(1620)];t[x(623)](t[x(2492)]),t.bindTexture(a,this._texture);let r=e.xOffset,n=e.yOffset,s=e[x(2375)],u=e.height,c=e[x(2132)],f=this[x(2796)];t[x(3860)],t.pixelStorei(t[x(1264)],!1),t.pixelStorei(t[x(1330)],!1),t.compressedTexSubImage2D(a,0,r,n,s,u,f,c),t[x(462)](a,null)},v2[o(3096)].update=function(e){const x=o;this[x(716)]=e[x(716)],this[x(2126)]=e[x(716)].id,this[x(3030)]=e[x(3030)],this[x(2647)]=e.rootName,this[x(4040)]=e.textureId,this[x(2375)]=e[x(2375)],this[x(2388)]=e.height,this[x(2796)]=e.internalFormat,this.arrayBufferView=e[x(2132)],this[x(2041)]=1,this[x(2266)]=!1,this[x(2616)]=!1,defined(this[x(2132)])&&this.init()},v2[o(3096)][o(3777)]=function(){return!1},v2[o(3096)][o(3701)]=function(){const e=o;this.context._gl[e(2938)](this[e(2115)]),this[e(2115)]=null,this.id=0,Cesium[e(1136)](this)},Ht[o(3096)][o(3777)]=function(){return!1},Ht[o(3096)][o(3701)]=function(){const e=o;let x=this[e(3580)][e(3650)];for(let t=0;t<x;t++)this[e(3580)][t].destroy();return this[e(3580)][e(3650)]=0,this[e(1434)]=void 0,this[e(1150)]=void 0,this.specularColor=void 0,Cesium.destroyObject(this)},Ht[o(3096)][o(1021)]=function(e,x,t,a,r,n,s,u,c,f){const l=o;var m;if(c=defaultValue(c,!0),u?m=loadCRN(r[l(797)],!0,!0):S3MTaskManager.CRNTaskProcessorReady&&(m=loadCRNForS3M(S3MTaskManager[l(2219)],r[l(797)],!0)),defined(m)){var h=this;return m[l(4167)](function(C){const p=l;if(!h.isDestroyed()){f=defaultValue(f,{});var _=DDSTextureManager[p(2532)](e,t,r[p(2375)],r[p(2388)],r[p(781)],S3MCompressType.enrS3TCDXTN,C[p(3846)],!1,n,s,c);f.isEmissiveTex?h[p(2678)]=_:f[p(3450)]?h.normalTexture=_:a===0&&h[p(3508)].length>0?h[p(3508)][p(1805)](0,0,_):h[p(3508)][p(2583)](_)}}),m}};var vs=`
    attribute vec4 aPosition;
    attribute vec4 aColor;
    attribute vec3 aNormal;
#ifdef TexCoord
    attribute vec4 aTexCoord0;
    varying vec4 vTexCoord;
    uniform vec2 decodeTexCoord0Min;
#ifdef COMPUTE_TEXCOORD
    uniform float uTexture0Width;
    varying vec4 vTexCoordTransform;
    varying vec4 vTexMatrix;
#endif
#ifdef USE_TextureCoordMatrix
    attribute vec2 aTextureCoordMatrix;
#endif
#ifdef COMPRESS_VERTEX
    uniform vec4 decodePositionMin;
    uniform float decodePositionNormConstant;
#endif
#endif
#ifdef TexCoord2
    attribute vec4 aTexCoord1;
    uniform float uTexture1Width;
    varying vec4 vTexMatrix2;
#endif
// meshopt\u5224\u65AD
#ifdef MeshOPT_Compress
    uniform vec3 decodeTexCoord0vNormConstant;
    uniform vec3 decode_texCoord1_vNormConstant;
#else
    uniform float decode_texCoord0_normConstant;
    uniform float decode_texCoord1_normConstant;
#endif

#ifdef HYPSOMETRIC
    varying float wValue;    
#endif
#ifdef FLATTEN
    uniform sampler2D uFlattenTexture;
    uniform vec4 uFlattenRect;
#endif
    uniform mat4 uGeoMatrix;
    uniform mat4 uInverseGeoMatrix;
    uniform vec4 uSelectedColor;
    
    varying vec4 vSecondColor;
    varying vec4 vPositionMC;
    varying vec3 vPositionEC;
#ifdef VertexColor
    varying vec4 vColor;
#endif
    
    const float SHIFT_LEFT8 = 256.0;
    const float SHIFT_RIGHT8 = 1.0 / 256.0;
    const float SHIFT_RIGHT4 = 1.0 / 16.0;
    const float SHIFT_LEFT4 = 16.0;
    void getTextureMatrixFromZValue(in float nZ, inout float XTran, inout float YTran, inout float scale)
    {
        if(nZ <= 0.0)
        {
            return;
        }
        float nDel8 = floor(nZ * SHIFT_RIGHT8);
        float nDel16 = floor(nDel8 * SHIFT_RIGHT8);
        float nDel20 = floor(nDel16 * SHIFT_RIGHT4);
        YTran = nZ - nDel8 * SHIFT_LEFT8;
        XTran = nDel8 - nDel16 * SHIFT_LEFT8;
        float nLevel = nDel16 - nDel20 * SHIFT_LEFT4;
        scale = 1.0 / pow(2.0, nLevel);
    }
    
#ifdef FLATTEN
    float unpackValue(vec4 packedValue)
    {
        float SHIFT_LEFT16 = 65536.0;
        float SHIFT_LEFT8 = 256.0;
        vec4 value = packedValue * 255.0;
        return value.r * SHIFT_LEFT16 + value.g * SHIFT_LEFT8 + value.b - 9000.0;
    }
    vec4 calculateHeight(vec4 vertexPos)
    {
        vec4 vecPos = uGeoMatrix * vec4(vertexPos.xyz, 1.0);
        vec2 vecRatio = vec2(uFlattenRect.z - uFlattenRect.x, uFlattenRect.w - uFlattenRect.y);
        vec2 vecTexCoord = vec2(vecPos.x - uFlattenRect.x, vecPos.y - uFlattenRect.y);
        vecTexCoord.x = vecTexCoord.x / vecRatio.x;
        vecTexCoord.y = vecTexCoord.y / vecRatio.y;
        if(vecTexCoord.x > 1.0 || vecTexCoord.x < 0.0 || vecTexCoord.y > 1.0 || vecTexCoord.y < 0.0)
        {
            return vertexPos;
        }
        float fHeight = unpackValue(texture2D(uFlattenTexture, vecTexCoord.xy));
        fHeight = fHeight;
        if(vecPos.z > fHeight)
        {
            vecPos.z = fHeight;
            vecPos.w = vecPos.z;
        }
        return uInverseGeoMatrix * vec4(vecPos.xyz, 1.0);
    }
#endif

#ifdef EXCAVATION
    varying vec4 vExcavationVertexPos;
#endif

    void main()
    {

    #ifdef TexCoord
        vTexCoord.xy = aTexCoord0.xy;
    #ifdef COMPUTE_TEXCOORD
        vTexMatrix = vec4(0.0,0.0,1.0,0.0);
        vTexCoordTransform.x = aTexCoord0.z;
            #ifdef USE_TextureCoordMatrix
                vTexCoordTransform.x = aTextureCoordMatrix.x;
            #endif
        if(vTexCoordTransform.x < -90000.0)
        {
            vTexMatrix.z = -1.0;
        }
        getTextureMatrixFromZValue(floor(vTexCoordTransform.x), vTexMatrix.x, vTexMatrix.y, vTexMatrix.z);
        vTexMatrix.w = log2(uTexture0Width * vTexMatrix.z);

        #ifdef TexCoord2
            vTexCoord.zw = aTexCoord1.xy;
            vTexMatrix2 = vec4(0.0,0.0,1.0,0.0);
            vTexCoordTransform.y = aTexCoord1.z;
                #ifdef USE_TextureCoordMatrix
                    vTexCoordTransform.y = aTextureCoordMatrix.y;
                #endif
            if(vTexCoordTransform.y < -90000.0)
            {
                vTexMatrix2.z = -1.0;
            }
            getTextureMatrixFromZValue(floor(vTexCoordTransform.y), vTexMatrix2.x, vTexMatrix2.y, vTexMatrix2.z);
            vTexMatrix2.w = log2(uTexture1Width * vTexMatrix.z);
        #endif
    #endif
    #endif

    // meshopt\u538B\u7F29 \u8FD9\u91CC\u5BF9\u7167\u4E3B\u7248\u672C\u7684  \u4E3B\u7248\u672C\u547D\u540D\u7684\u90FD\u662F\u901A\u8FC7\u4E0B\u5212\u7EBF\uFF0C\u4F46\u662F\u63D2\u4EF6\u83B7\u53D6uniform\u662F\u901A\u8FC7\u51FD\u6570\uFF0C\u6240\u4EE5\u9700\u8981\u5927\u5199
    #ifdef MeshOPT_Compress
        vec2 texCoord0;
        texCoord0.x = aTexCoord0.x * decodeTexCoord0vNormConstant.x;
        texCoord0.y = aTexCoord0.y * decodeTexCoord0vNormConstant.y;
        vTexCoord.xy = decodeTexCoord0Min + texCoord0.xy;
    #endif

    #ifdef COMPRESS_VERTEX
        vec4 vertexPos = vec4(1.0);
        vertexPos = decodePositionMin + vec4(aPosition.xyz, 1.0) * decodePositionNormConstant;
    #else
        vec4 vertexPos = aPosition;
    #endif
#ifdef FLATTEN
    vertexPos = calculateHeight(vertexPos);
#endif
#ifdef EXCAVATION
    vExcavationVertexPos = uGeoMatrix * vec4(vertexPos.xyz, 1.0);
#endif
    vertexPos.w = 1.0;
    #ifdef HYPSOMETRIC
        wValue = vertexPos.w;
    #endif
        vec4 positionMC = vec4(vertexPos.xyz, 1.0);
#ifdef VertexColor
        vColor = aColor;
#endif
        vPositionMC = positionMC;
        vPositionEC = (czm_modelView * positionMC).xyz;
        gl_Position = czm_modelViewProjection * vec4(vertexPos.xyz, 1.0);
    }
`,As=`
#ifdef GL_OES_standard_derivatives
#extension GL_OES_standard_derivatives : enable
#endif
#ifdef GL_EXT_shader_texture_lod
#extension GL_EXT_shader_texture_lod : enable
#endif
    uniform vec4 uDiffuseColor;
    uniform vec4 uAmbientColor;
#ifdef TexCoord
    varying vec4 vTexCoord;
#ifdef COMPUTE_TEXCOORD
    uniform sampler2D uTexture;
    uniform float uTexture0Width;
    varying vec4 vTexCoordTransform;
    varying vec4 vTexMatrix;
#endif
#endif

#include <executeExcavation>
#ifdef VertexColor
    varying vec4 vColor;
#endif

#ifdef TexCoord2
    uniform sampler2D uTexture2;
    uniform float uTexture1Width;
    varying vec4 vTexMatrix2;
#endif 
    varying vec4 vSecondColor;
    varying vec4 vPositionMC;
    varying vec3 vPositionEC;
    void calculateMipLevel(in vec2 inTexCoord, in float vecTile, in float fMaxMip, inout float mipLevel)
    {
        vec2 dx = dFdx(inTexCoord * vecTile);
        vec2 dy = dFdy(inTexCoord * vecTile);
        float dotX = dot(dx, dx);
        float dotY = dot(dy, dy);
        float dMax = max(dotX, dotY);
        float dMin = min(dotX, dotY);
        float offset = (dMax - dMin) / (dMax + dMin);
        offset = clamp(offset, 0.0, 1.0);
        float d = dMax * (1.0 - offset) + dMin * offset;
        mipLevel = 0.5 * log2(d);
        mipLevel = clamp(mipLevel, 0.0, fMaxMip - 1.62);
    }

    void calculateMipLevel(in vec2 inTexCoord, in vec2 vecTile, in float fMaxMip, inout float mipLevel)
    {
        vec2 dx = dFdx(inTexCoord * vecTile.x);
        vec2 dy = dFdy(inTexCoord * vecTile.y);
        float dotX = dot(dx, dx);
        float dotY = dot(dy, dy);
        float dMax = max(dotX, dotY);
        float dMin = min(dotX, dotY);
        float offset = (dMax - dMin) / (dMax + dMin);
        offset = clamp(offset, 0.0, 1.0);
        float d = dMax * (1.0 - offset) + dMin * offset;
        mipLevel = 0.5 * log2(d);
        mipLevel = clamp(mipLevel, 0.0, fMaxMip - 1.62);
    }
    
    void calculateTexCoord(in vec3 inTexCoord, in float scale, in float XTran, in float YTran, in float fTile, in float mipLevel, inout vec2 outTexCoord)
    {
        if(inTexCoord.z < -9000.0)
        {
            outTexCoord = inTexCoord.xy;
        }
        else
        {
            vec2 fTexCoord = fract(inTexCoord.xy);
            float offset = 1.0 * pow(2.0, mipLevel) / fTile;
            fTexCoord = clamp(fTexCoord, offset, 1.0 - offset);
            outTexCoord.x = (fTexCoord.x + XTran) * scale;
            outTexCoord.y = (fTexCoord.y + YTran) * scale;
        }
    }
    
    vec4 getTexColorForS3M(sampler2D curTexture, vec3 oriTexCoord, float texTileWidth, float fMaxMipLev, float fTexCoordScale, vec2 vecTexCoordTranslate)
    {
        vec4 color = vec4(1.0);
        float mipLevel = 0.0;
    #ifdef GL_OES_standard_derivatives
        calculateMipLevel(oriTexCoord.xy, texTileWidth, fMaxMipLev, mipLevel);
    #endif
        vec2 realTexCoord;
        calculateTexCoord(oriTexCoord, fTexCoordScale, vecTexCoordTranslate.x, vecTexCoordTranslate.y, texTileWidth, mipLevel, realTexCoord);
        if(oriTexCoord.z < -9000.0)
        {
            color = texture2D(curTexture, realTexCoord.xy);
        }
        else
        {
            #ifdef GL_EXT_shader_texture_lod
                color = texture2DLodEXT(curTexture, realTexCoord.xy, mipLevel);
            #else
                color = texture2D(curTexture, realTexCoord.xy, mipLevel);
            #endif
        }
        return color;
    }
#ifdef COMPUTE_TEXCOORD
    vec4 getTextureColor()
    {
        if(vTexMatrix.z < 0.0)
        {
            return vec4(1.0);
        }
        float texTileWidth0 = vTexMatrix.z * uTexture0Width;
        vec3 realTexCoord = vec3(vTexCoord.xy, vTexCoordTransform.x);
        vec4 FColor = getTexColorForS3M(uTexture, realTexCoord, texTileWidth0, vTexMatrix.w, vTexMatrix.z, vTexMatrix.xy);
    #ifdef TexCoord2
        float texTileWidth1 = vTexMatrix2.z * uTexture1Width;
        realTexCoord = vec3(vTexCoord.zw, vTexCoordTransform.y);
        vec4 SColor = getTexColorForS3M(uTexture2, realTexCoord, texTileWidth1, vTexMatrix2.w, vTexMatrix2.z, vTexMatrix2.xy);
        SColor.r = clamp(SColor.r, 0.0, 1.0);
        SColor.g = clamp(SColor.g, 0.0, 1.0);
        SColor.b = clamp(SColor.b, 0.0, 1.0);
        return FColor * SColor;
    #else
        return FColor;
    #endif
    }
#endif
    
#ifdef CLIP
    uniform float uClipMode;
    uniform vec4 uClipPlanes[6];
    float getClipDistance(vec3 pos, vec3 planeNormal, float disToOrigin)
    {
        return dot(planeNormal, pos) + disToOrigin;
    }

    float clipBehindAllPlane(float fBorderWidth, vec4 vertex)
    {
        float distance = 0.0;
        float result = -1.0;
    #ifdef CLIPPLANE
        distance = getClipDistance(vertex.xyz, uClipPlanes[0].xyz, uClipPlanes[0].w);
        if (distance < 0.0)
        {
            return 1.0;
        }
        else if (distance < fBorderWidth)
        {
            result = 0.0;
        }
    #else
        for(int i = 0; i < 6; i++)
        {
            distance = getClipDistance(vertex.xyz, uClipPlanes[i].xyz, uClipPlanes[i].w);
            if(distance < 0.0)
            {
                return 1.0;
            }
            else if(distance < fBorderWidth)
            {
                result = 0.0;
            }
        }
    #endif
        return result;
    }

    float clipBehindAnyPlane(float fBorderWidth, vec4 vertex)
    {
        float result = 1.0;
        for(int i = 0; i < 6; i++)
        {
            float distance = getClipDistance(vertex.xyz, uClipPlanes[i].xyz, uClipPlanes[i].w);
            if((distance + fBorderWidth) < 0.0)
            {
                return -1.0;
            }
            else if(distance < 0.0)
            {
                result = 0.0;
            }
        }
        return result;
    }
    float clipAnythingButLine(float fBorderWidth, vec4 vertex)
    {
        float result = -1.0;
        for(int i = 0; i < 6; i++)
        {
            float distance = getClipDistance(vertex.xyz, uClipPlanes[i].xyz, uClipPlanes[i].w);
            if(distance < 0.0)
            {
                return -1.0;
            }
            else if(distance < fBorderWidth)
            {
                result = 0.0;
            }
        }
        return result;
    }
    vec4 clip(vec4 vertex)
    {
        if(uClipMode < 0.5)
        {
            return vec4(1.0);
        }
    #ifdef GL_OES_standard_derivatives
        float dxc = abs(dFdx(vertex.x));
        float dyc = abs(dFdy(vertex.y));
        float fBorderWidth = max(dxc, dyc);
    #else
        float fBorderWidth = 1.0;
    #endif
        float clipResult = 1.0;
        if(uClipMode < 1.5)
        {
            clipResult = clipBehindAnyPlane(fBorderWidth, vertex);
        }
        else if(uClipMode < 2.5)
        {
            clipResult = clipBehindAllPlane(fBorderWidth, vertex);
        }
        else if(uClipMode < 3.5)
        {
            clipResult = clipAnythingButLine(fBorderWidth, vertex);
        }
        if(clipResult < -0.5)
        {
            discard;
        }
        else if(clipResult < 0.5)
        {
            return vec4(1.0);
        }
        return vec4(1.0);
    }
#endif

#ifdef HYPSOMETRIC
    uniform sampler2D uHypsometricTexture;
    uniform vec4 uMinMaxValue;
    uniform vec4 uOpacityIntervalFillMode;
    uniform vec4 uHypLineColor;
    uniform vec4 uNoValueColor;
    varying float wValue;
    
    float computeMixCon(float fValue)
    {
        float distanceToContour;
        float minVisibleValue = uMinMaxValue.z;
        float maxVisibleValue = uMinMaxValue.w;
        float interval = uOpacityIntervalFillMode.y;
        if(abs(maxVisibleValue - minVisibleValue) > 0.1)
        {
            if(fValue < 0.5)
            {
                distanceToContour = mod(fValue - 0.0002, interval);
            }
            else
            {
                float t = floor(fValue / interval);
                distanceToContour = abs(fValue - (t * interval) - 0.1);
            }
        }
        else
        {
            distanceToContour = abs(fValue - maxVisibleValue);
        }
        float dxc = abs(dFdx(fValue));
        float dyc = abs(dFdy(fValue));
        float dF = max(dxc, dyc);
        return distanceToContour < dF ? 1.0 : 0.0;
    }
    
    vec4 computeContourMapColor(float fValue)
    {
        float floorValue = uMinMaxValue.x;
        float ceilValue = uMinMaxValue.y;
        float threshold = abs(ceilValue - floorValue);
        float contourRate = (fValue - floorValue) / threshold;
        float finalCoord = clamp(contourRate, 0.0, 1.0);
        float count = floor(finalCoord * 16.0);
        float y = (count*2.0 + 1.0)/32.0;
        float x = fract(finalCoord*16.0);
        if(y > 1.0)
        {
            x = 1.0;
        }
        vec2 contourCoord = vec2(x, y);
        return texture2D(uHypsometricTexture, contourCoord);
    }
    
    vec4 getContourMapColor(vec4 oriColor, float fValue)
    {
        vec4 contourMapColor = vec4(0.0);
        float finalOpacity = uOpacityIntervalFillMode.x;
        float minVisibleValue = uMinMaxValue.z;
        float maxVisibleValue = uMinMaxValue.w;
        float fillMode = uOpacityIntervalFillMode.z;
    
        if(fValue > maxVisibleValue + 4.0 || fValue < minVisibleValue - 4.0)
        {
            return uNoValueColor * oriColor;
        }
        
        if(fillMode > 2.9)
        {
            float mix_con = computeMixCon(fValue);
            contourMapColor = mix(computeContourMapColor(fValue), uHypLineColor, mix_con);
        }
        else if(fillMode > 1.9)
        {
            finalOpacity = computeMixCon(fValue);
            contourMapColor = uHypLineColor;
        }
        else if(fillMode > 0.9)
        {
            contourMapColor = computeContourMapColor(fValue);
        }
        else
        {
            finalOpacity = 0.0;
        }
        
        vec4 finalColor = mix(oriColor, contourMapColor, finalOpacity);
    #ifdef PT_CLOUD
        finalColor = mix(vec4(1.0,1.0,1.0,1.0), contourMapColor, finalOpacity);
    #endif
        return finalColor;
    }
#endif
  
#ifdef APPLY_SWIPE
    uniform vec4 uSwipeRegion;
    void rollerShutter(vec2 coord, vec4 region)
    {
        vec2 f = step(region.xw, coord);
        vec2 s = step(coord, region.zy);
        if (f.x * f.y * s.x * s.y < 1.0)
        {
            discard;
        }
    }
#endif
    
    void main()
    {
    #ifdef APPLY_SWIPE
        rollerShutter(gl_FragCoord.xy, uSwipeRegion);
    #endif
    vec4 baseColorWithAlpha = vec4(1.0);
    #ifdef VertexColor
        vec4 baseColorWithAlpha = vColor;
    #endif
    #ifdef COMPUTE_TEXCOORD
        baseColorWithAlpha *= getTextureColor();
    #endif    
        vec4 outColor = baseColorWithAlpha;
    #ifdef HYPSOMETRIC
        outColor = getContourMapColor(outColor, wValue);
    #endif
    #ifdef CLIP
        outColor *= clip(vec4(vPositionEC, 1.0));
    #endif
    #ifdef EXCAVATION
        if(executeExcavation())
            {
                discard;
            }
    #endif
        gl_FragColor = outColor;
        // gl_FragColor = vec4(1.0);
    }
`;function ba(){const e=o;this.context=void 0,this[e(3067)]=void 0,this.index=void 0}function pa(){const e=o;this[e(3067)]=void 0,this.context=void 0,this[e(3220)]=0}ba[o(3096)][o(2590)]=function(e,x,t){const a=o;this[a(716)]=e,this[a(3067)]=x,this[a(3220)]=t},ba[o(3096)][o(1112)]=function(){const e=o;let x=this.context,t=this.index,a=this.model[e(1741)],r=a[e(666)][t];if(!Cesium[e(692)](r))throw new Cesium[e(1785)](e(3844));if(a[e(2369)]!==-1&&!Cesium.defined(this[e(3067)].instanceBuffer)){if(!Cesium[e(692)](a.instanceBuffer))throw new Cesium[e(1785)]("instance buffer is null");this.model[e(4159)]=Cesium[e(2691)][e(3369)]({context:x,typedArray:a[e(4159)],usage:Cesium[e(3586)].STATIC_DRAW})}r[e(3924)]!==1||Cesium[e(692)](r.typedArray)?Cesium[e(692)](r[e(1321)])||(r[e(1321)]=Cesium.Buffer[e(3369)]({context:x,typedArray:r.typedArray,usage:Cesium[e(3586)].STATIC_DRAW}),r[e(1737)]=null,delete r[e(1737)]):r[e(1321)]=this[e(3067)][e(4159)]},pa[o(3096)][o(2590)]=function(e,x,t){const a=o;this[a(3067)]=x,this[a(716)]=e,this[a(3220)]=t},pa[o(3096)][o(1112)]=function(){const e=o;let x=this[e(716)],t=this[e(3067)][e(787)][this[e(3220)]],a=this[e(3067)][e(1741)][e(4041)];if(!Cesium[e(692)](t))throw new Cesium[e(1785)](e(1476));if(Cesium[e(692)](t[e(1164)]))return;if(!Cesium[e(692)](t[e(3296)]))throw new Cesium.DeveloperError(e(4147));let r=Cesium.IndexDatatype.UNSIGNED_SHORT;(t[e(2202)]===1||a>=Cesium[e(2746)][e(3598)])&&x[e(575)]&&(r=Cesium[e(1370)][e(2118)]),Cesium[e(692)](t[e(1164)])||(t[e(1164)]=Cesium[e(2691)][e(2417)]({context:x,typedArray:t[e(3296)],usage:Cesium.BufferUsage[e(2109)],indexDatatype:r})),t[e(3296)]=null,delete t.indicesTypedArray};const md={EXCAVATION:"EXCAVATION",FALTTEN:o(1018),OVERLAY:o(2154),HYPSOMETRIC:o(4005),ADJUST_COLOR:"ADJUST_COLOR",TRANSPARENT_BACK_COLOR:o(1752),HORIZONTAL_LINE:o(1158),COMPUTE_W_VALUE:o(1919),COMPUTE_TEXCOORD:o(3723),HAS_LIGHT:o(2982),HAS_NORMAL:o(2723),REPLACE_SELECT_TYPE:o(3236),SILHOUETTE_SELECT_TYPE:o(3708),MULTI_TEX:o(1453),APPLY_SPLIT:o(1132),APPLY_SWIPE:o(2190),TEXCOORD:o(2842),TEXCOORD2:o(2628),COMPRESS_VERTEX:o(2242),COMPRESS_NORMAL:"COMPRESS_NORMAL",COMPRESS_COLOR:o(3987),COMPRESS_TEXCOORD:o(3269),SKETCH_MODE:o(2168),NORMAL_AND_DEPTH:o(2529),POST_EFFECT:o(3824),CLIP_FILT_BY_ID:o(766),CLIP:o(3556),CLIPPLANE:"CLIPPLANE",PBR:o(2441),PT_CLOUD:o(2444),DIR_LIGHTS:o(2329),POINT_LIGHTS:o(1505),SPOT_LIGHTS:o(2609),W_VISIBLE:o(2336),EMISSION_TEXTURE:o(3793),EMISSION_TEXTURE_COUNT:"EMISSION_TEXTURE_COUNT ",TEXTURE_MOVE:"TEXTURE_MOVE",VOLUME:o(3243),VOLUME2:o(1273),TEXTURE_COORD_ONE_IS_W:o(3056),TRIANGLE_FILTRATE:"TRIANGLE_FILTRATE",UseInstanceSkeletonMatrix:o(3417),WEBP:o(2573),HAS_SKELETONSELECTED:o(3164),SKELETONSELECT_ENABLE:"SKELETONSELECT_ENABLE",REPLACE_COLOR_TYPE:o(3510),INVALID_OBLIQUE:o(1546),IGNORE_NORMAL:o(2267),TextureAtlas:"TextureAtlas",TextureAtlasSec:o(732),Translation:"Translation",VOL_AND_HYP:o(581),VERTEX_CAPTURE:"VERTEX_CAPTURE",SEC_TEX_EMISSION:o(3653),BRDF:o(743),PBR_THEME:o(693),IBL:"IBL",FLATTEN:o(4155),UseLineColor:o(1002),Instance:o(1571),InstanceBim:o(3706),InstancePipe:o(1419),COMPUTE_TEXCOORD:"COMPUTE_TEXCOORD",VertexColor:o(2654),VertexNormal:o(1452),HAS_BASE_TEXTURE:"HAS_BASE_TEXTURE",HAS_NORMAL_TEXTURE:"HAS_NORMAL_TEXTURE",HAS_OCCLUSION_TEXTURE:o(3799),HAS_EMISSIVE_TEXTURE:o(3390),REFRACTION:o(3226),HAS_ANISOTROPY:o(3361),HAS_CLEARCOAT:o(2661),HAS_VOLUME:o(881),HAS_TRANSMISSION:"HAS_TRANSMISSION",USE_BatchPBR:o(3857),HAS_DIR_LIGHTS:o(1361),HAS_POINT_LIGHTS:o(3099),HAS_SPOT_LIGHTS:o(2639),HAS_HEMISPHERE_LIGHTS:o(3862),NO_TEXCOORD:o(2585),FLOOD_ANALYSIS:o(3332),HAS_RAIN:o(3464),HAS_WETNESS:o(3737),HAS_SNOW:o(1918),HAS_MetallicRoughness_TEXTURE:o(3568)};var E0=Object[o(921)](md);const hd={BIM:17,BIM2:16,PIPELINE:29};var va=Object[o(921)](hd),Cd={MIX:0,REPLACE:1},Aa=Object.freeze(Cd),bd={MIX:0,REPLACE:1},ya=Object[o(921)](bd),ys=o(862),_s=o(3600),gs=`
#ifdef HAS_HEMISPHERE_LIGHTS

uniform vec3 uSkyColor[ HEMISPHERE_LIGHTS ];
uniform vec3 uGroundColor[ HEMISPHERE_LIGHTS ];
uniform vec3 uHemisphereLightDirectionEC[ HEMISPHERE_LIGHTS ];
    
struct HemisphereLight {
    vec3 direction;
    vec3 skyColor;
    vec3 groundColor;
};

vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
    float dotNL = dot( geometry.normal, hemiLight.direction );
    float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
    vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
    return irradiance;
}

#endif
`,Ts=`
#ifdef HAS_POINT_LIGHTS

uniform vec3 uPointLightPositionEC[ POINT_LIGHTS ];
uniform vec3 uPointLightColor[ POINT_LIGHTS ];
uniform vec2 uPointLightDistanceAndDecay[ POINT_LIGHTS ];

struct PointLight {
    vec3 position;
    vec3 color;
    float distance;
    float decay;
};

void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
    vec3 lVector = pointLight.position - geometry.position;
    directLight.direction = normalize( lVector );
    float lightDistance = length( lVector );
    directLight.color = pointLight.color;
    directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
    directLight.visible = ( directLight.color != vec3( 0.0 ) );
}

#endif
`,Bs=`
#ifdef HAS_SPOT_LIGHTS

uniform vec3 uSpotLightColor[ SPOT_LIGHTS ];
uniform vec3 uSpotLightPositionEC[ SPOT_LIGHTS ];
uniform vec3 uSpotLightDirectionEC[ SPOT_LIGHTS ];
uniform vec4 uSpotLightDistanceDecayCosPenumbra[ SPOT_LIGHTS ];
uniform vec3 uSpotLightExponent[ SPOT_LIGHTS ];
    
struct SpotLight {
    vec3 position;
    vec3 direction;
    vec3 color;
    float distance;
    float decay;
    float coneCos;
    float penumbraCos;
};

void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {
    vec3 lVector = spotLight.position - geometry.position;
    directLight.direction = normalize( lVector );
    float lightDistance = length( lVector );
    float angleCos = dot( directLight.direction, spotLight.direction );
    if ( angleCos > spotLight.coneCos ) {
        float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
        directLight.color = spotLight.color;
        directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
        directLight.visible = true;
    } else {
        directLight.color = vec3( 0.0 );
        directLight.visible = false;
    }
}

#endif
`,Es=o(2208),Ps=`

#ifdef HAS_DIR_LIGHTS
for (int i = 0; i < DIR_LIGHTS; i++) {
    directLight.color = uDirectionalLightColor[i];
    directLight.direction = uDirectionalLightDirectionEC[i];
    directLight.visible = true;
    directPhysical( directLight, geometry, material, reflectedLight );
}
#endif

#ifdef HAS_POINT_LIGHTS
PointLight pointLight;
for (int i = 0; i < POINT_LIGHTS; i++) {
    pointLight.position = uPointLightPositionEC[i];
    pointLight.color = uPointLightColor[i];
    pointLight.distance = uPointLightDistanceAndDecay[i].x;
    pointLight.decay = uPointLightDistanceAndDecay[i].y;
    getPointDirectLightIrradiance( pointLight, geometry, directLight );
    if(!directLight.visible) continue;
    directPhysical( directLight, geometry, material, reflectedLight );
}
#endif

#ifdef HAS_SPOT_LIGHTS
SpotLight spotLight;
for (int i = 0; i < SPOT_LIGHTS; i++) {
    spotLight.position = uSpotLightPositionEC[i];
    spotLight.color = uSpotLightColor[i];
    spotLight.direction = uSpotLightDirectionEC[i];
    spotLight.coneCos = uSpotLightDistanceDecayCosPenumbra[i].z;
    spotLight.penumbraCos = uSpotLightDistanceDecayCosPenumbra[i].w;
    getSpotDirectLightIrradiance( spotLight, geometry, directLight );
    if(!directLight.visible) continue;
    directPhysical( directLight, geometry, material, reflectedLight );
}
#endif
`,ws=o(1639),Ss=o(3425),Ms=o(2588),Rs=o(4161);const Ds={rainDecl:ys,snowDecl:_s,hemisphereLightDecl:gs,pointLightDecl:Ts,spotLightDecl:Bs,directionLightDecl:Es,lightSourceImpl:Ps,brdf:ws,executeServerExcavationDecl:Ss,cubeUV_reflection:Ms,executeExcavation:Rs},Yx=Cesium[o(692)];function _a(){this.model=void 0,this.context=void 0}function pd(e,x){let a=x[o(3650)];for(let r=0;r<a;++r){let n=e.getExtension(x[r]);if(n)return n}}function vd(e){const x=o;return e[x(1107)]!==1||e._contrast!==1||e[x(3610)]!==0||e[x(3693)]!==1||e._gamma!==1}function Is(e){const x=o;return e[x(960)](/^[ \t]*#include +<([\w\d./]+)>/gm,function(t,a){const r=x;var n=Ds[a];if(n===void 0)throw new Error(r(632)+a+">");return Is(n)})}_a[o(3096)][o(2590)]=function(e,x){const t=o;this[t(3067)]=x,this[t(716)]=e},_a[o(3096)].execute=function(){const e=o,x=this[e(716)],t=this[e(3067)],a=t[e(1826)];let r=t.vs,n=Is(t.fs);x[e(530)]&&Cesium[e(2358)].length>4&&(r=[e(3140),"#define attribute in",e(1400),"#define texture2D texture"].join(`
`)+`
`+r,n=["#define varying in",e(1759),e(1144),e(2188),e(3611),"#define texture2DProj textureProj",e(1735),"#define texture2DProjLodEXT textureProjLod",e(3511),e(1300),e(889),e(2767)][e(2243)](`
`)+`
`+n);const s=t[e(4127)],u=t[e(2245)],c=t[e(1741)];let f=t[e(3408)]?t[e(3408)][e(3210)]()(r):r;x[e(1445)]===void 0&&(x[e(1445)]=Cesium[e(820)](pd(x._gl,["EXT_shader_texture_lod"]),!1));let l=new Cesium[e(635)]({sources:[f]}),m=new Cesium[e(635)]({sources:[n]});if(Cesium[e(692)](s[e(782)])&&(l[e(3553)].push(E0[e(1452)]),m.defines[e(2583)](E0[e(1452)])),a.mixColorType===Aa[e(475)]&&(l.defines[e(2583)](E0[e(3510)]),m.defines[e(2583)](E0.REPLACE_COLOR_TYPE)),a[e(1316)]===ya[e(475)]&&(l[e(3553)][e(2583)](E0[e(3236)]),m.defines[e(2583)](E0.REPLACE_SELECT_TYPE)),Cesium[e(692)](s.aColor)&&l[e(3553)][e(2583)](E0[e(2654)]),u&&u[e(3580)][e(3650)]===2&&(l[e(3553)][e(2583)](e(2628)),m.defines[e(2583)](e(2628))),Cesium.defined(t[e(3408)])&&l[e(3553)][e(2583)](e(3631)),l[e(3553)][e(2583)](e(2842)),m[e(3553)].push(e(2842)),u&&u[e(3580)][e(3650)]>0&&(l[e(3553)][e(2583)](E0.COMPUTE_TEXCOORD),m[e(3553)][e(2583)](E0.COMPUTE_TEXCOORD)),c[e(2369)]>-1&&l[e(3553)][e(2583)](E0[e(1571)]),c[e(1891)]!==va[e(3383)]&&c[e(1891)]!==va[e(2209)]||l[e(3553)][e(2583)](E0.InstanceBim),c[e(1891)]===va[e(3509)]&&l.defines[e(2583)](E0[e(1419)]),Cesium[e(692)](c[e(2326)])){let C=c.compressOptions;(C&cx[e(3515)])===cx[e(3515)]&&l[e(3553)][e(2583)](E0[e(2242)]),(C&cx[e(3155)])===cx[e(3155)]&&l.defines[e(2583)](E0[e(860)]),(C&cx[e(1014)])!==cx.SVC_VertexColor&&e(3690)!==a[e(1617)]||l[e(3553)][e(2583)](E0[e(3987)]),(C&cx[e(753)])===cx[e(753)]&&l.defines[e(2583)](E0[e(3269)])}if(c[e(3103)]&&s[e(2842)]&&l[e(3553)][e(2583)](E0[e(3056)]),Cesium.defined(c[e(825)])&&Cesium[e(692)](c[e(825)][e(1939)])&&l.defines[e(2583)](e(857)),a._enableClip&&m[e(3553)][e(2583)](E0[e(3556)]),a[e(1062)]&&m[e(3553)][e(2583)](E0[e(1872)]),a[e(595)]&&(l[e(3553)][e(2583)](E0[e(2959)]),m[e(3553)][e(2583)](E0[e(2959)])),a._hypsometric[e(3944)]&&(l[e(3553)][e(2583)](E0.HYPSOMETRIC),m.defines[e(2583)](E0[e(4005)])),a[e(445)][e(1533)]&&l[e(3553)][e(2583)](E0[e(4155)]),a[e(1128)]&&m[e(3553)][e(2583)](E0.APPLY_SWIPE),e(3690)===a._vertexCompressionType&&l[e(3553)][e(2583)]("MeshOPT_Compress"),c[e(3103)]&&s.aTexCoord0&&l.defines.push(E0.TEXTURE_COORD_ONE_IS_W),u[e(3408)]&&(l[e(3553)].push(E0[e(2047)]),m[e(3553)][e(2583)](E0[e(2047)])),u.batchTableBake&&(l[e(3553)][e(2583)](E0.TextureAtlasSec),m[e(3553)][e(2583)](E0[e(732)])),Cesium[e(692)](t[e(787)])&&t[e(787)][e(3650)]>0&&t[e(787)][0][e(2391)]===2&&m[e(3553)][e(2583)](E0[e(771)]),vd(a)&&m[e(3553)][e(2583)](E0[e(1503)]),u._usePBR||Cesium.defined(a[e(2505)][e(2903)])&&!a[e(2505)][e(2903)]){var h=Cesium[e(692)](s[e(2389)]);h&&m[e(3553)][e(2583)](E0[e(743)]),(u._baseColorTextureIndex>-1&&Yx(u[e(1558)])||Yx(a[e(2505)][e(1404)].baseColorTexture))&&h&&m[e(3553)][e(2583)](E0[e(1402)]),(u[e(711)]>-1&&Yx(u.metallicRoughnessTexture)||Yx(a[e(2505)][e(1404)][e(1246)]))&&h&&m[e(3553)][e(2583)](E0[e(3568)]),(u[e(3060)]>-1&&Yx(u[e(3845)])||Yx(a[e(2505)][e(1404)][e(3845)]))&&h&&m.defines[e(2583)](E0[e(1658)]),(u[e(2203)]>-1&&Yx(u[e(2678)])||Yx(a[e(2505)][e(1404)][e(2678)]))&&m[e(3553)].push(E0[e(3390)]),(u._occlusionTextureIndex>-1||Yx(a[e(2505)][e(1404)][e(3855)])&&a[e(2505)].pbrMetallicRoughness[e(3855)]instanceof Texture)&&h&&m.defines[e(2583)](E0[e(3799)]),(Yx(u[e(2288)])||Yx(a[e(2505)].pbrMetallicRoughness[e(2562)]))&&h&&m.defines[e(2583)](E0.HAS_ANISOTROPY),(Yx(u[e(2700)])||Yx(a[e(2505)][e(1404)].clearcoat))&&h&&m[e(3553)][e(2583)](E0.HAS_CLEARCOAT),(u[e(1796)]>-1||Yx(a[e(2505)][e(1404)][e(1395)])&&a[e(2505)].pbrMetallicRoughness[e(1395)]>0)&&m[e(3553)][e(2583)](E0[e(3226)]),Yx(a[e(2505)][e(1404)][e(2102)])&&a[e(2505)][e(1404)][e(2102)][e(837)]&&a[e(2505)][e(1404)][e(2102)][e(837)]instanceof Texture&&Yx(a[e(2505)][e(1404)][e(2102)].snowNormalTexture)&&a._PBRMaterialParams[e(1404)][e(2102)].snowNormalTexture instanceof Texture&&m.defines.push(E0[e(1918)]),Yx(a[e(2505)][e(1404)][e(1762)])&&a[e(2505)][e(1404)][e(1762)].wetnessFactor&&m.defines[e(2583)](E0[e(3737)]),Yx(a[e(2505)][e(1404)][e(1762)])&&a._PBRMaterialParams.pbrMetallicRoughness[e(1762)][e(911)]&&a[e(2505)].pbrMetallicRoughness[e(1762)].rippleTexture instanceof Texture&&m[e(3553)][e(2583)](E0[e(3464)])}x[e(530)]&&(l.defines.push(e(559)),m[e(3553)][e(2583)]("WEBGL2")),e(3044)===a[e(2450)]&&l[e(3553)].push(e(2458)),t.shaderProgram=Cesium[e(2416)][e(4073)]({context:x,vertexShaderSource:l,fragmentShaderSource:m,attributeLocations:s})};var ue=Object.freeze({RESET:0,SetColor:1,SELECTED:2,HIDE:4,OFFSET:8,CLIP:16,BLOOM:32,ALL:255}),Ad={NONE:0,TITANIUM_SCUFFED:1,METAL_PLATE:2,EMISSION:4,ROUGHNESS:8},Ls=Object[o(921)](Ad);function ux(e){const x=o;let t,a;for(this.layer=e[x(1826)],this[x(1741)]=e[x(1741)],this[x(787)]=e[x(787)],this.vertexBufferToCreate=new Cesium[x(1364)],this[x(2958)]=new Cesium[x(1364)],this[x(3373)]=new Cesium.Queue,t=0,a=this[x(1741)].vertexAttributes.length;t<a;t++)this[x(2443)][x(3589)](t);for(t=0,a=this[x(787)].length;t<a;t++)this[x(787)][t][x(2391)]!==13&&this[x(787)][t][x(1520)]>0&&this[x(2958)][x(3589)](t);this.shaderProgramToCreate.enqueue(0),this[x(1948)]=e[x(1948)],this[x(2245)]=Cesium.defaultValue(e[x(2245)],new Ht),this[x(553)]=e[x(553)],this[x(931)]=e[x(931)],this.geoMatrix=e[x(3248)],this[x(2174)]=Cesium[x(2235)][x(1201)](this[x(3248)],new Cesium[x(2235)]),this[x(3008)]=e[x(1741)][x(3008)],this[x(4127)]=e[x(1741)][x(3257)],this[x(2360)]=void 0,this.vertexArray=void 0,this.colorCommand=void 0,this[x(1095)]=Cesium[x(820)](e[x(1095)],{}),this[x(1170)]=new Cesium[x(2902)],this[x(3408)]=void 0,this[x(3161)]=!1,this[x(2511)]=x(3684),this[x(1983)]=new Cesium.AssociativeArray,this[x(1994)]=new Cesium[x(2902)],this[x(3277)]=e.vertexPackage[x(666)][0][x(1776)]===4,this[x(3261)]=e[x(3261)],this.createBoundingBoxForInstance(),this.ready=!1}const Fs=new ba,Os=new pa,Ns=new _a;function yd(e,x){const t=o;let a=e[t(1826)].context,r=e[t(2443)];for(;r[t(3650)];){let n=r[t(4100)]();if(Fs[t(2590)](a,e,n),!x.jobScheduler.execute(Fs,Cesium[t(2535)][t(1883)]))break;r[t(2349)]()}}function _d(e,x){const t=o;let a=e[t(1826)][t(716)],r=e[t(2958)];for(;r[t(3650)];){let n=r[t(4100)]();if(Os[t(2590)](a,e,n),!x[t(3312)][t(1112)](Os,Cesium[t(2535)].BUFFER))break;r.dequeue()}}function gd(e,x){const t=o;let a=e.layer.context,r=e[t(3373)];for(;r[t(3650)]&&(r[t(4100)](),Ns[t(2590)](a,e),x.jobScheduler.execute(Ns,Cesium.JobType[t(1101)]));)r[t(2349)]()}function Td(e,x){const t=o;if(Cesium[t(692)](e[t(3408)])||!e[t(1095)])return;const a=e[t(1826)].context;let r=[];r[t(2583)]({functionName:t(830),componentDatatype:Cesium[t(549)][t(3860)],componentsPerAttribute:4,normalize:!0},{functionName:"s3m_batchTable_operation",componentDatatype:Cesium[t(549)][t(3860)],componentsPerAttribute:4},{functionName:t(952),componentDatatype:Cesium[t(549)].UNSIGNED_BYTE,componentsPerAttribute:4,normalize:!0});let n=e[t(1095)],s=Object.keys(n),u=e[t(3008)]>0?e[t(3008)]:s.length;e[t(3408)]=new Cesium[t(3631)](a,r,u)}ux[o(3096)].createBuffers=function(e){yd(this,e),_d(this,e)},ux[o(3096)][o(2721)]=function(e){gd(this,e)},ux.prototype.createBatchTable=function(e){Td(this)};let Bd=new Cesium[o(516)];ux[o(3096)].createBoundingBoxForInstance=function(){const e=o,x=this[e(1741)];if(!Cesium[e(692)](x)||x[e(2369)]===-1||!Cesium[e(692)](x[e(689)]))return;let t=x[e(689)],a=new Cesium[e(516)](t[0],t[1],t[2]),r=new Cesium[e(516)](t[3],t[4],t[5]),n=Cesium[e(516)][e(2917)](a,r,.5,Bd),s=Cesium[e(516)][e(4114)](n,a),u=new Cesium[e(516)];Cesium.Matrix4[e(1013)](this.modelMatrix,n,u),this[e(1948)].center=u,this.boundingVolume[e(1707)]=s,x.instanceBounds=void 0};let Fe=new Cesium[o(2756)];function Oe(e,x){const t=o;let a=e[t(3553)][t(3019)](x);a>=0&&e[t(3553)][t(1805)](a,1)}function Ed(e,x){const t=o;e[t(3553)][t(3019)](x)===-1&&e[t(3553)].push(x)}ux[o(3096)][o(2512)]=function(){const e=o,x=this[e(1826)],t=x.context,a=this[e(1095)];if(!Cesium[e(692)](a))return;for(let u in a)a[e(2364)](u)&&this[e(1170)][e(2590)](u,a[u]);let r=this[e(3408)],n=this[e(1170)],s=n._hash;for(let u in s)if(s[e(2364)](u)){let c,f=n.get(u);Cesium[e(692)](c)||(c=t[e(940)]({primitive:x,id:u}));let l=c[e(3560)];Fe.x=Cesium[e(1911)][e(4160)](l[e(3671)]),Fe.y=Cesium.Color.floatToByte(l.green),Fe.z=Cesium[e(1911)][e(4160)](l[e(640)]),Fe.w=Cesium[e(1911)][e(4160)](l[e(2089)]);let m=f[e(2464)];if(this[e(3008)]>0)m[e(3317)](function(h){r[e(4163)](h,2,Fe)});else{let h=f[e(740)];r.setBatchedAttribute(h,2,Fe)}}this[e(1095)]=void 0},ux[o(3096)][o(3057)]=function(e){const x=o;e[x(3203)]&&this[x(1545)](!e[x(3203)]),Object[x(3360)](e[x(1990)])[x(3650)]>0&&this.updateObjsColor(e._objsColorList),e._objsOperationList.length>0&&this[x(3951)](e[x(1261)])},ux.prototype[o(1388)]=function(){const e=o;let x=this,t=this[e(1994)],a=[];for(let n=0,s=t[e(3650)];n<s;n++){let u=t.values[n];u[e(1336)]&&(u[e(1336)]=!1,a=u[e(3560)][e(1876)](),Fe.x=a[0],Fe.y=a[1],Fe.z=a[2],Fe.w=a[3],Cesium.defined(u.batchId)?this[e(3408)][e(4163)](u.batchId,0,Fe):Array[e(906)](u[e(2464)])&&u[e(2464)][e(3317)](function(c){x[e(3408)].setBatchedAttribute(c,0,Fe)}))}let r=this[e(1983)];for(let n=0,s=r[e(3650)];n<s;n++){let u=r.values[n];u[e(1336)]&&(u.dirty=!1,this[e(3008)]>0?Array[e(906)](u[e(2464)])&&u[e(2464)][e(3317)](function(c){const f=e;x[f(3408)][f(4163)](c,1,u.operationValue)}):Cesium[e(692)](u.batchId)&&this[e(3408)][e(4163)](u[e(740)],1,u[e(3936)]))}},ux[o(3096)][o(4084)]=function(e){const x=o;if(!this[x(2266)]||this[x(1170)][x(3650)]<1)return;let t=this.selectionInfoMap[x(2241)];for(let a in t){if(!t[x(2364)](a))continue;let r=e[a];if(!Cesium[x(692)](r))continue;let n=t[a];const s=n[x(740)],u=n[x(2464)];this[x(1994)][x(2590)](a,{batchId:s,instanceIds:u,color:r,dirty:!0});let c=this.idsOperationMap[x(3715)](a);Cesium[x(692)](c)||(c={batchId:s,instanceIds:u,operationValue:new Cesium[x(2756)],dirty:!0}),c[x(1336)]=!0,c[x(3936)].x=r===Cesium.Color[x(1704)]?254&c[x(3936)].x:1|c[x(3936)].x,this[x(1983)].set(a,c),this.batchTableDirty=!0}},ux.prototype.updateObjsOperation=function(e){const x=o;if(!this.ready||this[x(1170)][x(3650)]<1)return;let t=this[x(1170)][x(2241)];for(let a in t){if(!t.hasOwnProperty(a)||!e.contains(a))continue;let r=t[a],n=r[x(740)],s=r.instanceIds,u=e.get(a),c=this.idsOperationMap[x(3715)](a);Cesium[x(692)](c)||(c={batchId:n,instanceIds:s,operationValue:new Cesium[x(2756)],dirty:!0}),c[x(1336)]=!0,c.operationValue.x=1&c[x(3936)].x|u,this[x(1983)][x(2590)](a,c),this[x(3161)]=!0}},ux.prototype[o(1545)]=function(e){const x=o;if(!this[x(2266)]||this.selectionInfoMap[x(3650)]<1)return;let t=this[x(1826)],a=this[x(1170)][x(2241)];for(let r in a){if(!a.hasOwnProperty(r)||t[x(3150)][x(2715)](r))continue;let n=a[r],s=n[x(740)],u=n.instanceIds,c=this[x(1983)][x(3715)](r);Cesium[x(692)](c)||(c={batchId:s,instanceIds:u,operationValue:new Cesium[x(2756)],dirty:!0}),c[x(1336)]=!0,c[x(3936)].x=e?c[x(3936)].x&(ue[x(1604)]^ue.HIDE):c[x(3936)].x|ue.HIDE,this[x(1983)].set(r,c),c[x(3936)].x===ue[x(2533)]?t[x(1261)][x(1578)](r):(t[x(1261)].set(r,c.operationValue.x),t._objsHideList.set(r,!0)),this[x(3161)]=!0}},ux[o(3096)][o(2272)]=function(e){const x=o;if(!this[x(2266)])return;let t=this[x(2360)].vertexShaderSource[x(3552)](),a=this[x(2360)][x(3145)][x(3552)](),r=this[x(4127)];e[x(3990)]?a[x(3553)][x(3019)](E0[x(3556)])===-1&&a[x(3553)].push(E0[x(3556)]):Oe(a,E0[x(3556)]),this[x(1826)][x(1062)]?a[x(3553)][x(3019)](E0[x(1872)])===-1&&a.defines[x(2583)](E0[x(1872)]):Oe(a,E0.CLIPPLANE),this[x(2360)][x(3701)](),this.shaderProgram=Cesium.ShaderProgram.fromCache({context:this[x(1826)][x(716)],vertexShaderSource:t,fragmentShaderSource:a,attributeLocations:r}),this.colorCommand[x(2360)]=this[x(2360)]},ux[o(3096)].hypsometric=function(e){const x=o;if(!this[x(2266)])return;let t=this.shaderProgram[x(4055)][x(3552)](),a=this[x(2360)][x(3145)][x(3552)](),r=this.attributeLocations;e[x(3990)]?(t[x(3553)][x(3019)](E0.HYPSOMETRIC)===-1&&t[x(3553)][x(2583)](E0[x(4005)]),a[x(3553)][x(3019)](E0[x(4005)])===-1&&a[x(3553)].push(E0[x(4005)])):Oe(a,E0[x(4005)]),this[x(2360)].destroy(),this[x(2360)]=Cesium[x(2416)][x(4073)]({context:this.layer.context,vertexShaderSource:t,fragmentShaderSource:a,attributeLocations:r}),this[x(3177)][x(2360)]=this[x(2360)]},ux[o(3096)][o(3293)]=function(e){const x=o;if(!this[x(2266)])return;let t=this[x(2360)].vertexShaderSource[x(3552)](),a=this[x(2360)][x(3145)][x(3552)](),r=this[x(4127)];e[x(3990)]?a[x(3553)][x(3019)](E0[x(2190)])===-1&&a[x(3553)][x(2583)](E0[x(2190)]):Oe(a,E0[x(2190)]),this[x(2360)].destroy(),this.shaderProgram=Cesium[x(2416)][x(4073)]({context:this.layer[x(716)],vertexShaderSource:t,fragmentShaderSource:a,attributeLocations:r}),this[x(3177)][x(2360)]=this[x(2360)]},ux[o(3096)].flatten=function(e){const x=o;if(!this[x(2266)])return;let t=this[x(2360)].vertexShaderSource.clone(),a=this[x(2360)][x(3145)][x(3552)](),r=this[x(4127)];e[x(3990)]?t[x(3553)][x(3019)](E0.FLATTEN)===-1&&t[x(3553)].push(E0[x(4155)]):Oe(t,E0.FLATTEN),this.shaderProgram.destroy(),this[x(2360)]=Cesium[x(2416)][x(4073)]({context:this[x(1826)][x(716)],vertexShaderSource:t,fragmentShaderSource:a,attributeLocations:r}),this[x(3177)][x(2360)]=this[x(2360)]},ux.prototype[o(3106)]=function(e){const x=o;if(!this[x(2266)])return;let t=this[x(2360)][x(4055)].clone(),a=this[x(2360)][x(3145)].clone(),r=this[x(4127)];e[x(3990)]?(t[x(3553)][x(3019)](E0.EXCAVATION)===-1&&t[x(3553)].push(E0[x(2959)]),a.defines[x(3019)](E0.EXCAVATION)===-1&&a[x(3553)][x(2583)](E0.EXCAVATION)):(Oe(t,E0[x(2959)]),Oe(a,E0[x(2959)])),this[x(2360)][x(3701)](),this.shaderProgram=Cesium[x(2416)][x(4073)]({context:this[x(1826)][x(716)],vertexShaderSource:t,fragmentShaderSource:a,attributeLocations:r}),this.colorCommand.shaderProgram=this[x(2360)]},ux[o(3096)].pbrParameterChange=function(e){const x=o;let t=this[x(2360)][x(4055)][x(3552)](),a=this[x(2360)][x(3145)][x(3552)](),r=this[x(4127)];if(e.enable){var n=e[x(1826)],s=(n[x(1690)]&Ls[x(3333)])>0||n[x(2505)][x(2903)],u=Cesium[x(692)](n[x(1711)])&&Cesium[x(692)](n[x(1711)][x(3309)]),c=[],f=Cesium[x(692)](this[x(4127)][x(2389)]);s||u?(f&&c[x(2583)](E0[x(743)]),u&&(c[x(2583)](E0[x(693)]),c[x(2583)](x(3291)+n[x(1988)][x(2932)][x(3650)])),Cesium.defined(n[x(2505)][x(1404)][x(1558)])&&n[x(2505)][x(1404)].baseColorTexture instanceof Cesium.Texture&&f&&c[x(2583)](E0[x(1402)]),f&&Cesium[x(692)](n._PBRMaterialParams[x(1404)].rainEffect)&&Cesium[x(692)](n[x(2505)][x(1404)][x(1762)][x(3933)])&&(c[x(2583)](E0[x(3737)]),Cesium[x(692)](n._PBRMaterialParams[x(1404)][x(1762)].rippleTexture)&&n[x(2505)].pbrMetallicRoughness[x(1762)][x(911)]instanceof Cesium[x(1869)]&&c[x(2583)](E0.HAS_RAIN)),f&&Cesium[x(692)](n[x(2505)].pbrMetallicRoughness[x(2102)])&&Cesium[x(692)](n._PBRMaterialParams[x(1404)][x(2102)].snowMaskTexture)&&n[x(2505)][x(1404)].snowEffect[x(837)]instanceof Cesium[x(1869)]&&Cesium.defined(n[x(2505)][x(1404)][x(2102)].snowNormalTexture)&&n[x(2505)][x(1404)][x(2102)][x(3380)]instanceof Cesium[x(1869)]&&c[x(2583)](E0[x(1918)]),(Cesium[x(692)](this[x(2173)])&&this[x(2173)]._metallicRoughnessTextureIndex>-1||Cesium[x(692)](n[x(2505)][x(1404)][x(1246)])&&n[x(2505)][x(1404)][x(1246)]instanceof Cesium.Texture)&&f&&c[x(2583)](E0[x(3568)]),(Cesium.defined(this[x(2173)])&&this[x(2173)]._normalTextureIndex>-1||Cesium[x(692)](n[x(2505)][x(1404)][x(3845)])&&n[x(2505)][x(1404)][x(3845)]instanceof Cesium[x(1869)])&&f&&c[x(2583)](E0[x(1658)]),(Cesium[x(692)](this[x(2173)])&&this[x(2173)]._occlusionTextureIndex>-1||Cesium.defined(n._PBRMaterialParams.pbrMetallicRoughness[x(3855)])&&n[x(2505)][x(1404)][x(3855)]instanceof Cesium[x(1869)])&&f&&c[x(2583)](E0[x(3799)]),(Cesium[x(692)](this[x(2173)])&&Cesium[x(692)](this.materialPass[x(2288)])||Cesium[x(692)](n[x(2505)][x(1404)][x(2562)]))&&c[x(2583)](E0[x(3361)]),(Cesium[x(692)](this[x(2173)])&&Cesium[x(692)](this[x(2173)][x(2830)])||Cesium[x(692)](n[x(2505)][x(1404)].volume))&&(c.push(E0.HAS_VOLUME),c[x(2583)](E0[x(822)])),(Cesium[x(692)](this[x(2173)])&&Cesium[x(692)](this.materialPass._clearcoat)||Cesium[x(692)](n[x(2505)][x(1404)].clearcoat))&&c[x(2583)](E0[x(2661)]),(Cesium.defined(this[x(2173)])&&this.materialPass._indexOfRefraction>-1||Cesium.defined(n[x(2505)][x(1404)].indexOfRefraction)&&n[x(2505)][x(1404)].indexOfRefraction>0)&&c[x(2583)](E0[x(3226)]),Cesium[x(692)](this[x(2173)])&&this[x(2173)][x(2203)]>-1&&c[x(2583)](E0[x(3390)]),Cesium.defined(n._frameState[x(448)])&&c[x(2583)](E0.IBL),c[x(1991)](l=>{Ed(a,l)})):(c=[E0[x(743)],x(3291)+n[x(1988)][x(2932)][x(3650)],E0.HAS_BASE_TEXTURE,E0[x(1658)],E0[x(3390)],E0[x(3900)],E0[x(3568)],E0.HAS_SNOW,E0[x(3464)]]).forEach(l=>{Oe(a,l)}),this.shaderProgram[x(3701)](),this[x(2360)]=Cesium.ShaderProgram[x(4073)]({context:n.context,vertexShaderSource:t,fragmentShaderSource:a,attributeLocations:r}),this[x(3177)][x(2360)]=this[x(2360)]}},ux[o(3096)][o(1469)]=function(e){const x=o;if(!this[x(2266)])return;let t=this.shaderProgram[x(4055)][x(3552)](),a=this[x(2360)][x(3145)][x(3552)](),r=this[x(4127)];e[x(1316)]==ya[x(475)]?(a[x(3553)][x(3019)](E0[x(3236)])===-1&&a[x(3553)].push(E0[x(3236)]),t[x(3553)][x(3019)](E0[x(3236)])===-1&&t.defines[x(2583)](E0[x(3236)])):(Oe(t,E0.REPLACE_SELECT_TYPE),Oe(a,E0.REPLACE_SELECT_TYPE)),this[x(2360)][x(3701)](),this.shaderProgram=Cesium[x(2416)][x(4073)]({context:e.layer[x(716)],vertexShaderSource:t,fragmentShaderSource:a,attributeLocations:r}),this.colorCommand[x(2360)]=this[x(2360)]},ux[o(3096)][o(4083)]=function(e){const x=o;if(!this[x(2266)])return;let t=this[x(2360)][x(4055)][x(3552)](),a=this[x(2360)][x(3145)][x(3552)](),r=this[x(4127)];e.mixColorType===Aa.REPLACE?(a[x(3553)][x(3019)](E0[x(3510)])===-1&&a[x(3553)].push(E0[x(3510)]),t[x(3553)][x(3019)](E0[x(3510)])===-1&&t.defines[x(2583)](E0[x(3510)])):(Oe(t,E0[x(3510)]),Oe(a,E0[x(3510)])),this[x(2360)].destroy(),this[x(2360)]=Cesium[x(2416)][x(4073)]({context:e[x(1826)][x(716)],vertexShaderSource:t,fragmentShaderSource:a,attributeLocations:r}),this[x(3177)].shaderProgram=this.shaderProgram},ux[o(3096)][o(1277)]=Cesium[o(1785)].throwInstantiationError,ux.prototype[o(1852)]=Cesium[o(1785)].throwInstantiationError,ux[o(3096)].update=Cesium[o(1785)][o(824)],ux[o(3096)].isDestroyed=Cesium[o(1785)][o(824)],ux[o(3096)][o(3701)]=Cesium[o(1785)].throwInstantiationError;let pi=new Cesium.Cartesian4,ga=new Cesium[o(2756)],vi=new Cesium[o(2756)];function zt(e){return{uSelectedColor:function(){return e.selectedColor},uExcavationTexture:function(){return e._excavationTexture},uExcavationMode:function(){return e[C0(3100)]},uExcavationRect:function(){return e[C0(2955)]},uClipMode:function(){return e._clipMode},uClipPlanes:function(){return e[C0(3821)]},uHypsometricTexture:function(){const x=C0;return e._hypsometric[x(2238)]},uHypLineColor:function(){const x=C0;return e[x(2898)][x(3827)].LineColor},uNoValueColor:function(){return e[C0(2898)].setting.noValueColor},uMinMaxValue:function(){const x=C0;let t=e[x(2898)][x(3827)];return pi.x=t[x(4046)],pi.y=t[x(3531)],pi.z=t[x(2031)],pi.w=t[x(1008)],pi},uOpacityIntervalFillMode:function(){const x=C0;let t=e[x(2898)][x(3827)];return ga.x=t.Opacity,ga.y=t[x(3021)],ga.z=t[x(2460)],ga},uFlattenRect:function(){const x=C0;return e._flattenPar[x(3543)]},uFlattenTexture:function(){return e[C0(445)].texture},uSwipeRegion:function(){const x=C0,t=e[x(716)];return vi.x=e[x(2086)].x*t.drawingBufferWidth,vi.y=(1-e[x(2086)].y)*t[x(1079)],vi.z=e[x(2086)].z*t[x(2151)],vi.w=(1-e[x(2086)].w)*t[x(1079)],vi},uBrightness:function(){return e[C0(1107)]},uContrast:function(){return e._contrast},uHue:function(){return e[C0(3610)]},uSaturation:function(){return e[C0(3693)]},uOneOverGamma:function(){return 1/e[C0(1188)]}}}function A2(e){ux[o(798)](this,e),this.vs=vs,this.fs=As}function Pd(){const e=o;return Cesium[e(3154)][e(4073)]({cull:{enabled:!0},depthTest:{enabled:!0,func:Cesium[e(3608)].LESS_OR_EQUAL},blending:Cesium[e(2147)][e(2672)],stencilTest:{backFunction:Cesium[e(2311)][e(3648)],backOperation:{fail:Cesium.StencilOperation[e(3384)],zFail:Cesium[e(2521)][e(3384)],zPass:Cesium[e(2521)][e(475)]},enabled:!0,frontFunction:Cesium[e(2311)][e(3648)],frontOperation:{fail:Cesium[e(2521)].KEEP,zFail:Cesium[e(2521)][e(3384)],zPass:Cesium[e(2521)].REPLACE},mask:Cesium.StencilConstants.CESIUM_3D_TILE_MASK,reference:Cesium[e(2128)].CESIUM_3D_TILE_MASK}})}function wd(e,x,t){const a=o;let r={uDiffuseColor:function(){return e[C0(1150)]},uGeoMatrix:function(){return t[C0(3248)]},uInverseGeoMatrix:function(){return t[C0(2174)]},uTexture:function(){return e[C0(3580)][0]},uTexture2:function(){const n=C0;return e[n(3580)][1]||x[n(716)][n(4007)]},uTexture0Width:function(){return e.textures[0].width},uTexture1Width:function(){const n=C0;return e[n(3580)][1]?e[n(3580)][1][n(2375)]:x[n(716)][n(4007)][n(2375)]},decodePositionMin:function(){const n=C0;return t.vertexPackage[n(3160)]},decodePositionNormConstant:function(){const n=C0;return t.vertexPackage[n(1341)]}};return Object[a(3677)](r,zt(x)),a(3690)==x[a(1617)]&&(r[a(2752)]=function(){const n=a;return t[n(1741)][n(2222)][0]},r[a(3741)]=function(){const n=a;return t[n(1741)][n(2222)][1]},r[a(2936)]=function(){return t.vertexPackage.minTexCoordValue[0]}),r}A2[o(3096)]=Object[o(1693)](ux[o(3096)]),A2.prototype[o(4152)]=ux,A2[o(3096)].createCommand=function(){const e=o;if(Cesium.defined(this[e(3177)])||this[e(2443)][e(3650)]!==0||this[e(2958)].length!==0||this.shaderProgramToCreate.length!==0)return;let x=this[e(1826)],t=x[e(716)],a=this[e(1741)],r=this[e(787)],n=a[e(666)];if(r[e(3650)]<1)return;let s=r[0],u=this[e(2245)];this.vertexArray=new Cesium.VertexArray({context:t,attributes:n,indexBuffer:s[e(1164)]}),this[e(3177)]=new Cesium[e(1900)]({primitiveType:s[e(2391)],modelMatrix:this[e(931)],boundingVolume:this[e(1948)],vertexArray:this[e(2457)],shaderProgram:this[e(2360)],pass:u[e(1294)]?Cesium[e(2798)][e(2359)]:Cesium[e(2798)][e(1978)],renderState:Pd(),instanceCount:a.instanceCount}),this[e(3177)][e(2551)]=wd(u,x,this),this.vs=void 0,this.fs=void 0,this[e(2266)]=!0},A2[o(3096)][o(1277)]=function(e,x){const t=o;this[t(2266)]||(this[t(3191)](e),this.createShaderProgram(e),this[t(1852)](e),this[t(3057)](x))},A2.prototype[o(2696)]=function(e,x){const t=o;e.commandList[t(2583)](this[t(3177)])},A2[o(3096)].isDestroyed=function(){return!1},A2.prototype[o(3701)]=function(){const e=o;return this[e(2360)]=this[e(2360)]&&!this[e(2360)][e(3777)]()&&this[e(2360)].destroy(),this[e(2457)]=this[e(2457)]&&!this[e(2457)][e(3777)]()&&this[e(2457)].destroy(),this[e(2245)]=this[e(2245)]&&!this[e(2245)][e(3777)]()&&this[e(2245)][e(3701)](),this[e(3177)]=void 0,this[e(1741)]=null,this[e(787)]=null,this[e(931)]=void 0,this.pickInfo=void 0,this[e(1170)]=void 0,this.vs=void 0,this.fs=void 0,Cesium[e(1136)](this)};var Vs=o(671),Us=o(3093),Gs=o(3132),Hs=o(2560);function Ta(){const e=o;this[e(3067)]=void 0,this[e(716)]=void 0,this.texture=void 0,this[e(3999)]=void 0}Ta[o(3096)][o(2590)]=function(e,x,t,a){const r=o;this[r(3067)]=x,this[r(716)]=e,this[r(2238)]=t,this[r(3999)]=a},Ta[o(3096)][o(1112)]=function(){const e=o;let x=this[e(3999)];this[e(2238)][e(2266)]||this.texture.init(),this[e(2238)][e(3089)]({xOffset:x[e(749)],yOffset:x[e(1689)],width:x[e(2375)],height:x.height,arrayBufferView:x[e(2132)]})};const Sd={OPAQUE:"opaque",BLEND:"blend",MASK:o(739)};var ar=Object[o(921)](Sd);const Ne=Cesium.defined;function Ve(e){const x=o;ux[x(798)](this,e),this.vs=Vs,this.fs=Us,this[x(999)]=void 0,this.edgeSP=void 0,this[x(1326)]=void 0,this.silhouetteEdgeCommand=void 0,this.useLineColor=!1}function Md(){const e=o;return Cesium[e(3154)].fromCache({cull:{enabled:!1},depthTest:{enabled:!0,func:Cesium[e(3608)][e(932)]},blending:Cesium[e(2147)][e(2672)],stencilTest:{backFunction:Cesium[e(2311)][e(3648)],backOperation:{fail:Cesium.StencilOperation.KEEP,zFail:Cesium[e(2521)].KEEP,zPass:Cesium[e(2521)][e(475)]},enabled:!0,frontFunction:Cesium[e(2311)].ALWAYS,frontOperation:{fail:Cesium[e(2521)][e(3384)],zFail:Cesium[e(2521)][e(3384)],zPass:Cesium[e(2521)][e(475)]},mask:Cesium[e(2128)][e(859)],reference:Cesium.StencilConstants.CESIUM_3D_TILE_MASK}})}function Rd(){const e=o;return Cesium[e(3154)][e(4073)]({cull:{enabled:!0},depthTest:{enabled:!0,func:Cesium[e(3608)][e(932)]},blending:Cesium[e(2147)][e(2672)]})}Ve.prototype=Object[o(1693)](ux[o(3096)]),Ve.prototype[o(4152)]=ux,new Cesium[o(2756)],new Cesium[o(2756)],new Cesium.Cartesian4;let Ai=new Cesium.Cartesian4;function Dd(e,x,t){const a=o;var r=t.materialPass||{};let n={uGeoMatrix:function(){return t[C0(3248)]},uTexMatrix:function(){return e[C0(1082)]},uFillForeColor:function(){const u=C0;return t[u(3537)]?x[u(3865)][u(3694)]:x.style3D[u(939)]},uDiffuseColor:function(){return e[C0(1150)]},uAmbientColor:function(){return e[C0(1434)]},uInverseGeoMatrix:function(){return t[C0(2174)]},uTexture:function(){const u=C0;let c=e.textures[0];return c[u(3561)]?c[u(2616)]&&c.ready?c:e[u(1109)]?e[u(1109)]:c:e[u(3580)][0]},uTexture2:function(){return e[C0(3580)][1]},uTexAtlasDim:function(){const u=C0;let c=e[u(3580)][0].renderable?e.textures[0]:e[u(1109)]?e[u(1109)]:e[u(3580)][0];if(Ai.x=c[u(2375)],Ai.y=c[u(2388)],e[u(3580)][1]){let f=e.textures[1][u(2616)]?e[u(3580)][1]:e.ancestorTextureBake?e[u(951)]:e[u(3580)][1];Ai.z=f[u(2375)],Ai.w=f[u(2388)]}return Ai},batchTextureAtlas:function(){const u=C0;return e[u(3408)][u(2115)]},batchTextureAtlasStep:function(){const u=C0;return e[u(3408)][u(1456)]},batchTextureAtlasSec:function(){const u=C0;return e[u(3133)][u(2115)]},batchTextureAtlasStepSec:function(){return e[C0(3133)]._textureStep},uTexture0Width:function(){const u=C0;return e[u(3580)][0][u(2375)]},uTexture1Width:function(){const u=C0;return e.textures[1][u(2375)]},uBaseColorTextureIndex:function(){const u=C0;return r[u(2608)]>-1?r[u(2608)]:x[u(2505)][u(1404)].baseColorTextureIndex},uBaseColorFactor:function(){const u=C0;return r[u(1710)]||x._PBRMaterialParams[u(1404)][u(3873)]},uMetallicFactor:function(){const u=C0;return r[u(4018)]||x[u(2505)].pbrMetallicRoughness[u(2634)]},uRoughnessFactor:function(){const u=C0;return Cesium.defaultValue(r[u(1700)],x[u(2505)].pbrMetallicRoughness[u(2071)])},uEmissiveFactor:function(){const u=C0;return r._emissiveFactor||x[u(2505)][u(1404)][u(1403)]},uEmissionTexture:function(){const u=C0;if(Ne(r.emissiveTexture))return r[u(2678)];var c=r[u(2203)];return c>-1&&Ne(r[u(3508)][c])?r[u(3508)][c]:x._PBRMaterialParams[u(1404)][u(2678)]},uMetallicRoughnessTexture:function(){const u=C0;return Ne(r[u(711)])&&r[u(711)]>-1?Ne(r[u(1246)])?r[u(1246)]:r._textures[r[u(711)]]:x[u(2505)][u(1404)][u(1246)]},uNormalTexture:function(){const u=C0;return Ne(r[u(3060)])&&r[u(3060)]>-1?r.normalTexture?r[u(3845)]:r[u(3508)][r[u(3060)]]:x._PBRMaterialParams[u(1404)][u(3845)]},uNormalTextureScale:function(){const u=C0;return Ne(r[u(2931)])?r[u(2931)]:x[u(2505)][u(1404)][u(3770)]},uOcclusionTexture:function(){const u=C0;return Ne(r[u(3736)])&&r._occlusionTextureIndex>-1?r.occlusionTexture?r.occlusionTexture:r[u(3508)][r._occlusionTextureIndex]:x[u(2505)][u(1404)].occlusionTexture},uIndexOfRefraction:function(){const u=C0;return Ne(r[u(1796)])&&r[u(1796)]>0?r[u(1796)]:x[u(2505)][u(1404)].indexOfRefraction},uTransmissionFactor:function(){const u=C0;return Ne(r._transmissionFactor)&&r[u(868)]>0?r[u(868)]:Ne(x._PBRMaterialParams[u(1404)].volume)&&Ne(x._PBRMaterialParams[u(1404)][u(745)].transmissionFactor)?x._PBRMaterialParams.pbrMetallicRoughness.volume.transmissionFactor:1},uBaseTexture:function(){const u=C0;return Ne(r[u(2608)])&&r._baseColorTextureIndex>-1?r[u(1558)]:x[u(2505)][u(1404)][u(1558)]},decodePositionMin:function(){const u=C0;return t[u(1741)][u(3160)]},decodePositionNormConstant:function(){return t[C0(1741)].vertCompressConstant}};Object[a(3677)](n,zt(x));let s=t[a(1741)][a(3582)];return s&&s[a(3650)]>0&&(n[a(2752)]=function(){const u=a;return t[u(1741)][u(2222)][0]},n.decodeTexCoord1vNormConstant=function(){return t[a(1741)].texCoordCompressConstant[1]},n[a(2936)]=function(){const u=a;return t[u(1741)][u(3582)][0]},n[a(2493)]=function(){const u=a;return t[u(1741)][u(3582)][1]}),n}new Cesium[o(1911)],new Cesium[o(1911)],Ve[o(3096)][o(2838)]=function(e,x,t,a,r){const n=o;if(!t[n(3126)]||t[n(3126)][n(3650)]==0||!t[n(3008)]||t.instanceCount===0)return null;let s,u,c=new Cesium[n(1900)]({primitiveType:Cesium[n(1970)][n(3487)],modelMatrix:this[n(931)],boundingVolume:this[n(1948)],pass:Cesium.Pass.CESIUM_3D_TILE,owner:this,cull:!0});this[n(999)]=new Cesium.VertexArray({context:e,attributes:t[n(3126)],indexBuffer:a}),c[n(2457)]=this[n(999)],c[n(3008)]=t[n(3008)],s=new Cesium[n(635)]({sources:[Gs]}),u=new Cesium[n(635)]({sources:[Hs]}),r||(s[n(3553)][n(2583)]("SILHOUETTE"),u[n(3553)].push(n(2569))),s.defines[n(2583)]("ANTIALIASING"),u[n(3553)][n(2583)]("ANTIALIASING"),s[n(3553)][n(2583)](n(1415)),u.defines[n(2583)](n(1415)),x[n(1128)]&&u[n(3553)].push(ProgramDefines.APPLY_SWIPE),x._enableClip&&u[n(3553)][n(2583)](n(3556)),x._enableClipPlane&&u.defines.push(n(1872)),x._hasExcavation&&(s[n(3553)].push(ProgramDefines[n(2959)]),u[n(3553)][n(2583)](ProgramDefines[n(2959)])),s[n(3553)][n(2583)]("MODE 0"),u.defines[n(2583)](n(2248)),this.edgeSP=Cesium[n(2416)][n(4073)]({context:e,vertexShaderSource:s,fragmentShaderSource:u,attributeLocations:t[n(4127)]}),c[n(2360)]=this.edgeSP,c[n(2256)]=Cesium[n(3154)][n(4073)]({depthTest:{enabled:!0,func:Cesium[n(3608)].LESS_OR_EQUAL},cull:{enabled:!0},blending:Cesium[n(2147)][n(2672)]});let f={uLineColor:function(){const l=n;return x.style3D[l(3694)]},uLineWidth:function(){const l=n;return x.style3D[l(3288)]},uDistanceFalloffFactor:function(){return x[n(473)]},u_polygonOffset:function(){const l=n;return new Cesium[l(2351)](-5,-5)}};return c.uniformMap=Cesium[n(840)](f,this[n(3177)][n(2551)]),c[n(842)]=t.edgeLength,c.edgeCount=t[n(3008)],c},Ve[o(3096)].createCommand=function(){const e=o;if(Cesium[e(692)](this[e(3177)])||this[e(2443)][e(3650)]!==0||this[e(2958)][e(3650)]!==0||this[e(3373)][e(3650)]!==0)return;let x=this[e(1826)],t=x[e(716)],a=this[e(1741)],r=this[e(787)],n=a[e(666)];if(r[e(3650)]<1)return;let s=r[0],u=this[e(2245)];this.vertexArray=new Cesium[e(2380)]({context:t,attributes:n,indexBuffer:s[e(1164)]});let c=Cesium[e(1970)][e(3487)];switch(s[e(2391)]){case 1:c=Cesium[e(1970)][e(2621)];break;case 2:c=Cesium[e(1970)][e(1692)];break;case 4:c=Cesium[e(1970)].TRIANGLES}this.useLineColor=c===Cesium[e(1970)].LINES;let f=!1;(u[e(2769)]===ar[e(3945)]||u[e(2769)]===ar[e(789)]||x[e(2396)]&&u[e(1294)])&&(f=!0),this[e(3177)]=new Cesium.DrawCommand({primitiveType:c,modelMatrix:this[e(931)],boundingVolume:this.boundingVolume,pickId:this[e(2511)],vertexArray:this[e(2457)],shaderProgram:this.shaderProgram,pass:f?Cesium[e(2798)][e(2359)]:Cesium.Pass[e(1978)],renderState:u[e(1294)]?Rd():Md(),instanceCount:a[e(3008)]});let l=Dd(u,x,this);this.batchTable&&(l=this[e(3408)][e(4059)]()(l)),u[e(3408)]&&(l=u.batchTable.getUniformMapCallback()(l)),this.colorCommand.uniformMap=l,this.vs=void 0,this.fs=void 0,this[e(2266)]=!0},Ve[o(3096)][o(1137)]=function(e){const x=o;if(!this[x(3177)]||!this.edgeGeometry||this[x(1326)])return;let t=this[x(1826)].context,a=this.edgeGeometry;Lx[x(4188)](t,a[x(2079)]),Lx[x(3407)](t,a[x(1362)]);let r=Lx.createIndexBuffer(t);this[x(1326)]=this[x(2838)](t,this[x(1826)],a[x(2079)],r,!0),this[x(2487)]=this.createOneEdgeCommand(t,this.layer,a[x(1362)],r,!1)};let zs=new Ta;Ve[o(3096)][o(1391)]=function(e){const x=o;this[x(2245)][x(917)](),this.material[x(2615)](e,this[x(1826)]);let t=this.material[x(2399)];for(;t[x(3650)];){let a=t.peek(),r=a[x(2238)],n=a[x(3999)];if(zs[x(2590)](e[x(716)],this,r,n),!e[x(3312)][x(1112)](zs,Cesium[x(2535)][x(3102)]))break;t[x(2349)]()}t[x(3650)]===0&&this[x(2245)][x(2099)](),this[x(2245)][x(3408)].update(e)},Ve.prototype[o(1277)]=function(e,x){const t=o;this.ready||(this[t(478)](e),this[t(2512)](),this[t(3191)](e),this.createShaderProgram(e),this.createCommand(e),this[t(1137)](e),this[t(3057)](x))},Ve.prototype.update=function(e,x){const t=o;this[t(3161)]&&(this[t(1388)](),this.batchTableDirty=!1),this[t(3408)]&&this[t(3408)].update(e),this.material[t(3408)]&&this[t(1391)](e),x.style3D[t(751)]!==ot.WireFrame&&e.commandList.push(this[t(3177)]),x[t(3865)].fillStyle!==ot[t(966)]&&(this[t(1326)]&&(e[t(3138)][t(2583)](this[t(1326)]),x[t(1631)](this.regularEdgeCommand[t(842)],this[t(1326)].edgeCount)),this.silhouetteEdgeCommand&&(e[t(3138)][t(2583)](this.silhouetteEdgeCommand),x[t(1631)](this.silhouetteEdgeCommand.edgeTotalLength,this.silhouetteEdgeCommand[t(2819)])))},Ve[o(3096)][o(3777)]=function(){return!1},Ve[o(3096)][o(3701)]=function(){const e=o;return this[e(2360)]=this.shaderProgram&&!this[e(2360)][e(3777)]()&&this[e(2360)][e(3701)](),this[e(2457)]=this[e(2457)]&&!this[e(2457)][e(3777)]()&&this[e(2457)][e(3701)](),this[e(2245)]=this[e(2245)]&&!this.material[e(3777)]()&&this.material.destroy(),this[e(3408)]=this.batchTable&&!this[e(3408)][e(3777)]()&&this[e(3408)][e(3701)](),this[e(999)]=this[e(999)]&&!this[e(999)][e(3777)]()&&this[e(999)].destroy(),this[e(2045)]=this[e(2045)]&&!this.edgeSP[e(3777)]()&&this[e(2045)][e(3701)](),this.colorCommand=void 0,this[e(1741)]=null,this[e(787)]=null,this.modelMatrix=void 0,this[e(1095)]=void 0,this[e(1170)]=void 0,this.vs=void 0,this.fs=void 0,Cesium.destroyObject(this)};var Ks=o(1287),ks=o(1975);function y2(e){ux.call(this,e),this.vs=Ks,this.fs=ks}function Id(){const e=o;return Cesium[e(3154)][e(4073)]({cull:{enabled:!0},depthTest:{enabled:!0,func:Cesium.DepthFunction.LESS_OR_EQUAL}})}function Ld(e,x){const t=o;let a=x[t(1741)],r={uGeoMatrix:function(){return x[t(3248)]},uInverseGeoMatrix:function(){return x.invGeoMatrix},uUseWValue:function(){return x[t(3277)]},uBottom:function(){const s=t;return e[s(3865)][s(3867)]},uFillForeColor:function(){return e[t(3865)].fillForeColor},uPointCloudSize:function(){const s=t;return e[s(3865)][s(2565)]}};Object[t(3677)](r,zt(e));let n=a.compressOptions;return(n&cx[t(3515)])===cx[t(3515)]&&(r.decode_position_min=function(){return a[t(3160)]},r[t(2146)]=function(){return a.vertCompressConstant}),(n&cx[t(3155)])===cx[t(3155)]&&(r.normal_rangeConstant=function(){return a[t(2564)]}),(n&cx[t(753)])===cx[t(753)]&&(a.texCoordCompressConstant[t(3650)]>0&&(r[t(1733)]=function(){return a.minTexCoordValue[0]},r[t(1761)]=function(){return a[t(2222)][0]}),a[t(2222)][t(3650)]>1&&(r[t(1442)]=function(){return a[t(3582)][1]},r[t(1663)]=function(){return a.texCoordCompressConstant[1]}),a.texCoordCompressConstant[t(3650)]>2&&(r[t(538)]=function(){return a[t(3582)][2]},r.decode_texCoord2_normConstant=function(){return a[t(2222)][2]}),a[t(2222)][t(3650)]>3&&(r[t(2999)]=function(){return a[t(3582)][3]},r[t(4098)]=function(){return a.texCoordCompressConstant[3]}),a[t(2222)][t(3650)]>4&&(r[t(2674)]=function(){return a[t(3582)][4]},r[t(582)]=function(){return a[t(2222)][4]}),a[t(2222)][t(3650)]>5&&(r.decode_texCoord5_min=function(){return a[t(3582)][5]},r.decode_texCoord5_normConstant=function(){return a[t(2222)][5]}),a[t(2222)][t(3650)]>6&&(r.decode_texCoord6_min=function(){return a.minTexCoordValue[6]},r[t(3480)]=function(){return a.texCoordCompressConstant[6]}),a.texCoordCompressConstant[t(3650)]>7&&(r.decode_texCoord7_min=function(){return a[t(3582)][7]},r[t(1410)]=function(){return a[t(2222)][7]})),r}y2[o(3096)]=Object[o(1693)](ux[o(3096)]),y2[o(3096)][o(4152)]=ux,y2[o(3096)][o(1852)]=function(){const e=o;if(Cesium.defined(this.colorCommand)||this.vertexBufferToCreate[e(3650)]!==0||this[e(2958)][e(3650)]!==0||this[e(3373)][e(3650)]!==0)return;let x=this[e(1826)],t=x[e(716)],a=this[e(1741)];this[e(787)];let r=a[e(666)];this.vertexArray=new Cesium.VertexArray({context:t,attributes:r}),this[e(3177)]=new Cesium[e(1900)]({primitiveType:Cesium[e(1970)][e(2621)],modelMatrix:this[e(931)],boundingVolume:this[e(1948)],vertexArray:this[e(2457)],shaderProgram:this[e(2360)],pass:Cesium.Pass.CESIUM_3D_TILE,renderState:Id(),count:a[e(4041)]}),this[e(3177)].uniformMap=Ld(x,this),this[e(1741)]=void 0,this.arrIndexPackage=void 0,this.vs=void 0,this.fs=void 0,this.ready=!0},y2[o(3096)][o(1277)]=function(e,x){const t=o;this[t(2266)]||(this[t(3191)](e),this[t(2721)](e),this[t(1852)](e))},y2[o(3096)][o(2696)]=function(e,x){const t=o;e[t(3138)].push(this[t(3177)])},y2.prototype[o(3777)]=function(){return!1},y2[o(3096)].destroy=function(){const e=o;return this[e(2360)]=this[e(2360)]&&!this[e(2360)][e(3777)]()&&this.shaderProgram[e(3701)](),this[e(2457)]=this[e(2457)]&&!this.vertexArray[e(3777)]()&&this[e(2457)][e(3701)](),this[e(2245)]=this[e(2245)]&&!this[e(2245)][e(3777)]()&&this[e(2245)][e(3701)](),this[e(3177)]=void 0,this[e(1741)]=null,this[e(787)]=null,this.modelMatrix=void 0,this.vs=void 0,this.fs=void 0,Cesium[e(1136)](this)};var Ws=o(3934),Xs=`uniform sampler2D uReflectMap;
uniform sampler2D uNoiseMap;
uniform vec4 uTintColour;
uniform vec4 uWaterColour;
uniform vec4 uFillForeColor;
uniform float uFresnelPower;
uniform float uMinFresnel;
uniform float uMaxFresnel;
uniform float uNoiseScale;
uniform float uWaterBrightness;
varying vec2 vNoiseCoord;
varying vec3 vProjectionCoord;
varying vec3 vEyeDir;
varying vec3 vNormal;
varying vec4 vColor;
varying vec4 vSecondColor;
varying vec4 vPositionMC;
varying vec3 vPositionEC;

#ifdef APPLY_SWIPE
    uniform vec4 uSwipeRegion;
#endif

#ifdef APPLY_SWIPE
    uniform vec4 uSwipeRegion;
    void rollerShutter(vec2 coord, vec4 region)
    {
        vec2 f = step(region.xw, coord);
        vec2 s = step(coord, region.zy);
        if (f.x * f.y * s.x * s.y < 1.0)
        {
            discard;
        }
    }
#endif

#ifdef CLIP
    uniform float uClipMode;
    uniform vec4 uClipPlanes[6];
    float getClipDistance(vec3 pos, vec3 planeNormal, float disToOrigin)
    {
        return dot(planeNormal, pos) + disToOrigin;
    }

    float clipBehindAllPlane(float fBorderWidth, vec4 vertex)
    {
        float distance = 0.0;
        float result = -1.0;
    #ifdef CLIPPLANE
        distance = getClipDistance(vertex.xyz, uClipPlanes[0].xyz, uClipPlanes[0].w);
        if (distance < 0.0)
        {
            return 1.0;
        }
        else if (distance < fBorderWidth)
        {
            result = 0.0;
        }
    #else
        for(int i = 0; i < 6; i++)
        {
            distance = getClipDistance(vertex.xyz, uClipPlanes[i].xyz, uClipPlanes[i].w);
            if(distance < 0.0)
            {
                return 1.0;
            }
            else if(distance < fBorderWidth)
            {
                result = 0.0;
            }
        }
    #endif
        return result;
    }

    float clipBehindAnyPlane(float fBorderWidth, vec4 vertex)
    {
        float result = 1.0;
        for(int i = 0; i < 6; i++)
        {
            float distance = getClipDistance(vertex.xyz, uClipPlanes[i].xyz, uClipPlanes[i].w);
            if((distance + fBorderWidth) < 0.0)
            {
                return -1.0;
            }
            else if(distance < 0.0)
            {
                result = 0.0;
            }
        }
        return result;
    }
    float clipAnythingButLine(float fBorderWidth, vec4 vertex)
    {
        float result = -1.0;
        for(int i = 0; i < 6; i++)
        {
            float distance = getClipDistance(vertex.xyz, uClipPlanes[i].xyz, uClipPlanes[i].w);
            if(distance < 0.0)
            {
                return -1.0;
            }
            else if(distance < fBorderWidth)
            {
                result = 0.0;
            }
        }
        return result;
    }
    vec4 clip(vec4 vertex)
    {
        if(uClipMode < 0.5)
        {
            return vec4(1.0);
        }
    #ifdef GL_OES_standard_derivatives
        float dxc = abs(dFdx(vertex.x));
        float dyc = abs(dFdy(vertex.y));
        float fBorderWidth = max(dxc, dyc);
    #else
        float fBorderWidth = 1.0;
    #endif
        float clipResult = 1.0;
        if(uClipMode < 1.5)
        {
            clipResult = clipBehindAnyPlane(fBorderWidth, vertex);
        }
        else if(uClipMode < 2.5)
        {
            clipResult = clipBehindAllPlane(fBorderWidth, vertex);
        }
        else if(uClipMode < 3.5)
        {
            clipResult = clipAnythingButLine(fBorderWidth, vertex);
        }
        if(clipResult < -0.5)
        {
            discard;
        }
        else if(clipResult < 0.5)
        {
            return vec4(1.0);
        }
        return vec4(1.0);
    }
#endif

vec4 AdjSaturation(in vec4 inputColor, in float saturation)
{
	vec3 lumCoeff = vec3(0.2125, 0.7154, 0.0721);
	vec3 intensity = vec3(dot(inputColor.rgb, lumCoeff));
	vec3 tempColor = mix(intensity, inputColor.rgb, saturation);
	return vec4(tempColor, 1.0);
}
#include <executeExcavation>

void main()
{
#ifdef EXCAVATION
    if(executeExcavation())
        {
            discard;
        }
#endif
#ifdef APPLY_SWIPE 
    rollerShutter(gl_FragCoord.xy, uSwipeRegion);
#endif
    if(vColor.a < 0.1)
    {
        discard;
    }
    gl_FragColor = vColor;
    vec2 final = vProjectionCoord.xy / vProjectionCoord.z;
    vec3 noiseNormal = (texture2D(uNoiseMap, (vNoiseCoord.xy / 5.0)).rgb - 0.5).rbg * uNoiseScale;
    final += noiseNormal.xz;
    float realMinFresnel, realMaxFresnel;
    if(uMinFresnel < uMaxFresnel)
    {
        realMinFresnel = uMinFresnel;
        realMaxFresnel = uMaxFresnel;
    }
    else
    {
        realMinFresnel = uMaxFresnel;
        realMaxFresnel = uMinFresnel;
    }
    float fresnelBias = realMinFresnel;
    float fresnelScale = (realMaxFresnel - realMinFresnel) / 1.0;
    float fresnel = fresnelBias + fresnelScale * pow(1.0 + dot(normalize(vEyeDir), vNormal), uFresnelPower);
    fresnel = clamp(fresnel, 0.05, 0.95);
    vec4 reflectionColour = texture2D(uReflectMap, final);
    vec4 refractionColour = reflectionColour + uTintColour;
    vec4 resultColour = mix(uWaterColour, reflectionColour, fresnel);
    resultColour = AdjSaturation(resultColour, 1.0);
    resultColour = resultColour * uWaterBrightness;
    resultColour.a = uWaterColour.a;
    resultColour *= uFillForeColor;
    gl_FragColor = gl_FragColor * resultColour;
#ifdef CLIP
    gl_FragColor *= clip(vec4(vPositionEC, 1.0));
#endif
    if(gl_FragColor.a < 0.1)
    {
        discard;
    }

}`;function _2(e){const x=o;ux.call(this,e),this.vs=Ws,this.fs=Xs,this.waterIndex=-1,this[x(1614)]=0}function Fd(){const e=o;return Cesium[e(3154)].fromCache({cull:{enabled:!0},depthTest:{enabled:!0,func:Cesium[e(3608)].LESS_OR_EQUAL},blending:Cesium[e(2147)][e(2672)]})}function Od(e,x,t){return{uGeoMatrix:function(){return t[C0(3248)]},uFillForeColor:function(){return x[C0(3865)].fillForeColor},uReflectMap:function(){const a=C0;let r=x[a(716)].reflectFramebuffer&&x[a(716)][a(714)][a(1389)]&&x.context.reflectFramebuffer[a(1389)][a(3357)]();return r?r[a(1626)](0):x.context[a(4007)]},uNoiseMap:function(){const a=C0;return x.context[a(4007)]},uTimeVal:function(){const a=C0;let r=.01*x[a(2490)].timeVal;return t[a(1614)]=t[a(1614)]>1?r:t[a(1614)]+r,t[a(1614)]},uScale:function(){const a=C0;return x._waterParameters[a(730)]},uScroll:function(){const a=C0;return x[a(2490)][a(1439)]},uNoise:function(){const a=C0;return x[a(2490)][a(4082)]},uBumpSpeed:function(){const a=C0;return x[a(2490)][a(2007)]},uFresnelPower:function(){const a=C0;return x._waterParameters[a(2515)]},uMinFresnel:function(){const a=C0;return x._waterParameters[a(1529)]},uMaxFresnel:function(){const a=C0;return x[a(2490)][a(2554)]},uTintColour:function(){const a=C0;return x[a(2490)][a(3615)]},uNoiseScale:function(){const a=C0;return x[a(2490)][a(1272)]},uWaterColour:function(){const a=C0;return x[a(2490)][a(2858)]},uWaterBrightness:function(){const a=C0;return x._waterParameters[a(3819)]}}}function Nd(e,x){const t=o;let a={boundingVolume:e[t(1948)],distance:x[t(3865)].bottomAltitude+x[t(2490)][t(1955)]};e[t(3942)]=x.addWaterPlane(a)}_2[o(3096)]=Object[o(1693)](ux[o(3096)]),_2[o(3096)][o(4152)]=ux,_2[o(3096)][o(1852)]=function(){const e=o;if(Cesium.defined(this[e(3177)])||this[e(2443)][e(3650)]!==0||this[e(2958)][e(3650)]!==0||this[e(3373)][e(3650)]!==0)return;let x=this[e(1826)],t=x[e(716)],a=this[e(1741)],r=this.arrIndexPackage,n=a[e(666)];if(r[e(3650)]<1)return;let s=r[0],u=this[e(2245)];this[e(2457)]=new Cesium[e(2380)]({context:t,attributes:n,indexBuffer:s.indexBuffer}),this[e(3177)]=new Cesium[e(1900)]({primitiveType:s[e(2391)],modelMatrix:this.modelMatrix,boundingVolume:this[e(1948)],vertexArray:this.vertexArray,shaderProgram:this.shaderProgram,pass:u[e(1294)]?Cesium[e(2798)][e(2359)]:Cesium[e(2798)][e(1978)],renderState:u[e(1294)]?getTransparentRenderState():Fd(),instanceCount:a.instanceCount});let c=Od(0,x,this);Object[e(3677)](c,zt(x)),this[e(3177)][e(2551)]=this[e(3408)][e(4059)]()(c),this[e(1741)]=void 0,this[e(787)]=void 0,this.vs=void 0,this.fs=void 0,this[e(2266)]=!0},_2.prototype[o(1277)]=function(e,x){const t=o;this.ready||(this[t(478)](e),this[t(2512)](),this[t(3191)](e),this[t(2721)](e),this[t(1852)](e),this.initLayerSetting(x),Nd(this,x))},_2.prototype[o(2696)]=function(e,x){const t=o;e.camera[t(1696)]||(this.batchTableDirty&&(this[t(1388)](),this[t(3161)]=!1),this[t(3408)][t(2696)](e),e[t(3138)][t(2583)](this[t(3177)]))},_2[o(3096)][o(3777)]=function(){return!1},_2.prototype.destroy=function(){const e=o;return this.shaderProgram=this[e(2360)]&&!this.shaderProgram[e(3777)]()&&this[e(2360)].destroy(),this.vertexArray=this[e(2457)]&&!this[e(2457)][e(3777)]()&&this[e(2457)][e(3701)](),this[e(2245)]=this.material&&!this[e(2245)][e(3777)]()&&this.material[e(3701)](),this[e(3408)]=this[e(3408)]&&!this[e(3408)][e(3777)]()&&this[e(3408)][e(3701)](),this[e(3942)]>-1&&this[e(1826)][e(3539)](this[e(3942)]),this.colorCommand=void 0,this[e(1741)]=null,this[e(787)]=null,this[e(931)]=void 0,this[e(1095)]=void 0,this[e(1170)]=void 0,this.vs=void 0,this.fs=void 0,Cesium[e(1136)](this)};var js=o(3519),qs=o(3925),Ys=o(1653),Js=`
uniform sampler2D uTexture; 
varying vec4 vColor; 
varying vec4 vTexCoord; 
varying vec4 clip_vertex; 
varying vec4 vSecondColor; 

 
void main() 
{ 
	if(vColor.a < 0.1){
		discard; 
	}
	vec4 texColor = texture2D(uTexture, vTexCoord.xy); 
#ifdef RGBTOBGR 
    texColor = vec4(texColor.b, texColor.g, texColor.r, texColor.a); 
#endif 
	gl_FragColor = vColor * texColor; 
	if(gl_FragColor.a < 0.1) 
	{ 
		discard; 
	} 
    gl_FragColor = czm_gammaCorrect(gl_FragColor); 
}`;const Vd=Cesium.defined,Ud=Cesium[o(1136)],Gd=Cesium.Cartesian2,Hd=Cesium.Cartesian3,yi=Cesium[o(2879)],zd=Cesium[o(1755)];function mx(e,x){const t=o;this[t(2702)]=e,this[t(899)]=void 0,this[t(3707)]=new yi,this[t(890)]=1e3,this[t(3930)]=-1,this[t(1946)]=Number[t(2499)],this._pixelWidth=-1,this[t(654)]=-1,this._centerPixelOffset=-1,this[t(3045)]=x,this[t(929)]=void 0}Object.defineProperties(mx[o(3096)],{windowCoordRect:{get:function(){return this._windowCoordRect}},heigtRangeMax:{get:function(){return this[o(3930)]},set:function(e){const x=o;this[x(3930)]=e;var t=e*e;this._distanceRangeSquare=Math[x(2092)](1e4,t)}},weight:{get:function(){return this._weight},set:function(e){this._weight=e}},pixelWidth:{get:function(){return this[o(1405)]},set:function(e){this._pixelWidth=e}},pixelHeight:{get:function(){return this[o(654)]},set:function(e){const x=o;this[x(654)]=e}},worldPosLeftBottom:{get:function(){return this[o(899)]},set:function(e){this._worldPosLeftBottom=e}},centerPixelOffset:{get:function(){return this[o(3829)]},set:function(e){this._centerPixelOffset=e}},layerName:{get:function(){const e=o;return this._layer[e(3085)]}},layer:{get:function(){return this._layer}},id:{get:function(){return this[o(2702)]}},visible:{get:function(){return this._visible},set:function(e){const x=o;(!Vd(this[x(929)])||e!==this[x(929)]||e&&this[x(1826)]._objsHideList._hash[this.id])&&mx[x(2872)](this,e),this[x(929)]=e}}});var _i=new Gd;mx[o(3096)][o(593)]=function(e,x){const t=o;zd[t(1076)](e,x,this[t(899)],_i),this._windowCoordRect[t(2599)]=_i.x,this[t(3707)].east=_i.x+this[t(1405)],this[t(3707)][t(852)]=_i.y,this[t(3707)].north=_i.y-this._pixelHeight},mx[o(3096)][o(2284)]=function(e,x){const t=o;return this[t(3707)][t(2599)]+200>0&&this[t(3707)].east<e+this._pixelWidth&&this._windowCoordRect[t(1270)]+200>0&&this[t(3707)].south-50<x+this[t(654)]},mx[o(3096)][o(3254)]=function(e){const x=o;return!this._layer[x(3776)]||e<this[x(3930)]},mx[o(3096)][o(3474)]=function(e){const x=o;return!this[x(3045)][x(3776)]||Hd[x(4175)](e,this[x(899)])<this._distanceRangeSquare};var Kt=new yi,kt=new yi;function Zs(e,x){const t=o;e[t(1090)]+=x,e.west-=x,e[t(852)]+=x,e.north-=x}mx[o(964)]=function(e,x,t){const a=o;yi.clone(e,Kt),yi[a(3552)](x,kt),Zs(Kt,t),Zs(kt,t);var r=Math[a(2092)](Kt[a(2599)],kt[a(2599)]),n=Math.min(Kt.south,kt[a(852)]),s=Math[a(1803)](Kt[a(1090)],kt[a(1090)]);return!(n<=Math[a(2092)](Kt[a(1270)],kt[a(1270)])||r>=s)};var Ba=[];function Kd(e,x){const t=o;for(var a=0,r=e._layerQueue[t(3650)];a<r;a++){var n=e[t(1289)][a];if(n.id===x)return n}}function Qs(e,x){const t=o;for(var a in x){var r=e[t(3866)](a),n=r?r[t(476)]:void 0;if(n){var s=a,u=Kd(e,n);if(u){var c=x[u[t(3085)]];c&&c[t(3650)]>0&&(x[s]=c)}}}}mx[o(2807)]=function(e,x,t){const a=o;Ba[a(3650)]=0,e[a(877)](function(_,y){const A=a;return _.weight-y[A(2887)]});for(var r=0,n=e[a(3650)];r<n;r++){var s=e[r];s[a(3237)];var u=s[a(1826)];if(!u[a(476)]||!t){var c=s.id;if(u[a(3816)][a(3203)]){if(u[a(3816)][c]!==!0)continue}else if(u[a(3816)][c]===!1){s.visible=!1;continue}for(var f=s[a(3017)],l=!1,m=0,h=Ba.length;m<h;m++){var C=Ba[m],p=C[a(3017)];if(!(s.id===C.id&&s.layer.id===C[a(1826)].id)&&mx.isIntersectionTest(f,p,x)){l=!0;break}}l?s[a(1407)]=!1:(Ba[a(2583)](s),s[a(1407)]=!0)}}},mx[o(3245)]={},mx[o(1877)]={},mx.addToChangeQueue=function(e,x){const t=o;var a,r=e[t(3237)];(a=x?mx[t(3245)]:mx[t(1877)])[r]||(a[r]=[]);var n=a[r];n[t(2583)](e.id)},mx.addPotentialVisibiltyChangedLayer=function(e){const x=o;mx._visibleChangedQueue[e]||(mx[x(3245)][e]=[]),mx[x(1877)][e]||(mx[x(1877)][e]=[])},mx[o(2974)]=function(e,x){const t=o;for(var a in x&&(Qs(e,mx[t(3245)]),Qs(e,mx[t(1877)])),mx[t(3245)]){var r=e[t(3866)](a);(n=mx[t(3245)][a])[t(3650)]>0&&r.setOnlyObjsVisible(n,!0,!1)}for(var a in mx[t(1877)]){var n;r=e[t(3866)](a),(n=mx[t(1877)][a])[t(3650)]>0&&r[t(560)](n,!1,!1)}},mx[o(4111)]=function(){const e=o;mx[e(3245)]={},mx[e(1877)]={}},mx[o(3096)].isDestroyed=function(){return!1},mx.prototype.destroy=function(){return Ud(this)};const g2=Cesium[o(692)],Ea=Cesium[o(820)];Cesium[o(549)],Cesium[o(3631)];const Pa=Cesium[o(516)],kd=Cesium[o(2235)];Cesium[o(463)];const G2=Cesium.Color;function le(e){const x=o;ux[x(798)](this,e),this[x(3092)]=void 0,this._pickInfo=Ea(e.pickInfo,{}),this[x(669)]=Object[x(3360)](this._pickInfo),e[x(1826)].style3D[x(1717)]===Ft.FixedXYZ?this.vs=js:this.vs=qs,e.material[x(3580)][x(3650)]>1?this.fs=Ys:this.fs=Js}function Wd(){const e=o;return Cesium[e(3154)][e(4073)]({cull:{enabled:!1},depthTest:{enabled:!0,func:Cesium[e(3608)][e(932)]},blending:Cesium[e(2147)][e(2672)]})}function Xd(e,x,t){const a=o;let r={uDiffuseColor:function(){return e[C0(1150)]},uSelColor:function(){return x[C0(2916)]},uTexture:function(){return e[C0(3580)][0]},uAmbientColor:function(){return e.ambientColor}};return Object[a(3677)](r,zt(x)),r[a(3445)]=function(){return e[a(3580)][1]},r}le[o(3096)]=Object.create(ux[o(3096)]),le[o(3096)].constructor=ux,le[o(3096)][o(1852)]=function(){const e=o;if(Cesium[e(692)](this[e(3177)])||this[e(2443)][e(3650)]!==0||this.indexBufferToCreate.length!==0||this[e(3373)].length!==0)return;let x=this[e(1826)],t=x[e(716)],a=this[e(1741)],r=this[e(787)],n=a[e(666)];if(r.length<1)return;let s=r[0],u=this[e(2245)];this[e(2457)]=new Cesium[e(2380)]({context:t,attributes:n,indexBuffer:s.indexBuffer}),this.colorCommand=new Cesium[e(1900)]({primitiveType:s[e(2391)],modelMatrix:this[e(931)],boundingVolume:this[e(1948)],vertexArray:this.vertexArray,shaderProgram:this[e(2360)],pass:u[e(1294)]?Cesium[e(2798)][e(2154)]:Cesium.Pass[e(2359)],renderState:Wd(),instanceCount:a[e(3008)]});let c=Xd(u,x);g2(this.batchTable)&&(c=this[e(3408)][e(4059)]()(c)),this[e(3177)].uniformMap=c,this.vs=void 0,this.fs=void 0,this[e(2266)]=!0},le[o(3096)][o(3401)]=function(){const e=o;var x=this[e(726)];if(g2(x))for(var t in this._selectionInforMap=new Cesium[e(2902)],x)x[e(2364)](t)&&this[e(3092)].set(t,x[t])};var je=new Cesium[o(2756)];function jd(e,x,t){const a=o;var r=x[a(3408)],n=x._selectionInforMap,s=x[a(3092)][a(2241)];for(var u in s)if(s[a(2364)](u)){var c=n.get(u);if(x[a(537)]){var f=c[a(2464)][0],l=Object[a(3360)](c.skeletonIds)[a(3650)];for(var m in c[a(2352)])if(c.skeletonIds[a(2364)](m)){var h=f*l+Number(m),C=(p=e[a(940)]({primitive:t,id:u,skeletonId:Number(m)}))[a(3560)];je.x=G2[a(4160)](C[a(3671)]),je.y=G2[a(4160)](C[a(2368)]),je.z=G2[a(4160)](C.blue),je.w=G2[a(4160)](C[a(2089)]),r[a(4163)](h,2,je)}}else{var p=t[a(1155)][u];if(g2(p)||(p=e[a(940)]({primitive:t,id:u}),t[a(1155)][u]=p),C=p[a(3560)],je.x=G2[a(4160)](C[a(3671)]),je.y=G2[a(4160)](C[a(2368)]),je.z=G2[a(4160)](C[a(640)]),je.w=G2.floatToByte(C[a(2089)]),x[a(1898)]>0)c[a(2464)].map(function(y){r[a(4163)](y,2,je)});else{var _=c[a(740)];r[a(4163)](_,2,je)}}}}le[o(3096)].initialize=function(e){const x=o;if(!this[x(2518)]){if(e._allTextOverlap||(e[x(544)]=[]),this[x(3401)](),this[x(1826)][x(2450)]!=="TextCache"&&x(3044)!==this.layer[x(2450)]||this.createBillboardsBounds(this.layer),!g2(this[x(3408)])&&Object[x(3360)](this[x(726)]).length>0){var t=this.layer,a=t[x(716)];this[x(478)](a,this,t),jd(a,this,t)}this[x(2518)]=!0}},le.prototype[o(1277)]=function(e,x){const t=o;this.ready||(this[t(705)](e),this.createPickIds(),this[t(3191)](e),this[t(2721)](e),this[t(1852)](e),this.initLayerSetting(x))},le[o(3096)][o(2696)]=function(e,x){const t=o;this[t(3161)]&&(this.updateBatchTableAttributes(),this[t(3161)]=!1),this.batchTable&&this.batchTable[t(2696)](e),this[t(1826)][t(2450)]!=="TextCache"&&this[t(1826)][t(2450)]!=="IconPointCache"||this[t(523)](x,e),e[t(3138)][t(2583)](this[t(3177)])},le[o(3096)][o(1581)]=function(e){const x=o;this[x(3416)]=[];var t=this.modelMatrix,a=this[x(3092)][x(2496)],r=this[x(1741)][x(666)][0][x(1737)],n=this[x(1741)][x(666)][0][x(1776)]||3;if(g2(r)&&g2(r.buffer)){var s,u,c=new Float32Array(r[x(4056)],r[x(2471)],r[x(3818)]/4);this[x(1826)][x(2450)]==="TextCache"?(s=this[x(1741)][x(666)][1][x(1737)],u=new Float32Array(s.buffer,s[x(2471)],s[x(3818)]/4)):(s=this[x(1741)][x(666)][3][x(1737)],u=new Float32Array(s[x(4056)],s[x(2471)],s[x(3818)]/4));for(var f,l,m,h=new Pa,C=[],p=0;p<this[x(1741)][x(4041)];p++)Pa[x(3590)](u,3*p,h),C.push(Pa[x(3552)](h));g2(e[x(3259)]),g2(e[x(1615)]);for(var _=0,y=a[x(3650)];_<y;_++){var A=new mx(this._ids[_],e);l=(f=a[_])[x(3806)],m=Ea(f[x(2418)],f[x(926)]);for(var b=Number[x(1659)],B=Number[x(2341)],T=Number[x(1659)],M=Number.MIN_VALUE,w=l;w<l+m;w++){var I=C[w];b=Math[x(1803)](I.x,b),B=Math.max(I.x,B),T=Math[x(1803)](I.y,T),M=Math[x(2092)](I.y,M)}A[x(3413)]=B-b,A[x(838)]=M-T,A[x(3649)]=.5*(B+b);var P=new Pa(c[l*n],c[l*n+1],c[l*n+2]);kd[x(1013)](t,P,P),A[x(1229)]=P,A[x(505)]=P,this._arrtextOverlapInfo[x(2583)](A)}}else console.log(x(1581))},le[o(3096)][o(523)]=function(e,x){const t=o;if(!e[t(2152)])for(var a=x[t(716)].uniformState,r=this._arrtextOverlapInfo,n=x[t(3907)]._positionCartographic[t(2388)],s=x.camera[t(2307)],u=a[t(3545)],c=a.viewportTransformation,f=a[t(2548)].width,l=a[t(2548)][t(2388)],m=0,h=r[t(3650)];m<h;m++){var C=r[m];C[t(3254)](n)?C[t(3474)](s)?(C[t(593)](u,c),C.isInViewport(f,l)?x[t(544)][t(2583)](C):C[t(1407)]=!1):C[t(1407)]=!1:C.visible=!1}},le[o(3096)][o(1637)]=function(e,x,t,a){x.then(r=>{const n=C0;if(g2(r)&&(t&&(e[n(2887)]=Ea(r[t],1e3),e.heigtRangeMax=-1),a)){var s=parseInt(r[a].split(",")[0]);e[n(1619)]=Ea(s,-1)}})},le[o(3096)][o(3777)]=function(){return!1},le.prototype[o(3701)]=function(){const e=o;return this[e(2360)]=this[e(2360)]&&!this.shaderProgram[e(3777)]()&&this.shaderProgram.destroy(),this[e(2457)]=this[e(2457)]&&!this[e(2457)].isDestroyed()&&this[e(2457)][e(3701)](),this[e(2245)]=this[e(2245)]&&!this.material[e(3777)]()&&this[e(2245)][e(3701)](),this[e(3177)]=void 0,this.vertexPackage=null,this[e(787)]=null,this.modelMatrix=void 0,this[e(1095)]=void 0,this[e(1170)]=void 0,this.vs=void 0,this.fs=void 0,this[e(3416)]=void 0,Cesium[e(1136)](this)};let nr={OSGBFile:function(e){return new A2(e)},OSGBCacheFile:function(e){return new Ve(e)},PointCloudFile:function(e){return new y2(e)},OSGBCacheFile_Water:function(e){return new _2(e)},TextCache:function(e){return new le(e)},IconPointCache:function(e){return new le(e)}};function rr(){}function qd(e,x,t){const a=o;let r={},n=x[a(1854)].material;for(let s=0,u=n[a(3650)];s<u;s++){let c=n[s][a(2245)],f=c.id,l=new Ht;r[f]=l;let m=Cesium.defaultValue(c[a(2076)],Cesium.Color.WHITE);l[a(1434)]=new Cesium[a(1911)](m.r,m.g,m.b,m.a);let h=Cesium[a(820)](c.diffuse,Cesium.Color[a(2491)]);l[a(1150)]=new Cesium[a(1911)](h.r,h.g,h.b,h.a);let C=Cesium[a(820)](c.specular,Cesium[a(1911)][a(2491)]);l[a(1086)]=new Cesium[a(1911)](C.r,C.g,C.b,C.a),l.shininess=c[a(1494)],l.bTransparentSorting=c.transparentsorting,l.alphaMode=c[a(2769)];let p=c[a(2108)],_=p[a(3650)];for(let y=0;y<_;y++){let A=p[y][a(3841)],b=A.id,B=A[a(441)].u===0?Cesium[a(587)][a(3623)]:Cesium.TextureWrap[a(4024)],T=A[a(441)].v===0?Cesium[a(587)][a(3623)]:Cesium.TextureWrap[a(4024)];l[a(1082)]=Cesium[a(2235)][a(3562)](A[a(1070)]);let M=x[a(2056)][b];if(Cesium.defined(M)&&Cesium[a(692)](M[a(2132)])&&M[a(2132)][a(3818)]>0){M[a(2437)]=B,M[a(3456)]=T;let w=t.fileName+b,I=e.textureCache[a(2067)](w);if(!Cesium[a(692)](I))switch(M[a(3561)]=!1,M[a(3229)]){case De.NONE:I=new Cesium[a(1869)]({context:e,flipY:!1,pixelFormat:M.internalFormat,source:M}),e[a(1110)][a(2139)](w,I);break;case De.CRN_DXT5:const P=Ix[a(3182)]({data:M[a(2132)],bMipMap:!0});M[a(2132)]=P.bufferView,I=new v2(e,b,M),e[a(1110)][a(2139)](w,I);break;case De.KTX2:I=Se[a(1564)](e,b,M),e[a(1110)][a(2139)](w,I);break;default:I=new v2(e,b,M),e.textureCache[a(2139)](w,I)}l.textures[a(2583)](I)}}}return r}function Yd(e,x){const t=o;let a,r,n=new Cesium[t(1475)],s=new Cesium.Cartesian3,u=e.vertexAttributes[0],c=u[t(1776)],f=Cesium[t(692)](e[t(2326)])&&(e[t(2326)]&cx[t(3515)])===cx[t(3515)],l=1;f?(l=e[t(1341)],a=new Cesium[t(516)](e.minVerticesValue.x,e[t(3160)].y,e[t(3160)].z),r=new Uint16Array(u[t(1737)][t(4056)],u[t(1737)][t(2471)],u.typedArray[t(3818)]/2)):r=new Float32Array(u[t(1737)][t(4056)],u.typedArray.byteOffset,u.typedArray[t(3818)]/4);let m=[];for(let h=0;h<e[t(4041)];h++)Cesium[t(516)].fromArray(r,c*h,s),f&&(s=Cesium[t(516)][t(1582)](s,l,s),s=Cesium[t(516)][t(1050)](s,a,s)),m[t(2583)](Cesium.Cartesian3.clone(s));return Cesium.BoundingSphere[t(3274)](m,n),Cesium.BoundingSphere[t(3011)](n,x,n),m.length=0,n}let Jd=new Cesium[o(516)];function Zd(e,x){const t=o;let a=new Cesium[t(1475)],r=e[t(689)];if(!Cesium[t(692)](r))return a;let n=new Cesium.Cartesian3(r[0],r[1],r[2]),s=new Cesium.Cartesian3(r[3],r[4],r[5]),u=Cesium[t(516)].lerp(n,s,.5,Jd),c=Cesium.Cartesian3[t(4114)](u,n);return a.center=u,a[t(1707)]=c,Cesium[t(1475)][t(3011)](a,x,a),a}function Qd(e,x){return e[o(2369)]>-1?Zd(e,x):Yd(e,x)}function $d(e,x){const t=o;if(e[t(3157)]){const r=new Cesium[t(463)],n=new Cesium[t(516)](e[t(3157)].x,e[t(3157)].y,e[t(3157)].z);Cesium[t(2235)][t(1013)](x,n,n);const s=new Cesium[t(2756)](e[t(1779)].x,e[t(1779)].y,e.xExtent.z,0),u=new Cesium[t(2756)](e[t(3247)].x,e[t(3247)].y,e.yExtent.z,0),c=new Cesium.Cartesian4(e[t(3086)].x,e[t(3086)].y,e[t(3086)].z,0);return Cesium.Matrix4.multiplyByVector(x,s,s),Cesium.Matrix4[t(3688)](x,u,u),Cesium[t(2235)].multiplyByVector(x,c,c),Cesium[t(463)].setColumn(r,0,s,r),Cesium.Matrix3.setColumn(r,1,u,r),Cesium.Matrix3[t(763)](r,2,c,r),new Cesium[t(874)](n,r)}const a=[];a[t(2583)](new Cesium[t(516)](e[t(1803)].x,e[t(1803)].y,e[t(1803)].z)),a[t(2583)](new Cesium.Cartesian3(e[t(1803)].x,e[t(1803)].y,e[t(2092)].z)),a[t(2583)](new Cesium[t(516)](e[t(1803)].x,e.max.y,e[t(1803)].z)),a[t(2583)](new Cesium.Cartesian3(e[t(1803)].x,e[t(2092)].y,e[t(2092)].z)),a[t(2583)](new Cesium[t(516)](e[t(2092)].x,e[t(1803)].y,e.min.z)),a.push(new Cesium.Cartesian3(e[t(2092)].x,e[t(1803)].y,e[t(2092)].z)),a[t(2583)](new Cesium.Cartesian3(e.max.x,e[t(2092)].y,e[t(1803)].z)),a[t(2583)](new Cesium.Cartesian3(e[t(2092)].x,e[t(2092)].y,e[t(2092)].z));for(let r=0;r<8;r++)a[r]=Cesium.Matrix4[t(1013)](x,a[r],a[r]);return Cesium.OrientedBoundingBox[t(3274)](a)}function xm(e,x,t,a,r){const n=o;let s=a.geodes;for(let u=0,c=s[n(3650)];u<c;u++){let f,l=s[u],m=l[n(2951)],h=Cesium[n(2235)][n(3640)](e.modelMatrix,m,new Cesium.Matrix4);Cesium[n(692)](r[n(1948)])&&(Cesium[n(692)](r[n(1948)][n(2291)])?f=$d(r[n(1948)][n(2291)],e[n(931)]):Cesium.defined(r[n(1948)][n(1705)])&&(f=new Cesium[n(1475)](r[n(1948)][n(1705)][n(3157)],r[n(1948)][n(1705)][n(1707)]),Cesium[n(1475)][n(3011)](f,e[n(931)],f)));let C=l[n(3004)];for(let p=0,_=C[n(3650)];p<_;p++){let y,A=C[p],b=x[n(2604)][A],B=b[n(1741)],T=b[n(787)],M=b.pickInfo;T[n(3650)]>0&&(y=t[T[0][n(3834)]]);let w=Cesium[n(692)](f)?f:Qd(B,h);const I=nr[e[n(2450)]]({layer:e,vertexPackage:B,arrIndexPackage:T,pickInfo:M,modelMatrix:h,geoMatrix:m,boundingVolume:w,material:y,edgeGeometry:b.edgeGeometry,geoName:A});r[n(3634)][n(2583)](I)}}if(!Cesium[n(692)](r[n(1948)])&&r[n(3634)][n(3650)]>0){let u=[];for(let c=0,f=r[n(3634)].length;c<f;c++)u[n(2583)](r[n(3634)][c][n(1948)]);r.boundingVolume={sphere:Cesium[n(1475)][n(1360)](u),isCalc:!0}}}function em(e,x,t){const a=o;let r=x.groupNode,n=[];for(let s=0,u=r.pageLods[a(3650)];s<u;s++){let c={},f=r[a(3768)][s];if(c.rangeMode=f[a(1849)],c[a(3775)]=f[a(3775)],c[a(4157)]=f.rangeList,c[a(3294)]=c.childTile==="",c[a(3634)]=[],f[a(2215)]&&(!c[a(3294)]||e[a(1921)]>2)){let l=f[a(2215)].center,m=f[a(2215)][a(1707)];c.boundingVolume={sphere:{center:new Cesium[a(516)](l.x,l.y,l.z),radius:m},isCalc:!1}}f.obb&&(c[a(1948)]=c[a(1948)]||{},c[a(1948)][a(2291)]=f[a(2291)]),xm(e,x,t,f,c),n[a(2583)](c)}return n}rr[o(2010)]=function(e,x,t){const a=o;if(!!Cesium[a(692)](x))return e[a(1921)]=x[a(1544)],em(e,x,qd(e.context,x,t))};let T2={cache:{},cacheSize:0,freeCache:{},freeQueue:new Cesium[o(1364)],freeCacheSize:0,throttleSize:52428800,getCache:function(e,x,t){let r=this[o(1818)][e];r||(r=this.cache[e]={});let n=r[x];n||(n=r[x]={});let s=n[t];return s||(s=n[t]={}),s},get:function(e,x,t,a){const r=o;let n=this[r(4087)](e,x,t)[a];if(n)return n[r(2041)]++,n},create:function(e){const x=o;let t=e[x(716)],a=t.id,r=e.layerId,n=e[x(2647)],s=e[x(4040)],u=this[x(4087)](a,r,n),c=u[s];if(c)return c[x(2041)]++,c;let f=e[x(2375)],l=e[x(2388)],m=e[x(3229)],h=e.pixelFormat,C=e.arrayBufferView;return c=new v2(t,s,{context:t,layerId:r,rootName:n,textureId:s,width:f,height:l,compressType:m,pixelFormat:h,internalFormat:e[x(2796)],isTexBlock:!0,arrayBufferView:C}),u[s]=c,c},del:function(e){const x=o;if(!e[x(2126)])return;let t=this.getCache(e.contextId,e[x(3030)],e.rootName);t[e[x(4040)]]&&--e[x(2041)]==0&&(delete t[e[x(4040)]],e.destroy())}};function Ue(){const e=o;this[e(3898)]=!1,this[e(4190)]=!1,this[e(3030)]=void 0,this[e(3300)]=void 0,this[e(2041)]=0,this.id=void 0,this[e(1434)]=new Cesium[e(2756)](1,1,1,1),this[e(1150)]=new Cesium[e(2756)](1,1,1,1),this.specularColor=new Cesium[e(2756)](0),this[e(1494)]=50,this.bTransparentSorting=!1,this[e(3580)]=[],this[e(2304)]=!1,this[e(2478)]=!1,this[e(3687)]=!1,this.subRequestedBaker=!1,this.subRequestNames=void 0,this[e(2148)]=void 0,this[e(772)]=void 0,this[e(1539)]=void 0,this[e(3075)]=void 0,this[e(1650)]=void 0,this[e(3408)]=void 0,this[e(3133)]=void 0,this[e(1109)]=void 0,this[e(1961)]=void 0,this[e(2737)]=void 0,this.textureParameterBake=void 0,this[e(3617)]=!1,this[e(2778)]=!1,this[e(2319)]=!1,this.textureBakeRenderableFlag=!1,this.isCrnTexture=!1,this.subTexturesToUpload=new Cesium[e(1364)]}let H2={};function $s(e,x,t){for(let a in t)if(t.hasOwnProperty(a)){let r=t[a],n=Number(a);x.setBatchedAttribute(n,0,r)}x.update(e)}function xc(e,x,t,a,r,n){const s=o;let u=r[a];if(!u)return;let c=T2.get(e,x,t,u);for(;u&&c&&!c[s(2616)];)c.refCount--,u=r[u],c=T2[s(3715)](e,x,t,u);return n[s(3085)]=u,c}function wa(e){const x=o;let t=e[x(3019)](".");return e[x(2310)](0,t)}function Sa(){this.cache={}}function a2(){let e,x;const t=new Promise(function(a,r){e=a,x=r});return{resolve:e,reject:x,promise:t}}function be(){const e=o;this[e(2799)]={},this[e(1818)]={},this[e(1490)]=new Cesium[e(3782)],this[e(896)]=[],this[e(3550)]={},this[e(1311)]={},this[e(727)]={},this.requestHeapPack={}}Ue[o(3096)][o(3171)]=function(e,x,t,a,r,n,s,u){const c=o;if(this[c(2478)])return;this[c(2856)]={context:e,layer:x,isRoot:t,rootName:a,curTextureName:r,textureInfo:n,rootBatchIdMap:s,ancestorMap:u},this[c(2478)]=!0,this[c(3029)]=t;let f=n[c(3903)],l=PixelFormat.RGBA_DXT5,m=T2.create({context:e,layerId:x.id,rootName:a,textureId:n.id,width:n[c(2375)],height:n[c(2388)],compressType:n.compressType,pixelFormat:n[c(2381)],internalFormat:l,arrayBufferView:f});m[c(2616)]=t;let h=n[c(4065)][c(3650)],C=s[n[c(2508)]];this[c(3580)].push(m);let p=[{functionName:c(1371),componentDatatype:ComponentDatatype[c(3148)],componentsPerAttribute:4}],_=defined(C)?Object[c(3360)](C)[c(3650)]:h;this.batchTableBake=new BatchTable(e,p,_),this[c(3133)][c(667)]="_2";let y=H2[x[c(3085)]];defined(y)||(y=H2[x.name]={});let A=y[a];defined(A)||(A=y[a]={});let b=A[r];defined(b)||(b=A[r]={});let B=n[c(4065)];for(let T=0;T<h;T++){let M=B[T],w=M[c(3439)][c(1830)]("_")[0],I=M[c(4038)],P=M[c(3947)],V=M.width,q=M.height,X=new Cartesian4(I,P,V,q);b[w]=X}if(!t){this.subRequestNamesBake=[];for(let T=0;T<n.requestNames[c(3650)];T++){let M=n[c(725)][T],w=wa(M);if(c(2942)===w.split("_")[0]){let I=M.split("#"),P=wa(I[0]);if(I[c(3650)]>1){let V=I[1],q=V[c(3650)];for(let X=0;X<q;X+=3){let H=P+"_"+V[c(2629)](X,X+3);this[c(2148)][c(2583)](H)}}}else this[c(2148)][c(2583)](w)}}return this[c(1650)]=m,m},Ue[o(3096)][o(917)]=function(){const e=o;if(this.textureInitilized||!this[e(2737)])return;this[e(3617)]=!0;let x=this[e(2737)][e(716)],t=this[e(2737)][e(1826)],a=this[e(2737)].isRoot,r=this.textureParameter[e(2647)],n=this[e(2737)][e(3196)],s=this[e(2737)][e(2393)],u=this[e(2737)][e(3625)],c=this[e(2737)].ancestorMap;this[e(2737)]=void 0;let f={},l=u[s[e(2508)]],m=a?void 0:xc(x.id,t.id,r,n,c,f),h=H2[t[e(3085)]];h||(h=H2[t.name]={});let C=h[r];C||(C=h[r]={});let p=C[n];p||(p=C[n]={});let _=a?void 0:f[e(3085)]?C[f[e(3085)]]:void 0,y={},A=s[e(4065)],b=[],B=s.subTexInfos[e(3650)];for(let T=0;T<B;T++){let M=A[T],w=M[e(3439)][e(1830)]("_")[0],I=M[e(4038)],P=M[e(3947)],V=M[e(2375)],q=M[e(2388)],X=new Cesium[e(2756)](I,P,V,q),H=l?l[w]:T,z=a?void 0:_?_[w]:void 0,u0=z||X;this[e(3408)].setBatchedAttribute(H,0,u0),y[H]=X,p[w]=X,b[e(2583)](M[e(3439)])}this[e(4065)]=A,this[e(772)]=b,this[e(3075)]=y,this[e(1109)]=m},Ue[o(3096)][o(3674)]=function(){const e=o;if(this[e(2778)]||!defined(this.textureParameterBake))return;this[e(2778)]=!0;let x=this[e(2856)][e(716)],t=this[e(2856)][e(1826)],a=this[e(2856)].isRoot,r=this[e(2856)][e(2647)],n=this[e(2856)].curTextureName,s=this[e(2856)][e(2393)],u=this.textureParameterBake[e(3625)],c=this[e(2856)][e(3003)];this[e(2856)]=void 0;let f={},l=u[s[e(2508)]],m=a?void 0:xc(x.id,t.id,r,n,c,f),h=H2[t.name];defined(h)||(h=H2[t[e(3085)]]={});let C=h[r];defined(C)||(C=h[r]={});let p=C[n];defined(p)||(p=C[n]={});let _=a?void 0:defined(f[e(3085)])?C[f[e(3085)]]:void 0,y={},A=s[e(4065)],b=[],B=s[e(4065)][e(3650)];for(let T=0;T<B;T++){let M=A[T],w=M[e(3439)][e(1830)]("_")[0],I=M[e(4038)],P=M[e(3947)],V=M[e(2375)],q=M[e(2388)],X=new Cartesian4(I,P,V,q),H=defined(l)?l[w]:T,z=a?void 0:defined(_)?_[w]:void 0,u0=defined(z)?z:X;this.batchTableBake.setBatchedAttribute(H,0,u0),y[H]=X,p[w]=X,b[e(2583)](M[e(3439)])}this[e(3314)]=A,this[e(1539)]=b,this[e(2429)]=y,this[e(1378)]=m},Ue.prototype[o(2424)]=function(e,x,t,a,r){const n=o;if(this[n(2304)])return;let s=e[n(716)],u=t.id,c=r[n(3625)],f=r.ancestorMap;this.textureParameter={context:s,layer:e,isRoot:x.isRootTile,rootName:x[n(2647)],curTextureName:u,textureInfo:t,rootBatchIdMap:c,ancestorMap:f},this[n(3898)]=x[n(3049)],this[n(2304)]=!0,this[n(3687)]=x[n(3049)];let l=t[n(3903)],m=Cesium[n(3868)].RGBA_DXT5,h=T2[n(1693)]({context:s,layerId:e.id,rootName:x[n(2647)],textureId:t.id,width:t[n(2375)],height:t[n(2388)],compressType:t[n(3229)],supportCompressType:e[n(2875)],pixelFormat:t.format,internalFormat:m,arrayBufferView:l});h.renderable=x[n(3049)];let C=t.subTexInfos[n(3650)],p=c[t.rootTextureName];this.textures[n(2583)](h);let _=[{functionName:n(1436),componentDatatype:Cesium[n(549)][n(3148)],componentsPerAttribute:4}],y=p?Object[n(3360)](p)[n(3650)]:C;this[n(3408)]=new Cesium[n(3631)](s,_,y);let A=H2[e.name];A||(A=H2[e.name]={});let b=A[x[n(2647)]];b||(b=A[x[n(2647)]]={});let B=b[u];B||(B=b[u]={});let T=t.subTexInfos;for(let M=0;M<C;M++){let w=T[M],I=w[n(3439)].split("_")[0],P=w[n(4038)],V=w.offsetY,q=w[n(2375)],X=w[n(2388)],H=new Cesium[n(2756)](P,V,q,X);B[I]=H}if(!x[n(3049)]){this[n(3830)]=[];for(let M=0;M<t[n(725)][n(3650)];M++){let w=t[n(725)][M],I=wa(w);if(n(2942)===I.split("_")[0]){let P=w[n(1830)]("#"),V=wa(P[0]);if(P[n(3650)]>1){let q=P[1],X=q[n(3650)];for(let H=0;H<X;H+=3){let z=V+"_"+q.substring(H,H+3);this[n(3830)][n(2583)](z)}}}else this.subRequestNames[n(2583)](I)}}return this[n(4190)]=!(x[n(3049)]||t[n(725)][n(3650)]===1&&t.requestNames[0]===u),this[n(1961)]=h,h},Ue[o(3096)][o(2615)]=function(e,x){const t=o;if(this[t(3687)]||!this[t(3830)])return;x[t(716)];let a=this.subRequestNames,r=this[t(4065)],n=this[t(772)],s=this[t(3075)],u=this[t(1961)],c=[],f=this[t(3300)].contentResource[t(2547)][t(2629)](0,this[t(3300)][t(2863)][t(2547)][t(3308)]("/")+1),l=x[t(4067)],m=this[t(2399)];for(let h=0,C=a.length;h<C;h++){let p=a[h],_=l[t(3715)](x.id,f,p,this,this[t(3300)]);if(!_)continue;let y=_[t(3022)];c[t(2583)](h);for(let A in y)if(y[t(2364)](A)){let b=y[A],B=n[t(3019)](A);if(B<0&&this[t(4190)])continue;let T=0,M=0,w=b[t(2375)],I=b.height;if(B>=0){let P=r[B];T=P[t(4038)],M=P.offsetY}this[t(4190)]?m.enqueue({texture:u,subTextureInfo:{xOffset:T,yOffset:M,width:w,height:I,arrayBufferView:b[t(2132)]}}):u[t(2132)]=b[t(2132)]}}if(c.length===a.length)a.length=0;else{let h=0;for(let C=0,p=c.length;C<p;C++)a[t(1805)](c[C]-h,1),h++}a.length===0&&(this[t(2319)]=!0,this[t(4190)]||u[t(1739)](),$s(e,this[t(3408)],s),this[t(3687)]=!0,this.subRequestNames=void 0,this[t(772)]=void 0,this[t(3075)]=void 0,this[t(4065)]=void 0)},Ue[o(3096)][o(3767)]=function(e,x,t,a){const r=o;if(this[r(3029)]||!defined(this[r(2148)]))return;let n=this[r(2148)],s=this[r(3314)],u=this[r(1539)],c=this[r(2429)],f=this[r(1650)],l=[],m=t[r(3281)],h=t.subTextureManager;for(let C=0,p=n[r(3650)];C<p;C++){let _=n[C],y=h[r(3715)](t[r(2702)],m,_,this);if(!y)continue;let A=y[r(3022)];l[r(2583)](C);for(let b in A)if(A.hasOwnProperty(b)){let B=A[b],T=u[r(3019)](b);if(T<0&&this.isLeaf)continue;let M=0,w=0,I=B[r(2375)],P=B[r(2388)];if(T>=0){let V=s[T];M=V[r(4038)],w=V[r(3947)]}a[r(3589)]({texture:f,subTextureInfo:{xOffset:M,yOffset:w,width:I,height:P,arrayBufferView:B[r(2132)]}})}}if(l.length===n[r(3650)])n[r(3650)]=0;else{let C=0;for(let p=0,_=l[r(3650)];p<_;p++)n[r(1805)](l[p]-C,1),C++}n[r(3650)]===0&&(this.textureBakeRenderableFlag=!0,this[r(4190)]||f[r(1739)](),this.subRequestedBaker=!0,this[r(2148)]=void 0,this.subTextureNamesBake=void 0,this[r(2429)]=void 0,this._subTexInfosBake=void 0,$s(e,this[r(3133)],c))},Ue[o(3096)][o(2099)]=function(){const e=o;if(!this[e(2319)])return;this[e(2319)]=!1;let x=this.oriTexture;x[e(2616)]=!0,this[e(1109)]&&this[e(1109)].textureId!==x[e(4040)]&&T2[e(1719)](this[e(1109)]),this[e(3580)][0]=x,this[e(1961)]=void 0,this[e(1109)]=void 0},Ue[o(3096)][o(1197)]=function(){const e=o;if(!this[e(2576)])return;this.textureBakeRenderableFlag=!1;let x=this[e(1650)];x[e(2616)]=!0,defined(this[e(1378)])&&this[e(1378)][e(4040)]!==x[e(4040)]&&T2[e(1719)](this[e(1378)]),this[e(3580)][1]=x,this[e(1650)]=void 0,this._ancestorTextureBake=void 0},Ue[o(3096)].isDestroyed=function(){return!1},Ue.prototype.destroy=function(){const e=o;if(--this.refCount>0)return;let x=this[e(3300)].layer;delete x[e(3607)][e(1818)][this.id],this[e(1434)]=null,this[e(1150)]=null,this[e(1086)]=null;for(let t=0,a=this[e(3580)][e(3650)];t<a;t++){let r=this[e(3580)][t];T2[e(1719)](r)}if(this[e(3580)].length=0,this[e(3408)]=this.batchTable&&this[e(3408)][e(3701)](),this.batchTableBake=this[e(3133)]&&this[e(3133)][e(3701)](),this[e(848)]=void 0,this[e(772)]=void 0,this[e(3075)]=void 0,this[e(1539)]=void 0,this[e(3314)]=void 0,Cesium[e(692)](this[e(1109)])&&this.ancestorTexture[e(4040)]!==this[e(1961)].textureId&&T2[e(1719)](this[e(1109)]),this[e(1961)]=void 0,this[e(1109)]=void 0,this[e(3300)]=void 0,this.textureParameter=void 0,this[e(1650)]=void 0,Cesium.defined(this.subRequestNames)){for(let t=0,a=this.subRequestNames[e(3650)];t<a;t++){let r=this[e(3830)][t],n=r[e(1830)](".")[0],s=r.indexOf(e(2823));n=s>-1?n+r[e(2629)](s):n,x[e(4067)].del(x.id,n)}this.subRequestNames=void 0}if(Cesium[e(692)](this[e(2148)])){for(i=0,j=this[e(2148)][e(3650)];i<j;i++){let t=this[e(2148)][i],a=t[e(1830)](".")[0],r=t[e(3019)](e(2823));a=r>-1?a+t.substring(r):a,x[e(638)][e(1719)](x.id,a)}this[e(3830)]=void 0}return Cesium[e(1136)](this)},Sa.prototype[o(1693)]=function(e){let x=this.cache[e];return x?x.refCount++:(x=new Ue,this.cache[e]=x),x},Sa[o(3096)][o(3802)]=function(e){const x=o;let t=this[x(1818)][e];t&&--t[x(2041)]==0&&(delete this[x(1818)][e],t[x(3701)]())};const z2={UnLoad:0,Loading:1,Loaded:2,Parsing:3,Ready:4,Failed:5};let or=0;const tm=209715200;be[o(3096)][o(3558)]=function(e,x,t,a,r){const n=o;let s=e+"_"+t,u=x+t+n(2768),c=new Cesium.Request({url:u,throttle:!0,throttleByServer:!0,priorityFunction:function(){return a[n(1305)]}});c[n(4068)]=t,c.providerName=r[n(3300)][n(1826)].name,c[n(545)]=s,this[n(896)][n(2583)](c)};let im=function(e,x){const t=o;return e[t(3212)]-x[t(3212)]};function am(e){const x=o;let t=[],a={},r=0;for(let n=0,s=e[x(3650)];n<s;n++){let u=e[n];if(u[x(3198)])continue;let c=u[x(4068)];a[c]||(a[c]=!0,t[x(2583)](c),u.quadKeyIndex=r++)}return t}function nm(e,x){const t=o;let a=new DataView(e),r=0,n=a[t(3757)](r,!0);if(x>n-1||n>256)return;r+=4;let s,u,c=[];for(s=0;s<n;s++)u=a[t(3757)](r,!0),c.push(u),r+=4;for(s=0;s<n;s++){if(u=c[s],s===x)return u===0?void 0:new Uint8Array(e)[t(3403)](r,r+u)[t(4056)];r+=u}}function Ma(){}function rm(e,x,t){const a=o;e[a(716)];let r=e[a(3607)];r||(r=e[a(3607)]=new Sa),e._subTextureManager,e[a(4067)]||(e[a(4067)]=be[a(2988)]());let n=x[a(1854)].material;for(let s=0,u=n[a(3650)];s<u;s++){let c=n[s].material,f=c.id,l=r[a(1693)](f);l[a(3030)]=e.id,l[a(3300)]=t;let m=c[a(2076)];l[a(1434)]=new Cesium[a(1911)](m.r,m.g,m.b,m.a);let h=c[a(3557)];l[a(1150)]=new Cesium.Color(h.r,h.g,h.b,h.a);let C=c[a(3262)];l[a(1086)]=new Cesium[a(1911)](C.r,C.g,C.b,C.a),l[a(1494)]=c[a(1494)],l.bTransparentSorting=c[a(2182)],l.id=f;let p=c[a(2108)];p[a(3650)];for(let _=0;_<1;_++){let y=p[_].textureunitstate,A=y.id,b=y[a(441)].u===0?Cesium.TextureWrap[a(3623)]:Cesium[a(587)].CLAMP_TO_EDGE,B=y[a(441)].v===0?Cesium.TextureWrap[a(3623)]:Cesium[a(587)][a(4024)];l[a(1082)]=Cesium[a(2235)].unpack(y[a(1070)]);let T=x[a(2056)][A];if(T){if(T.wrapS=b,T[a(3456)]=B,T[a(3229)]===De[a(1589)]&&T[a(3903)]){const M=Ix[a(3182)]({data:T[a(3903)],bMipMap:!0});T.textureData=M[a(3846)]}l.createTexture(e,t,T,_,x)}}}return n}function om(e,x){const t=o;let a,r,n=new Cesium.BoundingSphere,s=new Cesium[t(516)],u=e[t(666)][0],c=u[t(1776)],f=Cesium[t(692)](e[t(2326)])&&(e[t(2326)]&cx[t(3515)])===cx[t(3515)],l=1;f?(l=e[t(1341)],a=new Cesium.Cartesian3(e[t(3160)].x,e.minVerticesValue.y,e[t(3160)].z),r=new Uint16Array(u.typedArray.buffer,u[t(1737)].byteOffset,u[t(1737)][t(3818)]/2)):r=new Float32Array(u[t(1737)][t(4056)],u.typedArray[t(2471)],u[t(1737)][t(3818)]/4);let m=[];for(let h=0;h<e[t(4041)];h++)Cesium[t(516)][t(3590)](r,c*h,s),f&&(s=Cesium[t(516)].multiplyByScalar(s,l,s),s=Cesium[t(516)].add(s,a,s)),m.push(Cesium[t(516)][t(3552)](s));return Cesium[t(1475)][t(3274)](m,n),Cesium[t(1475)][t(3011)](n,x,n),m[t(3650)]=0,n}be[o(3096)].processRequests=function(){const e=o;if(!(this.pendingRequests[e(3650)]<1)){this[e(896)][e(877)](im),this[e(818)]();for(let x=0,t=this[e(896)].length;x<t;x++){let a=this.pendingRequests[x];this[e(2625)](a)}this[e(896)].length=0}},be[o(3096)][o(818)]=function(){const e=o;let x=am(this.pendingRequests).join(";"),t=this[e(896)][0][e(2547)],a=new Cesium[e(1702)]({url:t,queryParameters:{extratiles:x}}),r=a2(),n=a[e(1823)]();if(n){for(let s=0,u=this[e(896)][e(3650)];s<u;s++)this[e(896)][s].deferred=r;n.then(function(s){r[e(1599)](s)},s=>{r[e(3454)](error)})}},be.prototype[o(2625)]=function(e){const x=o;let t=e[x(545)],a=e[x(2643)][x(3316)];this[x(2799)][t]=z2.Loading;let r=this;a[x(4167)](function(n){const s=x;if(!Cesium.defined(r[s(2799)][t]))return;r.state[t]=z2.Loaded;let u=nm(n,e.quadKeyIndex);if(!u)return void(r.state[t]=z2.Failed);let c=new Uint8Array(u),f=new DataView(u),l=0,m=f[s(3757)](l,!0);l+=Uint32Array.BYTES_PER_ELEMENT;let h={};for(let y=0;y<m;y++){let A=f[s(3757)](l,!0);l+=Uint32Array.BYTES_PER_ELEMENT;let b=Cesium.getStringFromTypedArray(c,l,A);l+=A;let B=f.getUint32(l,!0);l+=Uint32Array[s(3955)];let T,M,w=f.getUint32(l,!0);l+=Uint32Array[s(3955)];let I=c;try{let z=new Uint8Array(u,l,w);I=N2.inflate(z)[s(4056)],T=new DataView(I),M=0}catch{if(B!==w)continue;T=f,M=l}let P=T.getUint32(M,!0);M+=Uint32Array[s(3955)];let V=T[s(3757)](M,!0);M+=Uint32Array[s(3955)];let q=T[s(3757)](M,!0);M+=Uint32Array[s(3955)],T[s(3757)](M,!0),M+=Uint32Array[s(3955)];let X=T.getUint32(M,!0);M+=Uint32Array.BYTES_PER_ELEMENT;let H=new Uint8Array(I,M,X);P===26&&(H=I[s(3403)](M,M+X),H=Ix.transcode({data:H,bMipMap:!0}).bufferView),h[b]={width:V,height:q,arrayBufferView:H},l+=w}let C={keyWord:t,result:h,byteLength:u.byteLength},p=r[s(1490)][s(1050)](C);r[s(1818)][t]=p,r[s(2799)][t]=z2.Ready,delete r[s(2799)][t],or+=u[s(3818)];let _=r[s(1490)].head;for(;or>tm;){let y=_,A=_.item[s(545)],b=r[s(1818)][A][s(3110)];or-=b.byteLength,delete r[s(1818)][A],_=_.next,r.list[s(1578)](y)}},function(n){const s=x;r[s(2799)][t]=n?z2[s(649)]:z2[s(3194)]})},be[o(3096)][o(3715)]=function(e,x,t,a){const r=o;let n=e+"_"+t,s=this[r(1818)][n];if(s)return this[r(1490)][r(1805)](this[r(1490)][r(1548)],s),s[r(3110)];let u=this[r(2799)][n];Cesium.defined(u)||(u=this[r(2799)][n]=z2.UnLoad),u===z2.UnLoad&&this[r(3558)](e,x,t,a[r(3300)],a)},be[o(3096)][o(1719)]=function(e,x){const t=o;let a=e+"_"+x;delete this[t(2799)][a]},be._singleInstance=void 0,be[o(2988)]=function(){const e=o;return be[e(1945)]||(be[e(1945)]=new be),be[e(1945)]};let sm=new Cesium[o(516)];function cm(e){const x=o;let t=new Cesium.BoundingSphere,a=e[x(689)];if(!Cesium[x(692)](a))return t;let r=new Cesium[x(516)](a[0],a[1],a[2]),n=new Cesium[x(1001)](a[3],a[4],a[5]),s=new Cesium[x(516)].lerp(r,n,.5,sm),u=new Cesium[x(516)][x(4114)](s,r);return t[x(3157)]=s,t.radius=u,t}function um(e,x){return e[o(2369)]>-1?cm(e):om(e,x)}function lm(e,x,t,a){const r=o;let n=t[r(2083)];for(let s=0,u=n[r(3650)];s<u;s++){let c,f=n[s],l=f[r(2951)],m=Cesium[r(2235)][r(3640)](e.modelMatrix,l,new Cesium.Matrix4);Cesium[r(692)](a.boundingVolume)&&(c=new Cesium[r(1475)](a[r(1948)].sphere[r(3157)],a[r(1948)][r(1705)][r(1707)]),Cesium.BoundingSphere[r(3011)](c,e[r(931)],c));let h=f[r(3004)];for(let C=0,p=h[r(3650)];C<p;C++){let _,y=h[C],A=x[r(2604)][y],b=A[r(1741)],B=A.arrIndexPackage,T=A[r(1095)];B[r(3650)]>0&&(_=e[r(3607)][r(1693)](B[0][r(3834)]));let M=Cesium[r(692)](c)?c:um(b,m);const w=nr[e[r(2450)]]({layer:e,vertexPackage:b,arrIndexPackage:B,pickInfo:T,modelMatrix:m,geoMatrix:l,boundingVolume:M,material:_,edgeGeometry:A[r(3261)],geoName:y});a.renderEntities[r(2583)](w)}}if(!Cesium[r(692)](a[r(1948)])&&a[r(3634)][r(3650)]>0){let s=[];for(let u=0,c=a[r(3634)].length;u<c;u++)s[r(2583)](a[r(3634)][u][r(1948)]);a[r(1948)]={sphere:Cesium[r(1475)][r(1360)](s),isCalc:!0}}}function fm(e,x){const t=o;let a=x[t(1446)],r=[];for(let n=0,s=a.pageLods[t(3650)];n<s;n++){let u={},c=a.pageLods[n];if(u[t(1849)]=c[t(1849)],u[t(3775)]=c[t(3775)],u[t(4157)]=c[t(4157)],u[t(3294)]=u[t(3775)]==="",u[t(3634)]=[],c[t(2215)]&&!u.isLeafTile){let f=c[t(2215)][t(3157)],l=c[t(2215)][t(1707)];u[t(1948)]={sphere:{center:new Cesium[t(516)](f.x,f.y,f.z),radius:l},isCalc:!1}}c[t(2291)]&&(u.boundingVolume=u[t(1948)]||{},u[t(1948)][t(2291)]=c[t(2291)]),lm(e,x,c,u),r[t(2583)](u)}return r}function Wt(){const e=o;this[e(984)]=void 0,this.rangeData=void 0,this[e(1849)]=void 0,this[e(1948)]=void 0,this[e(3294)]=!1,this[e(3634)]=[],this[e(3775)]=void 0,this[e(2214)]=!1,this[e(2266)]=!1}Ma[o(2010)]=function(e,x,t){const a=o;if(!!Cesium[a(692)](t))return e[a(1921)]=t.version,rm(e,t,x),fm(e,t)},Wt[o(3096)].update=function(e,x){const t=o,a=e[t(716)],r=this[t(1948)],n=this[t(1849)],s=this[t(2619)],u=x[t(3083)],c=r[t(1305)](e);if(n===ut.Distance)this[t(2214)]=c*u<s;else if(n===ut[t(1424)]){const f=r[t(1707)];r[t(3157)];const l=e.context.drawingBufferHeight,m=.5*e[t(3907)].frustum[t(807)],h=.5*l/Math[t(3740)](m)*f/c;this[t(2214)]=h>s*u}else if(n===ut[t(1092)]){const f=a[t(3995)].pixelRatio,l=s*a[t(1079)]/(c*e[t(3907)][t(2703)][t(3470)])/f;this.canRefine=l>16*u}},Wt.prototype[o(2294)]=function(e,x){const t=o,a=new Jx(e,x,this[t(1948)],this[t(984)]);this[t(3775)]=a},Wt[o(3096)][o(3777)]=function(){return!1},Wt[o(3096)][o(3701)]=function(){const e=o;for(let x=0,t=this[e(3634)][e(3650)];x<t;x++)this[e(3634)][x].destroy();return this.renderEntities.length=0,this[e(3775)]=void 0,Cesium[e(1136)](this)};const gi=Cesium.defined;function Jx(e,x,t,a){const r=o;this[r(1826)]=e,this[r(4033)]=x;let n=a[r(960)](/\\/g,"/");this[r(506)]=Cesium[r(3441)](a),this[r(1182)]=mm(n,e),this.fileName=a,this.isLeafTile=!1,this[r(3049)]=!1,this[r(1948)]=this[r(992)](t,e[r(931)]);let s=Cesium[r(1702)][r(1554)](e[r(1594)]);if(Cesium[r(692)](x))this[r(3469)]=x.baseUri;else{let u=new Cesium[r(1702)](n);this[r(3469)]=u.getBaseUri()}this[r(2863)]=s[r(2773)]({url:this[r(1182)],headers:e[r(697)]}),this[r(4148)]=Cesium[r(2422)].getServerKey(this.contentResource[r(1075)]()),this[r(2625)]=void 0,this[r(2212)]=void 0,this[r(1305)]=0,this[r(1249)]=0,this[r(2832)]=x?x.depth+1:0,this[r(3974)]=0,this[r(1407)]=!1,this[r(3768)]=[],this[r(3634)]=[],this.contentState=$x.UNLOADED,this[r(2412)]=0,this[r(1816)]=0,this.processFrame=0,this[r(2969)]=0,this.foveatedFactor=0,this[r(3212)]=0,this.rootName=x?x[r(2647)]:this[r(984)],this.blockKey="",this[r(2592)]=!1,this.isChildBlock=!1,this[r(3625)]={},this[r(3003)]={}}let dm=new Cesium[o(516)];function ec(e,x){const t=o;let a=Cesium[t(516)][t(3552)](e[t(3157)]),r=e[t(1707)];a=Cesium[t(2235)][t(1013)](x,a,a);let n=Cesium.Matrix4[t(1009)](x,dm);return r*=Cesium[t(516)][t(3953)](n),new Cesium.TileBoundingSphere(a,r)}function mm(e,x){const t=o;e=e[t(960)](/\+/g,"%2B");let a=x[t(3828)];if(!(x[t(3828)].indexOf("realspace")>-1))return e;let r=a.replace(/(.*realspace)/,""),n=a[t(960)](/\/rest\/realspace/g,"")[t(960)](r,"");return n+=t(813)+r+t(2742)+e[t(960)](/^\.*/,"")[t(960)](/^\//,"")[t(960)](/\/$/,""),gi(P0[t(3260)])&&(n=gi(P0[t(3260)][t(1628)][a])?P0.addTokenWithKey(a,n):P0[t(955)](n)),n}function sr(e,x){const t=o;if(e[t(3157)]){const n=new Cesium[t(463)],s=new Cesium[t(516)](e[t(3157)].x,e[t(3157)].y,e[t(3157)].z);Cesium[t(2235)][t(1013)](x,s,s);const u=new Cesium.Cartesian4(e[t(1779)].x,e[t(1779)].y,e.xExtent.z,0),c=new Cesium.Cartesian4(e[t(3247)].x,e[t(3247)].y,e[t(3247)].z,0),f=new Cesium[t(2756)](e[t(3086)].x,e.zExtent.y,e[t(3086)].z,0);return Cesium[t(2235)][t(3688)](x,u,u),Cesium[t(2235)].multiplyByVector(x,c,c),Cesium[t(2235)][t(3688)](x,f,f),Cesium.Matrix3[t(763)](n,0,u,n),Cesium[t(463)][t(763)](n,1,c,n),Cesium[t(463)][t(763)](n,2,f,n),new Cesium.TileOrientedBoundingBox(s,n)}const a=[];a[t(2583)](new Cesium[t(516)](e[t(1803)].x,e[t(1803)].y,e.min.z)),a.push(new Cesium[t(516)](e[t(1803)].x,e[t(1803)].y,e.max.z)),a[t(2583)](new Cesium[t(516)](e.min.x,e[t(2092)].y,e[t(1803)].z)),a.push(new Cesium[t(516)](e[t(1803)].x,e.max.y,e[t(2092)].z)),a[t(2583)](new Cesium[t(516)](e[t(2092)].x,e[t(1803)].y,e[t(1803)].z)),a[t(2583)](new Cesium[t(516)](e[t(2092)].x,e[t(1803)].y,e[t(2092)].z)),a[t(2583)](new Cesium.Cartesian3(e.max.x,e[t(2092)].y,e[t(1803)].z)),a[t(2583)](new Cesium[t(516)](e[t(2092)].x,e[t(2092)].y,e.max.z));for(let n=0;n<8;n++)a[n]=Cesium.Matrix4.multiplyByPoint(x,a[n],a[n]);const r=Cesium[t(874)].fromPoints(a);return new Cesium[t(3681)](r.center,r[t(3292)])}Jx.prototype.createBoundingVolume=function(e,x){const t=o;return Cesium[t(692)](e[t(1705)])?ec(e.sphere,x):Cesium[t(692)](e.box)?sr(e[t(3761)],x):e[t(1948)]?e:void 0},Jx[o(3096)][o(4125)]=function(e){const x=o;return this.boundingVolume[x(1305)](e)};let hm=new Cesium[o(516)];Jx[o(3096)][o(3972)]=function(e){const x=o,t=this[x(1948)][x(1948)],a=Cesium.Cartesian3[x(758)](t.center,e[x(3907)][x(2307)],hm);return Cesium[x(516)][x(2528)](e.camera.directionWC,a)},Jx[o(3096)][o(1783)]=function(e,x){const t=o;let a=this[t(1948)];return e[t(2956)][t(1536)](a,x)};let K2=new Cesium[o(516)];function Cm(e,x){const t=o,a=x.camera,r=e[t(1948)][t(1948)],n=r[t(1707)],s=Cesium[t(516)].multiplyByScalar(a[t(1871)],e[t(1249)],K2),u=Cesium[t(516)].add(a[t(2307)],s,K2),c=Cesium[t(516)].subtract(u,r[t(3157)],K2);if(Cesium[t(516)][t(2342)](c)>n){const f=Cesium[t(516)][t(1586)](c,K2),l=Cesium[t(516)].multiplyByScalar(f,n,K2),m=Cesium.Cartesian3[t(1050)](r[t(3157)],l,K2),h=Cesium[t(516)][t(758)](m,a[t(2307)],K2),C=Cesium[t(516)][t(1586)](h,K2);e.foveatedFactor=1-Math.abs(Cesium[t(516)][t(2528)](a[t(1871)],C))}else e[t(3420)]=0}function bm(e){return function(){return e[C0(3212)]}}function pm(e){return function(x){const t=C0;e[t(4138)]=$x[t(1621)],e[t(1563)][t(3454)](x)}}function cr(e,x){const t=o;let a=e[t(1826)],r=x[t(3650)];for(let n=0;n<r;n++){const s=new Wt;let u=x[n],c=u.boundingVolume,f=u[t(3775)];s[t(984)]=e[t(3469)]+f,s[t(2619)]=u.rangeList,s[t(1849)]=u[t(1849)],c[t(2291)]?s[t(1948)]=sr(c[t(2291)],a[t(931)]):c[t(3761)]?s[t(1948)]=sr(c[t(3761)],a[t(931)]):c.sphere&&(c.isCalc?s[t(1948)]=new Cesium[t(1190)](c.sphere[t(3157)],c[t(1705)][t(1707)]):s[t(1948)]=ec(c.sphere,a[t(931)])),s[t(3634)]=u[t(3634)],s.isLeafTile=u[t(3294)],e.pageLods[t(2583)](s)}}function vm(e,x,t){const a=o;let r=x[t.fileName];if(!r)return;t[a(1440)]=t.fileName,t[a(2592)]=!0,cr(t,Ma[a(2010)](e,t,r));let n=[t];for(;n[a(3650)];){let s=n[a(1526)]();for(let u=0,c=s[a(3768)][a(3650)];u<c;u++){const f=s[a(3768)][u],l=f[a(984)];if(l==="")continue;const m=new Jx(e,s,f[a(1948)],l);m.rootBatchIdMap=gi(r)?r.rootBatchIdMap:s[a(3625)],m[a(3003)]=gi(r)?r.ancestorMap:s[a(3003)],f[a(3775)]=m,r=x[l],gi(r)?(m.blockKey=s[a(1440)],m.isChildBlock=!0,m.contentState=$x[a(1167)],cr(m,Ma.parse(e,m,r)),n[a(2583)](m)):(m[a(2592)]=!0,m[a(1440)]=l)}}}function tc(e,x,t){const a=o;if(e[a(721)][a(1050)](x),e[a(3541)])return vm(e,tr[a(3232)](t,x),x),x.contentState=$x[a(1167)],void x[a(1563)].resolve(!0);let r;if(x[a(506)]==="s3mb"?r=Qn[a(3232)](t):a(1276)===x[a(506)]&&(r=xr[a(3232)](t)),!r)return x[a(4138)]=$x[a(1621)],void x[a(1563)][a(3454)]();cr(x,rr[a(2010)](e,r,x)),x.contentState=$x[a(1167)],x[a(1563)]&&x[a(1563)][a(1599)](r)}function ur(e,x,t){const a=o;return Math[a(2092)](Cesium[a(2746)][a(1586)](e,x,t)-Cesium[a(2746)][a(1734)],0)}function lr(e,x,t){const a=o;let r=e*Math[a(1149)](10,x);return parseInt(r)*Math[a(1149)](10,t)}function fr(){const e=o;this[e(975)]=[],this[e(3039)]=[]}function ic(e,x,t){const a=o;x[a(1816)]!==t[a(2244)]&&x[a(4138)]===$x[a(2196)]&&(e[a(2106)].push(x),x[a(1816)]=t[a(2244)])}function ac(e,x,t){const a=o;x[a(4042)]!==t.frameNumber&&(x[a(4042)]=t[a(2244)],e[a(3026)][a(2583)](x))}function Ra(e,x,t){const a=o;x[a(2412)]!==t.frameNumber&&(e._cache.touch(x),x[a(2412)]=t.frameNumber)}function Am(e,x){const t=o;e._maximumPriority[t(4114)]=Math[t(2092)](x[t(1305)],e[t(1369)].distance),e[t(3954)].distance=Math[t(1803)](x[t(1305)],e[t(3954)][t(4114)]),e[t(1369)][t(2832)]=Math[t(2092)](x.depth,e._maximumPriority[t(2832)]),e[t(3954)][t(2832)]=Math[t(1803)](x[t(2832)],e[t(3954)][t(2832)]),e[t(1369)][t(3420)]=Math.max(x[t(3420)],e[t(1369)].foveatedFactor),e[t(3954)].foveatedFactor=Math.min(x.foveatedFactor,e._minimumPriority[t(3420)]),e[t(1369)][t(2977)]=Math[t(2092)](x[t(2977)],e[t(1369)].pixel),e[t(3954)].pixel=Math[t(1803)](x[t(2977)],e._minimumPriority[t(2977)])}function nc(e,x,t){const a=o;t[a(2969)]!==e.frameNumber&&(t[a(2969)]=e.frameNumber,t[a(972)](e,x)),Am(x,t)}function ym(e,x){const t=o;let a=e._requestTiles,r=a[t(3650)];for(let n=0;n<r;++n)a[n][t(3843)](e,x)}function n2(){const e=o;this[e(3655)]=new Cesium[e(3782)],this._sentinel=this[e(3655)][e(1050)](),this[e(1185)]=!1}Jx.prototype[o(972)]=function(e,x){const t=o;let a=this.parent,r=Cesium.defined(a)?a[t(3974)]:Cesium[t(4022)].MASK_INDETERMINATE;this[t(1305)]=this[t(4125)](e),this[t(1249)]=this[t(3972)](e),this.visibilityPlaneMask=this.visibility(e,r),this.visible=this[t(3974)]!==Cesium.CullingVolume[t(2494)]&&this[t(1305)]>=x[t(1186)]&&this[t(1305)]<=x[t(2130)],Cm(this,e)},Jx.prototype.requestContent=function(){const e=o;let x=this,t=this[e(1826)];const a=t[e(4136)];if(t[e(3541)]&&t[e(458)][e(2715)](t.id,this[e(1440)])){let f=t._blockCache.get(t.id,this[e(1440)]);return this[e(1563)]=a2(),tc(t,this,f),!0}let r=this[e(2863)].clone(),n=/({.*?})/g;if(Cesium[e(692)](a.subdomains)){let f=a.subdomains,l=f[e(3650)],m=f[parseInt(Math.random()*l)];r[e(2547)]=r[e(2547)][e(960)](n,function(h,C){return e(3574)===C?m:h})}let s=new Cesium.Request({throttle:!0,throttleByServer:!0,type:Cesium[e(2300)].TILES3D,priorityFunction:bm(this),serverKey:this[e(4148)]});this.request=s,r[e(2625)]=s;let u=r[e(1823)]();if(!Cesium[e(692)](u))return!1;this[e(4138)]=$x[e(956)],this[e(1563)]=a2();let c=pm(this);return u[e(4167)](function(f){x[e(3777)]()?c():tc(t,x,f)},f=>{const l=e;s.state!==Cesium[l(2899)][l(3448)]?c(f):x[l(4138)]=$x[l(2196)]}),!0},Jx.prototype[o(3843)]=function(e,x){const t=o;let a=e[t(3954)],r=e[t(1369)],n=4,s=lr(ur(this.foveatedFactor,a[t(3420)],r[t(3420)]),4,n);n=8;let u=lr(1-ur(this[t(2977)],a.pixel,r[t(2977)]),4,n);n=0;let c=lr(ur(this[t(1305)],a[t(4114)],r[t(4114)]),4,n);this[t(3212)]=s+u+c},Jx[o(3096)][o(1277)]=function(e,x){const t=o;e[t(716)];let a=!0;for(let n=0,s=this[t(3768)][t(3650)];n<s;n++){const u=this[t(3768)][n];var r=!0;for(let c=0,f=u[t(3634)][t(3650)];c<f;c++){const l=u.renderEntities[c];if(!l[t(2266)]){a=!1,r=!1;try{l[t(1277)](e,x)}catch(m){console.log(m)}}}u[t(2266)]=r}a&&(this[t(4138)]=$x[t(1219)])},Jx[o(3096)].update=function(e,x){},Jx[o(3096)][o(3802)]=function(){const e=o;this[e(4138)]=$x[e(2196)],this[e(2625)]=void 0,this[e(2212)]=void 0,this.contentReadyPromise=void 0;for(let x=0,t=this[e(3768)].length;x<t;x++)this[e(3768)][x].destroy();this[e(3768)].length=0},Jx[o(3096)][o(3777)]=function(){return!1},Jx.prototype[o(3701)]=function(){const e=o;return this[e(3802)](),Cesium[e(1136)](this)},fr[o(3096)].schedule=function(e,x){const t=o;this._selectPageLods[t(3650)]=0,this[t(975)].length=0;const a=this[t(3039)],r=this._stack;for(let n=0,s=e._rootTiles[t(3650)];n<s;n++){const u=e._rootTiles[n];nc(x,e,u),u.visible&&(Ra(e,u,x),u.contentState!==$x[t(2196)]?u[t(4138)]!==$x[t(1167)]?u[t(4138)]===$x[t(1219)]&&r[t(2583)](u):ac(e,u,x):ic(e,u,x))}for(;r[t(3650)];){const n=r[t(1526)]();Ra(e,n,x);for(let s=0,u=n[t(3768)][t(3650)];s<u;s++){const c=n[t(3768)][s];if(c[t(3294)]){a[t(2583)](c);continue}if(c[t(2696)](x,e),!c[t(2214)]){a.push(c);continue}let f=c[t(3775)];f!==void 0?(nc(x,e,f),f.visible&&(Ra(e,f,x),f[t(4138)]!==$x.LOADED?f[t(4138)]!==$x[t(1219)]?(ic(e,f,x),a.push(c)):r[t(2583)](f):(ac(e,f,x),a[t(2583)](c)))):(c[t(2294)](e,n),f=c.childTile,Ra(e,f,x),a[t(2583)](c))}}for(let n=0,s=a.length;n<s;n++){const u=a[n];e[t(2780)]=e[t(2780)].concat(u[t(3634)])}ym(e,x)},n2[o(3096)][o(2029)]=function(){const e=o;this[e(3655)].splice(this[e(3655)][e(1548)],this[e(2578)])},n2[o(3096)][o(1605)]=function(e){const x=o;let t=e[x(2212)];Cesium[x(692)](t)&&this[x(3655)][x(1805)](this[x(2578)],t)},n2[o(3096)][o(1050)]=function(e){const x=o;Cesium[x(692)](e[x(2212)])||(e[x(2212)]=this._list[x(1050)](e))},n2[o(3096)][o(2822)]=function(e,x,t){const a=o;let r=x[a(2212)];Cesium[a(692)](r)&&(this._list[a(1578)](r),x[a(2212)]=void 0,t(e,x))},n2.prototype[o(1679)]=function(e,x,t){const a=o;let r=[x],n=[x];for(;r.length;){let s=r[a(1526)]();for(let u=0,c=s[a(3768)].length;u<c;u++){const f=s[a(3768)][u][a(3775)];f&&!f[a(2592)]&&(r[a(2583)](f),n[a(2583)](f))}}for(let s=0,u=n.length;s<u;s++){let c=n[s];this[a(2822)](e,c,t)}},n2[o(3096)][o(724)]=function(e,x){const t=o;let a=this[t(1185)];this._trimTiles=!1;let r=this._list,n=1024*e.maximumMemoryUsage*1024,s=this[t(2578)],u=r.head;for(;u&&u!==s&&(e[t(2334)]>n||a);){let c=u[t(3110)];u=u.next,this[t(2822)](e,c,x)}},n2[o(3096)][o(602)]=function(e,x){const t=o;let a=this._trimTiles;this[t(1185)]=!1;let r=this[t(3655)],n=1024*e.maximumMemoryUsage*1024,s=this._sentinel,u=r[t(1259)];for(;u&&u!==s&&(e[t(2334)]>n||a);){let c=u[t(3110)];u=u[t(1998)],c.isAncestorBlock&&this.unloadBlockTile(e,c,x)}},n2[o(3096)][o(728)]=function(){const e=o;this[e(1185)]=!0};const _m={CLIP_NOTHING:0,CLIP_BEHIND_ANY_PLANE:1,CLIP_BEHIND_ALL_PLANE:2,ONLY_KEEP_LINE:3};var lt=Object[o(921)](_m);const gm={DisplayMode:{NONE:0,FACE:1,LINE:2,FACE_AND_LINE:3},AnalysisRegionMode:{ARM_NONE:0,ARM_ALL:1,ARM_REGION:2},FilterMode:{LINEAR:0,NEAREST:1}};var Ti=Object[o(921)](gm);function Da(e){const x=o;this.setting=void 0,this[x(2238)]=void 0,this[x(3967)]=void 0,this.region=void 0,this.bounds=new Cesium.Cartesian4,this.isUseHypColorTable=!1,this[x(449)]=!1,this[x(2401)]=!1,this.analysisMode=Ti[x(2864)][x(2198)],this.maxInstensity=e.maxInstensity,this[x(4063)]=e.minInstensity,this.maxHeight=e[x(935)],this[x(3063)]=e.minHeight,this[x(3950)]=e[x(3950)],this[x(1077)]=e.minCategory,this.isUseColorByHeight=!0}function k2(){const e=o;this[e(1462)]=17976931348623157e292,this[e(1543)]=-17976931348623157e292,this[e(2430)]=0,this._ceiling=0,this[e(3588)]=1,this[e(572)]=!1,this[e(1304)]=[],this[e(2685)]=100,this[e(1531)]=!0,this[e(3672)]=new Cesium.Color(0,1,1,1),this[e(1244)]=Ti[e(2460)][e(4010)],this[e(1967)]=void 0,this[e(2593)]="",this._emissionTextureChanged=!1,this._emissionTexCoordSpeed=new Cesium[e(2351)](0,0),this[e(1059)]=new Cesium.Cartesian2(50,50),this[e(1139)]=[],this[e(2825)]=0,this[e(1141)]=new Cesium[e(1911)](1,1,1,1),this._textureFilterMode=Ti[e(3961)].LINEAR,this[e(1023)]=Number[e(1659)],this[e(3374)]=0,this[e(979)]=0,this._maxVisibleAltitude=Number[e(1659)]}Da[o(3096)][o(3777)]=function(){return!1},Da[o(3096)].destroy=function(){const e=o;this[e(3827)]=void 0,this[e(2238)]=this[e(2238)]&&!this.texture[e(3777)]()&&this[e(2238)][e(3701)](),this[e(3967)]=this[e(3967)]&&!this[e(3967)][e(3777)]()&&this[e(3967)][e(3701)]()},Object[o(2040)](k2.prototype,{MinVisibleValue:{get:function(){return this[o(1543)]},set:function(e){const x=o;this[x(1543)]=e}},MaxVisibleValue:{get:function(){return this[o(1462)]},set:function(e){const x=o;this[x(1462)]=e}},ColorTableMaxKey:{get:function(){return this[o(1045)]},set:function(e){this._ceiling=e}},ColorTableMinKey:{get:function(){return this._floor},set:function(e){this._floor=e}},ColorTable:{get:function(){return this._dictColorTable},set:function(e){const x=o;if(!Cesium.defined(e))return void(Cesium[x(692)](this[x(1967)])&&(this._dictColorTable[x(3701)](),this._dictColorTable=null));this._dictColorTable=e,this[x(572)]=!0;let t=this[x(1967)][x(2081)]();if(t<1)return;let a=0,r=0,n=this[x(1967)][x(3502)](0);Cesium.defined(n)&&Cesium[x(692)](n[x(2094)])&&(a=parseFloat(n[x(2094)])),n=this._dictColorTable[x(3502)](t-1),Cesium.defined(n)&&Cesium.defined(n[x(2094)])&&(r=parseFloat(n[x(2094)])),this._ceiling=Math[x(2092)](a,r),this[x(2430)]=Math[x(1803)](a,r)}},Opacity:{get:function(){return this[o(3588)]},set:function(e){const x=o;this[x(3588)]=e}},CoverageArea:{get:function(){return this._coverageArea},set:function(e){const x=o;if(this[x(1531)]=!0,this[x(1304)].length=0,Cesium[x(692)](e))for(let t=0;t<e.length;t++)this[x(1304)][t]=e[t]}},DisplayMode:{get:function(){return this._displayMode},set:function(e){this._displayMode=e}},LineColor:{get:function(){return this._lineColor},set:function(e){const x=o;Cesium.Color[x(3552)](e,this[x(3672)])}},LineInterval:{get:function(){return this[o(2685)]},set:function(e){const x=o;this[x(2685)]=e}},UpdateColorDictTable:{get:function(){return this[o(572)]},set:function(e){const x=o;this[x(572)]=e}},UpdatePolygonRegion:{get:function(){return this[o(1531)]},set:function(e){const x=o;this[x(1531)]=e}},emissionTextureUrl:{get:function(){return this[o(2593)]},set:function(e){const x=o;this[x(2593)]=e,this._emissionTextureArray=[],this[x(1139)][x(2583)]({url:e,USpeed:this[x(3516)].x,VSpeed:this[x(3516)].y,UTiling:this[x(1059)].x,VTiling:this[x(1059)].y}),this._emissionTextureChanged=!0,this[x(2825)]=0}},emissionTexCoordUSpeed:{get:function(){return this[o(3516)].x},set:function(e){const x=o;Cesium[x(692)](this[x(1139)])&&this[x(1139)][x(3650)]>0&&(this._emissionTextureArray[0][x(2622)]=e),this[x(3516)].x=e}},emissionTexCoordVSpeed:{get:function(){return this[o(3516)].y},set:function(e){const x=o;Cesium[x(692)](this[x(1139)])&&this[x(1139)].length>0&&(this[x(1139)][0][x(2668)]=e),this[x(3516)].y=e}},emissionTexCoordScale:{get:function(){return this[o(1059)]},set:function(e){const x=o;Cesium[x(692)](this._emissionTextureArray)&&this[x(1139)][x(3650)]>0&&(this[x(1139)][0].UTiling=e.x,this[x(1139)][0][x(1913)]=e.y),this[x(1059)]=e}},emissionTextureArray:{get:function(){return this[o(1139)]},set:function(e){const x=o;this[x(1139)]=e,this[x(1085)]=!0,this[x(2825)]=0}},noValueColor:{get:function(){return this[o(1141)]},set:function(e){const x=o;Cesium[x(692)](e)&&(this[x(1141)]=Cesium[x(1911)][x(3552)](e,this[x(1141)]))}},filterMode:{get:function(){return this[o(1307)]},set:function(e){this._textureFilterMode=e}},visibleDistanceMax:{get:function(){return this[o(1023)]},set:function(e){const x=o;this[x(1023)]=e}},visibleDistanceMin:{get:function(){return this._visibleDistanceMin},set:function(e){const x=o;this[x(3374)]=e}},minVisibleAltitude:{get:function(){return this[o(979)]},set:function(e){this._minVisibleAltitude=e}},maxVisibleAltitude:{get:function(){return this._maxVisibleAltitude},set:function(e){const x=o;this[x(1559)]=e}}}),k2[o(3552)]=function(e,x){const t=o;if(e){x||(x=new k2),x[t(1462)]=e[t(1462)],x[t(1543)]=e[t(1543)],x[t(2430)]=e[t(2430)],x[t(1045)]=e[t(1045)],x[t(3588)]=e._opacity,x[t(572)]=e._updateColorDictTable,x[t(2685)]=e._linesInterval,x[t(1531)]=e[t(1531)],x[t(1244)]=e[t(1244)],x._lineColor=Cesium[t(1911)][t(3552)](e[t(3672)],x[t(3672)]),x[t(1967)]=e[t(1967)],x._emissionTexCoordSpeed=Cesium[t(2351)][t(3552)](e[t(3516)],x[t(3516)]),x[t(1059)]=Cesium.Cartesian2[t(3552)](e[t(1059)],x._emissionTexCoordScale),x[t(2593)]=e._emissionTextureUrl,x[t(1139)]=e[t(1139)],x[t(2825)]=e._loadedEmissionTexture,x[t(1141)]=Cesium.Color[t(3552)](e._noValueColor,x[t(1141)]),x[t(1304)][t(3650)]=0;for(let a=0;a<e[t(1304)][t(3650)];a++)x[t(1304)][a]=e[t(1304)][a];return x[t(1307)]=e[t(1307)],x[t(1023)]=e[t(1023)],x[t(3374)]=e[t(3374)],x[t(1559)]=e._maxVisibleAltitude,x[t(979)]=e[t(979)],x}};let B2=[];k2[o(3096)]._getEmissionAtlasTextureRects=function(){const e=o;let x=this[e(875)];if(!x)return B2;let t,a=this[e(1139)][e(3650)];if(B2[e(3650)]!=a)for(B2=[],t=0;t<a;t++)B2.push(new Cartesian4);for(t=0;t<a;t++){let r=this[e(1139)][t],n=x[e(2714)][r[e(1069)]];n&&(B2[t].x=n.x,B2[t].y=n.y,B2[t].z=n.x+n[e(2375)],B2[t].w=n.y+n[e(2388)])}return B2};let E2=[];function Ia(){const e=o;this.textureWidth=1024,this[e(3118)]=1024,this[e(3543)]=new Cesium.Cartesian4,this[e(2238)]=void 0,this[e(1479)]=void 0,this[e(1257)]=new Cesium[e(2902)],this.isUpdate=!1,this.flattening=!1}k2[o(3096)][o(3141)]=function(){const e=o;if(!this[e(1139)])return E2;let x,t=this[e(1139)][e(3650)];if(E2.length!=t)for(E2=[],x=0;x<t;x++)E2[e(2583)](new Cartesian4);let a=performance[e(2915)]()/1e3;for(x=0;x<t;x++){let r=this[e(1139)][x];E2[x].x=r[e(1901)],E2[x].y=r[e(1913)],E2[x].z=r[e(2622)]*a,E2[x].w=r[e(2668)]*a}return E2},k2.prototype[o(3701)]=function(){const e=o;this._coverageArea[e(3650)]=0,this[e(1967)]=this[e(1967)]&&this[e(1967)][e(3701)]()},Ia[o(3096)][o(3777)]=function(){return!1},Ia.prototype.destroy=function(){const e=o;this.texture=this[e(2238)]&&this[e(2238)][e(3701)](),this.fbo=this.fbo&&this[e(1479)][e(3701)](),this[e(1257)][e(1470)]()};var rc=o(1549),oc=o(1089);function Xt(){const e=o;this[e(3543)]=new Cesium.Cartesian4(Number[e(1659)],Number[e(1659)],-Number.MAX_VALUE,-Number[e(1659)]),this.command=void 0,this[e(1995)]=void 0,this[e(2814)]=void 0,this[e(531)]=void 0}let W2=new Cesium[o(516)];function qe(){const e=o;this[e(721)]={},this[e(2296)]=new Cesium[e(1364)]}Xt[o(3096)][o(2913)]=function(e,x){const t=o;let a=e[t(3126)][t(3009)][t(2496)];for(let r=0,n=a[t(3650)];r<n;r+=3)W2.x=a[r],W2.y=a[r+1],W2.z=a[r+2],Cesium[t(2235)][t(1013)](x,W2,W2),a[r]=W2.x,a[r+1]=W2.y,a[r+2]=W2.z;this[t(1995)]=e},Xt[o(3096)][o(3144)]=function(e){const x=o;let t=e[x(3126)].position.values,a=this[x(3543)];for(let r=0,n=t[x(3650)];r<n;r+=3){let s=t[r],u=t[r+1];a.x=Math[x(1803)](s,a.x),a.y=Math[x(1803)](u,a.y),a.z=Math[x(2092)](s,a.z),a.w=Math[x(2092)](u,a.w)}},Xt[o(3096)].createCommand=function(e,x){const t=o;if(this.command)return;let a=x[t(1626)](0),r=new Cesium[t(1900)]({primitiveType:Cesium[t(1970)][t(3487)]}),n={position:0};r[t(2457)]=Cesium[t(2380)][t(1847)]({context:e,geometry:this[t(1995)],attributeLocations:n,bufferUsage:Cesium[t(3586)][t(2109)],interleave:!0});let s=new Cesium.ShaderSource({sources:[rc]}),u=new Cesium.ShaderSource({sources:[oc]});s[t(3553)].push(t(3395)),u.defines[t(2583)](t(3395)),r[t(2360)]=Cesium.ShaderProgram[t(4073)]({context:e,vertexShaderSource:s,fragmentShaderSource:u,attributeLocations:n}),r[t(3265)]=x,r[t(2256)]=Cesium.RenderState[t(4073)]({viewport:new Cesium[t(1691)](0,0,a.width,a[t(2388)])}),this[t(1841)]=r},Xt.prototype[o(3701)]=function(){const e=o;this[e(2423)]&&(this[e(2423)][e(2457)]=this[e(2423)].vertexArray&&!this[e(2423)][e(2457)][e(3777)]()&&this[e(2423)][e(2457)][e(3701)](),this[e(2423)].shaderProgram=this._command[e(2360)]&&!this[e(2423)][e(2360)][e(3777)]()&&this[e(2423)][e(2360)][e(3701)](),this[e(2423)]=null),this.colorBuffer=this[e(531)]&&this.colorBuffer[e(3701)](),this.heightBuffer=this.heightBuffer&&this.heightBuffer[e(3701)](),this.geometry=null,this[e(3543)]=null};let dr=0;const Tm=104857600;qe[o(3096)].set=function(e,x,t){const a=o;let r=e+"_"+x;if(!this[a(721)][r])for(this[a(721)][r]={id:r,buffer:t},this[a(2296)][a(3589)](r),dr+=t[a(3818)];dr>Tm;){let n=this[a(2296)][a(2349)](),s=this[a(721)][n];dr-=s[a(4056)][a(3818)],delete this[a(721)][n]}},qe[o(3096)][o(3715)]=function(e,x){const t=o;let a=e+"_"+x,r=this[t(721)][a];if(r)return r[t(4056)]},qe[o(3096)][o(2715)]=function(e,x){const t=o;let a=e+"_"+x;return Cesium.defined(this[t(721)][a])},qe[o(1945)]=void 0,qe[o(2988)]=function(){const e=o;return qe[e(1945)]||(qe[e(1945)]=new qe),qe[e(1945)]};const Bm={None:o(3858),CRN_DXT5:"CRN_DXT5",KTX2:"KTX2.0"};var La=Object.freeze(Bm),Em={CLIP_INSIDE:0,CLIP_OUTSIDE:1},Fa=Object.freeze(Em),Pm=o(1010),wm=`attribute vec4 position;
uniform vec4 uRect;
uniform vec4 uSingleRegion;
varying float fHeight;
varying vec2 vTexCoord;

void main()
{
   vec4 vPos = position;
   vec2 vBounds = uRect.zw - uRect.xy;
   vTexCoord = (vPos.xy - uSingleRegion.xy) / (uSingleRegion.zw - uSingleRegion.xy);
   vPos.xy = (vPos.xy - uRect.xy) / vBounds.xy * 2.0 - 1.0;
   gl_Position = vec4(vPos.xy, 0.5, 1.0);
   fHeight = vPos.z;
}`,Sm=o(2413),Mm=o(1996),sc=new Cesium.Matrix4(0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1),mr={Altitude:0,Color:1,Texture:2};function $0(e){const x=o;e=Cesium[x(820)](e,Cesium.defaultValue[x(1897)]),Cesium[x(1680)][x(692)](x(1314),e[x(716)]),Cesium.Check.defined(x(4069),e[x(1111)]),this.id=Cesium[x(3691)](),this[x(3085)]=e[x(3085)],this.context=e[x(716)],this[x(2531)]=Cesium[x(820)](e[x(2268)],!0),this[x(3541)]=Cesium[x(820)](e[x(2466)],!1),this[x(3854)]=void 0,this[x(3828)]=void 0,this[x(1594)]=void 0,this[x(931)]=new Cesium[x(2235)],this[x(3732)]=new Cesium[x(2235)],this[x(2450)]=void 0,this.dataVersion=1,this._position=void 0,this._rectangle=void 0,this[x(3462)]=[],this[x(3630)]=new fr,this[x(2106)]=[],this[x(3026)]=[],this._renderQueue=[],this[x(721)]=new n2,this._vertexCompressionType=e.vertexCompressionType,this[x(3814)]=La[x(3858)],this[x(774)]=-1,this._totalMemoryUsageInBytes=0,this[x(1369)]={foveatedFactor:-Number[x(1659)],depth:-Number[x(1659)],distance:-Number[x(1659)],pixel:-Number[x(1659)]},this[x(3954)]={foveatedFactor:Number.MAX_VALUE,depth:Number[x(1659)],distance:Number[x(1659)],pixel:Number[x(1659)]},this[x(1506)]=a2(),this[x(884)]=Cesium.defaultValue(e[x(2789)],!0),this[x(3787)]=!1,this._sceneMode=Cesium.defaultValue(e[x(3185)],Cesium[x(442)].SCENE3D),this[x(2989)]=[],this[x(3054)]=new Cesium.Color(.7,.7,1,1),this[x(1261)]=new Cesium[x(2902)],this._objsVisibleList=new Cesium.AssociativeArray,this._objsHideList=new Cesium.AssociativeArray,this[x(3816)]={},this[x(1990)]={},this[x(3203)]=!1,this._flattenTextureWidth=1024,this[x(1367)]=lt[x(4133)],this[x(3100)]=Fa[x(2489)],this[x(2427)]=void 0,this[x(777)]=new Cesium[x(2902)],this[x(2955)]=new Cesium[x(2756)],this[x(1036)]=new Cesium[x(2902)],this[x(3461)]=!1,this[x(595)]=!1,this[x(950)]=!1,this._enableClipPlane=!1,this[x(3821)]=[new Cesium.Cartesian4(0,0,0,0),new Cesium.Cartesian4(0,0,0,0),new Cesium[x(2756)](0,0,0,0),new Cesium[x(2756)](0,0,0,0),new Cesium[x(2756)](0,0,0,0),new Cesium[x(2756)](0,0,0,0)],this[x(1242)]=[new Cesium[x(2756)](0,0,0,0),new Cesium[x(2756)](0,0,0,0),new Cesium.Cartesian4(0,0,0,0),new Cesium.Cartesian4(0,0,0,0),new Cesium[x(2756)](0,0,0,0),new Cesium[x(2756)](0,0,0,0)],this[x(2898)]=new Da({}),this[x(445)]=new Ia,this[x(2607)]=0,this._maxCategory=0,this[x(2322)]=0,this[x(1609)]=0,this[x(2086)]=new Cesium[x(2756)](0,0,1,1),this[x(673)]=!1,this[x(1107)]=Cesium[x(820)](e[x(2175)],1),this._contrast=Cesium.defaultValue(e[x(1715)],1),this._hue=Cesium[x(820)](e[x(954)],0),this[x(3693)]=Cesium.defaultValue(e[x(2210)],1),this._gamma=Cesium[x(820)](e.gamma,1),this[x(1023)]=Cesium[x(820)](e[x(2347)],Number.MAX_VALUE),this[x(3374)]=Cesium[x(820)](e[x(2740)],0),this[x(979)]=Cesium[x(820)](e[x(2159)],0),this[x(1559)]=Cesium[x(820)](e[x(1247)],Number[x(1659)]),this._lodRangeScale=Cesium.defaultValue(e[x(3083)],1),this[x(929)]=Cesium[x(820)](e[x(1848)],!0),this[x(1511)]=Cesium[x(820)](e[x(3865)],new da),this[x(2396)]=!1,this[x(1156)]=e[x(2022)],this[x(2907)]=4095,this[x(2490)]=void 0,this[x(3235)]=void 0,this._edgeDistanceFalloffFactor=0,this[x(2556)]=0,this._edgeCurrentCount=0,this[x(458)]=qe[x(2988)](),this[x(3607)]=void 0,this[x(4067)]=void 0,this[x(1775)]=!1,this[x(1881)]=void 0,this[x(4136)]=Cesium[x(820)](e[x(3652)],{}),this[x(2505)]={pbrMetallicRoughness:{metallicFactor:0,roughnessFactor:0,baseColor:new Cesium[x(2756)](1,1,1,1),baseColorTextureIndex:-1,emissiveFactor:Cesium[x(516)][x(535)],emissiveTextureIndex:-1,occlusionTextureIndex:-1,normalTextureIndex:-1,normalTexture:void 0,baseColorTexture:void 0}},this[x(3010)]=e[x(697)],this[x(3259)]=void 0,this._heightRangeAttributeName=void 0,this[x(1155)]={},this[x(885)]=ya.MIX,this._mixColorType=Aa[x(759)],this[x(1552)](e[x(2547)])}function Rm(e){const x=o;let t={},a=e[x(2246)];t[x(1544)]=J.queryStringValue(a,"Version"),t[x(2450)]=J[x(987)](a,"FileType");let r=J[x(3250)](a,"WaterEffect");t[x(1955)]=J.queryNumericValue(r,"AverageHeight");let n=J[x(3809)](r,x(3168));t.gpuProgramParameters=[];for(let s=0,u=n[x(3650)];s<u;s++){let c={gpuConstants:[],atuoConstants:[]},f=n[s],l=J.queryFirstNode(f,x(1641));if(l){let h=J[x(3809)](l,x(2357));for(let C=0,p=h.length;C<p;C++){let _={},y=h[C];_.constType=J[x(1980)](y,"ConstType"),_[x(3220)]=J[x(1980)](y,x(1343)),_.name=J[x(987)](y,x(2085)),_[x(785)]=J[x(1980)](y,x(3727)),_[x(2543)]=J[x(1980)](y,x(1025));let A=J[x(3250)](y,"ArrayFloat");if(_.arrayFloat=[],A){let b=J.queryNodes(A,"Float"),B=0;for(;B<_[x(785)];){let T=parseFloat(b[B][x(3512)]);_.arrayFloat[x(2583)](T),B++}}c[x(2282)][x(2583)](_)}}let m=J[x(3250)](f,"AutoConstants");if(m){let h=J[x(3809)](m,"AutoConstantEntry");for(let C=0,p=h.length;C<p;C++){let _={},y=h[C];_[x(3272)]=J[x(1980)](y,"ParamType"),_[x(3085)]=J[x(987)](y,x(2085)),_[x(1999)]=J[x(1980)](y,x(4066)),_[x(1288)]=J[x(1980)](y,x(563)),_[x(1426)]=J[x(1980)](y,x(1401)),_[x(3209)]=J.queryNumericValue(y,x(1473)),_[x(1936)]=J[x(3365)](y,x(2013)),c[x(646)][x(2583)](_)}}t[x(3763)].push(c)}return t}function Dm(e,x){const t=o;let a=x._basePath;if(!(x[t(3828)].indexOf(t(2967))>-1))return e;let r=a[t(960)](/(.*realspace)/,"");return a.replace(/\/rest\/realspace/g,"")[t(960)](r,"")+"/rest/realspace"+r+t(2742)+e[t(960)](/^\.*/,"")[t(960)](/^\//,"")[t(960)](/\/$/,"")}function Im(e,x){const t=o;let a=x[t(1954)];if(!a||!a.attachFiles)return;let r=a[t(1866)],n=[];e[t(3828)];for(let s=0,u=r[t(3650)];s<u;s++){let c=r[s].attachFile;if(c[t(3019)](t(4031))>0){let f=Dm(c,e),l=e[t(1594)][t(2773)]({url:f});n.push(l.fetchXML())}}n[t(3650)]&&Promise[t(2340)](n)[t(4167)](s=>{const u=t;let c=[];for(let l=0,m=s[u(3650)];l<m;l++){let h=s[l];if(!h)break;let C=Rm(h);c[u(2583)](C)}e[u(3235)]=new Cesium[u(2902)],e[u(2490)]={};let f=c[0];e[u(2490)][u(1955)]=f[u(1955)];for(let l=0;l<f[u(3763)][u(3650)];l++){let m=f[u(3763)][l];for(let h=0;h<m[u(646)][u(3650)];h++){let C=m[u(646)][h];if(u(1350)===C.name){e[u(2490)][C[u(3085)]]=C[u(3209)];break}}for(let h=0;h<m[u(2282)][u(3650)];h++){let C=m[u(2282)][h],p=null;switch(C[u(785)]){case 1:p=C[u(1909)][0];break;case 2:p=new Cesium[u(2351)],Cesium[u(2351)][u(3562)](C[u(1909)],0,p);break;case 3:p=new Cesium[u(516)],Cesium[u(516)].unpack(C[u(1909)],0,p);break;case 4:p=new Cesium[u(2756)],Cesium.Cartesian4[u(3562)](C[u(1909)],0,p)}p&&(e[u(2490)][C[u(3085)]]=p)}}e.fileType+=u(3641)})[t(3239)](s=>{console.log(s)})}function Lm(e,x){const t=o;return e[t(3212)]-x[t(3212)]}function Fm(e){const x=o;let t=e[x(2106)],a=t[x(3650)];t[x(877)](Lm);for(let r=0;r<a;++r)t[r][x(2850)]()}function Om(e,x){const t=o;let a=e._processTiles,r=a.length;for(let n=0;n<r;++n)a[n][t(1277)](x,e)}function Nm(e,x){const t=o;for(let a=0,r=e._renderQueue[t(3650)];a<r;a++)e[t(2780)][a][t(2696)](x,e)}function cc(e,x){x[o(3802)]()}function uc(e){const x=o;e[x(3541)]?e[x(721)][x(602)](e,cc):e._cache.unloadTiles(e,cc)}function ft(e,x,t){const a=o;let r=new Cesium[a(516)],n=new Cesium[a(516)];Cesium.Cartesian3[a(758)](x,e,r),Cesium[a(516)].subtract(t,e,n);let s=new Cesium.Cartesian3;Cesium[a(516)][a(2550)](r,n,s),Cesium.Cartesian3.normalize(s,s);let u=-Cesium[a(516)][a(2528)](s,e);return new Cesium[a(2756)](s.x,s.y,s.z,u)}function hr(e,x){e[o(2272)](x)}function Oa(e){const x=o;var t=new Cesium[x(3014)],a=t[x(650)],r=new Cesium.Cartesian3,n=new Cesium[x(1431)];return a[x(3563)](e,n),t[x(3901)](n,r),Cesium.Cartesian3.fromElements(r.z,r.x,r.y)}function lc(e,x){e[o(3106)](x)}function Vm(e,x){const t=o;e[t(3951)](x[t(1157)],x)}function Um(e,x){const t=o;e[t(4084)](x[t(1157)],x)}function Gm(e,x){const t=o;e.updateAllObjsVisible(x[t(1848)])}function Hm(e,x){e[o(3893)](x)}function fc(e,x){e[o(1971)](x)}function zm(e,x){e[o(3293)](x)}function Km(e,x){e[o(1469)](x)}function km(e,x){e[o(4083)](x)}function dc(e){const x=o;let t=new Cesium[x(2756)](Number[x(1659)],Number[x(1659)],-Number[x(1659)],-Number.MAX_VALUE);for(let a=0;a<e.length;a++){const r=e[a].bounds;t.x=Math[x(1803)](r.x,t.x),t.y=Math[x(1803)](r.y,t.y),t.z=Math[x(2092)](r.z,t.z),t.w=Math[x(2092)](r.w,t.w)}return t}function Wm(e,x){const t=o;if(!e[t(3235)])return;let a=e[t(3235)];x[t(1411)]===void 0&&(x[t(1411)]=6378137),x[t(3595)]===void 0&&(x[t(3595)]=0);let r=x.camera[t(2307)];for(let n in a[t(2241)])if(a._hash[t(2364)](n)){let s=a[t(3715)](n),u=s[t(1948)];if(x[t(2956)].computeVisibility(u)===Cesium[t(1356)][t(1067)])continue;let c=Cesium[t(516)][t(4114)](u.center,r)-u[t(1707)];c=c<.01?.01:c,c<x[t(1411)]&&(x[t(1411)]=c,x.heightOffset=s[t(4114)])}}Object[o(2040)]($0.prototype,{ready:{get:function(){const e=o;return this[e(2450)]==="OSGBCacheFile_Water"?this._waterParameters!==void 0&&this[e(3462)].length>0:this._rootTiles[e(3650)]>0}},readyPromise:{get:function(){return this._readyPromise.promise}},visible:{get:function(){return this._visible},set:function(e){const x=o;this[x(929)]=e}},show:{get:function(){return this[o(929)]},set:function(e){const x=o;this[x(929)]=e}},style3D:{get:function(){return this[o(1511)]}},rectangle:{get:function(){return this[o(1429)]}},totalMemoryUsageInBytes:{get:function(){return this[o(2893)]},set:function(e){const x=o;this[x(2893)]=e}},maximumMemoryUsage:{get:function(){return this[o(774)]},set:function(e){const x=o;this[x(774)]=e}},lodRangeScale:{get:function(){return this[o(3183)]},set:function(e){const x=o;Cesium[x(1680)][x(1556)][x(1232)](x(3463),e),this._lodRangeScale=e}},selectedColor:{get:function(){return this._selectedColor},set:function(e){const x=o;Cesium[x(1911)][x(3552)](e,this[x(3054)])}},dataMinValue:{get:function(){const e=o;return Cesium.defaultValue(this[e(2607)],this[e(2322)])}},dataMaxValue:{get:function(){const e=o;return Cesium[e(820)](this[e(1096)],this[e(1609)])}},swipeRegion:{get:function(){const e=o;return new Cesium[e(1691)](this[e(2086)].x,this[e(2086)].y,this[e(2086)].z-this[e(2086)].x,this[e(2086)].w-this._swipeRegion.y)},set:function(e){const x=o;if(e){if(!(e instanceof Cesium[x(1691)]))throw new Cesium[x(1785)](x(993));Cesium[x(2756)][x(511)](e.x,e.y,e.x+e[x(2375)],e.y+e[x(2388)],this._swipeRegion)}}},swipeEnabled:{get:function(){return this[o(673)]},set:function(e){const x=o;e!==this[x(673)]&&(e||Cesium[x(2756)][x(511)](0,0,1,1,this._swipeRegion),this[x(673)]=e,this[x(2445)]({enable:e},zm))}},visibleDistanceMax:{get:function(){return this[o(1023)]},set:function(e){const x=o;Cesium[x(1680)][x(1556)][x(1232)]("max visible distance",e),this[x(1023)]=e}},visibleDistanceMin:{get:function(){return this[o(3374)]},set:function(e){const x=o;Cesium[x(1680)][x(1556)].number("min visible distance",e),this[x(3374)]=e}},minVisibleAltitude:{get:function(){return this[o(979)]},set:function(e){const x=o;Cesium.Check[x(1556)][x(1232)]("min visible altitude",e),this[x(979)]=e}},maxVisibleAltitude:{get:function(){return this[o(1559)]},set:function(e){const x=o;Cesium[x(1680)][x(1556)].number(x(4137),e),this._maxVisibleAltitude=e}},hypsometricSetting:{get:function(){const e=o;return{hypsometricSetting:this[e(2898)][e(3827)],analysisMode:this[e(2898)].analysisMode}},set:function(e){const x=o;let t=this[x(2898)];if(!e||!e[x(3669)])return t.isUseHypColorTable=!1,t[x(3827)]=t.setting&&t[x(3827)][x(3701)](),void this[x(2445)]({enable:!1},fc);t[x(4095)]=t[x(4095)]&&t[x(4095)][x(3701)](),t.renderTexture||(t.renderTexture=new Cesium[x(1869)]({context:this[x(716)],width:1024,height:1024,pixelFormat:Cesium[x(3868)][x(4092)]})),t[x(2238)]||(t[x(2238)]=new Cesium[x(1869)]({context:this[x(716)],width:1024,height:64,pixelFormat:Cesium[x(3868)].RGBA,flipY:!1})),t[x(2048)]=Cesium[x(820)](e[x(2048)],t[x(2048)]),t.setting=k2[x(3552)](e[x(3669)],t.setting),t[x(3827)][x(1351)]&&(t[x(3827)][x(1351)][x(4121)](),this[x(2898)][x(2238)]&&this[x(2898)].texture[x(3089)]({width:1024,height:64,arrayBufferView:t[x(3827)][x(1351)][x(755)]})),t.isUseHypColorTable=t[x(2048)]!==Ti[x(2864)][x(2198)],this[x(2445)]({enable:t[x(3944)]},fc)}},selectEnabled:{get:function(){return this[o(884)]},set:function(e){const x=o;Cesium.Check[x(692)]("value",e),Cesium.Check[x(1556)].bool(x(2976),e),this[x(884)]=e}},subdomains:{get:function(){const e=o;return this[e(4136)][e(2868)]},set:function(e){const x=o;if(defined(e)&&!defined(e.length))throw new DeveloperError(x(2833));this[x(4136)][x(2868)]=e}},customRequestHeaders:{get:function(){return this[o(3010)]},set:function(e){const x=o;this[x(3010)]=e}},iconRelatedTextLayerID:{get:function(){return this[o(1881)]},set:function(e){const x=o;this[x(1881)]=e}},isOverlapDisplayed:{get:function(){return this._isOverlapDisplayed},set:function(e){const x=o;Cesium[x(1680)][x(1556)].bool(x(2152),e),this[x(1775)]=e,this._isOverlapDisplayed?this.setOnlyObjsVisible([],!1,!1,!0):this[x(560)]([],!0,!1,!0)}},overlapWeightAttributeName:{get:function(){return this[o(3259)]},set:function(e){this._overlapWeightAttributeName=e}},heightRangeAttributeName:{get:function(){return this[o(1615)]},set:function(e){const x=o;this[x(1615)]=e}},selectColorType:{get:function(){return this[o(885)]},set:function(e){const x=o;if(this._selectColorType!==e){this[x(885)]=e;var t={};t[x(1826)]=this,t[x(1316)]=e,this._tranverseRenderEntity(t,Km)}}},mixColorType:{get:function(){return this[o(847)]},set:function(e){const x=o;if(this[x(847)]!==e){this[x(847)]=e;var t={layer:this,mixColorType:e};this[x(2445)](t,km)}}}}),$0[o(3096)][o(1552)]=function(e){let x=this;Promise.resolve(e).then(function(t){const a=C0;let r,n=Cesium[a(1702)].createIfNeeded(t);r=n[a(2824)](!0);let s=new Ex(r);return s[a(2894)]=void 0,r=s.toString(),x[a(3854)]=n[a(2547)],x[a(3828)]=r,x._baseResource=n,Cesium[a(692)](x[a(4136)].subdomains)&&(x._basePath=x._subdomainConfig[a(2646)]),x[a(2531)]||x[a(3541)]?n[a(1542)]():n[a(1312)]()}).then(function(t){const a=C0;if(x[a(2531)]||x[a(3541)]){let r=t[a(1954)];x[a(2450)]=r[a(2774)];let n=t[a(3009)].x,s=t.position.y,u=t[a(3009)].z,c=t.position[a(1116)];if(x[a(1840)]=n,x[a(1278)]=s,x[a(2388)]=u,x[a(1632)]===Cesium.SceneMode.SCENE3D)x._position=Cesium[a(516)].fromDegrees(n,s,u),x[a(931)]=Cesium[a(1755)][a(631)](x._position),x[a(3732)]=Cesium[a(2235)][a(1201)](x[a(931)],x.invModelMatrix);else{if(n>180||n<-180||s>180||s<-180||a(2963)===c){let l=n,m=s;x[a(1694)]=new Cesium[a(516)](l,m,u)}else{let l=new Cesium[a(3014)],m=Cesium.Cartesian3[a(2136)](n,s,u),h=l[a(650)][a(3563)](m);x[a(1694)]=l[a(3901)](h)}Cesium.Matrix4[a(562)](x._position,x[a(931)]),Cesium[a(2235)][a(3640)](sc,x[a(931)],x[a(931)]),x.invModelMatrix=Cesium[a(2235)][a(1201)](x[a(931)],x.invModelMatrix)}if(Cesium[a(692)](t.geoBounds)){let l=t[a(3817)].left,m=t[a(3817)][a(3981)],h=t.geoBounds[a(614)],C=t[a(3817)].bottom;l>180||C>180||h>180||m>180?(l/=6378137,C/=6378137,h/=6378137,m/=6378137,x[a(1429)]=new Cesium.Rectangle(l,C,h,m)):x[a(1429)]=Cesium[a(2879)][a(2136)](l,C,h,m)}if(t[a(1646)]&&(x[a(2322)]=t[a(1646)].min,x._maxHeight=t[a(1646)][a(2092)]),t.wDescript){let l=t[a(2699)][a(3666)];x[a(3036)]=l[a(1803)],x[a(1908)]=l.max}r[a(2364)](a(1795))&&(x._isTransparencyOptimization=r[a(1795)]==="TRUE"),r[a(2364)](a(3175))&&(x[a(1617)]=r[a(3175)]),r[a(2364)](a(3753))&&(x._textureCompressType=r[a(3753)]);const f=t[a(2947)]||t.rootTiles;f.length>0&&Cesium[a(3441)](f[0][a(2547)])==="s3mblock"&&(x[a(3541)]=!0);for(let l=0,m=f[a(3650)];l<m;l++){let h=f[l][a(2547)],C={box:f[l][a(846)]},p=new Jx(x,void 0,C,h);p[a(3049)]=!0,p[a(1440)]=h,x._cache[a(1050)](p),x[a(3462)][a(2583)](p)}Im(x,t)}else{let r=t[a(2246)],n=r.namespace;x.fileType=J[a(987)](r,"FileType",n);let s=J.queryFirstNode(r,"Position",n),u=J[a(1980)](s,"X",n),c=J[a(1980)](s,"Y",n),f=J.queryNumericValue(s,"Z",n);x.lon=u,x[a(1278)]=c,x[a(2388)]=f,x[a(1694)]=Cesium[a(516)][a(2136)](u,c,f),x[a(931)]=Cesium[a(1755)][a(631)](x[a(1694)]),x[a(3732)]=Cesium[a(2235)].inverse(x[a(931)],x[a(3732)]);let l=J[a(3250)](r,a(455),n),m=J[a(3250)](r,a(1551),n);if(l){let b=J[a(1980)](l,a(2467),n),B=J[a(1980)](l,a(2970),n),T=J[a(1980)](l,a(2477),n),M=J[a(1980)](l,a(790),n);x._rectangle=Cesium.Rectangle[a(2136)](b,M,T,B)}else if(m){let b=J[a(1980)](m,"MinX",n),B=J[a(1980)](m,"MinY",n);J[a(1980)](m,a(3710),n);let T=J[a(1980)](m,a(3962),n),M=J.queryNumericValue(m,"MaxY",n);J[a(1980)](m,a(900),n),b=180*Math[a(905)](b)/(6378137*Math.PI),B=180*Math[a(905)](B)/(6378137*Math.PI),T=180*Math.abs(T)/(6378137*Math.PI),M=180*Math.abs(M)/(6378137*Math.PI),x[a(1429)]=Cesium[a(2879)][a(2136)](u-b,c-B,u+T,c+M)}let h=J.queryFirstNode(r,a(1722),n);h&&(x[a(2322)]=J.queryNumericValue(h,a(1416),n),x[a(1609)]=J[a(1980)](h,a(1262),n));let C=J[a(3250)](r,a(3207),n);C&&(x[a(1908)]=J[a(1980)](C,a(1625),n),x[a(3036)]=J[a(1980)](C,"MinCategory",n));let p=J.queryFirstNode(r,a(3939),n);x[a(2396)]=J[a(3365)](p,a(1017),n);let _=/\\+/g,y=J[a(3250)](r,"OSGFiles",n),A=J[a(3809)](y,a(3713),n);if(A.length>0)for(let b=0,B=A[a(3650)];b<B;b++){let T=A[b],M=J[a(987)](T,a(3986),n);M=M.replace(_,"/"),M=M[a(960)](/(\.osgb)/gi,a(3111));let w=J[a(3250)](T,a(1475),n),I={sphere:{center:{x:0,y:0,z:0},radius:6378137}};w&&w[a(1202)].length&&(I={sphere:{center:{x:J.queryNumericValue(w,a(1498),n),y:J.queryNumericValue(w,a(1770),n),z:J[a(1980)](w,a(779),n)},radius:J.queryNumericValue(w,a(786),n)}});let P=new Jx(x,void 0,I,M);P[a(3049)]=!0,x._cache.add(P),x[a(3462)][a(2583)](P)}else{let b=J[a(3809)](y,a(3986),n);for(let B=0,T=b[a(3650)];B<T;B++){let M=b[B][a(3512)];M=M[a(960)](_,"/"),M=M[a(960)](/(\.osgb)/gi,a(3111));let w=new Jx(x,void 0,{sphere:{center:{x:0,y:0,z:0},radius:6378137}},M);w[a(3049)]=!0,x[a(721)].add(w),x[a(3462)].push(w)}}}x[a(1506)][a(1599)](x)},t=>{x[C0(1506)].reject(t)})},$0[o(3096)][o(3405)]=function(){const e=o;this[e(2989)][e(3650)]<1||(this[e(1253)](this[e(2989)],ue[e(1435)]),this[e(2989)][e(3650)]=0)},$0[o(3096)][o(2953)]=function(e){const x=o;this[x(3183)]=e},$0.prototype[o(1051)]=function(e){const x=o;Cesium[x(1680)].defined(x(2144),e),this[x(884)]&&(Array[x(906)](e)||(e=[e]),this._multiChoose||this[x(3405)](),this[x(2989)]=this[x(2989)][x(2263)](e),this._setObjsOperationType(e,ue[x(1435)]))},$0[o(3096)][o(3785)]=function(){const e=o;return[][e(2263)](this[e(2989)])},$0[o(3096)][o(2611)]=function(e,x){const t=o;Cesium.Check[t(692)](t(3958),e),Cesium.Check[t(692)]("setObjsColor color",x),Cesium[t(1680)][t(1556)][t(2408)]("setObjsColor color",x),Array[t(906)](e)||(e=[e]);let a={};for(let r=0,n=e[t(3650)];r<n;r++){let s=e[r]+"";Cesium[t(692)](s)&&(this._objsColorList[s]=x,a[s]=x)}this._updateObjsColor(a)},$0[o(3096)][o(2503)]=function(e){const x=o;Cesium[x(1680)].defined(x(3223),e),Array[x(906)](e)||(e=[e]);let t={};for(let a=0,r=e[x(3650)];a<r;a++){let n=e[a];Cesium.defined(this[x(1990)][n])&&(t[n]=Cesium.Color[x(1704)],delete this[x(1990)][n])}this[x(1253)](e,ue[x(1123)]),this[x(2384)](t)},$0[o(3096)][o(560)]=function(e,x,t,a){const r=o;Cesium[r(1680)][r(692)](r(2170),e),Cesium[r(1680)].typeOf[r(2283)](r(3927),x),t=Cesium[r(820)](t,!0),a=Cesium.defaultValue(a,!1),Array.isArray(e)||(e=[e]);var n=this._objsVisibleList,s=this[r(2683)],u=this[r(3816)];if(e[r(3650)]!==0)x?(e[r(3317)](function(f){n.set(f,!0),s.remove(f),t&&(u[f]=!0)}),this[r(1253)](e,ue.HIDE)):(e[r(3317)](function(f){n[r(1578)](f),s.set(f,!0),t&&(u[f]=!1)}),this[r(2659)](e,ue.HIDE));else{if(t){this._allObjsHide=x,this._objsVisibleList[r(1470)]();var c=Object[r(3360)](this[r(2683)][r(2241)]);return this[r(1253)](c,ue[r(1964)]),this[r(2683)][r(1470)](),this._updateAllObjsVisible(!x),this[r(3816)]={},void(this._objsVisibleMap[r(3203)]=x)}if(x)this[r(3203)]=x,this[r(3150)][r(1470)](),this._objsHideList[r(1470)](),a&&this._updateAllObjsVisible(!x);else{if(u[r(3203)])return;if(a){let l=Object.keys(this[r(2683)][r(2241)])[r(2234)](m=>u[m]!==!1);return void this[r(1253)](l,ue[r(1964)])}let f=Object.keys(u)[r(2234)](l=>u[l]);this[r(1253)](f,ue[r(1964)])}}},$0[o(3096)][o(2855)]=function(e,x){const t=o;e.length!==0?(this[t(560)]([],x),this[t(560)](e,x)):this[t(560)]([],x)},$0[o(3096)][o(3389)]=function(e,x,t,a){const r=o;this[r(1632)]===Cesium[r(442)][r(3443)]&&(e=Oa(e),x=Oa(x),t=Oa(t)),this[r(1242)][0]=ft(e,x,t),this[r(1367)]=lt[r(2264)],this[r(1062)]=!0,this[r(950)]||this[r(2445)]({enable:!0},hr),this[r(950)]=!0},$0[o(3096)][o(698)]=function(e){const x=o;if(!((e=e||{})[x(1750)]&&e[x(3009)]||e[x(708)]&&e[x(3153)]))throw new Cesium[x(1785)](x(792));if(this._clipMode=lt.CLIP_BEHIND_ALL_PLANE,Cesium.defined(e[x(2948)]))switch(e[x(2948)]){case"clip_behind_any_plane":this[x(1367)]=lt[x(2845)];break;case"clip_behind_all_plane":this[x(1367)]=lt[x(2264)];break;case x(3313):this._clipMode=lt[x(1797)]}if(e[x(1750)]){let t,a,r,n=new Cesium.Matrix4,s=e.position;t=e.heading||0,a=e.pitch||0,r=e[x(2677)]||0;let u,c,f,l=new Cesium[x(2030)](t,a,r);if(this[x(1632)]===Cesium[x(442)].SCENE3D)n=Cesium[x(1755)][x(2783)](s,l,Cesium[x(2024)][x(2760)]);else{l=new Cesium[x(2030)](a,-r,-t);let h=Oa(s);Cesium[x(2235)][x(1538)](Cesium[x(2235)].clone(Cesium[x(2235)][x(3447)]),h,n);let C=Cesium.Matrix3[x(843)](l);Cesium[x(2235)].multiplyByMatrix3(n,C,n)}this._sceneMode===Cesium[x(442)].SCENE3D?(u=.5*e.dimensions.x,c=.5*e[x(1750)].y,f=.5*e[x(1750)].z):(u=.5*e.dimensions.z,c=.5*e[x(1750)].x,f=.5*e.dimensions.y);let m=[];m[0]=new Cesium[x(2756)](-u,c,f,1),m[1]=new Cesium[x(2756)](u,c,f,1),m[2]=new Cesium.Cartesian4(u,-c,f,1),m[3]=new Cesium[x(2756)](-u,-c,f,1),m[4]=new Cesium.Cartesian4(-u,c,-f,1),m[5]=new Cesium[x(2756)](u,c,-f,1),m[6]=new Cesium[x(2756)](u,-c,-f,1),m[7]=new Cesium[x(2756)](-u,-c,-f,1);for(let h=0;h<8;h++)Cesium.Matrix4[x(3688)](n,m[h],m[h]);this._oriClipPlane[0]=Cesium[x(2756)][x(3552)](ft(m[0],m[1],m[2])),this[x(1242)][1]=Cesium.Cartesian4[x(3552)](ft(m[0],m[4],m[1])),this._oriClipPlane[2]=Cesium[x(2756)][x(3552)](ft(m[0],m[3],m[4])),this._oriClipPlane[3]=Cesium[x(2756)][x(3552)](ft(m[6],m[2],m[5])),this[x(1242)][4]=Cesium[x(2756)].clone(ft(m[6],m[7],m[2])),this[x(1242)][5]=Cesium[x(2756)][x(3552)](ft(m[6],m[5],m[7]))}else for(let t=0;t<e[x(708)].length;t++){let a=e.planePos[t],r=e.planeNormal[t];this[x(1242)][t].x=r.x,this[x(1242)][t].y=r.y,this[x(1242)][t].z=r.z,this[x(1242)][t].w=-Cesium[x(516)][x(2528)](a,r)}this[x(950)]||this[x(2445)]({enable:!0},hr),this._enableClip=!0},$0[o(3096)][o(4117)]=function(){const e=o;this._enableClip=!1,this[e(1062)]=!1,this[e(2445)]({enable:!1},hr)},$0[o(3096)][o(1575)]=function(e,x){const t=o;if(this[t(3095)](),x==Fa[t(2489)]||x==Fa[t(3131)])for(var a=e[t(3650)],r=0;r<a;r++){var n={position:e[r],name:t(2141)+r};this[t(3555)](n)}this[t(3100)]=x},$0[o(3096)][o(3095)]=function(){const e=o;for(var x=Object[e(3360)](this._excavationRegions._hash),t=0,a=x[e(3650)];t<a;t++){var r=x[t];r[e(2570)](e(2141))&&this[e(2142)](r)}},$0[o(3096)][o(2142)]=function(e){const x=o;var t=this[x(777)][x(3715)](e);if(!this[x(777)][x(1578)](e))return!1;if(t[x(3701)](),this[x(3853)](e),this[x(3461)]=!0,this[x(777)][x(2496)][x(3650)]===0){this._hasExcavation=!1,this[x(3461)]=!1;var a={};a[x(1826)]=this,a.enable=!1,this[x(2445)](a,lc)}return!0},$0[o(3096)][o(3853)]=function(e){const x=o;var t=this[x(1036)][x(3715)](e+x(2354)),a=this[x(1036)].get(e+x(542));t&&(t[x(2457)]=t.vertexArray&&!t.vertexArray.isDestroyed()&&t[x(2457)][x(3701)]()),a&&(a[x(2457)]=a[x(2457)]&&!a.vertexArray[x(3777)]()&&a.vertexArray[x(3701)]()),this[x(1036)][x(1578)](e+x(2354)),this[x(1036)][x(1578)](e+x(542))},$0[o(3096)][o(3555)]=function(e){const x=o;var t=e[x(3085)],a=e[x(3009)],r=e[x(2388)];Cesium[x(692)](t)||Check[x(1556)][x(4039)](x(3047),t),Cesium[x(692)](a)||Check[x(1556)][x(4039)]("options.position",a);var n=this[x(777)][x(3715)](t);if(Cesium.defined(n))return!1;Cesium[x(692)](this[x(2427)])||(this._excavationTexture=new Cesium[x(1869)]({context:this[x(716)],width:this[x(1925)],height:this[x(1925)],pixelFormat:Cesium.PixelFormat[x(4092)]}),window.texture=this[x(2427)]);var s=this[x(3864)](a,r,Cesium.defined(r));if(s[x(3085)]=t,this[x(777)][x(2590)](t,s),this[x(3461)]=!0,this[x(595)]=!0,this._excavationRegions[x(2496)][x(3650)]===1){var u={};u[x(1826)]=this,u.enable=!0,this._tranverseRenderEntity(u,lc)}return!0},$0[o(3096)]._tranverseRenderEntity=function(e,x){const t=o;let a=[];for(let r=0,n=this[t(3462)][t(3650)];r<n;r++){let s=this[t(3462)][r];a[t(2583)](s)}for(;a[t(3650)];){let r=a[t(1526)]();for(let n=0,s=r.pageLods[t(3650)];n<s;n++){const u=r[t(3768)][n],c=u.renderEntities;for(let f=0,l=c[t(3650)];f<l;f++){const m=c[f];m[t(2266)]&&x(m,e)}u[t(3775)]&&a[t(2583)](u[t(3775)])}}},$0.prototype._updateObjsOperation=function(e){this[o(2445)]({ids:e},Vm)},$0[o(3096)][o(2384)]=function(e){this[o(2445)]({ids:e},Um)},$0[o(3096)][o(2745)]=function(e){this._tranverseRenderEntity({isVisible:e},Gm)},$0[o(3096)][o(2659)]=function(e,x){const t=o;Cesium[t(1680)].defined(t(1504),e),Cesium[t(1680)][t(692)]("set Objs Operation operationType",x),Array[t(906)](e)||(e=[e]);let a,r=new Cesium[t(2902)];for(let n=0,s=e[t(3650)];n<s;n++){if(a=e[n],!Cesium.defined(a))continue;let u=Cesium[t(820)](this[t(1261)][t(3715)](a),0);u!==x&&(u|=x,this[t(1261)][t(2590)](a,u),r.set(a,u))}r[t(3650)]>0&&this[t(1610)](r)},$0[o(3096)][o(1253)]=function(e,x){const t=o;Cesium[t(1680)][t(692)](t(1504),e),Array.isArray(e)||(e=[e]);let a,r=ue.ALL^x,n=new Cesium[t(2902)];for(let s=0,u=e[t(3650)];s<u;s++){a=e[s];let c=this[t(1261)].get(a);Cesium[t(692)](c)&&(c&=r,c===ue[t(2533)]?this[t(1261)].remove(a):this[t(1261)][t(2590)](a,c),n[t(2590)](a,c))}n[t(3650)]>0&&this[t(1610)](n)},$0.prototype[o(3864)]=function(e){const x=o;let t=Cesium[x(516)][x(2084)](e),a=new Cesium[x(4028)]({polygonHierarchy:{positions:t},perPositionHeight:!0}),r=Cesium.PolygonGeometry[x(4110)](a),n=new Xt;return n.updateGeometry(r,this[x(3732)]),n[x(3144)](r),n},$0[o(3096)].addFlattenRegion=function(e){const x=o;let t=e[x(3085)],a=e[x(3009)];if(!t||!a)return;let r=this[x(445)],n=r[x(1257)];if(n[x(2715)](t))return;r[x(2238)]||(r[x(2238)]=new Cesium[x(1869)]({context:this.context,width:r[x(494)],height:r.textureHeight,pixelFormat:Cesium[x(3868)][x(4092)]}));let s=this[x(3864)](a);n[x(2590)](t,s),r[x(651)]=!0,n[x(2496)][x(3650)]===1&&this[x(2445)]({enable:!0},Hm)},$0[o(3096)][o(1675)]=function(e){const x=o;let t=this._flattenPar;if(!t.isUpdate)return;t[x(651)]=!1;let a=t.regions,r=a[x(2496)].length;t[x(1533)]=r>0,t[x(3543)]=dc(a.values);let n=new Cesium[x(4134)]({color:new Cesium[x(1911)](1,1,1,1),depth:1});t[x(2238)]||(t[x(2238)]=new Cesium[x(1869)]({context:this[x(716)],width:t.textureWidth,height:t[x(3118)],pixelFormat:Cesium[x(3868)][x(4092)]})),t[x(1479)]||(t[x(1479)]=new Cesium[x(2072)]({context:this.context,colorTextures:[t[x(2238)]],destroyAttachments:!1})),n[x(3265)]=t[x(1479)],n[x(2256)]=Cesium[x(3154)][x(4073)](),n[x(1112)](this[x(716)]);for(let s=0;s<r;s++){let u=a.values[s];u[x(1852)](this[x(716)],t[x(1479)]),u[x(1841)].uniformMap={uRect:function(){return t[x(3543)]}},u[x(1841)][x(1112)](this[x(716)])}},$0[o(3096)][o(3850)]=function(e,x){const t=o;if(e>8)throw new Cesium[t(1785)](t(4180));this[t(2907)]=x?1<<e|this[t(2907)]:~(1<<e)&this[t(2907)]},$0[o(3096)][o(1870)]=function(e){const x=o;if(e>8)throw new Cesium.DeveloperError(x(627));return 1<<e&this[x(2907)]},$0[o(3096)][o(1885)]=function(){const e=o;this[e(2793)]!==0?(this[e(473)]=this[e(2556)]/this._edgeCurrentCount*40,this[e(2556)]=0,this[e(2793)]=0):this[e(2556)]=0},$0[o(3096)][o(1631)]=function(e,x){const t=o;this[t(2556)]+=e,this[t(2793)]+=x},$0.prototype[o(914)]=function(e){const x=o;let t=this._waterPlanes[x(3650)];return this[x(3235)][x(2590)](t,e),t},$0[o(3096)].removeWaterPlane=function(e){this[o(3235)].remove(e)},$0[o(3096)][o(1353)]=function(e){const x=o;this[x(2266)]&&e[x(3963)]&&(this._cache[x(2029)](),this[x(2106)][x(3650)]=0,this._processTiles[x(3650)]=0,this._renderQueue[x(3650)]=0,Cesium.defined(e[x(1e3)])&&e.brdfLutGenerator.update(e),Wm(this,e))};let mc=new Cesium[o(2235)];function Xm(e,x){const t=o;let a=x[t(3907)];return!(a.positionCartographic[t(2388)]<e[t(979)]||a[t(1293)][t(2388)]>e[t(1559)])&&!!e[t(1870)](x.multiViewportIndex)&&e.visible}function jm(e,x){const t=o;if(e[t(950)]){let a=x[t(3907)][t(943)];Cesium[t(2235)].transpose(a,mc);for(let r=0;r<6;r++)Cesium[t(2235)][t(3688)](mc,e[t(1242)][r],e[t(3821)][r])}}function qm(e){const x=o;var t=0;Cesium[x(692)](e[x(3865)])&&(t=e[x(3865)][x(3867)]);var a=e.height+t,r=e.lon,n=e.lat;if(e[x(1632)]===Cesium[x(442)][x(3940)])e._position=Cesium.Cartesian3[x(2136)](r,n,a),e[x(931)]=Cesium[x(1755)][x(631)](e._position),e[x(3732)]=Cesium.Matrix4[x(1201)](e[x(931)],e.invModelMatrix);else{if(r>180||r<-180||n>180||n<-180){let s=r,u=n;e[x(1694)]=new Cesium[x(516)](s,u,a)}else{let s=new Cesium.GeographicProjection,u=Cesium[x(516)][x(2136)](r,n,a),c=s.ellipsoid[x(3563)](u);e[x(1694)]=s[x(3901)](c)}Cesium.Matrix4[x(562)](e[x(1694)],e.modelMatrix),Cesium[x(2235)][x(3640)](sc,e.modelMatrix,e.modelMatrix),e.invModelMatrix=Cesium[x(2235)][x(1201)](e[x(931)],e[x(3732)])}}function hc(e,x){const t=o;var a=x,r=a[t(2505)].baseUri;a._PBRMaterialParams=e[t(2245)],a._PBRMaterialParams.baseUri=r,a[t(4019)](a._PBRMaterialParams,r);var n=a[t(2505)][t(1404)],s=a[t(2505)].textureunitstates;if(Cesium[t(692)](n.volume)&&(a[t(2505)].pbrMetallicRoughness[t(745)]={thickness:1,tintColor:Cesium[t(2756)].fromElements(1,1,1,1),diffusionDistance:Cesium[t(2756)][t(511)](1,1,1,1),transmissionFactor:1}),Cesium.defined(n[t(2105)])&&(a[t(2505)][t(1404)][t(2105)]={clearcoatFactor:0,clearcoatRoughnessFactor:0}),Cesium[t(692)](n[t(2102)])&&n[t(2102)][t(959)]!==-1){var u=r+s[n[t(2102)][t(959)]][t(3841)].url;a[t(2505)][t(919)]++,X2(a[t(716)],u,a[t(2505)],a[t(2505)][t(1404)].snowEffect,t(3380))}Cesium.defined(n[t(2102)])&&n.snowEffect[t(1846)]!==-1&&(u=r+s[n.snowEffect[t(1846)]].textureunitstate[t(2547)],a._PBRMaterialParams[t(919)]++,X2(a[t(716)],u,a._PBRMaterialParams,a[t(2505)][t(1404)][t(2102)],"snowMaskTexture")),Cesium[t(692)](n[t(1762)])&&n.rainEffect.rippleTextureIndex!==-1&&(u=r+s[n[t(1762)].rippleTextureIndex][t(3841)][t(2547)],a[t(2505)][t(919)]++,X2(a[t(716)],u,a[t(2505)],a[t(2505)][t(1404)][t(1762)],t(911)))}function Cc(e,x){e[o(532)](x)}function X2(e,x,t,a,r){const n=o;var s=Cesium[n(1702)].createIfNeeded(x)[n(3941)]()[n(4167)](function(u){const c=n;var f=new Cesium[c(1869)]({context:e,source:u,sampler:new Cesium.Sampler({wrapS:Cesium[c(587)][c(3623)],wrapT:Cesium.TextureWrap.REPEAT,minificationFilter:Cesium[c(2410)][c(2374)],magnificationFilter:Cesium.TextureMinificationFilter[c(2191)]})});!Cesium.Math[c(712)](f[c(2375)])||!Cesium[c(2746)][c(712)](f[c(2388)])||f[c(2216)](Cesium[c(2197)].NICEST),a[r]=f,t[c(1865)]++},u=>{const c=n;console.error(u),t[c(919)]--});a[r]=s}$0[o(3096)].postPassesUpdate=function(e){const x=o;this[x(2266)]&&(uc(this),this[x(1675)](e),this[x(1885)](),this[x(3964)](e),this._subTextureManager&&this[x(4067)][x(3530)](this.id))},$0[o(3096)][o(2696)]=function(e){const x=o;if(this.ready&&Xm(this,e))if(this[x(2505)][x(2903)]&&this[x(1914)](),this[x(3814)]!==La[x(1589)]||Ix[x(731)])if(this[x(3814)]!==La[x(3971)]||Se[x(731)])if(x(3991)!==this[x(1617)]||ce.wasmReady){this[x(3630)][x(1917)](this,e),Fm(this),Om(this,e),Nm(this,e),jm(this,e);for(var t=this[x(1036)].values[x(3650)],a=0;a<t;a++){var r=this[x(1036)][x(2496)][a];e[x(3138)][x(2583)](r)}this[x(1511)][x(2448)]&&(qm(this),this._style3D[x(2448)]=!1),this[x(1988)]=e}else ce[x(1739)]();else Se[x(1739)](this[x(716)]);else Ix[x(1739)]()},$0[o(3096)][o(3549)]=function(e){const x=o;var t=this,a=x(4039)==typeof e;t[x(2505)].baseUri=a?Cesium[x(2824)](e):"",a?Cesium[x(1702)][x(1554)](e)[x(1542)](e).then(function(r){hc(r,t)}):hc(e,t)},$0[o(3096)][o(1914)]=function(){const e=o;if(Cesium.defined(this[e(2505)])&&Cesium[e(692)](this[e(2505)][e(919)])&&this[e(2505)][e(919)]===this._PBRMaterialParams[e(1865)]){var x={enable:!0};x.layer=this,this._tranverseRenderEntity(x,Cc),this._PBRMaterialParams[e(2903)]=!1}},$0.prototype.removePBRMaterial=function(){const e=o;var x=this[e(2505)][e(1404)];for(var t in x)x.hasOwnProperty(t)&&x[t]instanceof Cesium[e(1869)]&&x[t][e(3701)]();this[e(2505)]={pbrMetallicRoughness:{metallicFactor:0,roughnessFactor:0,baseColor:new Cartesian4(1,1,1,1),baseColorTextureIndex:-1,emissiveFactor:Cartesian3[e(535)],emissiveTextureIndex:-1,occlusionTextureIndex:-1,metallicRoughnessTextureIndex:-1,normalTextureIndex:-1,normalTexture:void 0,baseColorTexture:void 0,intensityScale:1,snowEffect:void 0,rainEffect:void 0,volume:void 0,clearcoat:void 0,anisotropy:void 0},loadingTexture:void 0};var a={enable:!0};a[e(1826)]=this,this[e(2445)](a,Cc)},$0.prototype[o(4019)]=function(e,x){const t=o;e[t(2903)]=!0;var a=e[t(1404)],r=e[t(2108)],n=a.baseColorTextureIndex;Cesium.defined(e[t(919)])||(e.pendingTextureCount=0),Cesium.defined(e.readyTextureCount)||(e[t(1865)]=0);var s=this[t(716)],u=Cesium[t(692)](x)?x:this[t(3281)]+this._materialRelativePath;n>-1&&!Cesium[t(692)](a.baseColorTexture)&&(X2(s,u+r[n][t(3841)].url,e,e.pbrMetallicRoughness,t(1558)),e[t(919)]++);var c=a[t(2695)];c>-1&&!Cesium.defined(a[t(2678)])&&(X2(s,u+r[c][t(3841)][t(2547)],e,e[t(1404)],t(2678)),e[t(919)]++);var f=a[t(1652)];f>-1&&!Cesium[t(692)](a[t(3845)])&&(X2(s,u+r[f][t(3841)][t(2547)],e,e[t(1404)],t(3845)),e.pendingTextureCount++);var l=a.metallicRoughnessTextureIndex;l>-1&&!Cesium.defined(a[t(1246)])&&(X2(s,u+r[l][t(3841)][t(2547)],e,e[t(1404)],t(1246)),e[t(919)]++);var m=a[t(3202)];m>-1&&!Cesium[t(692)](a.occlusionTexture)&&(X2(s,u+r[m][t(3841)][t(2547)],e,e.pbrMetallicRoughness,t(3855)),e[t(919)]++)},$0[o(3096)][o(3964)]=function(e){const x=o;if(!this._excavationUpdate)return;let t=this[x(716)];for(var a in e[x(845)])a[x(3019)](x(1333))>-1&&!Cesium[x(692)](this[x(777)][x(3715)](a.slice(22)))&&(e[x(845)][a]=!e[x(845)][a].isDestroyed()&&e[x(845)][a][x(3701)](),delete e[x(845)][a]);var r=this[x(777)][x(2496)][x(3650)];this[x(595)]=r>0,this._excavationUpdate=!1,this[x(2955)]=dc(this._excavationRegions.values);var n=new Cesium.ClearCommand({color:new Cesium[x(1911)](0,0,0,0),depth:1});n[x(3265)]=new Cesium[x(2072)]({context:t,colorTextures:[this[x(2427)]],destroyAttachments:!1}),n[x(2256)]=Cesium[x(3154)].fromCache(),n[x(1112)](t);for(var s=0;s<r;s++){var u=this[x(777)][x(2496)][s];this[x(2964)](t,u,this._excavationTexture,mr.Color);var c=this;u._command.uniformMap={uRect:function(){return c[x(2955)]}},u[x(2423)][x(1112)](t)}n.framebuffer[x(3701)]()},$0[o(3096)][o(2964)]=function(e,x,t,a){const r=o;if(Cesium[r(692)](x)&&!Cesium[r(692)](x[r(2423)])){var n=new Cesium.DrawCommand({primitiveType:Cesium.PrimitiveType[r(3487)]});x[r(2423)]=n;var s={position:0};n[r(2457)]=Cesium.VertexArray.fromGeometry({context:e,geometry:x[r(1995)],attributeLocations:s,bufferUsage:Cesium.BufferUsage[r(2109)],interleave:!0,owner:this[r(3085)]});var u=new Cesium[r(635)]({sources:[Mm]});a==mr[r(1231)]?(u[r(3553)].push(r(3395)),t[r(1126)]===PixelDatatype.FLOAT&&u[r(3553)].push(r(3440)),n[r(2360)]=Cesium[r(2416)].fromCache({name:"RegionAltitudeSp",context:e,vertexShaderSource:Sm,fragmentShaderSource:u,attributeLocations:s})):a==mr[r(1869)]?(u[r(3553)].push(r(2154)),n[r(2360)]=Cesium[r(2416)][r(4073)]({name:"RegionTextureSp",context:e,vertexShaderSource:wm,fragmentShaderSource:u,attributeLocations:s})):n.shaderProgram=Cesium[r(2416)][r(4073)]({name:r(3476),context:e,vertexShaderSource:Pm,fragmentShaderSource:u,attributeLocations:s}),n.framebuffer=new Cesium[r(2072)]({context:e,colorTextures:[t],destroyAttachments:!1}),n[r(2256)]=Cesium.RenderState[r(4073)]({viewport:new Cesium[r(1691)](0,0,this[r(1925)],this._flattenTextureWidth)})}},$0[o(3096)][o(3777)]=function(){return!1},$0[o(3096)][o(3701)]=function(){const e=o;this._cache.reset(),uc(this),this[e(3462)][e(3650)]=0,this._requestTiles[e(3650)]=0,this[e(3026)][e(3650)]=0,this[e(2780)][e(3650)]=0,this[e(2989)][e(3650)]=0,this[e(1261)][e(1470)](),this[e(3150)][e(1470)](),this[e(2683)][e(1470)](),this._objsVisibleMap={},this._objsColorList={},this[e(2898)][e(3701)](),this._flattenPar.destroy();for(var x=Object.keys(this._excavationRegions._hash),t=0,a=x[e(3650)];t<a;t++){var r=x[t];this[e(777)][e(3715)](r).destroy(),this[e(3853)](r)}return this[e(777)][e(1470)](),delete this[e(2955)],this[e(2955)]=null,defined(this[e(2427)])&&(this._excavationTexture[e(3701)](),this._excavationTexture=null),defined(this[e(589)])&&(this[e(589)][e(3701)](),this._excavationSideTexture=null),defined(this[e(1066)])&&(this[e(1066)][e(3701)](),this[e(1066)]=null),Cesium[e(1136)](this)};var Bi=function(e){const x=o;var t,a=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,r=x(1355)==typeof Symbol&&x(3046)==typeof Symbol.iterator,n=Math[x(2892)],s=Math.floor,u=x(2257),c=u+x(2087),f=1e14,l=14,m=9007199254740991,h=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],C=1e7,p=1e9;function _(w){var I=0|w;return w>0||w===I?I:I-1}function y(w){const I=x;for(var P,V,q=1,X=w.length,H=w[0]+"";q<X;){for(P=w[q++]+"",V=l-P[I(3650)];V--;P="0"+P);H+=P}for(X=H[I(3650)];H.charCodeAt(--X)===48;);return H[I(3403)](0,X+1||1)}function A(w,I){const P=x;var V,q,X=w.c,H=I.c,z=w.s,u0=I.s,n0=w.e,N=I.e;if(!z||!u0)return null;if(V=X&&!X[0],q=H&&!H[0],V||q)return V?q?0:-u0:z;if(z!=u0)return z;if(V=z<0,q=n0==N,!X||!H)return q?0:!X^V?1:-1;if(!q)return n0>N^V?1:-1;for(u0=(n0=X.length)<(N=H[P(3650)])?n0:N,z=0;z<u0;z++)if(X[z]!=H[z])return X[z]>H[z]^V?1:-1;return n0==N?0:n0>N^V?1:-1}function b(w,I,P,V){const q=x;if(w<I||w>P||w!==s(w))throw Error(u+(V||q(2885))+(typeof w=="number"?w<I||w>P?q(2075):q(2869):q(2297))+String(w))}function B(w){const I=x;var P=w.c[I(3650)]-1;return _(w.e/l)==P&&w.c[P]%2!=0}function T(w,I){return(w[x(3650)]>1?w.charAt(0)+"."+w.slice(1):w)+(I<0?"e":"e+")+I}function M(w,I,P){const V=x;var q,X;if(I<0){for(X=P+".";++I;X+=P);w=X+w}else if(++I>(q=w[V(3650)])){for(X=P,I-=q;--I;X+=P);w+=X}else I<q&&(w=w.slice(0,I)+"."+w[V(3403)](I));return w}return t=function w(I){const P=x;var V,q,X,H,z,u0,n0,N,Y,W,x0=v0[P(3096)]={constructor:v0,toString:null,valueOf:null},y0=new v0(1),f0=20,v=4,T0=-7,F0=21,O0=-1e7,w0=1e7,U0=!1,xx=1,W0=0,j0={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xA0",suffix:""},tx=P(2686);function v0(L,U){const K=P;var k,d0,$,r0,a0,e0,b0,o0,c0=this;if(!(c0 instanceof v0))return new v0(L,U);if(U==null){if(L&&L[K(456)]===!0)return c0.s=L.s,void(!L.c||L.e>w0?c0.c=c0.e=null:L.e<O0?c0.c=[c0.e=0]:(c0.e=L.e,c0.c=L.c[K(3403)]()));if((e0=K(1232)==typeof L)&&0*L==0){if(c0.s=1/L<0?(L=-L,-1):1,L===~~L){for(r0=0,a0=L;a0>=10;a0/=10,r0++);return void(r0>w0?c0.c=c0.e=null:(c0.e=r0,c0.c=[L]))}o0=String(L)}else{if(!a[K(1528)](o0=String(L)))return X(c0,o0,e0);c0.s=o0[K(3128)](0)==45?(o0=o0[K(3403)](1),-1):1}(r0=o0[K(3019)]("."))>-1&&(o0=o0[K(960)](".","")),(a0=o0[K(3432)](/e/i))>0?(r0<0&&(r0=a0),r0+=+o0[K(3403)](a0+1),o0=o0.substring(0,a0)):r0<0&&(r0=o0.length)}else{if(b(U,2,tx[K(3650)],K(2684)),U==10)return G0(c0=new v0(L),f0+c0.e+1,v);if(o0=String(L),e0=K(1232)==typeof L){if(0*L!=0)return X(c0,o0,e0,U);if(c0.s=1/L<0?(o0=o0.slice(1),-1):1,v0[K(1437)]&&o0[K(960)](/^0\.0*|\./,"")[K(3650)]>15)throw Error(c+L)}else c0.s=o0[K(3128)](0)===45?(o0=o0[K(3403)](1),-1):1;for(k=tx[K(3403)](0,U),r0=a0=0,b0=o0[K(3650)];a0<b0;a0++)if(k.indexOf(d0=o0.charAt(a0))<0){if(d0=="."){if(a0>r0){r0=b0;continue}}else if(!$&&(o0==o0[K(3074)]()&&(o0=o0[K(3193)]())||o0==o0[K(3193)]()&&(o0=o0.toUpperCase()))){$=!0,a0=-1,r0=0;continue}return X(c0,String(L),e0,U)}e0=!1,(r0=(o0=q(o0,U,10,c0.s))[K(3019)]("."))>-1?o0=o0.replace(".",""):r0=o0[K(3650)]}for(a0=0;o0[K(3128)](a0)===48;a0++);for(b0=o0[K(3650)];o0[K(3128)](--b0)===48;);if(o0=o0[K(3403)](a0,++b0)){if(b0-=a0,e0&&v0.DEBUG&&b0>15&&(L>m||L!==s(L)))throw Error(c+c0.s*L);if((r0=r0-a0-1)>w0)c0.c=c0.e=null;else if(r0<O0)c0.c=[c0.e=0];else{if(c0.e=r0,c0.c=[],a0=(r0+1)%l,r0<0&&(a0+=l),a0<b0){for(a0&&c0.c[K(2583)](+o0[K(3403)](0,a0)),b0-=l;a0<b0;)c0.c.push(+o0[K(3403)](a0,a0+=l));a0=l-(o0=o0[K(3403)](a0))[K(3650)]}else a0-=b0;for(;a0--;o0+="0");c0.c.push(+o0)}}else c0.c=[c0.e=0]}function ix(L,U,K,k){const d0=P;var $,r0,a0,e0,b0;if(K==null?K=v:b(K,0,8),!L.c)return L[d0(2557)]();if($=L.c[0],a0=L.e,U==null)b0=y(L.c),b0=k==1||k==2&&(a0<=T0||a0>=F0)?T(b0,a0):M(b0,a0,"0");else if(r0=(L=G0(new v0(L),U,K)).e,e0=(b0=y(L.c))[d0(3650)],k==1||k==2&&(U<=r0||r0<=T0)){for(;e0<U;b0+="0",e0++);b0=T(b0,r0)}else if(U-=a0,b0=M(b0,r0,"0"),r0+1>e0){if(--U>0)for(b0+=".";U--;b0+="0");}else if((U+=r0-e0)>0)for(r0+1==e0&&(b0+=".");U--;b0+="0");return L.s<0&&$?"-"+b0:b0}function ax(L,U){const K=P;for(var k,d0=1,$=new v0(L[0]);d0<L[K(3650)];d0++){if(!(k=new v0(L[d0])).s){$=k;break}U[K(798)]($,k)&&($=k)}return $}function H0(L,U,K){const k=P;for(var d0=1,$=U[k(3650)];!U[--$];U.pop());for($=U[0];$>=10;$/=10,d0++);return(K=d0+K*l-1)>w0?L.c=L.e=null:K<O0?L.c=[L.e=0]:(L.e=K,L.c=U),L}function G0(L,U,K,k){const d0=P;var $,r0,a0,e0,b0,o0,c0,S0=L.c,z0=h;if(S0){x:{for($=1,e0=S0[0];e0>=10;e0/=10,$++);if((r0=U-$)<0)r0+=l,a0=U,c0=(b0=S0[o0=0])/z0[$-a0-1]%10|0;else if((o0=n((r0+1)/l))>=S0[d0(3650)]){if(!k)break x;for(;S0[d0(3650)]<=o0;S0.push(0));b0=c0=0,$=1,a0=(r0%=l)-l+1}else{for(b0=e0=S0[o0],$=1;e0>=10;e0/=10,$++);c0=(a0=(r0%=l)-l+$)<0?0:b0/z0[$-a0-1]%10|0}if(k=k||U<0||S0[o0+1]!=null||(a0<0?b0:b0%z0[$-a0-1]),k=K<4?(c0||k)&&(K==0||K==(L.s<0?3:2)):c0>5||c0==5&&(K==4||k||K==6&&(r0>0?a0>0?b0/z0[$-a0]:0:S0[o0-1])%10&1||K==(L.s<0?8:7)),U<1||!S0[0])return S0.length=0,k?(U-=L.e+1,S0[0]=z0[(l-U%l)%l],L.e=-U||0):S0[0]=L.e=0,L;if(r0==0?(S0.length=o0,e0=1,o0--):(S0[d0(3650)]=o0+1,e0=z0[l-r0],S0[o0]=a0>0?s(b0/z0[$-a0]%z0[a0])*e0:0),k)for(;;){if(o0==0){for(r0=1,a0=S0[0];a0>=10;a0/=10,r0++);for(a0=S0[0]+=e0,e0=1;a0>=10;a0/=10,e0++);r0!=e0&&(L.e++,S0[0]==f&&(S0[0]=1));break}if(S0[o0]+=e0,S0[o0]!=f)break;S0[o0--]=0,e0=1}for(r0=S0.length;S0[--r0]===0;S0.pop());}L.e>w0?L.c=L.e=null:L.e<O0&&(L.c=[L.e=0])}return L}function nx(L){var U,K=L.e;return K===null?L.toString():(U=y(L.c),U=K<=T0||K>=F0?T(U,K):M(U,K,"0"),L.s<0?"-"+U:U)}return v0[P(3552)]=w,v0.ROUND_UP=0,v0.ROUND_DOWN=1,v0[P(601)]=2,v0[P(3310)]=3,v0[P(1165)]=4,v0.ROUND_HALF_DOWN=5,v0.ROUND_HALF_EVEN=6,v0[P(2502)]=7,v0[P(541)]=8,v0[P(1931)]=9,v0[P(3801)]=v0[P(2590)]=function(L){const U=P;var K,k;if(L!=null){if(typeof L!="object")throw Error(u+U(2377)+L);if(L[U(2364)](K=U(2232))&&(b(k=L[K],0,p,K),f0=k),L[U(2364)](K=U(2602))&&(b(k=L[K],0,8,K),v=k),L.hasOwnProperty(K=U(3887))&&((k=L[K])&&k[U(1526)]?(b(k[0],-p,0,K),b(k[1],0,p,K),T0=k[0],F0=k[1]):(b(k,-p,p,K),T0=-(F0=k<0?-k:k))),L[U(2364)](K=U(3686)))if((k=L[K])&&k[U(1526)])b(k[0],-p,-1,K),b(k[1],1,p,K),O0=k[0],w0=k[1];else{if(b(k,-p,p,K),!k)throw Error(u+K+U(1813)+k);O0=-(w0=k<0?-k:k)}if(L[U(2364)](K=U(816))){if((k=L[K])!==!!k)throw Error(u+K+U(1005)+k);if(k){if(U(1345)==typeof crypto||!crypto||!crypto[U(3238)]&&!crypto[U(1450)])throw U0=!k,Error(u+U(793));U0=k}else U0=k}if(L[U(2364)](K=U(2192))&&(b(k=L[K],0,9,K),xx=k),L[U(2364)](K=U(1890))&&(b(k=L[K],0,p,K),W0=k),L[U(2364)](K=U(2204))){if(U(2408)!=typeof(k=L[K]))throw Error(u+K+U(543)+k);j0=k}if(L[U(2364)](K="ALPHABET")){if(U(4039)!=typeof(k=L[K])||/^.$|[+-.\s]|(.).*\1/[U(1528)](k))throw Error(u+K+U(3751)+k);tx=k}}return{DECIMAL_PLACES:f0,ROUNDING_MODE:v,EXPONENTIAL_AT:[T0,F0],RANGE:[O0,w0],CRYPTO:U0,MODULO_MODE:xx,POW_PRECISION:W0,FORMAT:j0,ALPHABET:tx}},v0[P(3905)]=function(L){const U=P;if(!L||L[U(456)]!==!0)return!1;if(!v0[U(1437)])return!0;var K,k,d0=L.c,$=L.e,r0=L.s;x:if(U(3211)=={}.toString.call(d0)){if((r0===1||r0===-1)&&$>=-p&&$<=p&&$===s($)){if(d0[0]===0){if($===0&&d0[U(3650)]===1)return!0;break x}if((K=($+1)%l)<1&&(K+=l),String(d0[0])[U(3650)]==K){for(K=0;K<d0[U(3650)];K++)if((k=d0[K])<0||k>=f||k!==s(k))break x;if(k!==0)return!0}}}else if(d0===null&&$===null&&(r0===null||r0===1||r0===-1))return!0;throw Error(u+"Invalid BigNumber: "+L)},v0[P(2794)]=v0[P(2092)]=function(){return ax(arguments,x0.lt)},v0.minimum=v0[P(1803)]=function(){return ax(arguments,x0.gt)},v0[P(3517)]=(H=9007199254740992,z=Math[P(3517)]()*H&2097151?function(){return s(Math.random()*H)}:function(){const L=P;return 8388608*(1073741824*Math[L(3517)]()|0)+(8388608*Math[L(3517)]()|0)},function(L){const U=P;var K,k,d0,$,r0,a0=0,e0=[],b0=new v0(y0);if(L==null?L=f0:b(L,0,p),$=n(L/l),U0)if(crypto[U(3238)]){for(K=crypto[U(3238)](new Uint32Array($*=2));a0<$;)(r0=131072*K[a0]+(K[a0+1]>>>11))>=9e15?(k=crypto[U(3238)](new Uint32Array(2)),K[a0]=k[0],K[a0+1]=k[1]):(e0[U(2583)](r0%1e14),a0+=2);a0=$/2}else{if(!crypto.randomBytes)throw U0=!1,Error(u+"crypto unavailable");for(K=crypto[U(1450)]($*=7);a0<$;)(r0=281474976710656*(31&K[a0])+1099511627776*K[a0+1]+4294967296*K[a0+2]+16777216*K[a0+3]+(K[a0+4]<<16)+(K[a0+5]<<8)+K[a0+6])>=9e15?crypto[U(1450)](7)[U(3748)](K,a0):(e0[U(2583)](r0%1e14),a0+=7);a0=$/7}if(!U0)for(;a0<$;)(r0=z())<9e15&&(e0[a0++]=r0%1e14);for($=e0[--a0],L%=l,$&&L&&(r0=h[l-L],e0[a0]=s($/r0)*r0);e0[a0]===0;e0[U(1526)](),a0--);if(a0<0)e0=[d0=0];else{for(d0=-1;e0[0]===0;e0[U(1805)](0,1),d0-=l);for(a0=1,r0=e0[0];r0>=10;r0/=10,a0++);a0<l&&(d0-=l-a0)}return b0.e=d0,b0.c=e0,b0}),v0[P(1929)]=function(){const L=P;for(var U=1,K=arguments,k=new v0(K[0]);U<K.length;)k=k[L(1855)](K[U++]);return k},q=function(){const L=P;var U=L(2603);function K(k,d0,$,r0){const a0=L;for(var e0,b0,o0=[0],c0=0,S0=k.length;c0<S0;){for(b0=o0[a0(3650)];b0--;o0[b0]*=d0);for(o0[0]+=r0[a0(3019)](k.charAt(c0++)),e0=0;e0<o0[a0(3650)];e0++)o0[e0]>$-1&&(o0[e0+1]==null&&(o0[e0+1]=0),o0[e0+1]+=o0[e0]/$|0,o0[e0]%=$)}return o0.reverse()}return function(k,d0,$,r0,a0){const e0=L;var b0,o0,c0,S0,z0,q0,N0,sx,hx=k.indexOf("."),Y0=f0,Z=v;for(hx>=0&&(S0=W0,W0=0,k=k[e0(960)](".",""),q0=(sx=new v0(d0)).pow(k[e0(3650)]-hx),W0=S0,sx.c=K(M(y(q0.c),q0.e,"0"),10,$,U),sx.e=sx.c.length),c0=S0=(N0=K(k,d0,$,a0?(b0=tx,U):(b0=U,tx)))[e0(3650)];N0[--S0]==0;N0[e0(1526)]());if(!N0[0])return b0.charAt(0);if(hx<0?--c0:(q0.c=N0,q0.e=c0,q0.s=r0,N0=(q0=V(q0,sx,Y0,Z,$)).c,z0=q0.r,c0=q0.e),hx=N0[o0=c0+Y0+1],S0=$/2,z0=z0||o0<0||N0[o0+1]!=null,z0=Z<4?(hx!=null||z0)&&(Z==0||Z==(q0.s<0?3:2)):hx>S0||hx==S0&&(Z==4||z0||Z==6&&1&N0[o0-1]||Z==(q0.s<0?8:7)),o0<1||!N0[0])k=z0?M(b0.charAt(1),-Y0,b0[e0(1223)](0)):b0[e0(1223)](0);else{if(N0.length=o0,z0)for(--$;++N0[--o0]>$;)N0[o0]=0,o0||(++c0,N0=[1].concat(N0));for(S0=N0[e0(3650)];!N0[--S0];);for(hx=0,k="";hx<=S0;k+=b0.charAt(N0[hx++]));k=M(k,c0,b0[e0(1223)](0))}return k}}(),V=function(){function L(k,d0,$){const r0=C0;var a0,e0,b0,o0,c0=0,S0=k[r0(3650)],z0=d0%C,q0=d0/C|0;for(k=k[r0(3403)]();S0--;)c0=((e0=z0*(b0=k[S0]%C)+(a0=q0*b0+(o0=k[S0]/C|0)*z0)%C*C+c0)/$|0)+(a0/C|0)+q0*o0,k[S0]=e0%$;return c0&&(k=[c0][r0(2263)](k)),k}function U(k,d0,$,r0){var a0,e0;if($!=r0)e0=$>r0?1:-1;else for(a0=e0=0;a0<$;a0++)if(k[a0]!=d0[a0]){e0=k[a0]>d0[a0]?1:-1;break}return e0}function K(k,d0,$,r0){const a0=C0;for(var e0=0;$--;)k[$]-=e0,e0=k[$]<d0[$]?1:0,k[$]=e0*r0+k[$]-d0[$];for(;!k[0]&&k[a0(3650)]>1;k[a0(1805)](0,1));}return function(k,d0,$,r0,a0){const e0=C0;var b0,o0,c0,S0,z0,q0,N0,sx,hx,Y0,Z,p0,S,F,D0,vx,L0,_x=k.s==d0.s?1:-1,R0=k.c,ex=d0.c;if(!(R0&&R0[0]&&ex&&ex[0]))return new v0(k.s&&d0.s&&(R0?!ex||R0[0]!=ex[0]:ex)?R0&&R0[0]==0||!ex?0*_x:_x/0:NaN);for(hx=(sx=new v0(_x)).c=[],_x=$+(o0=k.e-d0.e)+1,a0||(a0=f,o0=_(k.e/l)-_(d0.e/l),_x=_x/l|0),c0=0;ex[c0]==(R0[c0]||0);c0++);if(ex[c0]>(R0[c0]||0)&&o0--,_x<0)hx[e0(2583)](1),S0=!0;else{for(F=R0[e0(3650)],vx=ex[e0(3650)],c0=0,_x+=2,(z0=s(a0/(ex[0]+1)))>1&&(ex=L(ex,z0,a0),R0=L(R0,z0,a0),vx=ex[e0(3650)],F=R0[e0(3650)]),S=vx,Z=(Y0=R0.slice(0,vx))[e0(3650)];Z<vx;Y0[Z++]=0);L0=ex[e0(3403)](),L0=[0].concat(L0),D0=ex[0],ex[1]>=a0/2&&D0++;do{if(z0=0,(b0=U(ex,Y0,vx,Z))<0){if(p0=Y0[0],vx!=Z&&(p0=p0*a0+(Y0[1]||0)),(z0=s(p0/D0))>1)for(z0>=a0&&(z0=a0-1),N0=(q0=L(ex,z0,a0))[e0(3650)],Z=Y0[e0(3650)];U(q0,Y0,N0,Z)==1;)z0--,K(q0,vx<N0?L0:ex,N0,a0),N0=q0[e0(3650)],b0=1;else z0==0&&(b0=z0=1),N0=(q0=ex[e0(3403)]()).length;if(N0<Z&&(q0=[0][e0(2263)](q0)),K(Y0,q0,Z,a0),Z=Y0[e0(3650)],b0==-1)for(;U(ex,Y0,vx,Z)<1;)z0++,K(Y0,vx<Z?L0:ex,Z,a0),Z=Y0[e0(3650)]}else b0===0&&(z0++,Y0=[0]);hx[c0++]=z0,Y0[0]?Y0[Z++]=R0[S]||0:(Y0=[R0[S]],Z=1)}while((S++<F||Y0[0]!=null)&&_x--);S0=Y0[0]!=null,hx[0]||hx[e0(1805)](0,1)}if(a0==f){for(c0=1,_x=hx[0];_x>=10;_x/=10,c0++);G0(sx,$+(sx.e=c0+o0*l-1)+1,r0,S0)}else sx.e=o0,sx.r=+S0;return sx}}(),u0=/^(-?)0([xbo])(?=\w[\w.]*$)/i,n0=/^([^.]+)\.$/,N=/^\.([^.]+)$/,Y=/^-?(Infinity|NaN)$/,W=/^\s*\+(?=[\w.])|^\s+|\s+$/g,X=function(L,U,K,k){const d0=P;var $,r0=K?U:U.replace(W,"");if(Y[d0(1528)](r0))L.s=isNaN(r0)?null:r0<0?-1:1;else{if(!K&&(r0=r0[d0(960)](u0,function(a0,e0,b0){return $=(b0=b0[d0(3193)]())=="x"?16:b0=="b"?2:8,k&&k!=$?a0:e0}),k&&($=k,r0=r0[d0(960)](n0,"$1")[d0(960)](N,"0.$1")),U!=r0))return new v0(r0,$);if(v0[d0(1437)])throw Error(u+d0(2553)+(k?" base "+k:"")+d0(1636)+U);L.s=null}L.c=L.e=null},x0[P(1492)]=x0[P(905)]=function(){var L=new v0(this);return L.s<0&&(L.s=1),L},x0.comparedTo=function(L,U){return A(this,new v0(L,U))},x0[P(2618)]=x0.dp=function(L,U){const K=P;var k,d0,$,r0=this;if(L!=null)return b(L,0,p),U==null?U=v:b(U,0,8),G0(new v0(r0),L+r0.e+1,U);if(!(k=r0.c))return null;if(d0=(($=k[K(3650)]-1)-_(this.e/l))*l,$=k[$])for(;$%10==0;$/=10,d0--);return d0<0&&(d0=0),d0},x0[P(604)]=x0[P(2930)]=function(L,U){return V(this,new v0(L,U),f0,v)},x0.dividedToIntegerBy=x0[P(3646)]=function(L,U){return V(this,new v0(L,U),0,1)},x0.exponentiatedBy=x0.pow=function(L,U){const K=P;var k,d0,$,r0,a0,e0,b0,o0,c0=this;if((L=new v0(L)).c&&!L[K(3559)]())throw Error(u+K(1895)+nx(L));if(U!=null&&(U=new v0(U)),a0=L.e>14,!c0.c||!c0.c[0]||c0.c[0]==1&&!c0.e&&c0.c[K(3650)]==1||!L.c||!L.c[0])return o0=new v0(Math.pow(+nx(c0),a0?2-B(L):+nx(L))),U?o0[K(3176)](U):o0;if(e0=L.s<0,U){if(U.c?!U.c[0]:!U.s)return new v0(NaN);(d0=!e0&&c0.isInteger()&&U[K(3559)]())&&(c0=c0[K(3176)](U))}else{if(L.e>9&&(c0.e>0||c0.e<-1||(c0.e==0?c0.c[0]>1||a0&&c0.c[1]>=24e7:c0.c[0]<8e13||a0&&c0.c[0]<=9999975e7)))return r0=c0.s<0&&B(L)?-0:0,c0.e>-1&&(r0=1/r0),new v0(e0?1/r0:r0);W0&&(r0=n(W0/l+2))}for(a0?(k=new v0(.5),e0&&(L.s=1),b0=B(L)):b0=($=Math[K(905)](+nx(L)))%2,o0=new v0(y0);;){if(b0){if(!(o0=o0.times(c0)).c)break;r0?o0.c[K(3650)]>r0&&(o0.c[K(3650)]=r0):d0&&(o0=o0[K(3176)](U))}if($){if(($=s($/2))===0)break;b0=$%2}else if(G0(L=L[K(3094)](k),L.e+1,1),L.e>14)b0=B(L);else{if(($=+nx(L))==0)break;b0=$%2}c0=c0[K(3094)](c0),r0?c0.c&&c0.c.length>r0&&(c0.c[K(3650)]=r0):d0&&(c0=c0[K(3176)](U))}return d0?o0:(e0&&(o0=y0[K(2930)](o0)),U?o0[K(3176)](U):r0?G0(o0,W0,v,void 0):o0)},x0[P(2406)]=function(L){var U=new v0(this);return L==null?L=v:b(L,0,8),G0(U,U.e+1,L)},x0[P(2039)]=x0.eq=function(L,U){return A(this,new v0(L,U))===0},x0[P(1193)]=function(){return!!this.c},x0[P(3577)]=x0.gt=function(L,U){return A(this,new v0(L,U))>0},x0[P(2068)]=x0.gte=function(L,U){return(U=A(this,new v0(L,U)))===1||U===0},x0.isInteger=function(){return!!this.c&&_(this.e/l)>this.c.length-2},x0[P(1839)]=x0.lt=function(L,U){return A(this,new v0(L,U))<0},x0[P(2552)]=x0[P(944)]=function(L,U){return(U=A(this,new v0(L,U)))===-1||U===0},x0[P(2073)]=function(){return!this.s},x0[P(660)]=function(){return this.s<0},x0.isPositive=function(){return this.s>0},x0.isZero=function(){return!!this.c&&this.c[0]==0},x0[P(4130)]=function(L,U){const K=P;var k,d0,$,r0,a0=this,e0=a0.s;if(U=(L=new v0(L,U)).s,!e0||!U)return new v0(NaN);if(e0!=U)return L.s=-U,a0[K(1855)](L);var b0=a0.e/l,o0=L.e/l,c0=a0.c,S0=L.c;if(!b0||!o0){if(!c0||!S0)return c0?(L.s=-U,L):new v0(S0?a0:NaN);if(!c0[0]||!S0[0])return S0[0]?(L.s=-U,L):new v0(c0[0]?a0:v==3?-0:0)}if(b0=_(b0),o0=_(o0),c0=c0[K(3403)](),e0=b0-o0){for((r0=e0<0)?(e0=-e0,$=c0):(o0=b0,$=S0),$[K(709)](),U=e0;U--;$[K(2583)](0));$.reverse()}else for(d0=(r0=(e0=c0[K(3650)])<(U=S0.length))?e0:U,e0=U=0;U<d0;U++)if(c0[U]!=S0[U]){r0=c0[U]<S0[U];break}if(r0&&($=c0,c0=S0,S0=$,L.s=-L.s),(U=(d0=S0[K(3650)])-(k=c0[K(3650)]))>0)for(;U--;c0[k++]=0);for(U=f-1;d0>e0;){if(c0[--d0]<S0[d0]){for(k=d0;k&&!c0[--k];c0[k]=U);--c0[k],c0[d0]+=f}c0[d0]-=S0[d0]}for(;c0[0]==0;c0[K(1805)](0,1),--o0);return c0[0]?H0(L,c0,o0):(L.s=v==3?-1:1,L.c=[L.e=0],L)},x0.modulo=x0[P(3176)]=function(L,U){const K=P;var k,d0,$=this;return L=new v0(L,U),!$.c||!L.s||L.c&&!L.c[0]?new v0(NaN):!L.c||$.c&&!$.c[0]?new v0($):(xx==9?(d0=L.s,L.s=1,k=V($,L,0,3),L.s=d0,k.s*=d0):k=V($,L,0,xx),(L=$[K(4130)](k.times(L))).c[0]||xx!=1||(L.s=$.s),L)},x0[P(1252)]=x0[P(3094)]=function(L,U){const K=P;var k,d0,$,r0,a0,e0,b0,o0,c0,S0,z0,q0,N0,sx,hx,Y0=this,Z=Y0.c,p0=(L=new v0(L,U)).c;if(!(Z&&p0&&Z[0]&&p0[0]))return!Y0.s||!L.s||Z&&!Z[0]&&!p0||p0&&!p0[0]&&!Z?L.c=L.e=L.s=null:(L.s*=Y0.s,Z&&p0?(L.c=[0],L.e=0):L.c=L.e=null),L;for(d0=_(Y0.e/l)+_(L.e/l),L.s*=Y0.s,(b0=Z[K(3650)])<(S0=p0.length)&&(N0=Z,Z=p0,p0=N0,$=b0,b0=S0,S0=$),$=b0+S0,N0=[];$--;N0[K(2583)](0));for(sx=f,hx=C,$=S0;--$>=0;){for(k=0,z0=p0[$]%hx,q0=p0[$]/hx|0,r0=$+(a0=b0);r0>$;)k=((o0=z0*(o0=Z[--a0]%hx)+(e0=q0*o0+(c0=Z[a0]/hx|0)*z0)%hx*hx+N0[r0]+k)/sx|0)+(e0/hx|0)+q0*c0,N0[r0--]=o0%sx;N0[r0]=k}return k?++d0:N0.splice(0,1),H0(L,N0,d0)},x0.negated=function(){var L=new v0(this);return L.s=-L.s||null,L},x0[P(1855)]=function(L,U){const K=P;var k,d0=this,$=d0.s;if(U=(L=new v0(L,U)).s,!$||!U)return new v0(NaN);if($!=U)return L.s=-U,d0[K(4130)](L);var r0=d0.e/l,a0=L.e/l,e0=d0.c,b0=L.c;if(!r0||!a0){if(!e0||!b0)return new v0($/0);if(!e0[0]||!b0[0])return b0[0]?L:new v0(e0[0]?d0:0*$)}if(r0=_(r0),a0=_(a0),e0=e0[K(3403)](),$=r0-a0){for($>0?(a0=r0,k=b0):($=-$,k=e0),k.reverse();$--;k.push(0));k[K(709)]()}for(($=e0.length)-(U=b0.length)<0&&(k=b0,b0=e0,e0=k,U=$),$=0;U;)$=(e0[--U]=e0[U]+b0[U]+$)/f|0,e0[U]=f===e0[U]?0:e0[U]%f;return $&&(e0=[$][K(2263)](e0),++a0),H0(L,e0,a0)},x0.precision=x0.sd=function(L,U){var K,k,d0,$=this;if(L!=null&&L!==!!L)return b(L,1,p),U==null?U=v:b(U,0,8),G0(new v0($),L,U);if(!(K=$.c))return null;if(k=(d0=K.length-1)*l+1,d0=K[d0]){for(;d0%10==0;d0/=10,k--);for(d0=K[0];d0>=10;d0/=10,k++);}return L&&$.e+1>k&&(k=$.e+1),k},x0[P(468)]=function(L){const U=P;return b(L,-9007199254740991,m),this[U(3094)]("1e"+L)},x0[P(1486)]=x0[P(1495)]=function(){const L=P;var U,K,k,d0,$,r0=this,a0=r0.c,e0=r0.s,b0=r0.e,o0=f0+4,c0=new v0(L(1325));if(e0!==1||!a0||!a0[0])return new v0(!e0||e0<0&&(!a0||a0[0])?NaN:a0?r0:1/0);if((e0=Math[L(1495)](+nx(r0)))==0||e0==1/0?(((K=y(a0))[L(3650)]+b0)%2==0&&(K+="0"),e0=Math[L(1495)](+K),b0=_((b0+1)/2)-(b0<0||b0%2),k=new v0(K=e0==1/0?"1e"+b0:(K=e0.toExponential())[L(3403)](0,K[L(3019)]("e")+1)+b0)):k=new v0(e0+""),k.c[0]){for((e0=(b0=k.e)+o0)<3&&(e0=0);;)if($=k,k=c0[L(3094)]($.plus(V(r0,$,o0,1))),y($.c)[L(3403)](0,e0)===(K=y(k.c)).slice(0,e0)){if(k.e<b0&&--e0,L(2539)!=(K=K[L(3403)](e0-3,e0+1))&&(d0||L(1950)!=K)){+K&&(+K[L(3403)](1)||K[L(1223)](0)!="5")||(G0(k,k.e+f0+2,1),U=!k[L(3094)](k).eq(r0));break}if(!d0&&(G0($,$.e+f0+2,0),$[L(3094)]($).eq(r0))){k=$;break}o0+=4,e0+=4,d0=1}}return G0(k,k.e+f0+1,v,U)},x0[P(3127)]=function(L,U){return L!=null&&(b(L,0,p),L++),ix(this,L,U,1)},x0[P(2497)]=function(L,U){return L!=null&&(b(L,0,p),L=L+this.e+1),ix(this,L,U)},x0[P(1433)]=function(L,U,K){const k=P;var d0,$=this;if(K==null)L!=null&&U&&typeof U=="object"?(K=U,U=null):L&&k(2408)==typeof L?(K=L,L=U=null):K=j0;else if(k(2408)!=typeof K)throw Error(u+k(561)+K);if(d0=$[k(2497)](L,U),$.c){var r0,a0=d0.split("."),e0=+K[k(3353)],b0=+K[k(1297)],o0=K[k(880)]||"",c0=a0[0],S0=a0[1],z0=$.s<0,q0=z0?c0[k(3403)](1):c0,N0=q0.length;if(b0&&(r0=e0,e0=b0,b0=r0,N0-=r0),e0>0&&N0>0){for(r0=N0%e0||e0,c0=q0[k(2310)](0,r0);r0<N0;r0+=e0)c0+=o0+q0.substr(r0,e0);b0>0&&(c0+=o0+q0[k(3403)](r0)),z0&&(c0="-"+c0)}d0=S0?c0+(K[k(2545)]||"")+((b0=+K.fractionGroupSize)?S0.replace(new RegExp("\\d{"+b0+k(1560),"g"),"$&"+(K[k(1357)]||"")):S0):c0}return(K.prefix||"")+d0+(K[k(667)]||"")},x0[P(3097)]=function(L){const U=P;var K,k,d0,$,r0,a0,e0,b0,o0,c0,S0,z0,q0=this,N0=q0.c;if(L!=null&&(!(e0=new v0(L))[U(3559)]()&&(e0.c||e0.s!==1)||e0.lt(y0)))throw Error(u+U(3204)+(e0.isInteger()?U(3472):U(1375))+nx(e0));if(!N0)return new v0(q0);for(K=new v0(y0),o0=k=new v0(y0),d0=b0=new v0(y0),z0=y(N0),r0=K.e=z0[U(3650)]-q0.e-1,K.c[0]=h[(a0=r0%l)<0?l+a0:a0],L=!L||e0[U(4090)](K)>0?r0>0?K:o0:e0,a0=w0,w0=1/0,e0=new v0(z0),b0.c[0]=0;c0=V(e0,K,0,1),($=k[U(1855)](c0.times(d0)))[U(4090)](L)!=1;)k=d0,d0=$,o0=b0[U(1855)](c0[U(3094)]($=o0)),b0=$,K=e0[U(4130)](c0[U(3094)]($=K)),e0=$;return $=V(L[U(4130)](k),d0,0,1),b0=b0[U(1855)]($.times(o0)),k=k.plus($.times(d0)),b0.s=o0.s=q0.s,S0=V(o0,d0,r0*=2,v)[U(4130)](q0).abs().comparedTo(V(b0,k,r0,v)[U(4130)](q0).abs())<1?[o0,d0]:[b0,k],w0=a0,S0},x0[P(2710)]=function(){return+nx(this)},x0.toPrecision=function(L,U){return L!=null&&b(L,1,p),ix(this,L,U,2)},x0[P(2557)]=function(L){const U=P;var K,k=this,d0=k.s,$=k.e;return $===null?d0?(K=U(990),d0<0&&(K="-"+K)):K="NaN":(L==null?K=$<=T0||$>=F0?T(y(k.c),$):M(y(k.c),$,"0"):L===10?K=M(y((k=G0(new v0(k),f0+$+1,v)).c),k.e,"0"):(b(L,2,tx[U(3650)],U(2684)),K=q(M(y(k.c),$,"0"),10,L,d0,!0)),d0<0&&k.c[0]&&(K="-"+K)),K},x0[P(1718)]=x0.toJSON=function(){return nx(this)},x0[P(456)]=!0,r&&(x0[Symbol.toStringTag]=P(2624),x0[Symbol[P(1020)]("nodejs.util.inspect.custom")]=x0.valueOf),I!=null&&v0[P(2590)](I),v0}(),t.default=t[x(2624)]=t,x(1355)==typeof define&&define[x(2015)]?define(function(){return t}):x(1345)!=typeof module&&module[x(3660)]?module.exports=t:(e||(e=x(1345)!=typeof self&&self?self:window),e[x(2624)]=t),t}();function Ei(){}function j2(e){const x=o;this[x(716)]=e,this[x(1389)]=new Cesium[x(2331)],this.passState=new Cesium[x(1842)](e),this[x(3604)][x(2548)]=new Cesium.BoundingRectangle,this[x(4183)]=x(1016),this[x(1655)]=void 0,this[x(3676)]=new Cesium[x(2567)](Cesium.Cartesian3[x(3167)],6378137),this.environmentVisible={isSunVisible:!0,isMoonVisible:!0,isSkyAtmosphereVisible:!0,isSkyBoxVisible:!0,isGlobalVisible:!1,isObjectVisible:!0},this.passState.cullPass=Cesium[x(2798)][x(502)],this.clearCommand=new Cesium.ClearCommand({color:new Cesium[x(1911)](0,0,0,0),stencil:0,depth:1}),this[x(651)]=!1}function r2(e){const x=o;if(e=Cesium[x(820)](e,Cesium[x(820)][x(1897)]),this[x(2753)]=Cesium[x(820)](e[x(650)],Cesium[x(2024)][x(2760)]),this._numberOfLevelZeroTilesX=Cesium.defaultValue(e.numberOfLevelZeroTilesX,1),this._numberOfLevelZeroTilesY=Cesium[x(820)](e[x(1240)],1),this[x(2509)]=new Cesium[x(3014)](this._ellipsoid),Cesium.defined(e[x(1463)])&&Cesium.defined(e[x(3823)]))this[x(3870)]=e[x(1463)],this._rectangleNortheastInMeters=e.rectangleNortheastInMeters;else{let r=this[x(2753)][x(1749)]*Math.PI;this[x(3870)]=new Cesium[x(2351)](-r,-r),this[x(1566)]=new Cesium[x(2351)](r,r)}let t=this[x(2509)][x(1055)](this[x(3870)]),a=this._projection[x(1055)](this[x(1566)]);this[x(1429)]=new Cesium[x(2879)](t.longitude,t.latitude,a.longitude,a[x(1738)]),this._customDPI=e[x(2019)],this._scaleDenominators=e[x(513)],this[x(625)]=Cesium[x(820)](e.tileWidth,256),this[x(1046)]=Cesium[x(820)](e[x(3546)],256)}function Pi(){const e=o;this.head=void 0,this[e(1548)]=void 0,this[e(2081)]=0}function bc(e,x){const t=o;var a=x[t(3796)],r=x.next;x===e[t(1259)]?e.head=r:a[t(1998)]=r,x===e[t(1548)]?e[t(1548)]=a:r.previous=a,x[t(3796)]=void 0,x[t(1998)]=void 0,--e[t(2081)]}function Na(e,x,t,a){const r=o;this.quadKey=x,this[r(1426)]=t,this[r(672)]=e,this[r(3316)]=a}Ei[o(3096)].begin=Cesium[o(1785)].throwInstantiationError,Ei[o(3096)].end=Cesium[o(1785)].throwInstantiationError,j2[o(3096)]=Object[o(1693)](Ei[o(3096)]),j2[o(3096)][o(4152)]=Ei,j2.prototype[o(4050)]=function(e){const x=o;return this[x(1389)].update(e[x(716)],e.view[x(2548)],e[x(3116)]),this[x(3604)][x(3265)]=this[x(1389)].getFramebuffer(),Cesium[x(1691)][x(3552)](e[x(2652)][x(2548)],this[x(3604)][x(2548)]),this[x(3702)][x(1112)](e[x(716)],this.passState),e[x(3907)][x(3025)](this[x(3676)]),this[x(3604)]},j2.prototype[o(1441)]=function(e){const x=o;e[x(3907)][x(814)]()},j2[o(3096)][o(3777)]=function(){const e=o;return this[e(1389)]=this.sceneFramebuffer[e(3701)](),this[e(651)]=!1,!1},j2[o(3096)].destroy=function(){const e=o;return Cesium[e(1136)](this)},Object[o(2040)](r2[o(3096)],{ellipsoid:{get:function(){return this[o(2753)]}},rectangle:{get:function(){return this[o(1429)]}},projection:{get:function(){return this._projection}}}),r2[o(3096)][o(3129)]=function(e){return this[o(3421)]<<e},r2.prototype[o(3007)]=function(e){return this._numberOfLevelZeroTilesY<<e},r2[o(3096)].rectangleToNativeRectangle=function(e,x){const t=o;let a=this[t(2509)],r=a[t(3901)](Cesium.Rectangle[t(2281)](e)),n=a[t(3901)](Cesium.Rectangle.northeast(e));return Cesium[t(692)](x)?(x[t(2599)]=r.x,x[t(852)]=r.y,x[t(1090)]=n.x,x[t(1270)]=n.y,x):new Cesium[t(2879)](r.x,r.y,n.x,n.y)},r2[o(3096)][o(2176)]=function(e,x,t,a){const r=o;if(Cesium[r(692)](this[r(696)])&&Cesium[r(692)](this[r(2844)])){let C=this[r(4113)](t),p=this[r(3870)].x+e*this[r(625)]*C.x,_=this[r(3870)].x+(e+1)*this._tileWidth*C.x,y=this[r(1566)].y-x*this[r(1046)]*C.y,A=this[r(1566)].y-(x+1)*this[r(1046)]*C.y;return Cesium.defined(a)?(a[r(2599)]=p,a[r(852)]=A,a[r(1090)]=_,a.north=y,a):new Cesium[r(2879)](p,A,_,y)}let n=this[r(3129)](t),s=this[r(3007)](t),u=(this[r(1566)].x-this[r(3870)].x)/n,c=this[r(3870)].x+e*u,f=this[r(3870)].x+(e+1)*u,l=(this[r(1566)].y-this[r(3870)].y)/s,m=this[r(1566)].y-x*l,h=this[r(1566)].y-(x+1)*l;return Cesium[r(692)](a)?(a.west=c,a[r(852)]=h,a[r(1090)]=f,a[r(1270)]=m,a):new Cesium[r(2879)](c,h,f,m)},r2[o(3096)][o(1568)]=function(e,x,t,a){const r=o;let n=this[r(2176)](e,x,t,a),s=this[r(2509)],u=s[r(1055)](new Cesium[r(2351)](n[r(2599)],n[r(852)])),c=s.unproject(new Cesium[r(2351)](n[r(1090)],n[r(1270)]));return n[r(2599)]=u.longitude,n[r(852)]=u[r(1738)],n[r(1090)]=c[r(1454)],n.north=c[r(1738)],n},r2[o(3096)].positionToTileXY=function(e,x,t){const a=o;let r=this[a(1429)];if(!Cesium[a(2879)][a(2715)](r,e))return;let n=this[a(3129)](x),s=this.getNumberOfYTilesAtLevel(x),u=(this[a(1566)].x-this._rectangleSouthwestInMeters.x)/n,c=(this[a(1566)].y-this[a(3870)].y)/s;if(Cesium[a(692)](this._customDPI)&&Cesium[a(692)](this[a(2844)])){let h=this[a(4113)](x);u=this[a(625)]*h.x,c=this[a(1046)]*h.y}let f=this[a(2509)][a(3901)](e),l=(f.x-this[a(3870)].x)/u|0;l>=n&&(l=n-1);let m=(this._rectangleNortheastInMeters.y-f.y)/c|0;return m>=s&&(m=s-1),Cesium[a(692)](t)?(t.x=l,t.y=m,t):new Cesium[a(2351)](l,m)},r2.prototype[o(4113)]=function(e){const x=o;let t=.0254*this._scaleDenominators[e]/this[x(696)].x,a=.0254*this._scaleDenominators[e]/this._customDPI.y;return new Cesium[x(2351)](t,a)},Pi.prototype[o(728)]=function(e){const x=o;for(var t=this.tail;this[x(2081)]>e&&Cesium[x(692)](t);){var a=t[x(3796)];t.free(),bc(this,t),t=a}},Pi[o(3096)].touch=function(e){const x=o;var t=this[x(1259)];if(t!==e){if(++this[x(2081)],!Cesium[x(692)](t))return e.previous=void 0,e[x(1998)]=void 0,this[x(1259)]=e,void(this.tail=e);(Cesium.defined(e[x(3796)])||Cesium[x(692)](e[x(1998)]))&&bc(this,e),e[x(3796)]=void 0,e[x(1998)]=t,t[x(3796)]=e,this[x(1259)]=e}},Na[o(3096)][o(3802)]=function(){const e=o;delete this[e(672)].blockCache[this[e(4068)]]};const Ye=Cesium[o(692)],jt=Cesium[o(1785)];function Ym(e,x){const t=o;let a="http://www.supermap.com/SuperMapCache/sci3d",r=x[t(2061)];var n=Qm(J.queryFirstNode(r,"StoreType",a),t(1022));t(1232)==typeof n&&(e[t(3781)]=!0,e[t(1799)]=n);let s=J[t(3250)](r,"Bounds",a),u=J[t(1980)](s,t(2467),a),c=J.queryNumericValue(s,t(2477),a),f=J.queryNumericValue(s,t(2970),a),l=J[t(1980)](s,t(790),a),m=J[t(987)](r,t(3415),a),h=J[t(1980)](r,t(855),a),C=J.queryNumericValue(r,t(1451),a),p=J[t(3250)](r,"Levels",a),_=J[t(3809)](p,t(510),a),y=[];for(let M=0,w=_[t(3650)];M<w;M++)y[t(2583)](parseInt(_[M].textContent,10));e[t(4044)]=Cesium.defaultValue(m,t(968)),e[t(2409)]=Cesium[t(820)](m,"png"),e[t(625)]=Cesium.defaultValue(h,256),e._tileHeight=Cesium[t(820)](C,256);let A=y.length;e[t(552)]=Cesium[t(820)](y[0],0),e[t(2901)]=Cesium[t(820)](e[t(2901)],y[A-1]),e[t(2840)]||(e[t(2840)]=new Cesium.GeographicTilingScheme);let b=e[t(2840)];!e[t(1429)]&&u&&c&&f&&l&&(e[t(1429)]=new Cesium[t(2879)](Cesium.Math[t(3629)](u),Cesium[t(2746)][t(3629)](l),Cesium[t(2746)].toRadians(c),Cesium[t(2746)][t(3629)](f))),e._rectangle[t(2599)]<b[t(1195)][t(2599)]&&(e[t(1429)].west=b.rectangle[t(2599)]),e[t(1429)][t(1090)]>b[t(1195)][t(1090)]&&(e[t(1429)][t(1090)]=b[t(1195)][t(1090)]),e[t(1429)].south<b.rectangle[t(852)]&&(e[t(1429)].south=b[t(1195)][t(852)]),e._rectangle[t(1270)]>b[t(1195)].north&&(e[t(1429)].north=b.rectangle.north);let B=b[t(2345)](Cesium.Rectangle[t(2281)](e[t(1429)]),e[t(552)]),T=b[t(2345)](Cesium[t(2879)][t(1684)](e[t(1429)]),e._minimumLevel);(Math[t(905)](T.x-B.x)+1)*(Math[t(905)](T.y-B.y)+1)>4&&(e._minimumLevel=0),e[t(1308)]=e[t(3854)]+t(1171),Ye(P0[t(3260)])&&(Ye(P0[t(3260)][t(1628)][e._urlTemplate])?e._urlTemplate=P0.addTokenWithKey(e[t(1308)],e[t(1308)]):e[t(1308)]=P0.addToken(e._urlTemplate)),e._ready=!0,e._readyPromise[t(1599)](!0)}function Jm(e,x){const t=o;let a=x[t(3478)].coordUnit,r=x[t(3543)],n=x[t(2797)],s=n[t(3650)]===0;if(e[t(1984)]=a,a==="DEGREE")return e._tilingScheme=new Cesium[t(3338)],r[t(1344)]=Cesium[t(2746)][t(1263)](r[t(1344)],-180,180),r.bottom=Cesium[t(2746)][t(1263)](r[t(542)],-90,90),r.right=Cesium[t(2746)][t(1263)](r[t(614)],-180,180),r[t(3981)]=Cesium[t(2746)][t(1263)](r[t(3981)],-90,90),Cesium.Math[t(2816)](r[t(1344)],r.right,Cesium.Math[t(1734)])&&(r[t(614)]+=Cesium.Math[t(4173)]),Cesium[t(2746)][t(2816)](r[t(3981)],r[t(542)],Cesium[t(2746)][t(1734)])&&(r[t(3981)]+=Cesium[t(2746)][t(4173)]),e._rectangle=Cesium[t(2879)][t(2136)](r[t(1344)],r[t(542)],r[t(614)],r[t(3981)]),e._urlTemplate=e._url+t(3871)+e._tileFormat+t(2456),e[t(2901)]=Cesium.defaultValue(e[t(2901)],e._scales[t(3650)]),e[t(1484)]=!0,Ye(P0[t(3260)])&&(Ye(P0[t(3260)]._keymap[e[t(1308)]])?e[t(1308)]=P0[t(1386)](e[t(1308)],e[t(1308)]):e[t(1308)]=P0[t(955)](e[t(1308)])),void e[t(1506)][t(1599)](!0);let u=new Cesium[t(516)](r[t(1344)],r[t(542)],0),c=new Cesium[t(516)](r[t(614)],r.top,0);if(!Cesium[t(692)](e._tilingScheme)){let m,h,C,p,_=Cesium.defined(x[t(3478)])&&Cesium[t(692)](x.prjCoordSys[t(3453)])&&(t(676)===x[t(3478)][t(3453)].type||t(1161)===x[t(3478)][t(3453)][t(729)]),y=_?new Cesium[t(989)]:new Cesium[t(3014)],A=y[t(1055)](u),b=y[t(1055)](c),B=new Cesium.Rectangle(A[t(1454)],A.latitude,b[t(1454)],b.latitude);if(!s){C=[],p=new Cesium[t(2351)](x[t(1206)],x[t(1206)]);for(let w=0;w<n.length;w++)C.push(1/n[w]);let T=n[0],M=.0254/(x[t(1206)]*T);m=Math[t(2892)]((c.x-u.x)/M/x[t(2366)][t(2375)]),h=Math[t(2892)]((c.y-u.y)/M/x[t(2366)][t(2388)]),e[t(1269)]=n}e._tilingScheme=_?new Cesium[t(754)]({numberOfLevelZeroTilesX:m,numberOfLevelZeroTilesY:h,rectangleSouthwestInMeters:s?void 0:u,rectangleNortheastInMeters:s?void 0:c}):new r2({projection:y,rectangleSouthwestInMeters:u,rectangleNortheastInMeters:c,numberOfLevelZeroTilesX:m,numberOfLevelZeroTilesY:h,customDPI:p,scaleDenominators:C}),e._rectangle=B}let f=s?-20037508342789248e-9:r.left,l=s?20037508342789095e-9:r.top;e._urlTemplate=e[t(3854)]+t(3871)+e[t(2409)]+t(2164)+f+',"y":'+l+"}",e._maximumLevel=Cesium[t(820)](e[t(2901)],e[t(1269)].length),e[t(1484)]=!0,Ye(P0[t(3260)])&&(Ye(P0[t(3260)]._keymap[e[t(1308)]])?e[t(1308)]=P0.addTokenWithKey(e[t(1308)],e[t(1308)]):e[t(1308)]=P0.addToken(e[t(1308)])),e[t(1506)][t(1599)](!0)}function Zm(e,x,t,a,r){const n=o;var s;if(e[n(1843)]){var u,c=e[n(4151)]===""?"":n(2763)+e[n(4151)];n(1590)===e[n(1984)]?e[n(2848)]===1?s=e[n(1308)][n(960)](n(3960),"")[n(960)](n(3593),c)[n(960)]("tileImage",n(3081)).replace(n(2676),""):(u=e[n(1269)][a+e[n(2415)]]||pc[a],s=e[n(1308)][n(960)](n(1317),x)[n(960)](n(2276),t).replace(n(3431),u[n(2557)]()).replace("{tileversion}",c)):n(1959)===e[n(1984)]&&(e[n(2848)]===1?s=e[n(1308)].replace(n(3960),"").replace("{tileversion}",c)[n(960)](n(2544),"tileImages")[n(960)](n(2676),""):(u=e._scales[a],s=e[n(1308)][n(960)](n(1317),x)[n(960)](n(2276),t).replace("{scale}",u[n(2557)]()).replace("{tileversion}",c)))}else s=e[n(1308)][n(960)](n(1317),x).replace("{y}",t).replace(n(3840),a)[n(960)](n(2978),e._fileExtension);if(Cesium[n(692)](e._subdomains)){var f=e[n(3190)],l=f[(x+t+a)%f[n(3650)]];s=s.replace(domainReg,function(m,h){return n(3574)===h?l:m})}return s}function Qm(e,x){const t=o;if(Cesium[t(692)](e)){var a=e[t(1292)](x);if(a!==null){var r=parseFloat(a);return isNaN(r)?void 0:r}}}function $m(e,x,t){const a=o;for(var r="",n=t;n>=0;--n){var s=1<<n,u=0;Cesium[a(3804)](x,s)?Cesium.isBitSet(e,s)&&(u|=1):(u|=2,Cesium[a(3804)](e,s)||(u|=1)),r+=u}return r}function xh(e,x,t,a){const r=o;var n=e[r(1799)],s=Math[r(1149)](2,n),u=Math.floor(x/s),c=x%s,f=Math[r(3720)](t/s),l=t%s;return{x:u,y:f,url:Zm(e,u,f,a),col:c,row:l,level:a,blockSize:s}}const pc=[1690163571602655e-24,33803271432053056e-25,6760654286410611e-24,13521308572821242e-24,27042617145642484e-24,5408523429128511e-23,10817046858256998e-23,21634093716513974e-23,43268187433028044e-23,8653637486605571e-22,17307274973211203e-22,34614549946422405e-22,69229099892844565e-22,13845819978568952e-21,27691639957137904e-21,553832799142758e-19,.0001107665598285516,.0002215331196571032,.0004430662393142064,.0008861324786284128,.001772264957256826,.003544529914513652];function qt(e){const x=o;if(!(e=Cesium[x(820)](e,{}))[x(2547)])throw new Cesium[x(1785)]("options.url is required.");if(this[x(3854)]=Cesium[x(1810)](e[x(2547)]),this[x(1907)]=Cesium[x(1702)].createIfNeeded(this[x(3854)]),this[x(3493)]=e[x(2547)][x(3019)](x(2023))>-1,this[x(3149)]=e[x(2547)][x(3019)](x(1608))>-1,!this[x(3493)]&&!this._isSci3D)throw new Cesium[x(1785)](x(2889));this[x(1308)]=void 0,this[x(2129)]=new Cesium[x(3572)],this[x(4044)]=x(968),this[x(625)]=256,this[x(1046)]=256,this[x(2409)]=Cesium[x(820)](e.tileFormat,x(968)),this[x(552)]=Cesium[x(820)](e[x(3385)],0),this[x(2901)]=e[x(2924)],this[x(1429)]=void 0,this._tilingScheme=e.tilingScheme,this[x(1984)]=void 0,this[x(1269)]=pc,this[x(2839)]=e.tileDiscardPolicy;let t=Cesium.defaultValue(e[x(3613)],"");x(4039)==typeof t&&(t=new Cesium.Credit(t)),this[x(3551)]=t,this[x(1484)]=!1,this[x(1506)]=a2(),this[x(3781)]=!1,this[x(458)]={},this[x(2462)]=new Pi,this[x(1189)]=100,this._blockScale=0,this[x(3010)]=e[x(697)];let a,r,n=this;this._isSci3D?(a=this[x(1907)].getDerivedResource({url:x(3801)}),Ye(P0.CREDENTIAL)&&(Ye(P0[x(3260)][x(1628)][a[x(2547)]])?a[x(2547)]=P0.addTokenWithKey(a[x(2547)],a.url):a[x(2547)]=P0[x(955)](a[x(2547)])),this._customRequestHeaders&&(a[x(2103)]=Cesium[x(840)](a[x(2103)],this[x(3010)])),r=a[x(1312)]()):(a=Cesium[x(1702)][x(1554)](e[x(2547)]+".json"),Ye(P0.CREDENTIAL)&&(Ye(P0[x(3260)]._keymap[a[x(2547)]])?a[x(2547)]=P0[x(1386)](a[x(2547)],a[x(2547)]):a.url=P0[x(955)](a[x(2547)])),this[x(3010)]&&(a[x(2103)]=Cesium[x(840)](a[x(2103)],this[x(3010)])),r=a[x(1542)]()),r[x(4167)](function(s){const u=x;n._isSci3D?Ym(n,s):n[u(3493)]&&Jm(n,s)},function(s){const u=x;let c=u(2003)+n._url+".";n[u(1506)][u(3454)](new Cesium[u(1295)](c))})}Object[o(2040)](qt[o(3096)],{url:{get:function(){return this[o(3854)]}},tileWidth:{get:function(){if(!this[o(1484)])throw new jt("tileWidth must not be called before the imagery provider is ready.");return this._tileWidth}},tileHeight:{get:function(){const e=o;if(!this[e(1484)])throw new jt(e(1584));return this[e(1046)]}},tileFormat:{get:function(){return this._tileFormat}},maximumLevel:{get:function(){if(!this[o(1484)])throw new jt("maximumLevel must not be called before the imagery provider is ready.");return this.resolution===1?this._maximumLevel:this._maximumLevel-1}},minimumLevel:{get:function(){const e=o;if(!this[e(1484)])throw new jt(e(1210));return this[e(552)]}},tilingScheme:{get:function(){const e=o;if(!this[e(1484)])throw new jt("tilingScheme must not be called before the imagery provider is ready.");return this[e(2840)]}},rectangle:{get:function(){const e=o;if(!this[e(1484)])throw new jt(e(892));return this[e(1429)]}},errorEvent:{get:function(){return this[o(2129)]}},ready:{get:function(){return this[o(1484)]}},credit:{get:function(){return this._credit}},hasAlphaChannel:{get:function(){return!0}},readyPromise:{get:function(){const e=o;return this._readyPromise[e(3316)]}},tileDiscardPolicy:{get:function(){return this._tileDiscardPolicy}},isBlock:{get:function(){return this._isBlock}},blockCache:{get:function(){return this[o(458)]}},blockCacheQueue:{get:function(){return this[o(2462)]}},blockCacheSize:{get:function(){return this[o(1189)]}},customRequestHeaders:{get:function(){return this._customRequestHeaders},set:function(e){const x=o;this[x(3010)]=e}}}),qt[o(3096)][o(1651)]=function(e,x,t){};var eh=/\.dxtz/i;function vc(e,x){const t=o;let a=Cesium[t(1702)][t(1554)](x);return Ye(e[t(3010)])&&(a[t(2103)]=Cesium[t(840)](a[t(2103)],e[t(3010)])),e[t(3424)]?a[t(3941)]({preferBlob:!0,preferImageBitmap:!0,flipY:!0}):e.isBlock?(eh.test(a[t(2547)])&&(e[t(2353)]=!0),a[t(1823)]()):a.fetchImage()}qt[o(3096)][o(1418)]=function(e,x,t,a){const r=o;if(!this[r(1484)])throw new Cesium[r(1785)]("requestImage must not be called before the imagery provider is ready.");let n;if(this[r(3781)]){n=this[r(1907)][r(2773)]({url:this._urlTemplate,request:a,templateValues:{}}),a[r(729)]=5;var s=xh(this,e,x,t);n.url=s[r(2547)],a[r(1926)]=s,a.quadKey=$m(s.x,s.y,s[r(2337)]),a[r(1329)]=this._url;var u=this[r(2001)][a[r(4068)]];if(Cesium[r(692)](u)&&Cesium[r(692)](u[r(1426)]))return this[r(2303)][r(1605)](u),u[r(1426)]}else if(this[r(3149)])n=this._resource[r(2773)]({url:this[r(1308)],request:a,templateValues:{x:e,y:x,level:t,fileExtension:this[r(2409)]}});else{let c=this[r(1984)]==="DEGREE"?this._scales[t+1]:this[r(1269)][t];n=this[r(1907)][r(2773)]({url:this[r(1308)],request:a,templateValues:{x:e,y:x,scale:c},queryParameters:{transparent:!0,cacheEnabled:!0,_cache:!0,width:256,height:256,redirect:!1,overlapDisplayed:!1}})}return function(c,f){const l=r;if(c[l(3781)]){var m=c[l(2001)][a[l(4068)]];if(Cesium[l(692)](m))return m.promise;var h=vc(c,f);return Cesium.defined(h)?(m=new Na(c,a[l(4068)]),c[l(2001)][a[l(4068)]]=m,m.promise=h,m[l(3316)]):void 0}return vc(c,f)}(this,n)},qt[o(3096)][o(3113)]=function(){};const dt=Cesium[o(692)];function th(e){const x=o;this[x(680)]=e.resource,this[x(1544)]=e[x(1544)],this.isHeightmap=e[x(3725)],this[x(1570)]=e[x(1570)],this.availability=e[x(3368)],this[x(2299)]=e[x(2299)],this.hasWaterMask=e[x(2097)],this[x(3218)]=e[x(3218)],this.availabilityLevels=e[x(3146)],this[x(1215)]=e[x(1215)],this[x(3808)]=e[x(3808)],this[x(1215)]=e[x(1215)],this.availabilityPromiseCache={}}let Cr={OCT_VERTEX_NORMALS:1,WATER_MASK:2,METADATA:4};function mt(e){const x=o;if(!Cesium[x(692)](e)||!Cesium.defined(e[x(2547)]))throw new Cesium[x(1785)](x(1815));this[x(3854)]=Cesium[x(1810)](e[x(2547)]),this._isSct=Cesium[x(820)](e[x(2150)],!0),this._heightmapWidth=65,this[x(1598)]=void 0,this[x(1782)]=!1,this[x(1478)]=!1,this[x(2753)]=e[x(650)],this[x(3661)]=Cesium[x(820)](e[x(3340)],!1),this[x(1627)]=Cesium[x(820)](e[x(3760)],!1),this._requestMetadata=Cesium[x(820)](e[x(791)],!0),this[x(2129)]=new Cesium[x(3572)];let t=e[x(3613)];x(4039)==typeof t&&(t=new Cesium[x(3290)](t)),this._credit=t,this[x(2461)]=x(3302),this[x(3957)]=void 0,this._ready=!1,this[x(1506)]=a2(),this[x(3902)]=void 0;let a,r=this,n=this._layers=[],s=[];function u(f){const l=x;let m=f[l(2061)];r[l(2840)]=new Cesium[l(3338)]({numberOfLevelZeroTilesX:2,numberOfLevelZeroTilesY:1,ellipsoid:r[l(2753)]}),r[l(3121)]=Cesium.TerrainProvider.getEstimatedLevelZeroGeometricErrorForAHeightmap(r[l(2840)][l(650)],r._heightmapWidth,r[l(2840)][l(3129)](0));var h=J[l(3250)](m,l(1541),void 0);r[l(1799)]=J[l(750)](h,"BlockScale",void 0),Cesium[l(692)](r._blockScale)&&r[l(1799)]>0&&(r[l(3781)]=!0);var C=J[l(987)](m,l(3415),void 0);C=C.toLowerCase(),r[l(3533)]=l(4156)===C;let p=J[l(3250)](m,l(455),void 0),_=J[l(1980)](p,l(2467),void 0),y=J[l(1980)](p,l(2477),void 0),A=J.queryNumericValue(p,l(790),void 0),b=J[l(1980)](p,l(2970),void 0);Cesium[l(692)](_)&&Cesium[l(692)](y)&&Cesium.defined(A)&&Cesium[l(692)](b)&&(r[l(1429)]=Cesium.Rectangle[l(2136)](_,A,y,b));let B=J[l(3250)](m,l(1765),void 0),T=J[l(1271)](B,"Level",void 0),M=[];for(let q=0,X=T.length;q<X;q++){let H=parseInt(T[q].textContent);M.push(H)}let w=M[0],I=M[M[l(3650)]-1];r._levels=M;let P=J[l(3250)](m,l(622),void 0);if(P){let q=J[l(1271)](P,l(1812),void 0),X=w>0?M[l(3650)]+1:M[l(3650)],H=new Array(X);for(let u0=0;u0<w;u0++)H[u0]=[];for(let u0=0,n0=q[l(3650)];u0<n0;u0++){let N=q[u0],Y=[];H[J[l(750)](N,l(2337),void 0)]=Y;let W=J[l(1271)](N,"TileBounds",void 0);for(let x0=0,y0=W[l(3650)];x0<y0;x0++){let f0=W[x0],v=J[l(1980)](f0,"StartCol",void 0),T0=J[l(1980)](f0,"StartRow",void 0),F0=J[l(1980)](f0,l(1421),void 0),O0=J[l(1980)](f0,l(1861),void 0);Y[l(2583)]({startX:v,startY:T0,endX:F0,endY:O0})}}H[0]=[{startX:0,startY:0,endX:1,endY:1}];let z=new Cesium[l(3184)](r[l(2840)],I);for(let u0=0;u0<H[l(3650)];++u0){let n0=H[u0],N=r[l(2840)][l(3007)](u0);if(Cesium[l(692)](s[u0])||(s[u0]=[]),Cesium[l(692)](n0))for(let Y=0;Y<n0[l(3650)];++Y){let W=n0[Y],x0=N-W.endY-1,y0=N-W.startY-1;s[u0][l(2583)]([W[l(3199)],x0,W[l(1767)],y0]),z[l(3042)](u0,W[l(3199)],x0,W[l(1767)],y0)}}r[l(3957)]=z}n.push(new th({resource:a,version:l(2236),isHeightmap:!1,tileUrlTemplates:l(831),availability:void 0,hasVertexNormals:!1,hasWaterMask:!1,hasMetadata:!1,availabilityLevels:0,availabilityTilesLoaded:!1,littleEndianExtensionSize:!0}));let V=s[l(3650)];if(V>0){let q=r[l(3957)]=new Cesium.TileAvailability(r[l(2840)],0);for(let X=0;X<V;++X){let H=s[X];for(let z=0;z<H[l(3650)];++z){let u0=H[z];q[l(3042)](X,u0[0],u0[1],u0[2],u0[3])}}}r[l(1484)]=!0,r[l(1506)][l(1599)](!0)}function c(f){const l=x;Cesium[l(692)](f)&&f[l(3279)]===404&&u({tilejson:l(486),format:"quantized-mesh-1.0",version:l(2236),scheme:l(3302),tiles:[l(831)]})}this._isBlock=!1,this[x(458)]={},this[x(2462)]=new Pi,this[x(1189)]=100,this[x(1799)]=0,this[x(3533)]=!1,this[x(3010)]=e.customRequestHeaders,Promise[x(1599)](e[x(2547)]).then(f=>{const l=x;a=Cesium[l(1702)][l(1554)](f),a[l(1810)]();let m=a[l(2773)]({url:l(3801)});dt(P0[l(3260)])&&(dt(P0.CREDENTIAL[l(1628)][m[l(2547)]])?m.url=P0.addTokenWithKey(m[l(2547)],m[l(2547)]):m[l(2547)]=P0[l(955)](m[l(2547)])),this[l(3010)]&&(m[l(2103)]=Cesium[l(840)](m[l(2103)],this[l(3010)])),m[l(1312)]()[l(4167)](u,c)},f=>{reject(f)})}function br(e,x,t,a,r,n){const s=o;let u=n[s(3808)],c=0,f=3*Float64Array[s(3955)],l=4*Float64Array[s(3955)],m=3*Uint16Array[s(3955)],h=Uint16Array[s(3955)],C=3*h,p=new DataView(x),_=new Cesium[s(516)](p.getFloat64(c,!0),p[s(1623)](c+8,!0),p[s(1623)](c+16,!0));c+=f;let y=p[s(867)](c,!0);c+=Float32Array[s(3955)];let A=p[s(867)](c,!0);c+=Float32Array[s(3955)];let b=new Cesium[s(1475)](new Cesium.Cartesian3(p.getFloat64(c,!0),p[s(1623)](c+8,!0),p[s(1623)](c+16,!0)),p[s(1623)](c+f,!0));c+=l;let B=new Cesium.Cartesian3(p[s(1623)](c,!0),p[s(1623)](c+8,!0),p[s(1623)](c+16,!0));c+=f;let T=p.getUint32(c,!0);c+=Uint32Array[s(3955)];let M=new Uint16Array(x,c,3*T);c+=T*m,T>65536&&(h=Uint32Array[s(3955)],C=3*h);let w=M[s(1238)](0,T),I=M.subarray(T,2*T),P=M.subarray(2*T,3*T);Cesium[s(2470)].zigZagDeltaDecode(w,I,P),c%h!=0&&(c+=h-c%h);let V=p[s(3757)](c,!0);c+=Uint32Array.BYTES_PER_ELEMENT;let q=Cesium[s(1370)][s(2426)](T,x,c,3*V);c+=V*C;let X=0,H=q[s(3650)];for(let w0=0;w0<H;++w0){let U0=q[w0];q[w0]=X-U0,U0===0&&++X}let z=p[s(3757)](c,!0);c+=Uint32Array[s(3955)];let u0=Cesium[s(1370)][s(2426)](T,x,c,z);c+=z*h;let n0=p.getUint32(c,!0);c+=Uint32Array[s(3955)];let N=Cesium.IndexDatatype[s(2426)](T,x,c,n0);c+=n0*h;let Y=p[s(3757)](c,!0);c+=Uint32Array[s(3955)];let W=Cesium[s(1370)][s(2426)](T,x,c,Y);c+=Y*h;let x0=p[s(3757)](c,!0);c+=Uint32Array[s(3955)];let y0,f0,v=Cesium.IndexDatatype[s(2426)](T,x,c,x0);for(c+=x0*h;c<p[s(3818)];){let w0=p[s(3341)](c,!0);c+=Uint8Array[s(3955)];let U0=p.getUint32(c,u);if(c+=Uint32Array[s(3955)],w0===Cr[s(1935)]&&e[s(3661)])y0=new Uint8Array(x,c,2*T);else if(w0===Cr.WATER_MASK&&e[s(1627)])f0=new Uint8Array(x,c,U0);else if(w0===Cr[s(2808)]&&e._requestMetadata&&!e[s(3498)]){let xx=p[s(3757)](c,!0);if(xx>0){let W0=Cesium.getStringFromTypedArray(new Uint8Array(x),c+Uint32Array[s(3955)],xx),j0=JSON[s(2010)](W0)[s(1027)];if(Cesium[s(692)](j0))for(let tx=0;tx<j0[s(3650)];++tx){let v0=t+tx+1,ix=j0[tx],ax=e[s(2840)][s(3007)](v0);for(let H0=0;H0<ix[s(3650)];++H0){let G0=ix[H0],nx=ax-G0[s(1517)]-1,L=ax-G0[s(2525)]-1;e[s(3368)][s(3042)](v0,G0[s(3199)],nx,G0[s(1767)],L),n[s(3368)][s(3042)](v0,G0.startX,nx,G0[s(1767)],L)}}}n.availabilityTilesLoaded[s(3042)](t,a,r,a,r)}c+=U0}let T0=5*e[s(1788)](t),F0=e[s(2840)].tileXYToRectangle(a,r,t),O0=Cesium.OrientedBoundingBox[s(2199)](F0,y,A,e[s(2840)][s(650)]);return new Cesium[s(3362)]({center:_,minimumHeight:y,maximumHeight:A,boundingSphere:b,orientedBoundingBox:O0,horizonOcclusionPoint:B,quantizedVertices:M,encodedNormals:y0,indices:q,westIndices:u0,southIndices:N,eastIndices:W,northIndices:v,westSkirtHeight:T0,southSkirtHeight:T0,eastSkirtHeight:T0,northSkirtHeight:T0,childTileMask:15,waterMask:f0,credits:e[s(3902)]})}function ih(e,x,t){const a=o;for(var r="",n=t;n>=0;--n){var s=1<<n,u=0;Cesium[a(3804)](x,s)?Cesium[a(3804)](e,s)&&(u|=1):(u|=2,Cesium[a(3804)](e,s)||(u|=1)),r+=u}return r}function ah(e,x,t,a){const r=o;var n=Math.min(e[r(1799)],a),s=Math[r(1149)](2,n),u=x%s;return{x:Math.floor(x/s),y:Math[r(3720)](t/s),col:u,row:t%s,level:a,blockSize:s}}function Ac(e,x){const t=o;var a=new DataView(e),r=0;a.getUint32(r,!0),r+=4;var n=a[t(3757)](r,!0);r+=4;for(var s=x[t(1041)],u=x[t(2378)]*x[t(618)]+s,c=0,f=0,l=0;l<n;l++){if(l<u)c+=a.getUint32(r,!0);else if(l===u){f=a[t(3757)](r,!0),r+=4;break}r+=4}if(r=8+4*n,f!==0)return r+=c,new Uint8Array(e)[t(3403)](r,r+f)[t(4056)]}function nh(e,x,t,a,r,n,s,u){const c=o;var f=u.x,l=u.y;return e[c(2773)]({url:x,templateValues:{version:t[c(1544)],z:a,x:f,y:l},headers:r,request:n})[c(1823)]()}function rh(e,x,t,a,r,n,s,u,c){const f=o;function l(y){const A=C0;var b;if(Cesium[A(692)](y)){var B=x[A(2001)][s[A(4068)]];return Cesium[A(692)](B[A(1426)])||(B[A(1426)]=y),x[A(2303)].touch(B),x.blockCacheQueue[A(728)](x.blockCacheSize),b=Ac(y,s.blockInfo),Cesium[A(692)](b)?(b=N2[A(2653)](new Uint8Array(b)).buffer,br(x,b,r,t,a,n)):Promise[A(3454)]()}}var m,h=n[f(680)];s[f(729)]=5,s.providerName=x[f(3807)],m=ah(x,t,u,r),s[f(4068)]=ih(m.x,m.y,m[f(2337)]),s[f(1926)]=m;var C=x[f(2001)][s[f(4068)]];if(Cesium.defined(C)&&Cesium[f(692)](C[f(1426)])){x[f(2303)].touch(C);var p=Ac(C.data,m);return Cesium.defined(p)?(p=N2.inflate(new Uint8Array(p))[f(4056)],br(x,p,r,t,a,n)):Promise[f(3454)]()}if(C=x[f(2001)][s.quadKey||r+""+t+a],Cesium[f(692)](C))return C[f(3316)][f(4167)](l);var _=nh(h,e,n,r,c,s,0,m);return _?(C=new Na(x,s[f(4068)]||r+""+t+a),x.blockCache[s.quadKey]=C,C[f(3316)]=_,_[f(4167)](l)):void 0}function oh(e,x,t,a,r,n){const s=o;let u,c=e[s(3854)]+r[s(1570)];dt(P0[s(3260)])&&(c=dt(P0.CREDENTIAL[s(1628)][c])?P0.addTokenWithKey(c,c):P0[s(955)](c)),e[s(2461)]&&s(3302)!==e[s(2461)]?u=t:u=e._tilingScheme[s(3007)](a)-t-1;let f=c,l=r.resource;dt(P0[s(3260)])&&(dt(P0[s(3260)][s(1628)][l[s(2547)]])?l[s(2547)]=P0[s(1386)](l.url,l.url):l[s(2547)]=P0.addToken(l[s(2547)]));let m={Accept:s(4089)};if(dt(e._customRequestHeaders)&&(m=Cesium[s(840)](m,e[s(3010)])),e[s(3781)])return rh(f,e,x,t,a,r,n,u,m);let h=l[s(2773)]({url:f,templateValues:{version:r.version,z:a,x,y:u},headers:m,request:n})[s(1823)]();return Cesium[s(692)](h)?h[s(4167)](function(C){const p=s;return C=N2[p(2653)](new Uint8Array(C))[p(4056)],br(e,C,a,x,t,r)}):void 0}Object.defineProperties(mt[o(3096)],{errorEvent:{get:function(){return this[o(2129)]}},credit:{get:function(){return this._credit}},tilingScheme:{get:function(){return this._tilingScheme}},ready:{get:function(){return this[o(1484)]}},readyPromise:{get:function(){return this[o(1506)].promise}},hasWaterMask:{get:function(){const e=o;return this._hasWaterMask&&this[e(1627)]}},hasVertexNormals:{get:function(){const e=o;return this[e(1478)]&&this[e(3661)]}},hasMetadata:{get:function(){const e=o;return this[e(2330)]&&this[e(1638)]}},requestVertexNormals:{get:function(){return this[o(3661)]}},requestWaterMask:{get:function(){return this._requestWaterMask}},requestMetadata:{get:function(){return this[o(1638)]}},availability:{get:function(){return this[o(3957)]}},blockCache:{get:function(){return this[o(458)]}},blockCacheQueue:{get:function(){return this[o(2462)]}},blockCacheSize:{get:function(){return this[o(1189)]}},customRequestHeaders:{get:function(){return this._customRequestHeaders},set:function(e){const x=o;this[x(3010)]=e}}}),mt.prototype[o(1736)]=function(e,x,t,a){const r=o;if(!this[r(1484)])throw new Cesium[r(1785)](r(452));if(t===0){let c=new Uint16Array(12288);for(let C=0;C<64;C++)for(let p=0;p<64;p++)c[64*C+p]=Math.floor(32767*C/63),c[4096+64*C+p]=Math.floor(32767*p/63),c[8192+64*C+p]=0;let f=new Uint16Array(23814);for(let C=0;C<63;C++)for(let p=0;p<63;p++)f[6*(63*C+p)]=64*C+p,f[6*(63*C+p)+1]=64*(C+1)+p+1,f[6*(63*C+p)+2]=64*C+p+1,f[6*(63*C+p)+3]=64*(C+1)+p,f[6*(63*C+p)+4]=64*(C+1)+p+1,f[6*(63*C+p)+5]=64*C+p;let l=new Uint16Array(0),m=new Cesium[r(516)](NaN,-1/0,NaN),h=new Cesium[r(516)](0,-31890685e-1,0);return e===1&&(h.y=31890685e-1,m.y=1/0),Promise[r(1599)](new Cesium[r(3362)]({center:h,minimumHeight:0,maximumHeight:0,boundingSphere:new Cesium.BoundingSphere(h,95672055e-1),horizonOcclusionPoint:m,quantizedVertices:c,indices:f,westIndices:l,southIndices:l,eastIndices:l,northIndices:l,westSkirtHeight:0,southSkirtHeight:0,eastSkirtHeight:0,northSkirtHeight:0,childTileMask:15,invalid:!1,hasInvalid:!1}))}let n,s=this._layers,u=s[r(3650)];if(u===1)n=s[0];else for(let c=0;c<u;++c){let f=s[c];if(!Cesium.defined(f.availability)||f[r(3368)][r(1992)](t,e,x)){n=f;break}}return Cesium[r(692)](a)||(a=new Cesium[r(3284)]({throttle:!1,throttleByServer:!1,type:Cesium[r(2300)].TERRAIN})),oh(this,e,x,t,n,a)},mt[o(3096)][o(1788)]=function(e){return this[o(3121)]/(1<<e)};let sh=new Cesium.Rectangle;mt[o(3096)][o(3359)]=function(e,x,t){const a=o;if(t!==0){if(this[a(1322)].indexOf(t)!==-1){let r=this[a(2840)].tileXYToRectangle(e,x,t),n=Cesium[a(2879)][a(2636)](this[a(1429)],r,sh);return Cesium[a(692)](n)}return!1}if(Cesium.defined(this._availability))return!(t>this._availability._maximumLevel)&&(!!this._availability[a(1992)](t,e,x)||(this[a(2330)],!1))},mt[o(3096)][o(1887)]=function(e,x,t){};let ch=Cesium[o(3418)],P2=Cesium[o(692)],uh=Cesium[o(2899)],lh=Object[o(3677)]({PACK:4,BLOCK:5,BLOCKPACK:6},Cesium.RequestType);var fh={webp:"image/webp",png:o(1726)},ht={UNLOADED:0,TRANSITIONING:1,RECEIVED:2,TEXTURE_LOADED:3,READY:4,FAILED:5,INVALID:6,PLACEHOLDER:7,RENDERING:8,RENDERED:9},dh=/\.dxtz/i;function mh(e,x,t){const a=o;var r=new DataView(e,x,t),n=0,s=r[a(3757)](n,!0);n+=Uint32Array[a(3955)],r[a(3757)](n,!0),n+=Uint32Array[a(3955)];var u=s===32?PixelFormat[a(915)]:PixelFormat[a(524)],c=r[a(3757)](n,!0);n+=Uint32Array[a(3955)];var f=r[a(3757)](n,!0);n+=Uint32Array[a(3955)],r[a(3757)](n,!0),n+=Uint32Array[a(3955)];var l=r[a(3757)](n,!0);n+=Uint32Array[a(3955)];var m=new Uint8Array(e,n+x,l),h=pako.inflate(m)[a(4056)],C=new Uint8Array(h);return new CompressedTextureBuffer(u,c,f,C)}function hh(e,x,t){const a=o;var r=new DataView(e),n=0;r[a(3757)](n,!0),n+=4;var s=r.getUint32(n,!0);n+=4;for(var u=x[a(1041)],c=x[a(2378)]*x[a(618)]+u,f=0,l=0,m=0;m<s;m++){if(m<c)f+=r[a(3757)](n,!0);else if(m===c){l=r[a(3757)](n,!0),n+=4;break}n+=4}if(n=8+4*s,l!==0){n+=f;var h=a2(),C=x[a(2547)];return dh[a(1528)](C)?h.resolve(mh(e,n,l)):ch({uint8Array:new Uint8Array(e,n,l),format:t,flipY:!0})}}function Ch(e,x){const t=x._imageryProvider,a=x;function r(u){const c=C0;if(!P2(u))return n();var f=fh[t[c(4044)]],l=t[c(2001)][e[c(2625)].quadKey];P2(l[c(1426)])||(l[c(1426)]=u),t[c(2303)].touch(l),t[c(2303)][c(728)](t[c(1056)]),P2(t[c(3221)])&&t[c(3221)][c(3650)]>0&&(u=decodeArrayBuffer(u,t[c(3221)]));var m=hh(u,e[c(2625)].blockInfo,f);P2(m)||(e[c(2799)]=ht[c(1621)]),m.then(function(h){const C=c;e[C(3186)]=h,e[C(2799)]=ht.RECEIVED},h=>{const C=c;e[C(2799)]=ht[C(1621)]}),e.request=void 0,P2(Cesium[c(2613)][c(4182)])?Cesium[c(2613)][c(4182)](a[c(3602)]):P2(Cesium.TileProviderError[c(851)])&&Cesium[c(2613)][c(851)](a._requestImageError)}function n(u){const c=C0;if(e[c(2625)].state===uh[c(3448)])return e[c(2799)]=ht[c(2196)],void(e[c(2625)]=void 0);e[c(2799)]=ht[c(1621)],e.request=void 0;const f=c(2221)+e.x+" Y: "+e.y+c(1103)+e[c(2337)]+".";a[c(3602)]=Cesium[c(2613)][c(3371)](a._requestImageError,t,t[c(2335)],f,e.x,e.y,e[c(2337)],s,u)}function s(u){const c=C0;var f=new Cesium[c(3284)]({throttle:!1,throttleByServer:!0,type:lh[c(2298)]});f[c(1363)]=u,e[c(2625)]=f,e.state=ht.TRANSITIONING;var l=t[c(1418)](e.x,e.y,e[c(2337)],f,e[c(1195)],e);if(!P2(l))return e[c(2799)]=ht.UNLOADED,void(e[c(2625)]=void 0);P2(t[c(1651)])&&(e[c(2542)]=t[c(1651)](e.x,e.y,e[c(2337)])),P2(l[c(4167)])||(l=Promise.resolve(l)),l[c(4167)](r,n)}s(!0)}Cesium[o(1903)][o(3096)][o(3434)]=Cesium.ImageryLayer[o(3096)][o(645)],Cesium[o(1903)][o(3096)][o(645)]=function(e){const x=o;e[x(3458)][x(4158)].isBlock?Ch(e,this):this[x(3434)](e)};var bh={};/**
    @license
    tween.js - https://github.com/sole/tween.js

    Copyright (c) 2010-2012 Tween.js authors.

    Easing equations Copyright (c) 2001 Robert Penner http://robertpenner.com/easing/

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
    */Date[o(2915)]===void 0&&(Date[o(2915)]=function(){const e=o;return new Date()[e(1718)]()});var o2,ie=ie||(o2=[],{REVISION:"13",getAll:function(){return o2},removeAll:function(){o2=[]},add:function(e){o2[o(2583)](e)},remove:function(e){var t=o2[o(3019)](e);t!==-1&&o2.splice(t,1)},update:function(e){const x=o;if(o2[x(3650)]===0)return!1;var t=0;for(e=e!==void 0?e:x(1345)!=typeof window&&window[x(2790)]!==void 0&&window[x(2790)][x(2915)]!==void 0?window[x(2790)][x(2915)]():Date.now();t<o2[x(3650)];)o2[t][x(2696)](e)?t++:o2[x(1805)](t,1);return!0}});ie.Tween=function(e){const x=o;var t=e,a={},r={},n={},s=1e3,u=0,c=!1,f=!1,l=0,m=null,h=ie.Easing[x(1108)][x(3858)],C=ie[x(1080)][x(1108)],p=[],_=null,y=!1,A=null,b=null,B=null,T=0,M=0;for(var w in e)a[w]=parseFloat(e[w],10);this.to=function(I,P){return P!==void 0&&(s=P),r=I,this},this[x(1862)]=function(I){const P=x;for(var V in ie.add(this),f=!0,y=!1,m=I!==void 0?I:P(1345)!=typeof window&&window[P(2790)]!==void 0&&window[P(2790)].now!==void 0?window[P(2790)][P(2915)]():Date.now(),m+=l,r){if(r[V]instanceof Array){if(r[V][P(3650)]===0)continue;r[V]=[t[V]].concat(r[V])}a[V]=t[V],!(a[V]instanceof Array)&&(a[V]*=1),n[V]=a[V]||0}return this},this[x(3336)]=function(){},this.stop=function(){const I=x;return f?(ie[I(1578)](this),f=!1,B!==null&&B[I(798)](t),this.stopChainedTweens(),this):this},this[x(3759)]=function(){const I=x;return f?(f=!1,T=I(1345)!=typeof window&&window.performance!==void 0&&window[I(2790)][I(2915)]!==void 0?window.performance[I(2915)]():Date[I(2915)](),this):this},this.endPause=function(){const I=x;return f||(f=!0,T=(I(1345)!=typeof window&&window.performance!==void 0&&window[I(2790)][I(2915)]!==void 0?window[I(2790)][I(2915)]():Date[I(2915)]())-T,M+=T),this},this.stopChainedTweens=function(){const I=x;for(var P=0,V=p[I(3650)];P<V;P++)p[P][I(2730)]()},this.delay=function(I){return l=I,this},this[x(854)]=function(I){return u=I,this},this[x(986)]=function(I){return c=I,this},this[x(1674)]=function(I){return h=I,this},this[x(1291)]=function(I){return C=I,this},this[x(3435)]=function(){return p=arguments,this},this[x(2526)]=function(I){return _=I,this},this[x(2037)]=function(I){return A=I,this},this[x(4026)]=function(I){return b=I,this},this[x(1772)]=function(I){return B=I,this},this[x(2696)]=function(I){const P=x;var V;if(I<m||!f)return!0;y===!1&&(_!==null&&_[P(798)](t),y=!0);var q=(I-m-M)/s,X=h(q=q>1?1:q);for(V in r){var H=a[V]||0,z=r[V];z instanceof Array?t[V]=C(z,X):(P(4039)==typeof z&&(z=H+parseFloat(z,10)),P(1232)==typeof z&&(t[V]=H+(z-H)*X))}if(A!==null&&A.call(t,X),q==1){if(M=0,u>0){for(V in isFinite(u)&&u--,n){if(P(4039)==typeof r[V]&&(n[V]=n[V]+parseFloat(r[V],10)),c){var u0=n[V];n[V]=r[V],r[V]=u0}a[V]=n[V]}return m=I+l,!0}b!==null&&b[P(798)](t);for(var n0=0,N=p[P(3650)];n0<N;n0++)p[n0][P(1862)](I);return!1}return!0}},ie[o(1352)]={Linear:{None:function(e){return e}},Quadratic:{In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}},Cubic:{In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}},Quartic:{In:function(e){return e*e*e*e},Out:function(e){return 1-e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}},Quintic:{In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}},Sinusoidal:{In:function(e){return 1-Math[o(1777)](e*Math.PI/2)},Out:function(e){return Math[o(4186)](e*Math.PI/2)},InOut:function(e){return .5*(1-Math[o(1777)](Math.PI*e))}},Exponential:{In:function(e){return e===0?0:Math[o(1149)](1024,e-1)},Out:function(e){return e===1?1:1-Math[o(1149)](2,-10*e)},InOut:function(e){const x=o;return e===0?0:e===1?1:(e*=2)<1?.5*Math[x(1149)](1024,e-1):.5*(2-Math[x(1149)](2,-10*(e-1)))}},Circular:{In:function(e){return 1-Math[o(1495)](1-e*e)},Out:function(e){return Math[o(1495)](1- --e*e)},InOut:function(e){const x=o;return(e*=2)<1?-.5*(Math[x(1495)](1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}},Elastic:{In:function(e){const x=o;var t,a=.1;return e===0?0:e===1?1:(!a||a<1?(a=1,t=.1):t=.4*Math.asin(1/a)/(2*Math.PI),-a*Math[x(1149)](2,10*(e-=1))*Math[x(4186)]((e-t)*(2*Math.PI)/.4))},Out:function(e){const x=o;var t,a=.1;return e===0?0:e===1?1:(!a||a<1?(a=1,t=.1):t=.4*Math.asin(1/a)/(2*Math.PI),a*Math[x(1149)](2,-10*e)*Math[x(4186)]((e-t)*(2*Math.PI)/.4)+1)},InOut:function(e){const x=o;var t,a=.1,r=.4;return e===0?0:e===1?1:(!a||a<1?(a=1,t=.1):t=r*Math.asin(1/a)/(2*Math.PI),(e*=2)<1?a*Math[x(1149)](2,10*(e-=1))*Math[x(4186)]((e-t)*(2*Math.PI)/r)*-.5:a*Math[x(1149)](2,-10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/r)*.5+1)}},Back:{In:function(e){var x=1.70158;return e*e*((x+1)*e-x)},Out:function(e){var x=1.70158;return--e*e*((x+1)*e+x)+1},InOut:function(e){var x=2.5949095;return(e*=2)<1?e*e*((x+1)*e-x)*.5:.5*((e-=2)*e*((x+1)*e+x)+2)}},Bounce:{In:function(e){const x=o;return 1-ie[x(1352)].Bounce[x(1585)](1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){const x=o;return e<.5?.5*ie[x(1352)][x(3351)].In(2*e):.5*ie[x(1352)].Bounce[x(1585)](2*e-1)+.5}}},ie[o(1080)]={Linear:function(e,x){const t=o;var a=e[t(3650)]-1,r=a*x,n=Math[t(3720)](r),s=ie[t(1080)].Utils[t(1108)];return x<0?s(e[0],e[1],r):x>1?s(e[a],e[a-1],a-r):s(e[n],e[n+1>a?a:n+1],r-n)},Bezier:function(e,x){const t=o;var a,r=0,n=e.length-1,s=Math[t(1149)],u=ie[t(1080)].Utils[t(461)];for(a=0;a<=n;a++)r+=s(1-x,n-a)*s(x,a)*e[a]*u(n,a);return r},CatmullRom:function(e,x){const t=o;var a=e[t(3650)]-1,r=a*x,n=Math.floor(r),s=ie[t(1080)].Utils[t(3859)];return e[0]===e[a]?(x<0&&(n=Math[t(3720)](r=a*(1+x))),s(e[(n-1+a)%a],e[n],e[(n+1)%a],e[(n+2)%a],r-n)):x<0?e[0]-(s(e[0],e[0],e[1],e[1],-r)-e[0]):x>1?e[a]-(s(e[a],e[a],e[a-1],e[a-1],r-a)-e[a]):s(e[n?n-1:0],e[n],e[a<n+1?a:n+1],e[a<n+2?a:n+2],r-n)},Utils:{Linear:function(e,x,t){return(x-e)*t+e},Bernstein:function(e,x){const t=o;var a=ie.Interpolation.Utils[t(3780)];return a(e)/a(x)/a(e-x)},Factorial:function(){var e=[1];return function(x){var t,a=1;if(e[x])return e[x];for(t=x;t>1;t--)a*=t;return e[x]=a}}(),CatmullRom:function(e,x,t,a,r){var n=.5*(t-e),s=.5*(a-x),u=r*r;return(2*x-2*t+n+s)*(r*u)+(-3*x+3*t-2*n-s)*u+n*r+x}}};let Yt=function(){const e=o;this._layers=new Cesium[e(2902)],this[e(1289)]=[],this[e(1152)]=3,this[e(1729)]=null};Yt[o(3096)][o(1050)]=function(e,x){const t=o;if(!Cesium[t(692)](e))throw new Cesium[t(1785)](t(2133));const a=e.name;if(!Cesium.defined(a)||a=="")throw new Cesium[t(1785)](t(3548));let r=this[t(1858)];if(r[t(2715)](a))throw new Cesium[t(1295)](t(3043)+a+t(2116));e[t(2702)]=this[t(1152)]++;const n=this[t(1289)][t(3650)];r[t(2590)](a,e),x=Cesium[t(820)](x,n),e[t(3220)]=x,this[t(1289)][t(2583)](e),this[t(1289)].sort(function(s,u){const c=t;return s[c(3220)]-u[c(3220)]})},Yt[o(3096)].find=function(e){const x=o;if(!Cesium[x(692)](e))throw new Cesium[x(1785)](x(3548));let t=null;for(let a=0;a<this._layerQueue.length;a++)this[x(1289)][a][x(3085)]==e&&(t=this[x(1289)][a]);return t},Yt[o(3096)][o(1578)]=function(e,x){const t=o;if(x=Cesium[t(820)](x,!0),!Cesium.defined(e))return!1;const a=this[t(3866)](e);return a?!!this[t(1858)][t(1578)](e)&&(this[t(1289)][t(1805)](this[t(1289)][t(3019)](a),1),this[t(1729)][t(2572)][t(4025)].splice(this[t(1729)][t(2572)]._primitives[t(3019)](a),1),x&&a[t(3701)](),!0):!1},Yt[o(3096)].updateTextVisible=function(e){const x=o;if(e._allTextOverlap&&e[x(544)][x(3650)]!=0){for(var t=this[x(1289)],a=this[x(1289)].length,r=0;r<a;r++){var n=t[r];x(1397)!==n[x(2450)]&&x(3044)!==n[x(2450)]||mx[x(1787)](n[x(3085)])}mx[x(2807)](e._allTextOverlap,0,!![]),mx.setVisibiltyChangedToLayer(this,!![]),mx[x(4111)](),e._allTextOverlap.length=0}};const ph=Cesium[o(1606)],pe=Cesium[o(692)];let Fx=new Cesium[o(2756)],Jt=new Cesium.Cartesian4,Je=new Cesium[o(2235)],yc=new Cesium.Matrix4;new Cesium[o(516)];let Ct=new Cesium[o(2567)](Cesium[o(516)].UNIT_Z,1);function vh(e,x){const t=o;let a=e.distance,r=e[t(3344)];x[0]=-2*r.x*r.x+1,x[1]=-2*r.y*r.x,x[2]=-2*r.z*r.x,x[3]=0,x[4]=-2*r.x*r.y,x[5]=-2*r.y*r.y+1,x[6]=-2*r.z*r.y,x[7]=0,x[8]=-2*r.x*r.z,x[9]=-2*r.y*r.z,x[10]=-2*r.z*r.z+1,x[11]=0,x[12]=-2*r.x*a,x[13]=-2*r.y*a,x[14]=-2*r.z*a,x[15]=1}function Ah(e,x){const t=o;let a=Cesium[t(1702)][t(1554)](e);return x&&(a.headers=Cesium[t(840)](a[t(2103)],x)),a.fetchJson()[t(4167)](function(r){const n=t;if(r[n(3650)]<1)return;let s=r[0];return{name:s[n(3085)],path:s[n(757)]}})}function yh(e,x){const t=o;let a=Cesium[t(1702)][t(1554)](e);return x&&(a[t(2103)]=Cesium[t(840)](a.headers,x)),a[t(1542)]()[t(4167)](function(r){return r})}function _h(e,x){const t=o;let a=e+t(2447);pe(P0[t(3260)])&&(a=pe(P0[t(3260)]._keymap[a])?P0[t(1386)](e,a):P0[t(955)](a));let r=Cesium[t(1702)][t(1554)](a);return x&&(r[t(2103)]=Cesium[t(840)](r[t(2103)],x)),r.fetchJson()[t(4167)](function(n){const s=t;let u={s3m:[],imagery:[],s3mGroup:[],terrain:void 0};for(let c=0,f=n.length;c<f;c++){let l=n[c],m=l[s(1553)];m==="OSGBLayer"?u.s3m[s(2583)](l):s(833)===m?u[s(928)][s(2583)](l):m==="TerrainFileLayer"?u[s(3766)]=l:s(3354)===m&&u[s(2395)][s(2583)](l)}return u})}Cesium[o(2020)][o(3096)][o(1696)]=!1,Cesium.Camera.prototype[o(2617)]=new Cesium.Matrix4,Cesium[o(2020)][o(3096)][o(3025)]=function(e){const x=o;this[x(1696)]=!0,vh(e,this[x(2617)]),this[x(2703)][x(679)]=!0,this[x(2703)][x(4080)]=e;let t=Cesium[x(2235)].multiply(this[x(3856)],this.reflectMatrix,Je);this.frustum[x(835)]=t},Cesium.Camera.prototype[o(814)]=function(){const e=o;this[e(1696)]=!1,this.frustum[e(679)]=!1},Cesium[o(1900)][o(3096)][o(1112)]=function(e,x){const t=o;Cesium[t(692)](x)&&Cesium[t(692)](x[t(1063)])&&this[t(621)]===x[t(1063)]||e[t(3879)](this,x)},Cesium[o(2235)][o(3334)]=function(e,x,t){const a=o;Cesium[a(1680)][a(1556)].object(a(2951),e),Cesium.Check[a(1556)][a(2408)](a(2981),x),Cesium[a(1680)][a(1556)][a(2408)](a(3022),t),Cesium.Matrix4[a(1201)](e,Je),Cesium[a(2235)][a(457)](Je,Je),Fx.x=x.normal.x,Fx.y=x[a(3344)].y,Fx.z=x.normal.z,Fx.w=x[a(4114)],Cesium[a(2235)][a(3688)](Je,Fx,Fx),t[a(3344)].x=Fx.x,t[a(3344)].y=Fx.y,t[a(3344)].z=Fx.z;let r=Cesium[a(516)][a(2342)](t[a(3344)]);return Cesium[a(516)][a(1586)](t.normal,t.normal),t[a(4114)]=Fx.w/r,t},Cesium[o(3698)][o(3096)][o(2843)]=Cesium[o(3698)].prototype.clone,Cesium.PerspectiveFrustum[o(3096)][o(3552)]=function(e){const x=o;let t=this[x(2843)](e);return t[x(679)]=this.reflect,t[x(4080)]=this[x(4080)],t[x(835)]=this[x(835)],t};const gh=/^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)$/i,_c=/^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)*$/i;function Th(e){const x=o;if(!e)throw new Cesium[x(1785)](x(2866));let t=e.firstChild,a=t[x(1880)],r=J.queryStringValue(t,x(3062),a),n=J.queryFirstNode(t,x(2929),a),s=J[x(987)](t,x(1821),a),u=J.queryBooleanValue(n,x(2662),a),c=J[x(3365)](n,x(913),a),f=J[x(1980)](n,"VisibleAltitudeMin",a),l=J[x(1980)](n,x(2867),a);l=l===0?Number.MAX_VALUE:l;let m=J[x(1980)](n,x(599),a),h=J[x(1980)](n,"VisibleDistanceMax",a),C=J.queryStringValue(n,x(3005),a),p=0;x(1928)===C?p=1:C==="ALL"&&(p=2);let _=J[x(987)](t,x(1593),a),y=x(3815)===_||x(507)===_,A=x(3219)===_,b=J[x(3250)](t,x(2274),a);if(!b){let n0=J[x(3250)](t,"LayerStyle",a);if(n0&&(b=J[x(3250)](n0,x(2274),a),!b))throw new Cesium.DeveloperError(x(3188)+r)}let B=J[x(1980)](b,x(4146),a),T=J[x(987)](b,x(4085),a),M=gh[x(3449)](T[x(3193)]()),w=new Cesium[x(1911)];if(M!==null){let n0=parseFloat(M[1]);n0=n0===189?255:n0;let N=parseFloat(M[2]);N=N===235?255:N,w.red=Cesium[x(2746)].clamp(n0/255,0,1),w[x(2368)]=Cesium.Math[x(1263)](N/255,0,1),w[x(640)]=Cesium[x(2746)][x(1263)](parseFloat(M[3])%256/255,0,1),w[x(2089)]=Cesium.Math.clamp(parseFloat(M[3])%65536/256/255,0,1)}let I=J.queryFirstNode(b,x(2143),a),P=new da;if(I){let n0=J[x(987)](I,x(3423),a),N=ot[x(966)];n0==="FILL_LINE"?N=ot.WireFrame:x(3101)===n0&&(N=ot[x(495)]);let Y=J[x(1980)](I,"PointSize",a),W=J[x(987)](I,x(3534),a),x0=_c[x(3449)](W[x(3193)]()),y0=new Cesium[x(1911)];x0!==null&&(y0[x(3671)]=Cesium.Math.clamp(parseFloat(x0[1]),0,1),y0[x(2368)]=Cesium[x(2746)][x(1263)](parseFloat(x0[2]),0,1),y0.blue=Cesium[x(2746)][x(1263)](parseFloat(x0[3]),0,1),y0.alpha=Cesium.Math[x(1263)](parseFloat(x0[4]),0,1));let f0=J.queryNumericValue(b,x(3536),a)||0;Y=Math[x(2092)](Y,f0);let v=J[x(987)](I,x(1192),a);x0=_c[x(3449)](v.toLowerCase());let T0=new Cesium[x(1911)];x0!==null&&(T0[x(3671)]=Cesium.Math[x(1263)](parseFloat(x0[1]),0,1),T0.green=Cesium[x(2746)][x(1263)](parseFloat(x0[2]),0,1),T0[x(640)]=Cesium[x(2746)][x(1263)](parseFloat(x0[3]),0,1),T0.alpha=Cesium[x(2746)][x(1263)](parseFloat(x0[4]),0,1));let F0=J[x(1980)](I,x(2747),a);J[x(987)](I,x(3078),a);let O0=J.queryStringValue(I,x(1296),a);O0=x(3352)===O0?Ft[x(3282)]:x(3031)===O0?Ft[x(3320)]:Ft.None;let w0=Cesium[x(2746)][x(3629)](J.queryNumericValue(I,x(3091),a)),U0=Cesium.Math[x(3629)](J[x(1980)](I,x(2162),a)),xx=Cesium[x(2746)][x(3629)](J[x(1980)](I,x(3297),a));new Cesium[x(2030)](w0,U0,xx),P[x(939)]=w,P.bottomAltitude=F0,P[x(3288)]=B,P[x(3694)]=y0,P.pointSize=Y,P[x(1384)]=T0,P[x(751)]=N,P[x(1717)]=O0}let V=J[x(1980)](t,x(2638),a),q=J[x(3250)](t,"PolygonOffset",a),X=J[x(1980)](q,"Constant",a),H=J[x(1980)](q,x(1028),a),z=X!==0&&H!==0,u0=J[x(3250)](t,"ColorParams",a);return{name:r,groupName:s,isS3MB:y,isS3MBlock:!1,isS3M:A,style3D:P,selectEnable:u,isVisible:c,minVisibleAltitude:f,maxVisibleAltitude:l,minVisibleDistance:m,maxVisibleDistance:h,shadowType:p,lodRangeScale:V,polygonOffset:{enabled:z,units:X,factor:H},brightness:J.queryNumericValue(u0,"Brightness",a),constrast:J.queryNumericValue(u0,x(2113),a),hue:J[x(1980)](u0,x(2005),a),saturation:J[x(1980)](u0,x(719),a),gamma:J[x(1980)](u0,x(3609),a)}}function Bh(e,x){const t=o;let a=Cesium[t(1702)][t(1554)](e);return x&&(a[t(2103)]=Cesium.combine(a.headers,x)),new Promise((r,n)=>{const s=t;a[s(1312)]()[s(4167)](function(u){const c=s;try{let f=Th(u);r(f)}catch(f){n(c(1281)+f)}},u=>{n("fetch s3m layer config xml error:"+u)})})}function Eh(e,x,t){const a=o;let r=new Bi(e),n=new Bi(x),s=new Bi(1),u=new Bi(2),c=new Bi(1);for(;n[a(2710)]()>0;)n[a(3176)](u)[a(2710)]()===0?(n=n.dividedBy(u),r=r[a(1252)](r)[a(3176)](t)):(n=n.minus(c),s=s.multipliedBy(r)[a(3176)](t));return s[a(2710)]()}Cesium.Scene[o(3096)][o(3928)]=function(e,x){const t=o;if(e[t(3019)]("?token")>-1&&e[t(3019)](t(2967))>-1){let l=new Ex(e),m=ph(l[t(2894)]);l[t(2894)]=void 0;let h={};h={rooturl:e=l[t(2557)](),type:t(866),value:m[t(866)]},pe(P0[t(3260)])?e in P0[t(3260)][t(1628)]||P0[t(3260)].addCredential([h]):P0[t(3260)]=new P0([h])}if(t(2967)!==e[t(3403)](-9))throw new Cesium[t(1785)](t(3233));x=Cesium[t(820)](x,{}),this[t(697)]=Cesium[t(820)](this[t(697)],x[t(697)]);var a=e,r=x[t(2868)],n=Cesium[t(820)](x[t(1313)],!0),s=/({.*?})/g;if(Cesium.defined(r))e=e.replace(s,function(l,m){const h=t;if(!Cesium.defined(r.length))throw new Cesium[h(1785)](h(2679));if(h(3574)===m)return r[0]});else if(s[t(1528)](e))throw new Cesium[t(1785)](t(2679));let u=e+"/scenes.json";pe(P0[t(3260)])&&(u=pe(P0.CREDENTIAL._keymap[e])?P0[t(1386)](e,u):P0[t(955)](u));let c=this,f=this[t(3907)];return new Promise((l,m)=>{const h=t;Ah(u,c[h(697)])[h(4167)](function(C){const p=h;if(!C)return void m(p(3532));let _=C[p(757)]+p(2376);pe(P0[p(3260)])&&(_=pe(P0[p(3260)][p(1628)][e])?P0.addTokenWithKey(e,_):P0.addToken(_)),yh(_,c[p(697)]).then(function(y){const A=p;let b;A(2253)===y[A(3876)]?(c.mode=Cesium[A(442)][A(3443)],y[A(3907)].tilt-=Math.PI,b=new Cesium[A(516)](y[A(3907)][A(1454)],y.camera[A(1738)],y.camera[A(2094)]),n&&f[A(3670)]({destination:b,orientation:{heading:y[A(3907)][A(1425)],pitch:y[A(3907)][A(2140)],roll:0},convert:!1})):(y[A(3907)][A(2140)]-=90,b=Cesium[A(516)][A(2136)](y[A(3907)][A(1454)],y.camera.latitude,y[A(3907)][A(2094)]),n&&f.setView({destination:b,orientation:{heading:Cesium.Math.toRadians(y[A(3907)][A(1425)]),pitch:Cesium[A(2746)].toRadians(y[A(3907)][A(2140)]),roll:0},convert:!1}))},y=>{m(p(529)+y)}),_h(C.path,c[p(697)])[p(4167)](function(y){const A=p;let b=y[A(1276)],B=y[A(928)],T=y[A(3766)];y.s3mGroup;let M=C[A(757)]+A(2896),w=[];for(let X=b[A(3650)]-1;X>=0;X--){let H=b[X],z=M+encodeURIComponent(H[A(3085)])+A(1832);pe(P0[A(3260)])&&(z=pe(P0[A(3260)][A(1628)][e])?P0[A(1386)](e,z):P0[A(955)](z)),function(u0){const n0=A;let N=Bh(z,c[n0(697)])[n0(4167)](function(Y){const W=n0;try{let x0=e+"/datas/"+encodeURIComponent(Y[W(3085)])+W(2261);return Y[W(3652)]={subdomains:r,urlScheme:a+W(2158)+encodeURIComponent(Y[W(3085)])+"/",customRequestHeaders:c[W(697)]},c[W(1760)](x0,Y)}catch(x0){m(W(3909)+Y.name+W(566)+x0)}},Y=>{m("get S3M layer config failed,"+Y+",layer name is "+H.name)});w[n0(2583)](N)}()}for(var I=B.length-1;I>=0;I--){var P=new qt({url:e+A(2158)+encodeURIComponent(B[I][A(3085)]),customRequestHeaders:c[A(697)]});try{var V=c.globe[A(3948)][A(652)](P);w[A(2583)](V)}catch(X){m(A(715)+B[I][A(3085)]+A(566)+X)}}if(Cesium.defined(T)){var q=e+A(2158)+encodeURIComponent(T.name);try{c[A(1781)]=new mt({url:q,isSct:!0,customRequestHeaders:c.customRequestHeaders}),w[A(2583)](c[A(1781)])}catch(X){m("add terrain layer "+T[A(3085)]+A(566)+X)}}Promise.all(w)[A(4167)](X=>{l(X)}).catch(X=>{m(A(2862)+X)})},y=>{m(p(3080)+y)})},C=>{m(h(1905)+C)})})};let pr={};function Ph(e,x){const t=o;let a=a2();var r=pr[e];if(pe(r))return r[t(4167)]?r:(a[t(1599)](r),a[t(3316)]);let n=e+"/login.json";pe(P0[t(3260)])&&(n=pe(P0[t(3260)][t(1628)][e])?P0[t(1386)](e,n):P0[t(955)](n));let s=Cesium.Resource.createIfNeeded(n);return x&&(s[t(2103)]=Cesium[t(840)](s.headers,x)),pr[e]=a.promise,s[t(1542)]()[t(4167)](u=>{const c=t;let f=Number(u[c(1635)]),l=Eh(Number(u.random),397245148883021,0x8f461e7bf61d5),m=JSON[c(2498)]({jsessionID:f[c(2557)](),random:l.toString()});Cesium.Resource.post({url:n,data:m,responseType:"json",headers:x})[c(4167)](h=>{const C=c;h[C(1768)]===!0?(a[C(1599)](l),pr[e]=l):a[C(3454)](!1)},h=>{a[c(3454)](h)})},u=>{a[t(3454)](u)}),a[t(3316)]}let Va=new Yt;function gc(e,x){const t=o;Cesium[t(2235)][t(3552)](x,e[t(4052)]),Cesium.Matrix4[t(4013)](x,e._viewRotation),e[t(3765)]=!0,e[t(2834)]=!0,e[t(498)]=!0,e[t(1713)]=!0,e[t(1366)]=!0,e[t(1682)]=!0,e._inverseModelView3DDirty=!0,e[t(2731)]=!0,e[t(2442)]=!0,e[t(2579)]=!0,e[t(1099)]=!0,e[t(685)]=!0,e[t(1932)]=!0,e[t(1130)]=!0,e[t(1973)]=!0,e._inverseNormal3DDirty=!0}function Tc(e,x){const t=o;Cesium[t(2235)][t(3552)](x,e[t(1981)]),Cesium[t(2235)][t(4013)](x,e[t(1087)])}function wh(e,x){const t=o;Cesium[t(516)][t(3552)](x.positionWC,e._cameraPosition),Cesium[t(516)][t(3552)](x[t(1871)],e._cameraDirection),Cesium[t(516)][t(3552)](x[t(594)],e._cameraRight),Cesium.Cartesian3[t(3552)](x[t(4103)],e._cameraUp);let a=x[t(1293)];Cesium.defined(a)?e[t(585)]=a[t(2388)]:e[t(585)]=-e[t(2753)][t(1749)],e._encodedCameraPositionMCDirty=!0}function Sh(e,x){const t=o;if(!e[t(4080)]||!e[t(835)]||!e[t(679)])return;let a=e[t(835)];Cesium[t(2235)].multiplyByPlane(a,e[t(4080)],Ct),Fx.x=(Cesium[t(2746)][t(1509)](Ct[t(3344)].x)+x[8])/x[0],Fx.y=(Cesium[t(2746)].sign(Ct[t(3344)].y)+x[9])/x[5],Fx.z=-1,Fx.w=(1+x[10])/x[14],Jt.x=Ct.normal.x,Jt.y=Ct.normal.y,Jt.z=Ct.normal.z,Jt.w=Ct[t(4114)],Cesium[t(2756)].multiplyByScalar(Jt,2/Cesium[t(2756)][t(2528)](Jt,Fx),Fx),x[2]=Fx.x,x[6]=Fx.y,x[10]=Fx.z+1,x[14]=Fx.w}function Mh(e,x){const t=o;Cesium[t(2235)][t(3552)](x,e[t(2509)]),e._inverseProjectionDirty=!0,e._viewProjectionDirty=!0,e[t(2442)]=!0,e[t(2579)]=!0,e[t(1099)]=!0}function Rh(e,x){const t=o;Cesium[t(2235)][t(3552)](x,e[t(1941)]),e._modelViewInfiniteProjectionDirty=!0}function Dh(){const e=o;return e(1345)!=typeof performance&&e(1355)==typeof performance[e(2915)]&&isFinite(performance[e(2915)]())?performance[e(2915)]():Date.now()}function Ua(e,x){const t=o;if(e===null||typeof e!="object")return e;x=Cesium[t(820)](x,!1);var a=new e[t(4152)];for(var r in e)if(e[t(2364)](r)){var n=e[r];x&&(n=Ua(n,x)),a[r]=n}return a}function Bc(e,x,t,a,r,n,s,u,c,f){const l=o;this[l(2206)]=e,this[l(4139)]=x,this[l(1032)]=Ua(t),this._stopObject=Ua(a),this[l(480)]=r,this[l(2124)]=n,this[l(2403)]=s,this._update=u,this._complete=c,this[l(3931)]=f,this[l(4091)]=!0,this[l(3225)]=function(){this[l(2206)].remove(this)}}function Ih(e){const x=o;let t=e.vertexCountWithoutSkirts,a=[],r=e[x(2485)];for(let s=0;s<t;++s){let u=new Cesium[x(516)];e.encoding.decodePosition(r,s,u),a[x(2583)](u)}e.boundingSphere3D=Cesium[x(1475)].fromPoints(a);let n=Cesium[x(2879)].fromCartesianArray(a);return e[x(1195)]=n,e.orientedBoundingBox=Cesium[x(874)][x(2199)](n,e.minimumHeight,e[x(1951)],Cesium[x(2024)][x(2760)]),e}Cesium[o(2939)][o(3096)][o(1760)]=function(e,x,t){const a=o;x=x||{};let r=e[a(3019)](a(1608));if(r===-1)return Promise.reject(!1);let n=e[a(2629)](0,r+14),s=this;return pe(P0.CREDENTIAL)&&(pe(P0[a(3260)]._keymap[e])||(e=P0[a(955)](e))),new Promise((u,c)=>{const f=a;Ph(n,x[f(697)])[f(4167)](l=>{const m=f;x[m(2547)]=e,x[m(716)]=s.context,x.rss=l,x[m(3185)]=s[m(1986)];let h=new $0(x);Va.add(h),Va[m(1729)]=s,s[m(4149)]=Va,s[m(2572)][m(1050)](h,t),s[m(716)].reflectFramebuffer||(s[m(716)][m(714)]=new j2(s.context),s._renderTargets&&s[m(3897)].set(m(679),s[m(716)][m(714)])),h[m(3484)].then(()=>{u(h)})},l=>{c(l)})})},Cesium.Scene[o(3096)].hookPickFunc=Cesium.Scene[o(3096)][o(3869)],Cesium[o(2939)][o(3096)][o(3869)]=function(e,x,t){const a=o;let r=this[a(1423)](e,x,t);if(r){if(r[a(1054)]&&r[a(1054)]instanceof $0){if(!r[a(1054)][a(884)])return;r.primitive.setSelection(r.id)}}else for(let n=0,s=this[a(2572)][a(3650)];n<s;n++){let u=this[a(2572)].get(n);u instanceof $0&&u.releaseSelection()}return r},Cesium.Scene[o(3096)][o(3750)]=Cesium[o(2939)][o(3096)][o(2733)],Cesium[o(2939)][o(3096)][o(2733)]=function(e,x,t,a){const r=o;let n=this[r(3750)](e,x,t,a),s=n[0]&&n[0][r(1054)]&&n[0].primitive instanceof $0,u=[],c=Object[r(1693)](null);if(s){for(;n&&Cesium.defined(n[0]);){let f=n[0];if(u[r(2583)](f),f[r(1054)]instanceof $0){f.primitive[r(560)]([f.id],!1);let l=f[r(1054)].id;(c[l]=c[l]||{})[r(1826)]=f[r(1054)],(c[l][r(1157)]=c[l][r(1157)]||[]).push(f.id)}n=this.hookDrillPickFunc(e,x,t,a)}for(let f in c){let l=c[f];l[r(1826)][r(560)](l[r(1157)],!0)}return u}return n},Cesium[o(2093)].prototype.hookUpdateFunc=Cesium.PrimitiveCollection[o(3096)].update,Cesium[o(2093)][o(3096)][o(2696)]=function(e){const x=o;this.hookUpdateFunc(e),Va[x(2836)](e)},Cesium[o(3489)][o(3096)].hookAddImageryProviderFunc=Cesium[o(3489)][o(3096)].addImageryProvider,Cesium[o(3489)][o(3096)].addImageryProvider=function(e,x){const t=o;return e&&!e[t(2266)]&&e[t(3484)]?e.readyPromise[t(4167)](()=>this.hookAddImageryProviderFunc(e,x)):this[t(3180)](e,x)},Cesium[o(2943)][o(3096)][o(800)]=Cesium.SkyAtmosphere.prototype[o(2696)],Cesium[o(2943)].prototype.update=function(e,x){const t=o;let a=this[t(800)](e,x);return a&&e[t(3907)][t(1696)]&&(this[t(1459)]||(this[t(1459)]=Cesium[t(3154)][t(4073)]({cull:{enabled:!0,face:Cesium[t(3358)].BACK},blending:Cesium[t(2147)][t(2672)],depthMask:!1})),a[t(2256)]=this[t(1459)]),a},Cesium[o(3206)].prototype[o(3287)]=function(e){const x=o;let t=e[x(1747)],a=e[x(943)];e.bReflect?(Cesium.Matrix4.multiply(t,e[x(2617)],Je),Cesium[x(2235)].inverseTransformation(Je,yc),gc(this,Je),Tc(this,yc)):(gc(this,t),Tc(this,a)),wh(this,e),this[x(515)].x=e.frustum[x(4072)],this[x(515)].y=e.frustum[x(3402)],this[x(1035)](e[x(2703)]),this[x(4034)]=this[x(1986)]!==Cesium[x(442)][x(1794)]&&e.frustum instanceof Cesium[x(3904)]},Cesium[o(3206)].prototype.updateFrustum=function(e){const x=o;let t=e[x(1180)];Cesium[x(2235)].clone(t,Je),Sh(e,Je),Mh(this,Je),Cesium[x(692)](e[x(2386)])&&Rh(this,e[x(2386)]),this._currentFrustum.x=e[x(4072)],this._currentFrustum.y=e[x(3402)],this[x(464)]=e[x(3402)]-e[x(4072)]+1,this._log2FarDepthFromNearPlusOne=Cesium[x(2746)].log2(this[x(464)]),this[x(2255)]=1/this[x(2187)],Cesium[x(692)](e[x(1413)])&&(e=e[x(1413)]),this[x(895)].x=e[x(3981)],this._frustumPlanes.y=e[x(542)],this[x(895)].z=e.left,this[x(895)].w=e[x(614)]},Cesium[o(3622)][o(3096)][o(2696)]=function(e){const x=o;var t=this._tweens,a=0;for(e=Cesium[x(692)](e)?e/.001:Dh();a<t.length;){var r=t[a],n=r[x(4139)];r[x(4091)]?(r.needsStart=!1,n[x(1862)](e)):n[x(2696)](e)?a++:(n[x(2730)](),t.splice(a,1))}},Cesium.TweenCollection[o(3096)].add=function(e){const x=o;if(e=Cesium[x(820)](e,Cesium[x(820)][x(1897)]),!Cesium.defined(e[x(4029)])||!Cesium[x(692)](e.stopObject))throw new Cesium[x(1785)](x(4009));if(!Cesium[x(692)](e[x(1555)])||e[x(1555)]<0)throw new Cesium[x(1785)](x(2110));if(e[x(1555)]===0)return Cesium[x(692)](e[x(695)])&&e[x(695)](),new Bc(this);var t=e.duration/.001,a=Cesium.defaultValue(e[x(484)],0),r=a/.001,n=Cesium[x(820)](e[x(3752)],Cesium[x(713)][x(2373)]),s=e[x(4029)],u=new ie.Tween(s);u.to(Ua(e[x(3747)]),t),u.delay(r),u[x(1674)](n),Cesium[x(692)](e.update)&&u[x(2037)](function(){e[x(2696)](s)}),u[x(4026)](Cesium.defaultValue(e[x(695)],null)),u[x(854)](Cesium[x(820)](e[x(3442)],0));var c=new Bc(this,u,e[x(4029)],e.stopObject,e.duration,a,n,e[x(2696)],e[x(695)],e[x(3931)]);return this[x(2206)][x(2583)](c),c},Cesium[o(3622)][o(3096)].remove=function(e){const x=o;if(!Cesium[x(692)](e))return!1;var t=this[x(2206)][x(3019)](e);return t!==-1&&(e[x(4139)].stop(),Cesium[x(692)](e[x(3931)])&&e[x(3931)](),this[x(2206)][x(1805)](t,1),!0)},Cesium[o(3627)].prototype[o(492)]=Cesium[o(3627)][o(3096)][o(2640)],Cesium[o(3627)][o(3096)][o(2640)]=function(e,x,t){const a=o;return e[a(2625)].url[a(3019)]("/rest/realspace/")!==-1&&(e[a(2547)]=e[a(2547)][a(960)](a(1148),a(2522)),this[a(482)]=!0),this[a(492)](e,x,t)},Cesium[o(801)][o(3096)][o(1982)]=Cesium[o(801)][o(3096)].requestContent,Cesium[o(801)].prototype[o(2850)]=function(){const e=o;return this._tileset[e(482)]&&(this._contentResource[e(2547)]=this[e(2941)][e(2547)].replace(/\+/g,"%2B")),this.hookRequestContentFunc()},Cesium.computeFlyToLocationForRectangle[o(2664)]=Cesium.computeFlyToLocationForRectangle[o(2637)],Cesium[o(487)][o(2637)]=function(e,x){const t=o;return Cesium[t(487)][t(2664)](e,x).then(a=>{const r=t;let n=a;return n.map(s=>{const u=C0;s.height==null&&(s[u(2388)]=0)}),Promise[r(1599)](n)})},Cesium[o(3362)].prototype[o(1666)]=Cesium[o(3362)][o(3096)][o(2804)],Cesium[o(3362)][o(3096)].createMesh=function(...e){var t;const x=o;return(t=this.hookCreateMesh(...e))==null?void 0:t[x(4167)](a=>Ih(a))};var Lh={};const Fh={NONE:0,CATMULL_ROM:1};var Ec=Object[o(921)](Fh);const Oh={StopPause:o(1778),StopAround:o(2205)};var w2=Object[o(921)](Oh);const q2=Cesium.defaultValue;function Ze(e){const x=o;this[x(480)]=q2(e.duration,10),this._waitTime=q2(e[x(2231)],0),this[x(518)]=e[x(3234)],this[x(850)]=q2(e[x(1425)],0),this[x(2453)]=q2(e[x(2140)],0),this._stopName=e.stopName,this[x(600)]=q2(e[x(3216)],0),this._stopPlayMode=e[x(489)]||w2[x(1778)],this[x(1807)]=q2(e[x(994)],0),this[x(3195)]=void 0,this[x(2651)]=q2(e.index,0),this[x(1048)]=void 0,this._preStopIndex=void 0,this[x(547)]=q2(e[x(1412)],!0)}Object[o(2040)](Ze[o(3096)],{duration:{get:function(){return this._duration},set:function(e){e&&(this._duration=e)}},waitTime:{get:function(){return this._waitTime},set:function(e){const x=o;e&&!this[x(2876)]&&(this[x(2160)]=e)}},heading:{get:function(){return this[o(850)]},set:function(e){e&&(this._heading=e)}},tilt:{get:function(){return this[o(2453)]},set:function(e){const x=o;e&&(this[x(2453)]=e)}},stopName:{get:function(){return this[o(3721)]},set:function(e){const x=o;e&&(this[x(3721)]=e)}},point:{get:function(){return this[o(518)]},set:function(e){const x=o;this[x(518)]=e}},speed:{get:function(){return this[o(600)]},set:function(e){e&&(this._speed=e)}},stopPlayMode:{get:function(){return this._stopPlayMode},set:function(e){const x=o;e&&(this[x(1298)]=e)}},surroundDuration:{get:function(){return this[o(1807)]},set:function(e){const x=o;e&&(this[x(1807)]=e)}},index:{get:function(){return this[o(2651)]}},promise:{get:function(){return this[o(3195)]},set:function(e){const x=o;e&&(this[x(3195)]=e)}}});const Nh={Smoothly:0,Directly:1};var vr=Object[o(921)](Nh);const Pc=Cesium[o(1785)],Vh=Cesium[o(713)],s2=Cesium[o(692)],Ar=Cesium[o(820)],Uh=Cesium[o(516)],Mx={Playing:0,Pause:1,Stop:2,Wait:3};function bt(e){const x=o,t=e[x(1729)],a=e[x(2690)];if(!t)throw new Pc(x(1334));if(!a)throw new Pc("routes is required!");this[x(1809)]=a,this[x(1687)]=t,this[x(3916)]=0,this._dynamicCurrentStopIndex=0,this[x(2513)]=void 0,this[x(2504)]=new Cesium.Event,this[x(1532)]=1,this[x(3477)]=Mx[x(3885)],this._turningMode=vr[x(1472)],this._interpolationMode=Ec[x(1208)]}function S2(e,x,t){const a=o;e[a(3477)]=Mx[a(3392)];const r=e[a(1687)][a(3907)],n=e._routes[a(2690)][0],s=n[a(3667)],u=e[a(1868)],c=n.isFlyLoop,f=n[a(3137)],l=n.isTiltFree,m=n[a(1583)],h=Ar(n._stopCollection.get(x),n._stopCollection._array[x]);if(!h)return c===!0?(x=n[a(764)]._array[0][a(3220)],s2(s)&&(s[a(3886)]=0),e._dynamicCurrentStopIndex=x,e.currentStopIndex=x,void S2(e,x)):void(e[a(3477)]=Mx[a(3885)]);if(x===e[a(3888)]){const C=s2(h.direction)&&!l?{direction:h[a(3249)],up:h.up}:{heading:h.heading,pitch:h[a(2140)],roll:0};r.setView({destination:h[a(3234)],orientation:C,convert:h[a(547)]}),x++,S2(e,x)}else{if(h[a(3847)]){const b=s2(h[a(3249)])&&!l?{direction:h[a(3249)],up:h.up}:{heading:h[a(1425)],pitch:h[a(2140)],roll:0};return r[a(3670)]({destination:h.point,orientation:b,convert:h[a(547)]}),void wc(e,h,x)}const C=Ar(n[a(764)][a(3715)](x-1),n[a(764)][a(3715)](h[a(799)]));s2(t)&&(C=t);const p=C.altitude<h.altitude?C.altitude:h[a(2094)];let _;if(C[a(489)]===w2[a(2205)])_=C.surroundDuration;else{if(s2(t)){const b=Uh[a(4114)](t[a(3234)],h.point);C[a(1555)]=b/C[a(3216)]}_=C[a(1555)]}_/=e[a(1532)];const y=s2(h[a(3249)])&&!l?{direction:h[a(3249)],up:h.up}:{heading:h[a(1425)],pitch:h[a(2140)],roll:0},A=!1;e._turningMode===vr.Directly&&s2(C[a(3249)])&&(C.direction,C.up,A=!0),r[a(2025)]({convert:h[a(547)],destination:h.point,orientation:y,maximumHeight:p,duration:_,headingFree:f,pitchFree:l,altitudeFree:m,directTurning:A,catmullRomSpline:s,preStopIndex:x-1,interpolationMode:u,easingFunction:Vh[a(2373)],complete:function(){wc(e,h,x)}})}}let yr;function wc(e,x,t){const a=o;if(yr&&clearTimeout(yr),e[a(3540)]=x[a(2651)],t=Ar(x[a(1048)],x[a(2651)]+1),e[a(2504)][a(2323)](x),x[a(3316)])x.promise.then(function(){let n=x[a(2231)];n>0?setTimeout(function(){S2(e,t)},1e3*n):S2(e,t)});else{let r=x[a(2231)];r>0?(e[a(3477)]=Mx.Wait,yr=setTimeout(function(){const n=a;e[n(3477)]===Mx[n(477)]&&(e[n(3477)]=Mx.Playing,S2(e,t))},1e3*r)):S2(e,t)}}function Gh(e,x){const t=o,a=x.clone();let r=e[t(3552)]();r=Cesium.Cartesian3[t(1586)](r,r),Math[t(905)](Cesium[t(516)][t(2528)](r,a))>=1&&(r=Math.abs(Cesium[t(516)][t(2528)](a,Cesium[t(516)][t(1507)]))<1?Cesium[t(516)][t(3552)](Cesium.Cartesian3.UNIT_Y,r):Cesium[t(516)][t(3552)](Cesium[t(516)].UNIT_Z,r));let n=new Cesium[t(516)];return Cesium[t(516)][t(2550)](r,a,n),n=Cesium[t(516)].normalize(n,n),Cesium.Cartesian3.cross(a,n,r),r=Cesium[t(516)][t(1586)](r,r),r}Object[o(2040)](bt.prototype,{routes:{get:function(){return this[o(1809)]},set:function(e){e&&(this._routes=e)}},stopArrived:{get:function(){return this[o(2504)]}},currentStopIndex:{get:function(){const e=o,x=this[e(1809)][e(2690)][0][e(764)][e(3715)](this[e(3916)]);return s2(x)||(this[e(3540)]=this[e(3916)]=this[e(1809)][e(2690)][0][e(764)][e(3187)][0][e(3220)]),this[e(3916)]},set:function(e){const x=o;if(s2(e)&&this._routes[x(2266)]==1){const t=this[x(1809)][x(2690)][0].stopCollection[x(3650)]-1;e=(e=e>t?t:e)<0?0:e,this[x(3916)]=e}}},currentRoute:{get:function(){const e=o;if(this[e(1809)][e(2266)])return this[e(1809)][e(2690)][0]}},readyPromise:{get:function(){const e=o;return this[e(1809)][e(3484)]}},playRate:{get:function(){return this[o(1532)]},set:function(e){const x=o;if(e&&e!==0&&this[x(1532)]!==e&&(this[x(1532)]=e,this[x(3477)]===Mx.Playing)){this[x(1687)][x(3907)][x(3790)]();const t=this[x(1809)][x(2690)][0][x(3715)](this[x(3540)]),a=new Ze({});for(let r in t)a[r]=t[r];a[x(3234)]=this[x(1687)][x(3907)]._position,S2(this,this._dynamicCurrentStopIndex+1,a)}}},turningMode:{get:function(){return this[o(2165)]},set:function(e){const x=o;this[x(2165)]=e}},interpolationMode:{get:function(){return this[o(1868)]},set:function(e){const x=o;this[x(1868)]=e}}}),bt[o(3096)][o(3585)]=function(){const e=o;if(this[e(514)]&&this[e(3477)]!==Mx[e(3392)])if(this[e(3477)]===Mx[e(4064)]||this[e(3477)]===Mx[e(477)])this[e(2513)]&&this[e(1687)][e(3907)][e(3880)]?(this._currentTween[e(4139)][e(778)](),this[e(3477)]=Mx.Playing):S2(this,this._dynamicCurrentStopIndex+1);else{if(this.currentStopIndex>=this._routes.routes[0][e(2452)][this[e(1809)][e(2690)][0][e(2452)][e(3650)]-1].index)return void(this[e(3477)]=Mx[e(3885)]);S2(this,this[e(3888)])}},bt[o(3096)].pause=function(){const e=o;this[e(3477)]===Mx[e(3392)]?(this._currentTween=this[e(1687)].camera._currentFlight,this[e(2513)]&&this[e(2513)][e(4139)]&&this[e(2513)][e(4139)][e(3759)](),this[e(3477)]=Mx[e(4064)]):this._flyStatus===Mx[e(477)]&&(this[e(3477)]=Mx[e(4064)])},bt[o(3096)].stop=function(){const e=o;this[e(2513)]=this._scene.tweens.get(0),this[e(2513)]&&this[e(3477)]!==Mx[e(3885)]?(this[e(2513)][e(3225)](),this[e(3477)]=Mx.Stop,this[e(2513)]=void 0):this._flyStatus===Mx[e(477)]&&(this[e(3477)]=Mx.Stop),this[e(3540)]=this[e(3916)]},bt[o(3096)].viewToStop=function(e){const x=o;if(e&&this._flyStatus!==Mx[x(3392)]){const t=this[x(1687)][x(3907)],a=s2(e.direction)?{direction:e[x(3249)],up:e.up}:{heading:e.heading,pitch:e[x(2140)],roll:0};t.setView({destination:e[x(3234)],orientation:a,convert:e[x(547)]}),this[x(3540)]=e.index}},bt[o(3096)][o(657)]=function(){const e=o;return this[e(514)]?this[e(514)][e(2452)]:[]};const Ga=Cesium[o(1785)],wi=Cesium[o(516)],Qe=Cesium[o(820)],ae=Cesium.defined,c2=Cesium[o(2746)],Sc=Cesium[o(1755)],Hh=Cesium[o(2902)];function $e(e){const x=o;e=e||{},this[x(764)]=new Hh,this[x(2610)]=Qe(e[x(1081)],!1),this._stopMarkCollection=[],this._isFlyLoop=Qe(e.isFlyLoop,!1),this[x(682)]=Qe(e[x(2945)],!1),this[x(879)]=void 0,this[x(1368)]=Qe(e[x(3346)],""),this[x(600)]=Qe(e[x(3216)],50),this._isAlongline=Qe(e[x(2968)],!1),this[x(2828)]=Qe(e[x(3704)],0),this._isHeadingFree=!this._isAlongline&&Qe(e.isHeadingFree,!1),this[x(2711)]=Qe(e[x(923)],!1),this[x(1703)]=Qe(e[x(1583)],!1),this._entityCollection=e[x(1430)],this[x(3667)]=void 0,this[x(2829)]=!1,this[x(2145)]=Qe(e.stopsInfo,{}),this._removeIndex=[],this[x(624)]=[]}Object[o(2040)]($e.prototype,{stopCollection:{get:function(){const e=o;return this[e(764)][e(2496)]}},isStopVisible:{get:function(){return this[o(2610)]},set:function(e){const x=o;ae(e)&&e!==this[x(2610)]&&(this[x(2610)]=e,this[x(2918)]())}},isFlyLoop:{get:function(){return this[o(1408)]},set:function(e){const x=o;e&&(this[x(1408)]=e)}},isLineVisible:{get:function(){return this._isLineVisible},set:function(e){ae(e)&&e!==this._isLineVisible&&(this._isLineVisible=e,this.setLineVisible())}},lineEntity:{get:function(){return this[o(879)]},set:function(e){ae(e)&&(this._lineEntity=e)}},routeName:{get:function(){return this[o(1368)]},set:function(e){const x=o;e&&(this[x(1368)]=e)}},speed:{get:function(){return this[o(600)]},set:function(e){const x=o;if(e&&e!=this[x(600)]){this[x(600)]=e;let t=this.speed,a=this[x(2452)];for(let r=0,n=a[x(3650)];r<n-1;r++){let s=a[r];s[x(1555)]=Math[x(2892)](s[x(1557)]/t)}}}},stopCount:{get:function(){const e=o;return this._stopCollection[e(3650)]}},isAlongline:{get:function(){return this[o(2317)]},set:function(e){const x=o;ae(e)&&(this[x(2317)]=e)}},totalDuration:{get:function(){return this._totalDuration}},isHeadingFree:{get:function(){return this[o(3388)]},set:function(e){const x=o;ae(e)&&(this[x(3388)]=e)}},isTiltFree:{get:function(){return this[o(2711)]},set:function(e){const x=o;ae(e)&&(this[x(2711)]=e)}},isAltitudeFree:{get:function(){return this[o(1703)]},set:function(e){const x=o;ae(e)&&(this[x(1703)]=e)}}}),$e[o(3096)][o(1739)]=function(){const e=o;let x=0,t=[0],a=[],r=this._stopsInfo[e(3376)];const n=this[e(2145)][e(1145)];r=ae(r)?r[e(2263)](this[e(624)]):this[e(624)];for(let s=0;s<r.length;s++){if(this[e(1230)][e(3019)](s)>-1)continue;let u,c,f,l=r[s];if(l instanceof Ze)u=l;else{let m=J.queryFirstNode(l,e(3907),n);const h=J[e(1980)](m,e(1454),n),C=J[e(1980)](m,"latitude",n),p=J.queryNumericValue(m,e(2094),n);let _=J.queryNumericValue(m,e(1425),n);_=c2[e(3629)](_);let y=J[e(1980)](m,e(2140),n);y=c2[e(3629)](y-90),this._isAlongline&&!this[e(2711)]&&(y=0),J[e(987)](m,"altitudeMode",n);const A=J[e(2983)](l,e(3085)),b=J[e(750)](l,e(3216),n),B=J.queryFirstNode(l,e(3827),n);f=J[e(987)](B,e(489),n);const T=J.queryNumericValue(B,"pauseTime",n);let M;J[e(1980)](B,"angularSpeed",n),J.queryFirstNode(B,"stopViews",n);let w=!0;h>180||C>180?(M=new wi(h,C,p),w=!1):M=wi.fromDegrees(h,C,p),a[e(2583)](M);let I=this[e(2520)];if(s>0&&I>0&&(c=this._stopCollection._array[this[e(764)][e(3650)]-1],c[e(489)]!=w2[e(2205)])){const P=c[e(3234)],V=wi[e(4114)](P,M);c[e(1557)]=V;let q,X=c[e(3216)];q=0<X?X:this[e(600)],c[e(1555)]=V/q,c[e(3216)]=q,x+=c[e(1555)],t[e(2583)](x)}u=new Ze({index:s,point:M,heading:_,tilt:y,stopName:A,waitTime:T,speed:b,isConvert:w}),u[e(2094)]=p}if(this[e(465)](u),ae(c)&&(c._nextStopIndex=s,u[e(799)]=c[e(3220)]),f===w2[e(2205)]&&stopsViesNode){const m=queryChildNodes(stopsViesNode,e(2652),n);if(m[e(3650)]==2){const h=m[0],C=m[1],p=J[e(750)](h,e(1425),n),_=J[e(750)](C,"heading",n);J[e(750)](h,e(2140),n),J.queryNumericAttribute(C,"tilt",n),J.queryNumericAttribute(h,e(2094),n),J[e(750)](C,e(2094),n);const y=J[e(2983)](h,e(3249),n);J[e(2983)](C,e(3249),n);let A,b=y==="Clockwise"?1:-1;c2.equalsEpsilon(p,_,c2[e(504)])?A=360:(A=_-p,A<0&&y==="Clockwise"?A+=360:A>0&&e(742)!==y&&(A=360-A),A=Math.abs(A));const B=A/angularSpeed;u.surroundDuration=B/3,u[e(489)]=w2[e(2205)];const T=c2[e(3629)](p),M=c2[e(3629)](p+b*A/3),w=c2.toRadians(p+b*A*2/3),I=c2[e(3629)](_),P=new Ze({point,heading:T,tilt,stopName,waitTime,speed:stopSpeed,surroundDuration:B/3,stopPlayMode:w2[e(2205)]});P[e(3847)]=!0,P._isGenerated=!0,this._addStop(P);let V=new Ze({point,heading:M,tilt,stopName,waitTime:0,speed:stopSpeed,surroundDuration:B/3,stopPlayMode:w2[e(2205)]});V[e(2876)]=!0,this._addStop(V);let q=new Ze({point,heading:w,tilt,stopName,waitTime:0,speed:stopSpeed,surroundDuration:B/3,stopPlayMode:w2.StopAround});q[e(2876)]=!0,this[e(465)](q);let X=new Ze({point,heading:I,tilt,stopName,waitTime,speed:stopSpeed});this._addStop(X),x+=B}}}if(this[e(2317)]){for(let s=0;s<this.stopCount-1;s++){let u=this[e(2452)][s];const c=this[e(2452)][s+1],f=new wi(c[e(3234)].x-u[e(3234)].x,c.point.y-u[e(3234)].y,c.point.z-u[e(3234)].z);wi[e(1586)](f,f),u[e(3249)]=f,u.up=Gh(u[e(3234)],f),this[e(2711)]&&(u[e(1425)]=Sc[e(1669)](u[e(3249)],u.up)-c2.PI)}if(this.stopCount>2){let s=this[e(2452)][this[e(2452)][e(3650)]-1];const u=this.stopCollection[this[e(2452)][e(3650)]-2];s[e(3249)]=u[e(3249)],s.up=u.up,this[e(2711)]&&(s[e(1425)]=Sc[e(1669)](s[e(3249)],s.up)-c2.PI)}}a[e(3650)]>=2&&(this[e(3667)]=new Cesium[e(3744)]({times:t,points:a})),this[e(2918)](),this[e(2828)]=x},$e[o(3096)]._addStop=function(e){const x=o;if(!e)throw new Ga(x(4120));if(!(e instanceof Ze))throw new Ga("parameter stop must be instanceof RouteStop!");if(this[x(764)].set(e[x(3220)],e),ae(this._entityCollection)&&this[x(2610)]){const t=this[x(1205)][x(1050)]({position:e[x(3234)],billboard:{image:Qx(x(2064)),scale:.5}});this[x(2994)][x(2583)](t)}if(this[x(2829)]&&this[x(764)].length>2)if(ae(this[x(3667)])){const t=[][x(2263)](this[x(3667)].times);let a=[].concat(this[x(3667)][x(3214)]),r=this[x(764)][x(3650)]>0?this[x(764)]._array[this[x(764)].length-2][x(480)]:0,n=t[x(3650)]>0?t[t[x(3650)]-1]:0;t[x(2583)](n+r),a.push(e.point),this[x(3667)]=new Cesium[x(3744)]({times:t,points:a})}else{let t=[0],a=[this[x(764)][x(3187)][0][x(3234)]],r=0;for(let n=1;n<this[x(764)][x(3650)];n++){let s=this[x(764)][x(3187)][n],u=this[x(764)][x(3187)][n-1];a.push(s[x(3234)]),r+=u[x(1555)],t.push(r)}this[x(3667)]=new CatmullRomSpline({times:t,points:a})}return!0},$e.prototype.addStop=function(e){const x=o;if(!e)throw new Ga("parameter stop is required!");if(!(e instanceof Ze))throw new Ga(x(1550));e[x(799)]=this[x(2145)][x(3376)][x(3650)]+this[x(624)][x(3650)]-1,e[x(2651)]=e._preStopIndex+1,this[x(624)][x(2583)](e),this[x(2748)](),this[x(1739)](),this[x(4145)]()},$e.prototype[o(2036)]=function(e){const x=o;this[x(2748)](),this[x(1230)][x(3019)](e[x(3220)])===-1&&this._removeIndex[x(2583)](e[x(3220)]),this[x(1739)](),this[x(4145)]()},$e[o(3096)][o(4145)]=function(){const e=o;if(ae(this[e(1205)])){if(!ae(this[e(879)])){let x=this.stopCollection,t=x[e(3650)],a=[];for(;t--;)a[e(2583)](x[t][e(3234)]);this[e(879)]=this[e(1205)][e(1050)]({name:this[e(3346)],polyline:{positions:a,width:5}})}this[e(879)][e(1962)]=this[e(682)]}},$e[o(3096)].setStopVisible=function(){const e=o;if(ae(this[e(1205)])){if(this[e(2994)][e(3650)]===0&&this[e(2610)]){const x=this.stopCollection;let t=x[e(3650)];for(;t--;){const a=x[t];let r=this[e(1205)][e(1050)]({position:a[e(3234)],billboard:{image:Qx("Assets/Textures/grepin.png"),scale:.5}});this._stopMarkCollection[e(2583)](r)}}for(let x=0,t=this[e(2994)][e(3650)];x<t;x++)this[e(2994)][x][e(1962)]=this[e(2610)]}},$e[o(3096)][o(3715)]=function(e){const x=o;return this[x(764)][x(3715)](e)===void 0?this[x(2452)][e]:this[x(764)][x(3715)](e)},$e.prototype[o(2748)]=function(){const e=o;this._isCleared=!0;for(let x=0;x<this[e(2994)][e(3650)];x++)this._entityCollection.remove(this._stopMarkCollection[x]);ae(this[e(879)])&&(this[e(1205)][e(1578)](this[e(879)]),this[e(879)]=void 0),this[e(764)][e(1470)](),ae(this[e(3667)])&&(this._catmullRomSpline=void 0)},Cesium.Cartesian3;const Mc=Cesium[o(1785)],Zt=Cesium[o(692)];function Qt(e){const x=o;this[x(1205)]=e,this._routes=[],this[x(1484)]=!1,this[x(1506)]=a2()}function Rc(e,x){const t=o,a=e,r=x[t(2246)],n=r[t(1880)],s=Dc(r,t(1678),n);for(let u=0,c=s[t(3650)];u<c;u++){const f=s[u],l=Dc(f,t(1224),n),m=zh(f,"speed"),h=Kh(f,"name"),C=pt(f,t(3495)),p=pt(f,t(2673)),_=pt(f,t(2117)),y=pt(f,t(1284)),A=pt(f,"headingfree"),b=pt(f,"tiltfree"),B=pt(f,t(512)),T=new $e({entityCollection:a[t(1205)],routeName:h,speed:m,isLineVisible:p,isFlyLoop:_,isStopVisible:C,isAlongline:y,isHeadingFree:A,isTiltFree:b,isAltitudeFree:B,stopsInfo:{stopNodes:l,namespace:n}});T[t(1739)](),a[t(3459)](T),a[t(1484)]=!0}a[t(1506)].resolve()}function zh(e,x){const t=o;if(!Zt(e))return;let a=e[t(1292)](x);if(a!==null){const r=parseFloat(a);return isNaN(r)?void 0:r}}function Kh(e,x){const t=o;if(!Zt(e))return;let a=e[t(1292)](x);return a!==null?a:void 0}function pt(e,x){const t=o;if(!Zt(e))return;let a=e[t(1292)](x);return a=a[t(3193)](),t(3578)!==a&&(t(1044)===a||void 0)}function Dc(e,x,t){const a=o;if(!Zt(e))return[];let r=[],n=e[a(1202)],s=n[a(3650)];for(let u=0;u<s;u++){let c=n[u];c[a(2606)]===x&&t[a(3019)](c[a(1880)])!==-1&&r[a(2583)](c)}return r}Object[o(2040)](Qt[o(3096)],{routes:{get:function(){return this[o(1809)]}},ready:{get:function(){return this[o(1484)]}},readyPromise:{get:function(){const e=o;return this[e(1506)][e(3316)]}}}),Qt.prototype[o(3459)]=function(e){const x=o;if(e&&(this[x(1809)][x(2583)](e),e[x(2945)]&&Zt(this[x(1205)]))){const t=e[x(2452)];let a=t[x(3650)],r=[];for(;a--;)r[x(2583)](t[a][x(3234)]);e[x(1763)]=this._entityCollection[x(1050)]({name:e[x(3346)],polyline:{positions:r,width:5}})}},Qt.prototype[o(3715)]=function(e){return this[o(1809)][e]},Qt[o(3096)][o(3066)]=function(e){const x=o,t=this;Promise[x(1599)](e)[x(4167)](a=>Cesium.Resource[x(1554)](a)[x(1312)]())[x(4167)](a=>{Rc(t,a)})},Qt[o(3096)][o(3343)]=function(e){const x=o;if(!Zt(e))throw new Mc(x(1354));const t=new DOMParser()[x(2658)](e,x(2952));try{Rc(this,t)}catch(a){throw new Mc(a)}};const kh={Space:0,Ground:1,S3mModel:2,Raster:3};var Px=Object[o(921)](kh);const Wh={Point:0,Line:1,Polygon:2};var u2=Object[o(921)](Wh);let Si=function(e,x,t){const a=o;if(!e||x===void 0)throw new Cesium[a(1785)](a(3072));this[a(891)]=new Cesium.ScreenSpaceEventHandler(e[a(1729)][a(472)]),this[a(2366)]=e,this[a(443)]=x,this._clampMode=Cesium[a(820)](t,Px[a(4078)]),this[a(3852)]=!1,this[a(908)]=!1,this[a(2080)]=new Cesium[a(3572)],this._activeEvt=new Cesium.Event,this[a(3570)]=new Cesium[a(3572)],this[a(1218)]=void 0,this[a(3053)]=void 0,this.polygon=void 0,this[a(3214)]=void 0,this[a(3234)]=void 0};function Xh(e,x){const t=o;let a=x;if(a&&a.active){let r=a.viewer.scene;if(!r.pickPositionSupported)return void console[t(3240)]("your browser not supported pickPosition!");let n=r[t(2574)](e.position);if(n)if(a[t(3852)]){let s=new Cesium[t(2351)](e[t(3009)].x,e[t(3009)].y);switch(a[t(443)]){case u2[t(3779)]:Ic(s,a,!0);break;case u2[t(3575)]:Lc(s,a,!0)}}else switch(a[t(3852)]=!0,a.mode){case u2.Point:jh(n,a);break;case u2[t(3779)]:qh(n,a);break;case u2[t(3575)]:Yh(n,a)}}}function jh(e,x){const t=o;let a=x;a.points?a[t(3234)].position=e:(a.points=new Cesium[t(2666)],a[t(3234)]=a[t(3214)][t(1050)]({position:e,pixelSize:10,color:Cesium[t(1911)][t(2491)]}),a[t(2366)][t(1729)][t(2572)][t(1050)](a[t(3214)])),a[t(760)](),a[t(2757)][t(2323)]({object:a.point})}function qh(e,x){const t=o;let a=x;a[t(1218)]?(a[t(3053)][t(1962)]=!0,a.polyline[t(4008)]=[e,e]):(a[t(1218)]=new Cesium[t(3709)],a[t(3053)]=a[t(1218)][t(1050)]({width:2,positions:[e,e],material:Cesium[t(1607)][t(1957)](Cesium[t(1607)][t(3224)],{color:Cesium[t(1911)][t(2517)](t(3488))})}),a[t(2366)][t(1729)][t(2572)][t(1050)](a[t(1218)]))}function Yh(e,x){const t=o;let a=x;a[t(1218)]?(a[t(3053)][t(1962)]=!0,a[t(3053)][t(4008)]=[e,e],a[t(3756)]&&(a[t(3756)][t(1962)]=!1)):(a.polylines=new Cesium[t(3709)],a.polyline=a.polylines[t(1050)]({id:t(938)+Math[t(3517)](),width:2,positions:[e,e],material:Cesium[t(1607)][t(1957)](Cesium[t(1607)][t(3224)],{color:Cesium[t(1911)][t(2517)](t(3488))}),loop:!0}),a.viewer[t(1729)][t(2572)][t(1050)](a.polylines))}function Jh(e,x){const t=o;let a=x;if(a&&a[t(908)]&&a.isDrawing){let r=new Cesium.Cartesian2(e[t(508)].x,e[t(508)].y);switch(a[t(443)]){case u2[t(3779)]:Ic(r,a,!1);break;case u2.Polygon:Lc(r,a,!1)}}a.movingEvt[t(2323)](new Cesium[t(2351)](e[t(508)].x,e[t(508)].y))}function Ic(e,x,t){const a=o;let r=x,n=r.viewer[a(1729)][a(2574)](e);if(!n)return;let s=r.polyline[a(4008)],u=s[a(3650)];t?s[u]=n:s[u-1]=n,r[a(3053)].positions=s}function Lc(e,x,t){const a=o;let r=x,n=r[a(2366)].scene[a(2574)](e);if(!n)return;let s=r[a(3053)].positions,u=s.length;t?s[u]=n:s[u-1]=n,r.polyline[a(4008)]=s}function Zh(e,x){const t=o;let a=x;if(a&&a.active&&a.isDrawing){if(a.deactivate(),!a[t(3053)])return;if(a[t(3053)].positions=a[t(3053)][t(4008)][t(3403)](0,a.polyline[t(4008)][t(3650)]-1),a[t(443)]===u2[t(3575)]){if(a.polyline[t(4008)].length<3)return void(a[t(3053)][t(4008)][t(3650)]=0);let r=[][t(2263)](a[t(3053)][t(4008)]);a[t(3756)]||(a[t(3756)]=a[t(2366)][t(927)][t(1050)]({polygon:{hierarchy:{positions:r},material:Cesium[t(1911)].ORANGE[t(2538)](.5),perPositionHeight:Px[t(4078)]===a._clampMode}})),a[t(3756)][t(3756)][t(2775)]=r,a[t(3756)][t(4008)]=r,a[t(3756)][t(1962)]=!0,a[t(2757)][t(2323)]({object:a.polygon})}else if(a[t(443)]===u2[t(3779)]){let r=[];for(let n=0,s=a.polyline[t(4008)][t(3650)];n<s;n++)r[t(2583)](Cesium[t(516)][t(3552)](a[t(3053)][t(4008)][n]));a[t(2465)]!==Px[t(794)]&&a[t(2465)]!==Px.Ground||(a.clampToGroundPolylines||(a[t(1464)]=[]),a[t(1464)][t(2583)](a[t(2366)].entities[t(1050)]({polyline:{positions:r,width:5,material:Cesium[t(1911)].fromCssColorString(t(3488)),clampToGround:!0}})),a.polyline[t(1962)]=!1),a[t(2757)][t(2323)]({object:a[t(3053)]})}}}Object.defineProperties(Si[o(3096)],{drawEvt:{get:function(){return this[o(2080)]}},activeEvt:{get:function(){return this[o(3496)]}}}),Si.prototype[o(3071)]=function(){const e=o;if(this[e(908)]===!0)return;this.active=!0;let x=this;this[e(891)][e(497)](function(t){Xh(t,x)},Cesium[e(1146)][e(1618)]),this.handler[e(497)](function(t){Jh(t,x)},Cesium[e(1146)][e(1537)]),this.handler[e(497)](function(t){Zh(t,x)},Cesium[e(1146)][e(617)]),this[e(3276)][e(2323)](!0)},Si[o(3096)][o(760)]=function(){const e=o;this.active=!1,this.isDrawing=!1,this.handler[e(924)](Cesium[e(1146)][e(1618)]),this.handler[e(924)](Cesium[e(1146)][e(1537)]),this[e(891)][e(924)](Cesium.ScreenSpaceEventType[e(617)]),this[e(3276)][e(2323)](!1)},Si[o(3096)][o(2748)]=function(){const e=o;this[e(760)](),this[e(1218)]&&(this[e(1218)][e(1470)](),this.viewer[e(1729)].primitives[e(1578)](this[e(1218)]),this.polylines=void 0),this[e(3756)]&&(this[e(2366)].entities.remove(this[e(3756)]),this[e(3756)]=void 0),this[e(3214)]&&(this.points.removeAll(),this[e(2366)][e(1729)].primitives.remove(this[e(3214)]),this[e(3214)]=void 0)};var Ha=o(3104),_r=o(3633),Y2=function(e,x){const t=o;if(!Cesium[t(692)](e)||!Cesium.defined(x))throw new Cesium[t(1785)](t(4187));this[t(891)]=new Cesium[t(1742)](e[t(472)]),this[t(1729)]=e,this.active=!1,this[t(2759)]=Cesium[t(1911)][t(2491)],this[t(883)]=Cesium.Color.VIOLET,this[t(1172)](x),this[t(2841)]=!1,this[t(3124)]=new Cesium[t(3572)]};function Fc(e,x){const t=o;var a=e[t(3869)](x[t(3009)]);if(Cesium[t(692)](a)&&(Cesium[t(820)](a.id,a[t(1054)].id),Cesium.defined(a[t(1054)])))return a}function Qh(e,x){const t=o;var a=x;if(a&&a[t(908)]){var r=Fc(a[t(1729)],e);if(Cesium[t(692)](r)){var n=r.id;if(!Cesium[t(692)](n))return;var s=[];if(typeof n=="string"&&(s=n[t(1830)]("_")),s[t(3650)]==2){if(s[0]===Ha)a._editPointIndex=parseInt(s[1]),a[t(2519)]=r[t(1054)],a._editPoint[t(1911)]=a[t(883)],a[t(1729)][t(4057)][t(2038)]=!1,a.scene[t(4057)][t(2479)]=!1;else if(s[0]===_r){var u=parseInt(s[1]),c=a._addPositions[u];(h=a._positions)[t(1805)](u+1,0,c);var f=a[t(2577)];Cesium.defined(f)&&(f.positions=new Cesium[t(1562)](function(){return h},!1));var l=a[t(3923)];if(Cesium[t(692)](l)){var m=new Cesium.CallbackProperty(function(){return h},!1),h=l[t(2775)][t(1349)](0);Array[t(906)](h)?l.hierarchy=m:l.hierarchy[t(4008)]=m}a[t(1458)](),a[t(1455)]()}}}else x[t(2748)]()}}function $h(e,x){const t=o;var a=x;a&&a.active&&(a[t(1838)]=-1,Cesium[t(692)](a[t(2519)])&&(a[t(2519)][t(1911)]=a[t(2759)],a[t(2519)]=void 0),a.scene._screenSpaceCameraController[t(2038)]=!0,a.scene[t(4057)][t(2479)]=!0,a[t(3124)][t(2323)](a[t(3329)]))}function x1(e,x){const t=o;var a=x;if(a&&a[t(908)]&&a[t(1838)]>-1&&a[t(1729)]._screenSpaceCameraController._aggregator[t(2435)][0]){var r,n=new Cesium.Cartesian2(e[t(508)].x,e.endPosition.y),s=a[t(2577)],u=a[t(3923)],c=!0;if(Cesium.defined(s)&&(c=s[t(3970)]),Cesium[t(692)](u)&&(c=!u.perPositionHeight),Cesium[t(692)](c)&&c[t(1256)])r=a[t(1729)][t(2574)](n);else if(a._editZ){var f=a[t(1729)][t(3907)][t(1315)](n),l=a[t(1729)][t(3907)][t(1315)](new Cesium.Cartesian2(n.x+5,n.y)),m=Cesium[t(516)][t(2550)](f[t(3249)],l[t(3249)],new Cesium.Cartesian3),h=Cesium[t(516)][t(1586)](m,new Cesium[t(516)]);if(a[t(1729)][t(443)]===Cesium.SceneMode[t(3443)]){var C=Cesium[t(2567)][t(3378)](a[t(1729)][t(3907)].positionWC,h),p=Cesium[t(1755)][t(1592)](a._editPoint[t(3009)]);p.x=.1;var _=new Cesium.Ray(p,Cesium[t(516)][t(1753)]),y=Cesium.IntersectionTests[t(3015)](_,C);Cesium.defined(y)&&(r=Cesium[t(1755)][t(3594)](y))}else C=Cesium.Plane.fromPointNormal(a.scene[t(3907)][t(3009)],h),_=new Cesium[t(1332)](Cesium.Cartesian3[t(535)],a[t(2519)][t(3009)]),r=Cesium[t(2096)][t(3015)](_,C)}else if(_=a[t(1729)].camera.getPickRay(n),a[t(1729)][t(443)]===Cesium[t(442)].COLUMBUS_VIEW){var A=Cesium[t(1755)].convertToColumbusCartesian(a[t(2519)][t(3009)]),b=Cesium[t(2567)][t(3378)](A,Cesium[t(516)][t(1753)]);y=Cesium[t(2096)][t(3015)](_,b),r=Cesium[t(1755)][t(3594)](y)}else{var B=new Cesium[t(1475)](Cesium[t(516)][t(535)],Cesium[t(516)][t(4114)](a[t(2519)].position,Cesium[t(516)][t(535)])),T=Cesium[t(2096)][t(686)](_,B);r=Cesium[t(1332)][t(3189)](_,T[t(1862)])}if(!Cesium[t(692)](r))return;a[t(2519)][t(3009)]=r;var M=a[t(3329)];M[a[t(1838)]]=r,Cesium.defined(s)&&(s.positions=new Cesium[t(1562)](function(){return M},!1)),Cesium[t(692)](u)&&(u.hierarchy=new Cesium[t(1562)](function(){return{positions:M,holes:[]}},!1)),a[t(1455)]()}}function e1(e,x){const t=o;var a=x;if(a&&a[t(908)]){var r=Fc(a[t(1729)],e);if(Cesium.defined(r)){var n=r.id;if(!Cesium.defined(n))return;var s=[];if(t(4039)==typeof n&&(s=n[t(1830)]("_")),s[t(3650)]==2&&s[0]===Ha){var u=parseInt(s[1]),c=a[t(3329)];c[t(1805)](u,1);var f=a[t(2577)];Cesium[t(692)](f)&&(f[t(4008)]=new Cesium[t(1562)](function(){return c},!1));var l=a[t(3923)];Cesium.defined(l)&&(l[t(2775)]=new Cesium[t(1562)](function(){return c},!1)),a[t(1458)](),a[t(1455)]()}}}}Object.defineProperties(Y2[o(3096)],{isEditZ:{get:function(){return this[o(2841)]},set:function(e){const x=o;this[x(2841)]=e}},changedEvt:{get:function(){return this[o(3124)]}}}),Y2[o(3096)][o(1172)]=function(e){const x=o;if(Cesium[x(692)](e[x(3923)])||Cesium[x(692)](e[x(2577)])){if(this.clear(),this[x(1083)]=e,this[x(3923)]=e._polygon,Cesium.defined(this._polygon)){var t=this[x(3923)].hierarchy.getValue(0);if(!Array[x(906)](t)){if(!Array[x(906)](t.positions))throw new Cesium[x(1785)]("positions is required!");t=t[x(4008)]}this[x(3329)]=t}this[x(2577)]=e[x(2577)],Cesium[x(692)](this[x(2577)])&&(this[x(3329)]=this[x(2577)][x(4008)][x(1349)](0)),this._editPoints=this[x(1729)][x(2572)].add(new Cesium.BillboardCollection({depthTestEnable:!1}));for(var a=0;a<this[x(3329)].length;a++)this[x(1160)][x(1050)]({id:Ha+"_"+a,position:this[x(3329)][a],image:Qx(x(1596))});for(this._editPointIndex=-1,this[x(2519)]=void 0,this._addPositions=[],this[x(3426)]=this.scene.primitives.add(new Cesium[x(2886)]({depthTestEnable:!1})),a=0;a<this[x(3329)][x(3650)]-1;a++){var r=new Cesium[x(516)];Cesium[x(516)][x(1050)](this[x(3329)][a],this[x(3329)][a+1],r),Cesium[x(516)][x(1582)](r,.5,r),this[x(946)].push(r)}for(Cesium[x(692)](this[x(3923)])&&(r=new Cesium.Cartesian3,Cesium.Cartesian3[x(1050)](this[x(3329)][0],this[x(3329)][this[x(3329)][x(3650)]-1],r),Cesium[x(516)].multiplyByScalar(r,.5,r),this[x(946)][x(2583)](r)),a=0;a<this[x(946)][x(3650)];a++)this[x(3426)][x(1050)]({id:_r+"_"+a,position:this._addPositions[a],image:Qx(x(1057))});this[x(3071)]()}},Y2[o(3096)][o(3071)]=function(){const e=o;if(this[e(908)]!=1){this[e(908)]=!0;var x=this;this.handler[e(497)](function(t){Qh(t,x)},Cesium.ScreenSpaceEventType.LEFT_DOWN),this[e(891)][e(497)](function(t){$h(t,x)},Cesium[e(1146)].LEFT_UP),this[e(891)][e(497)](function(t){x1(t,x)},Cesium[e(1146)][e(1537)]),this[e(891)][e(497)](function(t){e1(t,x)},Cesium[e(1146)][e(617)])}},Y2[o(3096)][o(760)]=function(){const e=o;this[e(908)]=!1,this.handler[e(924)](Cesium.ScreenSpaceEventType.LEFT_DOWN),this.handler[e(924)](Cesium.ScreenSpaceEventType[e(3518)]),this[e(891)][e(924)](Cesium.ScreenSpaceEventType[e(1537)]),this[e(891)].removeInputAction(Cesium[e(1146)][e(617)])},Y2[o(3096)].clear=function(){const e=o;this.deactivate(),Cesium[e(692)](this._editPoints)&&this[e(1160)][e(1470)](),Cesium.defined(this[e(1838)])&&(this[e(1838)]=-1),Cesium[e(692)](this[e(2519)])&&(this[e(2519)]=void 0),Cesium.defined(this[e(1083)])&&(this[e(1083)]=void 0),Cesium.defined(this[e(3923)])&&(this[e(3923)]=void 0),Cesium[e(692)](this[e(2577)])&&(this._polyline=void 0),Cesium[e(692)](this[e(3426)])&&this[e(3426)].removeAll(),Cesium[e(692)](this[e(946)])&&(this[e(946)][e(3650)]=0),Cesium[e(692)](this[e(3329)])&&(this[e(3329)]=void 0)},Y2.prototype.refreshReferencePoint=function(){const e=o;Cesium[e(692)](this[e(1160)])&&this[e(1160)][e(1470)](),this._editPoints=this[e(1729)][e(2572)][e(1050)](new Cesium.BillboardCollection({depthTestEnable:!1}));for(var x=0;x<this[e(3329)][e(3650)];x++)this[e(1160)][e(1050)]({id:Ha+"_"+x,position:this[e(3329)][x],image:Qx(e(1596))});Cesium[e(692)](this._editPointIndex)&&(this[e(1838)]=-1),Cesium[e(692)](this._editPoint)&&(this[e(2519)]=void 0)},Y2[o(3096)].refreshReferenceAddPoint=function(){const e=o;Cesium[e(692)](this[e(3426)])&&this[e(3426)].removeAll(),this[e(946)]=[],this[e(3426)]=this[e(1729)].primitives[e(1050)](new Cesium[e(2886)]({depthTestEnable:!1}));for(var x=0;x<this[e(3329)][e(3650)]-1;x++){var t=new Cesium[e(516)];Cesium[e(516)][e(1050)](this[e(3329)][x],this[e(3329)][x+1],t),Cesium.Cartesian3[e(1582)](t,.5,t),this._addPositions[e(2583)](t)}for(Cesium[e(692)](this._polygon)&&(t=new Cesium[e(516)],Cesium[e(516)][e(1050)](this[e(3329)][0],this[e(3329)][this[e(3329)].length-1],t),Cesium[e(516)][e(1582)](t,.5,t),this[e(946)][e(2583)](t)),x=0;x<this[e(946)][e(3650)];x++)this._addPoints[e(1050)]({position:this._addPositions[x],id:_r+"_"+x,image:Qx(e(1057))})};var t1={OCCLUDED:0,OCCLUDED_TRANSLUCENT:1,NON_OCCLUDED:2},gr=Object[o(921)](t1);const i1={Distance:0,Area:1,DVH:2};var fe=Object[o(921)](i1);function vt(e,x,t,a){const r=o;if(!e||!Cesium[r(692)](x))throw new Cesium[r(1785)]("viewer and mode is required!");this.handler=new Cesium[r(1742)](e[r(1729)][r(472)]),this[r(2366)]=e,this._clampMode=Cesium.defaultValue(t,Px.Space),this[r(443)]=x,this[r(3852)]=!1,this.active=!1,this[r(710)]=[],this[r(3485)]=void 0,this._disLabel=void 0,this[r(2405)]=void 0,this._hLabel=void 0,this._measureEvt=new Cesium.Event,this[r(3496)]=new Cesium[r(3572)],this[r(3298)]=!1,this[r(802)]=Cesium[r(1911)].fromCssColorString(r(2420)),this._labelPixelOffsetScaleByDistance=new Cesium[r(1177)](150,3,15e6,.5),this[r(521)]=new Cesium[r(2351)](15,0),this._lineColor=Cesium[r(1911)].fromCssColorString(r(3488)),this[r(2786)]=Cesium.Color[r(3267)][r(2538)](.5),this[r(2431)]=2,this[r(2914)]=void 0,this._showMeasureResult=Cesium[r(820)](a,!0),this[r(3090)]=gr[r(1282)]}function a1(e,x){const t=o;let a=x;if(a&&a[t(908)]){let r=a[t(2366)].scene[t(2574)](e[t(3009)]);if(r)if(a[t(3852)])a[t(443)]==fe[t(2472)]?a[t(760)]():o1(r,a);else switch(a[t(3852)]=!0,a[t(443)]){case fe[t(812)]:u1(r,a);break;case fe[t(1510)]:c1(r,a);break;case fe.DVH:f1(r,a)}}}function n1(e,x){const t=o;let a=x,r=a[t(2366)][t(1729)][t(2574)](e[t(508)]);if(a&&a.active&&a.isDrawing&&r)switch(a[t(443)]){case fe.Distance:l1(r,a);break;case fe[t(1510)]:s1(r,a);break;case fe[t(2472)]:d1(r,a)}}function r1(e,x){const t=o;let a=x;if(a&&a[t(908)]&&a[t(3852)]){let r;if(a[t(760)](),a[t(3053)]&&(a[t(443)]===fe[t(812)]?(a.polylines[t(1578)](a[t(3053)]),r=a[t(3386)],a.polylines.length===0&&a[t(2366)].entities[t(1578)](a[t(533)])):(a[t(3053)][t(4008)]=a[t(3053)][t(4008)][t(3403)](0,a[t(3053)][t(4008)][t(3650)]-1),a[t(3053)].positions[t(3650)]===1&&a[t(2366)][t(927)][t(1578)](a[t(533)]),r=a[t(3053)][t(4008)]),a[t(2366)].entities.remove(a.epEntity),!a[t(3756)])){a._clampMode!==Px[t(2411)]&&a[t(2465)]!==Px.S3mModel||(a[t(3055)]=r,a.polyline.show=!1),a._disLabel[t(3009)]=r[r[t(3650)]-1];let n=0;if(x._clampMode===Px.Ground)n=h1(a.viewer[t(1729)],a[t(3386)]);else for(let s=0,u=r[t(3650)]-1;s<u;s++)n+=Cesium[t(516)][t(4114)](r[s],r[s+1]);a[t(571)].show=n!==0,a.measureEvt.raiseEvent({distance:n[t(2497)](8),positions:r})}if(a.polygon){if(r.length<3){a[t(3485)][t(1962)]=!1,a[t(2366)][t(927)][t(1578)](a[t(533)]);for(let n=0,s=a.tmpEntities[t(3650)];n<s;n++)a[t(2366)][t(927)][t(1578)](a[t(710)][n]);a[t(710)][t(3650)]=0,a[t(2366)][t(927)][t(1578)](a[t(610)]),a.polyline[t(4008)][t(3650)]=0}if(a[t(3485)].show=!0,a[t(2465)]!=Px[t(2411)]&&a[t(2465)]!=Px[t(794)]||(a[t(3053)][t(1962)]=!1),a[t(3076)]=a[t(3053)][t(4008)],a[t(3756)][t(1962)]=!0,r[t(3650)]>2){if(a._clampMode!==Px[t(2411)])a[t(3485)][t(3009)]=a[t(3053)][t(4008)][a[t(3053)][t(4008)].length-1];else{let m=a.tmpEntities[a[t(710)][t(3650)]-1]._position[t(1256)];a[t(3485)][t(3009)]=m}if(a[t(2465)]===Px[t(2411)]){let m=m1(a.viewer.scene,a[t(3053)][t(4008)]);return void a[t(3280)].raiseEvent({area:m[t(2497)](8),positions:r})}let n,s,u,c=Cesium[t(2925)].triangulate(r),f=c.length/3,l=0;for(let m=0;m<f;m++)n=r[c[3*m]],s=r[c[3*m+1]],u=r[c[3*m+2]],M2=Cesium[t(516)][t(758)](s,n,M2),R2=Cesium[t(516)].subtract(u,n,R2),D2=Cesium[t(516)][t(2550)](M2,R2,D2),l+=.5*Cesium[t(516)][t(2342)](D2);a.measureEvt.raiseEvent({area:l.toFixed(8),positions:r})}}}}function o1(e,x){const t=o;let a=x;a.mode===fe.Distance?(a[t(3053)]=a.polylines.add({width:a[t(2431)],show:a[t(2237)],positions:[e,e],material:Cesium[t(1607)][t(1957)](Cesium[t(1607)][t(3224)],{color:a[t(3672)]}),clampToGround:!0}),x[t(2465)]===Px[t(2411)]&&(a[t(3053)][t(1962)]=!1,a[t(466)]=a[t(2049)]),a[t(3386)][t(2583)](e)):(a.mode===fe[t(1510)]&&(a[t(598)]=a[t(4017)]),a.polyline[t(4008)][t(2583)](e)),a[t(3756)]&&x[t(2465)]!==Px[t(2411)]&&(a[t(3756)][t(3923)][t(2775)]=a[t(3053)].positions),a.tmpEntities.push(a[t(2366)][t(927)][t(1050)]({show:a[t(2237)],position:e,point:{pixelSize:8,color:Cesium[t(1911)][t(2517)](t(2870))}}))}Object[o(2040)](vt[o(3096)],{activeEvt:{get:function(){return this._activeEvt}},measureEvt:{get:function(){return this[o(3020)]}},disLabel:{get:function(){return this[o(571)]}},areaLabel:{get:function(){return this[o(3485)]}},hLabel:{get:function(){return this._hLabel}},vLabel:{get:function(){return this[o(2405)]}},capturePointSize:{get:function(){return this.viewer._capturePointSize},set:function(e){const x=o;this[x(2366)]._capturePointSize=e}},capturePointColor:{get:function(){const e=o;return this[e(2366)][e(628)]},set:function(e){const x=o;this.viewer[x(628)]=e}},lineColor:{get:function(){return this[o(3672)]},set:function(e){const x=o;this[x(3672)]=e}},fillColor:{get:function(){return this[o(2786)]},set:function(e){const x=o;this[x(2786)]=e}},lineWidth:{get:function(){return this[o(2431)]},set:function(e){const x=o;this[x(2431)]=e}},lineDisplayType:{get:function(){return this[o(3090)]},set:function(e){const x=o;Cesium.Check[x(1556)][x(1232)][x(4047)](x(2425),e,0),Cesium[x(1680)][x(1556)][x(1232)][x(2940)](x(2425),e,2),this._lineDisplayType=e,this.polylines&&(this.polylines.lineDisplayType=e)}}}),vt[o(3096)][o(3071)]=function(){const e=o;if(this[e(2748)](),this[e(908)])return;this[e(908)]=!0;let x=this;this[e(891)][e(497)](function(t){a1(t,x)},Cesium[e(1146)][e(1618)]),this.handler[e(497)](function(t){n1(t,x)},Cesium[e(1146)].MOUSE_MOVE),this.handler[e(497)](function(t){r1(t,x)},Cesium[e(1146)].RIGHT_CLICK),this[e(3276)][e(2323)](!0)},vt[o(3096)][o(760)]=function(){const e=o;this[e(908)]&&this.activeEvt[e(2323)](!1),this.active=!1,this[e(3852)]=!1,this[e(891)][e(924)](Cesium[e(1146)][e(1618)]),this.handler[e(924)](Cesium[e(1146)][e(1537)]),this[e(891)][e(924)](Cesium[e(1146)][e(617)])},vt.prototype[o(2748)]=function(){const e=o;this[e(760)]();for(let x=0,t=this[e(710)][e(3650)];x<t;x++)this[e(2366)][e(927)][e(1578)](this.tmpEntities[x]);if(this[e(1660)]&&(this.viewer[e(927)][e(1578)](this[e(1660)]),this[e(1660)]=null),this[e(710)][e(3650)]=0,this[e(1218)]&&(this[e(1218)][e(1470)](),this[e(2366)][e(1729)].primitives[e(1578)](this[e(1218)]),this[e(1218)]=void 0),this.spEntity&&(this.viewer.entities[e(1578)](this[e(533)]),this[e(533)]=void 0),this[e(610)]&&(this[e(2366)][e(927)][e(1578)](this[e(610)]),this[e(610)]=void 0),this[e(1420)]&&(this[e(2366)].entities[e(1578)](this[e(1420)]),this.fpEntity=void 0),this[e(3173)])switch(this[e(443)]){case fe[e(812)]:this[e(3173)].remove(this[e(571)]);break;case fe[e(1510)]:this[e(3173)][e(1578)](this[e(3485)]);break;case fe[e(2472)]:this.labels[e(1578)](this[e(571)]),this.labels[e(1578)](this[e(1997)]),this[e(3173)][e(1578)](this[e(2405)])}this[e(3756)]&&(this[e(2366)][e(927)].remove(this[e(3756)]),this[e(3756)]=void 0),this.corridor&&(this[e(2366)].entities[e(1578)](this.corridor),this[e(3798)]=void 0)};let M2=new Cesium[o(516)],R2=new Cesium[o(516)],D2=new Cesium[o(516)];function s1(e,x){const t=o;let a=x;if(a.viewer[t(1729)],!e)return;a[t(3027)]=e;let r=a.polyline[t(4008)],n=r[t(3650)];if(r[n-1]=e,n>2&&(a._areaLabel&&(a[t(3485)][t(1962)]=!0),a[t(3076)]=r),a.polyline[t(4008)]=r,r[t(3650)]>2){let s;if(a[t(610)].position=e,a[t(3485)][t(3009)]=e,a[t(3485)].show=x._clampMode!==Px[t(2411)],x[t(2465)]===Px[t(2411)])return;s=vt[t(4105)](r),a[t(3280)][t(2323)]({area:s[t(2497)](8),positions:r})}}function c1(e,x){const t=o;let a=x;a[t(3076)]=[],a[t(710)][t(3650)]=0,a[t(3298)],a[t(1218)]=new Cesium[t(3709)],a[t(3053)]=a[t(1218)][t(1050)]({width:a[t(2431)],positions:[e,e],material:Cesium[t(1607)].fromType(Cesium[t(1607)].ColorType,{color:a._lineColor}),loop:!0}),a[t(2366)][t(1729)][t(2572)][t(1050)](a[t(1218)]),a.spEntity=a.viewer[t(927)].add({position:e,point:{pixelSize:8,color:Cesium[t(1911)].fromCssColorString("#ffe500")}}),a[t(610)]=a[t(2366)][t(927)].add({position:e,point:{pixelSize:8,color:Cesium[t(1911)][t(2517)](t(2870))}});let r=a[t(2366)][t(1729)][t(2572)][t(1050)](new Cesium[t(1798)]({depthTestEnable:!1}));a[t(3485)]=r[t(1050)]({position:e,font:"100 20px SimSun",fillColor:Cesium[t(1911)].WHITE,style:Cesium.LabelStyle.FILL_AND_OUTLINE,showBackground:!0,outlineWidth:1,outlineColor:Cesium[t(1911)][t(3266)],pixelOffset:a[t(521)],text:"",show:a[t(2237)],horizontalOrigin:Cesium[t(2507)][t(3654)]});let n=a[t(2465)]===Px[t(4078)];a[t(3756)]=a[t(2366)][t(927)][t(1050)]({polygon:{hierarchy:new Cesium[t(1562)](function(){return{positions:a.clampToGroundPolygonPositions,holes:[]}},!1),material:a._fillColor,perPositionHeight:n},show:!1}),a.labels=r,x[t(2465)]===Px[t(2411)]&&(a.polyline[t(1962)]=!1,a[t(3756)][t(1962)]=!0),a[t(3485)][t(1962)]=!1}function u1(e,x){const t=o;let a=x;if(x._clampMode===Px.Ground&&(a[t(3055)]=[],a.clampToGroundPolyline=a[t(2366)][t(927)].add({polyline:{positions:new Cesium[t(1562)](function(){return a[t(3055)]},!1),width:a[t(2431)],material:a[t(3672)],clampToGround:!0}})),a[t(710)].length=0,!a.polylines){let r=a[t(3298)];a[t(1218)]=new Cesium[t(3709)]({opaqueRS:Cesium[t(3154)][t(4073)]({depthMask:r,depthTest:{enabled:r}}),translucentRS:Cesium[t(3154)][t(4073)]({depthMask:r,depthTest:{enabled:r}}),lineDisplayType:a[t(2465)]===Px[t(2411)]?gr.OCCLUDED:a[t(3090)]}),a[t(3053)]=a.polylines[t(1050)]({width:a[t(2431)],show:a[t(2237)],positions:[e,e],material:Cesium[t(1607)][t(1957)](Cesium.Material[t(3224)],{color:a[t(3672)]}),clampToGround:!0}),a.viewer[t(1729)][t(2572)][t(1050)](a[t(1218)]),a._accumulationPositions=[e],a[t(466)]=0,a[t(2049)]=0,a.spEntity=a[t(2366)][t(927)][t(1050)]({position:e,show:a._showMeasureResult,point:{pixelSize:8,color:Cesium.Color[t(2517)](t(2870))}}),a.epEntity=a.viewer[t(927)][t(1050)]({position:e,show:a._showMeasureResult,point:{pixelSize:8,color:Cesium[t(1911)][t(2517)](t(2870))}});let n=a[t(2366)][t(1729)][t(2572)][t(1050)](new Cesium[t(1798)]({depthTestEnable:!1}));a[t(571)]=n[t(1050)]({position:e,font:t(1764),fillColor:Cesium.Color[t(2491)],style:Cesium[t(2275)][t(1611)],showBackground:!0,backgroundColor:a[t(802)],outlineWidth:1,outlineColor:Cesium.Color.BLUE,pixelOffset:a._labelPixelOffset,text:"",show:a[t(2237)],horizontalOrigin:Cesium.HorizontalOrigin[t(3654)]}),a[t(3173)]=n;let s=a._clampMode==Px.S3mModel,u=Cesium.Cartesian3[t(3552)](e);a.corridor=a[t(2366)][t(927)][t(1050)]({corridor:{positions:[u,u],width:20,material:Cesium.Color[t(2517)](t(3488))},clampToS3M:s,show:!1})}x[t(2465)]===Px[t(2411)]&&(a[t(3053)].show=!1)}function l1(e,x){const t=o;let a=x;a.viewer[t(1729)],a[t(3027)]=e;let r=a[t(3053)][t(4008)],n=r[t(3650)];x._clampMode===Px[t(2411)]&&(a.mode===fe.Distance?a.clampToGroundPolylinePositions=a[t(3386)][t(2263)]([e]):a[t(3055)]=r),r[n-1]=e,a[t(3053)][t(4008)]=r,a.epEntity[t(3009)]=e;let s=0,u=a[t(3386)][t(2263)]([e]);if(a[t(3053)]._distance=s,a[t(571)][t(3009)]=e,a[t(571)][t(1962)]=x[t(2465)]!==Px[t(2411)],x[t(2465)]!==Px[t(2411)]){for(let c=0,f=u.length-1;c<f;c++)s+=Cesium[t(516)].distance(u[c],u[c+1]);a[t(3280)][t(2323)]({distance:s.toFixed(8),positions:u})}}function f1(e,x){const t=o;let a=x;if(!a[t(1218)]){let s=a._enableDepthTest;a[t(1218)]=new Cesium[t(3709)]({opaqueRS:Cesium.RenderState.fromCache({depthMask:s,depthTest:{enabled:s}}),lineDisplayType:a[t(3090)]}),a[t(811)]=a[t(1218)].add({width:2,show:a[t(2237)],positions:[e,e],material:Cesium.Material[t(1957)](Cesium[t(1607)][t(3224)],{color:a[t(3672)]})}),a[t(2474)]=a[t(1218)].add({width:2,show:a[t(2237)],positions:[e,e],material:Cesium.Material.fromType(Cesium.Material[t(3224)],{color:a[t(3672)]})}),a[t(2414)]=a.polylines[t(1050)]({width:2,show:a[t(2237)],positions:[e,e],material:Cesium[t(1607)][t(1957)](Cesium.Material[t(3224)],{color:a._lineColor})}),a.viewer[t(1729)][t(2572)].add(a[t(1218)]),a[t(533)]=a[t(2366)][t(927)][t(1050)]({position:e,show:a._showMeasureResult,point:{pixelSize:8,color:Cesium.Color[t(2517)](t(2870))}}),a[t(610)]=a[t(2366)][t(927)][t(1050)]({position:e,show:a[t(2237)],point:{pixelSize:8,color:Cesium[t(1911)][t(2517)](t(2870))}}),a[t(1420)]=a[t(2366)].entities.add({position:e,show:a[t(2237)],point:{pixelSize:8,color:Cesium[t(1911)][t(2517)](t(2870))}});let u=a[t(2366)][t(1729)].primitives.add(new Cesium[t(1798)]({depthTestEnable:!1}));a[t(571)]=u[t(1050)]({position:e,font:"500 16px sans-serif",style:Cesium[t(2275)][t(1611)],outlineWidth:1,outlineColor:Cesium[t(1911)][t(1061)],showBackground:!0,backgroundColor:a._labelBackgroundColor,pixelOffset:a[t(521)],pixelOffsetScaleByDistance:a[t(869)],text:"",show:a[t(2237)],horizontalOrigin:Cesium.HorizontalOrigin[t(3654)]}),a[t(2405)]=u[t(1050)]({position:e,font:"500 16px sans-serif",style:Cesium[t(2275)][t(1611)],outlineWidth:1,outlineColor:Cesium[t(1911)][t(1061)],showBackground:!0,backgroundColor:a._labelBackgroundColor,pixelOffset:a[t(521)],pixelOffsetScaleByDistance:a._labelPixelOffsetScaleByDistance,text:"",show:a._showMeasureResult,horizontalOrigin:Cesium.HorizontalOrigin.LEFT}),a[t(1997)]=u[t(1050)]({position:e,font:t(2805),style:Cesium[t(2275)][t(1611)],outlineWidth:1,outlineColor:Cesium[t(1911)][t(1061)],showBackground:!0,backgroundColor:a._labelBackgroundColor,pixelOffset:a._labelPixelOffset,pixelOffsetScaleByDistance:a[t(869)],text:"",show:a._showMeasureResult,horizontalOrigin:Cesium[t(2507)][t(3654)]}),a.labels=u}let r=new Cesium[t(516)];Cesium[t(516)].normalize(e,r),a.plane=Cesium[t(2567)][t(3378)](e,r),a[t(3571)]=e,a[t(3256)]=Cesium.Cartographic.fromCartesian(e).height,a.normal=r;let n=new Cesium[t(516)];Cesium.Cartesian3[t(1708)](r,n),a[t(2635)]=n,a[t(533)].position=e}function d1(e,x){const t=o;let a=x;if(a[t(2366)][t(1729)],!e)return;a.endPoint=e;let r,n,s=Cesium[t(1431)][t(3993)](e)[t(2388)];s>a[t(3256)]?(r=Cesium[t(2567)][t(3378)](e,a[t(3344)]),n=new Cesium[t(1332)](a.startPoint,a.normal)):(r=a[t(2981)],n=new Cesium[t(1332)](e,a[t(3344)]));let u=Cesium[t(2096)][t(3015)](n,r);if(!u&&(n=new Cesium.Ray(e,a.normal),u=Cesium.IntersectionTests.rayPlane(n,a[t(2981)]),!u))return;a[t(811)][t(4008)]=[a.startPoint,u],a[t(2414)].positions=[a[t(3571)],e],a[t(2474)][t(4008)]=[e,u],a[t(610)][t(3009)]=e,a[t(1420)][t(3009)]=u;let c=Cesium[t(516)][t(4114)](a[t(3571)],e)[t(2497)](8),f=Cesium.Cartesian3.distance(a.startPoint,u)[t(2497)](8),l=Cesium.Cartesian3[t(4114)](e,u)[t(2497)](8);s>a[t(3256)]?(Cesium[t(516)].lerp(a[t(3571)],e,.5,a[t(571)][t(3009)]),Cesium[t(516)][t(2917)](a.startPoint,u,.5,a[t(2405)][t(3009)]),Cesium[t(516)].lerp(e,u,.5,a[t(1997)][t(3009)])):(Cesium.Cartesian3[t(2917)](a.startPoint,e,.5,a._disLabel.position),Cesium[t(516)][t(2917)](e,u,.5,a[t(2405)][t(3009)]),Cesium.Cartesian3[t(2917)](a[t(3571)],u,.5,a[t(1997)][t(3009)]),f=Cesium[t(516)][t(4114)](e,u).toFixed(8),l=Cesium.Cartesian3[t(4114)](a.startPoint,u)[t(2497)](8)),a.measureEvt.raiseEvent({distance:c,directionalPositions:a[t(2414)][t(4008)],verticalHeight:f,verticalPositions:a[t(2474)][t(4008)],horizontalDistance:l,horizontalPositions:a.horizontalPolyline[t(4008)]})}function m1(e,x){const t=o;let a=Number.MAX_VALUE,r=-Number[t(1659)],n=Number.MAX_VALUE,s=-Number[t(1659)];for(let p=0;p<x.length;p++){let _=Cesium[t(1431)].fromCartesian(x[p]);a=Math[t(1803)](_[t(1454)],a),r=Math[t(2092)](_.longitude,r),n=Math[t(1803)](_.latitude,n),s=Math[t(2092)](_.latitude,s)}let u=Cesium.Cartographic[t(2131)](new Cesium[t(1431)](a,n,0)),c=Cesium[t(1431)][t(2131)](new Cesium[t(1431)](r,s,0)),f=Cesium.Cartesian3[t(1399)](u,c),l=Cesium.PolygonGeometry[t(809)]({positions:x,granularity:f/32}),m=Cesium[t(4028)][t(4110)](l),h=0,C={};for(let p=0;p<m[t(2687)][t(3650)];p+=3){let _,y=m[t(2687)][p];if(C[y])_=C[y];else{let M=m[t(3126)][t(3009)][t(2496)][3*y],w=m[t(3126)][t(3009)][t(2496)][3*y+1],I=m[t(3126)][t(3009)][t(2496)][3*y+2];_=new Cesium[t(516)](M,w,I);let P=Cesium.Cartographic.fromCartesian(_),V=e.globe[t(2891)](P);if(!V)continue;P=Cesium[t(1431)][t(655)](P[t(1454)],P[t(1738)],V),_=Cesium[t(1431)][t(2131)](P),C[y]=Cesium[t(516)][t(3552)](_)}let A,b=m[t(2687)][p+1];if(C[b])A=C[b];else{let M=m.attributes[t(3009)][t(2496)][3*b],w=m[t(3126)].position[t(2496)][3*b+1],I=m[t(3126)][t(3009)][t(2496)][3*b+2];A=new Cesium.Cartesian3(M,w,I);let P=Cesium[t(1431)][t(3993)](A),V=e[t(1485)][t(2891)](P);if(!V)continue;P=Cesium[t(1431)][t(655)](P[t(1454)],P[t(1738)],V),A=Cesium[t(1431)][t(2131)](P),C[b]=Cesium.Cartesian3[t(3552)](A)}let B,T=m[t(2687)][p+2];if(C[T])B=C[T];else{let M=m.attributes[t(3009)][t(2496)][3*T],w=m[t(3126)][t(3009)][t(2496)][3*T+1],I=m[t(3126)][t(3009)][t(2496)][3*T+2];B=new Cesium[t(516)](M,w,I);let P=Cesium[t(1431)][t(3993)](B),V=e[t(1485)][t(2891)](P);if(!V)continue;P=Cesium[t(1431)][t(655)](P.longitude,P[t(1738)],V),B=Cesium[t(1431)][t(2131)](P),C[T]=Cesium.Cartesian3[t(3552)](B)}M2=Cesium[t(516)][t(758)](A,_,M2),R2=Cesium.Cartesian3[t(758)](B,_,R2),D2=Cesium[t(516)][t(2550)](M2,R2,D2),h+=.5*Cesium[t(516)][t(2342)](D2)}return h}function h1(e,x){const t=o;let a=0,r=[],n=x.length-1;for(let s=0;s<n;s++){let u=x[s],c=x[s+1],f=Cesium[t(516)].angleBetween(u,c)/64,l=Cesium[t(2746)][t(2993)](f,6378137),m=Cesium[t(2633)][t(496)](u,c,l,r),h=Cesium[t(516)][t(3628)](m),C=h[t(3650)]-1;for(let p=0;p<C;p++){let _=h[p],y=Cesium.Cartographic.fromCartesian(_),A=e.globe[t(2891)](y);y=Cesium[t(1431)][t(655)](y[t(1454)],y.latitude,A);let b=Cesium[t(1431)][t(2131)](y),B=h[p+1];y=Cesium[t(1431)][t(3993)](B),A=e[t(1485)][t(2891)](y),y=Cesium[t(1431)][t(655)](y[t(1454)],y.latitude,A);let T=Cesium[t(1431)][t(2131)](y);a+=Cesium[t(516)][t(4114)](b,T)}}return a}vt[o(4105)]=function(e){const x=o;let t,a,r,n=Cesium[x(2925)][x(902)](e),s=n[x(3650)]/3,u=0;for(let c=0;c<s;c++)t=e[n[3*c]],a=e[n[3*c+1]],r=e[n[3*c+2]],M2=Cesium[x(516)][x(758)](a,t,M2),R2=Cesium[x(516)].subtract(r,t,R2),D2=Cesium[x(516)].cross(M2,R2,D2),u+=.5*Cesium[x(516)].magnitude(D2);return u};var Oc=o(776);const C1=Cesium.PostProcessStage,b1=Cesium[o(1427)];function p1(e){const x=o;return this._rain=e.postProcessStages[x(1050)](new C1({name:x(1762),fragmentShader:Oc,uniforms:{speed:20,angle:-.4},sampleMode:b1[x(2191)]})),this._rain.enabled=!1,this._rain}var Nc=`uniform sampler2D colorTexture;
varying vec2 v_textureCoordinates;
uniform int density;
uniform float speed;
uniform float angle;

float snow(vec2 uv, float scale)
{
    float time = czm_frameNumber / 60.0;
    float w = smoothstep(1.0 , 0.0, -uv.y * (scale / 10.0));
    if(w < 0.1) return 0.0; // \u96EA\u82B1\u6D88\u5931
    uv += time / scale; // \u968F\u65F6\u95F4\u79FB\u52A8
    uv.y += time * cos(angle) * speed / scale;
    uv.x += sin(uv.y + time * sin(angle) * speed) / scale; // \u5DE6\u53F3\u6447\u6446
    uv *= scale;
    vec2 s = floor(uv);
    vec2 f = fract(uv);
    vec2 p;
    float k = 3.0;
    float d;
    p = 0.5 + 0.35 * sin(11.0 * fract(sin((s + p + scale) * mat2(7, 3, 6, 5)) * 5.0)) - f;
    d = length(p);
    k = min(d, k);
    k = smoothstep(0.0, k, sin(f.x + f.y) * 0.01);
    return k * w * clamp(float(density) / 5.0, 1.0, 5.0);
}


void main(void){
    vec2 resolution = czm_viewport.zw;
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
    vec3 finalColor = vec3(0);
    float c = 0.0;
    for (int i = 2; i < 5; i++) {
        if (density < i) {
            break;
        }
        c += snow(uv, float(i));
    }
    for (int i = 6; i < 10; i+= 2) {
        if (density < i) {
            break;
        }
        c += snow(uv, float(i));
    }
    for (int i = 15; i < 30; i+= 5) {
        if (density < i) {
            break;
        }
        c += snow(uv, float(i));
    }
    finalColor = vec3(c);
    if(c > 0.8)
    {
        finalColor = vec3(max(5.0, c));
    }
    gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(finalColor, 1.0), 0.15);
}`;const v1=Cesium[o(1902)],A1=Cesium.PostProcessStageSampleMode;function y1(e){const x=o;return this[x(2482)]=e[x(3335)].add(new v1({name:x(2102),fragmentShader:Nc,uniforms:{density:5,angle:.1,speed:2},sampleMode:A1[x(2191)]})),this._snow[x(2648)]=!1,this[x(2482)]}window[o(4181)]=Cesium;const Mi=Cesium[o(2746)],J2=Cesium.Rectangle,Tr=Cesium[o(2878)],_1=Cesium[o(2613)],Ri=Cesium.PackingRequest,za=Cesium[o(2300)],Br=Cesium[o(3804)],$t=Cesium[o(1702)],g1=Cesium[o(3284)],Vc=Cesium[o(516)],ve=Cesium[o(3899)];function At(e){const x=o;if(e=Cesium[x(820)](e,Cesium[x(820)][x(1897)]),!Cesium.defined(e[x(1612)]))throw new Cesium.DeveloperError("options.urls is required.");this[x(2630)]=e[x(1612)];for(var t=0;t<this[x(2630)][x(3650)];t++)this._urls[t].length>0&&this._urls[t][this[x(2630)][t].length-1]!=="/"&&(this[x(2630)][t]+="/");var a=e[x(1612)][0][x(3019)](x(2387));this[x(3605)]=Cesium[x(820)](e[x(3311)],!0),this[x(2129)]=new Cesium[x(3572)],this._ready=!1,this._readyPromise=a2(),this._isCreateSkirt=e.isCreateSkirt,this[x(2536)]=e[x(2785)],this[x(2476)]=!1,this[x(4006)]=e[x(1380)],this[x(2179)]={heightScale:1,heightOffset:0,elementsPerHeight:1,stride:1},this[x(2840)]=void 0,this[x(3159)]=[],this[x(1322)]=[],this[x(1184)]="NONE",this[x(775)]=void 0,this[x(3789)]=e[x(2848)],this[x(2207)]={};var r,n=this,s=Cesium[x(820)](e[x(650)],Cesium[x(2024)].WGS84);this[x(1280)]=!1,this[x(3661)]=Cesium[x(820)](e[x(3340)],!1);var u=0;function c(h){const C=x;if(parseFloat(h[C(1040)](C(3883))[0][C(3512)])===1){var p=h[C(1040)]("sml:StoreType",void 0);n[C(1799)]=p[0].getAttribute(C(1022)),Cesium.defined(n._blockScale)&&n[C(1799)]>0&&(n[C(3781)]=!0)}n._compressType=h[C(1040)]("sml:CompressType")[0][C(3512)],n[C(1438)]=parseInt(h.getElementsByTagName("sml:CellWidth")[0][C(3512)]),n[C(1731)]=parseInt(h[C(1040)]("sml:CellHeight")[0][C(3512)]),n._tilingScheme=new Cesium[C(3338)]({ellipsoid:s}),n._tilingScheme[C(2150)]=!0,n[C(3121)]=Tr[C(1672)](s,2*Math[C(1803)](n[C(1438)],n[C(1731)]),n[C(2840)].getNumberOfXTilesAtLevel(0));var _=h[C(1040)](C(3918))[0],y=Mi.toRadians(parseFloat(_.getElementsByTagName(C(3705))[0][C(3512)])),A=Mi[C(3629)](parseFloat(_[C(1040)](C(3428))[0][C(3512)])),b=Mi[C(3629)](parseFloat(_[C(1040)](C(4020))[0][C(3512)])),B=Mi[C(3629)](parseFloat(_[C(1040)]("sml:Top")[0][C(3512)]));n[C(3159)][C(2583)](new J2(y,A,b,B));for(var T=h[C(1040)]("sml:Levels")[0][C(1040)](C(806)),M=[],w=0;w<T[C(3650)];++w){var I=T[w];M.push(parseInt(I[C(3512)]))}if(n[C(1322)][C(2583)](M),n[C(1484)]=!0,n[C(1506)].resolve(!0),u<n[C(2630)][C(3650)]){var P=n[C(2630)][u++];P[C(2629)](0,P.length-1);var V=P+C(3801);$t[C(1312)](V)[C(4167)](c,l)}}function f(h){const C=x;var p=new ve()[C(2185)](h).documentElement,_=ve[C(3250)](p,"Contents",void 0),y=ve[C(3250)](_,"Layer",void 0);n._tempLayerName=ve[C(987)](y,C(501),void 0);var A=ve[C(3250)](_,C(2566),void 0);n[C(659)]=ve[C(987)](A,"Identifier",void 0);var b=ve[C(3250)](y,"BoundingBox",void 0),B=ve[C(987)](b,C(1159),void 0),T=ve[C(987)](b,C(3579),void 0),M=B[C(1830)](" "),w=T[C(1830)](" "),I=parseFloat(M[0]),P=parseFloat(w[0]),V=parseFloat(M[1]),q=parseFloat(w[1]);I&&P&&V&&q&&n[C(3159)].push(new J2(I,V,P,q));var X=ve.queryFirstNode(_,C(2566),void 0),H=(A=ve[C(1271)](X,"TileMatrix",void 0),ve[C(1980)](A[0],C(1937),void 0)),z=ve.queryNumericValue(A[A[C(3650)]-1],C(1937),void 0),u0=ve[C(1980)](A[0],C(596),void 0);H=1/H,z=1/z;var n0=[1690163571602655e-24,33803271432053056e-25,6760654286410611e-24,13521308572821242e-24,27042617145642484e-24,5408523429128511e-23,10817046858256998e-23,21634093716513974e-23,43268187433028044e-23,8653637486605571e-22,17307274973211203e-22,34614549946422405e-22,69229099892844565e-22,13845819978568952e-21,27691639957137904e-21,553832799142758e-19,.0001107665598285516,.0002215331196571032,.0004430662393142064,.0008861324786284128,.001772264957256826,.003544529914513652],N=n0[C(3019)](H),Y=n0[C(3019)](z);for(let v=0;v<n0.length;v++)H>n0[v]&&n0[v+1]&&H<n0[v+1]&&(N=v-1),z>n0[v]&&n0[v+1]&&z<n0[v+1]&&(Y=v-1);N=Math[C(2092)](N,0),n[C(1940)]=Cesium[C(820)](N-u0,0);for(var W=[],x0=N;x0<=Y;x0++)W[C(2583)](x0);if(n[C(1322)][C(2583)](W),e[C(658)]>0&&(n[C(1799)]=1*e.blockscale,n[C(3781)]=!0),n._compressType=C(3018),n[C(1438)]=e[C(2961)]||32,n[C(1731)]=e.cellHeight||32,n[C(2840)]=new Cesium[C(3338)]({ellipsoid:s}),n[C(2840)].isSct=!0,n._levelZeroMaximumGeometricError=Tr[C(1672)](s,2*Math.min(n[C(1438)],n[C(1731)]),n._tilingScheme.getNumberOfXTilesAtLevel(0)),n[C(1484)]=!0,n._readyPromise[C(1599)](!0),u<n[C(2630)][C(3650)]){var y0=n[C(2630)][u++];if(y0[C(3019)](C(2387))!==-1){var f0=y0+"1.0.0/WMTSCapabilities.xml";$t.fetchText(f0).then(f,l)}else y0[C(2629)](0,y0.length-1),f0=y0+C(3801),$t.fetchXML(f0)[C(4167)](c,l)}}function l(h){const C=x;var p=Cesium[C(820)](h,C(2003)+n._url+".");r=_1[C(3371)](r,n,n._errorEvent,p,void 0,void 0,void 0,m)}function m(){const h=x;if(!Cesium.defined(e.rectangles)||!Cesium.defined(e[h(1976)]))throw new Cesium[h(1785)](h(2328));n[h(1184)]=Cesium[h(820)](e[h(3229)],h(3018)),n._heightmapWidth=Cesium.defaultValue(e[h(1211)],32),n[h(1731)]=Cesium[h(820)](e[h(569)],32),n[h(2840)]=new Cesium[h(3338)]({ellipsoid:s}),n[h(2840)][h(2150)]=!0,n[h(3121)]=Tr[h(1672)](s,Math[h(1803)](n[h(1438)],n[h(1731)]),n[h(2840)][h(3129)](0)),n._rectangles=e.rectangles,n[h(1322)]=e[h(1976)],n[h(1484)]=!0,n[h(1506)][h(1599)](!0)}this[x(3605)]?function(){const h=x;if(a!==-1){var C=(p=n[h(2630)][u++])+"1.0.0/WMTSCapabilities.xml";$t[h(546)](C).then(f,l)}else{var p;(p=n[h(2630)][u++]).substring(0,p[h(3650)]-1),C=p+h(3801),$t.fetchXML(C)[h(4167)](c,l)}}():m()}function Er(e,x,t){for(var a="",r=t;r>=0;--r){var n=1<<r,s=0;Br(x,n)?Br(e,n)&&(s|=1):(s|=2,Br(e,n)||(s|=1)),a+=s}return a}function Uc(e,x){const t=o;var a=new DataView(e),r=0,n=a[t(3757)](r,!0);if(x>n-1)throw new Cesium[t(1785)](t(1884));r+=4;var s,u,c=[];for(s=0;s<n;s++)u=a[t(3757)](r,!0),c[t(2583)](u),r+=4;for(s=0;s<n;s++){if(u=c[s],s===x)return u===0?void 0:new Uint8Array(e,r,u);r+=u}}function Gc(e,x,t,a){const r=o;var n=Math[r(1803)](e[r(1799)],a),s=Math[r(1149)](2,n),u=x%s;return{x:Math[r(3720)](x/s),y:Math[r(3720)](t/s),col:u,row:t%s,level:a,blockSize:s}}function Hc(e,x){const t=o;var a=new DataView(e),r=0;a[t(3757)](r,!0),r+=4;var n=a[t(3757)](r,!0);r+=4;for(var s=x[t(1041)],u=x[t(2378)]*x[t(618)]+s,c=0,f=0,l=0;l<n;l++){if(l<u)c+=a[t(3757)](r,!0);else if(l===u){f=a[t(3757)](r,!0),r+=4;break}r+=4}if(r=8+4*n,f!==0)return r+=c,new Uint8Array(e).slice(r,r+f).buffer}Object[o(2040)](At.prototype,{errorEvent:{get:function(){return this._errorEvent}},tilingScheme:{get:function(){const e=o;if(!this[e(2266)])throw new Cesium.DeveloperError(e(2716));return this[e(2840)]}},ready:{get:function(){return this[o(1484)]}},readyPromise:{get:function(){const e=o;return this._readyPromise[e(3316)]}},hasWaterMask:{get:function(){return!1}},hasVertexNormals:{get:function(){return!1}},isCreateSkirt:{get:function(){return this[o(983)]},set:function(e){const x=o;e!==this[x(983)]&&(this[x(2476)]=!0),this[x(983)]=e}},skirtScale:{get:function(){return this._skirtScale},set:function(e){const x=o;e!==this[x(2536)]&&(this._isSkirtDirty=!0),this[x(2536)]=e}},hasNormalBuffer:{get:function(){return this[o(1280)]}},requestVertexNormals:{get:function(){return this[o(3661)]}}}),At[o(3096)][o(1183)]=function(e,x,t,a,r){const n=o;for(var s=[],u=0;u<r;u++)for(var c=0;c<r;c++){var f=(t+a*(r-1-u)/(r-1))*(r-1),l=(x+a*c/(r-1))*(r-1),m=Math[n(3720)](f),h=Math[n(2892)](f),C=Math[n(3720)](l),p=Math[n(2892)](l),_=e[(r-1-m)*r+C],y=e[(r-1-m)*r+p],A=e[(r-1-h)*r+C],b=e[(r-1-h)*r+p],B=A*(f-m)+_*(h-f),T=b*(f-m)+y*(h-f);m===h&&(B=A,T=b);var M=T*(l-C)+B*(p-l);C===p&&(M=T),s[u*r+c]=M}return s};var Di=new J2;function T1(e,x,t,a,r){const n=o;if(e!=null){for(var s=new Uint8Array(x*t*3),u=6378137,c=a[n(2375)],f=a.height,l=e,m=0;m<x;m++)for(var h=0;h<t;h++){var C=h*x+m;l[h*x+m];var p=m,_=h;r>13&&(m=(m=m==0?m+1:m)==x-1?x-2:m,h=(h=h==0?h+1:h)==t-1?t-2:h);var y=Math[n(2092)](m-1,0),A=h,b=l[A*x+y],B=l[(A=h)*x+(y=Math[n(1803)](m+1,x-1))];y=m;var T=l[(A=Math[n(1803)](h+1,t-1))*x+y];y=m;var M=l[(A=Math[n(2092)](h-1,0))*x+y];m=p,h=_;var w=a[n(852)]+f*(512-2*h-1)/512,I=u*Math[n(1777)](w),P=new Vc((b-B)/(I*c/x),(M-T)/(u*f/t),2);Vc[n(1586)](P,P),s[3*C+0]=255*(.5*P.x+.5),s[3*C+1]=255*(.5*P.y+.5),s[3*C+2]=255*(.5*P.z+.5)}return s}}At.prototype[o(1736)]=function(e,x,t,a,r){const n=o;if(!this[n(2266)])throw new Cesium[n(1785)](n(2716));if(t===0){var s=new Array(this[n(1438)]*this._heightmapHeight);return s[n(2663)](0),this[n(1280)]=!1,new Cesium.HeightmapTerrainData({buffer:s,width:this[n(1438)],height:this[n(1731)],skirtMode:this._isCreateSkirt,skirtScale:this[n(2536)],childTileMask:zc(this,e,x,t),structure:this._terrainDataStructure,valid:!1})}var u=[],c=this[n(2840)][n(1568)](e,x,t),f=this,l=!1,m=this[n(3159)][n(3650)]-1,h=this[n(1322)][m][this[n(1322)][m][n(3650)]-1];m=0;var C=this._levels[m][this[n(1322)][m][n(3650)]-1];if(Cesium.defined(r)||!(t>C)){var p=this,_=!1;(Cesium[n(692)](p[n(3789)])&&p[n(3789)]===Ri[n(706)]||p._isBlock)&&(_=!0);for(var y=0;y<this[n(3159)].length;y++){var A=J2[n(2636)](this[n(3159)][y],c,Di);if(Cesium.defined(r)&&!_){var b=r[this._urls[y]];if(Cesium.defined(b)&&(b===1&&(l=!0),b===0||b===2))continue}if(u.length===0&&y===this[n(3159)][n(3650)]-1&&t>h)break;if(Cesium[n(692)](A)){var B=this[n(1322)][y][0],T=this._levels[y][this[n(1322)][y].length-1],M=!1;if(t>=B&&t<=C&&(M=!0),M){var w=0,I=0,P=1,V=e,q=x,X=t;X>T&&(P=1/Math[n(1149)](2,X-T));for(var H=P;X>T;)V%2==1&&(w+=H),q%2==0&&(I+=H),H*=2,X--,V=Math[n(3720)](.5*V),q=Math[n(3720)](.5*q);var z={srcX:w,srcY:I,width:P,dataName:f[n(2630)][y]},u0=t+"_"+e+"_"+x;Cesium[n(692)](f._combiInfo[u0])?f[n(2207)][u0][n(2583)](z):f._combiInfo[u0]=[z],function(n0){const N=n;var Y,W=f._urls[n0];if(W[N(3019)](N(2387))!==-1){var x0=X-f.wmts_sub;Y=W.substring(0,W[N(3308)]("/"))+N(3697)+x0+"&layer="+f[N(3109)]+N(2285)+q+"&tilecol="+V+N(678)+f[N(659)]+"&service=WMTS&request=GetTile"}else W.substring(0,W[N(3650)]-1),Y=f[N(2630)][n0]+"data/index/"+q+"/"+V+N(2218)+X;var y0=f._proxy;Cesium.defined(y0)&&(Y=y0[N(3038)](Y));var f0=new g1({throttle:!0,throttleByServer:!1,type:za.TERRAIN}),v=void 0;if(Cesium[N(692)](p._packingRequest)&&p[N(3789)]===Ri.QuadKey&&p[N(3781)]){f0[N(729)]=za.BLOCKPACK;var T0=Gc(p,V,q,X);f0[N(4068)]=Er(T0.x,T0.y,T0[N(2337)]),f0[N(1926)]=T0,f0[N(1329)]=Y[N(2629)](Y[N(3019)](N(2163))+6,Y[N(3019)](N(861)));var F0=p[N(2001)][f0[N(4068)]+"_"+f0.providerName];Cesium.defined(F0)&&(p.blockCacheQueue.touch(F0),v={buffer:F0[N(1426)]})}else Cesium[N(692)](p[N(3789)])&&p[N(3789)]===Ri[N(706)]?(f0[N(729)]=za[N(1727)],f0[N(4068)]=Er(V,q,X),f0[N(1329)]=Y[N(2629)](Y.indexOf("datas/")+6,Y[N(3019)](N(861)))):p[N(3781)]&&(f0.type=za[N(2883)],T0=Gc(p,V,q,X),f0[N(4068)]=Er(T0.x,T0.y,T0[N(2337)]),f0.blockInfo=T0,f0[N(1329)]=Y.substring(Y[N(3019)]("datas/")+6,Y[N(3019)]("/data/")),F0=p[N(2001)][f0[N(4068)]+"_"+f0[N(1329)]],Cesium.defined(F0)&&(p[N(2303)][N(1605)](F0),v={buffer:F0[N(1426)]}));if(!Cesium[N(692)](v)){var O0=$t[N(1554)](Y),w0=Y;Cesium[N(692)](f0.blockInfo)&&(w0=f._urls[n0]+"data/index/"+T0.y+"/"+T0.x+N(2218)+X),v=O0[N(2773)]({url:w0,request:f0})[N(1823)]()}Cesium[N(692)](v)&&(v.id=n0,v[N(2547)]=Y,v.subRequest=f0),u.push(v)}(y)}if(l)break}}if(!(u.indexOf(void 0)>-1))return this[n(1280)]=!0,Promise[n(3041)]=function(n0){return new this(function(N,Y){const W=C0;if(W(3211)!==Object.prototype[W(2557)][W(798)](n0))return Y(new TypeError(typeof n0+" "+n0+W(823)));var x0=Array[W(3096)][W(3403)][W(798)](n0);if(x0[W(3650)]===0)return N([]);var y0=x0.length;function f0(T0,F0){const O0=W;if(O0(2408)==typeof F0){var w0=F0.then;O0(1355)==typeof w0&&w0[O0(798)](F0,function(U0){x0[T0]=U0,--y0==0&&N(x0)},function(U0){x0[T0]=U0,--y0==0&&Y(x0)})}}for(var v=0;v<x0.length;v++)f0(v,x0[v])})},Promise.allSettled(u)[n(4167)](function(n0){const N=n;if(Array[N(906)](n0)||(n0=[n0]),!(n0[N(3650)]<1)){for(var Y=[],W=0;W<n0[N(3650)];W++){var x0=n0[W];if(Cesium.defined(x0)){if(Cesium[N(692)](x0[N(4056)])&&(x0=x0[N(4056)]),t!==0){if(p[N(3781)]&&Cesium[N(692)](p[N(3789)])&&p[N(3789)]===Ri[N(706)]){!Cesium[N(692)](u[W].subRequest.quadKeyIndex)&&Cesium[N(692)](u[W][N(1642)].blockRequest)&&(u[W][N(1642)][N(3136)]=u[W].subRequest[N(539)][N(3136)]),Cesium[N(692)](u[W].subRequest[N(3136)])&&(x0=Uc(x0,u[W][N(1642)][N(3136)]),x0=new Uint8Array(x0)[N(4056)]);var y0=p.blockCache[u[W][N(1642)][N(4068)]];p[N(2303)][N(1605)](y0),p[N(2303)][N(728)](p[N(1056)]),x0=Hc(x0,u[W][N(1642)].blockInfo)}else Cesium[N(692)](p[N(3789)])&&p[N(3789)]===Ri.QuadKey?x0=Uc(x0,u[W].subRequest[N(3136)]):p[N(3781)]&&(y0=p[N(2001)][u[W][N(1642)][N(4068)]],p[N(2303)].touch(y0),p[N(2303)][N(728)](p.blockCacheSize),x0=Hc(x0,u[W].subRequest.blockInfo));if(!Cesium[N(692)](x0)){if(W===0&&n0[N(3650)]>1){var f0=t+"_"+e+"_"+x;if((w0=f[N(2207)][f0])[W+1][N(2375)]!=1)return void delete f[N(2207)][f0]}continue}}var v,T0;if((v=f[N(1184)]==="ZIP"?N2.inflate(x0)[N(4056)]:x0).byteLength/(f._heightmapWidth*f[N(1731)])===2){var F0=new Int16Array(v,0,f[N(1438)]*f[N(1731)]);T0=[];for(var O0=0;O0<F0[N(3650)];O0++)T0[N(2583)](parseFloat(F0[O0]))}else T0=new Float32Array(v,0,f._heightmapWidth*f[N(1731)]);Y[N(2583)](T0)}else Y.push(void 0)}f0=t+"_"+e+"_"+x;var w0=f._combiInfo[f0];if(delete f[N(2207)][f0],Y.length>1)for(W=0;W<Y.length;W++)Cesium[N(692)](Y[W])&&(w0[W][N(4101)]!=0||w0[W][N(1896)]!=0||w0[W].width!=1)&&(F0=f[N(1183)](Y[W],w0[W][N(4101)],w0[W].srcY,w0[W].width,f._heightmapWidth),Y[W]=F0);var U0=[{},{},{},{}];for(W=0;W<Y[N(3650)];W++)if(Cesium.defined(Y[W])){var xx=w0[W][N(3436)],W0=-1,j0=-1,tx=-1,v0=-1;W0=Y[W][0]==0?2:1,j0=Y[W][f[N(1438)]-1]==0?2:1,tx=Y[W][(f[N(1731)]-1)*f._heightmapWidth]==0?2:1,v0=Y[W][f[N(1731)]*f[N(1438)]-1]==0?2:1;for(var ix=.5*f[N(1438)],ax=.5*f._heightmapHeight,H0=0;H0<Y[W][N(3650)];H0++){var G0=Math[N(3720)](H0/f[N(1438)]),nx=H0%f[N(1438)];if(G0<ax&&nx<ix){var L=Y[W][H0];if(W0===1){if(L==0){W0=3;break}}else if(L!=0){W0=3;break}}}for(U0[0][xx]=W0,H0=0;H0<Y[W][N(3650)];H0++)if(G0=Math.floor(H0/f[N(1438)]),nx=H0%f[N(1438)],G0<ax&&nx>=ix){if(L=Y[W][H0],j0===1){if(L==0){j0=3;break}}else if(L!=0){j0=3;break}}for(U0[1][xx]=j0,H0=0;H0<Y[W][N(3650)];H0++)if(G0=Math.floor(H0/f._heightmapWidth),nx=H0%f[N(1438)],G0>=ax&&nx<ix){if(L=Y[W][H0],tx===1){if(L==0){tx=3;break}}else if(L!=0){tx=3;break}}for(U0[2][xx]=tx,H0=0;H0<Y[W].length;H0++)if(G0=Math.floor(H0/f[N(1438)]),nx=H0%f._heightmapWidth,G0>=ax&&nx>=ix){if(L=Y[W][H0],v0===1){if(L==0){v0=3;break}}else if(L!=0){v0=3;break}}if(U0[3][xx]=v0,W0===1&&j0===1&&tx===1&&v0===1)break}var U=[];for(W=0;W<Y[N(3650)];W++)Cesium[N(692)](Y[W])&&U.push(Y[W]);if(U[N(3650)]!==0){var K=U[0];if(U[N(3650)]>1){for(H0=0;H0<K[N(3650)];H0++)if(K[H0]==0){for(W=1;W<U[N(3650)];W++)if(U[W][H0]!=0){K[H0]=U[W][H0];break}}}var k=!1;for(W=0;W<K[N(3650)];W++)if(Math.abs(K[W])>Mi[N(3330)]){k=!0;break}var d0=f[N(1438)],$=f[N(1731)],r0=void 0;return f[N(3661)]&&(r0=T1(K,d0,$,c,t)),new Cesium[N(3201)]({buffer:K,width:d0,height:$,skirtMode:f[N(983)],skirtScale:f[N(2536)],childTileMask:zc(f,e,x,t),structure:f[N(2179)],valid:k,childTileMaskExt:U0,normalTexture:r0,level:t,x:e,y:x})}}}).catch(n0=>Promise.reject(n0))}},At[o(3096)].getLevelMaximumGeometricError=function(e){return this[o(3121)]/(1<<e)},Di=new J2;function zc(e,x,t,a){const r=o;for(var n=e._tilingScheme,s=n[r(1568)](x,t,a),u=0,c=0;c<e[r(3159)][r(3650)];c++){var f=e[r(3159)][c],l=J2.intersection(f,s,Di);Cesium.defined(l)&&(Ka(n,f,2*x,2*t,a+1)&&(u|=4),Ka(n,f,2*x+1,2*t,a+1)&&(u|=8),Ka(n,f,2*x,2*t+1,a+1)&&(u|=1),Ka(n,f,2*x+1,2*t+1,a+1)&&(u|=2))}return u}function Ka(e,x,t,a,r){const n=o;var s=e[n(1568)](t,a,r);return Cesium.defined(J2[n(2636)](s,x,Di))}function I2(){const e=o;this[e(616)]=new Cesium.AssociativeArray,this[e(755)]=new Uint8Array(262144),this[e(1965)]=[]}function B1(e,x){return e-x}At[o(3096)][o(3359)]=function(e,x,t){const a=o;if(t===0)return!0;for(var r=this[a(2840)].tileXYToRectangle(e,x,t),n=0;n<this[a(3159)][a(3650)];n++){var s=J2[a(2636)](this[a(3159)][n],r,Di);if(Cesium[a(692)](s)&&t>=this._levels[n][0]&&t<=this._levels[n][this[a(1322)][n][a(3650)]-1])return!0}return!1},At.prototype.loadTileDataAvailability=function(e,x,t){},I2.prototype.getItem=function(e){const x=o;if(e>this[x(616)][x(2496)][x(3650)]-1)return null;let t=e;for(let a in this._dictTable[x(2241)]){if(!(t>0)){if(!a)break;return{altitude:a,color:this._dictTable[x(3715)](a)}}t--}return null},I2.prototype[o(2081)]=function(){const e=o;return this[e(616)][e(2496)][e(3650)]},I2[o(3096)][o(1892)]=function(e,x){const t=o;if(this[t(616)][t(3715)](e))return;let a=Cesium.Color.clone(x,new Cesium.Color);this._dictTable.set(e,a)},I2[o(3096)][o(1578)]=function(e){const x=o;return this[x(616)][x(1578)](e)},I2[o(3096)][o(2748)]=function(){this[o(616)].removeAll()},I2[o(3096)][o(4121)]=function(){const e=o;let x=[];for(let c in this[e(616)]._hash){if(!c)continue;let f=this._dictTable[e(3715)](c);x[e(2583)]({value:parseFloat(c),color:f})}if(x[e(3650)]<2)return;for(let c=0,f=x[e(3650)]-1;c<f;c++){let l=x[c];for(let m=c+1;m<x[e(3650)];m++){let h=x[m];if(l[e(2976)]>h[e(2976)]){let C=Cesium[e(3552)](x[c],!0);x[c]=Cesium.clone(x[m],!0),x[m]=C,l=x[c]}}}let t=x[0][e(2976)],a=x[x[e(3650)]-1][e(2976)]-t,r=document.createElement(e(472));r[e(2375)]=16384,r[e(2388)]=1;let n=r.getContext("2d");n[e(2333)]();let s=n[e(3889)](0,0,16384,0);for(let c=0,f=x[e(3650)];c<f;c++)s[e(3874)]((x[c].value-t)/a,x[c][e(3560)][e(2306)]());n[e(751)]=s,n.rect(0,0,r[e(2375)],r[e(2388)]),n.fill();let u=n[e(4088)](0,0,r[e(2375)],1).data;for(let c=0;c<16;c++)for(let f=0;f<4096;f++)this[e(755)][f+1024*c*4*4]=u[f+1024*c*4],this[e(755)][f+1024*c*4*4+4096]=u[f+1024*c*4],this[e(755)][f+1024*c*4*4+8192]=u[f+1024*c*4],this[e(755)][f+1024*c*4*4+12288]=u[f+1024*c*4];for(let c in this[e(616)][e(2241)])this[e(1965)][e(2583)](parseFloat(c));return this[e(1965)][e(877)](B1),r},I2.prototype[o(2195)]=function(e){const x=o;for(let t=0,a=this[x(1965)][x(3650)];t<a;t++)if(this[x(1965)][t]>=e||Math[x(905)](this._sortKey[t]-e)<Cesium.Math[x(2900)])return this[x(616)][x(3715)](this[x(1965)][t])},I2[o(3096)].destroy=function(){const e=o;this[e(616)][e(1470)](),this[e(755)]=null,this[e(1965)]=null};var E1=o(2413),P1=o(1996),w1=o(1119),S1=o(1010);if(o(1345)!=typeof WebAssembly){let e=function(b,B){b||c(o(3501)+B)},x=function(b,B,T){const M=o;for(var w=B+T,I=B;b[I]&&!(I>=w);)++I;if(I-B>16&&b[M(1238)]&&Xc)return Xc.decode(b.subarray(B,I));for(var P="";B<I;){var V=b[B++];if(128&V){var q=63&b[B++];if((224&V)!=192){var X=63&b[B++];if((V=(240&V)==224?(15&V)<<12|q<<6|X:(7&V)<<18|q<<12|X<<6|63&b[B++])<65536)P+=String[M(4176)](V);else{var H=V-65536;P+=String[M(4176)](55296|H>>10,56320|1023&H)}}else P+=String[M(4176)]((31&V)<<6|q)}else P+=String[M(4176)](V)}return P},t=function(b,B){return b%B>0&&(b+=B-b%B),b},a=function(b){const B=o;Vi=b,M0.HEAP8=jc=new Int8Array(b),M0[B(2332)]=new Int16Array(b),M0.HEAP32=xi=new Int32Array(b),M0.HEAPU8=Ui=new Uint8Array(b),M0[B(3134)]=new Uint16Array(b),M0[B(2308)]=new Uint32Array(b),M0[B(3398)]=new Float32Array(b),M0[B(2407)]=new Float64Array(b)},r=function(b){const B=o;for(;b.length>0;){var T=b[B(1523)]();if(typeof T!="function"){var M=T[B(3943)];B(1232)==typeof M?T[B(3731)]===void 0?M0[B(2979)](M):M0[B(1853)](M,T[B(3731)]):M(T.arg===void 0?null:T[B(3731)])}else T()}},n=function(){const b=o;if(M0[b(3838)])for(typeof M0[b(3838)]=="function"&&(M0[b(3838)]=[M0.preRun]);M0[b(3838)][b(3650)];)B=M0[b(3838)][b(1523)](),Yc[b(3355)](B);var B;r(Yc)},s=function(){const b=o;if(M0[b(2707)])for(b(1355)==typeof M0[b(2707)]&&(M0[b(2707)]=[M0[b(2707)]]);M0[b(2707)][b(3650)];)B=M0[b(2707)][b(1523)](),Zc[b(3355)](B);var B;r(Zc)},u=function(b){const B=o;if(Tt--,M0[B(1026)]&&M0.monitorRunDependencies(Tt),Tt==0&&(Mr!==null&&(clearInterval(Mr),Mr=null),Gi)){var T=Gi;Gi=null,T()}},c=function(b){const B=o;throw M0[B(2078)]&&M0[B(2078)](b),kc(b+=""),gt(b),Wc=!0,b=B(3073)+b+B(722),new WebAssembly[B(1295)](b)},f=function(b){const B=o;return String[B(3096)].startsWith?b[B(2570)](Qc):b[B(3019)](Qc)===0},l=function(){try{if(Oi)return new Uint8Array(Oi);if(Fi)return Fi(Bt);throw"both async and sync fetching of the wasm failed"}catch(b){c(b)}},m=function(){const b=o;var B={env:$c,wasi_unstable:$c};function T(I,P){const V=C0;var q=I[V(3660)];M0[V(2286)]=q,u()}function M(I){T(I.instance)}function w(I){const P=C0;return(Oi||!Li&&!yt||P(1355)!=typeof fetch?new Promise(function(V,q){V(l())}):fetch(Bt,{credentials:P(3644)})[P(4167)](function(V){const q=P;if(!V.ok)throw q(2884)+Bt+"'";return V[q(1629)]()})[P(3239)](function(){return l()}))[P(4167)](function(V){return WebAssembly[P(2909)](V,B)}).then(I,function(V){gt(P(2795)+V),c(V)})}if(Tt++,M0[b(1026)]&&M0[b(1026)](Tt),M0.instantiateWasm)try{return M0[b(1443)](B,T)}catch(I){return gt("Module.instantiateWasm callback failed with error: "+I),!1}return function(){const I=b;if(Oi||I(1355)!=typeof WebAssembly[I(3321)]||f(Bt)||I(1355)!=typeof fetch)return w(M);fetch(Bt,{credentials:I(3644)}).then(function(P){const V=I;return WebAssembly[V(3321)](P,B)[V(4167)](M,function(q){const X=V;gt(X(941)+q),gt(X(4001)),w(M)})})}(),{}},h=function(b,B,T){const M=o;Ui[M(2590)](Ui[M(1238)](B,B+T),b)},C=function(b){const B=o;try{return Ni[B(2321)](b-Vi[B(3818)]+65535>>16),a(Ni[B(4056)]),1}catch{}},p=function(b){const B=o;var T=jc.length,M=65536,w=2147418112;if(b>w)return!1;for(var I=Math[B(2092)](T,16777216);I<b;)I=I<=536870912?t(2*I,M):Math.min(t((3*I+2147483648)/4,M),w);return!!C(I)},_=function(b,B,T,M){const w=o;try{for(var I=0,P=0;P<T;P++){for(var V=xi[B+8*P>>2],q=xi[B+(8*P+4)>>2],X=0;X<q;X++)Q2[w(3490)](b,Ui[V+X]);I+=q}return xi[M>>2]=I,0}catch(H){return w(1345)!=typeof FS&&H instanceof FS[w(3506)]||c(H),H.errno}},y=function(b){const B=o;this[B(3085)]=B(2631),this[B(2362)]=B(1952)+b+")",this[B(2240)]=b},A=function(b){const B=o;function T(){Wa||(Wa=!0,Wc||(r(Jc),r(L1),M0.onRuntimeInitialized&&M0.onRuntimeInitialized(),s()))}Tt>0||(n(),Tt>0||(M0[B(3695)]?(M0.setStatus(B(2984)),setTimeout(function(){setTimeout(function(){M0[C0(3695)]("")},1),T()},1)):T()))};var Z2,M0=M0!==void 0?M0:{},Ii={};for(Z2 in M0)M0[o(2364)](Z2)&&(Ii[Z2]=M0[Z2]);var Li=!1,yt=!1,Pr=!1,Kc=!1;Li=o(2408)==typeof window,yt=o(1355)==typeof importScripts,Pr=o(2408)==typeof process&&o(2408)==typeof process[o(948)]&&o(4039)==typeof process[o(948)].node&&!Li&&!yt,Kc=!Li&&!Pr&&!yt;var ka,Fi,wr,Sr,_t="";Pr?(_t=__dirname+"/",ka=function(b,B){const T=o;return wr||(wr=require("fs")),Sr||(Sr=require(T(757))),b=Sr[T(1586)](b),wr[T(3754)](b,B?null:T(3542))},Fi=function(b){const B=o;var T=ka(b,!0);return T[B(4056)]||(T=new Uint8Array(T)),e(T[B(4056)]),T},process[o(2166)][o(3650)]>1&&process[o(2166)][1][o(960)](/\\/g,"/"),process[o(2166)].slice(2),o(1345)!=typeof module&&(module.exports=M0),process.on(o(1800),function(b){if(!(b instanceof y))throw b}),process.on("unhandledRejection",c),M0[o(577)]=function(){return"[Emscripten Module object]"}):Kc?(o(1345)!=typeof read&&(ka=function(b){return read(b)}),Fi=function(b){const B=o;var T;return B(1355)==typeof readbuffer?new Uint8Array(readbuffer(b)):(e(typeof(T=read(b,B(961)))=="object"),T)},o(1345)!=typeof scriptArgs&&scriptArgs,o(1345)!=typeof print&&(o(1345)==typeof console&&(console={}),console[o(3240)]=print,console[o(2580)]=console[o(2111)]=o(1345)!=typeof printErr?printErr:print)):(Li||yt)&&(yt?_t=self[o(819)][o(2318)]:document[o(3372)]&&(_t=document[o(3372)].src),_t=_t[o(3019)](o(2605))!==0?_t[o(2310)](0,_t[o(3308)]("/")+1):"",ka=function(b){const B=o;var T=new XMLHttpRequest;return T[B(3928)](B(2313),b,!1),T.send(null),T[B(3382)]},yt&&(Fi=function(b){const B=o;var T=new XMLHttpRequest;return T.open(B(2313),b,!1),T[B(1236)]=B(1595),T[B(3414)](null),new Uint8Array(T[B(2402)])}));var Oi,Ni,kc=M0[o(4115)]||console.log[o(2383)](console),gt=M0[o(683)]||console[o(2580)][o(2383)](console);for(Z2 in Ii)Ii[o(2364)](Z2)&&(M0[Z2]=Ii[Z2]);Ii=null,M0[o(3356)],M0[o(4150)],M0.quit,M0.wasmBinary&&(Oi=M0[o(2764)]),M0.noExitRuntime,o(2408)!=typeof WebAssembly&&gt(o(4097));var M1=new WebAssembly[o(1508)]({initial:6,maximum:6,element:o(3295)}),Wc=!1,Xc=o(1345)!=typeof TextDecoder?new TextDecoder(o(3542)):void 0;o(1345)!=typeof TextDecoder&&new TextDecoder(o(3894));var Vi,jc,Ui,xi,R1=65536,D1=5247584,I1=4544,qc=M0[o(1029)]||16777216;(Ni=M0[o(1396)]?M0.wasmMemory:new WebAssembly[o(718)]({initial:qc/R1}))&&(Vi=Ni[o(4056)]),qc=Vi.byteLength,a(Vi),xi[I1>>2]=D1;var Yc=[],Jc=[],L1=[],Zc=[],Tt=0,Mr=null,Gi=null;M0.preloadedImages={},M0.preloadedAudios={};var Qc=o(1792),Bt=o(675);f(Bt)||(Bt=Qx("ThirdParty/crunch.wasm")),Jc[o(2583)]({func:function(){F1()}});var Q2={buffers:[null,[],[]],printChar:function(b,B){var M=Q2[o(2063)][b];B===0||B===10?((b===1?kc:gt)(x(M,0)),M.length=0):M.push(B)},varargs:0,get:function(b){const B=o;return Q2.varargs+=4,xi[Q2[B(2055)]-4>>2]},getStr:function(){var b,B;return(b=Q2.get())?x(Ui,b,B):""},get64:function(){const b=o;var B=Q2[b(3715)]();return Q2[b(3715)](),B},getZero:function(){Q2[o(3715)]()}},$c={a:h,b:p,c:_,memory:Ni,table:M1},xu=m();M0[o(2286)]=xu;var Wa,F1=M0[o(1974)]=function(){const b=o;return M0[b(2286)].d[b(517)](null,arguments)};if(M0[o(1187)]=function(){return M0[o(2286)].e.apply(null,arguments)},M0[o(2220)]=function(){const b=o;return M0.asm.f[b(517)](null,arguments)},M0[o(2217)]=function(){const b=o;return M0[b(2286)].g[b(517)](null,arguments)},M0[o(3895)]=function(){return M0[o(2286)].h.apply(null,arguments)},M0._crn_get_levels=function(){const b=o;return M0.asm.i[b(517)](null,arguments)},M0[o(1214)]=function(){const b=o;return M0[b(2286)].j[b(517)](null,arguments)},M0[o(3675)]=function(){const b=o;return M0[b(2286)].k[b(517)](null,arguments)},M0[o(3716)]=function(){const b=o;return M0[b(2286)].l[b(517)](null,arguments)},M0[o(3734)]=function(){return M0[o(2286)].m.apply(null,arguments)},M0[o(2286)]=xu,Gi=function b(){Wa||A(),Wa||(Gi=b)},M0.run=A,M0[o(2765)])for(o(1355)==typeof M0[o(2765)]&&(M0[o(2765)]=[M0[o(2765)]]);M0[o(2765)][o(3650)]>0;)M0[o(2765)].pop()();A()}var O1=M0,N1=Object[o(921)]({__proto__:null,default:O1}),V1=function(e){const x=o;var t=x(1345)!=typeof document&&document[x(3372)]?document[x(3372)].src:void 0;typeof __filename<"u"&&(t=t||__filename);var a,r,n=(e=e||{})!==void 0?e:{};n[x(2266)]=new Promise(function(E,g){a=E,r=g});var s,u={};for(s in n)n.hasOwnProperty(s)&&(u[s]=n[s]);var c,f,l,m;c=x(2408)==typeof window,f=x(1355)==typeof importScripts,l=x(2408)==typeof process&&x(2408)==typeof process.versions&&x(4039)==typeof process[x(948)][x(3166)],m=!c&&!l&&!f;var h,C,p,_,y,A="";l?(A=f?require(x(757))[x(2905)](A)+"/":__dirname+"/",h=function(E,g){const R=x;return _||(_=require("fs")),y||(y=require(R(757))),E=y[R(1586)](E),_[R(3754)](E,g?null:"utf8")},p=function(E){const g=x;var R=h(E,!0);return R[g(4056)]||(R=new Uint8Array(R)),I(R[g(4056)]),R},process[x(2166)][x(3650)]>1&&process[x(2166)][1].replace(/\\/g,"/"),process[x(2166)][x(3403)](2),process.on(x(1800),function(E){if(!(E instanceof Wr))throw E}),process.on(x(3912),H0),n[x(577)]=function(){return"[Emscripten Module object]"}):m?(x(1345)!=typeof read&&(h=function(E){return read(E)}),p=function(E){const g=x;var R;return g(1355)==typeof readbuffer?new Uint8Array(readbuffer(E)):(I(g(2408)==typeof(R=read(E,g(961)))),R)},typeof scriptArgs<"u"&&scriptArgs,x(1345)!=typeof print&&(typeof console>"u"&&(console={}),console[x(3240)]=print,console[x(2580)]=console[x(2111)]=x(1345)!=typeof printErr?printErr:print)):(c||f)&&(f?A=self[x(819)][x(2318)]:x(1345)!=typeof document&&document[x(3372)]&&(A=document[x(3372)][x(3612)]),t&&(A=t),A=A.indexOf(x(2605))!==0?A[x(2310)](0,A[x(3308)]("/")+1):"",h=function(E){const g=x;var R=new XMLHttpRequest;return R.open("GET",E,!1),R[g(3414)](null),R[g(3382)]},f&&(p=function(E){const g=x;var R=new XMLHttpRequest;return R[g(3928)]("GET",E,!1),R[g(1236)]=g(1595),R[g(3414)](null),new Uint8Array(R[g(2402)])}),C=function(E,g,R){const G=x;var t0=new XMLHttpRequest;t0.open("GET",E,!0),t0[G(1236)]=G(1595),t0[G(4051)]=function(){const Q=G;t0[Q(2240)]==200||t0.status==0&&t0[Q(2402)]?g(t0.response):R()},t0[G(3811)]=R,t0[G(3414)](null)});var b,B,T=n[x(4115)]||console[x(3240)][x(2383)](console),M=n[x(683)]||console[x(2580)].bind(console);for(s in u)u[x(2364)](s)&&(n[s]=u[s]);u=null,n[x(3356)],n[x(4150)],n.quit,n.wasmBinary&&(b=n[x(2764)]),n[x(1331)],x(2408)!=typeof WebAssembly&&H0(x(4097));var w=!1;function I(E,g){E||H0(x(3501)+g)}var P=x(1345)!=typeof TextDecoder?new TextDecoder(x(3542)):void 0;function V(E,g,R){const G=x;for(var t0=g+R,Q=g;E[Q]&&!(Q>=t0);)++Q;if(Q-g>16&&E[G(1238)]&&P)return P.decode(E[G(1238)](g,Q));for(var l0="";g<Q;){var A0=E[g++];if(128&A0){var h0=63&E[g++];if((224&A0)!=192){var m0=63&E[g++];if((A0=(240&A0)==224?(15&A0)<<12|h0<<6|m0:(7&A0)<<18|h0<<12|m0<<6|63&E[g++])<65536)l0+=String.fromCharCode(A0);else{var B0=A0-65536;l0+=String[G(4176)](55296|B0>>10,56320|1023&B0)}}else l0+=String[G(4176)]((31&A0)<<6|h0)}else l0+=String[G(4176)](A0)}return l0}function q(E,g){return E?V(z,E,g):""}var X,H,z,u0,n0,N,Y,W,x0,y0,f0=x(1345)!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function v(E,g){const R=x;for(var G=E,t0=G>>1,Q=t0+g/2;!(t0>=Q)&&n0[t0];)++t0;if((G=t0<<1)-E>32&&f0)return f0[R(2728)](z[R(1238)](E,G));for(var l0="",A0=0;!(A0>=g/2);++A0){var h0=u0[E+2*A0>>1];if(h0==0)break;l0+=String.fromCharCode(h0)}return l0}function T0(E,g,R){const G=x;if(R===void 0&&(R=2147483647),R<2)return 0;for(var t0=g,Q=(R-=2)<2*E[G(3650)]?R/2:E[G(3650)],l0=0;l0<Q;++l0){var A0=E[G(3128)](l0);u0[g>>1]=A0,g+=2}return u0[g>>1]=0,g-t0}function F0(E){return 2*E.length}function O0(E,g){const R=x;for(var G=0,t0="";!(G>=g/4);){var Q=N[E+4*G>>2];if(Q==0)break;if(++G,Q>=65536){var l0=Q-65536;t0+=String[R(4176)](55296|l0>>10,56320|1023&l0)}else t0+=String[R(4176)](Q)}return t0}function w0(E,g,R){const G=x;if(R===void 0&&(R=2147483647),R<4)return 0;for(var t0=g,Q=t0+R-4,l0=0;l0<E[G(3650)];++l0){var A0=E[G(3128)](l0);if(A0>=55296&&A0<=57343&&(A0=65536+((1023&A0)<<10)|1023&E[G(3128)](++l0)),N[g>>2]=A0,(g+=4)+4>Q)break}return N[g>>2]=0,g-t0}function U0(E){const g=x;for(var R=0,G=0;G<E[g(3650)];++G){var t0=E[g(3128)](G);t0>=55296&&t0<=57343&&++G,R+=4}return R}function xx(E){const g=x;X=E,n[g(3465)]=H=new Int8Array(E),n[g(2332)]=u0=new Int16Array(E),n[g(3499)]=N=new Int32Array(E),n[g(4002)]=z=new Uint8Array(E),n[g(3134)]=n0=new Uint16Array(E),n[g(2308)]=Y=new Uint32Array(E),n[g(3398)]=W=new Float32Array(E),n[g(2407)]=x0=new Float64Array(E)}n.INITIAL_MEMORY;var W0=[],j0=[],tx=[],v0=[],ix=0,ax=null;function H0(E){const g=x;n[g(2078)]&&n[g(2078)](E),M(E+=""),w=!0,E=g(3073)+E+g(722);var R=new WebAssembly[g(1295)](E);throw r(R),R}function G0(E,g){const R=x;return String[R(3096)][R(2570)]?E.startsWith(g):E.indexOf(g)===0}n.preloadedImages={},n[x(3663)]={};function nx(E){return G0(E,x(1792))}function L(E){return G0(E,"file://")}var U=x(4112);function K(E){const g=x;try{if(E==U&&b)return new Uint8Array(b);if(p)return p(E);throw g(2701)}catch(R){H0(R)}}function k(E){const g=x;for(;E.length>0;){var R=E.shift();if(g(1355)!=typeof R){var G=R[g(3943)];g(1232)==typeof G?R[g(3731)]===void 0?y0[g(3715)](G)():y0[g(3715)](G)(R[g(3731)]):G(R[g(3731)]===void 0?null:R[g(3731)])}else R(n)}}nx(U)||(U=Qx("ThirdParty/basis_transcoder.wasm"));var d0={};function $(E){const g=x;for(;E[g(3650)];){var R=E[g(1526)]();E[g(1526)]()(R)}}function r0(E){return this[x(2032)](Y[E>>2])}var a0={},e0={},b0={};function o0(E){const g=x;if(E===void 0)return"_unknown";var R=(E=E[g(960)](/[^a-zA-Z0-9_]/g,"$"))[g(3128)](0);return R>=48&&R<=57?"_"+E:E}function c0(E,g){const R=x;return E=o0(E),new Function(R(1129),R(2729)+E+R(2921))(g)}function S0(E,g){const R=x;var G=c0(g,function(t0){const Q=C0;this[Q(3085)]=g,this[Q(2362)]=t0;var l0=new Error(t0)[Q(3410)];l0!==void 0&&(this[Q(3410)]=this[Q(2557)]()+`
`+l0[Q(960)](/^Error(:[^\n]*)?\n/,""))});return G[R(3096)]=Object[R(1693)](E.prototype),G.prototype[R(4152)]=G,G[R(3096)][R(2557)]=function(){const t0=R;return this[t0(2362)]===void 0?this[t0(3085)]:this.name+": "+this[t0(2362)]},G}var z0=void 0;function q0(E){throw new z0(E)}function N0(E,g,R){const G=x;function t0(h0){const m0=C0;var B0=R(h0);B0[m0(3650)]!==E[m0(3650)]&&q0(m0(1697));for(var V0=0;V0<E.length;++V0)S(E[V0],B0[V0])}E.forEach(function(h0){b0[h0]=g});var Q=new Array(g.length),l0=[],A0=0;g[G(1991)](function(h0,m0){const B0=G;e0[B0(2364)](h0)?Q[m0]=e0[h0]:(l0[B0(2583)](h0),a0[B0(2364)](h0)||(a0[h0]=[]),a0[h0][B0(2583)](function(){const V0=B0;Q[m0]=e0[h0],++A0===l0[V0(3650)]&&t0(Q)}))}),l0.length===0&&t0(Q)}function sx(E){switch(E){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+E)}}var hx=void 0;function Y0(E){for(var g="",R=E;z[R];)g+=hx[z[R++]];return g}var Z=void 0;function p0(E){throw new Z(E)}function S(E,g,R){const G=x;if(R=R||{},!(G(1226)in g))throw new TypeError(G(2810));var t0=g[G(3085)];if(E||p0(G(973)+t0+G(4021)),e0[G(2364)](E)){if(R[G(3058)])return;p0(G(3119)+t0+"' twice")}if(e0[E]=g,delete b0[E],a0[G(2364)](E)){var Q=a0[E];delete a0[E],Q[G(1991)](function(l0){l0()})}}function F(E){const g=x;if(!(this instanceof bx)||!(E instanceof bx))return!1;for(var R=this.$$[g(1034)][g(805)],G=this.$$[g(1213)],t0=E.$$.ptrType[g(805)],Q=E.$$[g(1213)];R[g(3253)];)G=R[g(2338)](G),R=R[g(3253)];for(;t0[g(3253)];)Q=t0[g(2338)](Q),t0=t0[g(3253)];return R===t0&&G===Q}function D0(E){const g=x;return{count:E[g(2081)],deleteScheduled:E[g(1302)],preservePointerOnDelete:E.preservePointerOnDelete,ptr:E[g(1213)],ptrType:E[g(1034)],smartPtr:E[g(2397)],smartPtrType:E[g(3689)]}}function vx(E){const g=x;p0(E.$$.ptrType[g(805)].name+g(4123))}var L0=!1;function _x(E){}function R0(E){const g=x;E[g(2081)].value-=1,E[g(2081)][g(2976)]===0&&function(R){const G=g;R[G(2397)]?R[G(3689)][G(3547)](R.smartPtr):R[G(1034)][G(805)][G(3547)](R.ptr)}(E)}function ex(E){return typeof FinalizationGroup>"u"?(ex=function(g){return g},E):(L0=new FinalizationGroup(function(g){const R=C0;for(var G=g[R(1998)]();!G[R(2859)];G=g[R(1998)]()){var t0=G[R(2976)];t0.ptr?R0(t0):console[R(2580)]("object already deleted: "+t0[R(1213)])}}),ex=function(g){return L0[C0(1053)](g,g.$$,g.$$),g},_x=function(g){L0[C0(3914)](g.$$)},ex(E))}function g0(){const E=x;if(this.$$[E(1213)]||vx(this),this.$$[E(2514)])return this.$$[E(2081)][E(2976)]+=1,this;var g=ex(Object[E(1693)](Object.getPrototypeOf(this),{$$:{value:D0(this.$$)}}));return g.$$[E(2081)][E(2976)]+=1,g.$$[E(1302)]=!1,g}function _0(){const E=x;this.$$.ptr||vx(this),this.$$[E(1302)]&&!this.$$[E(2514)]&&p0("Object already scheduled for deletion"),_x(this),R0(this.$$),this.$$[E(2514)]||(this.$$[E(2397)]=void 0,this.$$[E(1213)]=void 0)}function $2(){const E=x;return!this.$$[E(1213)]}var Ax=void 0,K0=[];function l2(){const E=x;for(;K0.length;){var g=K0[E(1526)]();g.$$[E(1302)]=!1,g[E(3632)]()}}function Et(){const E=x;return this.$$[E(1213)]||vx(this),this.$$[E(1302)]&&!this.$$[E(2514)]&&p0(E(1835)),K0[E(2583)](this),K0.length===1&&Ax&&Ax(l2),this.$$.deleteScheduled=!0,this}function bx(){}var Rx={};function Zx(E,g,R){const G=x;if(E[g][G(1613)]===void 0){var t0=E[g];E[g]=function(){const Q=G;return E[g][Q(1613)][Q(2364)](arguments[Q(3650)])||p0("Function '"+R+Q(2060)+arguments.length+") - expects one of ("+E[g].overloadTable+")!"),E[g][Q(1613)][arguments.length][Q(517)](this,arguments)},E[g][G(1613)]=[],E[g][G(1613)][t0[G(3192)]]=t0}}function Ox(E,g,R){const G=x;n[G(2364)](E)?((R===void 0||n[E][G(1613)]!==void 0&&n[E].overloadTable[R]!==void 0)&&p0("Cannot register public name '"+E+"' twice"),Zx(n,E,E),n.hasOwnProperty(R)&&p0(G(2802)+R+")!"),n[E][G(1613)][R]=g):(n[E]=g,R!==void 0&&(n[E][G(3791)]=R))}function xt(E,g,R,G,t0,Q,l0,A0){const h0=x;this.name=E,this[h0(4152)]=g,this[h0(1072)]=R,this[h0(3547)]=G,this[h0(3253)]=t0,this[h0(576)]=Q,this[h0(2338)]=l0,this[h0(2693)]=A0,this.pureVirtualFunctions=[]}function f2(E,g,R){const G=x;for(;g!==R;)g[G(2338)]||p0("Expected null or instance of "+R[G(3085)]+G(677)+g[G(3085)]),E=g[G(2338)](E),g=g.baseClass;return E}function wx(E,g){const R=x;if(g===null)return this[R(1065)]&&p0(R(3158)+this.name),0;g.$$||p0(R(3112)+et(g)+'" as a '+this[R(3085)]),g.$$.ptr||p0(R(1163)+this.name);var G=g.$$.ptrType[R(805)];return f2(g.$$[R(1213)],G,this[R(805)])}function ne(E,g){const R=x;var G;if(g===null)return this.isReference&&p0(R(3158)+this.name),this.isSmartPointer?(G=this[R(4035)](),E!==null&&E[R(2583)](this[R(3547)],G),G):0;g.$$||p0(R(3112)+et(g)+'" as a '+this[R(3085)]),g.$$[R(1213)]||p0(R(1163)+this[R(3085)]),!this[R(612)]&&g.$$[R(1034)][R(612)]&&p0("Cannot convert argument of type "+(g.$$.smartPtrType?g.$$[R(3689)].name:g.$$[R(1034)][R(3085)])+R(662)+this[R(3085)]);var t0=g.$$[R(1034)].registeredClass;if(G=f2(g.$$[R(1213)],t0,this.registeredClass),this[R(3387)])switch(g.$$[R(2397)]===void 0&&p0("Passing raw pointer to smart pointer is illegal"),this[R(2549)]){case 0:g.$$[R(3689)]===this?G=g.$$[R(2397)]:p0(R(460)+(g.$$[R(3689)]?g.$$[R(3689)][R(3085)]:g.$$.ptrType.name)+R(662)+this[R(3085)]);break;case 1:G=g.$$[R(2397)];break;case 2:if(g.$$[R(3689)]===this)G=g.$$[R(2397)];else{var Q=g[R(3552)]();G=this[R(733)](G,e2(function(){Q[R(3632)]()})),E!==null&&E[R(2583)](this[R(3547)],G)}break;default:p0(R(3251))}return G}function Be(E,g){const R=x;if(g===null)return this[R(1065)]&&p0(R(3158)+this[R(3085)]),0;g.$$||p0(R(3112)+et(g)+R(4177)+this.name),g.$$[R(1213)]||p0("Cannot pass deleted object as a pointer of type "+this.name),g.$$[R(1034)][R(612)]&&p0("Cannot convert argument of type "+g.$$.ptrType.name+" to parameter type "+this[R(3085)]);var G=g.$$.ptrType[R(805)];return f2(g.$$.ptr,G,this[R(805)])}function Ae(E){const g=x;return this[g(977)]&&(E=this[g(977)](E)),E}function Hx(E){const g=x;this.rawDestructor&&this[g(3547)](E)}function Dx(E){E!==null&&E[x(3632)]()}function Pt(E,g,R){const G=x;if(g===R)return E;if(R[G(3253)]===void 0)return null;var t0=Pt(E,g,R.baseClass);return t0===null?null:R.downcast(t0)}function Rr(){const E=x;return Object.keys(wt)[E(3650)]}function Dr(){const E=x;var g=[];for(var R in wt)wt[E(2364)](R)&&g[E(2583)](wt[R]);return g}function Ir(E){const g=x;Ax=E,K0[g(3650)]&&Ax&&Ax(l2)}var wt={};function Lr(E,g){return g=function(R,G){const t0=C0;for(G===void 0&&p0("ptr should not be undefined");R[t0(3253)];)G=R[t0(2338)](G),R=R[t0(3253)];return G}(E,g),wt[g]}function ei(E,g){const R=x;return g[R(1034)]&&g.ptr||q0(R(894)),!!g[R(3689)]!=!!g[R(2397)]&&q0("Both smartPtrType and smartPtr must be specified"),g[R(2081)]={value:1},ex(Object[R(1693)](E,{$$:{value:g}}))}function Fr(E){const g=x;var R=this[g(3345)](E);if(!R)return this.destructor(E),null;var G=Lr(this[g(805)],R);if(G!==void 0){if(G.$$[g(2081)][g(2976)]===0)return G.$$[g(1213)]=R,G.$$.smartPtr=E,G[g(3552)]();var t0=G[g(3552)]();return this.destructor(E),t0}function Q(){const B0=g;return this[B0(3387)]?ei(this.registeredClass[B0(1072)],{ptrType:this[B0(3172)],ptr:R,smartPtrType:this,smartPtr:E}):ei(this[B0(805)][B0(1072)],{ptrType:this,ptr:E})}var l0,A0=this.registeredClass.getActualType(R),h0=Rx[A0];if(!h0)return Q.call(this);l0=this.isConst?h0.constPointerType:h0[g(2439)];var m0=Pt(R,this[g(805)],l0[g(805)]);return m0===null?Q[g(798)](this):this[g(3387)]?ei(l0[g(805)][g(1072)],{ptrType:l0,ptr:m0,smartPtrType:this,smartPtr:E}):ei(l0.registeredClass.instancePrototype,{ptrType:l0,ptr:m0})}function x2(E,g,R,G,t0,Q,l0,A0,h0,m0,B0){const V0=x;this.name=E,this[V0(805)]=g,this[V0(1065)]=R,this[V0(612)]=G,this[V0(3387)]=t0,this[V0(3172)]=Q,this[V0(2549)]=l0,this[V0(977)]=A0,this[V0(4035)]=h0,this[V0(733)]=m0,this[V0(3547)]=B0,t0||g[V0(3253)]!==void 0?this.toWireType=ne:G?(this[V0(1850)]=wx,this[V0(4165)]=null):(this[V0(1850)]=Be,this[V0(4165)]=null)}function Xa(E,g,R){const G=x;n.hasOwnProperty(E)||q0(G(4e3)),n[E].overloadTable!==void 0&&R!==void 0?n[E][G(1613)][R]=g:(n[E]=g,n[E][G(3192)]=R)}function Or(E,g,R){const G=x;return E[G(3019)]("j")!=-1?function(t0,Q,l0){const A0=G;var h0=n["dynCall_"+t0];return l0&&l0[A0(3650)]?h0.apply(null,[Q].concat(l0)):h0.call(null,Q)}(E,g,R):y0.get(g)[G(517)](null,R)}function Ee(E,g){const R=x;var G,t0,Q,l0=(E=Y0(E))[R(3019)]("j")!=-1?(G=E,t0=g,Q=[],function(){const A0=R;Q[A0(3650)]=arguments[A0(3650)];for(var h0=0;h0<arguments[A0(3650)];h0++)Q[h0]=arguments[h0];return Or(G,t0,Q)}):y0[R(3715)](g);return R(1355)!=typeof l0&&p0(R(3576)+E+": "+g),l0}var ja=void 0;function qa(E){var g=$a(E),R=Y0(g);return t2(g),R}function ti(E,g){const R=x;var G=[],t0={};throw g[R(1991)](function Q(l0){const A0=R;t0[l0]||e0[l0]||(b0[l0]?b0[l0].forEach(Q):(G[A0(2583)](l0),t0[l0]=!0))}),new ja(E+": "+G.map(qa).join([", "]))}function Hi(E,g){const R=x;for(var G=[],t0=0;t0<E;t0++)G[R(2583)](N[(g>>2)+t0]);return G}function Ya(E,g){const R=x;if(!(E instanceof Function))throw new TypeError("new_ called with constructor type "+typeof E+R(752));var G=c0(E[R(3085)]||R(2316),function(){});G[R(3096)]=E[R(3096)];var t0=new G,Q=E[R(517)](t0,g);return Q instanceof Object?Q:t0}function Ja(E,g,R,G,t0){const Q=x;var l0=g[Q(3650)];l0<2&&p0("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var A0=g[1]!==null&&R!==null,h0=!1,m0=1;m0<g[Q(3650)];++m0)if(g[m0]!==null&&g[m0][Q(4165)]===void 0){h0=!0;break}var B0=Q(3984)!==g[0][Q(3085)],V0="",k0="";for(m0=0;m0<l0-2;++m0)V0+=(m0!==0?", ":"")+Q(3731)+m0,k0+=(m0!==0?", ":"")+"arg"+m0+Q(1471);var X0="return function "+o0(E)+"("+V0+`) {
if (arguments.length !== `+(l0-2)+`) {
throwBindingError('function `+E+Q(1874)+(l0-2)+Q(2046);h0&&(X0+=Q(707));var J0=Q(h0?1121:2172),rx=["throwBindingError",Q(4062),"fn",Q(1654),Q(748),Q(2801)],yx=[p0,G,t0,$,g[0],g[1]];for(A0&&(X0+=Q(1860)+J0+`, this);
`),m0=0;m0<l0-2;++m0)X0+="var arg"+m0+Q(2090)+m0+Q(3831)+J0+Q(1577)+m0+Q(3467)+g[m0+2][Q(3085)]+`
`,rx[Q(2583)]("argType"+m0),yx.push(g[m0+2]);if(A0&&(k0=Q(2770)+(k0[Q(3650)]>0?", ":"")+k0),X0+=(B0?"var rv = ":"")+Q(2506)+(k0[Q(3650)]>0?", ":"")+k0+Q(1879),h0)X0+=Q(2779);else for(m0=A0?1:2;m0<g[Q(3650)];++m0){var xe=m0===1?Q(2770):Q(3731)+(m0-2)+Q(1471);g[m0].destructorFunction!==null&&(X0+=xe+Q(3473)+xe+Q(3467)+g[m0][Q(3085)]+`
`,rx.push(xe+Q(3412)),yx[Q(2583)](g[m0][Q(4165)]))}return B0&&(X0+=Q(2356)),X0+=`}
`,rx[Q(2583)](X0),Ya(Function,rx).apply(null,yx)}var zi=[],de=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Ki(E){const g=x;E>4&&--de[E][g(2821)]==0&&(de[E]=void 0,zi[g(2583)](E))}function Nr(){const E=x;for(var g=0,R=5;R<de[E(3650)];++R)de[R]!==void 0&&++g;return g}function Vr(){const E=x;for(var g=5;g<de[E(3650)];++g)if(de[g]!==void 0)return de[g];return null}function e2(E){const g=x;switch(E){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var R=zi.length?zi.pop():de[g(3650)];return de[R]={refcount:1,value:E},R}}function Ur(E,g,R){const G=x;switch(g){case 0:return function(t0){const Q=C0;var l0=R?H:z;return this[Q(2032)](l0[t0])};case 1:return function(t0){const Q=C0;var l0=R?u0:n0;return this[Q(2032)](l0[t0>>1])};case 2:return function(t0){const Q=C0;var l0=R?N:Y;return this[Q(2032)](l0[t0>>2])};default:throw new TypeError(G(444)+E)}}function ii(E,g){var R=e0[E];return R===void 0&&p0(g+" has unknown type "+qa(E)),R}function et(E){const g=x;if(E===null)return g(2172);var R=typeof E;return g(2408)===R||g(1024)===R||R==="function"?E.toString():""+E}function Gr(E,g){const R=x;switch(g){case 2:return function(G){return this[C0(2032)](W[G>>2])};case 3:return function(G){return this.fromWireType(x0[G>>3])};default:throw new TypeError(R(4109)+E)}}function Hr(E,g,R){switch(g){case 0:return R?function(G){return H[G]}:function(G){return z[G]};case 1:return R?function(G){return u0[G>>1]}:function(G){return n0[G>>1]};case 2:return R?function(G){return N[G>>2]}:function(G){return Y[G>>2]};default:throw new TypeError("Unknown integer type: "+E)}}function St(E){return E||p0(x(1647)+E),de[E].value}var zr={};function ai(E){var g=zr[E];return g===void 0?Y0(E):g}var ki=[];function Za(){return typeof globalThis=="object"?globalThis:Function("return this")()}var Qa={};function Kr(E){const g=x;try{return B.grow(E-X[g(3818)]+65535>>>16),xx(B.buffer),1}catch{}}var ni={mappings:{},buffers:[null,[],[]],printChar:function(E,g){const R=x;var G=ni[R(2063)][E];g===0||g===10?((E===1?T:M)(V(G,0)),G.length=0):G[R(2583)](g)},varargs:void 0,get:function(){const E=x;return ni[E(2055)]+=4,N[ni[E(2055)]-4>>2]},getStr:function(E){return q(E)},get64:function(E,g){return E}};z0=n[x(957)]=S0(Error,x(957)),function(){const E=x;for(var g=new Array(256),R=0;R<256;++R)g[R]=String[E(4176)](R);hx=g}(),Z=n[x(3475)]=S0(Error,x(3475)),bx[x(3096)][x(1873)]=F,bx[x(3096)][x(3552)]=g0,bx.prototype[x(3632)]=_0,bx[x(3096)][x(2750)]=$2,bx[x(3096)][x(3135)]=Et,x2[x(3096)][x(3345)]=Ae,x2[x(3096)][x(2481)]=Hx,x2[x(3096)][x(1226)]=8,x2[x(3096)][x(4171)]=r0,x2[x(3096)][x(2259)]=Dx,x2[x(3096)][x(2032)]=Fr,n.getInheritedInstanceCount=Rr,n[x(4129)]=Dr,n[x(1039)]=l2,n[x(4179)]=Ir,ja=n[x(3959)]=S0(Error,x(3959)),n[x(1457)]=Nr,n[x(770)]=Vr;var kr={t:function(E){const g=x;var R=d0[E];delete d0[E];var G=R[g(4035)],t0=R[g(3547)],Q=R[g(2587)];N0([E],Q[g(3317)](function(l0){return l0[g(470)]})[g(2263)](Q[g(3317)](function(l0){return l0[g(1480)]})),function(l0){const A0=g;var h0={};return Q[A0(1991)](function(m0,B0){const V0=A0;var k0=m0[V0(633)],X0=l0[B0],J0=m0[V0(1673)],rx=m0[V0(1899)],yx=l0[B0+Q.length],xe=m0[V0(2125)],re=m0.setterContext;h0[k0]={read:function(Nx){return X0[V0(2032)](J0(rx,Nx))},write:function(Nx,Tx){var oi=[];xe(re,Nx,yx.toWireType(oi,Tx)),$(oi)}}}),[{name:R.name,fromWireType:function(m0){var B0={};for(var V0 in h0)B0[V0]=h0[V0].read(m0);return t0(m0),B0},toWireType:function(m0,B0){const V0=A0;for(var k0 in h0)if(!(k0 in B0))throw new TypeError(V0(1827)+k0+'"');var X0=G();for(k0 in h0)h0[k0][V0(3795)](X0,B0[k0]);return m0!==null&&m0.push(t0,X0),X0},argPackAdvance:8,readValueFromPointer:r0,destructorFunction:t0}]})},I:function(E,g,R,G,t0){var Q=sx(R);S(E,{name:g=Y0(g),fromWireType:function(l0){return!!l0},toWireType:function(l0,A0){return A0?G:t0},argPackAdvance:8,readValueFromPointer:function(l0){const A0=C0;var h0;if(R===1)h0=H;else if(R===2)h0=u0;else{if(R!==4)throw new TypeError(A0(688)+g);h0=N}return this.fromWireType(h0[l0>>Q])},destructorFunction:null})},x:function(E,g,R,G,t0,Q,l0,A0,h0,m0,B0,V0,k0){B0=Y0(B0),Q=Ee(t0,Q),A0&&(A0=Ee(l0,A0)),m0&&(m0=Ee(h0,m0)),k0=Ee(V0,k0);var X0=o0(B0);Ox(X0,function(){ti(C0(3492)+B0+" due to unbound types",[G])}),N0([E,g,R],G?[G]:[],function(J0){const rx=C0;var yx,xe;J0=J0[0],xe=G?(yx=J0[rx(805)])[rx(1072)]:bx[rx(3096)];var re=c0(X0,function(){const ye=rx;if(Object[ye(1467)](this)!==Nx)throw new Z(ye(1488)+B0);if(Tx[ye(904)]===void 0)throw new Z(B0+ye(3567));var tn=Tx.constructor_body[arguments[ye(3650)]];if(tn===void 0)throw new Z(ye(4076)+B0+ye(1953)+arguments.length+ye(1286)+Object[ye(3360)](Tx[ye(904)])[ye(2557)]()+") parameters instead!");return tn[ye(517)](this,arguments)}),Nx=Object[rx(1693)](xe,{constructor:{value:re}});re[rx(3096)]=Nx;var Tx=new xt(B0,re,Nx,k0,yx,Q,A0,m0),oi=new x2(B0,Tx,!0,!1,!1),xn=new x2(B0+"*",Tx,!1,!1,!1),en=new x2(B0+rx(2279),Tx,!1,!0,!1);return Rx[E]={pointerType:xn,constPointerType:en},Xa(X0,re),[oi,xn,en]})},w:function(E,g,R,G,t0,Q){I(g>0);var l0=Hi(g,R);t0=Ee(G,t0);var A0=[Q],h0=[];N0([],[E],function(m0){const B0=C0;var V0=B0(3565)+(m0=m0[0])[B0(3085)];if(m0.registeredClass[B0(904)]===void 0&&(m0[B0(805)][B0(904)]=[]),m0.registeredClass.constructor_body[g-1]!==void 0)throw new Z(B0(2743)+(g-1)+") for class '"+m0.name+B0(1100));return m0[B0(805)][B0(904)][g-1]=function(){const k0=B0;ti(k0(3492)+m0[k0(3085)]+k0(2675),l0)},N0([],l0,function(k0){const X0=B0;return m0[X0(805)][X0(904)][g-1]=function(){const J0=X0;arguments[J0(3650)]!==g-1&&p0(V0+" called with "+arguments[J0(3650)]+J0(910)+(g-1)),h0[J0(3650)]=0,A0[J0(3650)]=g;for(var rx=1;rx<g;++rx)A0[rx]=k0[rx][J0(1850)](h0,arguments[rx-1]);var yx=t0[J0(517)](null,A0);return $(h0),k0[0].fromWireType(yx)},[]}),[]})},d:function(E,g,R,G,t0,Q,l0,A0){var h0=Hi(R,G);g=Y0(g),Q=Ee(t0,Q),N0([],[E],function(m0){const B0=C0;var V0=(m0=m0[0])[B0(3085)]+"."+g;function k0(){const rx=B0;ti(rx(1449)+V0+rx(2675),h0)}A0&&m0[B0(805)][B0(2033)][B0(2583)](g);var X0=m0[B0(805)][B0(1072)],J0=X0[g];return J0===void 0||J0[B0(1613)]===void 0&&J0[B0(2857)]!==m0.name&&J0[B0(3192)]===R-2?(k0[B0(3192)]=R-2,k0.className=m0[B0(3085)],X0[g]=k0):(Zx(X0,g,V0),X0[g][B0(1613)][R-2]=k0),N0([],h0,function(rx){const yx=B0;var xe=Ja(V0,rx,m0,Q,l0);return X0[g][yx(1613)]===void 0?(xe[yx(3192)]=R-2,X0[g]=xe):X0[g][yx(1613)][R-2]=xe,[]}),[]})},k:function(E,g,R){E=Y0(E),N0([],[g],function(G){const t0=C0;return G=G[0],n[E]=G[t0(2032)](R),[]})},H:function(E,g){S(E,{name:g=Y0(g),fromWireType:function(R){const G=C0;var t0=de[R][G(2976)];return Ki(R),t0},toWireType:function(R,G){return e2(G)},argPackAdvance:8,readValueFromPointer:r0,destructorFunction:null})},n:function(E,g,R,G){const t0=x;var Q=sx(R);function l0(){}g=Y0(g),l0[t0(2496)]={},S(E,{name:g,constructor:l0,fromWireType:function(A0){const h0=t0;return this[h0(4152)][h0(2496)][A0]},toWireType:function(A0,h0){return h0.value},argPackAdvance:8,readValueFromPointer:Ur(g,Q,G),destructorFunction:null}),Ox(g,l0)},a:function(E,g,R){const G=x;var t0=ii(E,G(636));g=Y0(g);var Q=t0[G(4152)],l0=Object[G(1693)](t0[G(4152)][G(3096)],{value:{value:R},constructor:{value:c0(t0[G(3085)]+"_"+g,function(){})}});Q[G(2496)][R]=l0,Q[g]=l0},A:function(E,g,R){var G=sx(R);S(E,{name:g=Y0(g),fromWireType:function(t0){return t0},toWireType:function(t0,Q){const l0=C0;if(l0(1232)!=typeof Q&&typeof Q!="boolean")throw new TypeError(l0(1744)+et(Q)+l0(2717)+this[l0(3085)]);return Q},argPackAdvance:8,readValueFromPointer:Gr(g,G),destructorFunction:null})},i:function(E,g,R,G,t0,Q){var l0=Hi(g,R);E=Y0(E),t0=Ee(G,t0),Ox(E,function(){ti(C0(1449)+E+" due to unbound types",l0)},g-1),N0([],l0,function(A0){const h0=C0;var m0=[A0[0],null][h0(2263)](A0.slice(1));return Xa(E,Ja(E,m0,null,t0,Q),g-1),[]})},j:function(E,g,R,G,t0){const Q=x;g=Y0(g),t0===-1&&(t0=4294967295);var l0=sx(R),A0=function(B0){return B0};if(G===0){var h0=32-8*R;A0=function(B0){return B0<<h0>>>h0}}var m0=g[Q(3019)](Q(1198))!=-1;S(E,{name:g,fromWireType:A0,toWireType:function(B0,V0){const k0=Q;if(k0(1232)!=typeof V0&&k0(3399)!=typeof V0)throw new TypeError('Cannot convert "'+et(V0)+k0(2717)+this[k0(3085)]);if(V0<G||V0>t0)throw new TypeError('Passing a number "'+et(V0)+k0(737)+g+'", which is outside the valid range ['+G+", "+t0+"]!");return m0?V0>>>0:0|V0},argPackAdvance:8,readValueFromPointer:Hr(g,l0,G!==0),destructorFunction:null})},h:function(E,g,R){var G=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][g];function t0(Q){var l0=Y,A0=l0[Q>>=2],h0=l0[Q+1];return new G(X,h0,A0)}S(E,{name:R=Y0(R),fromWireType:t0,argPackAdvance:8,readValueFromPointer:t0},{ignoreDuplicateRegistrations:!0})},B:function(E,g){var R=(g=Y0(g))==="std::string";S(E,{name:g,fromWireType:function(G){const t0=C0;var Q,l0=Y[G>>2];if(R)for(var A0=G+4,h0=0;h0<=l0;++h0){var m0=G+4+h0;if(h0==l0||z[m0]==0){var B0=q(A0,m0-A0);Q===void 0?Q=B0:(Q+=String[t0(4176)](0),Q+=B0),A0=m0+1}}else{var V0=new Array(l0);for(h0=0;h0<l0;++h0)V0[h0]=String[t0(4176)](z[G+4+h0]);Q=V0[t0(2243)]("")}return t2(G),Q},toWireType:function(G,t0){const Q=C0;var l0;t0 instanceof ArrayBuffer&&(t0=new Uint8Array(t0));var A0=Q(4039)==typeof t0;A0||t0 instanceof Uint8Array||t0 instanceof Uint8ClampedArray||t0 instanceof Int8Array||p0(Q(3012)),l0=R&&A0?function(){return function(k0){const X0=C0;for(var J0=0,rx=0;rx<k0[X0(3650)];++rx){var yx=k0[X0(3128)](rx);yx>=55296&&yx<=57343&&(yx=65536+((1023&yx)<<10)|1023&k0[X0(3128)](++rx)),yx<=127?++J0:J0+=yx<=2047?2:yx<=65535?3:4}return J0}(t0)}:function(){return t0.length};var h0=l0(),m0=Wi(4+h0+1);if(Y[m0>>2]=h0,R&&A0)(function(k0,X0,J0,rx){const yx=Q;if(!(rx>0))return 0;for(var xe=J0,re=J0+rx-1,Nx=0;Nx<k0[yx(3650)];++Nx){var Tx=k0[yx(3128)](Nx);if(Tx>=55296&&Tx<=57343&&(Tx=65536+((1023&Tx)<<10)|1023&k0[yx(3128)](++Nx)),Tx<=127){if(J0>=re)break;X0[J0++]=Tx}else if(Tx<=2047){if(J0+1>=re)break;X0[J0++]=192|Tx>>6,X0[J0++]=128|63&Tx}else if(Tx<=65535){if(J0+2>=re)break;X0[J0++]=224|Tx>>12,X0[J0++]=128|Tx>>6&63,X0[J0++]=128|63&Tx}else{if(J0+3>=re)break;X0[J0++]=240|Tx>>18,X0[J0++]=128|Tx>>12&63,X0[J0++]=128|Tx>>6&63,X0[J0++]=128|63&Tx}}X0[J0]=0})(t0,z,m0+4,h0+1);else if(A0)for(var B0=0;B0<h0;++B0){var V0=t0.charCodeAt(B0);V0>255&&(t2(m0),p0("String has UTF-16 code units that do not fit in 8 bits")),z[m0+4+B0]=V0}else for(B0=0;B0<h0;++B0)z[m0+4+B0]=t0[B0];return G!==null&&G[Q(2583)](t2,m0),m0},argPackAdvance:8,readValueFromPointer:r0,destructorFunction:function(G){t2(G)}})},v:function(E,g,R){var G,t0,Q,l0,A0;R=Y0(R),g===2?(G=v,t0=T0,l0=F0,Q=function(){return n0},A0=1):g===4&&(G=O0,t0=w0,l0=U0,Q=function(){return Y},A0=2),S(E,{name:R,fromWireType:function(h0){for(var m0,B0=Y[h0>>2],V0=Q(),k0=h0+4,X0=0;X0<=B0;++X0){var J0=h0+4+X0*g;if(X0==B0||V0[J0>>A0]==0){var rx=G(k0,J0-k0);m0===void 0?m0=rx:(m0+=String.fromCharCode(0),m0+=rx),k0=J0+g}}return t2(h0),m0},toWireType:function(h0,m0){typeof m0!="string"&&p0(C0(520)+R);var V0=l0(m0),k0=Wi(4+V0+g);return Y[k0>>2]=V0>>A0,t0(m0,k0+4,V0+g),h0!==null&&h0.push(t2,k0),k0},argPackAdvance:8,readValueFromPointer:r0,destructorFunction:function(h0){t2(h0)}})},u:function(E,g,R,G,t0,Q){d0[E]={name:Y0(g),rawConstructor:Ee(R,G),rawDestructor:Ee(t0,Q),fields:[]}},c:function(E,g,R,G,t0,Q,l0,A0,h0,m0){const B0=x;d0[E][B0(2587)][B0(2583)]({fieldName:Y0(g),getterReturnType:R,getter:Ee(G,t0),getterContext:Q,setterArgumentType:l0,setter:Ee(A0,h0),setterContext:m0})},J:function(E,g){S(E,{isVoid:!0,name:g=Y0(g),argPackAdvance:0,fromWireType:function(){},toWireType:function(R,G){}})},m:function(E,g,R){const G=x;E=St(E),g=ii(g,"emval::as");var t0=[],Q=e2(t0);return N[R>>2]=Q,g[G(1850)](t0,E)},s:function(E,g,R,G){(E=ki[E])(g=St(g),R=ai(R),null,G)},b:Ki,y:function(E){return E===0?e2(Za()):(E=ai(E),e2(Za()[E]))},p:function(E,g){const R=x;for(var G=function(rx,yx){const xe=C0;for(var re=new Array(rx),Nx=0;Nx<rx;++Nx)re[Nx]=ii(N[(yx>>2)+Nx],xe(586)+Nx);return re}(E,g),t0=G[0],Q=t0.name+"_$"+G[R(3403)](1).map(function(rx){return rx[R(3085)]})[R(2243)]("_")+"$",l0=[R(748)],A0=[t0],h0="",m0=0;m0<E-1;++m0)h0+=(m0!==0?", ":"")+R(3731)+m0,l0[R(2583)]("argType"+m0),A0[R(2583)](G[1+m0]);var B0=R(2729)+o0(R(3926)+Q)+R(2852),V0=0;for(m0=0;m0<E-1;++m0)B0+=R(2052)+m0+" = argType"+m0+R(3286)+(V0?"+"+V0:"")+R(1879),V0+=G[m0+1][R(1226)];for(B0+="    var rv = handle[name]("+h0+R(1879),m0=0;m0<E-1;++m0)G[m0+1][R(2259)]&&(B0+="    argType"+m0+R(985)+m0+R(1879));t0[R(1373)]||(B0+=R(2946)),B0+=R(3242),l0[R(2583)](B0);var k0,X0,J0=Ya(Function,l0)[R(517)](null,A0);return k0=J0,X0=ki.length,ki[R(2583)](k0),X0},r:function(E){return E=ai(E),e2(n[E])},e:function(E,g){return e2((E=St(E))[g=St(g)])},g:function(E){E>4&&(de[E].refcount+=1)},q:function(E,g,R,G){E=St(E);var t0=Qa[g];return t0||(t0=function(Q){const l0=C0;for(var A0="",h0=0;h0<Q;++h0)A0+=(h0!==0?", ":"")+"arg"+h0;var m0=l0(467)+Q+l0(1949);for(h0=0;h0<Q;++h0)m0+="var argType"+h0+l0(734)+h0+'], "parameter '+h0+l0(3564)+h0+l0(3457)+h0+l0(1888)+h0+l0(1251);return m0+=l0(2178)+A0+`);
return __emval_register(obj);
}
`,new Function(l0(2586),l0(639),l0(3400),m0)(ii,n,e2)}(g),Qa[g]=t0),t0(E,R,G)},f:function(E){return e2(ai(E))},l:function(E){const g=x;$(de[E][g(2976)]),Ki(E)},o:function(){H0()},E:function(E,g,R){z[x(947)](E,g,g+R)},F:function(E){const g=x;var R,G,t0=z.length,Q=2147483648;if((E>>>=0)>Q)return!1;for(var l0=1;l0<=4;l0*=2){var A0=t0*(1+.2/l0);if(A0=Math[g(1803)](A0,E+100663296),Kr(Math[g(1803)](Q,((R=Math.max(E,A0))%(G=65536)>0&&(R+=G-R%G),R))))return!0}return!1},G:function(E){return 0},C:function(E,g,R,G,t0){},z:function(E,g,R,G){const t0=x;for(var Q=0,l0=0;l0<R;l0++){for(var A0=N[g+8*l0>>2],h0=N[g+(8*l0+4)>>2],m0=0;m0<h0;m0++)ni[t0(3490)](E,z[A0+m0]);Q+=h0}return N[G>>2]=Q,0},D:function(E){}};(function(){const E=x;var g={a:kr};function R(Q,l0){const A0=C0;var h0,m0=Q[A0(3660)];n.asm=m0,xx((B=n[A0(2286)].K).buffer),y0=n[A0(2286)].O,h0=n[A0(2286)].L,j0[A0(3355)](h0),function(B0){const V0=A0;if(ix--,n.monitorRunDependencies&&n[V0(1026)](ix),ix==0&&ax){var k0=ax;ax=null,k0()}}()}function G(Q){R(Q[C0(603)])}function t0(Q){const l0=C0;return function(){const A0=C0;if(!b&&(c||f)){if(typeof fetch=="function"&&!L(U))return fetch(U,{credentials:A0(3644)}).then(function(h0){const m0=A0;if(!h0.ok)throw m0(2884)+U+"'";return h0[m0(1629)]()})[A0(3239)](function(){return K(U)});if(C)return new Promise(function(h0,m0){C(U,function(B0){h0(new Uint8Array(B0))},m0)})}return Promise.resolve()[A0(4167)](function(){return K(U)})}()[l0(4167)](function(A0){return WebAssembly[l0(2909)](A0,g)})[l0(4167)](Q,function(A0){M("failed to asynchronously prepare wasm: "+A0),H0(A0)})}if(ix++,n.monitorRunDependencies&&n[E(1026)](ix),n[E(1443)])try{return n.instantiateWasm(g,R)}catch(Q){return M(E(4122)+Q),!1}(b||typeof WebAssembly.instantiateStreaming!="function"||nx(U)||L(U)||typeof fetch!="function"?t0(G):fetch(U,{credentials:E(3644)})[E(4167)](function(Q){const l0=E;return WebAssembly[l0(3321)](Q,g)[l0(4167)](G,function(A0){const h0=l0;return M(h0(941)+A0),M(h0(4001)),t0(G)})}))[E(3239)](r)})(),n[x(1974)]=function(){const E=x;return(n[E(1974)]=n[E(2286)].L)[E(517)](null,arguments)};var ri,Wi=n[x(1187)]=function(){const E=x;return(Wi=n[E(1187)]=n[E(2286)].M).apply(null,arguments)},t2=n[x(2220)]=function(){const E=x;return(t2=n[E(2220)]=n.asm.N)[E(517)](null,arguments)},$a=n[x(526)]=function(){return($a=n.___getTypeName=n.asm.P).apply(null,arguments)};function Wr(E){const g=x;this[g(3085)]=g(2631),this[g(2362)]=g(1952)+E+")",this[g(2240)]=E}function Xi(E){const g=x;function R(){const G=C0;ri||(ri=!0,n[G(3231)]=!0,w||(k(j0),k(tx),a(n),n[G(1698)]&&n[G(1698)](),function(){const t0=G;if(n[t0(2707)])for(t0(1355)==typeof n.postRun&&(n.postRun=[n[t0(2707)]]);n[t0(2707)][t0(3650)];)Q=n[t0(2707)][t0(1523)](),v0[t0(3355)](Q);var Q;k(v0)}()))}ix>0||(function(){const G=C0;if(n.preRun)for(G(1355)==typeof n.preRun&&(n[G(3838)]=[n[G(3838)]]);n.preRun[G(3650)];)t0=n[G(3838)].shift(),W0[G(3355)](t0);var t0;k(W0)}(),ix>0||(n[g(3695)]?(n[g(3695)]("Running..."),setTimeout(function(){setTimeout(function(){n[C0(3695)]("")},1),R()},1)):R()))}if(n.___embind_register_native_and_builtin_types=function(){const E=x;return(n[E(3668)]=n[E(2286)].Q)[E(517)](null,arguments)},n[x(1385)]=function(){const E=x;return(n.dynCall_jiji=n[E(2286)].R)[E(517)](null,arguments)},ax=function E(){ri||Xi(),ri||(ax=E)},n[x(3722)]=Xi,n.preInit)for(typeof n[x(2765)]=="function"&&(n.preInit=[n.preInit]);n[x(2765)][x(3650)]>0;)n[x(2765)][x(1526)]()();return Xi(),e[x(2266)]},U1=Object[o(921)]({__proto__:null,default:V1});s0[o(2671)]=ar,s0[o(1296)]=Ft,s0[o(3699)]=js,s0[o(3679)]=Pi,s0.BlockCacheNode=Na,s0.BlockImagery=bh,s0[o(2454)]=Ix,s0[o(605)]=Lh,s0[o(3837)]=Px,s0.ColorTable=I2,s0[o(870)]=$x,s0[o(3891)]=P0,s0[o(1102)]=Me,s0[o(1309)]=r2,s0[o(1814)]=v2,s0[o(1576)]=lx,s0[o(1573)]=Si,s0[o(3114)]=u2,s0[o(1699)]=Y2,s0[o(3569)]=ot,s0[o(2928)]=Ia,s0[o(2732)]=Ec,s0.FlyManager=bt,s0.FlyTurningMode=vr,s0[o(1685)]=Xs,s0[o(2761)]=Ws,s0[o(738)]=Tl,s0.GlobeSurfaceShaderSetExt=Bl,s0[o(1376)]=wl,s0[o(4079)]=Gl,s0[o(1943)]=Da,s0.HypsometricSetting=k2,s0.HypsometricSettingEnum=Ti,s0[o(2394)]=va,s0[o(2021)]=Se,s0[o(2709)]=Yt,s0[o(1574)]=gr,s0[o(2379)]=Ue,s0[o(4093)]=Sa,s0.MaterialPass=Ht,s0[o(615)]=vt,s0[o(3975)]=fe,s0[o(1977)]=Sx,s0[o(3024)]=Aa,s0[o(2114)]=Hs,s0[o(1829)]=Gs,s0.ModifyRegionMode=Fa,s0[o(4153)]=We,s0[o(2897)]=L2,s0[o(1153)]=me,s0[o(3872)]=ue,s0.PBRMaterialType=Ls,s0[o(3174)]=lt,s0[o(3591)]=p1,s0.PostProcessStageSnow=y1,s0[o(3023)]=E0,s0.ProjectionImage=Ge,s0[o(1140)]=jr,s0[o(3832)]=Kl,s0[o(4128)]=Xl,s0[o(2992)]=$l,s0.Rain=Oc,s0[o(3956)]=ut,s0[o(873)]=Xt,s0[o(2777)]=oc,s0[o(551)]=rc,s0[o(1670)]=xf,s0[o(3325)]=j2,s0[o(2751)]=E1,s0.RegionFragment=P1,s0[o(3391)]=w1,s0[o(1828)]=S1,s0[o(3364)]=ux,s0[o(903)]=Ei,s0[o(3643)]=$e,s0[o(1290)]=Qt,s0.RouteStop=Ze,s0[o(3728)]=Ut,s0.S3MBVertexTagV3=er,s0[o(3088)]=qe,s0[o(2725)]=Ma,s0[o(1118)]=tr,s0[o(1346)]=Ve,s0[o(1834)]=rf,s0[o(2062)]=nr,s0[o(1383)]=rr,s0.S3MCreateIndexJob=pa,s0[o(3481)]=_a,s0[o(3125)]=ba,s0.S3MDracoDecode=ce,s0.S3MEdgeProcessor=Lx,s0[o(2949)]=n2,s0[o(2991)]=fr,s0[o(3997)]=A2,s0[o(2157)]=Wt,s0[o(3665)]=De,s0[o(1786)]=ks,s0.S3MPointCloudRenderEntity=y2,s0.S3MPointCloudVS=Ks,s0[o(3637)]=le,s0[o(4096)]=Jx,s0.S3MTilesBillboardPixelSizeVp=qs,s0[o(2432)]=Js,s0[o(1094)]=Us,s0[o(1769)]=Ys,s0[o(2738)]=$0,s0[o(3409)]=As,s0[o(1956)]=vs,s0[o(765)]=Vs,s0[o(804)]=_2,s0[o(3714)]=xr,s0.S3ModelParser=Qn,s0.SCTTerrainProvider=At,s0[o(3305)]=ya,s0.ShaderChunk=Ds,s0.SightWideLineFS=to,s0[o(3087)]=eo,s0[o(1789)]=we,s0[o(3603)]=_e,s0.SkylineFp=_n,s0.SkylineVp=yn,s0.Snow=Nc,s0[o(2853)]=w2,s0[o(2143)]=da,s0[o(2054)]=be,s0[o(3123)]=Ta,s0.SuperMapImageryProvider=qt,s0[o(3349)]=mt,s0.TextOverlapInfo=mx,s0[o(2058)]=La,s0[o(4144)]=T2,s0[o(1323)]=cx,s0[o(4054)]=Ke,s0[o(1600)]=Ao,s0.ViewShedAnalysisVS=qi,s0[o(2107)]=fx,s0[o(1299)]=J,s0[o(2390)]=ws,s0[o(1725)]=Qx,s0[o(2017)]=Ms,s0[o(3826)]=Es,s0[o(3978)]=Rs,s0[o(2722)]=Ss,s0[o(996)]=zt,s0[o(965)]=gs,s0[o(592)]=Ps,s0[o(1923)]=Zn,s0[o(634)]=Ts,s0[o(741)]=ys,s0[o(3762)]=_s,s0[o(2912)]=Bs,Object[o(4011)](s0,o(3527),{value:!0})});const HC={__name:"s3m",setup(s0){const{viewer:o}=window;let lx="https://www.supermapol.com/realspace/services/3D-CBD/rest/realspace";return o.scene.open(lx),(me,L2)=>(FC(),OC("div"))}};export{HC as default};
