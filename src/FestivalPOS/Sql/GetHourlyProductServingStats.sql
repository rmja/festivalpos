--DECLARE @Year int = 2019
--DECLARE @TerminalId int = null
--DECLARE @PointOfSaleId int = null

SELECT
	 MIN(s.Created) EarliestServingCreated
	,ol.ProductId
	,p.Name AS ProductName
	,SUM(sl.Quantity) ProductQuantity
	,COUNT(s.Id) ServingCount
FROM
	Servings s
JOIN
	Orders o ON s.OrderId = o.Id
JOIN
	ServingLines sl ON s.Id = sl.ServingId
JOIN
	OrderLines ol ON sl.OrderLineId = ol.Id
JOIN
	Products p ON ol.ProductId = p.Id
WHERE
	DATEPART(year, s.Created) = @Year
	AND (@TerminalId IS NULL OR o.TerminalId = @TerminalId)
	AND (@PointOfSaleId IS NULL OR o.PointOfSaleId = @PointOfSaleId)
GROUP BY
	 DATEPART(year, s.Created)
	,DATEPART(month, s.Created)
	,DATEPART(day, s.Created)
	,DATEPART(hour, s.Created)
	,ol.ProductId
	,p.Name
ORDER BY
	 EarliestServingCreated
	,ol.ProductId
	,p.Name