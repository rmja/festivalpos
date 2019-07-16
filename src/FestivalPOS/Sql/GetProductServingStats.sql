--DECLARE @PeriodStart DateTime = '2019-01-01'
--DECLARE @PeriodEnd DateTime = '2020-01-01'
--DECLARE @TerminalId int = null
--DECLARE @PointOfSaleId int = null
--DECLARE @Kind int = 4

SELECT
	@Kind AS Kind
	,MIN(s.Created) EarliestServingCreated
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
	o.IsDeleted = 0
	AND s.Created >= @PeriodStart AND s.Created < @PeriodEnd
	AND (@TerminalId IS NULL OR o.TerminalId = @TerminalId)
	AND (@PointOfSaleId IS NULL OR o.PointOfSaleId = @PointOfSaleId)
GROUP BY
	 DATEPART(year, s.Created)
	,CASE WHEN @Kind >= 2 THEN DATEPART(month, s.Created) END
	,CASE WHEN @Kind >= 3 THEN DATEPART(day, s.Created) END
	,CASE WHEN @Kind >= 4 THEN DATEPART(hour, s.Created) END
	,ol.ProductId
	,p.Name
ORDER BY
	 EarliestServingCreated
	,ProductName
	,ProductQuantity DESC