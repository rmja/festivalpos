--DECLARE @PeriodStart DateTime = '2019-01-01'
--DECLARE @PeriodEnd DateTime = '2020-01-01'
--DECLARE @TerminalId int = null
--DECLARE @PointOfSaleId int = null
--DECLARE @Kind int = 4
--DECLARE @HourOffset int = 2

SELECT
	@Kind AS Kind
	,MIN(DATEADD(hour, @HourOffset, s.Created)) EarliestServingCreated
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
	AND DATEADD(hour, @HourOffset, s.Created) >= @PeriodStart AND DATEADD(hour, @HourOffset, s.Created) < @PeriodEnd
	AND (@TerminalId IS NULL OR o.TerminalId = @TerminalId)
	AND (@PointOfSaleId IS NULL OR o.PointOfSaleId = @PointOfSaleId)
GROUP BY
	 DATEPART(year, DATEADD(hour, @HourOffset, s.Created))
	,CASE WHEN @Kind >= 2 THEN DATEPART(month, DATEADD(hour, @HourOffset, s.Created)) END
	,CASE WHEN @Kind >= 3 THEN DATEPART(day, DATEADD(hour, @HourOffset, s.Created)) END
	,CASE WHEN @Kind >= 4 THEN DATEPART(hour, DATEADD(hour, @HourOffset, s.Created)) END
	,ol.ProductId
	,p.Name
ORDER BY
	 EarliestServingCreated
	,ProductName
	,ProductQuantity DESC