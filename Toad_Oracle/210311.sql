SELECT ZDO FROM ZIP_CODE
ORDER BY ZDO ASC

SELECT DISTINCT(ZDO) FROM ZIP_CODE --중복 제거 DISTINCT
ORDER BY ZDO ASC

SELECT '전체' ZDO FROM DUAL
UNION ALL
SELECT DISTINCT(ZDO) FROM ZIP_CODE
ORDER BY ZDO ASC
------------------------------------------------------------

SELECT
    ZIPCODE AS "우편번호", ADDRESS AS "주소"
  FROM ZIP_CODE
  WHERE DONG LIKE :X||'%'