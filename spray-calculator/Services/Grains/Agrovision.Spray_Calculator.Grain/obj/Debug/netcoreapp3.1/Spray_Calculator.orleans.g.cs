// <auto-generated />
#if !EXCLUDE_GENERATED_CODE
#pragma warning disable 162
#pragma warning disable 219
#pragma warning disable 414
#pragma warning disable 618
#pragma warning disable 649
#pragma warning disable 693
#pragma warning disable 1591
#pragma warning disable 1998
using global::Orleans;

[assembly: global::Orleans.Metadata.FeaturePopulatorAttribute(typeof(OrleansGeneratedCode.OrleansCodeGen31c8b6579eFeaturePopulator))]
[assembly: global::Orleans.CodeGeneration.OrleansCodeGenerationTargetAttribute("Spray_Calculator, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"), global::Orleans.CodeGeneration.OrleansCodeGenerationTargetAttribute("BusinessLogic.Dosage_Calculator, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null")]
namespace OrleansGeneratedCode
{
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("OrleansCodeGen", "2.0.0.0")]
    internal sealed class OrleansCodeGen31c8b6579eFeaturePopulator : global::Orleans.Metadata.IFeaturePopulator<global::Orleans.Metadata.GrainInterfaceFeature>, global::Orleans.Metadata.IFeaturePopulator<global::Orleans.Metadata.GrainClassFeature>, global::Orleans.Metadata.IFeaturePopulator<global::Orleans.Serialization.SerializerFeature>
    {
        public void Populate(global::Orleans.Metadata.GrainInterfaceFeature feature)
        {
        }

        public void Populate(global::Orleans.Metadata.GrainClassFeature feature)
        {
            feature.Classes.Add(new global::Orleans.Metadata.GrainClassMetadata(typeof(global::Spray_Calculator.BaseGrain)));
            feature.Classes.Add(new global::Orleans.Metadata.GrainClassMetadata(typeof(global::Spray_Calculator.Dosage_CalculatorGrain)));
        }

        public void Populate(global::Orleans.Serialization.SerializerFeature feature)
        {
            feature.AddKnownType("Spray_Calculator.BaseGrain,Spray_Calculator", "Spray_Calculator.BaseGrain");
            feature.AddKnownType("Spray_Calculator.Dosage_CalculatorGrain,Spray_Calculator", "Spray_Calculator.Dosage_CalculatorGrain");
            feature.AddKnownType("BusinessLogic.Dosage_Calculator.Interfaces.IDosage_CalculatorBL,BusinessLogic.Dosage_Calculator", "BusinessLogic.Dosage_Calculator.Interfaces.IDosage_CalculatorBL");
            feature.AddKnownType("BusinessLogic.Dosage_Calculator.Services.Dosage_Calculator,BusinessLogic.Dosage_Calculator", "BusinessLogic.Dosage_Calculator.Services.Dosage_Calculator");
        }
    }
}
#pragma warning restore 162
#pragma warning restore 219
#pragma warning restore 414
#pragma warning restore 618
#pragma warning restore 649
#pragma warning restore 693
#pragma warning restore 1591
#pragma warning restore 1998
#endif
