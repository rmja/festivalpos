--DECLARE @PeriodStart DateTime = '2019-01-01'
--DECLARE @PeriodEnd DateTime = '2020-01-01'
--DECLARE @TerminalId int = null
--DECLARE @PointOfSaleId int = null
--DECLARE @Kind int = 4

SELECT
	@Kind AS Kind
	,MIN(o.Created) EarliestOrderCreated
	,l.ProductId
	,p.Name AS ProductName
	,SUM(l.Quantity) ProductQuantity
	,COUNT(o.Id) OrderCount
	,SUM(l.Total) Total
FROM
	Orders o
JOIN
	OrderLines l ON o.Id = l.OrderId
JOIN
	Products p ON l.ProductId = p.Id
WHERE
	o.AmountDue = 0
	AND o.Created >= @PeriodStart AND o.Created < @PeriodEnd
	AND (@TerminalId IS NULL OR o.TerminalId = @TerminalId)
	AND (@PointOfSaleId IS NULL OR o.PointOfSaleId = @PointOfSaleId)
GROUP BY
	 DATEPART(year, o.Created)
	,CASE WHEN @Kind >= 2 THEN DATEPART(month, o.Created) END
	,CASE WHEN @Kind >= 3 THEN DATEPART(day, o.Created) END
	,CASE WHEN @Kind >= 4 THEN DATEPART(hour, o.Created) END
	,l.ProductId
	,p.Name
ORDER BY
	 EarliestOrderCreated
	,ProductName
	,Total DESC